import {useContext, useState} from "react";
import AuthContext from "../context/AuthContext";
import useHttp from "../hooks/http.hook";
import styled from "styled-components";
import StartNav from "../components/StartNav";
import {Button, TextField} from "@material-ui/core";

const AuthForm = styled.div`
  width: 300px;
  input {
    display: block;
  }
  button {
    margin: 20px 0 0 0;
  }
`

const RegisterPage = () => {
  const auth = useContext(AuthContext);
  const {loading, error, request, clearError} = useHttp();
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    surname: '',
    isBartender: false
  });

  const onChangeHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  }

  const registerHandler = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...form});
      console.log('Data | ', data);
    } catch (e) {}
  }


  return (
    <>
      <AuthForm>
        <div>
          <TextField
            id={'name'}
            type="text"
            name={'name'}
            label={'Имя'}
            onChange={onChangeHandler}
            autoComplete={'off'}
          />
          <TextField
            id={'surname'}
            type="text"
            name={'surname'}
            label={'Фамилия'}
            onChange={onChangeHandler}
            autoComplete={'off'}
          />
          <TextField
            id={'email'}
            type="text"
            name={'email'}
            label={'email'}
            onChange={onChangeHandler}
            autoComplete={'off'}
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
          onClick={registerHandler}
          variant="contained"
          disabled={loading}
        >Регистрация</Button>
      </AuthForm>
      {error ? error.message : null}
    </>
  )
}

export default RegisterPage;