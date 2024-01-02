import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import {FaBlog} from 'react-icons/fa6';
import {Link} from 'react-router-dom';
import logo from '../assets/images/logo.jpg'

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  }

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY>100){
        setSticky(true);
      }
      else{
        setSticky(false);
      }

      window.addEventListener("scroll", handleScroll);

      return ()=> {
        window.addEventListener("scroll",handleScroll);
      }
    }
  },[])

  const navItems = [
    {link: "Home", path: "/"},
    {link: "About", path: "/about"},
    {link: "Shop", path: "/shop"},
    {link: "Publish Book", path: "/admin/dashboard"},
    {link: "Blog", path: "/blog"},
  ]
  return (
    <header>
        <nav>
          <div>
            {/*logo*/}
            <Link to = "/"className=''><img className='inline-block' src={logo} alt="Logo" /></Link>
            <ul>
              {
                navItems.map(({link,path})=><Link key = {path} to = {path} className= 'block text-base text-black uppercase cursor-pointer'>{link}</Link>)
              }
            </ul>
          </div>
        </nav>
    </header>
  )
}

export default Navbar