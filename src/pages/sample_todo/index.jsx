// src/components/TodoList.js

import React, { useState, useEffect } from "react";
import supabase from "../../supabase/supaBase";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    console.log("tasks", tasks);
  }, [tasks]);

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: true });

      if (error) {
        throw error;
      }

      setTasks(data);
    } catch (error) {
      console.error("Error fetching tasks:", error.message);
    }
  };

  const addTask = async () => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .upsert([{ task_name: newTask }])
        .select();

      console.log("Supabase Response:", { data, error });

      // Check if data is truthy before accessing its elements
      if (data && data.length > 0) {
        setTasks((prevTasks) => [...prevTasks, data[data.length - 1]]);
      }

      alert("new task added successfully")
      if (error) {
        throw error;
      }

      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error.message);
    }
  };

  const deleteTask = async (id) => {
    try {
      const { error } = await supabase.from("todos").delete().eq("id", id);

      if (error) {
        throw error;
      }

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Error deleting task:", error.message);
    }
  };

  return (
    <div className="flex flex-col p-10 max-w-md py-20">
      <h1 className="text-3xl mb-20">Todo List</h1>
      <div className="flex justify-between mb-10">
        <input
          className="rounded-lg"
          type="text"
          value={newTask}
          onChange={(e) => {
            setNewTask(e.target.value);
          }}
          placeholder="Task is :"
        />
        <button className="border px-5 py-1 text-lg " onClick={addTask}>Add Task</button>
      </div>
      <ul className="flex flex-col gap-5">
        {tasks.map((task) => (
          <li className="flex justify-between" key={task.id}>
            <h1 className="border px-5 py-1 bg-white rounded-lg text-black text-lg w-max">
              {task.task_name}
            </h1>
            <button className="border px-5 py-1 bg-red-500 text-black rounded-lg text-lg w-max" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
