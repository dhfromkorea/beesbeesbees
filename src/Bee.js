// Bee should be a sub-class of Grub
var Bee = function() {
  // make sure the state props are registered
  // on Bee sub-class with the right context
	Grub.call(this);
  this.age = 5;
  this.color = 'yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;

// Bee.prototype.eat = function(){};

