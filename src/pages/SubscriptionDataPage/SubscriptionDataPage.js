import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Container, LoadingData, ReturnArrow} from './Styleds';
import Benefits from '../../components/Benefits/Benefits';
import CardData from '../../components/CardData/CardData';
import Swal from 'sweetalert2';
import CardError from '../../modals/CardError';

export default function SubscriptionDataPage() {
  const [planData, setPlanData] = useState([]);
  const [values, setValues] = useState({
    cardName: '',
    cardNumber: '',
    securityNumber: '',
    expirationDate: '',
  });
  
  const { auth, login } = useAuth();

  const { idSubscription } = useParams('/subscription/:idSubscription');

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/');
    api.getSubscriptionDataById(auth.token, idSubscription)
      .then((res) => {
        setPlanData(res.data);
      })

  }, [auth, navigate, idSubscription]);

  const handleChange = (prop) => (event) => {
    let formated = event.target.value;
    
    if (prop === 'cardNumber') {
      if (!( formated[formated.length - 1].charCodeAt(0) >= 48 && formated[formated.length - 1].charCodeAt(0) <= 57) )
        return; 
    } else if (prop === 'securityNumber') {
      if (formated.length > 3) return; 
    }
    setValues({...values, [prop]: formated});
  };

 function postSignature(event) {
    event.preventDefault();
    const date = values.expirationDate.split('-');
    const finalDate = `${date[1]}/${date[0].slice(2,4)}`;
    const body = { 
      membershipId: planData.id,
      cardName: values.cardName,
      cardNumber: values.cardNumber,
      securityNumber: values.securityNumber,
      expirationDate: finalDate,
    };
    Swal.fire({
      html: `<h1 style = 'color: #000000; font-family: Roboto; font-weight: 700; font-size: 18px; text-align: center; line-height: 21px;'>Tem certeza que deseja assinar o plano <br> ${planData.name} (${Number(planData.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})})?</h1>`,
      width: '80%',
      background: '#FFFFFF',
      confirmButtonColor: '#FF4791',
      confirmButtonText: `<h1 style = 'color: #fff; font-family: Roboto; font-weight: 400; font-size: 14px; text-align: center; line-height: 16px; border: none;'>SIM</h1>`,
      cancelButtonText: `<h1 style = 'color: #fff; font-family: Roboto; font-weight: 400; font-size: 14px; text-align: center; line-height: 16px;'>Não</h1>`,
      showCancelButton: true,
      cancelButtonColor: '#CECECE',
    }).then((result) => {
      if (result.isConfirmed) {
        api.postSubscription(auth.token, body)
          .then((res) => {
            login({...auth, membership: res.data.membership});
            navigate('/home');
          })
          .catch((err) => {
            CardError();
          })
      }
    })
  }

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
          <CardData handleChange={handleChange} postSignature={postSignature} values={values}/>
        )
      }
    </Container>
  );
}
