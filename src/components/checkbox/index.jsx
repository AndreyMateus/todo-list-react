// Styles
import { useState } from "react";
import styles from "./style.module.css";

export default function Checkbox({ checked, setTodos, id, todosList }) {
    const [timeOfPressInput, setTimeofPressInput] = useState(0);

    function handlePress(e) {
        e.preventDefault();

        const referenceTimeOut = setTimeout(() => {
            console.log("cliquei");

            deleteTodo();
        }, 2000);

        setTimeofPressInput(referenceTimeOut);
    }

    function handleLeavePress() {
        console.log("soltei");
        clearTimeout(timeOfPressInput);
    }

    function deleteTodo() {
        const todosNotRemoved = todosList.filter(todo => todo.id !== id);
        setTodos(todosNotRemoved);
        localStorage.setItem("todos", JSON.stringify(todosNotRemoved));
    }

    if (checked) {
        return (
            <input
                type="checkbox"
                className={`${styles.checkbox}`}
                onMouseEnter={handlePress}
                onMouseLeave={handleLeavePress}
                defaultChecked={true}
                onClick={(e) => {
                    // setCheckbox(e.currentTarget.checked);

                    const todos = JSON.parse(localStorage.getItem("todos"));

                    const returnedTodo = todos.filter(todo => todo.id === id);
                    const newStateTodo = {
                        id: returnedTodo[0].id,
                        textTodo: returnedTodo[0].textTodo,
                        checked: !returnedTodo[0].checked,
                    };

                    const newListTodos = todos.filter(todo => todo.id !== id);

                    setTodos(() => [newStateTodo, ...newListTodos]);
                    localStorage.setItem("todos", JSON.stringify([newStateTodo, ...newListTodos]));
                }}
            />
        );
    }

    return (
        <input type="checkbox" className={styles.checkbox}
            onMouseEnter={handlePress}
            onMouseLeave={handleLeavePress}
            onClick={(e) => {
                // setCheckbox(e.currentTarget.checked);

                const todos = JSON.parse(localStorage.getItem("todos"));

                const returnedTodo = todos.filter(todo => todo.id === id);
                const newStateTodo = {
                    id: returnedTodo[0].id,
                    textTodo: returnedTodo[0].textTodo,
                    checked: !returnedTodo[0].checked,
                };

                const newListTodos = todos.filter(todo => todo.id !== id);

                setTodos(() => [...newListTodos, newStateTodo]);
                localStorage.setItem("todos", JSON.stringify([...newListTodos, newStateTodo]));
            }}
        />
    );
}