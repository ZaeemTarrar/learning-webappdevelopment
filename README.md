# Cascading Style Sheets

## Inline Css

Inline Css Structure

```
<Tag style="property:value;" > Hello world ! </Tag>
```

Inline Css Example

```
<Tag style="background-color:yellow;" > Hello world ! </Tag>
```

## Internal Css

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

## External Css

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
