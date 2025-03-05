<template><div><h1 id="电感" tabindex="-1"><a class="header-anchor" href="#电感"><span>电感</span></a></h1>
<h3 id="buck公式" tabindex="-1"><a class="header-anchor" href="#buck公式"><span>BUCK公式:</span></a></h3>
<p>$$L = \frac{V_{out} × (V_{in} - V_{out})}
{V_{in} × △I_L × f_{OSC}}$$</p>
<blockquote>
<p>△$I_L $ = (0.2～0.4)$I_{max}$，是电感的纹波电流。
$I_{L(max)} = I_{load} + \frac{△I_L}{2}$</p>
</blockquote>
<ul>
<li>举个例子
<ul>
<li>12V -&gt; 5V</li>
<li>12 × (12 - 5)  / 5 × 0.2 × f
= 84 / f</li>
</ul>
</li>
</ul>
<p>频率越大 电感量越小</p>
</div></template>


