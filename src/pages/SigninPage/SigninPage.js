import Logo from '../../components/Logo/Logo';
import { Container } from './Styleds';
import { ButtonReturn, ButtonSend, Input } from '../SharedStyles';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { SignInDataValidation } from '../../validations/SignInDataValidation';
import api from '../../services/api';
import SignInSucess from '../../modals/SignInSucess';
import SignInError from '../../modals/SignInError';
import useAuth from '../../hooks/useAuth';

export default function SigninPage() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const { auth, login } = useAuth();

  useEffect(() => {
    if (auth){
      if (auth.membership === null) 
        navigate('/subscriptions');
      else
        navigate('/home');
    }
  }, []);

  const handleChange = (prop) => (event) => {
    setValues({...values, [prop]: event.target.value});
  };

  function logIn(event) {
    event.preventDefault();
    const verifyData = SignInDataValidation(values.email, values.password);
    if (!verifyData) return;
    
    const body = { email: values.email, password: values.password };
    api.signIn(body)
      .then((res) => {
        SignInSucess();
        login(res.data);
      })
      .catch((err) => SignInError(err.response.status));    
  }

  return (
    <Container>
      <Logo />
      <form onSubmit={logIn}>
        <Input
          placeholder='E-mail'
          value={values.email}
          type='email'
          onChange={handleChange('email')}
        ></Input>
        <Input
          placeholder='Senha'
          value={values.password}
          type='password'
          onChange={handleChange('password')}
        ></Input>
        <ButtonSend type='submit'>ENTRAR</ButtonSend>
      </form>
      <ButtonReturn onClick={() => navigate('sign-up')}>Não possui conta? Cadastre-se</ButtonReturn>  
    </Container>
  );
}
