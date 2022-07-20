import { ButtonReturn, ButtonSend, Input } from '../SharedStyles';
import { Container } from './Styleds';

export default function SignupPage() {
  return (
    <Container>
      <Input
        placeholder='Nome'
      ></Input>
      <Input
        placeholder='CPF'
      ></Input>
      <Input
        placeholder='E-mail'
      ></Input>
      <Input
        placeholder='Senha'
      ></Input>
      <ButtonSend>CADASTRAR</ButtonSend>
      <ButtonReturn>Já possui uma conta? Entre</ButtonReturn>
    </Container>
  );
}
