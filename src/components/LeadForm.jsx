import {useState} from 'react';
import {SV,BIZ,wa} from '../data.js';
export default function LeadForm({onDone}){
  const [f,setF]=useState({n:'',m:'',a:'',s:'',g:''}),[er,setEr]=useState([]);
  const up=k=>e=>setF({...f,[k]:e.target.value});
  const submit=e=>{
    e.preventDefault();
    const ok=[f.n.trim().length>1,/^[6-9]\d{9}$/.test(f.m.replace(/[\s+-]|^91/g,'')),f.a.trim().length>1,!!f.s];
    setEr(ok.map(x=>!x));if(ok.includes(false))return;
    const m=`नमस्कार ${BIZ},\n\nमला साफसफाईची सेवा हवी आहे.\n\nनाव: ${f.n.trim()}\nमोबाईल नंबर: ${f.m.trim()}\nलोकेशन: ${f.a.trim()}\nसेवा: ${f.s}${f.g.trim()?'\nसंदेश: '+f.g.trim():''}\n\nकृपया मला संपर्क करा.\n\nधन्यवाद.`;
    window.open(wa(m),'_blank','noopener');onDone&&onDone();
  };
  const E=({i,t})=>er[i]?<div className="err" style={{display:'block'}}>{t}</div>:null;
  return(<form className="card" onSubmit={submit} noValidate>
    <label>Full Name</label><input value={f.n} onChange={up('n')} autoComplete="name"/><E i={0} t="Enter your name"/>
    <label>Mobile Number</label><input value={f.m} onChange={up('m')} inputMode="numeric" autoComplete="tel"/><E i={1} t="Enter a valid 10-digit mobile number"/>
    <label>Area in Nashik</label><input value={f.a} onChange={up('a')}/><E i={2} t="Enter your area"/>
    <label>Service</label><select value={f.s} onChange={up('s')}><option value="">Select service</option>{SV.map(s=><option key={s[0]}>{s[0]}</option>)}</select><E i={3} t="Select a service"/>
    <label>Message (optional)</label><textarea rows="2" value={f.g} onChange={up('g')}/>
    <button className="btn b3" style={{width:'100%',justifyContent:'center'}}>SUBMIT VIA WHATSAPP</button>
  </form>);
}
