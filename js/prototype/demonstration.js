let grandparent = {
    selfMadeAssest: 'real estates'
};
let parent = {
    businessGame: 'strong'
}

// inheriting the grandparent to parent obj
parent.__proto__ = grandparent;

let livingBeing = {
    lifeSpan: 100,
    kingdom: 'animal'
}

function Human(name, uid){
    this.name = name;
    this.uid = uid
}

// inheriting properties of grandparent to all the 
Human.prototype.livingBeing = livingBeing;