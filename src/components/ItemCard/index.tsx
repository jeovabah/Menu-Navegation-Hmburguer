import React from 'react'

interface ItemsProps {
    item:{
        title: string,
        price: number,
        id?: string,
        inCart?:number,
        idN?: number,
        url?: string,
        marca?: string,
        cc?: number
    } 
}

export const ItemCard = ({item}:ItemsProps) => {
  return (
    <>
        {item.title}
        {item.price}
    </>
    
  )
}
