<template><div><h1 id="噪声" tabindex="-1"><a class="header-anchor" href="#噪声"><span>噪声</span></a></h1>
<p>开关电源必须设置输入滤波器，防止电网的噪声干扰自己，防止干扰进入电网。</p>
<h2 id="噪声的类型" tabindex="-1"><a class="header-anchor" href="#噪声的类型"><span>噪声的类型</span></a></h2>
<ol>
<li>差模噪声</li>
</ol>
<ul>
<li>差模噪声的电流环路在电路的内部，比如电源转换器电路: 噪声从输入电源的一端流入转换器电路，然后从转换器电路流向电源的另一端，形成一个电流环路，在这一去一回的路径产生的噪声叫作差模噪声。
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-17-51-768_net.gsantner.markor.png" alt="差模噪声" loading="lazy"></li>
</ul>
<ol start="2">
<li>共模噪声</li>
</ol>
<ul>
<li>电源转换电路安装在连接地线的机箱底盘上，在电路板和机箱外壳之间，以及机箱外壳与参考地之间，都存在分布电容。</li>
<li>电源转换电路产生的噪声电流，可以通过分布电容流向机箱的地线，并流回电源端，形成一个大的电流环路，这些在环路传导的噪声被称为共模噪声。
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-25-37-930_net.gsantner.markor.png" alt="共模噪声" loading="lazy"></li>
</ul>
<h2 id="传播方式" tabindex="-1"><a class="header-anchor" href="#传播方式"><span>传播方式</span></a></h2>
<p>传导
辐射</p>
<h2 id="滤波" tabindex="-1"><a class="header-anchor" href="#滤波"><span>滤波</span></a></h2>
<p>应对开关电源的关键是: 区分差模和共模噪声，分别进行处理。通常使用LC滤波器
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-38-13-742_net.gsantner.markor.png" alt="连接图" loading="lazy"></p>
<h3 id="差模噪声滤波器" tabindex="-1"><a class="header-anchor" href="#差模噪声滤波器"><span>差模噪声滤波器</span></a></h3>
<p>是由电感和电容组成的低通滤波器，她连接到开关电源的输入端。
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-33-22-875_tv.danmaku.bili.png" alt="LC滤波器" loading="lazy"></p>
<h3 id="在共模噪声滤波器" tabindex="-1"><a class="header-anchor" href="#在共模噪声滤波器"><span>在共模噪声滤波器</span></a></h3>
<p>共模电感也叫共模扼流圈，是关键元件。她是在共模噪声下起作用的电感，扼流圈的一端接输入电源，另一端接入开关电源电路，或者连接一个差模滤波器。
共模电感可以连接X电容或y电容构成共模LC滤波器
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-31-52-494_tv.danmaku.bili.png" alt="常用滤波器" loading="lazy"></p>
<h2 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h2>
<p>实际应用中，共模滤波器和差模滤波器(如π型滤波器)串联使用，分别滤除共模和差模噪声。</p>
<blockquote>
<p>举个例子</p>
</blockquote>
<ul>
<li>只使用差模滤波器不能降低50MHz以上的高频噪声，
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-45-42-423_tv.danmaku.bili.png" alt="eg1" loading="lazy"></li>
<li>当同时使用共模滤波器时，才可将50MHz以上的大部分噪声滤除
<img src="@source/Electronic/_res/Screenshot_2024-06-24-00-47-32-825_tv.danmaku.bili.png" alt="eg2" loading="lazy"></li>
</ul>
<h2 id="共模电感的主要指标" tabindex="-1"><a class="header-anchor" href="#共模电感的主要指标"><span>共模电感的主要指标</span></a></h2>
<ol>
<li>共模阻抗
通常指100Mhz频率下的感抗，共模阻抗越大，对噪声的抑制效果越好。</li>
<li>直流电阻</li>
<li>额定电流</li>
<li>额定电压</li>
<li>两个线圈之间的隔离电阻
10MΩ以上。</li>
</ol>
</div></template>


