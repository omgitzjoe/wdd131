//
const steps = ['one','two','three'];
const listTemplate(step){
    return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector(#myList).innerHTML=stepsHtml.join();

const grades=['A','B','A'];
function convertGradeToPoints(grade) {
    let points=0;
    if (grade==='A'){
        points=4.0;        
    }else if (grade==='B'){
        points=3.0;
    }
    return points;
}
const gpaPoints=grades.map(convertGradeToPoints)
const pointsTotal=gpaPoints.reduce((total, item)=> total+item);
const gpa=pointsTotal/gpaPoints.length;

const fruits=['watermelon','peach','apple','tomato','grape'];
const shortFruits=fruits.filter((fruit)=>fruit.length<6);

const numbers=['12','34','21','34']