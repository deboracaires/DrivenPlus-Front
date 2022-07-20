import D from '../../assets/d.png';
import R from '../../assets/r.png';
import I from '../../assets/i.png';
import V from '../../assets/v.png';
import E from '../../assets/e.png';
import N from '../../assets/n.png';
import { Container } from './Styleds';

export default function Logo() {
  return(
    <Container>
      <img className='d' src={D} alt=''></img>
      <img className='r' src={R} alt=''></img>
      <img className='i' src={I} alt=''></img>
      <img className='v' src={V} alt=''></img>
      <img className='e' src={E} alt=''></img>
      <img className='n' src={N} alt=''></img>
      <div className='plus'>
        <div className='horizontal'></div>
        <div className='upright'></div>
      </div>
    </Container>
  );
}