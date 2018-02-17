import { G964 } from "../../src/Help the bookseller/main";

function testing(listOfArt, listOfCat, expected): void {
    expect(G964.stockList(listOfArt, listOfCat)).toBe(expected);
}

describe("Bookseller tests", function() {
    it("Basic tests stockList", function() {
        var b, c, res;
        b = ["BBAR 150", "CDXE 515", "BKWR 250", "BTSQ 890", "DRTY 600"];
        c = ["A", "B", "C", "D"];
        res = "(A : 0) - (B : 1290) - (C : 515) - (D : 600)";
        testing(b, c, res);
    });
});