import React, { useState, useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
  Container,
  ActionButton,
  ActionContainer,
  Product,
  ProductContainer,
  ProductImage,
  ProductList,
  ProductPrice,
  ProductPriceContainer,
  ProductQuantity,
  ProductSinglePrice,
  ProductTitle,
  ProductTitleContainer,
  SubTotalValue,
  TotalContainer,
  TotalProductsContainer,
  TotalProductsText
} from './styles';
import formatValue from '../../utils/formatValue'

export default function Cart() {
  const [products, setProducts] = useState([{
    id: '1',
    title: 'Assinatura Trimestral',
    image_url: 'https://res.cloudinary.com/robertosousa1/image/upload/v1594492578/dio/quarterly_subscription_yjolpc.png',
    quantity: 1,
    price: 150,
  },
  ]);

  const cartSize = useMemo(() => {
    return products.length || 0;
  }, [products]);

  const cartTotal = useMemo(() => {
    const cartAmount = products.reduce((accumulator, product) => {
      const totalPrice = accumulator + product.price * product.quantity;
      return totalPrice;
    }, 0)


    return formatValue(cartAmount);
  }, [products])

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={(item) => item.id}
          ListFooterComponents={<View />}
          ListFooterComponentsStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <Product>
              <ProductImage source={{ uri: item.image_url }} />
              <ProductTitleContainer>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPriceContainer>
                  <ProductSinglePrice>
                    {formatValue(item.price)}
                  </ProductSinglePrice>
                  <TotalContainer>
                    <ProductQuantity>
                      {`${item.quantity}x`}
                    </ProductQuantity>
                    <ProductPrice>
                      {formatValue(item.price * item.quantity)}
                    </ProductPrice>
                  </TotalContainer>
                </ProductPriceContainer>
              </ProductTitleContainer>
              <ActionContainer>
                <ActionButton onPress={() => { }}>
                  <FeatherIcon name="plus" color="E83F5B" />
                </ActionButton>
                <ActionButton onPress={() => { }}>
                  <FeatherIcon name="minus" color="E83F5B" />
                </ActionButton>
              </ActionContainer>
            </Product>
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{cartSize} {cartSize === 1 ? 'item' : 'itens'}</TotalProductsText>
        <SubTotalValue>R$ 150,00</SubTotalValue>
      </TotalProductsContainer>
    </Container>
  )
}
