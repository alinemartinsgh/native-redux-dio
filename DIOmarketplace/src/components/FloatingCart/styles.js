import styled from "styled-components/native";

export const Container = styled.View`
  bottom: 0;
  position: absolute;
  background: #e83f5b;
  padding: 0 18px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`

export const CartPricing = styled.Text`
  padding: 20px;
`

export const CartTotalPrice = styled.Text`
  color: #f3f9ff;
  font-size: 16px;
  font-weight: bold;
`

export const CartButton = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export const CartButtonText = styled.Text`
  flex: 1;
  color: #F3F9FF;
  font-weight: bold;
  margin: 0 auto 0 15px;
`
