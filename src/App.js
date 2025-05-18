//the layout that i want it to look like...
//Header to indicate the name of the app
//Task list that displays the tasks, showing the title, description, and completion status of each task.
//TaskItem: Represents each individual task


import React, { useState } from 'react';
import TaskList from './TaskList';

const TEST_DATA = [
  { id: 1, title: "Buy groceries", description: "Milk, eggs, bread", completed: false },
  { id: 2, title: "Read a book", description: "Finish React guide", completed: true },
  { id: 3, title: "Exercise", description: "30 minutes of cardio", completed: false },
];
//Task 1: Move your test data into state//
const App = () => {
  const [list, setList] = useState(TEST_DATA);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') return;


    //Task 2: Implement the create ability
    const newTask = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false
    };

    setList(prev => [...prev, newTask]);
    setTitle('');
    setDescription('');
  };



  //implement the delete ability
  const deleteTask = (id) => {
    setList(prevList => prevList.filter(task => task.id !== id));
  };


  //complete function
  const toggleTaskCompleted = (id) => {
    setList(prevList =>
      prevList.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
// update ability, rendering the task list
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>My To-Do List</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button type="submit">➕ Add Task</button>
      </form>

      <TaskList
        tasks={list}
        onDelete={deleteTask}
        onToggle={toggleTaskCompleted}
      />
    </div>
  );
};

export default App;




// Local:            http://localhost:3001
//On Your Network:  http://192.168.0.38:3001