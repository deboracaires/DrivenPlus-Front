import { ButtonSend } from '../../pages/SharedStyles';
import { Container, Flex, InputLarge, InputSmall } from './Styleds';

export default function CardData() {
  return(
    <Container>
      <InputLarge
        placeholder='Nome impresso no cartão'
      ></InputLarge>
      <InputLarge
        placeholder='Digitos do cartão'
      ></InputLarge>
      <Flex>
        <InputSmall
          placeholder='Código de segurança'
        ></InputSmall>
        <InputSmall
          placeholder='Validade'
        ></InputSmall> 
      </Flex>
      <ButtonSend>ASSINAR</ButtonSend>
    </Container>
  );
}
