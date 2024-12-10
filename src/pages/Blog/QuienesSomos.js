import React from 'react';
  
const QuienesSomos = () => {
 
  return (
    <section className="text-black-800">
    <div className="mx-auto px-6 py-16">
      {/* Título principal */}
      <h1 className="text-5xl font-bold text-center text-black-900 mb-6">
        Quiénes Somos
      </h1>
      <p className="text-xl text-center text-black-600 mb-12">
        Descubre nuestra historia, nuestros valores y el equipo que nos impulsa hacia un futuro lleno de posibilidades.
      </p>

      {/* Primera sección: Historia */}
      <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
        <div className="lg:w-1/2">
          <img
            src="https://via.placeholder.com/800x500"
            alt="Nuestra historia"
            className="rounded-lg shadow-xl"
          />
        </div>
        <div className="lg:w-1/2 text-lg text-black-700">
          <h2 className="text-3xl font-semibold mb-6">Nuestra Historia</h2>
          <p className="mb-4">
            Desde nuestros inicios, hemos trabajado con pasión y compromiso para marcar una diferencia significativa
            en nuestra comunidad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a tellus eu nisl
            tincidunt feugiat quis ac libero.
          </p>
          <p className="mb-4">
            Fusce ultrices pharetra eros, vel pharetra enim cursus ac. Phasellus ut lacus quis enim sollicitudin
            gravida. Suspendisse volutpat orci ac sapien placerat feugiat.
          </p>
        </div>
      </div>

      {/* Segunda sección: Valores y equipo */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-10 mb-16">
        <div className="lg:w-1/2 text-lg text-black-700">
          <h2 className="text-3xl font-semibold mb-6">Nuestros Valores</h2>
          <p className="mb-4">
            En el corazón de nuestra organización están nuestros valores: integridad, colaboración y un enfoque
            constante hacia la innovación. Estos principios guían todo lo que hacemos y nos inspiran a alcanzar
            nuevas alturas.
          </p>
          <ul className="list-disc pl-5 mb-4">
            <li className="mb-2">Integridad como base de todas nuestras acciones.</li>
            <li className="mb-2">Colaboración con nuestra comunidad y nuestros socios.</li>
            <li>Innovación constante para superar los desafíos del futuro.</li>
          </ul>
        </div>
        <div className="lg:w-1/2">
          <img
            src="https://via.placeholder.com/800x500"
            alt="Nuestros valores"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Tercera sección: Nuestro equipo */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Nuestro Equipo</h2>
        <p className="text-center text-black-600 mb-10">
          Conformado por personas apasionadas y talentosas, nuestro equipo es la fuerza detrás de nuestra misión y visión.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Ejemplo de miembro del equipo */}
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Miembro del equipo"
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold">Nombre Apellido</h3>
            <p className="text-black-600">Cargo o puesto</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Miembro del equipo"
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold">Nombre Apellido</h3>
            <p className="text-black-600">Cargo o puesto</p>
          </div>
          <div className="text-center">
            <img
              src="https://via.placeholder.com/300x300"
              alt="Miembro del equipo"
              className="rounded-full mx-auto mb-4 shadow-lg"
            />
            <h3 className="text-xl font-bold">Nombre Apellido</h3>
            <p className="text-black-600">Cargo o puesto</p>
          </div>
        </div>
      </div>

      {/* Sección final: Compromiso */}
      <div className="bg-black-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center mb-6">
          Nuestro Compromiso
        </h2>
        <p className="text-lg text-center text-black-700">
          Continuamos comprometidos con el crecimiento sostenible, la inclusión y la excelencia. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Nulla vehicula urna id tellus vehicula, a pellentesque nisl fermentum.
        </p>
      </div>
    </div>
  </section>
  );
};

export default QuienesSomos;