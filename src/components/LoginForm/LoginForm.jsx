import useForm from '../../shared/hooks/useForm';
import styled from 'styled-components';

const initialState = {
  email: '',
  password: '',
};

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;
  //   console.log(name, email);
  return (
    <form action="" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="">Email пользователя:</Label>
        <Input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Введите email пользователя"
        />
      </div>
      <div>
        <Label htmlFor="">Пароль пользователя:</Label>
        <Input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Введите пароль пользователя"
        />
      </div>
      <div>
        <Btn type="submit">Вход</Btn>
      </div>
    </form>
  );
};

export default LoginForm;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Input = styled.input`
  border-radius: 5px;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 5px;
  width: 250px;
`;

const Btn = styled.button`
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-weight: 400;
  padding: 12px 12px;
  //     :hover, :focus {
  //   color: white;
  //   background-color: greenyellow;
  // }
`;
