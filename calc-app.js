// Declare global variables
var output = '';
var operators = /[\+\/\*\=\-.]/g;
var buttons = [
	{id: "AC", value: undefined},
	{id: "CE", value: "CE"},
	{id: "divide", value: "/"},
	{id: "times", value: "*"},
	{id: "7",	value: "7"},
	{id: "8",	value: "8"},
	{id: "9",	value: "9"},
	{id: "minus",	value: "-"},
	{id: "4",	value:"4"},
	{id: "5",	value: "5"},
	{id: "6",	value: "6"},
	{id: "plus", value: "+"},
	{id: "1",	value: "1"},
	{id: "2",	value: "2"},
	{id: "3",	value: "3"},
	{id: "oh",	value: "0"},
	{id: "dot",	value: "."},
	{id: "equals",	value: "="}
];

function buttonClick(name) {

	
	
	for (var i=0; i<buttons.length; i++) {
		
		if (name == buttons[i].id) {
			var val = buttons[i].value;
		}
	}
	// If AC clear screen, clear and hide history
	if (val === undefined) {
		$('#display').html('0');
		$('#history').hide();
		$('#history').html('0');
		output = '';
	}
	// If CE clear screen
	else if (val == 'CE') {
		$('#display').html('0');
		output = output.slice(0, -1);
		$('#history').html(output);
	}
	// If = do the math
	else if (val == '=') {
		if (output !== '') {
			calculate(output);
		} else {
			output = '';
			$('#display').html('0');
			$('#histroy').html('0');
			$('#history').hide();
		}
	} else {
		$('#history').show();
		output += val;
		$('#display').html(output);
		$('#history').html(output);
	}
}

function calculate(exp) {
	exp = function() {
		return eval($('#display').html());
	}
	
	$('#history').hide();
	$('#display').html(exp);
	output = $('#display').html();
}



// Function to get clicked button's id
jQuery.fn.idName = function(elem) {
	return this.prop('id');
}
$(":button").click(function() {
	var name = $(this).idName();
	buttonClick(name);
});