const hpStat = document.querySelector('.hp-stat')
const atkStat = document.querySelector('.atk-stat')
const defStat = document.querySelector('.def-stat')
const lvlStat = document.querySelector('.lvl-stat')
const xpStat = document.querySelector('.xp-stat')

let player = {
	hp: 450,
	atk: 22,
	def: 12,
	lvl: 1,
	exp: 0,
	next: 700,
}

const UpgradeStats = () => {
	hpStat.textContent = player.hp
	atkStat.textContent = player.atk
	defStat.textContent = player.def
	lvlStat.textContent = player.lvl
	xpStat.textContent = player.next
   
}

UpgradeStats()