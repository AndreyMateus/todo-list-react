// Styles
import styles from "./app.module.css";

// Components
import Todo from './components/todo';
import checklistLogo from "./assets/checklist-logo.gif";

// Hooks
import { useState } from 'react';

// Personalized Hooks
import useTodos from "./hooks/useTodos";

function App() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useTodos();

  return (
    <div className={styles.container}>

      <img src={checklistLogo} alt="checklist de tarefas" className={styles.imgLogo} />

      <div className={styles.containerTodo}>
        {todos.map(todo => (
          <Todo
            key={todo.id}
            id={todo.id}
            checked={todo.checked}
            setTodos={setTodos}
            todosList={todos}
          >{todo.textTodo}</Todo>
        ))}
      </div>

      <form className={styles.form} onSubmit={(e) => {
        e.preventDefault();
        setTodoInput("");

        const newTodo = {
          id: Math.floor(Math.random() * 10000),
          textTodo: todoInput,
          checked: false,
        };

        if (newTodo.textTodo.length > 0) {
          setTodos((todos) => {
            const newListTodo = [newTodo, ...todos];
            localStorage.setItem("todos", JSON.stringify(newListTodo));
            return newListTodo;
          });
        }
      }}>

        <button className={styles.btnAddTodo} onClick={() => {
        }}>Adicionar Tarefa</button>
        <input type="text" value={todoInput} onChange={(e) => {
          setTodoInput(e.currentTarget.value);
        }} />
      </form>

    </div >
  );
}

export default App;
