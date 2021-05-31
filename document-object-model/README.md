# Javascript - Document Object Model ( D.O.M )

## Javascript to Html5 Access

We access the html via `tags` `tag-names` `tag-id` `tag-classes` or `tag-attributes` e.g.

**Html**

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> JavaScript </title>
</head>
<body>
    <p id="para" > hello world </p>
</body>

<script type="text/javascript" >
    paragraph = document.getElementById("para");
</script>

</html>
```

### Console Methods

`console.log()`
`console.dir()`
`console.warning()`
`console.info()`
`console.error()`
`console.clear()`

### Browser Dialogs

```
var person = prompt("Please enter your name", "Harry Potter");
alert( person );        // string
```

### Browser Printing

```
document.write()
document.writeln()
```

### Interface Description Language

```
alert( document.body.constructor.name ); // HTMLBodyElement
```

```
alert( document.body instanceof HTMLBodyElement ); // true
alert( document.body instanceof HTMLElement ); // true
alert( document.body instanceof Element ); // true
alert( document.body instanceof Node ); // true
alert( document.body instanceof EventTarget ); // true
```

### The Pure DOM

```
<html> = document.documentElement
<body> = document.body
<head> = document.head
```

**Note:** `If an element (or any of its ancestors) has display:none or is not in the document, then all geometry properties are zero (or null for offsetParent).`

```
document.body
document.body.nodeType
document.body.firstChild.nodeType
document.body.firstChild.nodeName
document.body.firstChild.tagName
document.body.lastChild.nodeType
document.body.innerHTML
document.body.outerHTML                 // Replacment in Dom only
document.querySelector('div')
document.body.firstChild.nextSibling
document.body.firstElementChild
document.body.lastElementChild
document.body.previousSibling
document.body.previousElementSibling
document.body.firstChild.nextSibling.data
document.body.firstChild.nextElementSibling
document.body.childNodes
document.body.children
document.body.childNodes.length
document.body.parentNode
document.body.parentElement
document.documentElement
document.textContent
example.offsetParent.id
example.offsetLeft
example.offsetTop
elem.offsetWidth
elem.offsetHeight
elem.clientTop
elem.clientLeft
elem.clientWidth
elem.clientHeight
elem.scrollWidth
elem.scrollHeight
elem.scrollLeft
elem.scrollTop
```

```
example.style.backgroundColor
```

```
let elem = document.body;

alert( getComputedStyle(elem).width ); // show CSS width for elem
```

```
<input type="text" id="elem" value="value">

<script>
  alert(elem.type); // "text"
  alert(elem.id); // "elem"
  alert(elem.value); // value
</script>
```

```
<div hidden>With the attribute "hidden"</div>
<script>
  elem.hidden = true;
</script>
```

```
table.rows
table.caption/tHead/tFoot
table.tBodies
tbody.rows
tr.cells
tr.sectionRowIndex
tr.rowIndex
td.cellIndex
```

```
Array.from(document.body.childNodes).filter
```

**Accessing the Html Tag References in Javascript**

```
let Refs = document.getElementsByTagName("h1");
let Ref = document.getElementById("mainPage");
let Refs = document.getElementsByClassName("box");
let Refs = document.getElementsByName("box");
let Divs = document.querySelectorAll('div');
```

**Query Selection**

```
let elements = document.querySelectorAll('ul > li:last-child');

for (let elem of elements) {
  alert(elem.innerHTML); // "test", "passed"
}
```

**Matches**

```
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>

<script>
  // can be any collection instead of document.body.children
  for (let elem of document.body.children) {
    if (elem.matches('a[href$="zip"]')) {
      alert("The archive reference: " + elem.href );
    }
  }
</script>
```

**Contains**

```
elemA.contains(elemB)
```

**Closest**

```
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 1</li>
  </ul>
</div>

<script>
  let chapter = document.querySelector('.chapter'); // LI

  alert(chapter.closest('.book')); // UL
  alert(chapter.closest('.contents')); // DIV

  alert(chapter.closest('h1')); // null (because h1 is not an ancestor)
</script>
```

**Accessing Curruntly Active Html Element/Tag**

```
var x = document.activeElement.tagName;
```

**Adding Methods to DOM**

```
document.body.sayTagName = function() {
  alert(this.tagName);
};
document.body.sayTagName(); // BODY (the value of "this" in the method is document.body)
```

```
Element.prototype.sayHi = function() {
  alert(`Hello, I'm ${this.tagName}`);
};

