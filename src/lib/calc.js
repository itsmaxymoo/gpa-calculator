export let gpaToNeededLetterGrade = function(gpa) {
	if( gpa > 4.0000001){ return "(impossible)"; }
	if( gpa > 3.67){ return "A"; }
	if( gpa > 3.33){ return "A-"; }
	if( gpa > 3.0000001){ return "B+"; }
	if( gpa > 2.67){ return "B"; }
	if( gpa > 2.33){ return "B-"; }
	if( gpa > 2.0000001){ return "C+"; }
	if( gpa > 1.0000001){ return "C"; }
	if( gpa > 0.0000001){ return "D"; }
	if( gpa <= 0.0000001){ return "F"; }
	return "(error)";
}

export let letterGradeToGPA = function(lg) {
	if(lg == "A"){ return 4.00; }
	if(lg == "A-"){ return 3.67; }
	if(lg == "B+"){ return 3.33; }
	if(lg == "B"){ return 3.0; }
	if(lg == "B-"){ return 2.67; }
	if(lg == "C+"){ return 2.33; }
	if(lg == "C"){ return 2.0; }
	if(lg == "D"){ return 1.0; }
	if(lg == "F"){ return 0.0; }

	return 0.0;
}

export let calcNeededGPA = function(completedCredits, currentGPA, currentCredits, desiredGPA) {
	return completedCredits * (desiredGPA - currentGPA) / currentCredits + desiredGPA
}