import Logo from '../../components/Logo/Logo';
import { Container } from './Styleds';
import { ButtonReturn, ButtonSend, Input } from '../SharedStyles';
import { useNavigate } from 'react-router-dom';

export default function SigninPage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Logo />
      <Input
        placeholder='E-mail'
      ></Input>
      <Input
        placeholder='Senha'
      ></Input>
      <ButtonSend>ENTRAR</ButtonSend>
      <ButtonReturn onClick={() => navigate('sign-up')}>Não possui conta? Cadastre-se</ButtonReturn>  
    </Container>
  );
}
