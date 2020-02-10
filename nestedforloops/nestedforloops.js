<!DOCTYPE html>
<html>
<head>
<title>nested for loops</title>

</head>

<body>

<script>
var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullName = [];

for (var i = 0; i < firstNames.length; i++ ) {
	for (var j = 0; j < lastNames.length; j++ ) {
		fullName.push(firstNames[i] + lastNames[j]);
	}
}

alert(fullName);
	
</script>

</body>
</html>