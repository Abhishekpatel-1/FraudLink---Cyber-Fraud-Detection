import Papa from 'papaparse';
import * as XLSX from 'xlsx';
import { simpleParser } from 'mailparser';
export async function parseFile(file:File){ const ext=file.name.toLowerCase().split('.').pop(); const buf=Buffer.from(await file.arrayBuffer());
 if(ext==='csv'){ const text=buf.toString('utf8'); const parsed=Papa.parse<Record<string,unknown>>(text,{header:true,skipEmptyLines:true}); return {parser:'PapaParse CSV',records:parsed.data,errors:parsed.errors}; }
 if(ext==='xlsx'||ext==='xls'){ const wb=XLSX.read(buf,{type:'buffer'}); const sheet=wb.Sheets[wb.SheetNames[0]]; return {parser:'SheetJS Excel',records:XLSX.utils.sheet_to_json<Record<string,unknown>>(sheet)}; }
 if(ext==='json'){ return {parser:'Native JSON',records:JSON.parse(buf.toString('utf8'))}; }
 if(ext==='txt'){ return {parser:'TXT line parser',records:buf.toString('utf8').split(/\r?\n/).filter(Boolean).map((line,i)=>({lineNumber:i+1,text:line}))}; }
 if(ext==='eml'){ const mail=await simpleParser(buf); return {parser:'MailParser EML',records:[{from:mail.from?.text,to:mail.to?.text,subject:mail.subject,date:mail.date?.toISOString(),messageId:mail.messageId,text:mail.text}]}; }
 throw new Error('Unsupported extension. Use CSV, XLSX, XLS, JSON, TXT, or EML.'); }
