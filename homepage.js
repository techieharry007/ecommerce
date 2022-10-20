import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from "axios"
import { Button, Container } from 'semantic-ui-react'
export default function Homepage() {
  useEffect(()=>{
    axios.get("http://localhost:8080/productlist").then((res)=>{
      console.log(res.data)
    })
  },[])
    const navigate=useNavigate()
  return (
    <>
    <Container style={{textAlign:"end",backgroundColor:"Dodgerblue"}}>
        <Button primary style={{marginRight:"40px"}} onClick={()=>{
            navigate("/login")
        }}>Login</Button>
        <Button secondary style={{marginRight:"74px"}}  onClick={()=>{
            navigate("/signup")
        }}>Signup</Button>
    </Container>
   
    </>
  )
}
