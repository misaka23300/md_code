<template><div><h1 id="输出" tabindex="-1"><a class="header-anchor" href="#输出"><span>输出</span></a></h1>
<p>GPIO有三种输出状态:<strong>高电平,低电平,高阻态.</strong>
<img src="@source/Electronic/pciture/GPIO内部示意图.png" alt="" loading="lazy">
<img src="@source/Electronic/pciture/GPIO状态.png" alt="" loading="lazy"></p>
<h2 id="推挽输出" tabindex="-1"><a class="header-anchor" href="#推挽输出"><span>推挽输出</span></a></h2>
<p>GPIO为高电平或低电平.<br>
推是高电平把电流推出去,低电平时电流流进来,为挽.</p>
<h2 id="开漏输出" tabindex="-1"><a class="header-anchor" href="#开漏输出"><span>开漏输出</span></a></h2>
<p>GPIO为低电平或高阻态.
高阻态配置上拉电阻可看做高电平.
<img src="@source/Electronic/pciture/开漏.png" alt="" loading="lazy">
当GPIO为高阻态时,VCC通过电阻到输出,输出高电平.<br>
当GPIO为低电平时,输出为低电平.</p>
<h3 id="应用" tabindex="-1"><a class="header-anchor" href="#应用"><span>应用</span></a></h3>
<ol>
<li>
<p>改变高电平的电压.<br>
GPIO的电平电压与接收方电平不一样时,<br>
上拉电阻的VCC为接收方支持的电压,<br>
当GPIO为高阻态时就可以输出接收方可以接受的电压.</p>
</li>
<li>
<p>两个GPIO控制一个输入.</p>
</li>
</ol>
</div></template>


