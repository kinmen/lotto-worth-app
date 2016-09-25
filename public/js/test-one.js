$(function() {

	var updateCalcution = function () {
		var jackpot = $("#jackpot").val();
		var probability = $("#probability").val();
		var tickets = $("#tickets").val();

		var j = parseFloat(jackpot.replace(/,/g, ''));
		var p = parseFloat(probability.replace(/,/g,''));
		var t = parseFloat(tickets.replace(/,/g, ''));


		var ev = (j/t) * (1-Math.exp((-1)*(t)*(p)));


		$("#expected-value").val(ev);
	}

	$("#calcform input").change(function(e) {
		e.preventDefault();
		updateCalcution();
	})
})