'use strict;'
/*
assassin executes sy4
acions are defined in lib
*/

//import libraries
const lib = require('./lib');// default library
const mathLib = require('./lib/math');// default math library

const init = (async = true, ext = {}) => {
    const actions = {...lib, ...mathLib, ...ext};
    const apply= ([key, ...rest]) => actions[key](rest);
    const aMap = ((e, fn) =>Array.isArray(e)? fn(e): e);
    const run = async (val) =>{
        const a =val.map(e => aMap(e,run));
        return Promise.all(a)
        .then(a => apply(a));
    }
    const runS = (val) => {
        const a = val.map(e => aMap(e,runS));
        return apply(a);
    }
    //return function
    if (async){
        return run;
    }
    return runS;
};

module.exports = init;