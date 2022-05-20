import React from 'react'
import { SwiperSlider } from '../../components/SwiperSlider'
import { Container } from './styles'

export const Product = () => {
  return (
    <Container>
      <div className="slider" style={{ marginTop: "2rem"}}>
      <SwiperSlider />
      </div>

      <div className="contentProduto">

      </div>
    </Container>
  )
}
