import { DocumentData, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { ItemCard } from '../../components/ItemCard'
import { SwiperSlider } from '../../components/SwiperSlider'
import { itemCollection } from '../../services/firebase'
import { Container } from './styles'

export const Product = () => {
  const [items, setItems]= useState<DocumentData[]>([])
  
  useEffect(()=>{
    const getItem  = async () => {
      const data = await getDocs(itemCollection)
      setItems(data.docs.map(doc => doc.data()))
    }
    getItem()
  },[])

  return (
    <Container>
      <div className="slider" style={{ marginTop: "2rem"}}>

        <div className="sliderDesc">
          <p>Confira nossos <strong>Destaques!</strong></p>
        </div> {/* sliderDesc */}
      <SwiperSlider />
      </div> {/* slider */}

      <div className="contentProduct">
          { items.map((item:any,index) => {
            return (
              <ItemCard key={index} item={item} />
            )
          }) }
      </div>
      
    </Container>
  )
}
