// Statystyki postaci
const hpStat = document.querySelector('.hp-stat')
const atkStat = document.querySelector('.atk-stat')
const defStat = document.querySelector('.def-stat')
const lvlStat = document.querySelector('.lvl-stat')
const xpStat = document.querySelector('.xp-stat')
const maxHpStat = document.querySelector('.maxhp-stat')
let player = {
	maxHp: 450,
	hp: 450,
	atk: 22,
	def: 12,
	lvl: 1,
	exp: 0,
	next: 700,
}
// Parametry mapy
const mapSize = 48
const mapElement = document.querySelector('.map')
const playerStartPosition = 3
const hyperion = {
	robot: {
		hp: 100,
		atk: 10,
		def: 5,
		exp: 100,
	},
	droid: {
		hp: 150,
		atk: 15,
		def: 10,
		exp: 200,
	},
	bot: {
		hp: 120,
		atk: 15,
		def: 15,
		exp: 200,
	},
}
const nomedia = {
	scout: {
		hp: 160,
		atk: 15,
		def: 12,
		exp: 150,
	},
	sharpshooter: {
		hp: 120,
		atk: 25,
		def: 5,
		exp: 200,
	},
	soldier: {
		hp: 250,
		atk: 25,
		def: 10,
		exp: 400,
	},
}

const genao = {
	mecha: {
		hp: 250,
		atk: 25,
		def: 15,
		exp: 300,
	},
	uvu: {
		hp: 300,
		atk: 30,
		def: 18,
		exp: 400,
	},
	engineer: {
		hp: 400,
		atk: 38,
		def: 15,
		exp: 450,
	},
}

//Przyciski
const hyperionTravelBtn = document.querySelector('#hyperion-travel')
const nomediaTravelBtn = document.querySelector('#nomedia-travel')
const genaoTravelBtn = document.querySelector('#genao-travel')

function generateMap(enemyTypes) {
	clearMap() // Usunięcie poprzedniej mapy

	const positions = generatePositions(4) // Gracz + 3 wrogowie

	for (let i = 0; i < mapSize; i++) {
		const mapTile = createMapTile(i, positions, enemyTypes)
		mapElement.append(mapTile)
	}
	console.log(player)
	console.log(enemyTypes)
}

// Funkcja do usuwania poprzedniej mapy
function clearMap() {
	if (mapElement) {
		mapElement.innerHTML = ''
	}
}

// Funkcja do generowania unikalnych pozycji
function generatePositions(count) {
	if (count > mapSize) {
		count = mapSize // Ograniczenie liczby do mapSize
	}

	const positions = new Set()
	positions.add(playerStartPosition)

	while (positions.size < count) {
		positions.add(Math.floor(Math.random() * mapSize))
	}

	return Array.from(positions)
}

// Funkcja do tworzenia pojedynczego kafelka
function createMapTile(index, positions, enemyTypes) {
	const mapTile = document.createElement('div')
	mapTile.className = 'map-tile'
	mapTile.id = `tile-${index}`

	if (index === playerStartPosition) {
		assignPlayerTile(mapTile)
	} else if (positions.includes(index)) {
		assignEnemyTile(mapTile, enemyTypes)
	}

	return mapTile
}

// Funkcja do przypisania kafelka gracza
function assignPlayerTile(tile) {
	tile.classList.add('player')
	tile.innerText = '🧑‍🚀'
	tile.dataset.type = 'player'
}

// Funkcja do przypisania kafelka wroga
function assignEnemyTile(tile, enemyTypes) {
	const enemyKey = getRandomEnemyKey(enemyTypes)
	const enemyStats = enemyTypes[enemyKey]

	tile.classList.add('enemy')
	tile.innerText = '🤖'
	tile.dataset.type = enemyKey
	tile.dataset.stats = JSON.stringify(enemyStats)
}

// Funkcja do losowego wyboru przeciwnika
function getRandomEnemyKey(enemyTypes) {
	const enemyKeys = Object.keys(enemyTypes)
	return enemyKeys[Math.floor(Math.random() * enemyKeys.length)]
}

const UpgradeStats = () => {
	maxHpStat.textContent = player.maxHp
	hpStat.textContent = player.hp
	atkStat.textContent = player.atk
	defStat.textContent = player.def
	lvlStat.textContent = player.lvl
	xpStat.textContent = player.next
}

UpgradeStats()
hyperionTravelBtn.addEventListener('click', generateMap)
nomediaTravelBtn.addEventListener('click', generateMap)
