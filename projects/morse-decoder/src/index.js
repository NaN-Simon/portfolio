const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ""
    expr = Array.from(expr)
    arr = toDivide(expr,10)
    arr.forEach(element => {
        let arr2 = toDivide(element,2)
        let arr3 = []
        for (let duo of arr2){
            let solo = duo.join("")
            if(solo != '00'){
                if(solo == '**'){arr3.push(' ')}else{arr3.push(solo)}
                
            }
        }

        result += convert(translate(arr3))
        
    });
    return result
}
function toDivide(arrTen,s){
    let arr = []
    let size = s;
    for (let i=0;i<Math.ceil(arrTen.length/size);i++){
        arr[i]= arrTen.slice((i*size),(i*size)+size);
    }
    return arr
}
function translate(key){
    let result = ""
    key.forEach(el =>{
        if (el == 10){result += '.'}
        if (el == 11){result += '-'}    
    })

    return result
}
function convert(symb){
    for (let key in MORSE_TABLE) {
        if(symb == ""){return " "}
        if(symb == key){
            return MORSE_TABLE[key] }
    }

}


module.exports = {
    decode
}


