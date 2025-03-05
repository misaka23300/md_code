<template><div><h1 id="python-生成二维码" tabindex="-1"><a class="header-anchor" href="#python-生成二维码"><span>Python 生成二维码</span></a></h1>
<h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3>
<p>这里需要用到的第三方库为<code v-pre>qrcode</code>,让我们通过<code v-pre>pip</code>来安装它吧.</p>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">pip install </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">'qrcode[pil]'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p><a href="https://pypi.org/project/qrcode/" target="_blank" rel="noopener noreferrer">PyPI文档链接</a></p>
</blockquote>
<p>安装<code v-pre>qrcode</code>为标准安装,而安装<code v-pre>qrcode[qil]</code>可以获得更多的图像功能.</p>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h3>
<h4 id="使用命令行生成二维码" tabindex="-1"><a class="header-anchor" href="#使用命令行生成二维码"><span>使用命令行生成二维码</span></a></h4>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">qr </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Ciallo～(∠・ω&#x3C; )⌒☆"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> > yozusoft.png</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>您猜怎么着?</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>PS C:\Users\laffe> qr</span></span>
<span class="line"><span>Traceback (most recent call last):</span></span>
<span class="line"><span>  File "&#x3C;frozen runpy>", line 198, in _run_module_as_main</span></span>
<span class="line"><span>  File "&#x3C;frozen runpy>", line 88, in _run_code</span></span>
<span class="line"><span>  File "C:\Users\laffe\AppData\Local\Programs\Python\Python312\Scripts\qr.exe\__main__.py", line 7, in &#x3C;module></span></span>
<span class="line"><span>  File "C:\Users\laffe\AppData\Local\Programs\Python\Python312\Lib\site-packages\qrcode\console_scripts.py", line 43, in main</span></span>
<span class="line"><span>    from pkg_resources import get_distribution</span></span>
<span class="line"><span>ModuleNotFoundError: No module named 'pkg_resources'</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么我们通过使用模块来生成二维码吧</p>
<h4 id="简单的用法" tabindex="-1"><a class="header-anchor" href="#简单的用法"><span>简单的用法</span></a></h4>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> qrcode</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">img </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> qrcode.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">make</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Ciallo～(∠・ω&#x3C; )⌒☆'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(img)  </span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># qrcode.image.pil.PilImage</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">img.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">save</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"yozusoft.png"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h4>
<p>我们可以使用<code v-pre>QRCode</code>类来控制更多的功能.</p>
</div></template>


