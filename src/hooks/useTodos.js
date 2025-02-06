// Hooks
import { useState } from 'react';

export default function useTodos() {
    const [todos, setTodos] = useState(() => {
        const todosJson = localStorage.getItem("todos");
        if (todosJson) {
            const todosParsed = JSON.parse(todosJson);
            return todosParsed;
        } else {
            return [];
        }
    });

    return [todos, setTodos];
}