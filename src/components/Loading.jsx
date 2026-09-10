function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>

        <p className="text-lg font-semibold text-gray-700">
          Cargando personajes...
        </p>
      </div>
    </div>
  );
}

export default Loading;