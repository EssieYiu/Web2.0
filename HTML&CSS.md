# WEB2.0_HTML&CSS
## HTML hypertext markup lan
- content& structure of web page
- open/close tags
- **syntax:<element>content</element>**
- MOST WHITESPACE is insignificant in content
- coding convention: structure of html is a tree
- CSS：外观 JavaScript：内容  html：结构

## Comments 注释
<!--......sfsdeiorjfdlsfjs......-->
```
<!DOCTYPE_HTML>
<html>
    <html>
        information about the page
    </head>
    <body>
        page contents
    </body>
</html>
```

### Page title:<title> 
### Page meta data:<meta>
<meta name = " " content=" "/>
<meta http-equiv=" " content=""; charset=" ">
place within the head of the page
charset is significant
utf-8 for language other than English
  character coding and decoding

## Character Encoding 
### charset
定长编码集
ASCII
iso-8859(浏览器默认)
GB2312(chinese)
GBK(chinese)
BIG5(chinese)
变长编码集
Unicode
    UTF-8
    UTF_16
UCS
- 改变charset 看有何不同
### Block and inline elements
- Block 占据一整行
- Inline elements 多宽占多少

### Paragraph:<p>
### Line break:<br /> 换行 单标前元su
(按需使用)
### Headings:<h1>,<h2>...<h6>一级标题二级标题
### Sematic HTML - seperation of concerns
<h1>SUN YAt SEN University</h1>
What to do if it looks big? ——不能改变结构
### Horizontal rule:<hr>
### attributes
syntax: <element attribute1 =" " attribute2 = " " >content</element>
### Links:<a>
### Images:<img>
可以把链接和图片连在一起
### Phrase Elements:<em>,<strong>
### Unodered list:<ul>,<li>
### Ordered list:<ol>
list item 可以嵌套

bad:
<font face=" ">content</font>  字体 <b>加粗</b> <i>斜体</i> <u>下划线</u>

## CSS:<link> Cascading Style Sheets
<head>
    <style type="text/css" media="screen">
        
    </style>
</head>
//写下面的那种
<head>
    <link rel="stylesheet" type="text/css" href="" media="screen"/>
</head>

### Basic rules
selector{
    property 1: value 1;
    ..
    property n: value n;
}
commments: /*...*/
p{
    color: red;
     backgrond-color:yellow;
}

### colors
- 预定义 red yellow...
- rgb colors
- 16进制  eg.#FF8800

### font
- font family 可以给多个字体 serif monospace cursive 
- font weight(bold)
- font size (长度单位:pt:point,px:pixel,em:m-size)(description:large small...)(percentage)
- font style(italic)

把host 加进去172.18.160


