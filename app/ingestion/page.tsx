'use client';
import {Shell,Page,Button,Badge,Toast} from '@/components/ui';
import {UploadCloud,FileJson,FileSpreadsheet,Mail,Smartphone,Database,ShieldCheck} from 'lucide-react';
import {useRef,useState} from 'react';

const formats:Array<[string,any]>=[['CDR / IPDR',Database],['Bank / UPI',FileSpreadsheet],['Email / EML',Mail],['Mobile / Device',Smartphone],['CSV / Excel',FileSpreadsheet],['JSON / TXT',FileJson],['APK metadata',Database],['Evidence hash',ShieldCheck]];

export default function Ingestion(){
 const ref=useRef<HTMLInputElement>(null);
 const [files,setFiles]=useState<any[]>([]);
 const [toast,setToast]=useState('');
 async function upload(list:FileList|null){
  if(!list)return;
  let uploaded=false;
  let caseId='CYB/2026/001234';
  for(const file of Array.from(list)){
   const fd=new FormData();
   fd.append('file',file);
   fd.append('caseId',caseId);
   const response=await fetch('/api/evidence/upload',{method:'POST',body:fd});
   const result=await response.json();
   setFiles(value=>[...value,result]);
   if(response.ok){uploaded=true;caseId=result.caseId}else setToast(result.error||'Upload failed');
  }
  if(uploaded)location.href=`/case/${encodeURIComponent(caseId)}`;
  else{setToast('Upload failed');setTimeout(()=>setToast(''),2500)}
 }
 return <Shell><Page title="Data Ingestion" subtitle="Upload and parse multiple digital artifacts">
  <div className="grid cards-2">
   <div className="card"><div className="card-head"><div className="card-title">Evidence Intake</div><Badge type="verified"><ShieldCheck size={11}/> Read-only processing</Badge></div><div className="card-body"><div className="upload drop-zone" onClick={()=>ref.current?.click()}><input ref={ref} hidden multiple type="file" accept=".csv,.xlsx,.xls,.json,.txt,.eml" onChange={event=>upload(event.target.files)}/><div><div className="upload-icon"><UploadCloud size={25}/></div><b>Drag & Drop Files Here</b><div style={{fontSize:11,color:'#8194aa',margin:'7px 0 14px'}}>OR</div><Button primary onClick={()=>ref.current?.click()}>Browse Files</Button><p className="subtitle">Maximum demo file size: 100 MB • originals are never modified</p></div></div><div className="formats">{formats.map(([label,Icon])=><div className="format" key={label}><Icon size={15} color="#1675ee"/> <b>{label}</b></div>)}</div></div></div>
   <div className="card"><div className="card-head"><div className="card-title">Ingestion Pipeline</div></div><div className="card-body"><div style={{display:'grid',gap:12}}>{['Original Evidence','SHA-256','Immutable Evidence Record','Read-only Parsing','Normalized Copy','Entity Correlation','Risk & Graph Analysis'].map((label,index)=><div key={label} style={{display:'flex',alignItems:'center',gap:10}}><div style={{width:28,height:28,borderRadius:8,background:index<3?'#eaf4ff':'#f1edff',display:'grid',placeItems:'center',fontSize:10,fontWeight:800}}>{index+1}</div><div><b style={{fontSize:11}}>{label}</b><div style={{fontSize:9,color:'#8192a7'}}>{index<3?'Integrity layer':'Analysis layer'}</div></div></div>)}</div></div></div>
  </div>
  <div className="card section-gap"><div className="card-head"><div className="card-title">Uploaded Files</div><Button onClick={async()=>{const response=await fetch('/api/demo/load',{method:'POST'});setToast(response.ok?'Demo investigation loaded.':'Demo load failed');setTimeout(()=>setToast(''),2500)}}>Load Demo Investigation</Button></div><div className="table-wrap"><table className="table"><thead><tr><th>File</th><th>Type</th><th>Size</th><th>SHA-256</th><th>Parser</th><th>Records</th><th>Status</th></tr></thead><tbody>{files.length?files.map((file,index)=><tr key={index}><td><b>{file.originalFilename}</b></td><td>{file.type}</td><td>{file.size} B</td><td style={{fontFamily:'monospace'}}>{file.sha256?.slice(0,18)}…</td><td>{file.parser||'—'}</td><td>{file.records??'—'}</td><td><Badge type={file.error?'critical':'verified'}>{file.error?'Error':'Normalized'}</Badge></td></tr>):<tr><td colSpan={7}><div className="empty">No uploaded evidence yet. Use the intake area or load the demo investigation.</div></td></tr>}</tbody></table></div></div>
  {toast&&<Toast message={toast} onClose={()=>setToast('')}/>}</Page></Shell>
}
