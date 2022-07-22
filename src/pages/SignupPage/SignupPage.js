import { ButtonReturn, ButtonSend, Input } from '../SharedStyles';
import SignUpSucess from '../../modals/SignUpSucess'
import { Container } from './Styleds';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../../services/api';
import { SignUpDataValidation } from '../../validations/SignUpDataValidation';
import showError from '../../modals/SignUpError';

export default function SignupPage() {
  const [values, setValues] = useState({
    name: '',
    cpf: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  async function sendNewUser(event) {
    event.preventDefault();
    const verifyData = SignUpDataValidation(values.email, values.name, values.cpf, values.password);
    if (!verifyData) return;
    try {
      const body = { email: values.email, name: values.name, cpf: values.cpf, password: values.password };
      await api.postNewUser(body);
      SignUpSucess();
      navigate('/');
    } catch (err) {
      showError(err.response.status);
    }
  }

  return (
    <Container>
      <form onSubmit={sendNewUser}>
        <Input
          placeholder='Nome'
          value={values.name}
          onChange={handleChange('name')}
        ></Input>
        <Input
          placeholder='CPF'
          value={values.cpf}
          onChange={handleChange('cpf')}
        ></Input>
        <Input
          placeholder='E-mail'
          value={values.email}
          onChange={handleChange('email')}
          type='email'
        ></Input>
        <Input
          placeholder='Senha'
          value={values.password}
          onChange={handleChange('password')}
          type='password'
        ></Input>
        <ButtonSend type='submit'>CADASTRAR</ButtonSend>
      </form>
      <ButtonReturn onClick={() => navigate('/')}>Já possui uma conta? Entre</ButtonReturn>
    </Container>
  );
}
