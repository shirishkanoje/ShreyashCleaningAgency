import {useState,useEffect} from 'react';
import {T} from './data.js';
import Loader from './components/Loader.jsx';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import {Why,About,Videos,Areas,Contact,Footer,WaFab} from './components/Sections.jsx';
import {Services,Offer,How,Equipment,Reviews} from './components/Extra.jsx';
import Popup from './components/Popup.jsx';
const get=(k)=>{try{return localStorage.getItem(k)}catch{return null}};
const set=(k,v)=>{try{localStorage.setItem(k,v)}catch{}};
export default function App(){
  const [L,setL]=useState(get('csL')||'en');
  const [pop,setPop]=useState(false);
  const t=(k,d)=>T[L][k]??d??T.en[k];
  useEffect(()=>{document.documentElement.lang=L;set('csL',L)},[L]);
  useEffect(()=>{
    if(Date.now()-(+get('csDone')||0)>864e5){const id=setTimeout(()=>setPop(true),35000);return()=>clearTimeout(id)}
  },[]);
  const closePop=()=>{setPop(false);set('csDone',String(Date.now()))};
  return(<>
    <Loader/><div className="ann">{t('an')}<a href="#offer">Know more</a></div><Header L={L} setL={setL} t={t}/>
    <main id="top"><Hero/><Why t={t}/><Services t={t}/><Offer t={t}/><How t={t}/><Equipment t={t}/><About t={t}/><Videos t={t}/><Reviews t={t}/><Areas t={t}/><Contact t={t}/></main>
    <Footer/><WaFab/><Popup open={pop} onClose={closePop} t={t}/>
  </>);
}
