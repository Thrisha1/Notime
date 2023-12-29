// src/components/TodoList.js

import React, { useState, useEffect } from "react";
import supabase from "../../supabase/supaBase";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const { data, error } = await supabase
        .from("todos")
        .select("*")
        .order("created_at", { ascending: false });

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
        .upsert([{ task_name: newTask }]);

      if (error) {
        throw error;
      }

      setTasks([...tasks, data[0]]);
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
    <div className="h-screen">
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.task_name}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => {
            console.log(e.target.value);
            setNewTask(e.target.value);
          }}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;
