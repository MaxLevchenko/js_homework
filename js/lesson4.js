var herdOfhorses = {
 totalMileage : 0
}
 

function Hors(name) {
	this.name = name;
	this.mileAge = 0;
}
Hors.prototype = herdOfhorses;
Hors.prototype.run = function(mile){
		this.mileAge+= mile;
		herdOfhorses.totalMileage+= mile;
	}

var hors1 = new Hors('Ветер');
var hors2 = new Hors('Рыжий');