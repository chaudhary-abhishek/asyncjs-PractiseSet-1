const delayedLoop = iterationCount =>{
    let timer = 0;
    for(let i=0;i<iterationCount;i++){
        timer+=1000;
        setTimeout(()=>console.log("Hello"),timer);
        
    }
};

delayedLoop(3);