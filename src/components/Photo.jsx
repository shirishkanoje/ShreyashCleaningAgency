import {useState,useEffect} from 'react';
// Shows /images/... photo if the file exists, otherwise the fallback illustration.
export function usePhoto(src){
  const [ok,setOk]=useState(false);
  useEffect(()=>{const i=new Image();i.onload=()=>setOk(true);i.onerror=()=>setOk(false);i.src=src},[src]);
  return ok;
}
export default function Photo({src,alt,fallback,style,eager}){
  const [bad,setBad]=useState(false);
  if(bad)return fallback;
  return <img src={src} alt={alt} onError={()=>setBad(true)} loading={eager?'eager':'lazy'} decoding="async" style={style}/>;
}
export const slug=s=>s.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');
