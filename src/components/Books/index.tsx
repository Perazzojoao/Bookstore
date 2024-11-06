import SearchBar from "../SearchBar";
import BookList from "./BookList";

const Books = () => {
  return (
    <main className="flex justify-center py-6 sm:p-20">
      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[600px]">
        <h1 className="text-4xl sm:text-6xl font-bold">BookStore</h1>
        <SearchBar />

        <section>
          <h2>Lista de Livros</h2>
          <BookList />
        </section>
      </div>
    </main>
  );
}

export default Books;