import useHttp from "../hooks/http.hook";
import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import BarCard from "../components/BarCard";
import styled from "styled-components";

const Wrapper = styled.div`
  padding-right: 15px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

`

const BarsPage = () => {
  const {request} = useHttp();
  const [bars, setBars] = useState([])
  const [list, setList] = useState([])


  useEffect(async () => {
    try {
      const data = await request('/api/bar/find', 'GET');
      setBars(data);
    } catch (e) {
    }
  }, [])

  //
  // useEffect(() => {
  //   setList(bars.map((bar) => <div key={bar._id}><NavLink to={`/detail/${bar._id}`}>{bar.name}</NavLink><h3>{bar.address}</h3></div> ));
  //   // setArr(bars.map(bar => (<BarCard bar={bar} />))
  // }, [bars])

  useEffect(() => {
    setList(bars.map((bar) => <BarCard bar={bar}/>));
  }, [bars]);


  return (
    <Wrapper>
      {list}
    </Wrapper>
  )
}

export default BarsPage;