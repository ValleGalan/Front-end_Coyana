import React, { useState } from 'react';
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'
import HorizontalFilterBar from '../components/HorizontalFilterBar';

// Lista de productos que vende coyana , vinculado a "productCategory"
const Home = () => {
  const [filters, setFilters] = useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="flex">
      <div className="flex-grow">
        <BannerProduct />
        <div className=' p-6 flex justify-center'>
          <p className='text-size-home'>
            <h2 >Nuestro propósito</h2>
            En un mundo donde la identidad y la autenticidad a menudo se diluyen en la producción en masa, surge la necesidad de reconectar con nuestras raíces y valorar las historias que existen detrás de cada creación artesanal. Nuestro proyecto busca rescatar y revalorizar la identidad y el trabajo de las manos ancestrales que nos brindan sus tejidos únicos y llenos de historia. Con este micro-emprendimiento queremos ser un puente entre los creadores y el mundo, destacando la herencia cultural que cada prenda representa.
          </p>
        </div>
        <CategoryList/>

        <HorizontalCardProduct category="ponchos" heading="Ponchos" filters={filters} />

        <p className=' p-6    text-xl font-semibold text-center mb-4'>
          Este proyecto de micro-emprendimiento tiene como propósito crear una marca de ropa 100% artesanal que ofrece prendas de vestir (como sacos, ponchos, bufandas, sombreros, chalecos, etc.) producidos exclusivamente por artesanos nativos del lugar
        </p>

        <HorizontalCardProduct category="manta" heading="Mantas" filters={filters} />

        <VerticalCardProduct category="tapado" heading="Tapados" filters={filters} />
        <VerticalCardProduct category="chaleco" heading="Chalecos" filters={filters} />
        <VerticalCardProduct category="bufanda" heading="Bufandas" filters={filters} />
        <VerticalCardProduct category="bolso" heading="Bolsos artesanales" filters={filters} />
      </div>
    </div>
  );
};

export default Home;
/*
        <CategoryList/>

 <CategoryList/>
<VerticalCardProduct category={"abrigo"} heading={"Abrigos largos"}/>
      <VerticalCardProduct category={"bufanda1"} heading={"Bufanda1"}/>
      <VerticalCardProduct category={"bufanda2"} heading={"Bufanda2"}/>
      <VerticalCardProduct category={"bufanda3"} heading={"Bufanda3"}/>
      <VerticalCardProduct category={"poncho"} heading={"Poncho"}/>
*/