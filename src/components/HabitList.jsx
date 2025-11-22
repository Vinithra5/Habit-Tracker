// list of habits with checkbox and delete button
import React from 'react';

const HabitList = ({ habits, onToggle, onDelete }) => {
  return (
    <div>
      {habits.map((habit) => (
        <div className="habit-item" key={habit.id}>
          <input
            type="checkbox"
            checked={habit.completed}
            onChange={() => onToggle(habit.id)}
          />

          <span>{habit.name}</span>

          <button onClick={() => onDelete(habit.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default HabitList;

