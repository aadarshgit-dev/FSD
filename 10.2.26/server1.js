const fs=require('fs').promises;
async function readFileExample(){
    try{
        const data=await fs.readFile('myfile.txt','utf-8');
        console.log('File content:',data);
    }catch(err){
        console.error('Error reading file:',err);
    }
}
readFileExample();
const{promisify}=require('util');
const readFileAsync=promisify(fs.readFile);
async function readFileWithPromisify(){
    try{
        const data=await readFileAsync('myfile.txt','utf-8');
        console.log(data);
    }catch(err){
        console.error('Error:',err);
    }
}
readFileWithPromisify();