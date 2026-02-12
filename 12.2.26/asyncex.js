async function getData(params){
    console.log('starting...');
    const result= await someAsyncOperation();
    console.log('result:${result}');
    return result;
}
function someAsyncOperation(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched successfully!"), 1000);
    });
}
getData().then(data=>console.log('final data:',data));