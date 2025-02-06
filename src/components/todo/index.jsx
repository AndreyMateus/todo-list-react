// Styles
import styles from "./style.module.css";

// Components
import Checkbox from "../checkbox";
import copy from "../../assets/copy.png";

export default function Todo({ checked, children, id, setTodos, todosList }) {

    function deleteTodo() {
        const todosNotRemoved = todosList.filter(todo => todo.id !== id);
        setTodos(todosNotRemoved);
        localStorage.setItem("todos", JSON.stringify(todosNotRemoved));
    }

    if (checked) {
        return (
            <div className={styles.container} onDoubleClick={deleteTodo}>
                <Checkbox
                    checked={checked}
                    id={id}
                    setTodos={setTodos}
                />

                <div className={styles.todo}>
                    <span className={styles.checked}>{children}</span>
                    <img
                        src={copy}
                        alt="button copy"
                        className={styles.copy}
                        onClick={() => {
                            window.navigator.clipboard.writeText(children);
                        }} />
                </div>

            </div>
        );
    }

    return (
        <div className={styles.container} onDoubleClick={deleteTodo}>
            <Checkbox
                checked={checked}
                id={id}
                setTodos={setTodos}
                todosList={todosList}
            />
            <div className={styles.todo}>
                {children}
                <img
                    src={copy}
                    alt="button copy"
                    className={styles.copy}
                    onClick={() => {
                        window.navigator.clipboard.writeText(children);
                    }} />
            </div>
        </div>
    );
}