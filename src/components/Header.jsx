import { useLocation, useNavigate } from 'react-router-dom'
import React from 'react'

export default function Header() {
    const location = useLocation();
    const navigate = useNavigate();
    function pathMatchRoute(route){
       if(route === location.pathname){
        return true
       } 
    }
  return (
    <div className='bg-white border-b shadow-sm sticky top-0 z-50'>
        <header className='flex justify-between items-center px-3 max-w-6xl mx-auto'>
            <div>
                <img src="https://www.designfreelogoonline.com/wp-content/uploads/2021/02/0535-Building-03.png" alt="logo"
                className='h-11 cursor-pointer'
                onClick={()=>navigate("/")} />
            </div>
            <div>
                <ul className='flex space-x-10'>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                    border-b-transparent ${pathMatchRoute("/") && "text-black border-b-red-500"}` }
                    onClick={()=>navigate("/")}>Home</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                    border-b-transparent ${pathMatchRoute("/offers") && "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/offers")}>Offers</li>
                    <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px]
                    border-b-transparent ${pathMatchRoute("/sign-in") && "text-black border-b-red-500"}`}
                    onClick={()=>navigate("/sign-in")}>Sign In</li>
                </ul>
            </div>
        </header>
    </div>
  )
}
