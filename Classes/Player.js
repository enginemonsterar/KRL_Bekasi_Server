var shortID = require('shortid');

module.exports = class Player{
    constructor(){
        this.serverID = shortID.generate();
        this.name = '';        
    }
}