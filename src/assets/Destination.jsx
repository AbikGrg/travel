import React from 'react' ;
import './Destination.css'
import {Table} from "react-bootstrap"
import { useEffect, useState } from 'react'
const Destination = () => {
    const [catageory, set] = useState([]);
    useEffect(()=>{
     const getcategory = async ()=> {
     const res =fetch ('');
       
     }
    },[])
  return (
    <Table striped bordered hover>
    <thead>
      <tr>
        <th>LocationId</th>
        <th>Places</th>
        <th>Genres</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      
        
    </tbody>
  </Table>
  )
}


export default Destination