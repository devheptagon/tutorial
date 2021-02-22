import {divisible, factorial, findMax, frogJump, jump} from "./index"
describe("index is being tested", function(){
    test("test101", function(){
        const arr=[1,20,3,50,46]
        const result= findMax(arr)
        expect(result).toBe(50)
    })

    test("test102", function(){
        expect(factorial(1)).toBe(1);
        expect(factorial(2)).toBe(2);
        expect(factorial(3)).toBe(6);
        expect(factorial(4)).toBe(24);
    })

    test("test103", function(){
        const result1 = frogJump(0,1001,10);
        expect(result1).toBe(101);

        const result2 = jump(0,0,3);
        expect(result2).toBe(0);
    })

    test("test104", function(){
        const result = divisible(10, 23, 5);
        expect(result).toBe(3);
    })
})