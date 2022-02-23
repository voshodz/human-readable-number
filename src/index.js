module.exports = function toReadable (number) {
    let ones = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
    ];
    let teens = [
        'ten', 
        'eleven', 
        'twelve', 
        'thirteen',
        'fourteen',
        'fifteen', 
        'sixteen', 
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty', 
    ]
    let decimal = [
        'twenty',
        'thirty',
        'forty', 
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    let myNumber = number.toString();
    
    let result = "";


    if( myNumber.length == 1){
        result = ones[number];
        //return result;
    }
    if( myNumber.length == 2 ) {
        if ( (number >= 10) && (number <=20 ) ) {
            //let j = parseInt(myNumber)
            result = teens[ number - 10 ]
            //return result
        }

        if( (number) >= 21 && (number) <=99 ){
            let one = ones[ +myNumber[1] ];
            if(  +myNumber[1] == 0 ) {
                result = decimal[ (+myNumber[0]) - 2 ];
            }
            else {
                result = decimal[ (+myNumber[0]) - 2 ] + ' ' +  one;
            }
        }
    }
    if( myNumber.length == 3 ) {
        let index = +myNumber[0];
        if( (+myNumber[1] == 0) && (+myNumber[2] == 0) ){
            result = ones[ +myNumber[0] ] + ' hundred';
        }
        else  if(+myNumber[1] == 0) {
            result = ones[ index ] + ' hundred ' + ones[+myNumber[2]];
        }
        else {
            let numb = number % 100;
            result += ones[ index ] + ' hundred ';

            if ( (numb >= 10) && (numb <=20 ) ) {         
                result += teens[ numb - 10 ]
            }
            else if( (numb) >= 21 && (numb) <=99 ){
                let one = ones[ +myNumber[2] ];
                if(  +myNumber[2] == 0 ) {
                    result += decimal[ (+myNumber[1]) - 2 ];
                }
                else {
                    result += decimal[ (+myNumber[1]) - 2 ] + ' ' +  one;
                }
            }
        }
        
    }
    

    return result;

}
