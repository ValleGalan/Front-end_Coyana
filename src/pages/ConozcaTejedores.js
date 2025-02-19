import React from "react";

const ConozcaTejedores = () => {
  return (
    <div className="w-full px-4 py-8">
      <div className="bg-crema-claro-color shadow-lg rounded-lg p-6 prose prose-lg mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-6">
          Conozca a los Tejedores
        </h1>
        <blockquote className="text-center mb-8 text-lg italic">
          <p>"Jujeños que realizan productos artesanales con historias que contar."</p>
        </blockquote>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-center mb-4 ">
            Tejedores de Jujuy: Un arte ancestral
          </h2>
          <img
            src="https://cdn.shopify.com/s/files/1/0891/1098/files/strength-peru-women-weavers_1024x1024.jpg?2436816253938663157"
            alt="Fortalecer"
            className="w-full h-auto mb-6 rounded-lg shadow-md"
          />
          <p className="text-black text-lg mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ac erat auctor, 
            efficitur arcu at, condimentum justo. Suspendisse potenti. Mauris nec ante vel ligula 
            malesuada pretium. Ut lacinia lorem nisi, a hendrerit neque condimentum ut. Duis 
            viverra metus id ligula sollicitudin, non iaculis felis elementum.
          </p>
          <p className="text-black text-lg mb-6">
            Proin vitae lacus mollis, suscipit sapien ac, tincidunt turpis. Phasellus tristique 
            mi at libero feugiat, vel cursus odio bibendum. Curabitur egestas eget magna ac 
            vestibulum. Cras a nunc quam. Sed sit amet felis vel leo efficitur facilisis.
          </p>
        </section>

        <section className="bg-anaranjado-claro-color p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-center mb-4 text-black">
            Impacto Social de los Tejedores
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-1/3">
              <img
                src="https://cdn.shopify.com/s/files/1/0891/1098/files/strength-peru-women-weavers_1024x1024.jpg?2436816253938663157"
                alt="Mujeres Tejiendo"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-black mt-4">Mujeres trabajando juntas</p>
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.shopify.com/s/files/1/0891/1098/files/strength-peru-women-weavers_1024x1024.jpg?2436816253938663157"
                alt="Mujeres Tejiendo"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-black mt-4">Cada pieza cuenta una historia</p>
            </div>
            <div className="w-1/3">
              <img
                src="https://cdn.shopify.com/s/files/1/0891/1098/files/strength-peru-women-weavers_1024x1024.jpg?2436816253938663157"
                alt="Mujeres Tejiendo"
                className="w-full h-auto rounded-lg shadow-md"
              />
              <p className="text-center text-black mt-4">Tradición y cultura en cada hilo</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-center mb-6 ">
            El Futuro de los Tejedores
          </h2>
          <p className="text-black text-lg mb-6">
            Etiam vehicula turpis purus, et porttitor neque auctor id. Nam sollicitudin, nisl nec 
            vehicula condimentum, lorem orci feugiat lectus, nec tempor orci nisl vitae nisi. 
            Ut lacinia velit nisi, in fermentum enim hendrerit eget. Sed egestas dolor a lorem 
            placerat, ac convallis sem iaculis.
          </p>
          <p className="text-black text-lg">
            Nulla facilisi. Donec tincidunt mollis efficitur. Maecenas in magna erat. Nunc id 
            hendrerit risus. Integer aliquet eros at elit feugiat, id congue velit cursus. 
            Ut ac libero auctor, pellentesque nulla eu, fermentum sapien.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ConozcaTejedores;
