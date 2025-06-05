function getGrades(inputSelector){
    const grades=document.querySelector(inputSelector).value;
    // split them into an array (String.split(','))
    const gradesArray=grades.split(",");
     // clean up any extra spaces, and make the grades all uppercase. (Array.map())
     const cleanGrades=gradesArray.map((grade)=>grade.trim().toUpperCase());
     // return grades
     return cleanGrades;
}

function lookupGrade(grade){
    let points=0;
    if (grade==='A'){
        points=4;
    }else if (grade==='B'){
        points=3;
    }else if (grade==='C'){
        points=2;
    }else if (grade==='D'){
        points=1;
    }
    return points;
}

function calculateGpa(grades){
    const gradePoints=grades.map((grade)=>lookupGrade(grade));
    const gpa=gradePoints.reduce((total,num)=>total+num)/gradePoints.length;
    return gpa.toFixed(2);
}
function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  const output=document.querySelector(selector);
  output.innerText=gpa;
}

function clickHandler() {
  const grades=getGrades('#grades');
  // calculate the gpa from the grades entered
  const gpa=calculateGpa(grades)
  // display the gpa
  outputGpa(gpa, '#output')
}
document.querySelector('#submitButton').addEventListener('click', clickHandler);
