'use strict';
/*
Include any math related functions in this file
*/
module.exports = {
    '+': ( a => a.reduce((t, i) => t + i)),
    '-': ( a => a.reduce((t, i) => t - i)),
    '*': ( a => a.reduce((t, i) => t * i)),
    '/': ( a => a.reduce((t, i) => i == 0? 0 : t / i)),
    //etc
};