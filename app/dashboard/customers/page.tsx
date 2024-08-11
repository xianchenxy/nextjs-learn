'use client';
import { useEffect, useState } from 'react';

export default function Customers() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('zhq-effect')
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/getData');
      const res = await response.json();
      const data = res.data[0];
      setData(data.title);
      console.log('data: ', data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return <div>
    <h1>测试mysql连接:{ data }</h1>
    <p>Customers Page这是测试页面</p>
  </div>;
}