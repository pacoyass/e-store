import React, { useContext } from 'react';
import { Context } from '../../Contextapi/Datacenter';
import { Link } from 'react-router-dom';

export default function Cards(props) {
  const { productc, deletfromCard } = useContext(Context);

  function sendIdelet(id) {
    deletfromCard(id);
  }

  return (
    <div className="container ">
      <div className="row ">
        {productc.map(datas => (
          <ul className="list-group col-md-4 mt-2">
            <li className="list-group-item active">Product</li>
            <li class="list-group-item ">name : {datas.name}</li>
            <li class="list-group-item">price : {datas.price}</li>
            <li className="list-group-item">
              stock_item : {datas.stock_items}
            </li>
            <li className="list-group-item">
                <img src={datas.image} style={{width:330+"px",height:300+"px"}} alt="img"/> 
            </li>
            <li className="list-group-item">
              <Link className="btn btn-warning" to={'/infos/' + datas.id}>
                view details
              </Link>
              <Link className="btn btn-primary ml-4" to={'/update/' + datas.id}>
                Update
              </Link>
              <button
                onClick={sendIdelet.bind(this, datas.id)}
                className="btn btn-danger float-right "
              >
                Delet
              </button>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
