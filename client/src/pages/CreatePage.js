import {useState} from "react";
import useHttp from "../hooks/http.hook";
import styled from "styled-components";
import {Button, TextField} from "@material-ui/core";

const Temp = styled.div`

  .input {
    display: block;
  }
  button {
    display: block;
    margin: 15px 0 0 0;
  }
`

const CreatePage = () => {
  const [bar, setBar] = useState({
    name: '',
    address: ''
  });
  const {request} = useHttp();


  const inputHandler = (event) => {
    setBar({...bar, [event.target.name]: event.target.value});
  }

  const imageHandler = (event) => {
    setBar({...bar, file: event.target.files})
  }

  const createHandler = async () => {
    await request('/api/bar/', 'POST', {...bar});
    console.log(bar);
  }


  return (
    <Temp>
      <TextField
        className={'input'}
        type="text"
        name="name"
        id="name"
        label={'Название бара'}
        onChange={inputHandler}/>
      <TextField
        type="text"
        name="address"
        id="address"
        label={'Адрес'}
        onChange={inputHandler}/>
      <Button onClick={createHandler}>Создать бар</Button>
    </Temp>
  )
};

export default CreatePage;