// form to add a new habit
import React, { useState } from 'react';

const AddHabit = ({ onAdd }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a habit"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddHabit;

