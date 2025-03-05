<template><div><h1 id="电感" tabindex="-1"><a class="header-anchor" href="#电感"><span>电感</span></a></h1>
<h2 id="_2333" tabindex="-1"><a class="header-anchor" href="#_2333"><span>2333</span></a></h2>
<ul>
<li>电感是由线圈组成,将电流转换为磁场储能.<br>
当电感的电流要下降时,根据楞次定律,阻止电流减小,会感应电压,</li>
<li>电感的电流不能突变.</li>
</ul>
<h2 id="电感的充电过程" tabindex="-1"><a class="header-anchor" href="#电感的充电过程"><span>电感的充电过程:</span></a></h2>
<ul>
<li>如果把电感看做电阻的话,电阻两端的电压为电源电压,</li>
<li>但是电感是由线圈组成,会把电流转换成磁能,阻碍电流变大,</li>
<li>在充电过程中,电流不会一下子变为最高值,而是呈上升趋势.
<img src="https://img-blog.csdnimg.cn/20200409152733145.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQ1NzQ4NDc1,size_16,color_FFFFFF,t_70" alt="电感电流与时间曲线" loading="lazy"></li>
</ul>
<h2 id="感应电压" tabindex="-1"><a class="header-anchor" href="#感应电压"><span>感应电压</span></a></h2>
<p><strong>Ul =L * li  /  lt</strong><br>
<strong>感应电压 =  电感量 × 变化的电流 ÷ 变化的时间</strong></p>
<h2 id="电感对电压的放大" tabindex="-1"><a class="header-anchor" href="#电感对电压的放大"><span>电感对电压的放大</span></a></h2>
<ul>
<li>LR电路原理图
<img src="@source/Electronic/pciture/电感放大电压.png" alt="" loading="lazy"></li>
<li>开关闭合,电流从正极流出,经过电感直接流向负极,此时电感的电流是线性上升的.
<img src="@source/Electronic/pciture/电感放大电压-1.png" alt="by 工科男孙老师" loading="lazy"></li>
<li>2.2微秒之后,电感上的电流会达到2.4A</li>
</ul>
<blockquote>
<p>I = U/ L * t = 5V / 4.7uH *2.2u  ≈ 2.4A</p>
</blockquote>
<ul>
<li>此时断开开关,由于<code v-pre>电感的电流不能突变</code>,电流会仍然维持在2.4A,这个电流会通过负载流向电源负极.</li>
<li>根据欧姆定律,电阻的电压为12V.</li>
</ul>
<blockquote>
<p><strong>U = I * R = 5Ω * 2.4A = 12V</strong></p>
</blockquote>
<ul>
<li>当5V电源给电感充满电之后,电源与电感串联,给负载供电,那么 负载两端的电压为5V + 4.7uH * 2.4A / 2.2u ≈ 10V</li>
</ul>
<h2 id="电源直接给电感充电电路的充电时间" tabindex="-1"><a class="header-anchor" href="#电源直接给电感充电电路的充电时间"><span>电源直接给电感充电电路的充电时间</span></a></h2>
<ul>
<li><img src="@source/Electronic/pciture/电源直接给电感充电.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></li>
</ul>
<h2 id="应用-三极管控制继电器电路中防止三极管被感应的电压击穿" tabindex="-1"><a class="header-anchor" href="#应用-三极管控制继电器电路中防止三极管被感应的电压击穿"><span>应用:三极管控制继电器电路中防止三极管被感应的电压击穿</span></a></h2>
</div></template>


