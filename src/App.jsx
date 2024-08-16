import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((Blah ,i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-orange-400 to-orange-700 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Todo List</h1>
        
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add your todos.."
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-r-lg hover:bg-blue-600 transition"
            onClick={addTodo}
          >
            Add
          </button>
        </div>

        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 border rounded-lg ${
                todo.completed ? 'bg-green-100 text-green-700 line-through' : 'bg-gray-100 text-gray-700'
              }`}
            >
              <span>{todo.text}</span>
              <div className="flex space-x-2">
                <button
                  className={`px-3 py-1 rounded-lg ${
                    todo.completed ? 'bg-green-600 text-white' : 'bg-blue-500 text-white'
                  } hover:bg-opacity-80 transition`}
                  onClick={() => toggleComplete(index)}
                >
                  {todo.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                  onClick={() => deleteTodo(index)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
