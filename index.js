//------------------------Question 1 ---------------------------
//Is time to create things in the DOM!!. We want you to create a new 'div' 
// Element and append it as a child of the element that has the 'id = a-1' (the element is in index.html file)
// // all right our new element needs style. For that, assign to the new element 
// the className 'square'!. Each time the user clicks on the new element it has 
// to respond changing the displayed text 'x' to 'o'

const mySquare = document.querySelector('.square');
mySquare.addEventListener('click', () => {
 if (mySquare.textContent === "x") {
     mySquare.textContent = "o";
    } else {
        mySquare.textContent = "x";
    }
    return mySquare;
});


//resolve // QUESTION 1 here




//------------------------Question 2 ---------------------------
// //Write a JavaScript program to remove items from a dropdown list.
// //In order to create the list we are providing you with the array bellow, 
// those items are the ones you need to add to the dropdown list as 
// the select options
// //you also need to create a button that makes the remove action of the 
// element selected
// append the new list as a child of the element with the 'id = a-2'
// append the button as a child of the element with the 'id = a-2'
const colors = [ 'red' , 'white', 'black' , 'green' , 'orange'];
//creating an element in DOM
const select = document.createElement('select');
const que2 = document.getElementById('a-2');
//creating a loop to create option for each element in the array
for (var i=0; i<colors.length; i+=1){
    let optionElement = document.createElement('option');
    select.appendChild(optionElement);
    optionElement.textContent = colors[i];
    console.log(optionElement.textContent);
}
//creating a a button 
const deleteButton = document.createElement('button');
deleteButton.textContent = "Remove item from the list";
//whenever button is clicked
deleteButton.onclick = () =>{
select.options[select.selectedIndex].remove();
}
que2.appendChild(select);
que2.appendChild(deleteButton);




//------------------------Question 3 ---------------------------
//Now lets mix some maths and programming. In the function below (calculate_sphere) write a JavaScript program to calculate the volume and surface area of a sphere.
//take the radius from the input value element with the 'id=radius' in the index.html file
//And display the results in the elements with the 'id = volume' and 'id = area' respectively
//hint: the volumen of a sphere is ((4/3) × π × r^3) and the surface area is (4 × π × r^2)


const calculate_sphere = () =>{
let v;
let a;
let radius = document.getElementById('radius').value;
v = (4/3)* 3.14 * Math.pow(radius, 3);
a = 4 * 3.14 * Math.pow(radius, 2);
document.getElementById('volume').value = v;
document.getElementById('area').value = a;
return false;
 }
window.onload = document.getElementById('MyForm').onsubmit = calculate_sphere; // this execute the volume_sphere function each time the calculate (submit) button is clicked


//------------------------Question 4 ---------------------------
//Now in this exercise we want you to create 3 buttons, each with a click action that will hide the respective question's answer above. So if you click the "Hide Question 1" button it will hide from the DOM the answer to your first exercise. If you click it again it will show the answer. 
const hideQ1 = document.querySelector('button.HideQ1');
const q1 = document.querySelector('.square');
hideQ1.addEventListener('click', ()=>{
    if (q1.style.display == 'none'){
        hideQ1.textContent = "Hide Q1";
        q1.style.display = 'block';
    }else{
        hideQ1.textContent = 'Show Q1';
        q1.style.display = 'none';
    }
});

const hideQ2 = document.querySelector('button.HideQ2');
const q2 = document.getElementById('a-2');
hideQ2.addEventListener('click', ()=>{
    if (q2.style.display == 'none'){
        hideQ2.textContent = "Hide Q2";
        q2.style.display = 'block';
    }else{
        hideQ2.textContent = 'Show Q2';
        q2.style.display = 'none';
    }
});

const hideQ3 = document.querySelector('button.HideQ3');
const q3 = document.getElementById('a-3');
hideQ3.addEventListener('click', ()=>{
    if (q3.style.display == 'none'){
        hideQ3.textContent = "Hide Q3";
        q3.style.display = 'block';
    }else{
        hideQ3.textContent = 'Show Q3';
        q3.style.display = 'none';
    }
});
//resolve // QUESTION 4 here
