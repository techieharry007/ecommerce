import {Navigate} from "react-router-dom"
import {useContext} from "react"
import { Context } from "../App"
function Auth({children}) {
    const {status}=useContext(Context)
    console.log(status,"   context vala")
    if(status!=200)
  {
    return <Navigate to="/login"/>
  }
  return children
    }
 export default Auth   