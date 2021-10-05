function repeatStringNumTimes(str, num) {
    let reultStr = '';
    while(num > 0){
        reultStr += str;
        num--;
    }
    return reultStr;
}

repeatStringNumTimes("abc", 3);