## Notes Belajar React dengan Project Based

## Timeline:
day 1
Component & JSX Syntax, Conditional Rendering, ReactList
day 2
Usestate & UseEffect, Optimization, Custom Hooks
day 3
Form Submission & Clicks
day 4
Functional Component Lifecycle
day 5
RouterDOM

## cmd:
1. pure react, client-side: npm create vite@latest my-first-react -- --template react
2. react framework, server-side: npx create-next-app@latest
3. tailwind: npm install tailwindcss @tailwindcss/vite 
          npm install -D tailwindcss postcss autoprefixer
4. router : npm install react-router-dom

## Notes:
Object Destructuring = kurung kurawal {}. 
Lazy Initializer = teknik menyerahkan fungsi ke dalam useState (bukan nilai langsung) agar proses perhitungan awal yang berat hanya dijalankan 1 kali saja saat komponen pertama kali dimuat (mount). membungkusnya dalam fungsi () => { ... }

## Pseudocode
- Note 1: Add/Create
FUNGSI TambahItem(TeksBaru):
    JIKA TeksBaru KOSONG:
        BERHENTI / KELUAR

    BUAT ObjekBaru = {
        id: WAKTU_SEKARANG(),
        text: TeksBaru,
        completed: FALSE
    }

// Salin item baru di depan, gabungkan dengan sisa array lama
    UbahState(ArrayLama => [ObjekBaru, SPREAD(ArrayLama)])

- Note 2: Update (contoh, menggunakan .map menelusuri array dan mengubah hanya item yg ID nya cocok)
FUNGSI ToggleSelesai(TargetID):
    UbahState(ArrayLama => 
        UNTUK SETIAP Item DI ArrayLama:
            JIKA Item.id == TargetID:
                KEMBALIKAN ItemBaru DENGAN completed = KEBALIKAN(Item.completed)
            JIKA TIDAK:
                KEMBALIKAN ItemLama DENGAN TANPA PERUBAHAN
    )

- Note 3: Delete (contoh, pake .filter)
FUNGSI HapusItem(TargetID):
    UbahState(ArrayLama => 
        MEMFILTER ArrayLama DIMANA (Item.id TIDAK SAMA DENGAN TargetID)
    )

- Note 4: Side Effect (contoh, local storage)
// Inisialisasi dulu
STATE Todos = FUNGSI_INISIALISASI():
    Ambil DataTersimpan DARI LocalStorage("KEY_TODOS")
    JIKA DataTersimpan ADA:
        KEMBALIKAN DataTersimpan
    JIKA TIDAK ADA:
        KEMBALIKAN DataDefault

// Simpan otomatis (Side Effect)
EFEK_SAMPING(JIKA State Todos BERUBAH):
    SimpanKeLocalStorage("KEY_TODOS", CONVERT_TO_STRING(Todos))


## Syntax
- Multiple Input
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

- Keys
const numbers = [1, 2, 3, 4, 5];
const updatedNums = numbers.map((number, index) =>
    <li key={index}>
        {number}
    </li>
);

- State hook
const [state, setState] = useState(initialState);


## Progress Hasil Belajar React JS (Tutorial Coding in Flow)
Tech Stack: React JS, Vite, TypeScript, Tailwind CSS

Konsep yang Sudah Dipelajari & Diterapkan:
1. React Setup (Vite + TypeScript + Tailwind CSS).
2. Declarative Programming & Unidirectional Data Flow (Props & Callback Props).
3. State & Form Handling (useState & Controlled Input).
4. Derived State & Conditional Rendering (Filtering & Dynamic Tailwind Class).
5. Side Effects & Storage (useEffect + LocalStorage Persistence).
6. Clean Code Architecture (Komposisi Komponen & Custom Hook 'useTodos').


## Custom Hook
Mengelola logika data, sinkronisasi data ke local storage, fungsi manipulasi data (add, toggle status completed, delete, clear all delete)
## Komposisi Komponen
1. Komponen Form
form pembuatan todo list baru, validasi teks (mencegah submit kosong),mengkosongkan kolom setelah input berhasil dimasukkan)
2. Komponen Daftar Utama
rendering item, logika sorting


Hasil Project: Aplikasi Todo List Sederhana 
Fitur: Create, Toggle Complete, Delete, Storage Persistence.