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

External Css is same as the Internal but is coding without _style_ tags in another file ( .css ) and it is linked to the html file in the _head_ tag, as follow:

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
a[target="_blank"] {
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
