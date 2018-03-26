const url = 'http://api.icndb.com/jokes/random',
	btn = document.getElementById('get-joke'),
	paragraph = document.getElementById('joke');

btn.addEventListener('click', function() {
	getJoke();
});
getJoke();
function getJoke() {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url);
	xhr.addEventListener('load', function(){
		let response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}