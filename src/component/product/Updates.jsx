import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../Contextapi/Datacenter';
import { storage } from '../../firebase/Config';

export default function Updates(props) {
  const [prodi, setprodi] = useState({});
  const [url,seturl]=useState("")
  const { products, productc, updatId, updatId2 } = useContext(Context);

  function hndlnwInput(e) {
    setprodi({
      ...prodi,
      [e.target.name]:e.target.value,
    });
  }
  /////send id for update Cards
  function sendtoData() {
    const id = props.match.params.id;
    updatId(prodi, id ,url);
    props.history.push('/Cards');
  }
  //// send id for update Home
  function sendtpData2() {
    const id = props.match.params.id;
    updatId2(prodi, id ,url);
    props.history.push('/');
  }
  ////remplir state prodi de new data input for Cards
  useEffect(() => {
    const id = props.match.params.id;
    productc
      .filter(datas => datas.id == id)
      .map(datas => {
        setprodi({
          name: datas.name,
          price: datas.price,
          stock_items: datas.stock_items,
          description: datas.description,
          image: datas.image,
        });
      });
  }, []);
  ////remplir state prodi de new data input for Home
  useEffect(() => {
    const id = props.match.params.id;
    products
      .filter(data => data.id == id)
      .map(info => {
        setprodi({
          name: info.name,
          price: info.price,
          stock_items: info.stock_items,
          description: info.description,
          image:info.image,
        });
      });
  }, []);
  function hndlImage(e){
    const image=e.target.files[0]
    const uploadTask = storage.ref(`/images/${image.name}`).put(image)
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
      storage.ref('images').child(image.name).getDownloadURL()
       .then(fireBaseUrl => {
       // console.log(fireBaseUrl);
       seturl(fireBaseUrl)
      
      
       })
    })
      
    }
  return (
    <div className="col-md-4 offset-4">
      <h1 className="text-secondary text-center">update contact</h1>
      <input
        onChange={hndlnwInput}
        name="name"
        defaultValue={prodi.name}
        type="text"
        className="form-control"
      />
      <input
        onChange={hndlnwInput}
        name="price"
        defaultValue={prodi.price}
        type="text"
        className="form-control"
      />
      <input
        onChange={hndlnwInput}
        name="stock_items"
        defaultValue={prodi.stock_items}
        type="text"
        className="form-control"
      />
      <input
        onChange={hndlnwInput}
        name="description"
        defaultValue={prodi.description}
        type="text"
        className="form-control"
      />
      <input
      onChange={hndlImage}
       type="file"
       name="image"
       defaultValue={prodi.image}
       className="form-control"
       />
      <button onClick={sendtoData} className="btn btn-warning float-right mt-2">
        update Cards
      </button>
      <button onClick={sendtpData2} className="btn btn-info float-left mt-2">
        update Home
      </button>
    </div>
  );
}
