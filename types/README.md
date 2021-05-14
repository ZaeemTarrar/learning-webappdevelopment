## Types of Javascript Injections

- Inline

```
<button onclick="alert('Hello world');" > Press </button>
```

- Internal

With-in the same page

```
<srcipt type="text/javascript" >
    alert("Hello world");
</script>
```

- External

External files links via `<script src="file.js" ></script>`

```
alert("Hello world");
```
