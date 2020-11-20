import React, { createContext, useState, useEffect } from 'react';
import { db } from '../firebase/Config';
export const Context = createContext();
export function Datacenter(props) {
  const [products, setproducts] = useState([]);
  ////get data from firebase collection
  useEffect(() => {
    function fetchData() {
      db.collection('products')
        .get()
        .then(result => {
          const data = result.docs.map(product => {
            return {
              ...product.data(),
              id: product.id,
            };
          });
          setproducts(data);
        });
    }
    fetchData();
  }, []);
  ////delet product by id
  function deletfromFirebase(id) {
    db.collection('products').doc(id).delete();
  }
  ////it's how to add a data to firebase
  // useEffect(() => {
  //    db.collection('products').add({
  //        name:'',
  //        price:'',
  //        stock_items:''
  //    })

  // }, [])

  //// create seconde state and seconde collection from firebase
  const [productc, setproductc] = useState([]);
  /////get data from firebase second collection
  useEffect(() => {
    function fetchDatas() {
      db.collection('Cards')
        .get()
        .then(result => {
          const datas = result.docs.map(card => {
            return {
              ...card.data(),
              id: card.id,
            };
          });
          setproductc(datas);
        });
    }
    fetchDatas();
  }, []);

  //// get data from addnew
  function getData(data) {
    db.collection('products').add(data);
  }

  ///get id for add to Cards
  function getId(id) {
    const putId = products.filter(res => res.id == id);
    db.collection('Cards').add(...putId);
    setproductc([...products, ...putId]);
  }
  ///func delet for Cards
  function deletfromCard(id) {
    db.collection('Cards').doc(id).delete();
  }
  ///just for showing info product to alert
  //function Idforview(data) {
  // alert(
  //   'id:' +
  //     data.id +
  //     '\n' +
  //     'name : ' +
  //     data.name +
  //     '\n' +
  //     'price:' +
  //     data.price +
  //     '\n' +
  //     'stock_items : ' +
  //     data.stock_items +
  //     '\n' +
  //     'description : ' +
  //     data.description
  // );
  //}
  /////update firbase Cards
  function updatId(data, id,url) {
    if (url==""){
      db.collection('Cards').doc(id).update(data);

    }
    else{
      const newObject = {
      id,
      name: data.name,
      price: data.price,
      stock_items: data.stock_items,
      description: data.description,
      image:url,
    }
    
    const upd = productc.map(cnt => (cnt.id == id ? (cnt = newObject) : cnt));
    db.collection('Cards')
      .doc(id)
      .update(newObject);
       setproductc([...upd]);
    }
    
   
  }
  //// update firebase Home butt
  function updatId2(data, id , url) {
    
    if (url==""){
      db.collection('products').doc(id).update(data);
    }
    else{
      const newObjects = {
      id,
      name: data.name,
      price: data.price,
      stock_items: data.stock_items,
      description: data.description,
      image:url,
    }
    const upds = products.map(cnt => (cnt.id == id ? (cnt = newObjects) : cnt));
    db.collection('products').doc(id).update(newObjects);
    setproducts([...upds]);
    }
    
  }
  return (
    <div>
      <Context.Provider
        value={{
          products,
          productc,
          deletfromFirebase,
          getData,
          getId,
          deletfromCard,
          //Idforview,//alert info
          updatId,
          updatId2,
        }}
      >
        {props.children}
      </Context.Provider>
    </div>
  );
}
