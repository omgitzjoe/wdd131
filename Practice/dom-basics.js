const newParagraph = document.createElement('p');
newParagraph.innerText='Added with Javascript!';
document.body.appendChild(newParagraph);

const newImage=document.createElement('img');
newImage.setAttribute("src", "https://picsum.photos/200");
newImage.setAttribute('alt', 'image');
document.body.appendChild(newImage);

const newDiv = document.createElement('div');
newDiv.innerHTML = "<ul><li>One</li></ul>";
document.body.appendChild(newDiv);

const newSection=document.createElement('section');
newSection.innerHTML="<h2>Dom Basics</h2><p>This was added through Javascript!</p>";
document.body.appendChild(newSection);

//add an element (replace if occupied)
const container = document.getElementById("Contatainer");
container.innerHTML = "<p>This is new paragraph content</p>";

//change attribute
//set
element.setAttribute('src', 'new-image.jpg');


