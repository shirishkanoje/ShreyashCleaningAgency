import LeadForm from './LeadForm.jsx';
export default function Popup({open,onClose,t}){
  return(<div className={'md'+(open?' on':'')} role="dialog" aria-modal="true"><div className="mb">
    <h2 style={{fontSize:'1.4rem'}}>{t('ph')}</h2><p className="sub" style={{marginBottom:16}}>{t('pp')}</p>
    <LeadForm onDone={onClose}/>
    <button className="btn b4" style={{width:'100%',justifyContent:'center',marginTop:8}} onClick={onClose}>{t('ly')}</button>
  </div></div>);
}
