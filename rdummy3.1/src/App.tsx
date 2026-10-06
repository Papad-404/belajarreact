import { Routes, Route, NavLink } from "react-router-dom";
import TodoPage from "./pages/TodoPage";

function App() {

  const navStyle = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-3 px-3 py-2 rounded-md font-medium transition-colors ${
      isActive
        ? "bg-slate-300 text-slate-900 font-semibold"
        : "text-slate-700 hover:bg-slate-200"
    }`;

  return (
    <div className="flex h-screen bg-white text-slate-800 overflow-hidden">
      <aside className="w-60 bg-slate-100 border-r border-slate-200 p-5 flex flex-col justify-between">
        <div>
          <nav>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mb-2">
              Navigasi Utama
            </p>
            <NavLink to="/" className={navStyle}>
              All Note
            </NavLink>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-2 mt-6 mb-2">
              Kategori
            </p>
            <NavLink to="/category/work" className={navStyle}>
              Work
            </NavLink>
            <NavLink to="/category/personal" className={navStyle}>
              Personal
            </NavLink>
            <NavLink to="/category/study" className={navStyle}>
              Study
            </NavLink>
            <NavLink to="/category/uncategorized" className={navStyle}>
              Uncategorized
            </NavLink>
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8 overflow-y-auto [scrollbar-gutter:stable]">
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/category/:categoryId" element={<TodoPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;