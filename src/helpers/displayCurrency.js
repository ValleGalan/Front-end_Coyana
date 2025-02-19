
//Agregar el simbolo de $ al monto del precio
const displayUSDCurrency = (amount) => {
     const number = Number(amount);
    
    return `$${number.toFixed(2)}`;    // formato de moneda

  };
  
  export default displayUSDCurrency;
