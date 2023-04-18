function fibonnacci(num){
    if(num <= 1){
        return num;
    }else{
        return fibonnacci(num-1) + fibonnacci(num-2);
    }
}

console.log(fibonnacci(7))