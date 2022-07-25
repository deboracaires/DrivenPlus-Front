import { Container, ContainerPerks, Image, Perk, PlanName, Text } from './Styleds';
import { BsCash, BsFileText  } from "react-icons/bs";

export default function Benefits({ planData }) {
  return (
    <Container>
      <Image src={planData.image} alt=''/>
      <PlanName>{planData.name}</PlanName>
      <ContainerPerks>
        <Text>
          <BsFileText color='#FF4791' size='16px'/>
          <h1>Benefícios: </h1>
        </Text>
        { planData.perks.map((perk, index) => <Perk key={index}>{index + 1}. {perk.title} </Perk>) }
        <Text>
          <BsCash color='#FF4791' size='16px'/>
          <h1>Preço:  </h1>
        </Text>
        { <Perk>{Number(planData.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} cobrados mensalmente</Perk> }
      </ContainerPerks>
    </Container>
  );
}
