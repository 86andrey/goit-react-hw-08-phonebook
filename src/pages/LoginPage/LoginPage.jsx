import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
import LoginForm from "../../components/LoginForm/LoginForm";
import { getAuthError } from 'redux/auth/auth-selectors';


const LoginPage = () => {
  const dispatch = useDispatch();
  const {status, message} = useSelector(getAuthError);
  
  const onLogin = (data) => {
    dispatch(login(data));
  };

     return (
         <Form>
          <h2>Login Page</h2>
          <LoginForm onSubmit={onLogin} />   
          {status && <p style={{color: "red"}}>{message}</p>}
        </Form>
  );
};

export default LoginPage;

const Form = styled.div`
    border: 3px solid darkred;
    border-radius: 10px;
    padding: 15px;
    margin-top: 20px;
    `;