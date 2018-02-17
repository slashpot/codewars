import { Kata } from "../../src/Highest and Lowest/main";

describe("Highest and Lowest", function () {
    it("pass 1 to 5", function () {
        expect(Kata.highAndLow("1 2 3 4 5")).toBe("5 1");
    })
    it("pass 1 number", function () {
        expect(Kata.highAndLow("1")).toBe("1 1");
    })
    
    it("pass 3 same numbers", function () {
        expect(Kata.highAndLow("5 5 5")).toBe("5 5");
    })

    
    it("pass with negative number", function () {
        expect(Kata.highAndLow("1 -1")).toBe("1 -1");
    })
    
    it("pass large array numbers", function () {
        expect(Kata.highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")).toBe("542 -214");
    })
})