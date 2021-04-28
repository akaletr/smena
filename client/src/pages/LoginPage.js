import {useState, useEffect, useContext} from 'react';
import styled from "styled-components";
import useHttp from "../hooks/http.hook";
import AuthContext from "../context/AuthContext";
import StartNav from "../components/StartNav";
import {TextField, Button} from "@material-ui/core";

const AuthForm = styled.div`
  width: 300px;
  input {
    display: block;
  }
  button {
    margin: 20px 0 0 0;
  }
`

const LoginPage = () => {
  const auth = useContext(AuthContext);
  const {loading, error, request, clearError} = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
    isBartender: false
  });

  const onChangeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  }

  const loginHandler = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', {...form});
      auth.login(data.token, data.userId);
      console.log('Data | ', data);
    } catch (e) {

    }
  }

  return (
    <>
      <AuthForm>
        <div>
          <TextField
            id={'email'}
            type="text"
            name={'email'}
            label={'email'}
            autoComplete={'off'}
            onChange={onChangeHandler}
          />
          <TextField
            id={'password'}
            type="password"
            name={'password'}
            label={'Password'}
            onChange={onChangeHandler}
          />
        </div>

        <Button
          onClick={loginHandler}
          variant="contained"
          disabled={loading}
        >Войти</Button>
      </AuthForm>
      {error ? error.message : null}
    </>
  )
}

export default LoginPage;