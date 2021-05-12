# Cascading Style Sheets

## Types of Css

### Inline Css

Inline Css Structure

```
<Tag style="property:value;" > Hello world ! </Tag>
```

Inline Css Example

```
<Tag style="background-color:yellow;" > Hello world ! </Tag>
```

### Internal Css

Internal Css Structure

```
<style>
    Tagname {
        property: value
    }
<style>
```

Internal Css Example

```
<style>
    p {
        background-color: red;
    }
<style>
```

### External Css

External Css is same as the Internal but is coding without `style` tags in another file ( .css ) and it is linked to the html file in the `head` tag, as follow:

```
<head>
    <title> Website </title>
    <link tyle="text/css" rel="stylesheet" href="./style.css" />
</head>
```

External Css Structure

```
Tagname {
    property: value
}
```

External Css Example

```
p {
    background-color: red;
}
```

## Css Combinators

### Descendant Selector

Styles all the second elements inside the first element

```
div p {
    property: value;
}
```

### Child Selector

Styles all the second elements that are directly child of the first element

```
div > p {
    property: value;
}
```

### Adjacent Sibling Selector

Styles all the second elements that come directly after the first element

```
div + p {
    property: value;
}
```

### General Sibling Selector

Styles all the second elements that are siblings of the first element

```
div ~ p {
    property: value;
}
```

## Pseudo-Classes

### Link

UnVisited Links

```
a:link {
  color: #FF0000;
}
```

### Visited

Visited Links

```
a:visited {
  color: #FF0000;
}
```

### Hover

Links Currently getting hovered by mouse

```
a:hover {
  color: #FF0000;
}
```

### Active

Links currently getting clicked by mouse

```
a:active {
  color: #FF0000;
}
```

## Pseudo Elements

### First Line

```
p::first-line {
  color: #ff0000;
  font-variant: small-caps;
}
```

### First Letter

```
p::first-letter {
  color: #ff0000;
  font-size: xx-large;
}
```

### Before

```
p::before {
  color: #ff0000;
  font-size: xx-large;
}
```

### After

```
p::after {
  color: #ff0000;
  font-size: xx-large;
}
```

### Marker

Styles markers of the list items

```
p::marker {
  color: #ff0000;
  font-size: xx-large;
}
```

### Selection

Styles the selected text

```
p::selection {
  color: #ff0000;
  font-size: xx-large;
}
```

## Attribute Selectors

Selection Via any attribute

```
a[target="`blank"] {
  background-color: yellow;
}
```

Selection of attribute containing a specific word

```
[title~="flower"] {
  border: 5px solid yellow;
}
```

Selection of attribute starting with a specific word

```
[class|="top"] {
  background: yellow;
}
```

Selection of attribute beginning with a specific value

```
[class|^="top"] {
  background: yellow;
}
```

Selection of attribute ending with a specific value

```
[class|$="top"] {
  background: yellow;
}
```

Selecting specified input tag type

```
input[type=text]
input[type=password]
input[type=number]
```

## Force Styling

To force a cascaded style, we use `!important` key word

```
p {
  background-color: green !important;
}
```

## Basic Topics

### Flex Boxes

Flexes are used for grid systems, block based web user interface and web responsiveness. Display `property` is set to `flex`

```
.flexBox {
  display: flex;
}
```

Following are some of the properties of flex boxes

`order:`
Used to give an order to flex items

```
order: 2;
```

`flex-grow`
Used to set a Respective growth rate for the flex items

```
flex-growth: 3;
```

`flex-shrink`
Used to set a Respective shrinking rate for the flex items

```
flex-shrink: 0;
```

`flex-basis`
Used to set Initial legnth etc

```
flex-basis: 200px;
```

`align-self`
Used to give position to the flex item in the flex box container

```
align-self: center;
align-self: flex-start;
align-self: flex-end;
```

Properties can be set together too

```
flex: 0 0 200px;
```

Flex Box Directions can be set as

```
flex-direction: row;
flex-direction: column;
```

Flex Responsiveness by wrapping it

```
.container {
  flex-wrap: wrap;
}
.box {
  flex: 50%;
}
```

### Borders

Setting up border by: `width` `type` `color`

```
border: 1px solid red;
border: 1px dashed transparent;
border: 1px dotted #000;
```

Setting up border image series

```
border-image: url("tile.png") 20 round;
border-image: url("tile.png") 30 stretch;
```

### Displays

```
display: block;
display: inline-block;
display: inline;
display: none;
```

### Visibility

```
visibility: hidden;
visibility: visible;
```

### Colors

```
color: red;
background-color: #369;
```

Structure -> rgb( Red, Blue, Green )

Structure -> rgba( Red, Blue, Green, opacity )

```
color: rgb(255,0,0)
background-color: rgba(255,0,0,0.2)
```

### Backgrounds

```
background: #000;
background-color: red;
background-image: url("wallpaper.jpg")
```

### Inheritance

`inherit` keyword is used to inherit any value for the parent, for any property

```
border: inherit;
```

### Color Gradients

`Linear Gradient`

Structure

```
background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
```

Example

```
background-image: linear-gradient(red, yellow);
background-image: linear-gradient(to right,red, yellow);
background-image: linear-gradient(to bottom right,red, yellow);
background-image: linear-gradient(90deg,red, yellow);
background-image: linear-gradient(90deg,red, yellow,green,blue);
```

`Radial Gradient`

Structure

```
background-image: radial-gradient(shape size at position, start-color, ..., last-color);
```

Example

```
background-image: radial-gradient(red, yellow, green);
background-image: radial-gradient(red 5%, yellow 15%, green 60%);
background-image: radial-gradient(circle, red, yellow, green);
background-image: radial-gradient(closest-side at 60% 55%, red, yellow, black);
background-image: radial-gradient(farthest-side at 60% 55%, red, yellow, black);
background-image: repeating-radial-gradient(red, yellow 10%, green 15%);
```

### Shadows

Structure -> `top` `left` `blur` `color` `type*`

```
text-shadow: 0px 0px 10px red;
box-shadow: 5px 5px 20px blue;
box-shadow: 0px 0px 10px green inset;
```
