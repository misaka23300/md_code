<template><div><h1 id="硬盘供电" tabindex="-1"><a class="header-anchor" href="#硬盘供电"><span>硬盘供电</span></a></h1>
<ul>
<li>硬盘供电集聚12V ，5V 3.3V为一体，</li>
</ul>
<h2 id="改造要求" tabindex="-1"><a class="header-anchor" href="#改造要求"><span>改造要求</span></a></h2>
<pre><code>1. 防过压
2. 降低纹波 
3. 电压稳定
4. 增大持续时间
5. 防浪涌
</code></pre>
<h2 id="标准" tabindex="-1"><a class="header-anchor" href="#标准"><span>标准:</span></a></h2>
<pre><code>- 电压偏移在5%以内
- 电压偏移超过5%闪红灯
- 电压偏移10% 切断电源
- 电源持续时间在1s以上
- 防静电 
</code></pre>
<h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案:</span></a></h2>
<ul>
<li>纹波
<ul>
<li>高频电压尖峰非常适合用穿心电容去滤除，</li>
<li>开关纹波可以用LC滤波器滤除，</li>
<li>然而这样会降低瞬态响应能力，</li>
<li>可以在DCDC后，通过穿心电容与磁珠组成的π型滤波器后，送入LDO，</li>
<li>来在低纹波低噪声的同时保证瞬态响应</li>
</ul>
</li>
</ul>
<ol>
<li>LC滤波器</li>
<li>RC滤波器</li>
<li>共模电感</li>
<li>LDO</li>
</ol>
</div></template>


