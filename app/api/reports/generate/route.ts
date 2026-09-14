import {NextResponse} from 'next/server';
import {PDFDocument,StandardFonts,rgb} from 'pdf-lib';
import {prisma} from '@/lib/prisma';

export const runtime='nodejs';

export async function POST(req:Request){
 const {caseId='CYB/2026/001234'}=await req.json().catch(()=>({}));
 const c=await prisma.case.findUnique({
  where:{id:caseId},
  include:{evidence:true,links:true,timeline:true}
 });
 const pdf=await PDFDocument.create();
 const page=pdf.addPage([595,842]);
 const font=await pdf.embedFont(StandardFonts.Helvetica);
 const bold=await pdf.embedFont(StandardFonts.HelveticaBold);
 let y=800;
 const text=(s:string,size=10,b=false)=>{
  page.drawText(s.slice(0,100),{x:42,y,size,font:b?bold:font,color:rgb(.08,.16,.25)});
  y-=size+10;
 };

 text('FRAUDLINK',18,true);
 text('Cyber Fraud Investigative Brief',14,true);
 text(`Case ID: ${caseId}`);
 text(`Generated: ${new Date().toLocaleString('en-IN')}`);
 text(`Risk: ${c?.riskScore??92}/100 - ${c?.riskLevel??'CRITICAL'}`,12,true);
 text('1. Case Summary',12,true);
 text(c?.description||'Multi-artifact cyber-fraud investigation with linked UPI, device, communication and transaction evidence.');
 text('2. Key Findings',12,true);
 for(const x of ['Shared IMEI across subscriber numbers','Rapid multi-hop fund routing','Common UPI/device/IP indicators','Suspicious APK and phishing email evidence'])text('- '+x);
 text('3. Prime Entities',12,true);
 for(const x of ['XX6721 - Mule Account A','XX9987 - Mule Account B','XX4412 - Mule Account','XX1022 - Cash-out destination'])text('- '+x);
 text('4. Evidence Integrity',12,true);
 for(const e of (c?.evidence||[]).slice(0,6))text(`${e.originalFilename} - SHA-256 ${e.sha256.slice(0,32)}...`);
 text('5. Immediate Investigative Recommendations',12,true);
 for(const x of ['Preserve relevant CDR/IPDR records','Verify subscriber/KYC details','Examine linked bank accounts','Preserve device evidence','Investigate identified cash-out nodes'])text('- '+x);
 text('Note: This is an investigative/forensic summary and does not by itself establish legal admissibility or guilt.');

 const bytes=await pdf.save();
 return new NextResponse(bytes,{
  headers:{
   'Content-Type':'application/pdf',
   'Content-Disposition':`attachment; filename="fraudlink-${caseId.replaceAll('/','-')}.pdf"`
  }
 });
}
