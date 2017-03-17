var calendarID = "4mrr18nnff20a1kate7s7soiq4@group.calendar.google.com";

var calendarData;

var init = function() {
	//return 55;

	/*this.color = "blue";
	this.data = {};*/

	var result = [];

	var finalURL = calendarID;

	if(true) finalURL = finalURL.concat("&singleEvents=true");

	//Get JSON, parse it, transform into list items and append it to past or upcoming events list
	jQuery.getJSON("https://www.googleapis.com/calendar/v3/calendars/4mrr18nnff20a1kate7s7soiq4@group.calendar.google.com/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY&singleEvents=true", function(data) {
		// Remove any cancelled events
		data.items.forEach(function removeCancelledEvents(item) {
			if (item && item.hasOwnProperty('status') && item.status !== 'cancelled') {
				result.push(item);

			}
		});

		result.sort(comp).reverse();

		//alert(result[0].summary);
		calendarData = data;
		//alert(data[0].summary);
		//alert(calendarData[0].summary);

		//return result[0].summary;

		loadCalendar(data);
	}).done(function(){
		alert(calendarData.items[0].summary);

	});
	//alert(result);
	//return calendarData;
};


var comp = function(a, b) {
	return new Date(a.start.dateTime || a.start.date).getTime() - new Date(b.start.dateTime || b.start.date).getTime();
};





function loadCalendar(data){
	alert(data.items[0].summary);

	var agenda = '<ul>\n';
	//agenda += '	<tr>\n';


	for(i=0; i<data.items.length; i++){
		//agenda += '<th>' + data.items[i].summary + '</th>';
		agenda += '<li>' + data.items[i].summary + '</li>';
	}

	agenda += '</ul>\n';

	$("body").append(agenda);
}

/*
function loadMonthData(data){
	var agenda = '<ul>\n';


	for(i=0; i<data.items.length; i++){
		//agenda += '<th>' + data.items[i].summary + '</th>';
		agenda += '<li>' + data.items[i].summary + '</li>';
	}

	agenda += '</ul>\n';

	$("body").append(agenda);

}*/







$(document).ready(function(){
	//init();

/*	var aaa = {};
	aaa.init = init;
	aaa.init();
	alert(aaa.color);
	alert("data: " + aaa.data.items[1].summary);*/

	init();
	alert(2);

	/*calData = init();
	alert(1);*/
	//alert(calendarData[0].summary);

	//alert(calendarData.items[0].summary);

});

$("#convert").click(function(){
	alert(calendarData.items[1].summary);
});
