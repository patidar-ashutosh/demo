// alert(user); // no such variable (each module has independent variables) //give an error

import {user} from './user.js';

document.body.innerHTML = user; // John