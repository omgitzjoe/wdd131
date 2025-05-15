const PI = 3.14;

let area = 0;

function circleArea(radius) {
    area=radius*radius*PI;
    return console.log('AREA=',area);
}
circleArea(3);
circleArea(4);