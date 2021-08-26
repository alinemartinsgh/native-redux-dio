import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
import FeatherIcon from 'react-native-vector-icons/Feather'

import formatValue from '../../utils/formatValue';
import {
  Container,
  CartButton,
  CartButtonText,
  CartPricing,
  CartTotalPrice
} from './styles'

export default function FloatingCart() {

  const navigation = useNavigation();

  const products = useSelector(({ cart }) => cart);

  const cartSize = useMemo(() => {
    return products.length || 0
  }, [products])

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      return accumulator + product.price * product.amount;

    }, 0)
    return formatValue(cartAmount)
  })

  return (
    <Container>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <FeatherIcon name="shopping-cart" size={24} color="#F3F9FF" />
        <CartButtonText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</CartButtonText>
        <CartPricing>
          <CartTotalPrice>{cartTotal}</CartTotalPrice>
        </CartPricing>
        <FeatherIcon name="chevron-right" size={24} color="#F3F9FF" />
      </CartButton>
    </Container>
  )
}
