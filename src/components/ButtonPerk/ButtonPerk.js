import { Container } from "./Styleds";

export default function ButtonPerk({ perk }) {
  return(
    <a href={perk.link} rel='noreferrer' target='_blank'>
      <Container>
        {perk.title}
      </Container>
    </a>
  );
}
