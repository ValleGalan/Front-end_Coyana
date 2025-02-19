import React, { useContext, useState } from 'react'
import Logo_Blanco_Transp from '../assets/Logo_Blanco_Transp.png'
import { GrSearch } from "react-icons/gr";
import { FaRegCircleUser } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../api';
import { toast } from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../api/role';
import Context from '../context';


const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay,setMenuDisplay] = useState(false)
  const context = useContext(Context)
  const navigate = useNavigate()
  const searchInput = useLocation()
  const URLSearch = new URLSearchParams(searchInput?.search)
  const searchQuery = URLSearch.getAll("q")
  const [search,setSearch] = useState(searchQuery)

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.logout_user.url,{
      method : SummaryApi.logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
      navigate("/")
    }

    if(data.error){
      toast.error(data.message)
    }

  }

  const handleSearch = (e)=>{
    const { value } = e.target
    setSearch(value)

    if(value){
      navigate(`search?q=${value}`)
    }else{
      navigate("search")
    }
  }
  return (
    <header className='h-20 bg-anaranjado-color shadow-md   w-full z-40'>
      <div className=' h-full container mx-auto flex items-center px-4 justify-between'>
             
            <Link to={""}> <img src={Logo_Blanco_Transp} className='w-60 h-auto'/>  </Link>
            <Link to={"mision-vision"} className='hover:text-dark-brown'> Misión, visión </Link>
            <Link to={"tejedores"} className='hover:text-dark-brown'>Conozca a los tejedores</Link>
            <Link to={"contacto"} className='hover:text-dark-brown'>Contáctenos</Link>
            <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-full focus-within:shadow pl-2'>
                <input type='text' placeholder='buscar producto...' className='w-full outline-none' onChange={handleSearch} value={search}/>
                <div className='text-lg min-w-[50px] h-8  flex items-center justify-center rounded-r-full '>
                  <GrSearch />
                </div>
            </div>

            <div className='flex items-center gap-7'>  
                <div className='relative flex justify-center'>
                  {
                    user?._id && (
                      <div className='text-3xl cursor-pointer relative flex justify-center' onClick={()=>setMenuDisplay(preve => !preve)}>
                        {
                          user?.profilePic ? (
                            <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                          ) : (
                            <FaRegCircleUser/>
                          )
                        }
                      </div>
                    )
                  }
                  {
                    menuDisplay && (
                      <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded' >
                        <nav>
                          {
                            user?.role === ROLE.ADMIN && (
                              <Link to={"/admin-panel/all-products"} className='whitespace-nowrap hidden md:block bg-white p-2' onClick={()=>setMenuDisplay(preve => !preve)}>Panel del administrador</Link>
                            )
                          }
                        </nav>
                      </div>
                    )
                  }
                 
                </div>

                  {
                     user?._id && (
                      <Link to={"/cart"} className='text-2xl relative'>
                          <span><FaShoppingCart/></span>
                          <div className='bg-medium-orange  w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-2 -right-3'>
                              <p className='text-sm'>{context?.cartProductCount}</p>
                          </div>
                      </Link>
                      )
                  }
              


                <div>
                  {
                    user?._id  ? (
                      <button onClick={handleLogout} className='px-3 py-1 rounded-full bg-crema-claro-color hover:bg-anaranjado-claro-color'>Cerrar sesión</button>
                    )
                    : (
                    <Link to={"login"} className='px-3 py-1 rounded-full  bg-crema-claro-color hover:bg-anaranjado-claro-color'>Login</Link>
                    )
                  }
                    
                </div>

            </div>

      </div>
    </header>
  )
}

export default Header