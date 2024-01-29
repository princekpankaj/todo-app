
import { useState } from "react";
import AddTodoForm from "./Components/AddTodoForm";
import TodoList from "./Components/TodoList";
import AboutPage from "./Components/AboutPage";
import CompletedPage from "./Components/CompletePage";
import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Complete Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Read Book",
      completed: true,
    },
    {
      id: "3",
      title: "Write Code",
      completed: true,
    },
  ]);

  const [currentPage, setCurrentPage] = useState("todo");

  function addTodo(newTodo) {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  }

  function toggleCompleted(id) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return { ...todo };
        }
      })
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function updateTitle(id, title) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, title: title };
        } else {
          return { ...todo };
        }
      })
    );
  }

  let currentPageContent;
  if (currentPage === "todo") {
    currentPageContent = (
      <>
        <AddTodoForm addTodo={addTodo} />
        <TodoList
          todos={todos}
          deleteTodo={deleteTodo}
          toggleCompleted={toggleCompleted}
          updateTitle={updateTitle}
        />
        {todos.length > 0 && (
          <button
            className={styles.clearAllTodosBtn}
            onClick={() => {
              setTodos([]);
            }}
          >
            Clear All Todos
          </button>
        )}
      </>
    );
  } else if (currentPage === "about") {
    currentPageContent = <AboutPage />;
  } else if (currentPage === "completed") {
    currentPageContent = <CompletedPage todos={todos} />;
  }

  return (
    <>
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className={styles.App}>
        <h1 className={styles.heading}>Todo App</h1>
        <nav className={styles.nav}>
          <button onClick={() => setCurrentPage("todo")}>Todo</button>
          <button onClick={() => setCurrentPage("about")}>About</button>
          <button onClick={() => setCurrentPage("completed")}>Completed</button>
        </nav>
        {currentPageContent}
      </div>
    </>
  );
}

export default App;
