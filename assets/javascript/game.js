$(document).ready(function(){

	// variables
	var correct = 0;
	var wrong = 0;
	var incomplete = 0;
	var qNumber = 0;

	var quiz = [ 
			["Which city has the famous Big Ben?",
			  "Paris", "London", "Bangkok", "Chicago",
			  "London"
			],
			["Which European city is known as the City of Lights?",
			 "Chicago", "Beijing", "Paris", "Sydney",
			 "Paris"
			 ],
			["New Delhi is the capital of which country?",
			 "India", "Brazil", "Egypt", "Indonesia",
			 "India"
			]
	];

	
	

	function processAns(val) {
		console.log("here 1");
	}


	var createTimer = function() {
		$("#mainBox").empty();
		var time = document.createElement("div");
		$(time).html("<div class='text-center' id='timer'>Time left: 30</div>");
		$("#mainBox").append(time);

	}

	var displayQuiz = function() {
		var br = document.createElement("br");
		$(br).html("<br>");
		for (var i=0; i<quiz.length;i++) {
			
			var questionBox = document.createElement("div");
			$(questionBox).html("<div class='text-center' id='question'>"+ quiz[i][0]+"</div>");
			$("#mainBox").append(questionBox);
			$("#mainBox").append(br);

			
			var ans = document.createElement("form");
			for (var j=1; j<5; j++) {
				var radioId = "ans" + i;
				//$(ans).append("<input id=" + radioId + "type='radio' name='answer' value =" + quiz[i][j] +">" + quiz[i][j]);
			  $(ans).append("<input type='radio' name='answer' value =" + quiz[i][j] +">" + quiz[i][j]);
			}
			$("#mainBox").append(ans);
			$("#mainBox").append(br);
		

		}	
		
	}

	var displayDoneButton = function () {
		var doneB = document.createElement("button");
		$(doneB).text("Done");
		$(doneB).attr("id", "done");
		$("#mainBox").append(doneB);
	}


	

	$(document).on("click", "#done", function() {
		
		var ans = document.getElementsByName("answer");
		console.log(ans);
		for (var x=0; x<ans.length; x++) {
			var tmp = (x%4)-1;   // to get question number since there are 4 buttons per question
			if (ans[x].checked) {
				console.log("value = " + ans[x].value);
				if (ans[x] === quiz[tmp][5]) {
					correct++;
				} else {
					wrong++;
				}
			} else {
				incomplete++;
			}
		}

		console.log(correct); console.log(wrong); console.log(incomplete);

	
	});

	$("#start").click(function() {
		createTimer();
		displayQuiz();
		displayDoneButton();
	});

});