document.documentElement.sayHi(); // Hello, I'm HTML
document.body.sayHi(); // Hello, I'm BODY
```

**Custom Attributes**

```
<body id="test" something="non-standard">
  <script>
    alert(document.body.id); // test
    // non-standard attribute does not yield a property
    alert(document.body.something); // undefined
  </script>
</body>
```

**Html Creations**

`Attribute`

```
var att = Ref.createAttribute("class");
att.value = "democlass";
```

```
elem.hasAttribute(name)
elem.getAttribute(name)
elem.setAttribute(name, value)
elem.removeAttribute(name)
elem.attributes
```

`Comment`

```
var c = document.createComment("My personal comments");
document.body.appendChild(c);
```

**Scratch Creations**

```
let div = document.createElement('div');
let textNode = document.createTextNode('Here I am');
```

```
// 1. Create <div> element
let div = document.createElement('div');

// 2. Set its class to "alert"
div.className = "alert";

// 3. Fill it with the content
div.innerHTML = "<strong>Hi there!</strong> You've read an important message.";

document.body.append(div);
```

**Updating DOM**

```
node.append()
node.prepend()
node.before()
node.after()
node.replaceWith()
node.remove()
```

```
<div id="div"></div>
<script>
  div.insertAdjacentHTML('beforebegin', '<p>Hello</p>');
  div.insertAdjacentHTML('afterend', '<p>Bye</p>');
</script>
```

**Cloning**

```
elem.cloneNode(true)                // With Child Elements
elem.cloneNode(false)               // Without Child Elements
```

**Classes**

```
document.body.className = "hello"
document.body.classList.add('article')
document.body.classList
```

```
elem.classList.add/remove("class")
elem.classList.toggle("class")
elem.classList.contains("class")
```

**String Css Styling**

```
div.style.cssText=`color: red !important;
    background-color: yellow;
    width: 100px;
    text-align: center;
  `;
```

**Extra Infomation of Elements**

```
<head>
  <style> body { color: red; margin: 5px } </style>
</head>
<body>

  <script>
    let computedStyle = getComputedStyle(document.body);

    // now we can read the margin and the color from it

    alert( computedStyle.marginTop ); // 5px
    alert( computedStyle.color ); // rgb(255, 0, 0)
  </script>

</body>
```

**Document Fragments**

```
<ul id="ul"></ul>

<script>
function getListContent() {
  let fragment = new DocumentFragment();

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    fragment.append(li);
  }

  return fragment;
}

ul.append(getListContent()); // (*)
</script>
```

**Event Listener**

```
document.addEventListener("click", function(){
  document.getElementById("demo").innerHTML = "Hello World";
});
```

**BaseUrl** `document.baseURI`

**Reference Methods**

- innerHTML

`Style Methods uses Css Methods in Camel case`

- style.backgroundColor
- style.color
- style.padding
- style.margin
- style.border.width
- ...

- onLoad()
- onClick()
- onDoubleClick()
- onFocus()
- onBlur()
- onMouseUp()
- onMouseLeave()
- onDrag()
- ...

### CallBacks ( Async )

```
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(script);

  document.head.append(script);
}
```

### On Error

```
<script>
  window.onerror = function(message, url, line, col, error) {
    alert(`${message}\n At ${line}:${col} of ${url}`);
  };

  function readData() {
    badFunc(); // Whoops, something went wrong!
  }

  readData();
</script>
```

### Browser APIs

**Location APIs**

```
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log( "Geolocation is not supported by this browser." );
  }
}
function showPosition(position) {
    console.log( position.coords.latitude, position.coords.longitute );
}
```

**History APIs**

```
window.history.back();
window.history.go(-2);
```

**Storage APIs**

```
localStorage.setItem("name", "John Doe");
localStorage.getItem("name");
localStorage.removeItem("name");
```

```
sessionStorage.getItem("name");
sessionStorage.removeItem("name");
sessionStorage.setItem("name", "John Doe");
```

**Fetch API**

```
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(data => console.log(data));
```

```
const response = await fetch(url, {
    method: 'POST',             // *GET, POST, PUT, DELETE, etc.
    mode: 'cors',               // no-cors, *cors, same-origin
    cache: 'no-cache',          // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',         // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
```
