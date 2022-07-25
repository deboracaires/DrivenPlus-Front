import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CancelError from "../../modals/CancelError";
import api from "../../services/api";
import { CancelPlan, ChangePlan, Container } from "./Styleds";

export default function FooterHome() {
  const { auth, login } = useAuth();
  
  const navigate = useNavigate();
  
  async function cancelPlan() {
    await api.deleteSubscription(auth.token)
      .then(() => {
        login({...auth, membership: null});
        navigate('/subscriptions');
      })
      .catch(() => {
        CancelError();
      })
  }
  
  return(
    <Container>
      <ChangePlan onClick={() => navigate('/subscriptions')}>Mudar plano</ChangePlan>
      <CancelPlan onClick={cancelPlan}>Cancelar plano</CancelPlan>
    </Container>
  );
}
