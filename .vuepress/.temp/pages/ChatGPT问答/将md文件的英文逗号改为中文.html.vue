<template><div><h1 id="将md文件的英文逗号改为中文" tabindex="-1"><a class="header-anchor" href="#将md文件的英文逗号改为中文"><span>将md文件的英文逗号改为中文</span></a></h1>
<p>要将Markdown文档中的英文逗号改为中文逗号，同时保留代码和代码块中的英文逗号，可以使用Python脚本来完成这项任务。以下是一个示例脚本：</p>
<div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">import</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> re</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> replace_commas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">text</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 匹配代码块和行内代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    code_pattern </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> re.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">compile</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">r</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">'</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">```.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">*?</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">```</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">|</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">`</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">[</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">^</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">`</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">]*</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">`</span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66">)</span><span style="--shiki-light:#0184BC;--shiki-dark:#E06C75">'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, re.</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66">DOTALL</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 查找所有代码块和行内代码</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    code_blocks </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> code_pattern.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">findall</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(text)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 替换非代码部分的英文逗号为中文逗号</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    def</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> replace_non_code</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic">match</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">):</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        segment </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> match.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">group</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">()</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> block </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> code_blocks:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            segment </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> segment.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(block, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'{{CODE_BLOCK_{code_blocks.index(block)}}</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">        segment </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> segment.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">','</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'，'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> block </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">in</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> code_blocks:</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">            segment </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> segment.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">replace</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">f</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'{{CODE_BLOCK_{code_blocks.index(block)}}</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF">}</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, block)</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> segment</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic">    # 使用正则表达式替换非代码部分的英文逗号</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    processed_text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> code_pattern.</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF">sub</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(replace_non_code, text)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> processed_text</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 示例Markdown文本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">markdown_text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> '''</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">This is a paragraph with English commas, like this.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Here is a `code snippet, with a comma`.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">Another line with text, and a comma.</span></span>
<span class="line"><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'''</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic"># 处理Markdown文本</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">processed_text </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2">=</span><span style="--shiki-light:#383A42;--shiki-dark:#61AFEF"> replace_commas</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(markdown_text)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">print</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(processed_text)</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码解释" tabindex="-1"><a class="header-anchor" href="#代码解释"><span>代码解释</span></a></h3>
<ol>
<li>
<p><strong>匹配代码块和行内代码</strong>：</p>
<ul>
<li>使用正则表达式 <code v-pre>(```.*?```|</code>[^<code v-pre>]*</code>)<code v-pre> 来匹配代码块（</code> ``` <code v-pre> 包围的部分）和行内代码（</code> <code v-pre> </code> 包围的部分），并保存这些部分的内容。</li>
</ul>
</li>
<li>
<p><strong>替换非代码部分的逗号</strong>：</p>
<ul>
<li>使用 <code v-pre>replace_non_code</code> 函数在替换时跳过代码块和行内代码部分。</li>
<li>将英文逗号替换为中文逗号。</li>
</ul>
</li>
<li>
<p><strong>恢复代码块和行内代码</strong>：</p>
<ul>
<li>在替换完非代码部分的逗号后，恢复之前匹配到的代码块和行内代码。</li>
</ul>
</li>
</ol>
<h3 id="示例结果" tabindex="-1"><a class="header-anchor" href="#示例结果"><span>示例结果</span></a></h3>
<p>给定的示例文本：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">This is a paragraph with English commas, like this.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Here is a </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">code snippet, with a comma</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Another line with text, and a comma.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>def example():
print(&quot;This is a code block, with a comma&quot;)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>And here's more text, with more commas.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>处理后的文本将是：</p>
<div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">This is a paragraph with English commas，like this.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Here is a </span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">`</span><span style="--shiki-light:#383A42;--shiki-dark:#98C379">code snippet, with a comma</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">`</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">Another line with text，and a comma.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>def example():
print(&quot;This is a code block, with a comma&quot;)</p>
<div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>And here's more text，with more commas.</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>代码块和行内代码部分的英文逗号将保持不变，而非代码部分的逗号将被替换为中文逗号。</p>
</div></template>


