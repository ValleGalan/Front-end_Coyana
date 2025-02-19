import React, { useContext, useEffect, useRef, useState } from 'react'
import fetchCategoryWiseProduct from '../helpers/fetchCategoryWiseProduct'
import displayUSDCurrency from '../helpers/displayCurrency'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import addToCart from '../helpers/addToCart'
import Context from '../context'

const HorizontalCardProduct = ({category, heading}) => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const loadingList = new Array(6).fill(null)  // Modifico el tamaño de acuerdo a Home y productCategory que puse la cant de productos

    const [scroll,setScroll] = useState(0)
    const scrollElement = useRef()

    const { fetchUserAddToCart } = useContext(Context)

    const handleAddToCart = async(e,id)=>{
       await addToCart(e,id)
       fetchUserAddToCart()
    }

    const fetchData = async() =>{
        setLoading(true)
        const categoryProduct = await fetchCategoryWiseProduct(category)
        setLoading(false)

        console.log("horizontal data",categoryProduct.data)
        setData(categoryProduct?.data)
    }

    useEffect(()=>{
        fetchData()
    },[])

    const scrollRight = () =>{
        scrollElement.current.scrollLeft += 300
    }
    const scrollLeft = () =>{
        scrollElement.current.scrollLeft -= 300
    }

    return (
        <div className='container mx-auto px-4 my-6 relative'>

            <h2 className='text-2xl font-semibold py-4'>{heading}</h2>

            <div className='flex items-center gap-4 md:gap-6 overflow-scroll scrollbar-none transition-all' ref={scrollElement}>

                <button className='bg-white shadow-md rounded-full p-1 absolute left-0 text-lg hidden md:block' onClick={scrollLeft}><FaAngleLeft/></button>
                <button className='bg-white shadow-md rounded-full p-1 absolute right-0 text-lg hidden md:block' onClick={scrollRight}><FaAngleRight/></button> 

                {loading ? (
                    loadingList.map((product, index) => {
                        return (
                            <div key={index} className='w-full min-w-[400px] md:min-w-[450px] max-w-[400px] md:max-w-[450px] h-60 bg-white rounded-sm shadow flex'>
                                <div className='bg-light-color h-full p-4 min-w-[180px] md:min-w-[220px] animate-pulse'>
                                </div>
                                <div className='p-4 grid w-full gap-2'>
                                    <h2 className='font-medium text-base md:text-lg text-ellipsis line-clamp-1 text-black bg-light-color animate-pulse p-1 rounded-full'></h2>
                                    <p className='capitalize text-slate-500 p-1 bg-light-color animate-pulse rounded-full'></p>
                                   
                                    <div className='flex gap-3 w-full'>
                                        <p className='text-black-600 font-medium p-1 bg-light-color w-full animate-pulse rounded-full'></p>
                                        <p className='text-slate-500 line-through p-1 bg-light-color w-full animate-pulse rounded-full'></p>
                                    </div>
                                    <button className='text-sm bg-text-color px-3 py-0.5 rounded-full w-full bg-light-color animate-pulse'></button>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    data.map((product) => {
                        return (
                            <Link
                            key={product?._id}
                            to={"product/" + product?._id}
                            className="w-80 max-w-[400px] md:max-w-[450px] bg-white rounded-sm shadow-md flex flex-col"
                          >
                             
                            {/* Imagen del Producto */}
                            <div className=" w-full h-64 md:h-80 bg-white ">
                              <img
                                src={product.productImage[0]}
                                alt={product?.productName}
                                className="object-fill h-full w-full hover:scale-90 transition-all"
                               />
                            </div>
                          
                            {/* Detalles del Producto */}
                            <div className="grid gap-1 text-center">
                                <h3 className="font-medium text-base md:text-lg text-center text-black">
                                {product?.productName}
                                </h3>
                              <div className="flex justify-center gap-2">
                                <p className="text-black-600 font-medium text-base">
                                  {displayUSDCurrency(product?.sellingPrice)}
                                </p>
                                <p className="text-slate-500 line-through text-sm md:text-base">
                                  {displayUSDCurrency(product?.price)}
                                </p>
                              </div>
                          
                              {/* Botón de Añadir al Carrito */}
                              <button
                                className="text-sm bg-medium-orange hover:bg-dark-brown bg-text-color px-4 py-2 rounded-full w-25"
                                onClick={(e) => handleAddToCart(e, product?._id)}
                              >
                                Añadir al carrito
                              </button>
                            </div>
                          </Link>
                          
                        )
                    })
                )}
            </div>
        </div>
    )
}

export default HorizontalCardProduct

 