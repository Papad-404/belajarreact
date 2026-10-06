import { useParams } from 'react-router-dom';
import useTodos from '../hooks/useTodos';
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/TodoList';
import TodoSummary from '../components/TodoSummary';


export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

  const currentCategoryName = categoryId
    ? categoryId.toUpperCase()
    : 'GENERAL';

  return (
    <div >
      <header className="border-b border-slate-800 pb-4">
        <h1 className="text-xl font-bold text-slate-700 max-w-lg mx-auto capitalize">
          Kategori: <span className="text-indigo-400">{currentCategoryName}</span>
        </h1>
      </header>

      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-3 space-y-2">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompletedChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>

      <div className="max-w-xl mx-auto">
        <TodoSummary
          todos={todos}
          deleteAllCompleted={deleteAllCompletedTodos}
        />
      </div>
    </div>
  );
}