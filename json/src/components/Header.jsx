import React from 'react'
import Auth from './Auth'
import Logout from './Logout'
import { useSelector } from 'react-redux'
const Header = () => {
    let isAuth = useSelector(state => state.auth.isAuthenticate)
    console.log(isAuth)
  return (
      <header style={{ width: "100%", background: 'purple', position: "fixed", top: "0", left: "0", display: "flex", justifyContent: "space-between", alignItems: "center", height: "50px", padding: "5px" }}>
          <h1 style={{color:"white"}}>Redux Auth</h1>
         {isAuth&& <nav  >
            <a href="">Redux</a>
              <a href="/">My Product</a> 
                  <a href="/">My Sales</a>
            <Logout/>
                  
              
          
          </nav>}
      
      </header>
  )
}

export default Header