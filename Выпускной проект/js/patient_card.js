var readMoreLink = document.getElementById("readMore");

readMoreLink.addEventListener("click", function() {

	var expand = document.getElementById("hidden-text");

	if(expand.style.display == "block") {
		expand.style.display = "none";
		readMoreLink.innerHTML = "Посмотреть";

	}else {
		expand.style.display = "block";
		readMoreLink.innerHTML = "Свернуть";
	}

})

var readMoreLink2 = document.getElementById("readMore2");

readMoreLink2.addEventListener("click", function() {

	var expand2 = document.getElementById("hidden-text-2");

	if(expand2.style.display == "block") {
		expand2.style.display = "none";
		readMoreLink2.innerHTML = "Посмотреть";

	}else {
		expand2.style.display = "block";
		readMoreLink2.innerHTML = "Свернуть";
	}

})

var readMoreLink3 = document.getElementById("readMore3");

readMoreLink3.addEventListener("click", function() {

	var expand3 = document.getElementById("hidden-text-3");

	if(expand3.style.display == "block") {
		expand3.style.display = "none";
		readMoreLink3.innerHTML = "Посмотреть";

	}else {
		expand3.style.display = "block";
		readMoreLink3.innerHTML = "Свернуть";
	}

})