import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "../slice/counterSlice";

function Main() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState("");

  const handleIncrementByAmount = () => {
    const amt = parseInt(amount, 10);
    if (amt) {
      console.log(amt);
      dispatch(incrementByAmount(amt));
      setAmount("");
    }
  };

  return (
    <main className="p-6 overflow-y-auto flex-1">
      <section className="mt-4 bg-base-100 p-6 flex flex-col gap-4">
        <h3 className="text-lg font-semibold">Count : {count}</h3>

        <div className="flex gap-4  flex-col sm:flex-row">
          <button
            className="btn btn-primary"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button className="btn btn-primary" onClick={() => dispatch(reset())}>
            Reset
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 mt-2">
          <input
            type="number"
            placeholder="Increment by amount.."
            className="input input-bordered"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleIncrementByAmount}>
            Increment {amount ? "by " + amount : ""}
          </button>
        </div>
      </section>
    </main>
  );
}

export default Main;
