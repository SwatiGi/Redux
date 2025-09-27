import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import { useSelector } from 'react-redux'
import UserProfile from './components/UserProfile'

function App() {
 
  const isAuth = useSelector((state) => state.auth.isAuthenticate)
 
  return (
    <>
      <Fragment>
        <Header />
        {!isAuth && <Auth />}
        {isAuth&&<UserProfile/>}
       
     <Counter/>
      </Fragment>
    </>
  )
}

export default App
