const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}
let speed = 5;

function setSpeed(setting) {
  speed = setting;
}

function startGame() {
  state = {}
  showTextNode(998)
}

function replayGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)

  let textToWrite = textNode.text

  document.getElementById("text").focus();

  if (speed < 0) {
    textElement.innerText = textToWrite //Instant text option
  }
  else {
    for (let i = 0, l = textToWrite.length; i < l; i++) {
      setTimeout(function(i) {

        textElement.innerText = textToWrite.substring(0, i + 1);
      }.bind(this, i), i * speed);
    }
  }

  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  const nextTextNodeId = option.nextText
  if (nextTextNodeId <= 0) {
    return replayGame()
  }
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: "You awake back in your home.\n\n" +
    "You see the notebook next to the TV remote, and feel a strong rumbling in your abdomen. You really should get something to eat."
    ,
    options: [
      {
        text: 'Write the paper',
        requiredState: (currentState) => !currentState.writePaper,
        setState: { writePaper: true},
        nextText: 3
      },
      {
        text: 'Check the Notebook',
        requiredState: (currentState) => !currentState.checkNotebook,
        setState: { checkNotebook: true},
        nextText: 4
      },
      {
        text: 'Watch TV',
        requiredState: (currentState) => !currentState.watchTV,
        setState: { watchTV: true},
        nextText: 5
      },
      {
        text: 'Take a nap',
        requiredState: (currentState) => !currentState.takeNap,
        setState: { takeNap: true},
        nextText: 6
      },
      {
        text: 'Get Food',
        nextText: 7
      }
    ]
  },
  {
    id: 3,
    text: "You look at the unfinished paper, shudder, and turn away.",
    options: [
      {
        text: 'Write the paper',
        requiredState: (currentState) => !currentState.writePaper,
        setState: { writePaper: true},
        nextText: 3
      },
      {
        text: 'Check the Notebook',
        requiredState: (currentState) => !currentState.checkNotebook,
        setState: { checkNotebook: true},
        nextText: 4
      },
      {
        text: 'Watch TV',
        requiredState: (currentState) => !currentState.watchTV,
        setState: { watchTV: true},
        nextText: 5
      },
      {
        text: 'Take a nap',
        requiredState: (currentState) => !currentState.takeNap,
        setState: { takeNap: true},
        nextText: 6
      },
      {
        text: 'Get Food',
        nextText: 7
      }
    ]
  },
  {
    id: 4,
    text: "You look at the notebook, and see a string of hashmarks drawn on the page. You don't remember drawing those.",
    options: [
      {
        text: 'Write the paper',
        requiredState: (currentState) => !currentState.writePaper,
        setState: { writePaper: true},
        nextText: 3
      },
      {
        text: 'Check the Notebook',
        requiredState: (currentState) => !currentState.checkNotebook,
        setState: { checkNotebook: true},
        nextText: 4
      },
      {
        text: 'Watch TV',
        requiredState: (currentState) => !currentState.watchTV,
        setState: { watchTV: true},
        nextText: 5
      },
      {
        text: 'Take a nap',
        requiredState: (currentState) => !currentState.takeNap,
        setState: { takeNap: true},
        nextText: 6
      },
      {
        text: 'Get Food',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: "You grab the remote and start flipping through channels.\n\n" +
        "Pick a channel:",
    options: [
      {
        text: '1',
        setState: { watchTV: true},
        nextText: 151
      },
      {
        text: '2',
        setState: { watchTV: true},
        nextText: 152
      },
      {
        text: '3',
        setState: { watchTV: true},
        nextText: 153
      },
      {
        text: '4',
        setState: { watchTV: true},
        nextText: 154
      },
      {
        text: '5',
        setState: { watchTV: true},
        nextText: 155
      },
      {
        text: '6',
        setState: { watchTV: true},
        nextText: 156
      },
      {
        text: '7',
        setState: { watchTV: true},
        nextText: 157
      },
      {
        text: '8',
        setState: { watchTV: true},
        nextText: 158
      },
      {
        text: '9',
        setState: { watchTV: true},
        nextText: 159
      },
      {
        text: '0',
        setState: { watchTV: true},
        nextText: 150
      }
    ]
  },
  {
    id: 6,
    text: "You'd try to sleep, but your grumbling stomach would keep you awake.",
    options: [
      {
        text: 'Write the paper',
        requiredState: (currentState) => !currentState.writePaper,
        setState: { writePaper: true},
        nextText: 3
      },
      {
        text: 'Check the Notebook',
        requiredState: (currentState) => !currentState.checkNotebook,
        setState: { checkNotebook: true},
        nextText: 4
      },
      {
        text: 'Watch TV',
        requiredState: (currentState) => !currentState.watchTV,
        setState: { watchTV: true},
        nextText: 5
      },
      {
        text: 'Take a nap',
        requiredState: (currentState) => !currentState.takeNap,
        setState: { takeNap: true},
        nextText: 6
      },
      {
        text: 'Get Food',
        nextText: 7
      }
    ]
  },
  {
    id: 7,
    text: "You pull yourself off the couch and pull up a map of the nearby area. Your choices are:"
    ,
    options: [
      {
        text: 'Taco Bell',
        nextText: 8
      },
      {
        text: 'Fuji Sushi',
        nextText: 9
      },
      {
        text: 'Pizza Hut',
        nextText: 28
      },
      {
        text: 'Stay at home',
        nextText: 11
      }
    ]
  },
  {
    id: 8,
    text: "You arrive at Taco Bell, the sweet scent of grade-F meat wafting through your nostrils. Newly-tiled floors are arranged in patterns of green and orange.\n\n" +
    "You step around a wet floor sign and walk up to the counter to order. Your options are:"
    ,
    options: [
      {
        text: 'Crunchwrap Supreme',
        nextText: 12
      },
      {
        text: 'Beefy Frito Burrito',
        setState: { nachos: false, tacoBell: true},
        nextText: 13
      },
      {
        text: 'XXL Steak Nachos',
        setState: { nachos: true, tacoBell: true},
        nextText: 14
      },
      {
        text: 'Doritos Locos Tacos',
        setState: { nachos: false, tacoBell: true},
        nextText: 16
      },
      {
        text: 'Punch the cashier',
        setState: { makeScene: true},
        nextText: 17
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 9,
    text: "You arrive at the local Japanese restaurant. The decor is nice, but you can tell from one look at the surroundings that it's not authentic.\n\n" +
    "Regardless, the reviews are great. You take a seat at a small booth surrounded by several knockoff Shoji lamps.\n\n" +
    "The waitress comes to take your order. Looking at the menu, your choices are:"
    ,
    options: [
      {
        text: 'Continue',
        setState: { timesEaten: 0, lastEaten: "NA"},
        nextText: 10
      }
    ]
  },
  {
    id: 10,
    text: "The waitress looks at you, then back at the menu on the table, then back at you.",
    options: [
      {
        text: 'Spicy Miso Ramen',
        requiredState: (currentState) => currentState.timesEaten === 0,
        setState: { timesEaten: 1, lastEaten: "ramen"},
        nextText: 18
      },
      {
        text: 'Spicy Miso Ramen',
        requiredState: (currentState) => currentState.timesEaten === 1,
        setState: { timesEaten: 2, lastEaten: "ramen"},
        nextText: 18
      },
      {
        text: 'Spicy Miso Ramen',
        requiredState: (currentState) => currentState.timesEaten === 2,
        setState: { timesEaten: 3, lastEaten: "ramen"},
        nextText: 170
      },
      {
        text: 'Sweet and Sour Chicken',
        requiredState: (currentState) => currentState.timesEaten < 3,
        nextText: 19
      },
      {
        text: 'California Rolls',
        requiredState: (currentState) => currentState.timesEaten === 0,
        setState: { timesEaten: 1, lastEaten: "nigiri"},
        nextText: 20
      },
      {
        text: 'California Rolls',
        requiredState: (currentState) => currentState.timesEaten === 1,
        setState: { timesEaten: 2, lastEaten: "nigiri"},
        nextText: 20
      },
      {
        text: 'California Rolls',
        requiredState: (currentState) => currentState.timesEaten === 2,
        setState: { timesEaten: 3, lastEaten: "nigiri"},
        nextText: 171
      },
      {
        text: 'Unagi',
        requiredState: (currentState) => currentState.timesEaten === 0,
        setState: { timesEaten: 1, lastEaten: "sushi"},
        nextText: 21
      },
      {
        text: 'Unagi',
        requiredState: (currentState) => currentState.timesEaten === 1,
        setState: { timesEaten: 2, lastEaten: "sushi"},
        nextText: 21
      },
      {
        text: 'Unagi',
        requiredState: (currentState) => currentState.timesEaten === 2,
        setState: { timesEaten: 3, lastEaten: "sushi"},
        nextText: 172
      },
      {
        text: 'Scream',
        requiredState: (currentState) => !currentState.screamed,
        nextText: 22
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 11,
    text: "You take a quick cursory glance at your paltry kitchen and decide against it.",
    options: [
      {
        text: 'Taco Bell',
        nextText: 8
      },
      {
        text: 'Fuji Sushi',
        nextText: 9
      },
      {
        text: 'Pizza Hut',
        nextText: 10
      }
    ]
  }, 
  {
    id: 12,
    text: "With your crunchwrap in one hand and baja blast in the other, you stride confidently toward the exit, taking bites and sips as you go.\n\n" +
    "What you fail to recognize, however, is the wet floor sign directly in front of you.\n\n" +
    "You knock it over with your left foot, and step on it with your right, the flimsy plastic gliding smoothly over the freshly-mopped floors."
    ,
    options: [
      {
        text: 'Catch your balance',
        nextText: 25
      }
    ]
  },
  {
    id: 13,
    text: "You eagerly rip open the wrapper of the your Beefy Frito Burrito. You try not to look at the messy glob of white, yellow and brown encapsulated within its white shell as you scarf it down.\n\n" +
    "Satisfied, you step outside. For some odd reason, you feel like you are being watched, but ignore it and continue on your way."
    ,    
    options: [
      {
        text: 'Continue',
        nextText: 100
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 14,
    text: "You eagerly pop open the container of your XXL Steak Nachos, stuffing salty chips covered with globs of ingredients down your gullet.\n\n" +
    "There is so much food here, you need to take a break before you continue eating.\n\n" +
    "...\n\n" +
    "..."
    ,    
    options: [
      {
        text: 'Take a break',
        nextText: 15
      }
    ]
  },
  {
    id: 15,
    text: "...\n\n" +
    "...\n\n" +
    "After 10 minutes or so, you dig back into the nachos and finish them. Satisfied, you step outside.\n\n" +
    "For some odd reason, you feel like you are being watched, but ignore it and continue on your way."
    ,    
    options: [
      {
        text: 'Continue',
        nextText: 100
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 16,
    text: "You eagerly rip open the wrapper of the your Doritos Locos Tacos, and scarf them down quickly. You attempt to clean the orange dust off of your fingers and with moderate success.\n\n" +
    "Satisfied, you step outside. For some odd reason, you feel like you are being watched, but ignore it and continue on your way."
    ,    
    options: [
      {
        text: 'Continue',
        nextText: 100
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 17,
    text: "The bulky man behind the counter glares at you. Maybe you should rethink that."
    ,    
    options: [
      {
        text: 'Crunchwrap Supreme',
        nextText: 12
      },
      {
        text: 'Beefy Frito Burrito',
        setState: { tacoBell: true},
        nextText: 13
      },
      {
        text: 'XXL Steak Nachos',
        setState: { nachos: true},
        setState: { tacoBell: true},
        nextText: 14
      },
      {
        text: 'Doritos Locos Tacos',
        setState: { tacoBell: true},
        nextText: 16
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 18,
    text: "You eat the Ramen. Not bad! You're still hungry, though..."
    ,    
    options: [
      {
        text: 'Get more food',
        nextText: 10
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 19,
    text: "You bite into the chicken. Not bad!\n\n" +
    "It is quite good despite its slightly metallic taste.\n\n" +
    "You take another bite, and suddenly feel a shearing pain in your throat."
    ,    
    options: [
      {
        text: 'Spit it out',
        nextText: 23
      },
    ]
  },
  {
    id: 20,
    text: "You eat the California roll. Not bad! You're still hungry, though..."
    ,    
    options: [
      {
        text: 'Get more food',
        nextText: 10
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 21,
    text: "You eat the Nigiri. Not bad! You're still hungry, though..."
    ,    
    options: [
      {
        text: 'Get more food',
        nextText: 10
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 22,
    text: "The waitress slaps you. Just what do you think you're doing?"
    ,    
    options: [
      {
        text: 'Behave yourself',
        setState: { screamed : true },
        nextText: 10
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 23,
    text: "You spit it out, and see it is now now colored a dark, viscous red. Your try to force yourself to breathe, and feel the large metal object lodges itself deeper in your esophagous.\n\n" +
    "You grab your neck as your arms go limp. Your head slumps forward onto the table in front of you, and a mixture of blood and undigested food oozes from between your teeth."
    ,    
    options: [
      {
        text: 'Dislodge it',
        nextText: 24
      }
    ]
  },
  {
    id: 24,
    text: "You grab your neck as your arms go limp. Your head slumps forward onto the table in front of you, and a mixture of blood and undigested food oozes from between your teeth."
    ,    
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 25,
    text: "Your body flies backward and your head hits the ground with a sickening crack.\n\n" +
    "Blood pools around your ears as the world fades to black."
    ,    
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 26,
    text: "You're stuffed. You finish the last bite, pick yourself up from the table, and go to pay.\n\n" +
    "Though you are surprised at the large bill facing you, you gladly confer up what remains in your pocket as payment and head to the door."
    ,    
    options: [
      {
        text: 'Step outside',
        nextText: 27
      }
    ]
  },
  {
    id: 27,
    text: "The cool breeze brushes against your skin. The sky is cloudy, but the temperature is comfortable.\n\n" +
    "You decide that you want to go somewhere, but reaching into your empty pocket realize that you're fresh out of money."
    ,    
    options: [
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 28,
    text: "You arrive at Pizza Hut and approach the counter. Standing behind it is a pimply teenger with red curly hair, trying to hide his cell phone under the counter.\n\n" +
    "Workers in the kitchen behind him are doing the same."
    ,    
    options: [
      {
        text: 'Get his attention',
        nextText: 29
      }
    ]
  },
  {
    id: 29,
    text: "The kids glances up from his phone, does a half-eye-roll, and waits for your order:\n\n"
    ,    
    options: [
      {
        text: 'Small',
        setState: { smallPizza: true, pizzaHut: true},
        nextText: 30
      },
      {
        text: 'Medium',
        setState: { pizzaHut: true},
        nextText: 31
      },
      {
        text: 'Large',
        setState: { pizzaHut: true},
        nextText: 33
      },
      {
        text: 'Extra-Large',
        requiredState: (currentState) => !currentState.boySlapped,
        nextText: 35
      },
      {
        text: 'Extra-Large',
        requiredState: (currentState) => currentState.boySlapped,
        nextText: 144
      },
      {
        text: 'Slap the kid',
        nextText: 38
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 30,
    text: "You open up the box for the Small pizza. Your stomach rumbles as you devour the beautiful circle of dough and grease.\n\n" +
    "In just a few minutes, the entire thing is gone."
    ,    
    options: [
      {
        text: 'Step outside',
        nextText: 32
      }
    ]
  },
  {
    id: 31,
    text: "You open up the box for the Medium pizza. Your stomach rumbles as you devour the beautiful circle of dough and grease.\n\n" +
    "In just a few minutes, the entire thing is gone."
    ,    
    options: [
      {
        text: 'Step outside',
        nextText: 32
      }
    ]
  },
  {
    id: 32,
    text: "On your way out the door, you notice a masked figure in the distance looking in your direction."
    ,    
    options: [
      {
        text: 'Brush it off',
        nextText: 100
      }
    ]
  },


  {
    id: 33,
    text: "You tear into the Large pizza. Your stomach rumbles as you devour the beautiful circle of dough and grease.\n\n" +
    "In just a few minutes, the entire thing is gone"
    ,    
    options: [
      {
        text: 'Step outside',
        nextText: 34
      }
    ]
  },
  {
    id: 34,
    text: "On your way out the door, your legs begin to quiver, and you fall to the ground."
    ,    
    options: [
      {
        text: 'Catch yourself',
        nextText: 40
      }
    ]
  },
  {
    id: 35,
    text: "The boy groans, and looks back at his colleagues. He informs you that the Extra-Large pizza requires a special oven, and they will need extra time to warm it up."
    ,    
    options: [
      {
        text: 'Get the Extra Large',
        nextText: 36
      },
      {
        text: 'Get something else',
        nextText: 29
      }
    ]
  },
  {
    id: 36,
    text: "Accepting this, you take a seat and wait. After almost an hour wait, your pizza arrives.\n\n" +
    "As you open the box, a man with a black mask crashes through the glass door and rushes toward you."
    ,    
    options: [
      {
        text: 'Defend yourself',
        nextText: 37
      }
    ]
  },
  {
    id: 37,
    text: "You attempt to fight back, but he is too fast. After several knife thrusts to the chest, you fall to the ground, dead."
    ,    
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 38,
    text: "You think it over. Are you sure you want to do this?"
    ,    
    options: [
      {
        text: 'Be a respectable citizen',
        nextText: 29
      },
      {
        text: 'School his punk ass',
        setState: { boySlapped: true},
        nextText: 39
      }
    ]
  },
  {
    id: 39,
    text: "You lay the kid out on the floor.\n\n" +
        "The workers in the back kitchen look at you, shocked. One steps forward, and greets you timidly. His partner twitches on the floor.\n\n" +
        "You debate if you should grab a pizza or go elsewhere."
    ,    
    options: [
      {
        text: 'Small',
        setState: { smallPizza: true},
        nextText: 30
      },
      {
        text: 'Medium',
        nextText: 31
      },
      {
        text: 'Large',
        nextText: 33
      },
      {
        text: 'Extra-Large',
        requiredState: (currentState) => !currentState.boySlapped,
        nextText: 35
      },
      {
        text: 'Extra-Large',
        requiredState: (currentState) => currentState.boySlapped,
        nextText: 144
      },
      {
        text: 'Taco Bell',
        nextText: 8
      },
      {
        text: 'Fuji Sushi',
        nextText: 9
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 40,
    text: "Damaged ventricles from an overworked heart capitulate to the onslaught of cheap oils coursing through your veins\n\n." +
        "You draw your last breath."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 42,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 43,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 42
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 44,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 45,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 46,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 47,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 48,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 49,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 50,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 51,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 52,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 53,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 54,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 55,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 56,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 57,
    text: "You try to muster the your willpower, but it appears to be on vacation."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 58,
    text: "1 word down, only 999 to go."
    ,    
    options: [
      {
        text: 'Keep writing',
        requiredState: (currentState) => !currentState.writePaper,
        nextText: 43
      },
      {
        text: 'Do something else',
        nextText: 999
      }
    ]
  },
  {
    id: 100,
    text: "The cool breeze brushes against your skin. The sky is cloudy, but the temperature is comfortable.\n\n" +
    "There are a few stores nearby that you could visit."
    ,
    options: [
      {
        text: 'Find a place to go',
        nextText: 101
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 101,
    text: "You pull up your map and see that there are a few stores nearby. You choices are:"
    ,    
    options: [
      {
        text: 'Wal-Mart',
        nextText: 102
      },
      {
        text: 'Costco',
        nextText: 200
      },
      {
        text: 'Barnes and Noble',
        nextText: 300
      },
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 102,
    text: "You arrive at Wal-Mart, the land of low prices, the McDonalds of retail, the bane of small business.\n\n" +
    "The exterior of the building has a fresh design. They have stepped up their game in recent years."
    ,    
    options: [
      {
        text: 'Go inside',
        nextText: 103
      }
    ]
  },
  {
    id: 103,
    text: "The interior is filled with bright displays and colorful designs. A stark constrast to its spartan style of the past.\n\n" +
    "You look around, and starting heading toward the:",
    options: [
      {
        text: 'Clothing section',
        requiredState: (currentState) => currentState.tacoBell,
        nextText: 104
      },
      {
        text: 'Electronics section',
        requiredState: (currentState) => currentState.tacoBell,
        nextText: 115
      },
      {
        text: 'Clothing section',
        requiredState: (currentState) => currentState.pizzaHut,
        nextText: 180
      },
      {
        text: 'Electronics section',
        requiredState: (currentState) => currentState.pizzaHut,
        nextText: 185
      }
    ]
  },
  {
    id: 104,
    text: "You decide to go to the clothing department - You could always use some new shirts.\n\n" +
        "You start flipping through the discount rack when you feel a strange sensation in your body."
    ,    
    options: [
      {
        text: 'Clench stomach',
        nextText: 105
      }
    ]
  },
  {
    id: 105,
    text: "You stomach does a flip as you feel the Taco Bell you ate earlier making a comeback.\n\n" +
        "Your insides spin, angrily protesting the coagulated mass of cheap ingredients that are laying waste to your digestive tract. You need to find a bathroom. Now."
    ,
    options: [
      {
        text: 'Find bathroom',
        nextText: 106
      }
    ]
  },
  {
    id: 106,
    text: "You rush toward the bathroom in the back of the store, your legs pumping like pistons to cover the wide expanse. You feel it begin to happen. You are too late.\n\n" +
        "A dark bulge forms at the back of your pants, as a slimy liquid slides down your legs. People are staring. You are ashamed.\n\n" +
        "Out of the corner of your eye, you see your crush, standing with a group of her friends. She's pointing in your direction and laughing. You swear under your breath and wish for death."
    ,
    options: [
      {
        text: 'Run',
        requiredState: (currentState) => !currentState.nachos,
        nextText: 107
      },
      {
        text: 'Go',
        requiredState: (currentState) => currentState.nachos,
        nextText: 110
      }
    ]
  },
  {
    id: 107,
    text: "You finally make your way to the bathroom. Standing outside is a man in a blue polyester shirt holding a mop.\n\n" +
        '"Sorry sir, just closed. You can come back in a few minutes or go through the back." he says, pointing to the warehouse area.'
    ,
    options: [
      {
        text: 'Go to warehouse bathroom',
        nextText: 108
      }
    ]
  },
  {
    id: 108,
    text: "You slink down to the warehouse bathroom. Trying to brush aside your shame, you do your business.\n\n" +
        "You hear the subtle click of a door being locked, and as you step out of the stall, you are greeted by a man wearing a black mask. Your veins turn to ice."
    ,
    options: [
      {
        text: 'Escape',
        nextText: 109
      },
      {
        text: 'Stand still',
        nextText: 109
      },
      {
        text: 'Question him',
        nextText: 112
      }
    ]
  },
  {
    id: 109,
    text: "Before you have a chance to react, he rushes you, and plunges a knife deep into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 110,
    text: "You finally make your way to the bathroom. There is a wet floor sign outside, and the floors are still wet."
    ,
    options: [
      {
        text: 'Go inside',
        nextText: 111
      }
    ]
  },
  {
    id: 111,
    text: "You step carefully inside. Trying to brush aside your shame, you do your business.\n\n" +
        "You hear the subtle click of a door being locked, and as you step out of the stall, you are greeted by a man wearing a black mask. Your veins turn to ice."
    ,
    options: [
      {
        text: 'Escape',
        nextText: 109
      },
      {
        text: 'Stand still',
        nextText: 109
      },
      {
        text: 'Question him',
        nextText: 112
      }
    ]
  },
  {
    id: 112,
    text: "\"I've seen you before\", you say. \"You're here to kill me, aren't you?\"\n\n" +
        "The man removes his mask, revealing the face of a wrinkled, elderly man with straight black hair.\n\n" +
        "He looks down at his watch, shakes his head, then looks at you."
    ,
    options: [
      {
        text: 'Hesitate',
        requiredState: (currentState) => (currentState.tacoBell, currentState.nachos),
        nextText: 113
      },
      {
        text: 'Hesitate',
        requiredState: (currentState) => (currentState.tacoBell, !currentState.nachos),
        nextText: 114
      }
    ]
  },
  {
    id: 113,
    text: "\"You're late.\" he says.\n\n" +
        "You have so many questions that you want to ask him, but before you have the chance, he takes the knife and plunges it into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 114,
    text: "\"Next time, we'll meet in another place. he says.\n\n" +
        "You steel yourself, knowing what is about to come. He takes the knife and plunges it deep into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 115,
    text: "You decide to go to the Electronics department - there's a big sale on dvds this week.\n\n" +
        "You start flipping through movies when you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Groan',
        nextText: 116
      }
    ]
  },
  {
    id: 116,
    text: "You stomach does a flip as you feel the Taco Bell you ate earlier making a comeback.\n\n" +
        "Your insides spin, angrily protesting the coagulated mass of cheap ingredients that are laying waste to your digestive tract. You need to find a bathroom. Now."
    ,
    options: [
      {
        text: 'Find bathroom',
        requiredState: (currentState) => !currentState.nachos,
        nextText: 117
      },
      {
        text: 'Find bathroom',
        requiredState: (currentState) => currentState.nachos,
        nextText: 121
      }
    ]
  },
  {
    id: 117,
    text: "You rush toward the bathroom in the back of the store, luckily very close to where you are now."
    ,
    options: [
      {
        text: 'Step inside',
        nextText: 118
      }
    ]
  },
  {
    id: 118,
    text: "You step inside to do your business.\n\n" +
        "The floors and walls are covered with a sickly pale veneer. It looks like this bathroom hasn't been cleaned in a long time.\n\n" +
        "You hear the subtle click of a door being locked, and as you step out of the stall, you are greeted by a man wearing a black mask. Your veins turn to ice."
    ,
    options: [
      {
        text: 'Escape',
        nextText: 109
      },
      {
        text: 'Stand still',
        nextText: 109
      },
      {
        text: 'Question him',
        nextText: 119
      }
    ]
  },
  {
    id: 119,
    text: "\"I've seen you before\", you say. \"You're here to kill me, aren't you?\"\n\n" +
        "The man removes his mask, revealing the face of a wrinkled, elderly man with straight black hair.\n\n" +
        "He looks down at his watch, shakes his head, then looks at you."
    ,
    options: [
      {
        text: 'Hesitate',
        requiredState: (currentState) => (currentState.tacoBell, !currentState.nachos),
        nextText: 120
      },
      {
        text: 'Hesitate',
        requiredState: (currentState) => (currentState.tacoBell, currentState.nachos),
        nextText: 123
      }
    ]
  },
  {
    id: 120,
    text: "\"Too early.\" he says." +
        "You have so many questions that you want to ask him, but before you have the chance, he takes the knife and plunges it deep into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 121,
    text: "You rush toward the bathroom in the back of the store, luckily very close to where you are now. Standing outside is a man in a blue polyester shirt holding a mop.\n\n" +
        "\"Just finished up, sir.\" he says, motioning to the door. \"And watch your step.\""
    ,
    options: [
      {
        text: 'Step inside',
        nextText: 122
      }
    ]
  },
  {
    id: 122,
    text: "You step inside and do your business.\n\n" +
        "You hear the subtle click of a door being locked, and as you step out of the stall, you are greeted by a man wearing a black mask. Your veins turn to ice."
    ,
    options: [
      {
        text: 'Question him',
        nextText: 123
      }
    ]
  },
  {
    id: 123,
    text: "\"I've seen you before\", you say. \"You're here to kill me, aren't you?\"\n\n" +
        "The man removes his mask, revealing the face of a wrinkled, elderly man with straight black hair.\n\n" +
        "He looks down at his watch, taps it twice, then up to you. \"That depends\", he says. \"On if you're willing to cooperate.\""
    ,
    options: [
      {
        text: 'Cooperate',
        nextText: 125
      },
      {
        text: 'Say nothing',
        nextText: 125
      },
      {
        text: 'Run away',
        nextText: 124
      },
      {
        text: 'Attack him',
        nextText: 124
      }
    ]
  },
  {
    id: 124,
    text: "\"Then so be it.\"\n\n" +
        "He takes the knife and plunges it into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 125,
    text: "\"I've been waiting to meet you here. The time is right.\n\n" +
        "The decisions you have made leading us to this moment have set the dominoes in place.\n\n" +
        "Now, all we have to do now is knock them over. Are you with me?\""
    ,
    options: [
      {
        text: 'Yes',
        nextText: 126
      },
      {
        text: 'No',
        nextText: 124
      }
    ]
  },
  {
    id: 126,
    text: "\"Then come with me.\"\n\n" +
        "You follow him without protest. He leads you out of the room, and to an area marked \"Employees Only\"."
    ,
    options: [
      {
        text: 'Enter',
        nextText: 127
      }
    ]
  },
  {
    id: 127,
    text: "Gone are the joyful bright blue and yellow hues, replaced by the grays and browns of industrious austerity.\n\n" +
        "He leads you to a room filled with large screens and consoles. There are several employees standing there, which he dispatches of quickly with his knife.\n\n" +
        "He walks up to a console and opens up a command line. He types in some code, and then turns to you."
    ,
    options: [
      {
        text: 'Go to him',
        nextText: 128
      }
    ]
  },
  {
    id: 128,
    text: "\"This is what I brought you here for.\" and points to the number pad sitting directly in front of you.\n\n" +
        "\"There is a reason that I brought you here, he says.A reason I have been chasing you, following you for all this time. Have you figured it out yet?\""
    ,
    options: [
      {
        text: 'No',
        nextText: 129
      },
      {
        text: 'Shake head',
        nextText: 129
      }
    ]
  },
  {
    id: 129,
    text: "You shake your head no. \"Then I'll tell you\" he says. \"You were selected for your unique ability to interact with different timelines.\n\n" +
        "You were selected by our society when we discovered that you are key we have been missing, the key that can finally bring Wal-Mart to its knees.\""
    ,
    options: [
      {
        text: 'Scratch head',
        nextText: 130
      },
      {
        text: 'Question him',
        nextText: 130
      }
    ]
  },
  {
    id: 130,
    text: "You scratch your head. \"Wal-Mart ? What's the problem with Wal-Mart?\"\n\n" +
        "The man laughs, then sighs. \"Wal-Mart has been growing more and more powerful every year. More powerful than you can imagine.\"\n\n" +
        "Unknown to the general population, Wal-Mart has been planning something terrible, and it will occur in just two days, if we do not stop it.\""
    ,
    options: [
      {
        text: 'Question him',
        nextText: 131
      }
    ]
  },
  {
    id: 131,
    text: "\"What are they planning on doing?\"\n\n" +
        "\"They plan to sieze control of the government. Using their massive logistical might, they will overpower our government and the governments of the world. That is, if we don't stop them.\""
    ,
    options: [
      {
        text: 'Say nothing',
        nextText: 132
      },
      {
        text: 'Think it over',
        nextText: 132
      }
    ]
  },
  {
    id: 132,
    text: "You pause, taking a minute to drink this all in. Wal-Mart, a superpower? You can't believe it.\n\n" +
        "Then, the man produces a dossier from his coat detailing Wal-Mart's plans to attack the White House, Pentagon, and multiple US military headquarters two days from now.\n\n"
    ,
    options: [
      {
        text: 'Question him',
        nextText: 133
      },
      {
        text: 'Say nothing',
        nextText: 133
      }
    ]
  },
  {
    id: 133,
    text: "You are shocked. \"So, what do I do ?\" The man looks to you, then to the panel. Pointing to the dossier, he says:\n\n" +
        "\"Two days from now, Wal-Mart will launch their long-range ballistic missiles at vital US comand and control structures, crippling the government.\n\n" +
        "That launch will be executed from... this room.\""
    ,
    options: [
      {
        text: 'Say nothing',
        nextText: 134
      }
    ]
  },
  {
    id: 134,
    text: "You say nothing, and motion for him to continue speaking.\n\n" +
        "\"We are able to override this sequence, but only if we have the codes in advance. This is why you are here.\" He then flips through a small notebook. A to-do list, it seemed.\n\n" +
        "\"You see, I was told to meet you here, at this exact time.\" He pointed to the 12:47, Wal-Mart bathroom in his notebook.\n\n" +
        "\"If it were anywhere else, or at any other time, I was to kill you to reset the timeline. However, there is one more thing.\n\n" +
        "In every timeline, I was to try and locate the launch codes for this console. In this timeline, I didn't succeed, but in one of them, I did.\n\n" +
        "I need you to input the code I gave you in another timeline so we can stop Wal-Mart.\"\n\n" +
        "He points to the keypad in front of you. On the display are four empty slots where numbers should be."
    ,
    options: [
      {
        text: 'Enter code',
        nextText: 135
      }
    ]
  },
  {
    id: 135,
    text: "ENTER CODE ****"
    ,
    options: [
      {
        text: '1',
        nextText: 136
      },
      {
        text: '2',
        nextText: 140
      },
      {
        text: '3',
        nextText: 140
      },
      {
        text: '4',
        nextText: 140
      },
      {
        text: '5',
        nextText: 140
      },
      {
        text: '6',
        nextText: 140
      },
      {
        text: '7',
        nextText: 140
      },
      {
        text: '8',
        nextText: 140
      },
      {
        text: '9',
        nextText: 140
      },
      {
        text: '0',
        nextText: 140
      }
    ]
  },
  {
    id: 136,
    text: "ENTER CODE 1***"
    ,
    options: [
      {
        text: '1',
        nextText: 140
      },
      {
        text: '2',
        nextText: 140
      },
      {
        text: '3',
        nextText: 140
      },
      {
        text: '4',
        nextText: 137
      },
      {
        text: '5',
        nextText: 140
      },
      {
        text: '6',
        nextText: 140
      },
      {
        text: '7',
        nextText: 140
      },
      {
        text: '8',
        nextText: 140
      },
      {
        text: '9',
        nextText: 140
      },
      {
        text: '0',
        nextText: 140
      }
    ]
  },
  {
    id: 137,
    text: "ENTER CODE 14**"
    ,
    options: [
      {
        text: '1',
        nextText: 140
      },
      {
        text: '2',
        nextText: 140
      },
      {
        text: '3',
        nextText: 140
      },
      {
        text: '4',
        nextText: 140
      },
      {
        text: '5',
        nextText: 140
      },
      {
        text: '6',
        nextText: 140
      },
      {
        text: '7',
        nextText: 140
      },
      {
        text: '8',
        nextText: 140
      },
      {
        text: '9',
        nextText: 138
      },
      {
        text: '0',
        nextText: 140
      }
    ]
  },
  {
    id: 138,
    text: "ENTER CODE 149*"
    ,
    options: [
      {
        text: '1',
        nextText: 140
      },
      {
        text: '2',
        nextText: 141
      },
      {
        text: '3',
        nextText: 140
      },
      {
        text: '4',
        nextText: 140
      },
      {
        text: '5',
        nextText: 140
      },
      {
        text: '6',
        nextText: 140
      },
      {
        text: '7',
        nextText: 140
      },
      {
        text: '8',
        nextText: 140
      },
      {
        text: '9',
        nextText: 140
      },
      {
        text: '0',
        nextText: 140
      }
    ]
  },
  {
    id: 140,
    text: "INVALID CODE\n\n" +
        "The man sighs, and without a word of warning, stabs you through the abdomen."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 141,
    text: "CODE ACCEPTED\n\n" +
        "The man smiles, and begins typing away on the console. Many minutes later, he pulls away from the console.\n\n" +
        "He turns to you \"We're turning the tables on them\" he says. \"I've targeted every Wal-Mart store in the United States.\""
    ,
    options: [
      {
        text: 'Nod',
        nextText: 142
      },
      {
        text: 'Question him',
        nextText: 142
      }
    ]
  },
  {
    id: 142,
    text: "\"But what about the people?\" You say.\n\n" +
        "\"Its a small price to pay\" then presses the button to launch.\n\n"
    ,
    options: [
      {
        text: 'Escape',
        nextText: 143
      }
    ]
  },
  {
    id: 143,
    text: "- - TRUE END - -\n\n" +
        "The two of you run through the metallic backbone of the store, out the back entrance, and far enough away to avoid any collateral damage.\n\n" +
        "You watch from a distance as the store is bombarded with missiles from every angle.\n\n" +
        "Still questioning everything that has happened so far, You're not sure if you did the right thing. Sure, an evil company was stopped, but at what cost?\n\n" +
        "The man pulls himself up, a tiny smirk plastered on his face. \"Thank you. We couldn't have done it without you.\" He then proceeds to walk away, leaving you alone with your thoughts.\n\n" +
        "For just a moment, you catch the undeniable red bullseye of the Target logo on his sleeve, as he fades into the distance."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 144,
    text: "The worker politely informs you that the Extra-Large pizza requires a special oven, and they will need extra time to warm it up.\n\n" +
        "He meekly asks if this would be okay."
    ,
    options: [
      {
        text: 'Get the Extra Large',
        nextText: 36
      },
      {
        text: 'Get something else',
        nextText: 29
      }
    ]
  },
  {
    id: 150,
    text: "The TV greets you with a buzz of grey and white static."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 151,
    text: "You see a documentary on Wal-Mart store design. According to the documentary, all Wal-Marts are designed in the same way:\n\n" +
        "With apparel in the front, entertainment in the back, automotive to the right, and groceries to the left. Interesting."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 152,
    text: "There is a doctor talking about the dangers of coronary artery disease.\n\n" +
        "Apparently, reducing your intake of saturated fats will reduce your risk of heart attack. Who knew."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 153,
    text: "There is a news report on a masked man who was spotted walking around a nearby neighborhood.\n\n" +
        "Creepy."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 154,
    text: "There is a children's TV show with a dinosaur fighting a giant zebra.\n\n" +
        "It's wierd, but you've seen weirder."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 155,
    text: "There is an advertisement for the new Barnes and Noble bookstore in the area.\n\n" +
        "They claim to have a large selection of everything from history, to comics, even medical textbooks."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 156,
    text: "There is a news story of the dangers of eating while walking.\n\n" +
        "In the past year alone, 13 people have died from incidents involving walking and eating at the same time."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 157,
    text: "There is a sci-fi movie about a man who can come back to life after death.\n\n" +
        "He keeps on dying though. Maybe he should trying doing things in a different way?"
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 158,
    text: "There is a motivational speaker on a stage pumping up his audience.\n\n" +
        "If you could live your life over again, what would you do differently?"
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 159,
    text: "There is a news headline on a recent chicken breast recall.\n\n" +
        "Apparently dangerous objects were found in the batch."
    ,
    options: [
      {
        text: 'Turn off TV',
        nextText: 160
      }
    ]
  },
  {
    id: 160,
    text: "Your stomach grumbles again. You put the remote down and turn off the TV."
    ,
    options: [
      {
        text: 'Write the paper',
        requiredState: (currentState) => !currentState.writePaper,
        setState: { writePaper: true},
        nextText: 3
      },
      {
        text: 'Check the Notebook',
        requiredState: (currentState) => !currentState.checkNotebook,
        setState: { checkNotebook: true},
        nextText: 4
      },
      {
        text: 'Watch TV',
        requiredState: (currentState) => !currentState.watchTV,
        setState: { watchTV: true},
        nextText: 5
      },
      {
        text: 'Take a nap',
        requiredState: (currentState) => !currentState.takeNap,
        setState: { takeNap: true},
        nextText: 6
      },
      {
        text: 'Get Food',
        nextText: 7
      }
    ]
  },
  {
    id: 170,
    text: "You eat the Ramen. You're stuffed."
    ,
    options: [
      {
        text: 'Pay and leave',
        nextText: 173
      }
    ]
  },
  {
    id: 171,
    text: "You eat the California roll. You're stuffed."
    ,
    options: [
      {
        text: 'Pay and leave',
        nextText: 173
      }
    ]
  },
  {
    id: 172,
    text: "You eat the Nigiri. You're stuffed."
    ,
    options: [
      {
        text: 'Pay and leave',
        nextText: 173
      }
    ]
  },
  {
    id: 173,
    text: "You pick yourself up from the table, and go to pay.\n\n" +
        "Though you are surpised at the large bill facing you, you gladly confer up what remains in your pocket as payment."
    ,
    options: [
      {
        text: 'Step outside',
        nextText: 174
      }
    ]
  },
  {
    id: 174,
    text: "The cool breeze brushes against your skin. The sky is cloudy, but the temperature is comfortable.\n\n" +
        "You decide that you want to go somewhere, but reaching into your empty pocket realize you're fresh out of cash.\n\n" +
        "You might as well go home."
    ,
    options: [
      {
        text: 'Go home',
        nextText: 1000
      }
    ]
  },
  {
    id: 180,
    text: "You decide to go to the clothing department - You could always use some new shirts.\n\n" +
        "You start flipping through the discount rack when you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Grab chest',
        nextText: 181
      }
    ]
  },
  {
    id: 181,
    text: "Your legs begin to quiver, and a cold chill runs over your body. You place your hand over your chest, and feel your heartbeat intensify.\n\n" +
        "Damaged ventricles from an overworked heart capitulate to the onslaught of cheap oils coursing through your veins."
    ,
    options: [
      {
        text: 'Call for help',
        nextText: 182
      }
    ]
  },
  {
    id: 182,
    text: "You call for help, but no words come out. You scream for a doctor, but no one answers.\n\n" +
        "You fall to the ground, and draw your last breath."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 185,
    text: "You decide to go to the Electronics department - there's a big sale on dvds this week.\n\n" +
        "You start flipping through movies when you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Grab chest',
        nextText: 181
      }
    ]
  },
  {
    id: 200,
    text: "You arrive at Costco, the place where anything that can be bought, and in large quantities.\n\n" +
        "You look around at the massive warehouse, and deliberate on what you should do."
    ,
    options: [
      {
        text: 'Try samples',
        requiredState: (currentState) => currentState.tacoBell,
        nextText: 201
      },
      {
        text: 'Go shopping',
        requiredState: (currentState) => currentState.tacoBell,
        nextText: 209
      },
      {
        text: 'Try samples',
        requiredState: (currentState) => currentState.pizzaHut,
        nextText: 210
      },
      {
        text: 'Go shopping',
        requiredState: (currentState) => currentState.pizzaHut,
        nextText: 215
      }
    ]
  },
  {
    id: 201,
    text: "You decide to eat the samples, wishing you had brought a pair of sunglasses or a baseball cap so you could try them twice.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Clench stomach',
        nextText: 202
      }
    ]
  },
  {
    id: 202,
    text: "You stomach does a flip as you feel the Taco Bell you ate earlier making a comeback.\n\n" +
        "Your insides spin, agrily protesting the coagulated mass of cheap ingredients that are laying waste to your digestive tract. You need to find a bathroom. Now."
    ,
    options: [
      {
        text: 'Find bathroom',
        nextText: 203
      }
    ]
  },
  {
    id: 203,
    text: "You rush toward the bathroom in the back of the store, your legs pumping like pistons to cover the wide expanse. You feel it begin to happen. You are too late.\n\n" +
        "A dark bulge forms at the back of your pants, as a slimy liquid slides down your legs. People are staring. You are ashamed.\n\n" +
        "Out of the corner of your eye, you see your old teacher, shopping with her kids. They're pointing in your direction and laughing. You swear under your breath and wish for death."
    ,
    options: [
      {
        text: 'Run',
        nextText: 204
      }
    ]
  },
  {
    id: 204,
    text: "You finally make your way to the bathroom. Trying to brush aside your shame, you do your business.\n\n" +
        "You hear the subtle click of a door being locked, and as you step out of the stall, you are greeted by a man wearing a black mask. Your veins turn to ice."
    ,
    options: [
      {
        text: 'Escape',
        nextText: 205
      },
      {
        text: 'Stand still',
        nextText: 205
      },
      {
        text: 'Question him',
        nextText: 206
      }
    ]
  },
  {
    id: 205,
    text: "Before you have a chance to act, he rushes you, and plunges a knife deep into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 206,
    text: "\"Wrong place.\" he says.\n\n" +
        "You have so many questions that you want to ask him, but before you have the chance, he takes the knife and plunges it deep into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 209,
    text: "You decide to buy some things off your list. You begin to reach for a 5lb box of pancake mix.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Clench stomach',
        nextText: 202
      }
    ]
  },
  {
    id: 210,
    text: "You decide to eat the samples, wishing you had brought a pair of sunglasses or a baseball cap so you could try them twice.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Grab chest',
        nextText: 211
      }
    ]
  },
  {
    id: 211,
    text: "Your legs begin to quiver, and a cold chill runs over your body. You place your hand over your chest, and feel your heartbeat intensify.\n\n" +
        "Damaged ventricles from an overworked heart capitulate to the onslaught of cheap oils coursing through your veins."
    ,
    options: [
      {
        text: 'Call for help',
        nextText: 212
      }
    ]
  },
  {
    id: 212,
    text: "You call for help, but no words come out. You scream for a doctor, but no one answers.\n\n" +
        "You fall to the ground, and draw your last breath."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 215,
    text: "You decide to buy some things off your list. You begin to reach for a 5lb box of pancake mix.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Grab chest',
        nextText: 211
      }
    ]
  },
  {
    id: 300,
    text: "You arrive at Barnes and Noble, the acclaimed bookstore known for its wide aisles and comfortable seating.\n\n" +
        "There is a Starbucks next door, filled with college students and aspiring novelists clacking away on their laptops.\n\n" +
        "You look at the massive bookstore in front of you, and decide where to go."
    ,
    options: [
      {
        text: 'Fiction',
        requiredState: (currentState) => currentState.tacoBell,
        nextText: 301
      },
      {
        text: 'Non-Fiction',
        requiredState: (currentState) => currentState.tacoBell,
        nextText: 310
      },
      {
        text: 'Fiction',
        requiredState: (currentState) => currentState.pizzaHut,
        nextText: 320
      },
      {
        text: 'Non-Fiction',
        requiredState: (currentState) => currentState.pizzaHut,
        nextText: 330
      }
    ]
  },
  {
    id: 301,
    text: "You decide to look at the fiction section, and start flipping through the new arrivals.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Clench stomach',
        nextText: 302
      }
    ]
  },
  {
    id: 302,
    text: "You stomach does a flip as you feel the Taco Bell you ate earlier making a comeback.\n\n" +
        "Your insides spin, agrily protesting the coagulated mass of cheap ingredients that are laying waste to your digestive tract. You need to find a bathroom. Now."
    ,
    options: [
      {
        text: 'Find bathroom',
        nextText: 303
      }
    ]
  },
  {
    id: 303,
    text: "You rush toward the bathroom in the Starbucks next door. It's locked. Of course it's locked.\n\n" +
        "You run to the peppy, curly-haired barista at the counter, and she informs you that you need to buy something before you can use bathroom."
    ,
    options: [
      {
        text: 'Buy something',
        nextText: 304
      }
    ]
  },
  {
    id: 304,
    text: "You swear under your breath, and as you start reaching for your wallet. You feel it begin to happen. You are too late.\n\n" +
        "A dark bulge forms at the back of your pants, as a slimy liquid slides down your legs. People are staring. You are ashamed.\n\n" +
        "The barista looks at you, then down at the brown puddle forming on the floor, then back at you. You swear under your breath and wish for death."
    ,
    options: [
      {
        text: 'Beg her',
        nextText: 305
      },
      {
        text: 'Yell at her',
        nextText: 305
      },
      {
        text: 'Ask her again',
        nextText: 305
      }
    ]
  },
  {
    id: 305,
    text: "She tries to hide the look of surprise on her face, then motions you toward the door and unlocks it for you.\n\n" +
        "You finally make your way to the bathroom. Trying to brush aside your shame, you do your business.\n\n" +
        "You hear the subtle click of a door being locked, and as you step out of the stall, you are greeted by a man wearing a black mask. Your veins turn to ice."
    ,
    options: [
      {
        text: 'Escape',
        nextText: 306
      },
      {
        text: 'Stand still',
        nextText: 306
      },
      {
        text: 'Question him',
        nextText: 307
      }
    ]
  },
  {
    id: 306,
    text: "Before you have a chance to act, he rushes you, and plunges a knife deep into your chest."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 307,
    text: "\"Wrong place.\" he says.\n\n" +
        "You have so many questions that you want to ask him, but before you have the chance, he takes the knife and plunges it deep into your chest."
    ,
    options: [
      {
        text: '',
        nextText: 300
      }
    ]
  },
  {
    id: 310,
    text: "You decide to look at the nonfiction section. You stroll past the medicine and nursing section, and into science and technology.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Clench stomach',
        nextText: 302
      }
    ]
  },
  {
    id: 320,
    text: "You decide to look at the fiction section, and start flipping through the new arrivals.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Grab chest',
        nextText: 321
      }
    ]
  },
  {
    id: 321,
    text: "Your legs begin to quiver, and a cold chill runs over your body. You place your hand over your chest, and feel your heartbeat intensify.\n\n" +
        "Damaged ventricles from an overworked heart capitulate to the onslaught of cheap oils coursing through your veins."
    ,
    options: [
      {
        text: 'Call for help',
        nextText: 322
      }
    ]
  },
  {
    id: 322,
    text: "You call for help, but no words come out. You scream for a doctor, but no one answers.\n\n" +
        "You fall to the ground, and draw your last breath."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 330,
    text: "You decide to look at the nonfiction section. You stroll past the medicine and nursing section, and into science and technology.\n\n" +
        "Suddenly, you feel a strange sensation in your body."
    ,
    options: [
      {
        text: 'Grab chest',
        nextText: 331
      }
    ]
  },
  {
    id: 331,
    text: "Your legs begin to quiver, and a cold chill runs over your body. You place your hand over your chest, and feel your heartbeat intensify.\n\n" +
        "Damaged ventricles from an overworked heart capitulate to the onslaught of cheap oils coursing through your veins."
    ,
    options: [
      {
        text: 'Call for help',
        nextText: 332
      }
    ]
  },
  {
    id: 332,
    text: "You yell for help, you scream for a doctor, and collapse to the floor.\n\n" +
        "The present becomes a series of snapshots, small flashes of consciousness surrounded by darkness.\n\n" +
        "You see a large group of people gathered around your body. You see one step forward. You feel the pressure of hands against your chest, flashing lights, white walls, and gray metal tools."
    ,
    options: [
      {
        text: 'Stay awake',
        requiredState: (currentState) => !currentState.smallPizza,
        nextText: 333
      },
      {
        text: 'Stay awake',
        requiredState: (currentState) => currentState.smallPizza,
        nextText: 335
      },
      {
        text: 'Drift away',
        requiredState: (currentState) => !currentState.smallPizza,
        nextText: 334
      },
      {
        text: 'Drift away',
        requiredState: (currentState) => currentState.smallPizza,
        nextText: 336
      }
    ]
  },
  {
    id: 333,
    text: "You try to piece together the serrated bits of language filtering through your failing consciousness.\n\n" +
        "\"We can't\", \"Too much\" is all that you can make out as the damaged ventricles from an overworked heart capitulate to the onslaught of cheap oils coursing through your veins.\n\n" +
        "You drift out of consciousness one last time, drawing your final breath."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 334,
    text: "You close your eyes, letting the soft clicks of metal tools and the warm glow of the sanitized room wash over you.\n\n" +
        "You drift out of consciousness one last time, drawing your final breath."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 335,
    text: "You try to piece together the serrated bits of language filtering through your failing consciousness.\n\n" +
        "The muffled voices are unintelligible, and slowly fading."
    ,
    options: [
      {
        text: 'Drift away',
        nextText: 336
      }
    ]
  },
  {
    id: 336,
    text: "You drift off to sleep. Hours pass.\n\n" +
        "...\n\n" +
        "...\n\n" +
        "...\n\n" +
        "...\n\n"
    ,
    options: [
      {
        text: 'Wake up',
        nextText: 337
      }
    ]
  },
  {
    id: 337,
    text: "Your eyes open, and in front of you is a blank white wall. A smiling nurse looks at you, then relays something to a figure in the distance.\n\n" +
        "A woman in her early 30's with straight brown hair walks into the room. The nurse walks up beside her.\n\n" +
        "It's a good thing for you that Dr. Hawkins was in that bookstore. If it wasn't for her, you may not be with us now."
    ,
    options: [
      {
        text: 'Thank her',
        nextText: 338
      }
    ]
  },
  {
    id: 338,
    text: "The doctor nods, then turns to the nurse and tells her to check your vitals. She starts to leave the room, then turns on her heel.\n\n" +
        "By the way, there was a man who stopped by earlier who wanted to speak to you you. He said that you would know him."
    ,
    options: [
      {
        text: 'Nod',
        nextText: 350
      }
    ]
  },
  {
    id: 350,
    text: "Somehow, you already knew who she was talking about. The masked man who you had seen so many times before.\n\n" +
        "She paused, then asked: Do you want us to let him in? It's up to you."
    ,
    options: [
      {
        text: 'Yes',
        nextText: 351
      },
      {
        text: 'No',
        nextText: 370
      },
    ]
  },
  {
    id: 351,
    text: "You tell her yes, against your better judgement, out of curiosity for what may follow.\n\n" +
        "Several minutes later, the man walks in, this time without his mask. He turns to the girls and says \"If it's not too much trouble, We'd like a minute alone.\""
    ,
    options: [
      {
        text: 'Agree',
        nextText: 352
      },
      {
        text: 'Protest',
        nextText: 353
      },
    ]
  },
  {
    id: 352,
    text: "You nod your head. The girls leave the room, and he closes the door.\n\n" +
        "He grabs a rolling chair and takes a seat beside the bed. \"Hello again. I bet you have a lot of questions for me.\""
    ,
    options: [
      {
        text: 'Question him',
        nextText: 354
      },
    ]
  },
  {
    id: 353,
    text: "You begin to protest, but something inside you stops you from doing it. The girls leave the room, and he closes the door.\n\n" +
        "He grabs a rolling chair and takes a seat beside the bed. \"Hello again. I bet you have a lot of questions for me.\""
    ,
    options: [
      {
        text: 'Question him',
        nextText: 354
      },
    ]
  },
  {
    id: 354,
    text: "\"I do.\" you say, scanning your mind for all of the unanswered questions you have, and pick the most obvious to start: \"Who are you?\"\n\n" +
        "\"My name does not matter\" he says, \"But what I do is of great importance to you.\n\n" +
        "I am a member of a secret society, bent on destroying a corrupt and evil organization, and we've determined that you are the one capable of helping us do that.\""
    ,
    options: [
      {
        text: 'Question him',
        nextText: 355
      },
    ]
  },
  {
    id: 355,
    text: "\"But how?\" you say. \"What is so special about me?\"\n\n" +
        "The man sighs, and a slight smile played across his lips.\"I think you already know the answer. Tell me, how many times have we met before now?\""
    ,
    options: [
      {
        text: 'Recall',
        nextText: 356
      },
    ]
  },
  {
    id: 356,
    text: "You rack your brain, recalling the countless times that you had met in the past. Suddenly, the gravity of the situation hits you. \"You're here to kill me, aren't you?\"\n\n" +
        "A momentary look of sadness sweeps over the man's face, before being replaced by one of dutiful fortitude.\n\n" +
        "\"Only because I must. I want you alive, but not here, not now. I need you in another timeline\""
    ,
    options: [
      {
        text: 'Question him',
        nextText: 357
      },
    ]
  },
  {
    id: 357,
    text: "\"Another timeline? What do you mean?\"\n\n" +
        "\"I think that you know.\" He sighs, and pulls a vial out of his coat pocket. \"I'll go easy on you this time, because you've made it so far.\"\n\n"
    ,
    options: [
      {
        text: 'Do nothing',
        nextText: 358
      },
      {
        text: 'Attack him',
        nextText: 358
      },
      {
        text: 'Protest',
        nextText: 358
      },
      {
        text: 'Run',
        nextText: 358
      }
    ]
  },
  {
    id: 358,
    text: "Before you can react, he takes the vial and pours it into your IV drip. You watch as the red fluid slides down the plastic tube and into your veins.\n\n" +
        "You feel a surge of blissful peace as the life evacuates your body."
    ,
    options: [
      {
        text: 'Drift away',
        nextText: 359
      },
    ]
  },
  {
    id: 359,
    text: "As your eyes shut for the last time, the man says to you \"1492. Remember 1492.\""
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      },
    ]
  },
  {
    id: 370,
    text: "You tell her no, unable to explain how you know him, and even doubting it yourself. You quickly drift off to sleep.\n\n" +
        "...\n\n" +
        "...\n\n" +
        "Suddenly, you are awoken by the sound of breaking glass. You jolt upward, and see the man standing there, knife in hand."
    ,
    options: [
      {
        text: 'Run',
        nextText: 371
      },
      {
        text: 'Fight',
        nextText: 371
      },
    ]
  },
  {
    id: 371,
    text: "You try in vain to free yourself from the tubes and wires strapped to your body. You feel the cold steel of his knife enter your ribcage as the life drains from your body.\n\n" +
        "As the world fades away, you hear him say \"We'll meet again\"."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      },
    ]
  },
  {
    id: 998,
    text: "You are sitting on your couch at home. A blue screen flickers in front of you.\n\n" +
        "By your side is a TV Remote, and a blank notebook. You're supposed to be writing a paper today, but haven't made much of any progress."
    ,
    options: [
      {
        text: 'Write your name',
        nextText: 42
      },
    ]
  },
  {
    id: 999,
    text: "You decide that's enough work for now, and look around at what else there is to do.\n\n" +
        "You see the notebook next to the TV remote, and feel a strong rumbling in your abdomen. You really should get something to eat."
    ,
    options: [
      {
        text: 'Write the paper',
        requiredState: (currentState) => !currentState.writePaper,
        setState: { writePaper: true},
        nextText: 3
      },
      {
        text: 'Check the Notebook',
        requiredState: (currentState) => !currentState.checkNotebook,
        setState: { checkNotebook: true},
        nextText: 4
      },
      {
        text: 'Watch TV',
        requiredState: (currentState) => !currentState.watchTV,
        setState: { watchTV: true},
        nextText: 5
      },
      {
        text: 'Take a nap',
        requiredState: (currentState) => !currentState.takeNap,
        setState: { takeNap: true},
        nextText: 6
      },
      {
        text: 'Get Food',
        nextText: 7
      }
    ]
  },
  {
    id: 1000,
    text: "It has been a long day. You decide to head home.\n\n" +
        "Aside from the random passersby, you are alone with your thoughts. The whole time, you can't shake the eerie feeling that you are being watched."
    ,
    options: [
      {
        text: 'Look around',
        nextText: 1001
      }
    ]
  },
  {
    id: 1001,
    text: "A tiger-like cat with orange and white stripes is lazing underneath someone's awning, belly outstretched toward the sky.\n\n" +
        "You reach your home, turn the key, and step inside. You wonder what you will do for the rest of the day.\n\n" +
        "Before you can finish the thought, you hear the dull thud of wood on drywall as your back door slams open."
    ,
    options: [
      {
        text: 'Turn around',
        nextText: 1002
      },
      {
        text: 'Run away',
        nextText: 1003
      }
    ]
  },
  {
    id: 1002,
    text: "You turn around just quickly enough to see the black fuzz of a cotton mask inches from your neck, as a knife slides between your ribs.\n\n" +
        "Once, Twice, Three times, you count them as it enters and exits your body. A pool of blood coagulates at your feet, leaking from your midsection like goo from a dripping faucet.\n\n" +
        "You collapse, and the world fades to black."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },
  {
    id: 1003,
    text: "You attempt to run, but only make if a few steps before you feel the cold steel of knife sliding between your ribs.\n\n" +
        "Once, Twice, Three times, you count them as it enters and exits your body. A pool of blood coagulates at your feet, leaking from your midsection like goo from a dripping faucet.\n\n" +
        "You collapse, and the world fades to black."
    ,
    options: [
      {
        text: 'Play again',
        nextText: -1
      }
    ]
  },



]

startGame()