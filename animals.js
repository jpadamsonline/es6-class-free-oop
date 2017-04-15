function newAnimal(spec = {}){
  let { name = 'it', word = 'nothing' } = spec,
    talk = () => console.log( name + ' says ' + word);
  return Object.freeze({ name, word, talk });
}

function newAnimalMovement(spec = {}) {
  let { name = 'it' } = spec,
    fly = () => console.log(name + ' is flying: flap flap'),
    swim = () => console.log(name + ' is swimming: splish splash'),
    walk = () => console.log(name + ' is walking: stomp stomp');
  return Object.freeze({ fly, swim, walk });
}

function newAlligator(spec){
  let { name, word, talk } = newAnimal(spec),
    { walk, swim } = newAnimalMovement(spec);
  return Object.freeze({ name, word, talk, walk, swim });
}

function newDuck(spec = {}){
  // overide defaults
  let { name = 'duck', word = 'quack' } = spec ,
    { talk } = newAnimal({ name, word }),
    { fly, walk, swim } = newAnimalMovement({ name });
  return Object.freeze({ name, word, talk, fly, walk, swim });
}

function newSnake(spec = {}){
  let { name = 'snake', word = 'hissss' } = spec,
      { talk } = newAnimal({ name, word }),
      { swim } = newAnimalMovement({ name }),
      // override
      fly = () => console.log(name + ' is flying: ...on a plane. How else?'),
      slither = () => console.log(name + ' is slithering: swish swish');
  return Object.freeze({ name, word, talk, slither, swim, fly });
}

//////////////////////////////////////

let typicalGator = newAlligator({ name: 'alligator', word: 'grrrr' });
typicalGator.talk();
typicalGator.swim();

let noNameMuteGator = newAlligator();
noNameMuteGator.talk();
noNameMuteGator.walk();

let duck = newDuck();
duck.talk();
duck.fly();

let donald = newDuck({name: 'Donald', word: 'qua qua quaaack'});
donald.talk();
duck.swim();

let animal = newAnimal({name: 'Animal from the Muppets'});
animal.talk();

let snake = newSnake({ name: 'Jake the Snake' });
snake.talk();
snake.slither();
snake.fly();
