function fibonnacci(num){
    let next = 1;
    let prev = 0;
    for(let i = 0; i < num; i++){
        let count = next + prev;
        prev = next;
        next = count;
    }
    return prev;
}

console.log(fibonnacci(7))