import {useState} from 'react';
import {SV,BIZ,wa,waTo,N,N2,MSG,svMsg,REVIEWS} from '../data.js';
import Scene from './Scenes.jsx';
import Photo,{slug} from './Photo.jsx';
const ext={target:'_blank',rel:'noopener noreferrer'};
const SC={'Home Deep Cleaning':'living','Sofa Dry Cleaning':'sofa','Office Chair Cleaning':'office','Carpet Dry Cleaning':'carpet','Curtain Cleaning':'curtain','Window Cleaning':'window','Single Room Cleaning':'bedroom','Furniture Vacuum Cleaning':'tvac','Kitchen Deep Cleaning':'kitchen','Bathroom Deep Cleaning':'bathroom','Full Home Deep Cleaning':'housekeeping','Office Deep Cleaning':'office','All Types of Housekeeping':'tspray'};
export const Services=({t})=>(<section id="services" className="alt"><div className="w"><h2>{t('sh')}</h2><p className="sub">{t('ss')}</p>
  <div className="grid">{SV.map((s,i)=><div className="card" key={s[0]}>
    <div className="sh"><Photo src={`/images/services/${slug(s[0])}.jpg`} alt={s[0]+' in Nashik'} fallback={<Scene kind={SC[s[0]]} p={i}/>}/></div>
    <h3>{s[0]}</h3><div className="m">{s[1]}</div><p>{s[2]}</p><ul>{s[3].map(b=><li key={b}>{b}</li>)}</ul><p style={{fontSize:'.78rem'}}>Get a personalised quote on WhatsApp.</p>
    <div className="bt"><a className="btn b1" href={wa(svMsg(s[0]))} {...ext}>{t('bk')}</a><a className="btn b3" href={wa(svMsg(s[0]))} {...ext}>WhatsApp</a></div></div>)}</div></div></section>);
export const Offer=({t})=>(<section id="offer"><div className="w"><div className="offer2">
  <div className="ot"><span className="badge">{t('ob')}</span><h2>{t('oh')}</h2><p>{t('op')}</p><small>{t('oc')}</small>
  <div className="bt"><a className="btn b2" href="#contact">{t('bk')}</a><a className="btn b3" href={wa(`नमस्कार ${BIZ}, मला पहिल्या बुकिंगवरील मोफत शूज साफसफाईच्या ऑफरबद्दल माहिती हवी आहे.`)} {...ext}>WhatsApp</a></div></div>
  <div className="oi"><Photo src="/images/offer.jpg" alt="Free shoe cleaning offer" fallback={<Scene kind="shoe" p={3}/>}/><span className="free">FREE</span></div></div></div></section>);
export const How=({t})=>(<section><div className="w"><h2>{t('hw')}</h2><p className="sub">Three simple steps from inquiry to a cleaner home.</p>
  <div className="grid">{[['1','Choose a service','Pick sofa, carpet, deep cleaning or any service you need.'],['2','Message us on WhatsApp','Share your area and requirement. We reply with a quote and time.'],['3','We clean, you relax','Our trained associates arrive with equipment and get to work.']].map(x=><div className="card" key={x[0]}><div className="ic">{x[0]}</div><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div></div></section>);
const EQ=[['Wet & dry vacuum','tvac','Pulls dust and moisture out of sofas, mattresses and floors.'],['Upholstery extraction','sofa','Lifts deep dirt from fabric so sofas look and smell fresher.'],['Spray & cleaning solutions','tspray','Right-strength solutions for stains, grease and glass.'],['Brushes & microfiber','tbrush','Gentle scrubbing and streak-free wiping on every surface.']];
export const Equipment=({t})=>(<section className="alt"><div className="w"><h2>{t('eq')}</h2><p className="sub">The right tool for each surface, so cleaning is faster and safer for your furniture. Equipment used may vary by service.</p>
  <div className="grid">{EQ.map((q,i)=><div className="card" key={q[0]}><div className="sh"><Photo src={`/images/equipment/${slug(q[0])}.jpg`} alt={q[0]} fallback={<Scene kind={q[1]} p={i+1}/>}/></div><h3>{q[0]}</h3><p>{q[2]}</p></div>)}</div></div></section>);
const Stars=({n})=><span className="stars" aria-label={n+' out of 5'}>{'★'.repeat(n)}{'☆'.repeat(5-n)}</span>;
export function Reviews({t}){
  const [f,setF]=useState({n:'',r:0,s:'',a:'',g:''}),[er,setEr]=useState(false),[msg,setMsg]=useState('');
  const up=k=>e=>setF({...f,[k]:e.target.value});
  const submit=e=>{e.preventDefault();
    if(f.n.trim().length<2||!f.r||f.g.trim().length<5){setEr(true);return}
    setEr(false);
    const m=`नमस्कार ${BIZ},\n\nमाझा अभिप्राय (Review):\n\nनाव: ${f.n.trim()}\nरेटिंग: ${'★'.repeat(f.r)}${'☆'.repeat(5-f.r)} (${f.r}/5)\nसेवा: ${f.s||'-'}\nएरिया: ${f.a.trim()||'-'}\nअभिप्राय: ${f.g.trim()}\n\nधन्यवाद.`;
    setMsg(m);window.open(waTo(N,m),'_blank','noopener');};
  return(<section id="reviews" className="alt"><div className="w"><h2>{t('rh')}</h2>
    {REVIEWS.length?<div className="grid" style={{marginBottom:32}}>{REVIEWS.map((r,i)=><div className="card" key={i}><Stars n={r.rating}/><p style={{color:'var(--tx)'}}>“{r.text}”</p><b>{r.name}</b><div className="m">{r.service}</div></div>)}</div>
    :<div className="card" style={{textAlign:'center',padding:32,marginBottom:32}}><p>{t('rt')}</p></div>}
    <div className="two"><div><h2 style={{fontSize:'1.5rem'}}>{t('rv')}</h2><p className="sub">Rate our service and write a few lines. Your review opens in WhatsApp; you press send. Want to add a photo? Attach it in the WhatsApp chat.</p></div>
    <form className="card" onSubmit={submit} noValidate>
      <label>Your Name</label><input value={f.n} onChange={up('n')}/>
      <label>Rating</label><div className="rate">{[1,2,3,4,5].map(i=><button type="button" key={i} className={i<=f.r?'on':''} onClick={()=>setF({...f,r:i})} aria-label={i+' star'}>★</button>)}</div>
      <label>Service received</label><select value={f.s} onChange={up('s')}><option value="">Select service</option>{SV.map(s=><option key={s[0]}>{s[0]}</option>)}</select>
      <label>Area (optional)</label><input value={f.a} onChange={up('a')}/>
      <label>Your feedback</label><textarea rows="3" value={f.g} onChange={up('g')}/>
      {er&&<div className="err" style={{display:'block'}}>Please add your name, a star rating and your feedback.</div>}
      <button className="btn b3" style={{width:'100%',justifyContent:'center'}}>SEND REVIEW ON WHATSAPP</button>
      {msg&&<div style={{marginTop:14,fontSize:'.85rem'}}><p>Thank you! If WhatsApp did not open, tap below. You can also send a copy to our team.</p>
        <div className="bt" style={{marginTop:8}}><a className="btn b3" href={waTo(N,msg)} {...ext}>Send to Owner</a><a className="btn b4" href={waTo(N2,msg)} {...ext}>Send to Team</a></div></div>}
    </form></div></div></section>);
}
