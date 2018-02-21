//https://www.codewars.com/kata/rot13/train/javascript

/*
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

export class ROT {
    private output:string = ''
    
    public rot13(str: string): string {
        str.split('').forEach(this.setDecodeChar.bind(this))
        return this.output
    }

    private setDecodeChar(char:string):void {
        this.output += this.decode(char)
    }

    private decode(char: string): string {
        let num: number = char.charCodeAt(0)
        if (num >= 41 && num <= 77) {
            num += 13
        }
        return String.fromCharCode(num)
    }
}