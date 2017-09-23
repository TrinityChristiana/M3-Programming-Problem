function main()
{
    var testType;
    var testScore;
    var mathClass = 0;

    testType = getTestType(testType);
    testScore = getTestScore(testType, testScore);
    

    if (testType == "ACT" || testType == "act" || testType == "Act") {
        mathClass = getActMathClass(testScore, mathClass);
    } else if (testType == "SAT" || testType == "sat" || testType == "Sat") {
        mathClass = getSatMathClass(testScore, mathClass);
    } else if (testType == "Compass" || testType == "compass") {
        mathClass = getCompassMathClass(testScore, mathClass);
    }

    displayCoReq(mathClass);
}

function getTestType(testType)
{
    testType = prompt("Which test did your student take? The ACT, SAT, or Compass?");
    return testType;
}

function getTestScore(testType, testScore)
{
    if (testType == "ACT" || testType == "act" || testType == "Act") {
        testScore = prompt("What was the student's score on the Math portion of the ACT?");
    } else if (testType == "SAT" || testType == "sat" || testType == "Sat") {
        testScore = prompt("What was the student's score on the Math portion of the SAT?");
    } else if (testScore == "Compass" || testScore == "compass"){
        testScore = prompt("What was the student's score on the Algebra portion of the Compass?");
    } else {
        alert("ERROR: " + testType + " is an invalid testType. Please enter valid test Type."
        + "\nValid answers are: ACT, act, SAT, sat, Compass, and compass.");
        // main();
    }
    return testScore;
}

function getActMathClass(testScore, mathClass, testType)
{
    if (testScore <= 18 && testScore >= 1) {
        mathClass = prompt("Your student can take the following classes:"
        + "\n\n1. Math for Liberal Arts"
        + "\n2. Probability & Statistics"
        + "\n3. Finite Math"
        + "\n4. Foundations of Algebra"
        + "\n\nWhat is the number of the class your student wants to take?");
        return mathClass;
    } else if (testScore <= 36 && testScore >= 19) {
        alert("Student is clear to take college-level math");
    } else {
        alert("ERROR: " + testScore + " is an invalid test score answer. Please refresh page and reenter valid test score."
        + "\nValid answers are numbers 1-36");
        // getTestScore(testType, testScore);
        // getActMathClass(testScore, mathClass, testType);
    }
}

function getSatMathClass(testScore, mathClass)
{
    if (testScore <= 450 && testScore >= 200) {
        mathClass = prompt("Your student can take the following classes:"
        + "\n\n1. Math for Liberal Arts"
        + "\n2. Probability & Statistics"
        + "\n3. Finite Math"
        + "\n4. Foundations of Algebra"
        + "\n\nWhat is the number of the class your student wants to take?");
        return mathClass;
    } else if (testScore <= 800 && testScore >= 460) {
        alert("Student is clear to take college-level math");
    } else {
        alert("ERROR: Invalid test score answer. Please refresh page and reenter valid test score."
            + "\nValid answers are numbers 200-800");
    }
}

function getCompassMathClass(testScore, mathClass)
{
    if (testScore <= 37 && testScore >= 1) {
        mathClass = prompt("Your student can take the following classes:"
        + "\n\n1. Math for Liberal Arts"
        + "\n2. Probability & Statistics"
        + "\n3. Finite Math"
        + "\n4. Foundations of Algebra"
        + "\n\nWhat is the number of the class your student wants to take?");
        return mathClass;
    } else if (testScore <= 99 && testScore >= 38) {
        alert("Student is clear to take college-level math");
    } else {
        alert("ERROR: Invalid test score answer. Please refresh page and reenter valid test score."
            + "\nValid answers are numbers 1-99");
    }
}

function displayCoReq(mathClass)
{
    if (mathClass == 1){
        alert("If your student wants to take Math for Liberal Arts, they have to also take MATH 0825");
    } else if (mathClass == 2) {
        alert("If your student wants to take Probability & Statistics, they have to also take MATH 0835");
    } else if (mathClass == 3) {
        alert("If your student wants to take Finite Math, they have to also take MATH 0845");
    } else if (mathClass == 4) {
        alert("If your student wants to take Foundations of Algebra, they have to also take MATH 0815");
    } else if (mathClass == 0) {
        alert("End of program. Refresh to run again.")
    } else {
        alert("ERROR: " + mathClass + " is an invalid test Math Class input. Please refresh page and reenter valid math class."
        + "\nValid answers are numbers 1-4")
    }
}











main();