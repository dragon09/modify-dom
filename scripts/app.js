window.onload = function(event) {

	console.log('awwe yea');
	var checkMark = "yay!";
	var list = document.getElementsByTagName('li'); 
	var orderList = document.getElementsByTagName('ol');
	var n = list.length;
	var o = orderList.length;

	
	// console.log(checkMark);
	// console.log(list);

	var paragraph = document.getElementById('target-for-text');
	var content = buildPara("I love animals");
	var userName = prompt("What is your name?");
	name.innerHTML = content;
	paragraph.innerHTML = content;


	console.log(paragraph);
	console.log(buildPara);

	for (var i = 0; i < n; i++) {
	list[i].innerHTML = list[i].innerHTML + checkMark;
	 }

	 for (var i = 0; i < o; i++){
	 	orderList[i].innerHTML = orderList[i].innerHTML + checkMark;
	 }
};

function buildPara(content) {
	var openTag = "<em><strong>";
	var closingTag = "</strong></em>";
	return openTag + content + closingTag;
}	 