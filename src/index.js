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
    let arr = expr.split('**********');
    
    arr = arr.map(el => {
    let arr2 = [];
    let str='';
    for(let i = 0; i < el.length; i++){
    	str += el[i];
   	 	if((i + 1) % 10 === 0) 
    	{
    		arr2.push(str);
      	str = '';
    	}
    	}
      console.log(arr2);
      return arr2.map(elem => {
      let result = '';
      	for(let i = 0; i < elem.length; i++){
        	if(elem[i] === '1'){
      		if(elem[i+1] === '0') {
          	result += '.';
            i++;
          } else if(elem[i+1] === '1') {
          	result += '-';
            i++;
          }
          }
        }
        return result;
      });
    });
    console.log(arr);
    let result = arr.map(el => {
    	return el.map(el => {
      return MORSE_TABLE[el];
      }).join('');
    }).join(' ');
    
    
    
    return result;
}

module.exports = {
    decode
}