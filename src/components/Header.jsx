import {useState} from 'react';
import Photo from './Photo.jsx';
export const Logo=({size=34})=>(<Photo eager src="/images/logo.png" alt="Shreyash Cleaning Agency logo" style={{height:size,width:'auto'}} fallback={<svg width={size} height={size} viewBox="0 0 64 64"><path d="M6 32 32 9l26 23" fill="none" stroke="#1688D4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/><path d="M14 30v24h36V30" fill="none" stroke="#1688D4" strokeWidth="5" strokeLinejoin="round"/><rect x="26" y="34" width="12" height="12" rx="2" fill="#37c4e8"/></svg>}/>);
export default function Header({L,setL,t}){
  const [open,setOpen]=useState(false);
  const links=[['services','n1'],['about','n2'],['videos','n3'],['reviews','n4'],['areas','n5'],['contact','n6']];
  return(<header><nav>
    <a href="#top" className="logo"><Logo/><span>Shreyash Cleaning Agency<small>Clean Space · Better Life</small></span></a>
    <div className={'l'+(open?' open':'')}>{links.map(([h,k])=><a key={h} href={'#'+h} onClick={()=>setOpen(false)}>{t(k)}</a>)}</div>
    <button className="lang" onClick={()=>setL(L==='en'?'mr':'en')} aria-label="Switch language">{L==='en'?'मराठी':'English'}</button>
    <a className="btn b1 bk" href="#contact">{t('bk')}</a>
    <button className="burger" aria-label="Menu" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?'✕':'☰'}</button>
  </nav></header>);
}
