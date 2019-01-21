function count(s_string: string){
    return s_string.length;
}

function count_wo_spaces(s_string: string){
    let i_int: number = 0;
    for(let i:number = 0; i < s_string.length; i++){
        if(s_string.charAt(i) != ' '){
            i_int++;
        }
    }
    return i_int;
}

function count_either(s_string: string, b_bool: boolean){
    if(b_bool){
        return count(s_string);
    }
    else{
        return count_wo_spaces(s_string);
    }
}

console.log("count of [string 1] returns " + count("string 1"));
console.log("count_wo_spaces of [string 1] returns " + count_wo_spaces("string 1"));
console.log("count_either of [string 1][true] returns " +count_either("string 1", true));
console.log("count_either of [string 1][false] returns " +count_either("string 1", false));