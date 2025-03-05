<template><div><h1 id="adc" tabindex="-1"><a class="header-anchor" href="#adc"><span>ADC</span></a></h1>
<p><a href="https://baike.baidu.com/item/%E7%A4%BA%E6%B3%A2%E5%99%A8%E5%B8%A6%E5%AE%BD/7769464" target="_blank" rel="noopener noreferrer">参考链接</a></p>
<h2 id="采样" tabindex="-1"><a class="header-anchor" href="#采样"><span>采样</span></a></h2>
<ul>
<li>单位 SPS (sample per second)，
每秒采样次数，是衡量模数转换(ADC)时<strong>采样速率</strong>的单位。</li>
<li><strong>采样率</strong>定义为对输入信号的采样频率，采样率不仅表示模数转换器的转换速度，同时也决定了系统可处理信号的<strong>带宽范围</strong>。</li>
</ul>
<h2 id="带宽" tabindex="-1"><a class="header-anchor" href="#带宽"><span>带宽</span></a></h2>
<p>所有示波器都表现出在较高频率处滚降的<strong>低通频率响应</strong>。</p>
<ul>
<li>
<p>大多数带宽参数在<strong>1 GHz及以下</strong>的示波器通常表现为<strong>高斯响应</strong>，
即具备约从-3 dB频率的三分之一处开始缓慢滚降的特性。
<img src="@source/Electronic/_res/00a82701a11750567bec2ca6.jpeg" alt="低通频率响应" loading="lazy"></p>
</li>
<li>
<p>那些带宽规格<strong>超过1 GHz</strong>的示波器通常则具备<strong>最大平坦频率响应</strong>，
这种频响通常表现为带内响应较平缓，而在约-3 dB频率处滚降较陡。
<img src="@source/Electronic/_res/d5462bfa00e993d19e5146da.jpeg" alt="频率响应" loading="lazy"></p>
</li>
</ul>
<p>示波器的<strong>高斯响应</strong>和<strong>最大平坦频率响应</strong>这两种频率响应各有各的优缺点。</p>
<ul>
<li>
<p>具备<strong>最大平坦频响</strong>的示波器比具备<strong>高斯频响</strong>的示波器对带内信号的衰减较小，也就是说前者对带内信号的测量更精确。</p>
</li>
<li>
<p>但具备<strong>高斯频响</strong>的示波器比具备<strong>最大平坦频响</strong>的示波器对带外信号的衰减小，也就是说在同样的带宽规格下，具备高斯频响的示波器通常具备更快的上升时间。</p>
</li>
</ul>
<p>然而，有时对带外信号的衰减大有助于消除那些根据<strong>奈奎斯特标准</strong>(fMAX＜fS)可能造成混迭的高频成分。</p>
<blockquote>
<p>关于 奈奎斯特采样理论更深入的探讨，请参看 安捷伦应用笔记1587(AgilentApplication Note 1587) 。</p>
</blockquote>
<p>不论的示波器具备<strong>高斯频响</strong>、<strong>最大平坦频响</strong>还是介于二者之间，
都将<strong>输入信号通过示波器后衰减3 dB时的最低频率</strong>视为该示波器的带宽。
示波器的带宽和频响可以利用正弦波信号发生器<strong>扫频</strong>测量得到。
信号在示波器-3dB频率处的衰减转换后可表示为约-30%的幅度误差。
因此，不能奢望对那些主要的频率成分接近示波器带宽的信号进行精确测量。</p>
<h2 id="上升时间" tabindex="-1"><a class="header-anchor" href="#上升时间"><span>上升时间</span></a></h2>
<h2 id="存储深度" tabindex="-1"><a class="header-anchor" href="#存储深度"><span>存储深度</span></a></h2>
</div></template>


