import React, { useState } from 'react';
import AddHabit from './components/AddHabit';
import HabitList from './components/HabitList';
import ProgressBar from './components/ProgressBar';
import './App.css';

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (name) => {
    setHabits([...habits, { id: Date.now(), name, completed: false }]);
  };

  const toggleHabit = (id) => {
    setHabits(
      habits.map((h) =>
        h.id === id ? { ...h, completed: !h.completed } : h
      )
    );
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter((h) => h.id !== id));
  };

  const completed = habits.filter((h) => h.completed).length;
  const percentage =
    habits.length > 0 ? (completed / habits.length) * 100 : 0;

  return (
    <div className="container">
      <h2>Habit Tracker</h2>

      <AddHabit onAdd={addHabit} />

      <HabitList
        habits={habits}
        onToggle={toggleHabit}
        onDelete={deleteHabit}
      />

      <ProgressBar percentage={percentage} />
    </div>
  );
}

export default App;