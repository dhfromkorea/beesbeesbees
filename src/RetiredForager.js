var RetiredForagerBee = function() {
  ForagerBee.call(this);
  // the following props are overwriting
  // the props of the super-classes
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;
  this.color = 'grey';
};

RetiredForagerBee.prototype = Object.create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;
RetiredForagerBee.prototype.forrage = function(){
	return 'I am too old, let me play cards instead';
};
RetiredForagerBee.prototype.gamble = function(treasure){
	treasure = treasure || 'royal jelly';
	this.treasureChest.push(treasure);
};
