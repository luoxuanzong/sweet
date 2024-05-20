//文字
let words={
    wordDuration:200,//打印每个字的时间间隔
	//要打印的文字
	text:`姐姐，毕业季很累，
但认识你，我很开心，我觉得很幸运。

考研成绩出来之后，
你三言两语就把我从深渊里拉了出来，
那一刻我真的很感动。

而且多亏了你，
我的毕设才得以如期完成。
谢谢你，可贵的灵魂。

为了表示感谢，
我决定把自己作为礼物，
送给你，
我并不完美，但喜欢的人会喜欢，
懂得的人会懂得。

结果如何无法否定过程的美好，
姐姐以后如果心情不好，
可以随时给我发消息。
最后愿你天天开心。
		你的伙伴
		   落玄	
	  2024年5月20日`
}
//获取元素
let  foreword =document.querySelector('.foreword');
// foreword.textContent="sssss"
 /* 
	该函数返回 一个Promise   他会等待指定的毫秒数   时间达到后该函数完成
	@param {number}  ms毫秒数
	@returns{Promise}
 */
 //封装setTimeout
function delay(ms){
	return new Promise((resolve) =>setTimeout(resolve,ms));   
}
// 打印
function print (index){
	// console.clear();
    foreword.textContent='';
	const txt =words.text.substring(0,index+1);
	foreword.textContent = txt;
}


async function  run(){
	let index  = 0;
	while(index < words.text.length){
		print(index);
		await delay(words.wordDuration);
		index++;
	}
}
run();
