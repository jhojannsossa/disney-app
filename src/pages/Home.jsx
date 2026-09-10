import { useEffect, useState } from "react";

import { getCharacters } from "../services/disneyService";
import CharacterCard from "../components/CharacterCard";

function Home() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters();

      setCharacters(data);
    };

    loadCharacters();
  }, []);

  return (
    <main>
      <h1 className="text-4xl font-bold text-center mb-8">
        Personajes Disney
    </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </div>
  </main>
);

export default Home;