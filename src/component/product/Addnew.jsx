import React, { useContext, useState } from 'react';
import { Context } from '../../Contextapi/Datacenter';
import { storage } from '../../firebase/Config';

export default function Addnew(props) {
  const [newproduct, setnewproduct] = useState([]);
  const [Url,setUrl]=useState("")
  const { getData } = useContext(Context);
  //// add the input value to this state
  function hundlInput(e) {
    setnewproduct({
      ...newproduct,
      [e.target.name]: e.target.value,
    });
  }
  //// send this state by click to datacenter
  function sendData() {
    getData({
      name:newproduct.name,
      price:newproduct.price,
      stock_items:newproduct.stock_items,
      image:Url,
    });
    props.history.push('/');
  }
  
  function changeImage(e){
  const img=e.target.files[0]
  const uploadTask = storage.ref(`/images/${img.name}`).put(img)
  uploadTask.on('state_changed', 
  (snapShot) => {
    //takes a snap shot of the process as it is happening
    console.log(snapShot)
  }, (err) => {
    //catches the errors
    console.log(err)
  }, () => {
    // gets the functions from storage refences the image storage in firebase by the children
    // gets the download url then sets the image from firebase as the value for the imgUrl key:
    storage.ref('images').child(img.name).getDownloadURL()
     .then(fireBaseUrl => {
     // console.log(fireBaseUrl);
     setUrl(fireBaseUrl)
    
    
     })
  })
    
  }
  return (
    <div className="form-group container mt-3">
      <input
        name="name"
        onChange={hundlInput}
        type="text"
        className="form-control mt-2"
        placeholder="type name"
      />
      <input
        name="price"
        onChange={hundlInput}
        type="text"
        className="form-control mt-2"
        placeholder="type price"
      />
      <input
        name="stock_items"
        onChange={hundlInput}
        type="text"
        className="form-control mt-2"
        placeholder="type stock"
      />
      <input
        name="description"
        onChange={hundlInput}
        type="textarea"
        className="form-control mt-2"
        placeholder="Description"
      />
      <input
      type="file"
      className="form-control mt-2"
      name="image"
      placeholder="upload image"
      onChange={changeImage}
      />
      <button onClick={sendData} className="btn btn-success mt-2 float-right">
        Add to firbase
      </button>
    </div>
  );
}
