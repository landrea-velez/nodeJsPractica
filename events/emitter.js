function Emitter(){
    this.events = {};
};

//Los eventos se invocan con la palabra on
Emitter.prototype.on = function(type, listener){
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
};


Emitter.prototype.emit = function(type){
     if(this.events[type]){
         this.events[type].forEach(listener => listener());
     }
};

// ya se puede usar desde otra parte del programa
module.exports = Emitter;
