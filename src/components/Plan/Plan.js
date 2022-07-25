import { Container, Image, Price } from './Styleds';
import { useNavigate } from 'react-router-dom';

export default function Plan({ subscription }) {
  const navigate = useNavigate();
  return(
    <Container onClick={() => navigate(`/subscriptions/${subscription.id}`)}>
      <Image src={subscription.image} alt=''/>
      <Price>
        <h1>{Number(subscription.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</h1>
      </Price>
    </Container>
  )
}
