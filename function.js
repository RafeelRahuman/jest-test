//CAPITALIZE

export function capitalize (str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//REVERSE STRING

export function reverseString(str){
    return str.split("").reverse().join("");
}

//CALCULATOR

export const calculator = {
    add(a,b){
        return a+b;
    },

    subtract(a,b){
        return a-b;
    },

    multiply(a,b){
        return a*b;
    },

    divide (a,b){
        return a/b;
    }
};

//CAESAR CIPHER 

export function caesarCipher(str,shift =3){

    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    shift = shift % 26;

    return str.split("").map(char => {
        const lower = char.toLowerCase();
        const index = alphabet.indexOf(lower);

        if(index === -1 ) return char;

        let newIndex = (index + shift) % 26;

        if(newIndex<0){
            newIndex+= 26;
        }
        let shifted = alphabet[newIndex]

        if(char === char.toUpperCase() && shifted){
            shifted = shifted.toUpperCase();
        }
        return shifted
    }).join("");
}

// ANALYZE ARRAY

export function analyzeArray(arr){
    const sum = arr.reduce((a,b)=> a+b,0);

    return {
        average : sum/arr.length, 
        min : Math.min(...arr),
        max : Math.max(...arr),
        length : arr.length
    };
}


