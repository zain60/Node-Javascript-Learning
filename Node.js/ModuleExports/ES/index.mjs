import message from './exportfile.mjs';
console.log(message); // 'Hello, world!'

import { greet, farewell } from './exportfile.mjs';
greet(); // 'Hello, world!'
farewell(); // 'Goodbye, world!'

import * as myModule from './exportfile.mjs';
myModule.suoerman(); 
myModule.batman(); 

