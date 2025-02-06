// Styles
import styles from "./style.module.css";

export default function Checkbox({ checked, setTodos, id }) {

    if (checked) {
        return (
            <input
                type="checkbox"
                className={`${styles.checkbox}`}
                defaultChecked={true}
                onClick={(e) => {

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
            onClick={(e) => {

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