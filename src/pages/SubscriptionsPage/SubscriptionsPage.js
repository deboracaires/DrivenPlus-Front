import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Plan from "../../components/Plan/Plan";
import useAuth from "../../hooks/useAuth";
import api from "../../services/api";
import { Container, ContainerPlans, LoadingSubscriptions, Title } from "./Styleds";

export default function SubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState([]);
  const { auth } = useAuth();
  
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/');
    api.getSubscriptions(auth.token)
      .then((res) => {
        setSubscriptions(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [auth, navigate]);
  
  return(
    <Container>
        <Title>Escolha seu Plano</Title>
        <ContainerPlans>
          {
            subscriptions.length === 0 ?
            (
              <LoadingSubscriptions>Carregando...</LoadingSubscriptions>
            )
            :
            (
              subscriptions.map((subs, index) => <Plan key={index} subscription={subs}/>)
            )
          }
        </ContainerPlans>
    </Container>
  );
}
