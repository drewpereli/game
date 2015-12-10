





function GlobalVariables(){
	this.game;
	this.input;
	this.view;
	this.rand;

	//this.endIndex; //Used for most for loops. Represents where the for loop should end. Makes iterating through arrays faster.

	this.fontSize = 12;
	this.fontFamily = 'sans-serif';



	this.brightRadius = 4; //Max distance from a light source that the tile will be bright
	this.mediumRadius = 20; //Max distance from a light source that the tile will be medium


	this.HIVESPAWNCHANCE = .5; //The probability that a hive will spawn an enemy on any given turn

	this.NUMBEROFLEVELS = 10; //The total number of levels in the game

	this.constructors = {
		Zombie: false,
		UndeadSoldier: false,
		Hive: false,
	}



	this.itemRarityNames = ["REGULAR", "Decent", "Exceptional", "Legendary"];
	this.itemRarityProbabilities = [{min: 0, max: .5}, {min: .5, max: .8}, {min: .8, max: .95}, {min: .95, max: 1}];
	this.itemBonusMultipliers = {REGULAR: "NOTHING", Decent: 1.5, Exceptional: 2, Legendary: 3};
	this.possibleGunBonuses = ["Damage", "Accuracy", "Quickness", "Range", "Capacity", "Quietness"];
	this.possibleMeleeWeaponBonuses = ["Damage", "Quickness", "Force"];
	this.possibleArmorBonuses = ["Defense", "Agility", "Stealth", "Vitality", "Power"];
	this.possibleHelmetBonuses = ["Defense", "Agility", "Stealth", "Awareness", "Vitality", "Power"];



	this.COLORCONSTANTS = {
		RED: '#B64942',
		BLUE: '#325993',
		PURPLE: '#82175F',
		YELLOW: '#FFDC47 ',
		GOLD: '#C1A942 ',
		ORANGE: '#D76C00 ',
		GRAY: '#69716A',
		DARKGRAY: '#4B4851',
		LIGHTGRAY: '#ADA6A4',
		BLACK: 'black',
		WHITE: '#D6D0CC',
		GREEN: '#4C700E',
		DARKBLUE: '#0000DD',
		LIGHTBLUE: '#6894C8',
		BRIGHTGREEN: '#4ACD00',
		DARKGREEN: '#005000',
		BRIGHTPURPLE: '#F63499',
		DEEPRED: '#8B3A3A',
		BRIGHTRED: 'red',
		BRIGHTYELLOW: 'yellow',
		BRIGHTORANGE: 'orange',
	}

	

	this.chars = {
		WALL: '#',
		OPEN: ' ',
		STAIRSUP: '<',
		STAIRSDOWN: '>',
		ORB: '\u25CF',
		PLAYER: '@',
		
		GUN: '\u00ac',
		MELEE: '{',
		ARMOR: 'A',
		HELMET: '\u25E0',

		ZOMBIE: 'z',
		UNDEADSOLDIER: 'u',
		HIVE: '\u273F',
		SCARAB: 'c',
		COLOSSUS: 'C',
		SPIDERMOTHER: 'S',
		SPIDER: 's',
		SECURITYDRONE: 'd',
		LUMENDROID: 'L',

		UP: '\u2191',
		RIGHT: '\u2192',
		DOWN: '\u2193',
		LEFT: '\u2190'
	}

	





	this.constants = {
		maxHealthBase: 50,
		maxHealthMultiplier: 10,
		maxEnergyBase: 50,
		maxEnergyMultiplier: 15,
	}


	this.moveTimes = {
		VERYSLOW: 12,
		SLOW: 8,
		NORMAL: 4,
		FAST: 2,
		VERYFAST: 1,
	}



	this.playerRaces = {
		BRUTE: '<div class="goodAttribute">&middot;Gets a +100 bonus to max health.</div>',
		STALKER: '<div class="goodAttribute">&middot;Gets a 75% reduction in visibility (instead of 50%) in dark tiles.</div>',
		ADEPT: '<div class="goodAttribute">&middot;Gets a 1/2 reduction in move time.</div>',
		HIGHBROW: '<div class="goodAttribute">&middot;Gets a 2x bonus to energy recharge rate.</div>',
	}

	this.playerClasses = {
		PLACEHOLDER: "Yeah that's right I dont have any real classes yet it's a fuckin free game you entitled shit head (real talk thought thanks for trying it)",
	}




	this.attributeDescriptions = {//The descriptions for the attributes in the charcter menu
		strength: "Strength represents your raw power. Boosting strength increases your max health, "
				+ "and increases your damage with heavy weapons.",
		dexterity: "Dexterity represents your finesse. Boosting dexterity increases your damage with light weapons, "
				//+ "makes you move faster, "
				+ "makes you move more quietly, and improves your chance to dodge attacks.", 
		intelligence: "Intelligence represents your mental power. Boosting intelligence increases the rate at which "
						+ "your health recharges, the rate at which your energy recharges, and your maximum energy.",
		perception: "Perception represents the attunement of your sense. Boosting perception increases how far you can see, "
					+ "how wide your view angle is, how quickly your energy recharges, "
					+ "and your accuracy with most weapons.",
		health: "Your health represents your life force. If you hit 0 health, you die!<br/><br/>"
				+ "Your maximum health is equal to " + this.constants.maxHealthMultiplier + " x (your strength) + " + this.constants.maxHealthBase + " + (helmet and armor max health effects).<br/>",
		healthRechargeRate: "Your health recharge rate represents how much health you gain each tick.<br/><br/>"
							+ "Your health recharge rate is equal to (your intelligence) / 10. The minimum is .1.",
		energy: "Your energy represents your power reserves. It's mainly used for using powers.<br/><br/>"
				+ "You maximum energy is equal to " + this.constants.maxEnergyMultiplier + " x (your intelligence) + " + this.constants.maxEnergyBase + " + (helmet and armor max energy effects).<br/>",
		energyRechargeRate: "Your energy recharge rate represents how much energy you gain each tick.<br/><br/>"
							+ "Your energy recharge rate is equal to (your intelligence) / 20 + (your perception) / 20. "
							+ "The minimum is .01.",
		moveTime: "Your move time represents the number of ticks it takes you to move in the direction you're facing. "
					+ "To move in a directin you're not facing, you have to turn first, and that takes time. "
					+ "Turning 90 degrees takes half of your move time rounded up (so moving to the right or left of the direction you're facing takes 1.5 x (your move time)). "
					+ "Turning 180 degrees takes the the amount of time it takes you to move forward "
					+ "(so moving to the tile behind you takes 2 x (your move time)). "
					+ "Remember, if you want to turn without moving, hold control and press the direction you'd like to turn. "
					+ "If you want to move without turning, hold shift and a direction. It takes double your move time "
					+ "(unless you're moving forward, in which case it's treated like a normal move).<br/><br/>"
					//+ "Your walking move time is equal to 30 - (your strength) / 2 - (your dexterity) / 2 + (helmet and armor move time effects). "
					+ "If you're running, your move time is halved (but your move noise is doubled). If you're sneaking, your move time is doubled (but your move noise is halved). " 
					+ "Hit tab to switch between sneaking, walking, and running. The minimum move noise is always 1.",
		moveNoise: "Your move noise represesnts how much noise you make when you move. "
					+ "Remember, when you perform an action that makes noise, the noise will be produced for however long the action takes. "
					+ "So if your move time is 5 and your move noise is 10, you'll make ten noise for the entire 5 ticks that you're moving.<br/><br/>"
					+ "Your walking move noise is equal to 20 - 2 * (your dexterity) + (helmet and armor move time effects). "
					+ "If you're running, your move noise is doubled (but your move time is halved). If you're sneaking, your move noise is halved (but your move time is doubled). The minimum is 0. ",
		dodgeChance: "Your dodge chance represents the likelihood that you'll dodge incoming attacks. "
					+ "The chance that unit 1 is going to hit unit 2 is equal to (unit 1's accuracy) x (1 - (unit 2's dodge chance)). "
					+ "So if your dodge chance is 20%, and an enemy's accuracy is 50%, that enemy has a 10% chance to damage you.<br/><br/>"
					+ "Your dodge chance is equal to ((your dexterity)^2 / 3) + (helmet and armor dodge chance effects). The minimum is 0, and the maximum is 99.",
		armor: "Your damage reduction corresponds to how much damage will be ignored when you take a hit. If an enemy that does 15 damage hits you and your armor is 10, you'll only take 5 damage!<br/><br/> "
				+ "Your damage reduction is equal to your helmet and armor damage reduction effects. The minimum is 0.",
		viewDistance: "Your view distance repressents how many tiles away you can see.<br/><br/>"
					+ "Your view distance is equal to 10 + (your perception) + (helmet view distance effect).",
		viewAngle: "Your view angle represents how wide of an arc around you you can see. "
					+ "If your view angle is 90&deg;, you'll be able to see a \"quarter pie slice\" aroound you. "
					+ "If it's 360&deg;, you'll be able to see every tile in a cirle around you within your view distance.<br/><br/>"
					+ "Your view angle is equal to 10 x (your perception) + 90 + (helmet view angle effect). The maximum is 360, and the minimum is 90.",
		visibility: "Your visibility represents how easy it is for enemies to see you. If the distance from you to an enemy is farther than your visibility, they won't be able to see you no matter what. "
					+ "Lighting makes a difference here. "
					+ "If you're standing in a bright tile, your visibility is doubled. If you're standing in a dark tile, your visibility is halved.<br/><br/>"
					+ "Your visibility is equal to 15 - (your dexterity) + (helmet and armor visibility effects). The lighting effects is factored in last. The minimum is 1.",
		direction: "The direction you're facing is important. Remember, if you're facing north and you want to move east, it takes 1.5 times as long. "
					+ "If you're facing north and you want to move south, it takes twice as long. Changing your direction by 90 degrees takes 1/2 x (your move time) ticks. "
					+ "You can change direction without moving by holding control and pressing the direction you'd like to face. Your direction is also important for flanking. " 
					+ "If unit 1 is facing north and is hit by a unit to the east or west of you, it'll take double damage. "
					+ "If unit 1 facing north and you're hit by a unit to the south, it'll take triple damage!",
	}




	this.TUTORIALMESSAGES = [
			[],//Depth 0
			[//Depth1
				"Use the arrow keys to move.",
				"Hit d to see what direction you’re facing. Hit d again to go back to normal.",
				"Hold shift and press the arrow keys to move without changing directions. Moving this way takes twice as long, unless you’re moving forward which is treated the same as moving normally.",
				"Hold alt and press the arrow keys to change direction without moving. Turning 90&deg; takes half of your move time. Turning 180&deg; takes the same as your move time.",
				"To move to a tile you’re not facing, you’ll automatically turn then move. The turn takes time. So if you’re facing north and you move north, that will take your move time. If you’re facing north and you move east, that will take 1.5 x your move time. If you’re facing north and you move south, that will take 2 x your move time.",
				"Hit x to go into examine mode. Use the arrow keys to move the reticule around. No time will elapse when you’re in examine mode. Press escape to go back to normal mode.",
				"You found an orb! Orbs are how you level up your character. There is one on each level. You probably want to try and find it before descending to the next level, because there’s no going back up.<br/><br/>Orbs give you two skill points and one power point. Power points will be covered later in this tutorial. Skill points let you raise one of your four core attributes: strength, dexterity, intelligence, and perception.<br/><br/>Press c to go into the character menu. Use the arrow keys to highlight any of the many stats you see for more information. If you have one of the four core attributes selected, press enter to raise it’s value by 1, but only if you have skill points left. You can see how many skill points you have left in the top right corner of the menu. ",
				"Down this next hallway you’ll see a <. This symbol represent a staircase. Simply move onto the staircase to descend to a new level. But be aware, you can’t return once you’ve gone down!",
			],
			[//Depth 2
			]

							]



	this.powers = {};


	this.levelCompositions; //Created in initialize
	



}


