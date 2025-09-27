import React from 'react'
import { useDispatch } from 'react-redux'
import { authAction } from '../store'

const Logout = () => {
    let dispath = useDispatch()
    let handleLogout = () => {
     dispath(authAction.logout())
    }
  return (
    <button style={{background:"yellow",padding:"5px 15px",border:"none",color:"black",borderRadius:"5px",cursor:"pointer"}} onClick={handleLogout}>Logout</button>
  )
}

export default Logout