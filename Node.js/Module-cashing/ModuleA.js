class Hero{
    constructor(name){
        this.name =name;
    }

     getname() {
        return this.name
    }
    setNAme(name) {
        return this.name = name
    }
}

// module.exports = new Hero("zain");

// to resolv cashing export calss itsle instead of its instance
module.exports = Hero;
