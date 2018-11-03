# Intermediate JavaScript
## Part I
### Nested Function
函数里面嵌套函数，可以返回函数
**IIFE**：立即调用的函数表达式，被定义了就被调用了。
变量提升

- structral programming 结构化编程
- object oriented programming 面向对象：继承 封装 多态 （本质：数据和操作数据的方法整合在一起形成对象）
- everything in JS is an object（只有数字字面表达和undefined不是对象）

### object literal
访问成员：
- 点操作符
- 中括号
- 安全访问： ||‘未知’

### Use of Properties
属性可以增加和移除

### array literal
数组是一个对象
**JS中对象的使用传递的都是引用，没有传值的方式**

### function也是对象
定义函数：
    - named function 会展开成第三种
    - function expression
    - function expression with named function
function hoisting：函数对象定义会被提到前面

### Duration
lexical scope

### arguments，caller，callee
- 局部变量 arguments 不定长参数表
- length属性：形参表长度
- arguments.callee.caller调用函数的函数

### 4 kinds of function invoking
- 普通函数 
- 方法调用
- 构造子
- 应用调用（call apply）

#### 构造子 Constructor
所有的函数都可以是构造子
使用new去调用函数，new时会执行函数体（this指向不一样，若没有return语句，返回值不一样）
- .instanceof
- .constructor

普通调用this指向顶层，方法调用this指向对象本身，构造子this指向构造的对象，应用模式this指向第一个参数

## Closure
函数和函数所能访问的函数体外部局部变量构成的组合
作用：封装

### that for this

## Prototype
_proto_，缺属性在里面找，指向构造子的prototype
