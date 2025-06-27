import { useReducer } from "react";
import "./App.css";

const initialState = {
  name: "",
};

function App() {
  const reducer = (state, action) => {
    switch (action.type) {
      case "FIELD_UPDATE":
        return {
          ...state,
          [action.payload.field]: action.payload.value,
        };
      case "CLEAR":
        return {
          ...state,
          [action.payload.field]: "",
        };
      case "RESET":
        return initialState;
      default:
        return state;
    }
  };

  const [userInfo, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "FIELD_UPDATE",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  const handleClear = (e) => {
    e.preventDefault();
    dispatch({
      type: "CLEAR",
      payload: {
        field: "name", // আপনার কোডে এটা undefined ছিল, এখানে fix করা হয়েছে
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userInfo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            onChange={handleChange}
            value={userInfo.name}
            type="text"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="name-clear">Name (Clear)</label>
          <input
            onChange={handleChange}
            value={userInfo.name}
            type="text"
            name="name"
            id="name-clear"
          />
        </div>

        <button type="button" onClick={() => dispatch({ type: "RESET" })}>
          RESET
        </button>
        <button type="submit">Submit</button>
        <button onClick={handleClear}>Clear</button>
      </form>
    </div>
  );
}

export default App;
