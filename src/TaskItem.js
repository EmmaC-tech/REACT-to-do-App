//Displays the task’s title, 
// description, and whether it’s done or not

import React from 'react';

const TaskItem = ({ task, onDelete, onToggle }) => {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '12px',
      marginBottom: '10px',
      borderRadius: '6px'
    }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Status: {task.completed ? '✅ Done' : '⏳ Pending'}</p>
      <button onClick={() => onToggle(task.id)}>
        {task.completed ? 'Undo' : 'Mark Complete'}
      </button>
      <button onClick={() => onDelete(task.id)} style={{ marginLeft: '10px', color: 'red' }}>
        ❌ Delete
      </button>
    </div>
  );
};

export default TaskItem;


