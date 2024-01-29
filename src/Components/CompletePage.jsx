// CompletedPage.jsx
import React from "react";
import Todo from "./Todo";
import styles from "./Complete.module.css"; // Corrected import statement

function CompletedPage({ todos, deleteTodo, toggleCompleted, updateTitle }) {
  // Filter completed todos
  const completedTodos = todos.filter((todo) => todo.completed);

  // Function to handle todo deletion
  const handleDeleteTodo = (id) => {
    deleteTodo(id);
  };

  // Function to handle todo completion toggling
  const handleToggleCompleted = (id) => {
    toggleCompleted(id);
  };

  // Function to update todo title
  const handleUpdateTitle = (id, title) => {
    updateTitle(id, title);
  };

  return (
    <div className={styles.completedContainer}>
      <h1>Completed Todos</h1>
      <div className={styles.completedTodos}>
        {/* Map through completed todos and render Todo component for each */}
        {completedTodos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={handleDeleteTodo}
            toggleCompleted={handleToggleCompleted}
            updateTitle={handleUpdateTitle}
          />
        ))}
      </div>
    </div>
  );
}

export default CompletedPage;

