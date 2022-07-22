import { Container, Image, Price } from './Styleds'

export default function Plan({ subscription }) {
  console.log(subscription)
  return(
    <Container>
      <Image src={subscription.image} alt=''/>
      <Price>
        <h1>R${subscription.price}</h1>
      </Price>
    </Container>
  )
}
