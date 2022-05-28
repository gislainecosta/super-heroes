import * as St from './styles';

const Login = () => {
  return (
    <St.Container>
      <St.Title>Login</St.Title>
      <St.Input placeholder='E-mail' type='text'/>
      <St.Input placeholder='Senha' type='text' />
      <St.Button>Enviar</St.Button>
    </St.Container>
  );
}

export default Login