GlobalVariables.prototype.initialize = function()
{
	//Extend some object functions
	console.logT = function(string)
	{
		console.log(g.game.ticks + ': ' + string);
	}

	Array.prototype.getRandomElement = function()
	{
		var index = g.rand.nextInt(0, this.length);
		return this[index];
	}

	Array.prototype.getRandomElements = function(number)
	{
		var tempArray = [];
		for (var i = 0 ; i < this.length ; i++)
		{
			tempArray.push(this[i]);
		}
		var returnArray = [];

		for (var i = 0 ; i < number ; i++)
		{
			if (tempArray.length === 0)
			{
				break;
			}
			var randIndex = g.rand.nextInt(0, tempArray.length);
			returnArray.push(tempArray[randIndex]);
			tempArray.splice(randIndex, 1);
		}

		return returnArray;
	}
	/*
	var sound = document.createElement("audio");
	sound.innerHTML = "<source src='sounds/PISTOL_SHOT.mp3' type='audio/mpeg' />";
	document.body.appendChild(sound);
	sound.autoplay = true;
	sound.load();
	setTimeout(function(){sound.load();}, 2000);
	*/
	this.colors = {
		WALL: this.COLORCONSTANTS.DARKGRAY,
		OPEN: this.COLORCONSTANTS.LIGHTGRAY,
		INDESTRUCTABLE: this.COLORCONSTANTS.DEEPRED,
		STAIRS: this.COLORCONSTANTS.WHITE,
		MESSAGETILE: this.COLORCONSTANTS.LIGHTBLUE,
		border: this.COLORCONSTANTS.DARKGRAY,

		//Lighting colors
		DARK: this.COLORCONSTANTS.DARKBLUE,
		BRIGHT: this.COLORCONSTANTS.BRIGHTYELLOW,

		SLEEPING: this.COLORCONSTANTS.WHITE,
		WANDERING: this.COLORCONSTANTS.BLUE,
		CURIOUS: this.COLORCONSTANTS.BRIGHTORANGE,
		HOSTILE: this.COLORCONSTANTS.BRIGHTRED,
		ALLY: this.COLORCONSTANTS.BRIGHTGREEN,

		explosion: this.COLORCONSTANTS.ORANGE,
		
		examining: this.COLORCONSTANTS.RED, //Color of the reticule when examining
		aiming: this.COLORCONSTANTS.GREEN, //Color of the reticule when aiming
		tilesBetweenVisible: this.COLORCONSTANTS.GREEN, //When aiming, the color of the tiles you can see between you and the target
		tilesBetweenInvisible: this.COLORCONSTANTS.RED, //When aiming, the color of the tiles between you and the target that block your view or that you can't see
		
		stealth: this.COLORCONSTANTS.GREEN,

		characterMenuBackground: this.COLORCONSTANTS.LIGHTBLUE,
		equipmentMenuBackground: this.COLORCONSTANTS.DEEPRED,
		powersMenuBackground: this.COLORCONSTANTS.PURPLE,
		menuLabelDefaultBackground: this.COLORCONSTANTS.ORANGE,
		menuLabelSelectedBackground: this.COLORCONSTANTS.YELLOW,
		menuLabelDefaultText: this.COLORCONSTANTS.GREEN,
		equipmentInfoBackground: this.COLORCONSTANTS.BLUE,
		equipmentInfoTotal: this.COLORCONSTANTS.ORANGE,
		menuSelectionBackground: this.COLORCONSTANTS.YELLOW,

		messagesBackground1: this.COLORCONSTANTS.GRAY,
		messagesBackground2: this.COLORCONSTANTS.ORANGE,

		alerts: this.COLORCONSTANTS.WHITE,

		items: this.COLORCONSTANTS.DARKGREEN,

		defaultColor: this.COLORCONSTANTS.BLACK,
	}
	this.menuLabelSelectedBorder = '3px solid ' + this.COLORCONSTANTS.BLUE;





	this.rand = new Random(Math.floor(Math.random() * 100));
	this.game = new Game();
	this.view = new View(33, 30);
	this.input = new Input();


	//Initialize level compositions
	this.levelCompositions = [
	//Level 0 isn't anything
		[],
	//Level1	
		[
			{creature: "Zombie", frequency: 1},	
			
			
		],
	//Level2
		[
			{creature: "Zombie", frequency: 2},
			{creature: "Scarab", frequency: 1},
		],
	//Level3
		[
			{creature: "Zombie", frequency: 2},
			{creature: "Scarab", frequency: 3},
			{creature: "Spider", frequency: 1},
		],
	//Level4
		[
			{creature: "Zombie", frequency: 2},
			{creature: "Scarab", frequency: 3},
			{creature: "Spider", frequency: 4},
		],
	//Level5
		[
			{creature: "Zombie", frequency: 2},
			{creature: "Scarab", frequency: 6},
			{creature: "Spider", frequency: 10},
			{creature: "Hive", frequency: 1},
		],
	//Level6
		[
			{creature: "Scarab", frequency: 6},
			{creature: "Spider", frequency: 10},
			{creature: "Hive", frequency: 1},
			{creature: "SpiderMother", frequency: 2},
			{creature: "LumenDroid", frequency: 4},
		],
	//Level7
		[
			{creature: "Scarab", frequency: 6},
			{creature: "Spider", frequency: 4},
			{creature: "Hive", frequency: 1},
			{creature: "SpiderMother", frequency: 10},
			{creature: "UndeadSoldier", frequency: 6},
		],
	//Level8
		[
			{creature: "Scarab", frequency: 6},
			{creature: "Spider", frequency: 4},
			{creature: "Hive", frequency: 2},
			{creature: "SpiderMother", frequency: 10},
			{creature: "UndeadSoldier", frequency: 6},
			{creature: "LumenDroid", frequency: 6},
		],
	//Level9
		[
			{creature: "Spider", frequency: 4},
			{creature: "Hive", frequency: 3}, 
			{creature: "SpiderMother", frequency: 10},
			{creature: "LumenDroid", frequency: 6},
			{creature: "UndeadSoldier", frequency: 6},
			{creature: "SecurityDrone", frequency: 5},
			{creature: "Colossus", frequency: 1},
		],
	//Level10
		[
			{creature: "Spider", frequency: 4},
			{creature: "Hive", frequency:43},
			{creature: "SpiderMother", frequency: 10},
			{creature: "LumenDroid", frequency: 10},
			{creature: "UndeadSoldier", frequency: 6},
			{creature: "SecurityDrone", frequency: 8},
			{creature: "Colossus", frequency: 4},
		],
	]




	this.input.initialize();
	//this.game.initialize();
	this.view.initializeMainMenu();
	this.view.selectMainMenuItem();

}

var g = new GlobalVariables();



