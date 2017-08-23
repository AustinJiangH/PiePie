<h1>PiePie</h1>
<h3>让极坐标在Web上跳跃 ……</h3>
<h3>When polar coordinate system is dancing on webpages ... </h3>
<img src="https://austinjiangh.github.io/PiePie/images/PiePie.png" alt="PiePie" width="200" height="200">
<h2>目录 Contents</h2>
<ul>
    <li><a href="#innovation">灵感（简介）Innovation (Description)</a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
<h2 id="innovation">灵感</h2>
<p>先来看看这个包能做吧<a href="https://austinjiangh.github.io/PiePie/" target="_blank">点击这里</a>查看示例。</p>
<p>当绚丽的色彩划出优雅的曲线，我相信您对PiePie的好奇又增加了一番，那么PiePie究竟做了什么？</p>
<p>长久以来呢，Web的布局和定位都是类似于BootStrap、Materialize这样的行（row）列（column）布局，从数学的角度看，可以理解为使用<em><a href="https://baike.baidu.com/item/%E7%9B%B4%E8%A7%92%E5%9D%90%E6%A0%87%E7%B3%BB/1835293" target="_blank">直角坐标系</a>（<a href="https://en.wikipedia.org/wiki/Cartesian_coordinate_system" target="_blank">Cartesian coordinate system</a>）</em>进行定位和布局，直角坐标的优点在于显示方形和横竖为主的直线，但是对于圆形的曲线运动就显得很蹩脚。但是在数学中，二维平面的坐标系还有另外一种<em><a href="https://baike.baidu.com/item/%E6%9E%81%E5%9D%90%E6%A0%87%E7%B3%BB" target="_blank">极坐标系</a>（<a href="https://en.wikipedia.org/wiki/Polar_coordinate_system" target="_blank">polar coordinate system</a>）</em>，极坐标系能够更简单的描绘一些曲线，如圆形和螺旋线。这样很自然就会想到用极坐标系来进行Web的定位和布局。于是在驾照科目二考试等了一天，看了一整天的方向盘和车轮后，我决定试试看（没错！我就是在吐槽科目二考试人太多了，排队排到天荒地老！不过这确实是直接的原因 =-=）</p>
<p>极坐标系的构成是<ol>
    <li>极点</li>
    <li>极轴</li>
    <li>极径</li>
</ol>一个点的坐标由极径的长度和与极轴的夹角确定。在数学中极轴一般是一条向右的射线，逆时针为角度的正方向，当我在引入Web的时候，我是用的极轴是<em>向上的射线</em>，角度的正方向为<em>顺时针</em>（为什么要这样？因为这样和钟表一样啊，好记嘛！）</p>