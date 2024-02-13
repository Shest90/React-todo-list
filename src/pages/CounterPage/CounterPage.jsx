import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { addBy, decrement, increment } from "../../store/counterSlice";

import s from "./CounterPage.module.scss";

function CounterPage() {
  const dispatch = useDispatch(); // send
  const { count } = useSelector((state) => state.counter); // getter

  const handleIncrement = () => {
    dispatch({payload: undefined, type: "counter/increment"});
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleAddByTen = () => {
    dispatch(addBy(10));
  };

  return (
    <div>
      <div>{count}</div>
      <div>
        <button
          type="button"
          style={{ padding: "20px", margin: "20px" }}
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          style={{ padding: "20px", margin: "20px" }}
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          style={{ padding: "20px", margin: "20px" }}
          onClick={handleAddByTen}
        >
          +10
        </button>
      </div>
    </div>
  );
}

export default CounterPage;
