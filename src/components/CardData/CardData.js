import { ButtonSend } from '../../pages/SharedStyles';
import { Container, Flex, InputLarge, InputSmall } from './Styleds';

export default function CardData({ handleChange, postSignature, values}) {
  return(
    <Container>
      <form onSubmit={postSignature}>
        <InputLarge
            placeholder='Nome impresso no cartão'
            type="text"
            value={values.cardName}
            onChange={handleChange('cardName')}
        ></InputLarge>
        <InputLarge
            placeholder='Digitos do cartão'
            type="text"
            value={values.cardNumber}
            onChange={handleChange('cardNumber')}
        ></InputLarge>
        <Flex>
            <InputSmall
            placeholder='Código de segurança'
            value={values.securityNumber}
            type="text"
            onChange={handleChange('securityNumber')}
            ></InputSmall>
            <InputSmall
            placeholder='Validade'
            value={values.expirationDate}
            type='month'
            onChange={handleChange('expirationDate')}
            ></InputSmall> 
        </Flex>
        <ButtonSend type='submit'>ASSINAR</ButtonSend>
      </form>
    </Container>
  );
}
