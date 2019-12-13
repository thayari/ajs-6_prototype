export default function Character(name, type) {
  this.name = name;
  this.type = type;
  this.health = 100;
  this.attack = 10;
  this.defence = 40;
}

Character.prototype.damage = function (points) {
  if (isNaN(points)) {
    throw new Error('Damage points must be a number');
  }
  this.health -= points * (1 - this.defence / 100);
}
