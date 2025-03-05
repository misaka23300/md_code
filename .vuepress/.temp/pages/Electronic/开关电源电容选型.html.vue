<template><div><h1 id="电容选型" tabindex="-1"><a class="header-anchor" href="#电容选型"><span>电容选型</span></a></h1>
<h3 id="举个例子" tabindex="-1"><a class="header-anchor" href="#举个例子"><span>举个例子</span></a></h3>
<ul>
<li>Bluck芯片: XL7025</li>
</ul>
<p>$$ C_{in} =\frac {I_{out-max} * V_{out}}
{ΔV_{in} * F_{sw}* V_{in-min}} $$</p>
<p>小容量靠近芯片 0.1μF</p>
<h2 id="c-in-输入电容" tabindex="-1"><a class="header-anchor" href="#c-in-输入电容"><span>$C_{in}$:输入电容</span></a></h2>
<ol>
<li>大容量电容与小容量电容并联</li>
<li>大容量越大越好</li>
<li>小容量0.1μF的MLCC电容</li>
<li>耐压 最小 大于1.5倍输入电压</li>
</ol>
<h3 id="输入大容量电容选型" tabindex="-1"><a class="header-anchor" href="#输入大容量电容选型"><span>输入大容量电容选型:</span></a></h3>
<ol>
<li>MLCC</li>
<li>钽电容
<blockquote>
<p>最高不用 如果用要三倍耐压。</p>
</blockquote>
</li>
<li>固态电容
<blockquote>
<p>耐压不高 最高35V</p>
</blockquote>
</li>
<li>高频低阻固态电容</li>
<li>普通电解电容</li>
</ol>
<h2 id="v-out-输出电容" tabindex="-1"><a class="header-anchor" href="#v-out-输出电容"><span>$V_{out}$:输出电容</span></a></h2>
<ol>
<li>最好大容量电容和小容量电容并联</li>
<li>小容量靠近芯片 0.1μF MLCC
<blockquote>
<p>COT架构输出电容不用MLCC 用的话串联0.2Ω电阻 容量至少10μF以上</p>
</blockquote>
</li>
</ol>
<h3 id="选型" tabindex="-1"><a class="header-anchor" href="#选型"><span>选型</span></a></h3>
<ol>
<li>MLCC</li>
<li>钽电容
<blockquote>
<p>两倍耐压</p>
</blockquote>
</li>
<li>固态电容</li>
<li>高频低阻电解电容</li>
<li>普通电解电容
<blockquote>
<p>不推荐</p>
</blockquote>
</li>
</ol>
<h2 id="自举电容" tabindex="-1"><a class="header-anchor" href="#自举电容"><span>自举电容</span></a></h2>
<p>0.01μF - 1μF X7R MLCC 电容</p>
<h2 id="电容实物图" tabindex="-1"><a class="header-anchor" href="#电容实物图"><span>电容实物图</span></a></h2>
<figure><img src="@source/Electronic/_res/104894717190454472.png" alt="电容" tabindex="0" loading="lazy"><figcaption>电容</figcaption></figure>
<ul>
<li>高频低阻电解电容 绿色黄色</li>
<li>黑色钽电容</li>
</ul>
<h2 id="备注" tabindex="-1"><a class="header-anchor" href="#备注"><span>备注</span></a></h2>
<ol>
<li>MLCC选封装大 耐压高的电容</li>
<li>两个电容并联之后容量会变小
<blockquote>
<p>解决方案 :封装改大 比如1210_25V_22μF</p>
</blockquote>
</li>
<li>加电后电容量会比标称的低
<blockquote>
<p>解决方案: 封装大 耐压高</p>
</blockquote>
</li>
<li>pcb两层防止电容防止啸叫</li>
<li>关于COT架构的BLUCK电路 $R_{ESR}$不能太小，太小会工作不正常。</li>
</ol>
</div></template>


