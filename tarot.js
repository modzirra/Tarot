var suitNum = function () {
    //wands = 1, cups = 2, pentacles = 3, swords = 4
	suit = Math.floor(Math.random()*4) +1;
	return suit;
};

var rankNum = function () {
    //produce rank
    //1-10 = number, 11 = princess, 12 = prince, 13 = queen, 14 = king, 15-36 = trumps 
    rank = Math.floor(Math.random()*36) + 1;
    return rank;
};

var suitName = function () {
	//cases for numbers
	switch(suit){
		case 1:
			return "Wands";
		case 2:
			return "Cups";
		case 3:
			return "Pentacles";
		case 4:
			return "Swords";
		default:
			return "Uh oh!";
	}
};

var rankName = function() {
	//cases for numbers
    if (rank === 1){
            return "Ace of ";   
	} else if (rank < 11 && rank > 1){
		return rank + " of ";
	} else if (rank >= 11 && rank <15){
		switch(rank){
			case 11:
				return "Princess of ";                
			case 12:
				return  "Prince of ";
			case 13:
				return  "Queen of ";                
			case 14:
				return  "King of ";
			default:
				return "Uh oh!";
		}
	} else {
		switch(rank){
			case 15:
				return  "The Magician";
			case 16:
				return  "The High Priestess";
			case 17:
				return  "The Empress";
			case 18:
				return  "The Emporer";
			case 19:
				return  "The Hierophant";
			case 20:
				return  "The Lovers";
			case 21:
				return  "The Chariot";             
			case 22:
				return  "Justice";                
			case 23:
				return  "The Hermit";                
			case 24:
				return "Wheel of Fortune";                
			case 25:
				return  "Strength";                
			case 26:
				return  "The Hanged Man";                
			case 27:
				return  "Death";                
			case 28:
				return  "Temperence";                
			case 29:
				return  "The Tower";                
			case 30:
				return  "The Star";                
			case 31:
				return  "The Moon";                
			case 32:
				return  "The Sun";                
			case 33:
				return  "Judgement";                
			case 34:
				return  "The World";                
			case 35:
				return  "The Fool";                
			case 36:
				return  "The Devil";                
			default: 
				return "Uh oh!";
		}
	}
};

var draw = function() {
	var rank = rankNum();
	var cardRank = rankName();
	var cardSuit = "";
	//ranks greater than 14 will be trumps and have no suit.
	if (this.rank < 15){
		suit = suitNum();
		cardSuit = suitName();
	}
	return " it is " + cardRank + cardSuit + ".";
};

var reading = function(){
    cards = [];
	//draw cards and fill array
	var fillCards = function(){
		for(x=0; x<3; x++){
        	cards[x] = draw();
    	}
	}
	//check for dupes, if dupes, clear array and redraw
	if(cards[0]===cards[1] || cards[1]===cards[2] || cards[0]===cards[2] || cards[0]===null){
		cards = [];
		fillCards();
	}
};

//jQuery
$(document).ready(function() {
    $('button').click(function() {
		$('.face-down').addClass('face-up');
		$('.face-down').removeClass('face-down');
		reading();
		 
		$('#past').append('<p>Your first card represents the past,' + cards[0] + '</p>');
		$('#present').append('<p>Your second card represents the present,' + cards[1] + '</p>');
		$('#future').append('<p>Your third card represents the future,' + cards[2] + '</p>');
		
		$('#button').empty();
    });
});