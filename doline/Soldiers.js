src="aes.js";
const Soldiers = [
{
group: "Guardsmen",
army: [
{
	tier: "T1",
	name: "Archers",
	cost: 300,	revive: 40
},

{
	tier: "T1",
	name: "Spearmen",
	cost: 300,	revive: 40
},

{
	tier: "T1",
	name: "Riders",
	cost: 600,	revive: 80
},

{
	tier: "T2",
	name: "Archers",
	cost: 500,	revive: 40
},

{
	tier: "T2",
	name: "Spearmen",
	cost: 500,	revive: 40
},

{
	tier: "T2",
	name: "Riders",
	cost: 1000,	revive: 80
},

{
	tier: "T3",
	name: "Archers",
	cost: 700,	revive: 40
},

{
	tier: "T3",
	name: "Spearmen",
	cost: 700,	revive: 40
},

{
	tier: "T3",
	name: "Riders",
	cost: 1400,	revive: 80
},

{
	tier: "T4",
	name: "Archers",
	cost: 900,	revive: 40
},

{
	tier: "T4",
	name: "Spearmen",
	cost: 900,	revive: 40
},

{
	tier: "T4",
	name: "Riders",
	cost: 1800,	revive: 80
},

{
	tier: "T5",
	name: "Archers",
	cost: 1100,	revive: 40
},

{
	tier: "T5",
	name: "Spearmen",
	cost: 1100,	revive: 40
},

{
	tier: "T5",
	name: "Riders",
	cost: 2200,	revive: 80
},

{
	tier: "T5",
	name: "Battle griffin",
	cost: 22000, revive: 800
},

{
	tier: "T6",
	name: "Heavy arbalester",
	cost: 1300,	revive: 40
},

{
	tier: "T6",
	name: "Heavy Halberdier",
	cost: 1300,	revive: 40
},

{
	tier: "T6",
	name: "Mounted knight",
	cost: 2600,	revive: 80
},

{
	tier: "T6",
	name: "Battle griffin",
	cost: 26000, revive: 800
},

{
	tier: "T7",
	name: "Heavy arbalester",
	cost: 1500,	revive: 40
},

{
	tier: "T7",
	name: "Heavy Halberdier",
	cost: 1500,	revive: 40
},

{
	tier: "T7",
	name: "Mounted knight",
	cost: 3000,	revive: 80
},

{
	tier: "T7",
	name: "Battle griffin",
	cost: 30000, revive: 800
},

{
	tier: "TI",
	name: "Purifier",
	cost: 1700,	revive: 40
},

{
	tier: "TI",
	name: "Punisher",
	cost: 1700,	revive: 40
},

{
	tier: "TI",
	name: "Smiter",
	cost: 1700,	revive: 40
},

{
	tier: "TI",
	name: "Corax",
	cost: 3400,	revive: 80
},

{
	tier: "TII",
	name: "Purifier",
	cost: 34000, revive: 800
},

{
	tier: "TII",
	name: "Punisher",
	cost: 1900,	revive: 40
},

{
	tier: "TII",
	name: "Smiter",
	cost: 3800,	revive: 80
},

{
	tier: "TII",
	name: "Corax",
	cost: 38000, revive: 800
}]
},

{
group: "Specialists",
army: [
{
	tier: "T1",
	name: "Swordsmen",
	cost: 300,
	revive: 40
},

{
	tier: "T1",
	name: "Spies",
	cost: 1500,
	revive: 200
},

{
	tier: "T2",
	name: "Swordsmen",
	cost: 500,
	revive: 40
},

{
	tier: "T2",
	name: "Spies",
	cost: 2500,
	revive: 200
},

{
	tier: "T3",
	name: "Swordsmen",
	cost: 700,
	revive: 40
},

{
	tier: "T3",
	name: "Spies",
	cost: 3500,
	revive: 200
},

{
	tier: "T4",
	name: "Swordsmen",
	cost: 900,
	revive: 40
},

{
	tier: "T4",
	name: "Spies",
	cost: 4500,
	revive: 200
},

{
	tier: "T5",
	name: "Swordsmen",
	cost: 1100,
	revive: 40
},

{
	tier: "T5",
	name: "Spies",
	cost: 5500,
	revive: 200
},

{
	tier: "T5",
	name: "Deadshots",
	cost: 1100,
	revive: 40
},

{
	tier: "T5",
	name: "Lion riders",
	cost: 2200,
	revive: 80
},

{
	tier: "T5",
	name: "Vultures",
	cost: 1100,
	revive: 40
},

{
	tier: "T6",
	name: "Deadshots",
	cost: 1300,
	revive: 40
},

{
	tier: "T6",
	name: "Lion riders",
	cost: 2600,
	revive: 80
},

{
	tier: "T6",
	name: "Vultures",
	cost: 1300,
	revive: 40
},

{
	tier: "T6",
	name: "Heavy knight",
	cost: 1300,
	revive: 40
},

{
	tier: "T6",
	name: "Swift jaeger",
	cost: 6500,
	revive: 200
},

{
	tier: "T7",
	name: "Deadshots",
	cost: 1500,
	revive: 40
},

{
	tier: "T7",
	name: "Lion riders",
	cost: 3000,
	revive: 80
},

{
	tier: "T7",
	name: "Vultures",
	cost: 1500,
	revive: 40
},

{
	tier: "T7",
	name: "Heavy knight",
	cost: 1500,
	revive: 40
},

{
	tier: "T7",
	name: "Swift jaeger",
	cost: 7500,
	revive: 200
},

{
	tier: "TI",
	name: "Legitimist",
	cost: 1700,
	revive: 40
},

{
	tier: "TI",
	name: "Duelist",
	cost: 1700,
	revive: 40
},

{
	tier: "TI",
	name: "Whitemane",
	cost: 3400,
	revive: 80
},

{
	tier: "TI",
	name: "Royal lion",
	cost: 34000,
	revive: 800
},

{
	tier: "TI",
	name: "Panoptic",
	cost: 8500,
	revive: 200
},

{
	tier: "TII",
	name: "Legitimist",
	cost: 1900,
	revive: 40
},

{
	tier: "TII",
	name: "Duelist",
	cost: 1900,
	revive: 40
},

{
	tier: "TII",
	name: "Whitemane",
	cost: 3800,
	revive: 80
},

{
	tier: "TII",
	name: "Royal lion",
	cost: 38000,
	revive: 800
},

{
	tier: "TII",
	name: "Panoptic",
	cost: 9500,
	revive: 200
}
]

},

{
group: "Engineer Corps",
army: [
{
	tier: "T1",
	name: "Catapults",
	cost: 3000,
	revive: 400
},

{
	tier: "T2",
	name: "Catapults",
	cost: 5000,
	revive: 400
},

{
	tier: "T3",
	name: "Catapults",
	cost: 7000,
	revive: 400
},

{
	tier: "T4",
	name: "Catapults",
	cost: 9000,
	revive: 400
},

{
	tier: "T5",
	name: "Catapults",
	cost: 11000,
	revive: 400
},

{
	tier: "T6",
	name: "Ballistae",
	cost: 13000,
	revive: 400
},

{
	tier: "T7",
	name: "Ballistae",
	cost: 15000,
	revive: 400
},

{
	tier: "TI",
	name: "Josephine",
	cost: 17000,
	revive: 400
},

{
	tier: "TII",
	name: "Josephine",
	cost: 19000,
	revive: 400
}

]
},

{
group: "Monsters",
army: [
{
	tier: "T3",
	name: "Emerald Dragon",
	cost: 19600,
	revive: 1120,
	dragonCoins: 280
},

{
	tier: "T3",
	name: "Stone Gargoyle",
	cost: 22400,
	revive: 1280,
	dragonCoins: 320
},

{
	tier: "T3",
	name: "Water Elemental",
	cost: 8400,
	revive: 480,
	dragonCoins: 120
},

{
	tier: "T3",
	name: "Battle Boar",
	cost: 16760,
	revive: 960,
	dragonCoins: 240
},

{
	tier: "T4",
	name: "Magic Dragon",
	cost: 46800,
	revive: 2080,
	dragonCoins: 520
},

{
	tier: "T4",
	name: "Ice Phoenix",
	cost: 54000,
	revive: 2400,
	dragonCoins: 600
},

{
	tier: "T4",
	name: "Many-Armed Guardian",
	cost: 39600,
	revive: 1760,
	dragonCoins: 440
},

{
	tier: "T4",
	name: "Gorgon Medusa",
	cost: 35920,
	revive: 1600,
	dragonCoins: 400
},

{
	tier: "T5",
	name: "Desert Vanquisher",
	cost: 87900,
	revive: 3200,
	dragonCoins: 800
},

{
	tier: "T5",
	name: "Flaming Centaur",
	cost: 92400,
	revive: 3360,
	dragonCoins: 840
},

{
	tier: "T5",
	name: "Ettin",
	cost: 101130,
	revive: 3680,
	dragonCoins: 920
},

{
	tier: "T5",
	name: "Fearsome Manticore",
	cost: 96760,
	revive: 3520,
	dragonCoins: 880
},

{
	tier: "T6",
	name: "Crystal Dragon",
	cost: 171600,
	revive: 5280,
	dragonCoins: 1320
},

{
	tier: "T6",
	name: "Ruby Golem",
	cost: 182000,
	revive: 5600,
	dragonCoins: 1400
},

{
	tier: "T6",
	name: "Troll Rider",
	cost: 156000,
	revive: 4800,
	dragonCoins: 1200
},

{
	tier: "T6",
	name: "Jungle Destroyer",
	cost: 176800,
	revive: 5440,
	dragonCoins: 1360
},

{
	tier: "T7",
	name: "Black Dragon",
	cost: 200000,
	revive: 7040,
	dragonCoins: 1760
},

{
	tier: "T7",
	name: "Wind Lord",
	cost: 220000,
	revive: 7200,
	dragonCoins: 1800
},

{
	tier: "T7",
	name: "Destructive Colossus",
	cost: 110000,
	revive: 6880,
	dragonCoins: 1720
},

{
	tier: "T7",
	name: "Ancient Terror",
	cost: 120000,
	revive: 6560,
	dragonCoins: 1640
},
{
	tier: "TI",
	name: "Devastator",
	cost: 250000,
	revive: 8480,
	dragonCoins: 2120
},

{
	tier: "TI",
	name: "Fire Phoenix",
	cost: 250000,
	revive: 8640,
	dragonCoins: 2160
},

{
	tier: "TI",
	name: "Kraken",
	cost: 250000,
	revive: 8800,
	dragonCoins: 2200
},

{
	tier: "TI",
	name: "Trickster",
	cost: 250000,
	revive: 8320,
	dragonCoins: 2080
},

{
	tier: "TII",
	name: "Devastator",
	cost: 300000,
	revive: 8480,
	dragonCoins: 2120
},

{
	tier: "TII",
	name: "Fire Phoenix",
	cost: 300000,
	revive: 8640,
	dragonCoins: 2160
},

{
	tier: "TII",
	name: "Kraken",
	cost: 300000,
	revive: 8800,
	dragonCoins: 2200
},

{
	tier: "TII",
	name: "Trickster",
	cost: 300000,
	revive: 8320,
	dragonCoins: 2080
}

]
},

{
group: "Mercenaries",
army: [
{
	tier: "T5",
	name: "Swift Marksman",
	cost: 8000,
	revive: 80
},

{
	tier: "T5",
	name: "Scorpion",
	cost: 80000,
	revive: 800
},

{
	tier: "T5",
	name: "Gargoyle",
	cost: 150000,
	revive: 1500
},

{
	tier: "T5",
	name: "Bear",
	cost: 160000,
	revive: 1600
},

{
	tier: "T5",
	name: "Rhino Rider",
	cost: 200000,
	revive: 2000
},

{
	tier: "T5",
	name: "Bull Rider",
	cost: 220000,
	revive: 2200
},

{
	tier: "T5",
	name: "Giant Zombie",
	cost: 250000,
	revive: 2500
},

{
	tier: "T5",
	name: "Scorpion Rider",
	cost: 280000,
	revive: 2800
},

{
	tier: "T5",
	name: "Ifrit",
	cost: 330000,
	revive: 3300
},

{
	tier: "T5",
	name: "Cyclops",
	cost: 340000,
	revive: 3400
},

{
	tier: "T5",
	name: "Fireworm Rider",
	cost: 380000,
	revive: 3800
},

{
	tier: "T5",
	name: "Arachne Mercs (all)",
	cost: 8000,
	revive: 80
},

{
	tier: "T5",
	name: "Epic Hunters and Event Mercs",
	cost: 8000,
	revive: 80
},

{
	tier: "T6",
	name: "Arbalester",
	cost: 8000,
	revive: 80
},

{
	tier: "T6",
	name: "Knight",
	cost: 8000,
	revive: 80
},

{
	tier: "T6",
	name: "Legionary",
	cost: 8000,
	revive: 80
},

{
	tier: "T6",
	name: "Chariot",
	cost: 16000,
	revive: 160
},

{
	tier: "T6",
	name: "Rhino Rider",
	cost: 16000,
	revive: 160
},

{
	tier: "T6",
	name: "Sphinx",
	cost: 320000,
	revive: 3200
},

{
	tier: "T6",
	name: "Shedu",
	cost: 320000,
	revive: 3200
},

{
	tier: "T6",
	name: "Pathfinder / Pionnier",
	cost: 40000,
	revive: 400
},

{
	tier: "T6",
	name: "Trebuchet",
	cost: 80000,
	revive: 800
},

{
	tier: "T6",
	name: "Death Chariots",
	cost: 240000,
	revive: 2400
},

{
	tier: "T6",
	name: "Bone Golem",
	cost: 300000,
	revive: 3000
},

{
	tier: "T6",
	name: "Ent",
	cost: 310000,
	revive: 3100
},

{
	tier: "T6",
	name: "Cursed Dendroids",
	cost: 450000,
	revive: 4500
},

{
	tier: "T6",
	name: "Abomination",
	cost: 540000,
	revive: 5400
},

{
	tier: "T6",
	name: "Archdemons",
	cost: 760000,
	revive: 7600
},

{
	tier: "T6",
	name: "Arachne Mercs (all)",
	cost: 8000,
	revive: 80
},

{
	tier: "T6",
	name: "Epic Hunters and Event Mercs",
	cost: 8000,
	revive: 80
},

{
	tier: "T7",
	name: "Arbalester / Trailseeker",
	cost: 8000,
	revive: 80
},

{
	tier: "T7",
	name: "Legionary / Knight",
	cost: 8000,
	revive: 80
},

{
	tier: "T7",
	name: "Chariot / Rhino Rider",
	cost: 16000,
	revive: 160
},

{
	tier: "T7",
	name: "Sphinx / Shedu",
	cost: 320000,
	revive: 3200
},

{
	tier: "T7",
	name: "Pathfinder / Pioneer",
	cost: 40000,
	revive: 400
},

{
	tier: "T7",
	name: "Palintone",
	cost: 80000,
	revive: 800
},

{
	tier: "T7",
	name: "Jungle King",
	cost: 264000,
	revive: 2640
},

{
	tier: "T7",
	name: "Sea Lord",
	cost: 320000,
	revive: 3200
},

{
	tier: "T7",
	name: "Lighting Lord",
	cost: 360000,
	revive: 3600
},

{
	tier: "T7",
	name: "Golden Dragon ",
	cost: 400000,
	revive: 4000
},

{
	tier: "T7",
	name: "Overlord",
	cost: 480000,
	revive: 4800
},

{
	tier: "T7",
	name: "Life Dragon",
	cost: 560000,
	revive: 5600
},

{
	tier: "T7",
	name: "Cursed Dragon",
	cost: 740000,
	revive: 7400
},

{
	tier: "T7",
	name: "Sandworm",
	cost: 1020000,
	revive: 10200
},

{
	tier: "T7",
	name: "Fire Lord",
	cost: 1310000,
	revive: 13100
},

{
	tier: "T7",
	name: "Arachne Mercs (all)",
	cost: 8000,
	revive: 80
},

{
	tier: "T7",
	name: "Epic Hunters and Event Mercs",
	cost: 8000,
	revive: 80
},

{
	tier: "TII",
	name: "Highlander / Pounder",
	cost: 8000,
	revive: 80
},

{
	tier: "TII",
	name: "Slavic Warrior / Scarface",
	cost: 8000,
	revive: 80
},

{
	tier: "TII",
	name: "Quicksand / Galloper",
	cost: 16000,
	revive: 160
},

{
	tier: "TII",
	name: "Warregal / Jago",
	cost: 160000,
	revive: 1600
},

{
	tier: "TII",
	name: "Grace",
	cost: 40000,
	revive: 400
},

{
	tier: "TII",
	name: "Ariel",
	cost: 80000,
	revive: 800
},

{
	tier: "TII",
	name: "Wardens",
	cost: 340000,
	revive: 3400
},

{
	tier: "TII",
	name: "Demonic Salamanders",
	cost: 300000,
	revive: 3000
},

{
	tier: "TII",
	name: "Eternal Cannoneers",
	cost: 320000,
	revive: 3200
},

{
	tier: "TII",
	name: "Arachne Mercs (all)",
	cost: 8000,
	revive: 80
},

{
	tier: "TII",
	name: "Epic Hunters and Event Mercs",
	cost: 8000,
	revive: 80
},

{
	tier: "TII",
	name: "Wyverns",
	cost: 500000,
	revive: 5000
},


]
}

]

