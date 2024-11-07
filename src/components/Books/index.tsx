import SearchBar from "../SearchBar";
import BookList from "./BookList";

const Books = () => {
  return (
    <main className="flex justify-center py-6 sm:p-20">
      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[600px]">
        <h1 className="text-4xl sm:text-6xl font-bold">BookStore</h1>
        <SearchBar />

        <section className="mt-5 flex flex-col justify-center items-center gap-4">
          <h2 className="text-center font-semibold text-2xl">Lista de Livros</h2>
          <div className="inset-0 bg-gradient-to-r from-transparent via-green-600 to-transparent h-[2px] w-5/6 mb-8"></div>
          <BookList />
        </section>
      </div>
    </main>
  );
}

export default Books;