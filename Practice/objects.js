// courses.js
const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
  { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
  enrollStudent: function (sectionNumber){
    const sectionIndex=this.sections.findIndex(
        (section) => section.sectionNum==sectionNumber
    );
    if (sectionIndex>=0){
        this.sections[sectionIndex].enrolled++;
        renderSections(this.sections);
    }
},
    dropStudent: function (sectionNumber){
        const sectionIndex=this.sections.findIndex(
            (section)=>section.sectionNum==sectionNumber
        );
        if (sectionIndex>=0){
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
  },
}
function setCourseInfo(course){
    const courseName=document.querySelector('#courseName');
    const courseCode=document.querySelector('#courseCode');
    courseName.textContent=course.name;
    courseCode.textContent=course.code;
}

function displaySection(section){
    return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td>
    </tr>
    `
};

function renderSections(sections){
    const html=sections.map(displaySection);
    document.querySelector('#sections').innerHTML=html.join("");
}
setCourseInfo(aCourse);
renderSections(aCourse.sections);
document.querySelector('#enrollStudent').addEventListener('click',function(){
  const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.enrollStudent(sectionNum);
});

document.querySelector('#dropStudent').addEventListener('click',function(){
      const sectionNum = document.querySelector("#sectionNumber").value;
  aCourse.dropStudent(sectionNum);
});