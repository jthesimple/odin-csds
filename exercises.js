

function sumRange(num){
	if(num == 1){
        return num;
    } else {
        let sum = num + sumRange(num - 1);
        return sum;
    };	
};

function power(x,n){
    if (n===0){
        return 1;
    } else{
        let answer = x * power(x, n-1);
        return answer;
    }

};


console.log(power(2,3));




