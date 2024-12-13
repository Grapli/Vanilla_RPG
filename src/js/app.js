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
const playerStartPosition = Math.floor(Math.random() * mapSize)
const enemyStartPosition = Math.floor(Math.random() * mapSize)
//Przyciski
const hyperionTravelBtn = document.querySelector('#hyperion-travel')
const NomediaTravelBtn = document.querySelector('#nomedia-travel')

function generateMap() {
	mapElement.innerHTML = '' // Wyczyść mapę
	for (let i = 0; i < mapSize; i++) {
		const mapTile = document.createElement('div')
		mapTile.className = 'map-tile'

		if (i === playerStartPosition) {
			mapTile.classList.add('player')
			mapTile.innerText = '🧑‍🚀'
		}
		for (let count = 0; count < 3; count++) {
			if (i === enemyStartPosition) {
				mapTile.classList.add('enemy')
				mapTile.innerText = '🤖'
				
			}
		}
		mapElement.append(mapTile)
	}
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
NomediaTravelBtn.addEventListener('click', generateMap)
