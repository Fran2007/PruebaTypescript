import { useFetch } from "../hooks/useFetch";
import ImgNeko from "./ImgNeko";
import IsLoading from "./IsLoading";

interface Item {
  url: string;
}

export default function Nekos() {
  const { data, fetchData, loading } = useFetch("https://nekos.best/api/v2/neko");
  return (
    <main className="mt-10">
      <section className="bg-gray-950 p-4 mb-10 mx-10 rounded-lg shadow-lg">
        <h1 className="text-gray-400 text-center text-2xl md:text-6xl font-bold mb-10">Dale Click al botón para generar imagenes de anime 😉</h1>
        <div className="flex justify-center items-center w-full mx-auto mb-10">
          <button
            onClick={fetchData}
            className="bg-indigo-600 hover:bg-indigo-800 transition-colors px-2 py-4 text-center text-white font-bold rounded-lg">
            Generate gifts</button>
        </div>
      </section>
      <section className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {loading ? <IsLoading /> : data?.map((item: Item, id) => (
          <ImgNeko key={id} item={item} id={id} />
        ))}
      </section>
    </main>
  )
}
