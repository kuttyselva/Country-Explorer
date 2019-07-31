

function myfunc(x){
  document.getElementById("contentBox").innerHTML="";
  fetch('https://restcountries.eu/rest/v2/name/'+x)
  .then(function(response) {
    return response.json();
  })
  .then(function(val) {
    
    
		for(var i = 0 ; i < val.length ; i++){
			var name = val[i].name;
			var topLevelDomain = val[i].topLevelDomain;
			var callingCodes = val[i].callingCodes[0];
			var capital = val[i].capital;
			var region = val[i].region;
			var population = val[i].population;
			var latlng = val[i].latlng[0] + " , " + val[i].latlng[1];
			var area = val[i].area + " km sq.";
			var nativeName = val[i].nativeName;
			var currencies = val[i].currencies[0].symbol;
			var language = val[i].languages[0].nativeName;
			var flag = val[i].flag;
			
			console.log(name); //CONSOLE TEST FOR ALL FOUND
			url="detail.html?name="+val[i].alpha3Code;
			//Adding into HTML
      document.getElementById("contentBox").innerHTML+=("<div class='tile'><a href="+url+"><div class='flag'><img src='" + flag + "'></div>" + "<div class='name'>" + name + "</div><div class='other'>| " + capital + " | " + region + " | " + latlng + " | " + language + " |</div><div class='info'><div class='flexItem pop'>" + population + "</div><div class='flexItem area'>" + area + "</div><div class='flexItem curr'>" + currencies + "</div></div><br><div class='ticker'><div class='domain'>Top Level Domain -> " + topLevelDomain + "</div><div class='callId'>+" + callingCodes + "</div></a></div>");
			
		}
		
	});
}

