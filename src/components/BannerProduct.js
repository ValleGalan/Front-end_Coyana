import React, { useEffect, useState } from 'react'
import image1 from '../assets/banner/img_coyanaBanner1.webp' //img1.webp
import image2 from '../assets/banner/img_coyanaBanner2.webp' //img2.webp
import image3 from '../assets/banner/img_coyanaBanner3.png'  //img2.webp
//import image4 from '../assets/banner/img4.jpg' //img2.webp
//import image5 from '../assets/banner/img5.webp'  //img2.webp


import image1Mobile from '../assets/banner/img_coyanaBanner1_mobile.png' //img_coyanaBanner1_mobile img1_mobile.jpg
import image2Mobile from '../assets/banner/img_coyanaBanner2.webp' // img2_mobile.webp
import image3Mobile from '../assets/banner/img_coyanaBanner3.png'  //img3_mobile.jpg
//import image4Mobile from '../assets/banner/img4_mobile.jpg' //img4_mobile.jpg
//import image5Mobile from '../assets/banner/img5_mobile.png'  //img5_mobile.png

import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";


const BannerProduct = () => {
    const [currentImage,setCurrentImage] = useState(0)

    const desktopImages = [
        image1,
        image2,
        image3
       // image4,
       // image5
    ]

    const mobileImages = [
        image1Mobile,
        image2Mobile,
        image3Mobile,
      //  image4Mobile,
      //  image5Mobile
    ]

    const nextImage = () =>{
        if(desktopImages.length - 1 > currentImage){
            setCurrentImage(preve => preve + 1)
        }
    }

    const preveImage = () =>{
        if(currentImage != 0){
            setCurrentImage(preve => preve - 1)
        }
    }

// Se establece un intervalo para cambiar la imagen cada 7000 ms ( segundos)
    useEffect(()=>{
        const interval = setInterval(()=>{
            if(desktopImages.length - 1 > currentImage){ // Verifica si la imagen actual no es la última
                nextImage()
            }else{
                setCurrentImage(0) // Si es la última imagen, reinicia al inicio
            }
        },7000)

        return ()=> clearInterval(interval)
    },[currentImage])
    
//Banner grande
  return (
    <div className=' w-full mx-auto'>
        <div className='h-auto md:h-116 w-full bg-light-color'>

               {/**
                 <div className='absolute z-10 h-full w-full md:flex items-center hidden '>
                    <div className=' flex justify-between w-full text-2xl'>
                        <button onClick={preveImage} className='bg-white shadow-md rounded-full p-1'><FaAngleLeft/></button>
                        <button onClick={nextImage} className='bg-white shadow-md rounded-full p-1'><FaAngleRight/></button> 
                    </div>
                </div>
                */}

                {/**desktop and tablet version */}
              <div className='hidden md:flex h-full w-full overflow-hidden'>
                {
                        desktopImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                            </div>
                            )
                        })
                }
              </div>


                {/**mobile version */}
                <div className='flex h-full w-full overflow-hidden md:hidden'>
                {
                        mobileImages.map((imageURl,index)=>{
                            return(
                            <div className='w-full h-full min-w-full min-h-full transition-all' key={imageURl} style={{transform : `translateX(-${currentImage * 100}%)`}}>
                                <img src={imageURl} className='w-full h-full object-cover'/>
                            </div>
                            )
                        })
                }
              </div>


        </div>
    </div>
  )
}

export default BannerProduct