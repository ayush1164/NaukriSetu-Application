import { useRef } from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'



const Header = () => {

    const showSideBar = useRef();

    const onShowSidebar = () => {

        const sideBarEl = showSideBar.current;
        sideBarEl.style.display = "block";

    }

    const onHideSideBar = () => {

        const sideBarEl = showSideBar.current;
        sideBarEl.style.display = "none";

    }

    const onDeleteJwt_Token = () => {

        Cookies.remove("my-Token");

    }



  return (
    <>

        <nav className='my-navbar'>

                <div className='lg-navbar'>

                            <li style={{listStyle:"none"}}><Link to='/' className='nav-links'><h4>NaukriSetu</h4></Link></li>

                            <ul className='nav-items'>

                                <li className='nav-lists hideOnMobile'>
                                    <Link to='/' className='nav-links'>Home</Link>
                                </li>

                                <li className='nav-lists hideOnMobile'>
                                    <Link to='/jobs' className='nav-links'>Jobs</Link>
                                </li>

                            </ul>

                            <li style={{listStyle:"none"}}>

                                    <Link to='/login' className='nav-links hideOnMobile'>
                                        <button>Logout</button>
                                    </Link>

                            <img  onClick={onShowSidebar}  src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png" className='menu-btn' width='25px' style={{marginLeft:"10px"}}/>

                            </li>

                </div>


                <div className='sideBar' ref={showSideBar}>

                           
                            <ul className='nav-items-sidebar'>

                                <li  onClick={onHideSideBar} className='nav-links nav-lists'><img src="https://cdn-icons-png.flaticon.com/128/1828/1828778.png" width='20px' /></li>

                                <li className='nav-lists'>
                                    <Link to='/' className='nav-links'>Home</Link>
                                </li>

                                <li className='nav-lists'>
                                    <Link to='/jobs' className='nav-links'>Jobs</Link>
                                </li>

                                <Link to='/login' className='nav-links'>
                                    <button onClick={onDeleteJwt_Token}>Logout</button>
                                </Link>

                            </ul>

                            

                </div>

        </nav>

    </>
  )
}

export default Header