const Player = [
{
group: "Player",
army: [
{
	tier: "T01",
	name: "Attacker might",
	default: 2,
	type: "might"
},

{
	tier: "T00",
	name: "Defender might",
	default: 2,
	type: "might"

},

{
	tier: "T00",
	name: "Hero level",
	cost: 100,
	revive: 100
},

{
	tier: "T00",
	name: "Captains levels",
	cost: 50,
	revive: 50
},

{
	tier: "T01",
	name: "Clan march #",
	cost: 5000000,
	revive: 5000000
}


]
},

{
group: "Resources",
army: [
{
	tier: "T00",
	name: "Food",
	type: "food",
	cost: 1,
	revive: 1
},


{
	tier: "T00",
	name: "Lumber",
	type: "wood",
	cost: 1,
	revive: 1
},


{
	tier: "T00",
	name: "Iron",
	type: "iron",
	cost: 1,
	revive: 1
},


{
	tier: "T00",
	name: "Stone",
	type: "stone",
	cost: 1,
	revive: 1
}

]
},

{
group: "City",
army: [
{
	tier: "T00",
	name: "City walls",
	cost: 100,
	revive: 100
},

{
	tier: "T3",
	name: "Portals",
	cost: 15000000,
	revive: 15000000
}

]
},

{
group: "Silver",
army: [
{
	tier: "TI",
	name: "Silver",
	cost: 1,
	revive: 1
},


{
	tier: "T2",
	name: "Tar",
	cost: 1000,
	revive: 1000
},


{
	tier: "T5",
	name: "Gold",
	revive: 1000,
	cost: 1000
},

{
	tier: "T00",
	name: "Violation",
	disabled: true,
	default: 200000,
	cost: 1,
	revive: 1
}

]
},

{
group: "Clan buildings",
army: [
{
	tier: "T01",
	name: "Fort or Capitol",
	cost: 10000000,
	revive: 10000000
}
]
},

]

const MV = {
	'@': Soldiers,
	'$': Player
}
