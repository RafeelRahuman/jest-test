import { capitalize, reverseString, 
    calculator, caesarCipher, 
    analyzeArray } from "./function.js"


    //CAPITALIZE

    test ( "capitalize first letter",() =>{
        expect (capitalize("hello")).toBe("Hello");
    });


    //REVERSE sTRING 
    test("reverse a String", () => {
        expect (reverseString("hello")).toBe("olleh");
    });


    //CALCULATOR

    test("add Numbers",()=>{
        expect (calculator.add(2,3)).toBe(5);
    });

    test ("subtract Number", () => {
        expect (calculator.subtract(4,2)).toBe(2);;
    });

    test("multiple Number", () =>{
        expect (calculator.multiply(2,4)).toBe(8);
    });

    test ("divide Number", () =>{
        expect(calculator.divide(4,2)).toBe(2);
    });

    //CAESAR CIPHER

    test ("cipher basic shift", ()=>{
        expect(caesarCipher("abc",3)).toBe("def");
    });

    test ("cipher wrap from z to a", ()=>{
        expect (caesarCipher("xyz",3)).toBe("abc");
    });

    test("cipher preserve case", () =>{
        expect(caesarCipher("heLLo")).toBe("khOOr");
    });

    test(" cipher keep punctuation",() =>{
        expect(caesarCipher("Hello, World!",3)).toBe("Khoor, Zruog!");
    });


    //ANALYZE ARRAY

    test("analyze array",()=>{
        const result = analyzeArray([1,8,3,4,2,6]);

        expect(result).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
