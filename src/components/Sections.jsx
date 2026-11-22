import {useState} from 'react';
import {SV,AR,FQ,BIZ,wa,MSG,svMsg} from '../data.js';
import Photo from './Photo.jsx';
import Scene from './Scenes.jsx';
import LeadForm from './LeadForm.jsx';
const ext={target:'_blank',rel:'noopener noreferrer'};
const WY=[['Professional approach','Trained associates and proven methods.'],['Affordable pricing','Quotes tailored to your need.'],['Modern equipment','Suitable tools for every surface.'],['Flexible scheduling','Book on a time that suits you.'],['WhatsApp booking','Quick, direct, transparent.'],['Home & office','One team for every space.']];
export const Why=({t})=>(<section className="why"><div className="w"><h2 style={{fontSize:'1.5rem'}}>{t('wh')}</h2>
  <div className="pts">{WY.map(w=><div className="pt" key={w[0]}><i>✓</i><span>{w[0]}<small>{w[1]}</small></span></div>)}</div></div></section>);
export const About=({t})=>(<section id="about" className="alt"><div className="w two"><div><h2>{t('ah')}</h2>
  <p>{t('at','We believe a clean home creates a better life. We provide professional cleaning services designed to make homes, offices and furniture cleaner, fresher and more comfortable. Our focus is quality cleaning, customer satisfaction and affordable service, from sofa and carpet cleaning to complete home deep cleaning.')}</p>
  <p style={{marginTop:12,color:'var(--mu)'}}>Prop. Ramakant Ingale · Shramik Nagar, Satpur, Nashik</p></div>
  <div><div className="ab"><Photo src="/images/about.jpg" alt="Shreyash Cleaning Agency at work" fallback={<Scene kind="housekeeping" p={4}/>}/></div><div className="card" style={{marginTop:16}}><h3>{t('eh')}</h3><p>{t('et','We use vacuum machines, upholstery cleaning tools, brushes, microfiber and glass-cleaning tools. The exact equipment list is confirmed by the owner before it is shown publicly.')}</p></div></div></div></section>);
export const Videos=({t})=>(<section id="videos"><div className="w"><h2>{t('vh')}</h2><div className="card" style={{textAlign:'center',padding:40}}><p>{t('vt')}</p></div></div></section>);
export function Areas({t}){
  const [q,setQ]=useState(''),r=AR.filter(a=>a.toLowerCase().includes(q.toLowerCase()));
  return(<section id="areas"><div className="w"><h2>{t('gh')}</h2><p className="sub">{t('gs')}</p>
    <input placeholder="Search locality..." aria-label="Search locality" value={q} onChange={e=>setQ(e.target.value)}/>
    <div>{r.length?r.map(a=><a key={a} className="chip" href={wa(`नमस्कार ${BIZ}, तुम्ही ${a}, नाशिक येथे सेवा देता का?`)} {...ext}>{a}</a>):<p>No match. Ask us on WhatsApp.</p>}</div></div></section>);
}
export const Contact=({t})=>(<section id="contact"><div className="w two"><div><h2>{t('ch')}</h2><p className="sub">{t('cs')}</p>
  <p><b>Phone / WhatsApp:</b> <a href="tel:+917498173240">7498173240</a></p><p style={{margin:'6px 0 16px'}}><b>Location:</b> Shramik Nagar, Satpur, Nashik</p>
  <a className="btn b3" href={wa(MSG.d)} {...ext}>WhatsApp</a></div><LeadForm/></div></section>);
export const Footer=()=>(<footer><div className="g">
  <div><h4>SHREYASH CLEANING AGENCY</h4><p>Clean Space · Better Life<br/>Professional Home & Office Cleaning Services in Nashik.</p><p style={{marginTop:8}}><a href="tel:+917498173240">7498173240</a></p></div>
  <div><h4>Quick Links</h4><ul>{['services','about','videos','reviews','areas','contact'].map(h=><li key={h}><a href={'#'+h} style={{textTransform:'capitalize'}}>{h}</a></li>)}</ul></div>
  <div><h4>Services</h4><ul>{SV.slice(0,6).map(s=><li key={s[0]}>{s[0]}</li>)}</ul></div></div>
  <div className="cp"><span>© {new Date().getFullYear()} Shreyash Cleaning Agency. All rights reserved.</span>
  <span>Powered by <a href="https://www.shreejaytechlabs.dev" {...ext}><b>ShreejayTechLabs</b></a> · Developer: Shirish Kanoje</span></div></footer>);
export const WaFab=()=>(<a className="fw" href={wa(MSG.d)} {...ext} aria-label="WhatsApp"><svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2zm5.2 14c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.2-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.6 1 1.3 1.7 2.3 2.2.3.2.5.1.6-.1l.8-1c.2-.2.4-.2.6-.1l1.9.9c.3.1.5.2.5.4.1.2.1.8-.1 1.5z"/></svg></a>);
