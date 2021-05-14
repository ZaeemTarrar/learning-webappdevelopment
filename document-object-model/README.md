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

### The Pure DOM

**Accessing the Html Tag References in Javascript**

```
let Ref = document.getElementsByTagName("h1");
let Ref = document.getElementById("mainPage");
let Ref = document.getElementsByClassName("box");
```

**Accessing Curruntly Active Html Element/Tag**

```
var x = document.activeElement.tagName;
```

**Html Creations**

Attribute

```
var att = Ref.createAttribute("class");
att.value = "democlass";
```

Comment

```
var c = document.createComment("My personal comments");
document.body.appendChild(c);
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

- onClick()
- onDoubleClick()
- onFocus()
- onBlur()
- onMouseUp()
- onMouseLeave()
- onDrag()
- ...

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
