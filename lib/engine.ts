export type CanonicalRecord = Record<string, string | number | null>;
export type RiskFactor = { name:string; score:number; detail:string };
export const RISK_WEIGHTS = { velocity:25, multihop:20, deviceReuse:15, simSwitch:15, suspiciousIp:10, apk:10, spoofedEmail:10, repeatedVictims:15 };
export function normalizePhone(v:string){ const digits=v.replace(/\D/g,''); return digits.length===10?'91'+digits:digits; }
export function riskLevel(score:number){ return score>=80?'CRITICAL':score>=60?'HIGH':score>=30?'MEDIUM':'LOW'; }
export function calculateRisk(signals:Partial<Record<keyof typeof RISK_WEIGHTS, boolean>>, extras:RiskFactor[]=[]){
  const factors:RiskFactor[]=[]; let score=0;
  const labels:Record<string,[string,string]>={velocity:['High transaction velocity','Rapid transaction activity detected'],multihop:['Multi-hop fund routing','Funds move across multiple beneficiary hops'],deviceReuse:['Device reuse','Same device identifier links multiple accounts/numbers'],simSwitch:['SIM switching','Subscriber identity changes around suspicious activity'],suspiciousIp:['Shared suspicious IP','IP is reused across related entities'],apk:['Known suspicious APK','APK artifact is linked to phishing behavior'],spoofedEmail:['Spoofed email authentication','Email authentication results indicate spoofing'],repeatedVictims:['Repeated victim interactions','Multiple victims interact with the same destination']};
  for(const [k,w] of Object.entries(RISK_WEIGHTS)){ if(signals[k as keyof typeof RISK_WEIGHTS]){score+=w; const [name,detail]=labels[k]; factors.push({name,score:w,detail});}}
  for(const f of extras){score+=f.score; factors.push(f)} score=Math.min(100,score); return {score,level:riskLevel(score),factors};
}
export function demoData(){
 const phones=['9871112233','9879998888','9988776655','9000011111','9000011112','9000011113','9000011114','9000011115','9000011116','9000011117','9000011118','9000011119','9000011120','9000011121','9000011122','9000011123','9000011124','9000011125','9000011126','9000011127'];
 const imeis=['356789012345678','356789012345679','356789012345680','356789012345681','356789012345682','356789012345683','356789012345684','356789012345685','356789012345686','356789012345687'];
 const accounts=['XX6721','XX9987','XX4412','XX1022','XX2044','XX3321','XX7788','XX8899'];
 const upis=['fraud@okaxis','mulea@okaxis','muleb@okhdfc','cashout@oksbi','safe@okicici'];
 const base=new Date('2026-09-12T10:00:00+05:30');
 const txs=Array.from({length:30},(_,i)=>{ const t=new Date(base.getTime()+i*75*1000); const route=i<12?[accounts[0],accounts[1],accounts[2],accounts[3]][i%4]:accounts[(i+2)%accounts.length]; return {transactionId:`TXN${String(i+1).padStart(5,'0')}`,timestamp:t.toISOString(),senderAccount:i===0?accounts[0]:accounts[Math.max(0,(i-1)%accounts.length)],receiverAccount:route,upiHandle:upis[i%upis.length],amount:[50000,48000,46500,1200,2400][i%5],status:'SUCCESS',bank:['Axis','HDFC','SBI'][i%3]}; });
 const cdr=Array.from({length:10},(_,i)=>({timestamp:new Date(base.getTime()+i*4*60000).toISOString(),caller:phones[i%phones.length],callee:phones[(i+1)%phones.length],duration:30+i*11,imei:imeis[i%imeis.length],imsi:`404${i}123456789`,cell_id:`CELL-${100+i}`}));
 return {phones,imeis,accounts,upis,transactions:txs,cdr,ips:['103.21.45.76','103.21.45.77','185.10.10.21','45.12.8.91','45.12.8.92','172.16.0.21','8.8.8.8','10.20.1.8','10.20.1.9','192.0.2.10'],emails:['phishing@examp1e.com','support@kyc-alert.example','victim@example.com','ops@fraud-campaign.example','cashout@example.com'],devices:5,apks:[{packageName:'com.quick.kyc',sha256:'9b7e...d21f',permissions:'SMS,Accessibility,Overlay',source:'Unknown publisher'},{packageName:'com.secure.update',sha256:'4a21...90ff',permissions:'SMS,Contacts',source:'Sideload'},{packageName:'com.bank.verify',sha256:'aa12...7710',permissions:'Accessibility',source:'Unknown'}]};
}
