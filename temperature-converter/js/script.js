 // console.log(document.getElementById('degreesF'));
 
document.getElementById('f_to_c').addEventListener('click', function(e){ 
         e.preventDefault();
   });
document.getElementById('c_to_f').addEventListener('click', function(e){ 
         e.preventDefault();
   });

var convert = function (celsius, fahrenheit) {
    document.getElementById("result").innerHTML =
        celsius + "\xb0C = " + fahrenheit + "\xb0F";
};

document.getElementById("f_to_c").onclick = function () {
	var f = document.getElementById('degrees').value;
	convert((f - 32) / 1.8, f) {
		if ()
	}
}

document.getElementById("c_to_f").onclick = function () {
	var c = document.getElementById('degrees').value;
 	convert(c, 1.8 * c + 32);
}


// console.log("blah");