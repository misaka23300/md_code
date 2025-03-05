<template><div><h1 id="反激电源" tabindex="-1"><a class="header-anchor" href="#反激电源"><span>反激电源</span></a></h1>
<p><a href="https://blog.csdn.net/kdzcq/article/details/126568586" target="_blank" rel="noopener noreferrer">参考链接</a>
<a href="https://img-blog.csdnimg.cn/img_convert/4a2d4abd056d8fd943d06e875bf4cfe0.png" target="_blank" rel="noopener noreferrer">BOOST电路FLYBACK（反激电路）和SEPIC电路</a></p>
<h2 id="基础反激电源原理图" tabindex="-1"><a class="header-anchor" href="#基础反激电源原理图"><span>基础反激电源原理图</span></a></h2>
<figure><img src="https://img-blog.csdnimg.cn/img_convert/0a0c9af17091aafae4f02e7ea175f3be.png" alt="csdn" tabindex="0" loading="lazy"><figcaption>csdn</figcaption></figure>
<h2 id="工作原理" tabindex="-1"><a class="header-anchor" href="#工作原理"><span>工作原理</span></a></h2>
<ul>
<li>
<p>变压器的一次绕组和二次绕组的极性相反，这大概也是Flyback名字的由来：</p>
</li>
<li>
<p>当开关管导通时，变压器原边电感电流开始上升，此时由于次级同名端的关系，输出二极管截止，变压器储存能量，负载由输出电容提供能量。</p>
</li>
<li>
<p>当开关管截止时，变压器原边电感感应电压反向，此时输出二极管导通，变压器中的能量经由输出二极管向负载供电，同时对电容充电，补充刚刚损失的能量。</p>
</li>
<li>
<p>在反激电路中，输出变压器T有实现电隔离和电压匹配，储存能量的作用，前者是变压器的属性，后者是电感的属性，因此有人称其为电感变压器，有时我也叫他异步电感。</p>
</li>
</ul>
<h2 id="flyback的工作模式" tabindex="-1"><a class="header-anchor" href="#flyback的工作模式"><span>Flyback的工作模式:</span></a></h2>
<blockquote>
<p>DCM(discontinuous current mode)
CCM(continuous current mode)</p>
</blockquote>
<ul>
<li>根据次级电流是否有降到零，反激可以分为DCM和CCM两种工作模式。两种模式有其各自的特点。下面两种工作模式时的波形(理想波形)。
1.DCM <img src="https://img-blog.csdnimg.cn/img_convert/76246d664db7a40fb4660f51100b7740.png" alt="DCM" loading="lazy">
2.CCM <img src="https://img-blog.csdnimg.cn/img_convert/b7db762487d9f8cba413b170b8520a02.png" alt="CCM" loading="lazy"></li>
</ul>
<blockquote>
<p>这里有好几个参数，</p>
</blockquote>
<ul>
<li>U<sub>g</sub> : 信号</li>
<li>U<sub>T</sub>:</li>
<li>U<sub>L2</sub>: 次级变压器电压</li>
<li>I<sub>L1</sub>: 变压器电流</li>
<li>I<sub>L2</sub>: 次级变压器电流</li>
</ul>
<p>工作模式：</p>
<ol>
<li>电压电流波形</li>
<li>用电感变压器模型来标示工作工作过程；也可以原副边分开讨论，用电压源来代替中间的转换。
<img src="https://img-blog.csdnimg.cn/img_convert/4a2d4abd056d8fd943d06e875bf4cfe0.png" alt=" " loading="lazy"></li>
</ol>
<h2 id="元器件选型" tabindex="-1"><a class="header-anchor" href="#元器件选型"><span>元器件选型</span></a></h2>
<ul>
<li>耦合电感 / 高频变压器</li>
<li>控制芯片: LM5001 TPS40210 UC3843</li>
<li>二极管: STPS160A  BA159</li>
</ul>
<h2 id="隔离" tabindex="-1"><a class="header-anchor" href="#隔离"><span>隔离:</span></a></h2>
<ol>
<li>光电耦合器</li>
<li>辅助绕组
<img src="@source/Electronic/_res/Screenshot_2024-06-22-16-04-19-986_tv.danmaku.bili.png" alt=" " loading="lazy"></li>
</ol>
</div></template>


