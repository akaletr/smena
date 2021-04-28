import useHttp from "../hooks/http.hook";
import {useState, useEffect, useCallback} from "react";
import {Button, TextField} from "@material-ui/core";
import PostCard from "../components/PostCard";
import styled from "styled-components";
import {Input} from "antd";

const Wrapper = styled.div`
  .input {
    margin: 15px 0 0 0;
  }
`
const About = styled.div`
  img {
    width: 200px;
  }
  display: grid;
  grid-template-columns: 210px 1fr;
`

const ProfilePage = () => {
  const {request} = useHttp();
  const [posts, setPosts] = useState([]);
  const [list, setList] = useState([])
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    body: '',
  });
  const [user, setUser] = useState({
    name: '',
    surname: '',
    imageUrl: ''
  })

  const buttonHandler = async () => {
    try {
      await request('/api/posts/create', 'POST', {form, user: JSON.parse(localStorage.getItem('userData')) })
      setForm({
        title: '',
        subtitle: '',
        body: ''
      });
    } catch (e) {
    }
  }

  const inputHandler = (event) => {
    setForm({...form, [event.target.name]: event.target.value});
  }

  useEffect(async () => {
    try {
      const data = await request('/api/posts/find', 'GET').then(data => data.reverse());

      // const user = await request('/api/posts/user', 'GET', JSON.parse({userId: localStorage.getItem('userData')}))
      setPosts([...data]);
      // setUser({...user});
      // console.log(user);
    } catch (e) {
    }
  }, [])

  useEffect(async () => {
    try {
      const user = await request('/api/posts/user', 'POST', {userId: JSON.parse(localStorage.getItem('userData')).userId})
      setUser({...user});
      console.log(user);
    } catch (e) {
    }
  }, [])

  useEffect(() => {
    const data = posts.map((post) => {
      return <PostCard post={post}/>
    })
    setList([...data]);
  }, [posts])

  const {TextArea} = Input;
  return (
    <Wrapper>
      <About>
        <img src={user.imageUrl} alt=""/>
        <div>
          <h2>{user.name}</h2>
          <h3>{user.surname}</h3>
        </div>

      </About>

      <Input
        className={'input'}
        type="text"
        name="title"
        id="title"
        placeholder={'Заголовок'}
        value={form.title}
        onChange={inputHandler}/>
      <Input
        className={'input'}
        type="text"
        name="subtitle"
        id="subtitle"
        placeholder={'Подзаголовок'}
        value={form.subtitle}
        onChange={inputHandler}/>
      <TextArea
        rows={4}
        className={'input'}
        name="body"
        id="body"
        value={form.body}
        placeholder={'Ваш пост'}
        onChange={inputHandler}/>

      <Button
        onClick={buttonHandler}
      >BTN</Button>


      <hr/>
      {list.reverse()}
    </Wrapper>
  )
}

export default ProfilePage;

