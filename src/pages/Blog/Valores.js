import React from 'react';
  
const Valores = () => {
 
  return (
    <section className=" text-black">
      <div className="mx-auto px-6 py-16">
        {/* Título principal */}
        <h1 className="text-5xl font-bold text-center mb-8">
          Nuestros Valores
        </h1>
        <p className="text-xl text-center mb-12">
          Los principios que nos guían hacia un impacto positivo y sostenible.
        </p>

        {/* Sección de valores principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Valor 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-anaranjado-color rounded-full text-white">
              <i className="fas fa-handshake text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold mb-4">Integridad</h2>
            <p>
              La transparencia y la honestidad son el núcleo de cada decisión
              que tomamos. Construimos confianza a través de nuestras acciones.
            </p>
          </div>
          {/* Valor 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-anaranjado-claro-color rounded-full text-white">
              <i className="fas fa-users text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold mb-4">Colaboración</h2>
            <p>
              Trabajamos juntos con nuestras comunidades y socios para crear
              un cambio positivo y sostenible para todos.
            </p>
          </div>
          {/* Valor 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-anaranjado-color rounded-full text-white">
              <i className="fas fa-lightbulb text-3xl"></i>
            </div>
            <h2 className="text-2xl font-bold mb-4">Innovación</h2>
            <p>
              Abrazamos el cambio y buscamos constantemente nuevas formas de
              resolver problemas y mejorar nuestra comunidad.
            </p>
          </div>
        </div>

        {/* Sección con imagen y texto */}
        <div className="flex flex-col lg:flex-row items-center gap-10 my-16">
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/800x500"
              alt="Valores en acción"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">
              Compromiso con la Comunidad
            </h2>
            <p className="mb-4">
              Nuestro enfoque está siempre en el bienestar de las personas. Ya
              sea a través de iniciativas locales o programas globales, nuestro
              objetivo es impactar positivamente la vida de quienes nos rodean.
            </p>
            <p>
              Creemos en la responsabilidad social y ambiental, y trabajamos
              para construir un futuro mejor para las generaciones venideras.
            </p>
          </div>
        </div>

        {/* Cierre motivacional */}
        <div className="p-8 bg-white text-center rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-black">
            ¡Nuestro Compromiso!
          </h2>
          <p className="text-lg text-black">
            Trabajamos cada día para transformar nuestros valores en acciones.
            Juntos podemos construir un mundo más justo y sostenible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Valores;