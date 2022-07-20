import Logo from '../../components/Logo/Logo';
import { Container } from './Styleds';
import { ButtonReturn, ButtonSend, Input } from '../SharedStyles';

export default function SigninPage() {
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
      <ButtonReturn>Não possui conta? Cadastre-se</ButtonReturn>  
    </Container>
  );
}
