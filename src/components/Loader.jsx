import {useEffect,useMemo,useState} from 'react';
import {Logo} from './Header.jsx';
export default function Loader(){
  const [out,setOut]=useState(false),[gone,setGone]=useState(false);
  const dust=useMemo(()=>Array.from({length:22},()=>({left:Math.random()*100+'%',top:Math.random()*100+'%',animationDelay:Math.random()*2+'s,'+(0.3+Math.random()*2)+'s'})),[]);
  useEffect(()=>{
    const rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
    const a=setTimeout(()=>setOut(true),rm?300:3000),b=setTimeout(()=>setGone(true),rm?1000:3700);
    return()=>{clearTimeout(a);clearTimeout(b)};
  },[]);
  if(gone)return null;
  return(<div id="ld" className={out?'out':''} aria-hidden="true">
    <div className="clean"/><div className="br">🧹</div>
    <div className="lg"><Logo size={84}/><h2 style={{margin:'8px 0 0'}}>SHREYASH CLEANING AGENCY</h2><b style={{letterSpacing:'.3em',color:'#1688D4'}}>CLEAN SPACE · BETTER LIFE</b></div>
    {dust.map((s,i)=><i key={i} className="dust" style={s}/>)}
  </div>);
}
