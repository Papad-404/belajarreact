import { useEffect, useState } from "react";
import { Todo } from "../types/todo";

export default function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  //simpan data ke localStorage, JSON.stringify guna mengubah array jadi string
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  //pakai metode if else, dilihat dri id statusnya, jika complete maka status todo akan diperbarui
  function setTodoCompleted(id: number, completed:boolean) {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => (
      todo.id === id ? {...todo, completed} : todo
    ))
  );
  }

  // buat menambah todo baru
  function addTodo(title: string, categoryId?: string){
    setTodos(prevTodos => [
      {
        id: Date.now(),
        title,
        completed: false,
        categoryId,
      },
      ...prevTodos
    ]);
  }

  //menghapus todo dengan melihat status id. digunakan filter untuk menyaring ulang array
  function deleteTodo (id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }

  function deleteAllCompletedTodos(){
    setTodos(prevTodos => prevTodos.filter(todo => !todo.completed))
  }

  return {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos,
  };
}