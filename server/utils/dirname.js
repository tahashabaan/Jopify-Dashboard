import { dirname } from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const filePath = new URL('.', import.meta.url).pathname;


export default __dirname;