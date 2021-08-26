import React from 'react'
import LottieView from 'lottie-react-native'

import { Container, EmptyCartText, EmptyCartContainer } from './styles';
import emptyCartAnimation from '../../../EmptyCartAnimation.json'


export default function EmptyCart() {
  return (
    <Container>
      <EmptyCartContainer>
        <LottieView
          source={emptyCartAnimation}
          resizeMode="contain"
          autoPlay
          loop
        />
      </EmptyCartContainer>
      <EmptyCartText>Seu carrinho está vazio</EmptyCartText>
    </Container>
  )
}