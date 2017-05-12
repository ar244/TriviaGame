$(document).ready(function(){

	// variables
	var correct = 0;
	var wrong = 0;
	var incomplete = 0;
	var qNumber = 0;
	var i=0;

	var intervalId;
	var count;
	//var count1;
   //var running = false;


	var quiz = [ 
			["Which city has the famous Big Ben?",
			  "Paris", "London", "Bangkok", "Chicago",
			  "London",
			  "assets/images/BigBen.gif"
			],
			["Which European city is known as the City of Lights?",
			 "Chicago", "Beijing", "Paris", "Sydney",
			 "Paris",
			 "assets/images/Paris.gif"
			 ],
			["New Delhi is the capital of which country?",
			 "India", "Brazil", "Egypt", "Indonesia",
			 "India",
			 "assets/images/Delhi.gif"
			],
			["In which city is the famous Parthenon located?",
			"Rome", "Athens", "Shanghai", "Tokyo",
			"Athens",
			"assets/images/Athens.gif"
			],
			["Which city has a statue of Jesus towering over it?",
			"Sao Paulo", "Mexico City", "Buenos Aires", "Rio De Janeiro",
			"Rio De Janeiro",
			"assets/images/Rio.gif"
			],
			["This city spawned an Empire that ruled most of Europe",
			"Venice", "Amsterdam", "Rome", "Paris",
			"Rome",
			"assets/images/Rome.gif"
			],
			["Bangkok is a major city in which country?",
			"Thailand", "Cambodia", "Singapore", "Indonesia",
			"Thailand",
			"assets/images/Bangkok.gif"
			]

	]; 

	
	

	function processAns(val) {
		console.log("here 1");
	}


	var createTimer = function() {
		count = 10;
		$("#mainBox").empty();
		var time = document.createElement("div");
		$(time).html("<div class='text-center' id='timer'>Time left: " + count +"</div>");
		$("#mainBox").append(time);
		intervalId = setInterval(function () {
			count--; 
			if (count === 0) {
				//i++;
				incomplete++;
				// show correct answer
				$("#quizBox").empty();
				var tmp = $("<div>");
				tmp.attr("id", "tmpAns");
				var gif = $("<img>");
				gif.attr("id", "gif");
				gif.attr("src", quiz[i][6]);

				tmp.text("The correct answer is " + quiz[i][5]);
				i++;
				$("#quizBox").append(tmp);
				$("#quizBox").append(gif);
				clearInterval(intervalId);
				setTimeout(function() {
        			
					nextQ();	
        		}, 5000); 
				
			}
			$(time).html("<div class='text-center' id='timer'>Time left: " + count +"</div>");
			}, 1000);
	}

	


	var displayQuiz = function(quiz, i) {
		if (i<= quiz.length) {
			

			// empty div for questions
			var quizBox = document.createElement("div");
			$(quizBox).attr("id", "quizBox");
			$("#mainBox").append(quizBox);

			//$("#quizBox").empty();
			
				
				var questionBox = document.createElement("div");
				$(questionBox).html("<div class='text-center' id='question'>"+ quiz[i][0]+"</div>");
				$("#quizBox").append(questionBox);


				for (var j=1; j<5; j++) { 
					var ansB = $("<button>");
					ansB.text(quiz[i][j]);
					ansB.addClass("button ansChoice");
					ansB.attr("data-name", quiz[i][j]);
					$("#quizBox").append(ansB);	
				}	
		}
	}


	$(document).on("click", ".ansChoice", function() {
		
		var ans = $(this).attr("data-name");
		console.log(ans);
		clearInterval(intervalId);  // stop timer

		$("#quizBox").empty();

		var tmp = $("<div>");
		tmp.attr("id", "tmpAns");
		var gif = $("<img>");
		gif.attr("id", "gif");
		gif.attr("src", quiz[i][6]);

		if (ans === quiz[i][5]) {
			correct++;
			
			tmp.text("Correct!!!");
			
			$("#quizBox").append(tmp);
			$("#quizBox").append(gif);
			setTimeout(function() {
        		i++;
				nextQ();	
        		
    		}, 5000); 


		} else {

			wrong++;
			tmp.text("Oops!! The correct answer is " + quiz[i][5]);
			
			$("#quizBox").append(tmp);
			$("#quizBox").append(gif);
			setTimeout(function() {
        		console.log("here");
        		i++;
				nextQ();	
        		
    		}, 5000); 

		}	
		
			
	});

	

	
	var showResult = function() {
		
		$("#mainBox").empty();
		var done = $("<img>");
		done.attr("id", "done");
		done.attr("src", "assets/images/done.jpg");

		var rBox = $("<div>");
		rBox.attr("id", "rBox");

		var c = $("<div>");
		c.attr("id", "correct");
		c.text("Correct answers: " + correct);

		var w = $("<div>");
		w.attr("id", "wrong");
		w.text("Wrong answers: " + wrong);

		var i = $("<div>");
		i.attr("id", "incomplete");
		i.text("Incomplete answers: " + incomplete);

		var s = $("<button>");
		s.attr("id", "startOver");
		s.text("Start Over?");

		// append above
		$("#mainBox").append(done);
		$("#mainBox").append(rBox);
		$("#rBox").append(c);
		$("#rBox").append(w);
		$("#rBox").append(i);
		$("#mainBox").append(s);

	}

	// Start the quiz
	$("#start").click(function() {
		i=0;
		nextQ();
	});

	// Start the quiz over
	$(document).on("click", "#startOver", function() {
		// reset variables
		i=0;
		correct = 0;
		wrong = 0;
		incomplete = 0;
		qNumber = 0;
		console.log("start over");
		nextQ();
	});

	var nextQ = function() {
		if (i === quiz.length) {
			showResult();
		} else {
			createTimer();
			displayQuiz(quiz, i);

		}
	}

});