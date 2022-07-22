import GlobalStyled from './GlobalStyles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import { AuthProvider } from './contexts/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyled />
        <Routes>
          <Route path='/' element={<SigninPage />}/>
          <Route path='/sign-up' element={<SignupPage />}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
