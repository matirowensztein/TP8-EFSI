import React, {useState, useEffect} from "react";
import ListaProducts from '../components/ListaProducts';


export default function Productos() {
  return (
    <div>
      <ListaProducts limite={30}/>
    </div>
  )
}
