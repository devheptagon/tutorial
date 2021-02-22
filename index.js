export function findMax(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max= arr[i];
        }
    }
    return max;
}

export function factorial(n){
    let result =1;
    for(let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}

export function frogJump(x,y,d){
    let i = 0;
    for(; ; i++){
        if (x >= y){        
            break;
        } else {
            x += d;
        }
    }
    return i;
}

export function jump(x,y,d){
    let i = 0;
    while(true){
        if (x >= y){        
            break;
        } else {
            x += d;
            i++;
        }
    }
    return i;
}

export function divisible(A,B,K){
    let count = 0;
    for(let i=A; i<=B; i++){
        if(i%K == 0){
            count++;
        }
    }
    return count;
}
