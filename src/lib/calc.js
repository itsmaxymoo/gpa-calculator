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
}

export let calcNeededGPA = function(completedCredits, currentGPA, currentCredits, desiredGPA) {
	return completedCredits * (desiredGPA - currentGPA) / currentCredits + desiredGPA
}