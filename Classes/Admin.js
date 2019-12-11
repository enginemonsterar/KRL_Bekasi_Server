var shortID = require('shortid');

module.exports = class Admin{
    constructor(){
        this.serverID = shortID.generate();
        this.username = '';
        this.password = '';        
    }
}