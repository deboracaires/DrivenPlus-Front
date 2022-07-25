import { useEffect } from 'react';
import { IoPersonCircleSharp } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import ButtonPerk from '../../components/ButtonPerk/ButtonPerk';
import FooterHome from '../../components/FooterHome/FooterHome';
import useAuth from '../../hooks/useAuth';
import { LoadingData } from '../SubscriptionDataPage/Styleds';
import { Container, Icon, ImageSub, NameUser } from './Styleds';

export default function Home() {
  const { auth } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (!auth) navigate('/');
    if (auth.membership === null) navigate('/subscriptions');
  }, [auth, navigate]);

  return (
    <Container>
      <Icon>
        <IoPersonCircleSharp color='#fff' size='34px'/>
      </Icon>
      <ImageSub src={auth.membership.image} alt=''/>
      <NameUser>Olá, {auth.name}</NameUser> 
      {
        auth.length === 0?
        (
          <LoadingData>Carregando...</LoadingData>
        )
        :
        (
          auth.membership.perks.map((perk, index) => <ButtonPerk key={index} perk={perk}/>)
        )
      }
      <FooterHome />
      
    </Container>
  );
}
