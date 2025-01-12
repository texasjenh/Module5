// Exercise 7 

class Logger {
    constructor(referrer, id) {
        this.referrer = referrer
        this.id = id
    }

    log = (value) => {
        console.log(`[${this.referrer}:${this.id}]`)
    }
}

module.exports = Logger