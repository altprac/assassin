'use strict';
const add ={'=ext': ( a => a.reduce((t, i) => t + i))}
const assassin = require('../index');
const expect = require('chai').expect;
const data = require('./data');
const math = require('./data/math');
const dataExt =[...data,     {q: ["=ext",4], a: 4}]

const aSync = assassin();
const sync = assassin(false, add);

describe(`Init ASync`, () => {
    it('should export a function', () => {
        expect(aSync).to.be.a('function');
    });
    [...data, ...math].forEach(d =>{
        it(`${d.q} Should equal ${d.a}` , () =>{
            describe(`Apply ${d.q}`,()=>{
                aSync(d.q).then(result=> expect(result).to.equal(d.a));
            });
        });
    });
});

describe(`Init Sync`, () => {
    it('should export a function', () => {
        expect(sync).to.be.a('function');
    });
    [...dataExt, ...math].forEach(d =>{
        it(`${d.q} Should equal ${d.a}` , () =>{
            describe(`Apply ${d.q}`,()=>{
                expect(sync(d.q)).to.equal(d.a);
            });
        });
    });
});

