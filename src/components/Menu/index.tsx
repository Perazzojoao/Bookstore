import Link from "next/link";
import SearchBar from "./SearchBar";
import Novidades from "./Novidades";

const Menu = () => {
  return (
    <main className="flex justify-center py-6 sm:p-20">
      <div className="flex flex-col justify-center items-center gap-4 w-full max-w-[600px]">
        <h1 className="text-4xl sm:text-6xl font-bold">BookStore</h1>
        <SearchBar />

        <section className="mt-16 flex flex-col gap-3 px-4 py-6 w-full justify-center items-center bg-[url('/Background/Background.png')] bg-cover bg-center h-[171px]">
          <h2 className="font-semibold text-3xl sm:text-5xl">Buscar por categoria</h2>
          <Link href="/category/aventura" className="rounded-lg px-12 py-2 bg-zinc-200 text-zinc-800 hover:bg-zinc-400 ease-in-out font-semibold">Cique aqui!</Link>
        </section>

        <section className="flex flex-col gap-5 justify-center items-center px-2 sm:px-4 pt-6 pb-14 bg-gradient-to-b from-green-600 w-full mt-14">
          <h3 className="text-2xl">Confira as Novidades</h3>
          <Novidades />
        </section>
      </div>
    </main>
  );
}

export default Menu;