<h1>PiePie</h1>
<h3>让极坐标在Web上跳跃 ……</h3>
<h3>When polar coordinate system is dancing on webpages ... </h3>
<img src="https://austinjiangh.github.io/PiePie/images/PiePie.png" alt="PiePie" width="200" height="200">
<h2>目录 Contents</h2>
<ul>
    <li><a href="#innovation">灵感（简介）Innovation (Description)</a>
        <ol>
            <li><a href="#coordinate">坐标系统</a></li>
            <li><a href="#pie">Pie</a></li>
        </ol>
    </li>
</ul>
<h2 id="innovation">灵感</h2>
<p>先来看看这个包能做吧<a href="https://austinjiangh.github.io/PiePie/" target="_blank">点击这里</a>查看示例。</p>
<p>当绚丽的色彩划出优雅的曲线，我相信您对PiePie的好奇又增加了一番，那么PiePie究竟做了什么？</p>
<h3 id="coordinate">1. 坐标系统</h3>
<p>PiePie的坐标系统可以说是PiePie最大的创意！长久以来呢，Web的布局和定位都是类似于BootStrap、Materialize这样的行（row）列（column）布局，从数学的角度看，可以理解为使用<em><a href="https://baike.baidu.com/item/%E7%9B%B4%E8%A7%92%E5%9D%90%E6%A0%87%E7%B3%BB/1835293" target="_blank">直角坐标系</a>（<a href="https://en.wikipedia.org/wiki/Cartesian_coordinate_system" target="_blank">Cartesian coordinate system</a>）</em>进行定位和布局，直角坐标的优点在于显示方形和横竖为主的直线，但是对于圆形的曲线运动就显得很蹩脚。但是在数学中，二维平面的坐标系还有另外一种<em><a href="https://baike.baidu.com/item/%E6%9E%81%E5%9D%90%E6%A0%87%E7%B3%BB" target="_blank">极坐标系</a>（<a href="https://en.wikipedia.org/wiki/Polar_coordinate_system" target="_blank">polar coordinate system</a>）</em>，极坐标系能够更简单的描绘一些曲线，如圆形和螺旋线。这样很自然就会想到用极坐标系来进行Web的定位和布局。于是在驾照科目二考试等了一天，看了一整天的方向盘和车轮后，我决定试试看（没错！我就是在吐槽科目二考试人太多了，排队排到天荒地老！不过这确实是直接的原因 =-=）</p>
<p>极坐标系的构成是<ol>
    <li>极点</li>
    <li>极轴</li>
    <li>极径</li>
</ol>一个点的坐标由极径的长度和与极轴的夹角确定。在数学中极轴一般是一条向右的射线，逆时针为角度的正方向，当我在引入Web的时候，我是用的极轴是<em>向上的射线</em>，角度的正方向为<em>顺时针</em>（为什么要这样？因为这样和钟表一样啊，好记嘛！）</p>所以在PiePie中进行定位和布局的模式不再是行列，而是极点和极轴，和主流的框架相同PiePie也使用元素的类名（class）进行布局。极点的类名为<code>pole</code>，极轴的类名会多一点，正如前面所说，极轴需要一个长度和一个角度来定义，在类名中就需要两个类名，如<code>ray-30 5rem</code>，第一个部分是角度（顺时针，从竖直向上方向计算），你可以在<code>ray-</code>后加上<code>0</code>到<code>359</code>任意的整数，来表示极轴的角度，或者你不想计算PiePie还有正如前面所讲的时钟一样的角度，如<code>axis-4 6rem</code>指的就是钟表时针4点钟的方向，你可以在<code>axis-</code>后加上<code>0</code>到<code>11</code>来表示方向（注意没有<code>12</code>，它的位置由<code>0</code>代替），第二个参数嘛很明显就是极轴长度啦，目前只能使用<code>px</code>和<code>rem</code>作为单位，并且数值只能是整数，为了移动端的需要，以<code>rem</code>作为单位的轴将在移动设备上被缩小1.6666倍，当然你可以通过更改PiePie的设定来自定义数值（设为1的话当然就是不缩放啦）！在这之后我们已经确定了极点和其他点的位置，但是这些都只是一个没有大小的点（长宽都是<code>0px</code>）。好啦！PiePie坐标系统的概念就是这样，具体使用和<em>彩蛋</em>（什么！还有彩蛋！）会在文档里详细解释。
<h3 id="pie">2. Pie</h3>
<p>Pie是什么？是圆圆的点心呀，在PiePie里Pie指的是圆圈。上一部分说到坐标的所有位置都是没有大小的点，那么我怎么显示出来东西呢，当然是在这个坐标框架里加入一些新的东西啦。因为使用的是极坐标，所以方形出现在这里就是乱入，最好的当然是使用圆形，在PiePie里已经设计好了各种圆形，他们使用类名<code>pie-3rem</code>创建，你只要在<code>pie-</code>后加上一个半径就可以了，半径的写法为<em>整数</em>加<em>单位</em>，单位在这里依旧使用<code>px</code>和<code>rem</code>，其缩放规则同极径。需要注意的是pie本身是没有颜色没有阴影的，它的颜色和阴影需要使用类名加入，在这里我借用了<a href="http://www.materializecss.cn/index.html"  target="_blank">Materialize.css</a>的<a href="http://www.materializecss.cn/color.html"  target="_blank">颜色规则</a>和<a href="http://www.materializecss.cn/shadow.html" target="_blank">阴影规则</a>，你需要做的就是添加相应的类名，如<code>pie-5rem cyan accent-2 z-depth-2</code>。更多内容请参见文档~</p>
