# assassin
## The sy4 executor

Assassin takes sy4 and evaluates it. Processing can be done either synchronously or asynchronously.

Assassin can be extended to use custom evaluation functions which can include overridding built in functions.

## Usage
## Initialise
const assassinate = assassin(asynchronous boolean default = true, extensions object default = {})
## execute
const result = assassinate(array containing sy4)

```javascript
const assassin = require('assassin');
// create asynch with defaults
const asynch = assassin();
// create synch with defaults
const synch = assassin(false);
// create custom evaluation functions
const extensions = {
    '++': (a => a++), // new '++' operator
    '-':  ( a => a.reduce((t, i) => t + i)), // override the  '-' operator to now perform addition
};
// initialise asynch with extended evaluation
const custom = assassin(true, extensions);

const sy4 = ["-",1,2];
const result = custom(sy4); // because the '-' operator has been overriden to perform addition returns -1


```
### more information on sy4 can be found at https://github.com/altprac/sy4
