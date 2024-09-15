import React, { useEffect, useState } from "react";
import Lists from "./Lists";
import axios from "axios";
import { baseURL } from "../utils/constant";
import { toast } from "react-hot-toast";

const FAQ = () => {

  const ls = [{
    key: "kjfnwe",
    id: "task._id",
    task: "my name is sarthak sood",
    setUpdateUI: "setUpdateUI",
    updateMode: "updateMode"
  }
  ]
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateId, setUpdateId] = useState(null);



  return (
    <div className="bg-custom-gradient h-screen flex flex-col justify center items-center font-sakal">
      <div className="font-bold text-[#FFFFFF] text-[3rem] flex pt-10 items-center justify-center">
        FAQ SECTION
      </div>
      <div className="flex justify-center items-center pt-10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="rounded-lg w-[20rem] h-10 p-4 text-xl"
          placeholder="Type Input"
        />
        <button
          className="rounded-lg bg-[#FFE5C2] font-bold text-black py-2 px-5 ml-5 text-xl"
          type="submit"
          // onClick={updateId ? updateTask : addTask}
        >
          {/* {updateId ? "update" : "Create"} */}
        </button>
      </div>
      <div className="grid grid-rows-3 grid-flow-col pt-10">
        {/* {faqs.map((element) => {
            <Lists
        })} */}
        {ls.map((task) => (
          <Lists
            key={task._id}
            id={task._id}
            task={task.task}
            // setUpdateUI={setUpdateUI}
            // updateMode={updateMode}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
