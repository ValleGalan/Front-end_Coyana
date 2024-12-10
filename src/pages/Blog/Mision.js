import React from 'react';
  
const Mision = () => {
 
  return (
    <section className="text-black-800">
      <div className="mx-auto px-6 py-16">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-center text-black-900 mb-6">
          Nuestra Misión
        </h1>
        <p className="text-lg text-center text-black-600 mb-12">
          Transformar vidas y comunidades a través de la excelencia, la dedicación y el impacto positivo.
        </p>

        {/* Sección con texto e imagen */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400"
              alt="Misión en acción"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 text-lg text-black-700">
            <h2 className="text-2xl font-semibold mb-4">Compromiso con el Futuro</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque interdum, justo at
              varius congue, risus felis eleifend turpis, eget ultricies justo risus a erat. Nullam
              id nisi ac elit vehicula ultricies nec in augue.
            </p>
            <p className="mb-4">
              Phasellus volutpat est nec velit congue, et suscipit lectus fermentum. Nunc faucibus
              tincidunt lorem, in consequat urna fermentum in. Integer accumsan tincidunt ligula.
            </p>
          </div>
        </div>

        {/* Sección de valores destacados */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black-800 mb-4">Innovación</h3>
            <p className="text-black-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black-800 mb-4">Colaboración</h3>
            <p className="text-black-600">
              Vivamus sagittis risus eu felis fermentum, vel tincidunt nisl congue.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-black-800 mb-4">Sostenibilidad</h3>
            <p className="text-black-600">
              Ut et turpis tincidunt, accumsan tortor sit amet, tincidunt justo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mision;