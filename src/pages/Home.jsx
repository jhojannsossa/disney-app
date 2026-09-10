import { useEffect, useState } from "react";

import { getCharacters } from "../services/disneyService";

import CharacterCard  from "../components/CharacterCard";
import  Loading  from "../components/Loading";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        setLoading(true);

        const data = await getCharacters();

        setCharacters(data);
      } catch (error) {
        console.error(error);

        setError("No se pudieron cargar los personajes.");
      } finally {
        setLoading(false);
      }
    };

    loadCharacters();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return (
      <main className="flex min-h-[50vh] items-center justify-center px-6">
        <div className="rounded-lg bg-red-100 p-6 text-center text-red-700">
          <h2 className="text-xl font-bold">
            Ha ocurrido un error
          </h2>

          <p className="mt-2">
            {error}
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10">

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Personajes Disney
        </h1>

        <p className="mt-3 text-gray-600">
          Explora algunos de los personajes de Disney
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {characters.map((character) => (
          <CharacterCard
            key={character._id}
            character={character}
          />
        ))}

      </div>

    </main>
  );
}

export default Home;