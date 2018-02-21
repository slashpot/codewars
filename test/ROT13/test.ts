import { ROT } from "../../src/ROT13/main";

describe("ROT13", function(){
    let rot = new ROT();

    it("input is an emtpy string", function(){
        expect(rot.rot13("")).toBe("")
    })
    
    it("input only has uppercast charactor", function(){
        expect(rot.rot13('ABCDEFGHIJKLM')).toBe('NOPQRSTUVWXYZ')
    })
    
})