$(function() {

	var parseFrac = function(x) {
		var nums = x.split('/');
		if(nums.length > 1){
		    return (nums[0] / nums[1]);
		}
		else{
		    return (nums[0]);
		}

	}

	var updateCalcution = function () {
		var jackpot = $("#jackpot").val();
		var probability = $("#probability").val();
		var tickets = $("#tickets").val();

		var j = parseFloat(jackpot.replace(/,/g, ''));
		var p = parseFloat(parseFrac(probability.replace(/,/g,'')));
		var t = parseFloat(tickets.replace(/,/g, ''));

		console.log(j,p,t);


		var ev = (j/t) * (1-Math.exp((-1)*(t)*(p)));


		$("#expected-value").val("$" + ev);
	}

	$("#calcform input").change(function(e) {
		e.preventDefault();
		updateCalcution();
	})
})