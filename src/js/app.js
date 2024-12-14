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
const enemyCount = 12
//Przyciski
const hyperionTravelBtn = document.querySelector('#hyperion-travel')
const nomediaTravelBtn = document.querySelector('#nomedia-travel')
const genaoTravelBtn = document.querySelector('#genao-travel')
// Funkcja do tworzenia mapy
const createMap = () => {
	mapElement.innerHTML = ''
	for (let i = 0; i < mapSize; i++) {
		const mapBlock = document.createElement('div')
		mapBlock.className = 'map-block'
		mapBlock.setAttribute('data-index', i)
		mapElement.append(mapBlock)
	}
}
//FUNKCJA POMOCNICZA: funkcja generująca losowe pozycje
const getRandomPositions = (count, max) => {
	const positions = new Set()
	while (positions.size < count) {
		positions.add(Math.floor(Math.random() * max))
	}
	return Array.from(positions)
}
// Funkcja do rozmieszczania gracza i wrogów
const placeCharacters = () => {
	const mapBlocks = Array.from(document.querySelectorAll('.map-block'))
	const positions = getRandomPositions(enemyCount + 1, mapSize)

	//Gracz
	const playerPosition = positions[0]
	mapBlocks[playerPosition].innerHTML = '<div id="player" class="player">🧑‍🚀</div>'
	//Wrogowie
	positions.slice(1).forEach((enemies, index) => {
		mapBlocks[enemies].innerHTML = `<div id="enemy-${index + 1}" class="enemy">🤖</div>`
	})
}

//Funkcja generująca mape
const generateMap = () => {
	createMap()
	placeCharacters()
}
//Funkcja pokazująca statystyki gracza w UI 
const ShowMenuStats = () => {
	maxHpStat.textContent = player.maxHp
	hpStat.textContent = player.hp
	atkStat.textContent = player.atk
	defStat.textContent = player.def
	lvlStat.textContent = player.lvl
	xpStat.textContent = player.next
}












ShowMenuStats()
hyperionTravelBtn.addEventListener('click', generateMap)
nomediaTravelBtn.addEventListener('click', generateMap)
genaoTravelBtn.addEventListener('click', generateMap)
