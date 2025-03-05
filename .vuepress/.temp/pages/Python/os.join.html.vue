<template><div><h1 id="python-os-path-join" tabindex="-1"><a class="header-anchor" href="#python-os-path-join"><span>Python <code v-pre>os.path.join()</code></span></a></h1>
<p><code v-pre>os.path.join(root, filename)</code> 是 Python 中用于路径拼接的函数，属于 <code v-pre>os</code> 模块。它将不同部分的路径组合起来，生成一个完整的文件路径。以下是其功能的中文解释：</p>
<ul>
<li><code v-pre>root</code>：代表目录的路径，通常是文件夹的路径。</li>
<li><code v-pre>filename</code>：代表文件名，或文件路径中的另一个部分。</li>
<li><code v-pre>os.path.join</code>：将多个路径组件组合成一个完整的路径，自动处理路径分隔符，确保在不同操作系统中路径的格式是正确的（比如 Windows 使用 <code v-pre>\</code> 作为分隔符，而 Unix 系统使用 <code v-pre>/</code>）。</li>
</ul>
<p>例如：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">path </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os.path.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">join</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'/home/user'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'file.txt'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(path)  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 输出: /home/user/file.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Windows 中，输出会是：<code v-pre>\home\user\file.txt</code></p>
</div></template>


