function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">

      <section className="rounded-2xl bg-white p-8 shadow-md">

        <h1 className="text-4xl font-bold text-gray-900">
          Sobre mí
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600">
          Hola, soy desarrollador web freelance.
          Me especializo en la creación de aplicaciones
          web modernas, responsive y funcionales.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-600">
          En este proyecto estoy utilizando React,
          Axios, Tailwind CSS y una API REST para
          mostrar información de personajes Disney.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <p className="font-bold">React</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <p className="font-bold">JavaScript</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <p className="font-bold">Axios</p>
          </div>

          <div className="rounded-lg bg-gray-100 p-4 text-center">
            <p className="font-bold">Tailwind CSS</p>
          </div>

        </div>

      </section>

    </main>
  );
}

export default About;