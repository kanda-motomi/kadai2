let max = 50;
let count = 0;
let saigo = "50回カウントが終わりました。";

while (count < max) {
	count++;

	if (count % 10 == 0) {

		console.log('今' + count + '回ループしました。');
	}
	if (count % 4 == 0) {

		console.log('4で割れる数です。' + count); 
	}
}
alert(saigo);