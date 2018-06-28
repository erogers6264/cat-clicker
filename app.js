var cat = document.getElementById('cat');

cat.addEventListener('click', function() {
	var clicks = document.getElementById('clicks');
	number = clicks.innerHTML;
	number++;
	clicks.innerHTML = number;
}, false);