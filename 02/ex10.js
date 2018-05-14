'use strict';

//'xxxxxxxxxx'
//'xxxxxxjava'
//'1234567890'

String.prototype.leftPad = function(pos, char){
    let ret = this;
    char = char || '+';
    if( this.length < pos){
        ret = new Array( pos - this.length +1).join(char) + this;
    }
    return ret;
}

console.log('java'.leftPad(10,'~'));
console.log('javascript'.leftPad(10,'~'));
console.log('maria'.leftPad(10,'~'));
console.log('maria'.leftPad(10));