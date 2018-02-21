"use strict";
//https://www.codewars.com/kata/rot13/train/javascript
exports.__esModule = true;
/*
How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

rot13("EBG13 rknzcyr.") == "ROT13 example.";
rot13("This is my first ROT13 excercise!" == "Guvf vf zl svefg EBG13 rkprepvfr!"
*/
function rot13(str) {
    var output = '';
    str.split('').forEach(function (char) {
        output += decode(char);
    });
    return output;
}
exports.rot13 = rot13;
function decode(char) {
    var num = char.charCodeAt(0);
    if (isAtoM(num)) {
        num += 13;
    }
    else if (isNtoZ(num)) {
        num -= 13;
    }
    return String.fromCharCode(num);
}
function isAtoM(num) {
    return (num >= 65 && num <= 77) || (num >= 97 && num <= 109);
}
function isNtoZ(num) {
    return (num >= 78 && num <= 90) || (num >= 110 && num <= 122);
}
