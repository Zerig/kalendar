$(document).ready(function(){
	$( "#from" ).load( "https://calendar.google.com/calendar/ical/4mrr18nnff20a1kate7s7soiq4%40group.calendar.google.com/public/basic.ics" );
});



var data = new Array();


$("#convert").click(function(){
	icsToArray($("#from").val());



	alert(data[1].SUMMARY);
	alert(data[1].DTSTART.hour);
});







//20170331T040000Z
function parseICSdatetime(icsDate){
	var year = icsDate.substr(0, 4);
	var month = icsDate.substr(4, 2);
	var day = icsDate.substr(6, 2);

	var hour = icsDate.substr(9, 2);
	var min = icsDate.substr(11, 2);

	var dateTime = {year:year, month:month, day:day, hour:hour, min:min};

	return dateTime;
}






function icsToArray(ics){
	var line = ics.split("\n");
	var obj = {};
	var state = false;


	for(i=1; i<line.length; i++){
		var item = line[i].split(":");

		if(item[0] == "BEGIN"){
			state = true;
		}

		if(state){
			if(item[0] == "END"){
				state = false;
				//alert(obj.SUMMARY);
				data.push(obj);
				obj = {};
			}else{

				if(item[0] == "DTSTART" || item[0] == "DTEND"){
					 obj[item[0]] = parseICSdatetime(item[1]);
				}else{
					obj[item[0]] = item[1];
				}





			}

		}
	}
}
