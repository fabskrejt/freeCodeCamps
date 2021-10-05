function findLongestWordLength(str) {
    let result = 0;
    str.split(' ').map(item => {
            if(item.length > result){
                result = item.length;
            }
        }
    );
    return result;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");