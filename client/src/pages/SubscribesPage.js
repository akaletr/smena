import {useState, useEffect, useCallback} from 'react';
import useHttp from "../hooks/http.hook";
import BarCard from "../components/BarCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

`

const SubscribesPage = () => {
  const [bars, setBars] = useState([]);
  const [arr, setArr] = useState([]);
  const {request} = useHttp();

  useEffect(async () => {
    const {userId} = JSON.parse(localStorage.getItem('userData'));
    const data = await request('/api/bar/subscriptions', 'POST', {userId});
    setBars(data);
  }, [])

  useEffect(() => {
    setArr(bars.map(bar => <BarCard bar={bar}/>))
  }, [bars])

  return (
    <Wrapper>
      {arr}
    </Wrapper>
  )
}

export default SubscribesPage;