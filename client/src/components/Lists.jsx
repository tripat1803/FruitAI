import axios from "axios";
import React from "react";
import { baseURL } from "../utils/constant";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { toast } from "react-hot-toast";

const Lists = ({ id, task, setUpdateUI, updateMode }) => {
  const removeTask = () => {
    axios.delete(`${baseURL}/${id}`).then((res) => {
      console.log(res);
      setUpdateUI((prev) => !prev);
      toast.success("Deleted Successfully")
    });
  };

  return (

    <div className="rounded-lg bg-[#EAEFEBCC] px-10 py-6 m-3">
      <div className="flex flex-col">
        <div className="my-2 text-2xl md:text-xl">{task}</div>
        <div className="flex flex-row justify-end gap-5">
          <button onClick={() => updateMode(id, task)}>
            <MdOutlineEdit />
          </button>
          <button onClick={removeTask}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Lists;
