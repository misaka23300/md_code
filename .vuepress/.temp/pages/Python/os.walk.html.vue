<template><div><h1 id="python-os-walk" tabindex="-1"><a class="header-anchor" href="#python-os-walk"><span>Python <code v-pre>os.walk</code></span></a></h1>
<p><code v-pre>os.walk</code> 是 Python 中 <code v-pre>os</code> 模块提供的一个函数，用于生成目录树下的所有文件名。在遍历指定目录及其子目录时，<code v-pre>os.walk</code> 会返回该目录中的文件名、子目录名以及当前目录路径。</p>
<h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h3>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> dirpath, dirnames, filenames </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> os.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">walk</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'your_directory'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # dirpath: 当前遍历到的目录路径</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # dirnames: 当前目录下的子目录列表</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # filenames: 当前目录下的文件列表</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Current Path: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">dirpath</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Directories: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">dirnames</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"Files: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">{</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">filenames</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">    print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<ul>
<li><strong><code v-pre>dirpath</code></strong>：当前遍历到的目录路径（字符串）。</li>
<li><strong><code v-pre>dirnames</code></strong>：当前目录中的子目录列表（列表形式）。</li>
<li><strong><code v-pre>filenames</code></strong>：当前目录中的文件列表（列表形式）。</li>
</ul>
<h3 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h3>
<p>假设有以下目录结构：</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>/your_directory</span></span>
<span class="line"><span>    /subdir1</span></span>
<span class="line"><span>        file1.txt</span></span>
<span class="line"><span>    /subdir2</span></span>
<span class="line"><span>        file2.txt</span></span>
<span class="line"><span>    file3.txt</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用 <code v-pre>os.walk</code> 遍历 <code v-pre>your_directory</code> 目录时，输出可能如下：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Current Path: </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">your_directory</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Directories: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'subdir1'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'subdir2'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Files: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'file3.txt'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Current Path: </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">your_directory</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">subdir1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Directories: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Files: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'file1.txt'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Current Path: </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">your_directory</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">/</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">subdir2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Directories: []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Files: [</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'file2.txt'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">]</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="os-walk-的特点" tabindex="-1"><a class="header-anchor" href="#os-walk-的特点"><span><code v-pre>os.walk</code> 的特点</span></a></h3>
<ol>
<li><strong>递归遍历</strong>：<code v-pre>os.walk</code> 会递归遍历目录树，包括所有子目录。</li>
<li><strong>生成器</strong>：<code v-pre>os.walk</code> 是一个生成器，按需生成结果，可以节省内存。</li>
<li><strong>深度优先</strong>：<code v-pre>os.walk</code> 默认是按深度优先顺序（先子目录后父目录）遍历。</li>
</ol>
<h3 id="实际应用" tabindex="-1"><a class="header-anchor" href="#实际应用"><span>实际应用</span></a></h3>
<p><code v-pre>os.walk</code> 通常用于批量处理文件系统中的文件，例如：</p>
<ul>
<li>查找特定类型的文件。</li>
<li>计算目录中所有文件的大小。</li>
<li>执行批量重命名操作等。</li>
</ul>
<p>通过结合 <code v-pre>os.walk</code> 和其他文件操作函数，可以高效地处理复杂的文件操作任务。</p>
</div></template>


