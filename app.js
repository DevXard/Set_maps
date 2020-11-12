function havesDuplicate(arr){
    if(arr.length !== [... new Set(arr)].length){
        return true
    }else {
        return false
    }
}

function vouwelCount(str){
    let map = new Map();
    let vowels = 'aeiou';

    for(let char of str.toLowerCase()){
        if(vowels.includes(char) && !map.has(char)){
            map.set(char, 1)
        }else if (vowels.includes(char) && map.has(char)){
            map.set(char, map.get(char) + 1)
        }
    }
     return map
}