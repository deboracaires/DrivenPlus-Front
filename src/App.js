import GlobalStyled from './GlobalStyles/GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignupPage from './pages/SignupPage/SignupPage';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<SignupPage />}/> 
      </Routes>
    </BrowserRouter>
  );
}
