var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	/*document.querySelector("#slider").addEventListener("change", function(){*/
	var sound = (video.volume) * 100 
		/*console.log(sound)*/
	document.querySelector("#volume").innerHTML = sound + "%"
		/*video.volume = sound / 100*/
	
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Paused Video");
	video.pause();
});

var mute = document.querySelector("#mute")
mute.addEventListener("click", function(){
	if(video.muted == false){
		video.muted = true;
		mute.innerHTML = "Unmute";
		// var sound = (video.volume) * 100
		// document.querySelector("#volume").innerHTML = sound + "%"

		
	}
	else {
		video.muted = false;
		mute.innerHTML = "Mute";
	}})
	// 	document.querySelector("#slider").addEventListener("change", function(){
	// 		var sound = this.value
	// 		console.log(sound)
	// 		document.querySelector("#volume").innerHTML = sound + "%"
	// 		video.volume = sound / 100
	// })
	// if (document.querySelector("#mute").innerHTML == "Mute")
	// 	console.log("Muted Video");
	// 	video.muted = true;
	// document.querySelector("#mute").innerHTML = "Unmute";


/*slow down video*/
document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate * .95;
	console.log(video.playbackRate);

})
/*not being able to go back to the beginning.*/
document.querySelector("#faster").addEventListener("click", function(){
	video.playbackRate = video.playbackRate / .95;
	console.log(video.playbackRate);
})
/*skip ahead 15 seconds and go back to beginning*/
document.querySelector("#skip").addEventListener("click", function(){
	console.log(video.currentTime)
	video.currentTime = video.currentTime + 15

	if(video.currentTime >= video.duration){
		video.currentTime = 0
	}
})


document.querySelector("#slider").addEventListener("change", function(){
	var sound = this.value
	console.log(sound)
	document.querySelector("#volume").innerHTML = sound + "%"
	video.volume = sound / 100
	// document.querySelector("#volume").innerHTML = this.value + "%"
	// video.volume = this.value / 100
	/*video.sound */
	/*right underneath the slider*/
	/*update innerHTML*/
	/*grab it and change the HTML NO LISTENER ADDED, discussion help*/


})
var element = document.querySelector("body")
document.querySelector("#vintage").addEventListener("click", function() {
	element.classList.add("oldSchool")

});
document.querySelector("#orig").addEventListener("click", function(){
	element.classList.remove("oldSchool")
});
// element.classList.add("oldSchool")
// document.body.style.


