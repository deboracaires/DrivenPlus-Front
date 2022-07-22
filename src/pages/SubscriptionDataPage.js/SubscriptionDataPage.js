import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BsFileText  } from "react-icons/bs";
import { Container, ContainerPerks, Image, PlanName, ReturnArrow, Text} from './Styleds';

export default function SubscriptionDataPage() {
  const [planData, setPlanData] = useState([]);
  const { idSubscription } = useParams('/subscription/:idSubscription');
  
  const { auth } = useAuth();
  console.log(planData);

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/');
    api.getSubscriptionDataById(auth.token, idSubscription)
      .then((res) => {
        setPlanData(res.data);
      })

  }, [auth, navigate]);
  return(
    <Container>
      <ReturnArrow onClick={() => navigate('/subscriptions')}>
        <AiOutlineArrowLeft color='#fff' size='28px'/>
      </ReturnArrow>
      <Image src={planData.image} alt=''/>
      <PlanName>{planData.name}</PlanName>
      <ContainerPerks>
        <Text>
          <BsFileText color='#FF4791' size='16px'/>
          <h1>Benefícios: </h1>
        </Text>
      </ContainerPerks>
    </Container>
  );
}
