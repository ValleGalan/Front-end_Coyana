import React, { useEffect, useState } from 'react'
import SummaryApi from '../api'
import { Link } from 'react-router-dom'

const CategoryList = () => {
    const [categoryProduct,setCategoryProduct] = useState([])
    const [loading,setLoading] = useState(false)

    const categoryLoading = new Array(13).fill(null)

    const fetchCategoryProduct = async() =>{
        setLoading(true)
        const response = await fetch(SummaryApi.categoryProduct.url)
        const dataResponse = await response.json()
        setLoading(false)
        setCategoryProduct(dataResponse.data)
    }

    useEffect(()=>{
        fetchCategoryProduct()
    },[])

  return (
    <div className='container mx-auto p-4'>
           <div className='flex items-center gap-4 justify-between overflow-scroll scrollbar-none'>
            {

                loading ? (
                    categoryLoading.map((el,index)=>{
                            return(
                                <div className='h-16 w-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-slate-200 animate-pulse' key={"categoryLoading"+index}>
                                </div>
                            )
                    })  
                ) :
                (
                    categoryProduct.map((product,index)=>{
                        return(
                            <Link to={"/product-category?category="+product?.category} className='cursor-pointer' key={product?.category}>
                                <div className='w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden p-4 bg-slate-200 flex items-center justify-center'>
                                    <img src={product?.productImage[0]} alt={product?.category} className='h-full object-scale-down mix-blend-multiply hover:scale-125 transition-all'/>
                                </div>
                                <p className='text-center text-sm md:text-base capitalize'>{product?.category}</p>
                            </Link>
                        )
                    })
                )
            }
           </div>
    </div>
  )
}

export default CategoryList

/*

  

-------------------------------------------------------------------------------------------------------
 import React, { useContext, useEffect, useRef, useState } from 'react';
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct';
import displayINRCurrency from '../helpers/displayCurrency';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import addToCart from '../helpers/addToCart';
import Context from '../context';

const CategoryList = ({ category, heading }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingList = new Array(6).fill(null);

    const scrollElement = useRef();
    const { fetchUserAddToCart } = useContext(Context);

    const handleAddToCart = async (e, id) => {
        await addToCart(e, id);
        fetchUserAddToCart();
    };

    const fetchData = async () => {
        setLoading(true);
        const categoryProduct = await fetchCategoryWiseProduct(category);
        setLoading(false);

        console.log("horizontal data", categoryProduct.data);
        setData(categoryProduct?.data);
    };

    useEffect(() => {
        fetchData();
    }, [category]);

    const scrollRight = () => {
        scrollElement.current.scrollLeft += 300;
    };
    const scrollLeft = () => {
        scrollElement.current.scrollLeft -= 300;
    };

    return (
        <div className='container mx-auto px-4 my-6 relative'>
          <h2 className='text-2xl font-semibold py-4'>{heading}</h2>
            <div className='flex items-center gap-4 md:gap-6 overflow-x-scroll scrollbar-none transition-all' ref={scrollElement}>
                <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}>
                    <FaAngleLeft />
                </button>
                <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}>
                    <FaAngleRight />
                </button>
                {loading ? (
                    loadingList.map((_, index) => (
                        <div key={index} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'>
                            <div className='bg-light-color h-60 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center animate-pulse'></div>
                            <div className='p-4 grid gap-2'>
                                <h2 className='font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black p-1 py-2 animate-pulse rounded-full bg-light-color'></h2>
                                <p className='capitalize text-xs md:text-sm text-slate-500 p-1 animate-pulse rounded-full bg-light-color py-2'></p>
                                <div className='flex gap-2'>
                                    <p className='text-black-600 font-medium text-xs md:text-sm p-1 animate-pulse rounded-full bg-light-color w-full py-2'></p>
                                    <p className='text-slate-500 line-through text-xs md:text-sm p-1 animate-pulse rounded-full bg-light-color w-full py-2'></p>
                                </div>
                                <button className='text-xs bg-text-color px-2 rounded-full bg-light-color py-2 animate-pulse'></button>
                            </div>
                        </div>
                    ))
                ) : (
                    data.map((product) => (
                        <Link to={"product/" + product?._id} key={product?._id} className='w-full min-w-[280px] md:min-w-[320px] max-w-[280px] md:max-w-[320px] bg-white rounded-sm shadow'>
                            <div className='bg-light-color h-72 p-4 min-w-[280px] md:min-w-[145px] flex justify-center items-center'>
                                <img src={product.productImage[0]} className='object-scale-down h-full hover:scale-110 transition-all mix-blend-multiply' />
                            </div>
                            <div className='p-4 grid gap-1'>
                                <h2 className='font-medium text-sm md:text-base text-ellipsis line-clamp-1 text-black'>{product?.productName}</h2>
                              <p className='capitalize text-xs md:text-sm text-slate-500'>{product?.category}</p> 
                                <div className='flex gap-2'>
                                    <p className='text-black-600 font-medium text-sm'>{displayINRCurrency(product?.sellingPrice)}</p>
                                    <p className='text-slate-500 line-through text-xs md:text-sm'>{displayINRCurrency(product?.price)}</p>
                                </div>
                                <button className='text-xs bg-medium-orange hover:bg-dark-brown bg-text-color px-2 py-0.5 rounded-full' onClick={(e) => handleAddToCart(e, product?._id)}>Añade a tu carrito</button>
                            </div>
                        </Link>
                    ))
                )}
            </div>

        </div>
    );
};

export default CategoryList;
*/