'use strict';


class Animal {
	constructor(name){
		this.name = name;
		this.feet = true;
		this.tail = true;
	}
	run(){
		console.log(this.name + ` бегает`);
	}
};

class Cat extends Animal{
	constructor(name){
		super(name);
		this.mustache = true;
	}
	play(){
		console.log(this.name + ` играет`);
	}
	eat(){
		console.log(this.name + ` ест`);
	}
};

class  ScottishFold extends Cat {
	constructor(name){
		super(name);
		this.hangEars = true;
	}
	
	scratch(){
		console.log(this.name + ` царапается`);
	}
};

const cat = new ScottishFold('TOM');