import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import RegistrForm from "../../components/RegistrForm/RegistrForm";
import { getAuthError} from 'redux/auth/auth-selectors';


const RegisterPage = () => {
  const dispatch = useDispatch();
  const {status} = useSelector(getAuthError);
 
  const onRegister = (data) => {
    dispatch(signup(data));
  };

     return (
         <Form >
         <h2>Register Page</h2>
         <RegistrForm onSubmit={onRegister} />   
         {status && <p style={{color: "red"}}>Такой пользователь уже есть!</p>}
             </Form>
  );
};

export default RegisterPage;

const Form = styled.div`
    border: 3px solid darkred;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
    `;

