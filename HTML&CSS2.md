# HTML&CSS part2
### web page metadata:<meta>
<meta name="name" content="content">
<meta http-equiv="" content="" charset="">
name: author description keywords generator revised
http-equiv: content-type expires refresh

### Table:<table>,<tr>,<td>,<th>,<caption>
tr:一行
th:table head
td:table data
<table>
    <caption>title</caption>
    <tr><th>name</th><th>name2</th></tr>
    <tr><td>a</td><td>b</td></tr>
</table>

### Definition List:<dl>,<dt>,<dd>

### Quotations:<blockquote>

### inline quotations:<q>
    - html中直接写引号非法。
    - 结构

### HTML character entitles
|character|entity|
|---|---|
|< >|&lt，&gt|
|" &| ,&amp|
...

### Computer code:<code>

### Preformatted text:<pre>

## CSS

### Grouping styles
p,h1,h2{
    color:green;
}

### CSS properties
    text-align(center,right,left,justify)
    text-decoration(underline, overline, line-through, blink[not use])
    ...

### The list-style property


### Body styles
整个网页

### CSS properties for backgrounds
    body{
        background-image: url("");//default:left to right, up to down
        background-repeat://重复方式
        background-position://起始点
    }

### Favorites icon("favicon")
    <link  href = " "  type = "image/gif/png/..." rel="shortcut icon"/>

### The HTML **id** attribute
url 加#

### CSS id selectors
    #mission{
    }
### The HTML class attribute
<p class="shortcut">paragraph</p>
<p class="special">p2</p>
<p class="special">p3</p>
.special{
}
p.shortcut{
}

## styling page sections
### Motivation for page sections
### sections of a page:<div>
### inline section:<span>

## CSS content selector
    selector1 selector2{
        properties
    }
    applies the given properties to selector2 only if it is inside a selector1 on the page

    selector1 > selector2{
        properties
    }
    仅在孩子中找

### CSS inheritance
### CSS Cascade
    origin
     - the web author
     - the browser user configuration
     - the browser default configuration
    order
     - the order after all css rules
    specificity
     - a four digits number for each rule
    importancy
     - a rule is with or without importancy

### Specificity of Selector
4位数
a:直接写html里为0 
b:ID的数 
c:number of attributes, psedo-classes and class names in a selector 
d:元素个数

### The CSS Box Model
    Margin:外边距
    Padding:内边距
    border:
    width amount: width + padding + border + margin

### Document flow -- block elements
### CSS properties for borders
    thickness/style/size of border/colors

### centering a block element: auto margins

