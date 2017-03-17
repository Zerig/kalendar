

var init = function(calendarID) {
	var result = {};
	var finalURL = "https://www.googleapis.com/calendar/v3/calendars/"+ calendarID +"/events?key=AIzaSyCR3-ptjHE-_douJsn8o20oRwkxt-zHStY&singleEvents=true";


	//Get JSON, parse it, transform into list items and append it to past or upcoming events list
	result = jQuery.getJSON(finalURL, function(data) {

	}).done(function(){
		return data;
	});

	return result;
};



var data = new Array();

/*
var spolek = {};
var farnostBohosluzby = {};*/
var dataJSON = {};
var organizer = {};

$(document).ready(function(){
	/*spolek = init("4mrr18nnff20a1kate7s7soiq4@group.calendar.google.com");
	farnostBohosluzby = init("farnostlitomysl@gmail.com");*/

	dataJSON = init("4mrr18nnff20a1kate7s7soiq4@group.calendar.google.com");

});

$("#convert").click(function(){
	/*alert(spolek.responseJSON.items[2].summary);
	alert(farnostBohosluzby.responseJSON.items[0].summary);*/



	data = data.concat(  newCalendar( dataJSON.responseJSON.items )  );
});



function newCalendar(items){
	var pushArray = new Array();
	organizer = items.organizer;

	for(i=0; i<items.length; i++){
		var item = items[i];

		pushArray.push({
			id: item.id,
			organizer: { name: item.organizer.displayName, id: item.organizer.email },
			title: item.summary,
			description: item.descrition,
			dateStart: item.start.dateTime,
			dateEnd: item.end.dateTime,
			htmlLink: item.htmlLink,
			creator: { name: item.creator.displayName, email: item.organizer.email }
		});
	}

	return pushArray;
}
