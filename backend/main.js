const SHA256 = require('crypto-js/sha256');

class Block {
    constructor(index, data, previousHash = '') {
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previouhash = previousHash;
        this.hash = this.createHash();
    }

    createHash() {
        return SHA256(this.index + this.date + this.data);
    }
}

// block = new Block(0, {
//     notaSeguimiento: 4.0,
//     notaParcial: 3.0,
//     notaFinal: 2.0
// });
// console.log(block)
// block2 = new Block(1, {
//     notaSeguimiento: 4.0,
//     notaParcial: 3.0,
//     notaFinal: 2.0
// });
// console.log(block2)

class Blockchain {
    constructor(genesis){
        
    }
}