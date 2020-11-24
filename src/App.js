import { useEffect, useState } from 'react';

import { Header } from './Views/Header'
import {List} from './Views/List'
import { Home } from './Views/Home'

import styles from './styles/app.module.scss'

// api call function

import { makeRequest, fetchMore } from './ApiCall'

function App() {

  const [photos, setPhotos] = useState([]);
  const [header, setHeader] = useState({});


  async function fetchPhoto(){
    let photoList = await makeRequest();
    setPhotos(photoList);
    setHeader({ ...photoList[0] })
  }

  async function addMore(){
    let photoList = await fetchMore();
    let list = [...photos, ...photoList];
    setPhotos(list);
  }

  useEffect(()=>{
    fetchPhoto()
  }, [])
  return (
    <div className={styles.container}>
        <Header></Header>
        {header && <Home img={header}></Home>}
       { photos.length > 0 && <List imageList={photos}></List>}
      <div className={styles.btn_wrapper}>
        <button onClick={addMore} className={styles.btn}>Load More</button>
      </div>
    </div>
  );
}

export default App;
