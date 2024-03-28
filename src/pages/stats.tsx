import React from 'react'
import { ListItem, dataList } from '@/components/stats/ListItem'



const Stats = () => {

  const dataList:dataList[] = [
    { title: "1- Crear contenido", item: "1-c-c" },
    { title: "2- Aprender Sitecore", item: "1-a-s" },
    { title: "3- Hacer ejercicios", item: "3-h-e" },
    { title: "4- Ser más proactivo", item: "4-s-m-p" },
    { title: "5- ser independiente", item: "5-s-i" },

  ]

  return (
    <div className="stats-list-container">
        <h1 className="stats-list-title" >Mis compromisos:</h1>
        <ol className="stats-list" >
            {dataList.map((data) => (
              <ListItem key={ data.item } item={ data.item } title={ data.title }  />
            ))}
        </ol>
        
    </div>
    
  )
}

export default Stats