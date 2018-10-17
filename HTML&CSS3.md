# HTML&CSS
## HTML5 elements
- article
- header:文章的头部内容
- hgroup
- footer
- section
- aside:网页边栏
    需要自己来定义样式
- detail: 可隐藏的细节内容
- summary: 细节内容摘要
- nav：网页的导航栏
- graphic & image
- svg 
- canvas
- video(MP4/WEBM) 
- source 
- track
- audio(MP3/OGG)

## CSS 3
- borders:
    + border-radius(圆角半径值) 
    + box-shadow
    + border-image
    + border-styles
    + ...
- Text effects:
    + text-shadow
    + radius
- fonts
    + @font-face{font-family:fontname; src:url();}
- shadow
    + box-shadow:X-offset Y-offset Blur Blur-offset color
    + inner shadows:inset
- Transforms
    + 当前元素在其所在位置移动
    + scale:放大
    + rotate：旋转
    + skew:扭曲
- Transitions
    + duration
    + timing-function:ease-out(平滑淡出)
    + transition-delay
- Animation
    + @-webkit-keyframes 'appear'{ }关键帧
- pseudo elements
    + :first-letter
    + p:first-line
    + h2:before(菜单项 前面的图标)
    + div:after
- pseudo class
    + :link：未被访问过的链接
    + :visited：用户访问过的链接
    + :hover：鼠标移过
    + :active：鼠标指向链接，按下左键未松开之前
    + :first-child
    + :lang(language)
- selectors
    + attribute selectors
    + pseudo class
    + structural
- media queries

## 布局
- float: 不在正常的文本流里面，会把其他内容挤开。下面的元素可能盖住，用clear
- position:
    + static：默认
    + fixed：相对浏览器而言
    + relative：相对于static的情况
    + absolute：相对于在HTML树上它的container
