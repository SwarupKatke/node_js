const { log } = require('console');
const os=require('os')

//inf0 about the current user
const user=os.userInfo()
console.log(user);

//method return the system uptime in seconds
console.log(`the system uptine is ${os.uptime()}in seconds`);

const currentos={
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freemem:os.freemem(),
}
console.log(currentos);
