import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container, LoadingData, ReturnArrow} from './Styleds';
import Benefits from '../../components/Benefits/Benefits';
import CardData from '../../components/CardData/CardData';

export default function SubscriptionDataPage() {
  const [planData, setPlanData] = useState([]);
  const { idSubscription } = useParams('/subscription/:idSubscription');
  
  const { auth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/');
    api.getSubscriptionDataById(auth.token, idSubscription)
      .then((res) => {
        setPlanData(res.data);
      })

  }, [auth, navigate, idSubscription]);
  return(
    <Container>
      <ReturnArrow onClick={() => navigate('/subscriptions')}>
        <AiOutlineArrowLeft color='#fff' size='28px'/>
      </ReturnArrow>
      {
        planData.length === 0 ?
        (
          <LoadingData> Carregando... </LoadingData>
        )
        :
        (
          <Benefits planData={planData}/>
        )
      }
      {
        planData.length === 0 ?
        (
          true
        )
        :
        (
          <CardData />
        )
      }
    </Container>
  );
}
