import { useNavigate } from 'react-router-dom';
import * as St from './styles';
import { LoginForm } from '../../modules/types';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<LoginForm>({
    email: '',
    password: ''
  })

  const handleChange = (name: string, value: string) => {
    window.localStorage.setItem('isLogged', 'true')
    setValues({ ...values, [name]: value });
  }

  const submitLogin = () => {
    navigate('/superheroes')
  }
  
  return (
    <St.Container>
      <St.Title>Login</St.Title>
      <St.Form onSubmit={submitLogin}>
        <St.Input
          placeholder='E-mail'
          id='email'
          type='email'
          required
          name='email'
          maxLength={50}
          value={values.email}
          onChange={(ev) => handleChange('email',ev.target.value)}
        />
        
        <St.Input
          placeholder='Senha'
          type='password'
          id='password'
          required
          name='password'
          value={values.password}
          minLength={6}
          onChange={(ev) => handleChange('password', ev.target.value)}
        />
        
        <St.Button>
          Enviar
        </St.Button>
      </St.Form>
    </St.Container>
  );
}

export default Login