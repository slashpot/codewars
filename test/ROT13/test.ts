import {rot13} from '../../src/ROT13/main'
describe("ROT13", function(){

    it("input is an emtpy string", function(){
        expect(rot13("")).toBe("")
    })
    
    it("input only has A to M", function(){
        expect(rot13('ABCDEFGHIJKLM')).toBe('NOPQRSTUVWXYZ')
    })

    it("input only has N to Z", function(){
        expect(rot13('NOPQRSTUVWXYZ')).toBe('ABCDEFGHIJKLM')
    })

    it("input only has a to m", function(){
        expect(rot13('abcdefghijklm')).toBe('nopqrstuvwxyz')
    })

    it("input only has n to z", function(){
        expect(rot13('nopqrstuvwxyz')).toBe('abcdefghijklm')
    })

    it("input has all kinds of char", function(){
        expect(rot13('EBG13 rknzcyr.')).toBe('ROT13 example.')
    })
    
})