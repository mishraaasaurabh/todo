import { useState } from "react";

export default function Home() {
  const [tasks, settasks] = useState([]);
  const [cur, setcur] = useState("");

  function clicker() {
    settasks([...tasks, cur]);
    setcur("");
  }
  function tracker(e) {
    setcur(e.target.value);
  }
  return (
    <div className="flex justify-center pt-8">
      <div>
        <h2 className="text-4xl font-bold text-center">Todo List</h2>
        <div className="pt-2 pb-2">
          <input
            type="text"
            placeholder="Enter Task"
            className="border-2 border-black p-1"
            value={cur}
            onChange={tracker}
          />
          <button
            className="bg-black text-white p-1.5 border-grey-100"
            onClick={clicker}
          >
            Add
          </button>
        </div>
        <div className=" bg-black text-white">
          {tasks.map((task, index) => (
            <div key={index} className="p-2 border-b mb">
              {task}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
