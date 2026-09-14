'use client';
import {Shell,Page,Button,Badge} from '@/components/ui';
import {Search,Link2,Info} from 'lucide-react';
import {useState} from 'react';

export default function Entities(){
 const [q,setQ]=useState('9876543210');
 const [rows,setRows]=useState<any[]>([]);
 const [detail,setDetail]=useState<any>(null);

 async function search(){
  const r=await fetch('/api/entities/search?q='+encodeURIComponent(q));
  setRows(await r.json());
 }

 return (
  <Shell>
   <Page title="Entity Search & Correlation" subtitle="Search and view linked entities across multiple data sources">
    <div className="card">
     <div className="card-body">
      <div style={{display:'flex',gap:8}}>
       <input className="input" value={q} onChange={e=>setQ(e.target.value)} placeholder="Phone, IMEI, IMSI, UPI, account, IP, email, APK hash..."/>
       <Button primary icon={<Search size={14}/>} onClick={search}>Search</Button>
      </div>
     </div>
    </div>

    <div className="grid cards-2 section-gap">
     <div className="card">
      <div className="card-head">
       <div className="card-title">Search Results</div>
       <Badge>{rows.length} matches</Badge>
      </div>
      <div className="table-wrap">
       <table className="table">
        <thead>
         <tr><th>Type</th><th>Value</th><th>Action</th></tr>
        </thead>
        <tbody>
         {rows.length?rows.map(x=>(
          <tr key={x.type+x.id}>
           <td><Badge type="blue">{x.type}</Badge></td>
           <td><b>{x.value}</b></td>
           <td>
            <Button onClick={async()=>{const r=await fetch('/api/entities/'+x.id);setDetail(await r.json());}}>
             <Info size={12}/> Profile
            </Button>
           </td>
          </tr>
         )):(
          <tr>
           <td colSpan={3}>
            <div className="empty">Search the demo cluster for 9871112233, XX6721 or 356789012345678.</div>
           </td>
          </tr>
         )}
        </tbody>
       </table>
      </div>
     </div>

     <div className="card">
      <div className="card-head"><div className="card-title">Entity Profile</div></div>
      <div className="card-body">
       {detail?(
        <>
         <div className="eyebrow">{detail.type}</div>
         <h2 style={{fontSize:20,margin:'4px 0 14px'}}>{detail.number||detail.accountNo||detail.value}</h2>
         <div className="kpi-row">
          <div className="mini-kpi"><b>{detail.imei?.value||'-'}</b><span>Linked IMEI</span></div>
          <div className="mini-kpi"><b>{detail.ips?.length??0}</b><span>Linked IPs</span></div>
          <div className="mini-kpi"><b>{detail.transactionsFrom?.length??0}</b><span>Outgoing Tx</span></div>
         </div>
         <div style={{marginTop:16}}>
          <Badge type="critical">High Risk - 0.91</Badge>
          <p className="subtitle">Confidence is shown per relationship; weak matches are not treated as confirmed identity.</p>
         </div>
        </>
       ):(
        <div className="empty">Select a result to inspect linked phones, IMEIs, accounts, UPI, IPs, emails and transactions.</div>
       )}
      </div>
     </div>
    </div>

    <div className="card section-gap">
     <div className="card-head">
      <div className="card-title">Explainable Correlation</div>
      <Badge type="purple"><Link2 size={11}/> Evidence-backed</Badge>
     </div>
     <div className="card-body">
      <div style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',gap:12,textAlign:'center'}}>
       <div className="mini-kpi"><b>9871112233</b><span>Phone</span></div>
       <div style={{fontWeight:800,color:'#1675ee'}}>{'-> 99%'}</div>
       <div className="mini-kpi"><b>356789012345678</b><span>Same IMEI</span></div>
      </div>
      <div style={{marginTop:14,background:'#f7faff',padding:12,borderRadius:8,fontSize:11}}>
       <b>Why this link?</b>
       <p style={{margin:'6px 0',color:'#62768d'}}>Same device IMEI observed across two subscriber numbers. Source: CDR + device records. Timestamp overlap supports the relationship.</p>
      </div>
     </div>
    </div>
   </Page>
  </Shell>
 );
}
