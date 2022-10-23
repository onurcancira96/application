// // //innerHTML İçeriğini değiştiriyor.
// document.getElementById("demo").innerHTML = "Hello World!";
// //Find

// //Find an element by element id.
// document.getElementById(id);

// //Find elements by tag name. div p h1
// document.getElementsByTagName(name);
// document.getElementsByTagName("p")[0].innerHTML

// //Find elements by class name.
// document.getElementsByClassName(name);  

//Change

// //Change the inner HTML of an element.
// document.getElementById('id').innerHTML= "Merhaba Dünya";

// //Change the attribute value of an HTML element.
// document.getElementById('id').id = 'id2';

// //Change the style of an HTML element.
// document.getElementById('id').style.color = 'red';

// //Change the attribute value of an HTML element.
// document.getElementById('id').setAttribute("class", "yeni");

//Adding and Deleting

// //Create an HTML element
// const a = document.createElement('div');
// console.log(a);

// //Remove an HTML element
// const b =document.getElementById('id');
// b.removeChild(b.firstElementChild);
// b.removeChild(b.lastElementChild);
// b.removeChild(b.firstChild);
// b.remocechild(b.lastChild);

// //Add an HTML element
// document.getElementById('id').appendChild(a);

// //Replace an HTML element
// var doc = document.createTextNode("Selam");
// var list = document.getElementById("id");
// list.replaceChild(doc,list.childNodes[3]);//Ayrıca childnodes uygulaması önemli yer değiştirmek için.

// //Write into the HTML output stream
// document.write('Selam');// like console.log  maybe its works

// //Adding Events Handlers

// document.getElementById('id').onclick = function(){console.log('xxx')}
//document.getElementById("demo").addEventListener("click", myFunction); //click

// Selectors

// //querySelectorAll
// const x = document.querySelectorAll("p.intro");//Tagı p olup class ı into olan =x
// document.getElementById("id").innerHTML = 'ilk' + x[0].innerHTML;


// Formun içindeki elementleri sıra sıra yazdırma. 
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_form_elements
// const x = document.forms["frm1"];
// let text = "";
// for (let i = 0; i < x.length ;i++) {
//   text += x.elements[i].value + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// // Form validation
// function validateForm() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//       alert("Name must be filled out");
//       return false;
//     }
//   }


// Ek HTML NOTU
// disabled	- Specifies that the input element should be disabled.
// required - Specifies that the input field requires an element.
// pattern - Validation kurallarını belirleyebilirsin.

// click işlemini silme
// element.removeEventListener("mousemove", myFunction);


// navigation

// //normal
// myTitle = document.getElementById("demo").innerHTML;

// // using nodeValue
// myTitle = document.getElementById("demo").firstChild.nodeValue;

// //childNodes[0].nodeValue
// myTitle = document.getElementById("demo").childNodes[0].nodeValue;

// // nodName tagın ismini yazdırır. nodeName always contains the uppercase tag name of an HTML element.
// document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;


// // oluşturulan elementri silme
// const elmnt = document.getElementById("p1"); elmnt.remove();

// // farklı bir kullanım  
// const child = document.getElementById("p1");
// child.parentNode.removeChild(child);

// // child değiştirme
// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.replaceChild(para, child);




// tüm p leri topla sırasına göre yazdır.
// const myCollection = document.getElementsByTagName("p");


// myCollection[1]
// myCollection.length
// kullanılabilir
    const myCollection = document.getElementsByTagName("p");
    for (let i = 0; i < myCollection.length; i++) {
    myCollection[i].style.color = "red";
    }