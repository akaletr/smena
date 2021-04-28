import {useParams} from 'react-router-dom';
import {useCallback, useEffect, useState} from "react";
import useHttp from "../hooks/http.hook";

const DetailPage = () => {
  const [bar, setBar] = useState({});
  const {id} = useParams();
  const {request} = useHttp();

  const getBar = useCallback(async () => {
    try {
      const bar1 = await request(`/api/bar/${id}`, 'GET', null);
      setBar(bar1)
    } catch (e) {}
  }, []);


  useEffect(() => {
    getBar();
  }, [request])

  const subscribe = async () => {
    try {
      const {userId} = JSON.parse(localStorage.getItem('userData'));
      await request('/api/bar/subscribe', 'POST', {userId, id});
    } catch (e) {}

  }

  return (
    <>
      <pre>{JSON.stringify(bar)}</pre>
      <button onClick={subscribe}>Подписаться</button>
      <h1>Detail Page</h1>

    </>
  )
}

export default DetailPage;