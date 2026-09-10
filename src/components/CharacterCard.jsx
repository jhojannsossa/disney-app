function CharacterCard({ character }) {
  return (
    <article className="overflow-hidden rounded-xl bg-white shadow-md transition duration-300 hover:scale-105 hover:shadow-xl">
      {character.imageUrl ? (
        <img
          src={character.imageUrl}
          alt={character.name}
          className="h-64 w-full object-cover"
        />
      ) : (
        <div className="flex h-64 w-full items-center justify-center bg-gray-200">
          <p className="text-gray-500">
            Sin imagen
          </p>
        </div>
      )}

      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">
          {character.name}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          ID: {character._id}
        </p>
      </div>
    </article>
  );
}

export default CharacterCard;