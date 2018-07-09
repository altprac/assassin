'use strict';
/*
Include any default functions in this file
*/
module.exports = {
    '=': ( a => a[0]),
    '==':( a => a.reduce((t, i) => i == t)),
    '!=': (a => a[0] != a[1]),
    //etc
};