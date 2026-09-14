import { loadDemo } from '../lib/demo';
loadDemo().then(r=>console.log('Seeded',r)).catch(e=>{console.error(e);process.exit(1)});
