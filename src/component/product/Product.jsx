import React, { useContext } from 'react';
import { Context } from '../../Contextapi/Datacenter';
import { Link } from 'react-router-dom';

export default function Product(props) {
  /////get function from datacenter
  const { getId, deletfromFirebase } = useContext(Context);
  ////send id for click send to card
  function sendId() {
    getId(props.data.id);
  }
  ///// send id for delet product
  function deletButt() {
    deletfromFirebase(props.data.id);
  }
  //function viewId() {
  //  Idforview(props.data);
  // }
  return (
    
     <div className="card col-lg-4">
       

       <ul className="list-group  mt-2">
        <li className="list-group-item active">Product</li>
        <li className="list-group-item ">name : {props.data.name}</li>
        <li className="list-group-item">price : {props.data.price}</li>
        <li className="list-group-item">
          stock_item : {props.data.stock_items}
        </li>
        <li className="list-group-item">
          <img src={props.data.image} style={{width:200+"px",height:200+"px"}} alt="image"/>
        </li>
        <li className="list-group-item">
          <Link
            className="btn btn-warning d-block mt-2"
            to={'/infos/' + props.data.id}
          >
            view details
          </Link>
          <Link
            className="btn btn-primary d-block mt-2"
            to={'/update/' + props.data.id}
          >
            update
          </Link>
         
          <button
            onClick={sendId}
            className="btn btn-success float-right d-block mt-2"
          >
            add to card
          </button>
          <button onClick={deletButt} className="btn btn-danger d-block mt-2 ">
            Delet
          </button>
        </li>
      </ul> 
       {/* <button onClick={viewId} className="btn btn-primary float-left">
            View details
          </button>*/}
    </div>
  );
}
