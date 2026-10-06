import { useParams } from "react-router-dom";
import AddTodoForm from "../components/AddTodoForm";
import TodoList from "../components/TodoList";
import TodoSummary from "../components/TodoSummary";
import useTodos from "../hooks/useTodos";


export default function TodoPage() {
  const {categoryId} = useParams();
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  const filteredTodos = categoryId
  ? todos.filter((todo) => {
    if (categoryId === "uncategorized") {
      // Ambil yang tidak punya categoryId atau yang sengaja diset "uncategorized"
      return !todo.categoryId || todo.categoryId === "uncategorized";
      }
      return todo.categoryId === categoryId;
    })
    : todos;

  const handleAddTodo = (title: string) => {
    addTodo(title, categoryId === "uncategorized" ? undefined : categoryId);
  };

  return (
    <div className="space-y-3">
      <h2 className="text-xl font-bold text-slate-700 max-w-lg mx-auto capitalize">
        {categoryId ? `Category: ${categoryId}` : "All Notes"}
      </h2>

      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-3 space-y-2">
        <AddTodoForm onSubmit={handleAddTodo} />
        <TodoList
          todos={filteredTodos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
      <TodoSummary
        todos={filteredTodos}
        deleteAllCompleted={deleteAllCompletedTodos}
      />
    </div>
  );
}