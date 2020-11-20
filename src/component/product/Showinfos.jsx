import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../../Contextapi/Datacenter';

export default function Showinfos(props) {
  const [prod, setprod] = useState({});
  ////get state of datacenter
  const { products, productc } = useContext(Context);
  const id = props.match.params.id;
  //// get data for home product
  useEffect(() => {
    {
      products.filter(data => data.id == id).map(data => setprod(data));
    }
  }, []);
  ////get data for Cards product
  useEffect(() => {
    {
      productc.filter(datas => datas.id == id).map(datas => setprod(datas));
    }
  }, []);
  return (
    <ul className="list-group col-md-4 container ">
      <li className="list-group-item active">Product number</li>
      <li className="list-group-item ">name : {prod.name}</li>
      <li className="list-group-item">price : {prod.price}</li>
      <li className="list-group-item">stock_item : {prod.stock_items}</li>
      <li className="list-group-item">description : {prod.description} </li>
    </ul>
  );
}
