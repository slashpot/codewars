export class G964 {
    //https://www.codewars.com/kata/54dc6f5a224c26032800005c/train/typescript
    /*
    A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. 
    Each book has a code c of 3, 4, 5 or more capitals letters. 
    The 1st letter of a code is the capital letter of the book category.
    In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

    For example an extract of one of the stocklists could be:

    L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
    or

    L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
    You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

    M = {"A", "B", "C", "W"}
    or

    M = ["A", "B", "C", "W"] or ...
    and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

    For the lists L and M of example you have to return the string (in Haskell/Clojure a list of pairs):

    (A : 20) - (B : 114) - (C : 50) - (W : 0)
    where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

    If L or M are empty return string is "" (Clojure should return an empty array instead).

    Note:
    In the result codes and their values are in the same order as in M.
    */
    public static stockList = (listOfArt: string[], listOfCat: string[]) => {
        let output: string = "";
        if (listOfArt.length === 0 || listOfCat.length === 0) {
            return output;
        }

        const books = listOfArt.map(function (book) {
            const bookInfo = book.split(" ");
            return ({ catrgory: bookInfo[0][0], quantity: parseInt(bookInfo[1]) })
        });

        listOfCat.forEach(function (cat, catIndex) {
            let sum = 0;
            books.forEach(function (book, bookIndex) {
                if (cat === book.catrgory) {
                    sum += book.quantity
                }
            })
            const result = catIndex === listOfCat.length - 1 ? "(" + cat + " : " + sum.toString() + ")" : "(" + cat + " : " + sum.toString() + ") - "
            output = output.concat(result);
        });
        return output;
    }

}

class Book {
    /**
     *
     */
    constructor(catrgory: string, quantity: number) {
        this.category = catrgory;
        this.quantity = quantity;
    }
    public category: string;
    public quantity: number;
}
