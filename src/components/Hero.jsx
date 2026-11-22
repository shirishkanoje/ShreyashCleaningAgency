import {useEffect,useState,useRef} from 'react';
import {HS,wa,MSG} from '../data.js';
import Scene from './Scenes.jsx';
import {usePhoto} from './Photo.jsx';
const NV='linear-gradient(135deg,#0b3a5e,#10243A)';
// Photo for slide n: public/images/hero/hero-n.jpg (if missing, illustration is shown)
const SL=[
 {h:HS[0][0],p:HS[0][1],scene:'living',pp:0},
 {h:HS[2][0],p:HS[2][1],scene:'sofa',pp:1,pos:'60% 55%'},
 {h:HS[1][0],p:HS[1][1],scene:'carpet',pp:2,pos:'center 65%'},
 {h:'Fresh Kitchens. Spotless Bathrooms.',p:'Grease, stains and hard-water marks removed by trained associates with the right tools.',scene:'kitchen',pp:3},
 {h:HS[3][0],p:HS[3][1],scene:'bedroom',pp:4},
 {h:'Your First Shoe Cleaning Is FREE!',p:'Book any cleaning service and get complimentary shoe cleaning on your first eligible booking.',scene:'shoe',pp:3,offer:1}];
function Slide({s,i,on}){
  const src=`/images/hero/hero-${i+1}.jpg`,ok=usePhoto(src);
  return(<div className={'sl'+(on?' on':'')}>
    <div className="bg" style={{background:NV}}>{ok?<div className="pic" role="img" aria-label={s.h} style={{backgroundImage:`url(${src})`,backgroundPosition:s.pos||'center'}}/>:<Scene kind={s.scene} p={s.pp} className="scene"/>}</div>
    <div className="w">{s.offer?<span className="badge">FIRST BOOKING OFFER</span>:<div className="tag">Shreyash Cleaning Agency · Nashik</div>}<h1>{s.h}</h1><p>{s.p}</p>
      <div className="bt"><a className="btn b1" href="#contact">BOOK YOUR CLEANING</a><a className="btn b2" href="#services">EXPLORE SERVICES</a><a className="btn b3" href={wa(MSG.b)} target="_blank" rel="noopener noreferrer">CHAT ON WHATSAPP</a></div></div>
  </div>);
}
export default function Hero(){
  const [cur,setCur]=useState(0),tm=useRef();
  const start=()=>{clearInterval(tm.current);tm.current=setInterval(()=>setCur(c=>(c+1)%SL.length),5800)};
  useEffect(()=>{start();return()=>clearInterval(tm.current)},[]);
  return(<section id="hero" aria-label="Featured">
    {SL.map((s,i)=><Slide key={i} s={s} i={i} on={i===cur}/>)}
    <div className="dots">{SL.map((_,i)=><i key={i} className={i===cur?'on':''} onClick={()=>{setCur(i);start()}}/>)}</div>
  </section>);
}
