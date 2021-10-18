const alphabet = "abcdefghijklmnopqrstuvwxyz"
let clickBtn = document.querySelector("#click-btn")
let colorHeader = document.querySelector("#color-header")
let colorCodeRandom = [0, 1, 2, 3, 4, 5]


clickBtn.addEventListener("click", function(){
	colorCodeRandom[0] = Math.floor(Math.random() * 10) || alphabet[Math.floor(Math.random() * alphabet.length)]
	colorCodeRandom[1] = Math.floor(Math.random() * 10) || alphabet[Math.floor(Math.random() * alphabet.length)]
	colorCodeRandom[2] = Math.floor(Math.random() * 10) || alphabet[Math.floor(Math.random() * alphabet.length)]
	colorCodeRandom[3] = Math.floor(Math.random() * 10) || alphabet[Math.floor(Math.random() * alphabet.length)]
	colorCodeRandom[4] = Math.floor(Math.random() * 10) || alphabet[Math.floor(Math.random() * alphabet.length)]
	colorCodeRandom[5] = Math.floor(Math.random() * 10) || alphabet[Math.floor(Math.random() * alphabet.length)]
	let finalCode = "#" + colorCodeRandom[0] + colorCodeRandom[1] + colorCodeRandom[2] + colorCodeRandom[3] + colorCodeRandom[4] + colorCodeRandom[5]
	document.body.style.backgroundColor = finalCode
	colorHeader.textContent = finalCode
})





