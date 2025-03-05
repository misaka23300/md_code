---
date: 2024-09-02
category: VuePress
tag: 
  - VuePress
  - 网站搭建
---
# 代码块之间的标签切换功能
在 VuePress 中，你可以通过使用内置的代码块语法来展示代码，并且支持代码块之间的标签切换功能，从而让用户可以在不同的编程语言之间切换。这个功能通常通过使用 VuePress 的内置插件或自定义插件来实现。

以下是实现代码块切换功能的步骤：

### 1. 使用内置的 `tabs` 插件

VuePress 默认没有直接内置的代码块切换功能，但你可以通过一些插件来实现这种效果。其中一个常用的插件是 `@vuepress/plugin-tabs`。

#### 安装插件

```bash
npm install @vuepress/plugin-tabs
```

#### 配置插件

在 VuePress 的配置文件 `config.js` 中添加该插件：

```javascript
module.exports = {
  plugins: [
    '@vuepress/plugin-tabs',
  ],
}
```

#### 使用标签语法

配置好插件后，你可以使用以下语法在 Markdown 文件中创建可切换的代码块：

```markdown
::: tabs
@tab JavaScript
```javascript
console.log('Hello, JavaScript!');
```
@endtab

@tab Python
```python
print('Hello, Python!')
```
@endtab

@tab Java
```java
System.out.println("Hello, Java!");
```
@endtab
:::
```

### 2. 使用 `vuepress-plugin-container`

另一个方法是使用 `vuepress-plugin-container` 插件。这个插件更为通用，但需要一些自定义代码来实现类似的功能。

#### 安装插件

```bash
npm install vuepress-plugin-container
```

#### 配置插件

在 `config.js` 中添加配置：

```javascript
const { containerPlugin } = require('@vuepress/plugin-container');

module.exports = {
  plugins: [
    containerPlugin({
      type: 'tabs',
      before: info => `<div class="custom-tabs"><div class="tab">${info}</div><div class="tab-content">`,
      after: () => '</div></div>',
    }),
  ],
}
```

#### 使用语法

然后，你可以像这样使用它：

```markdown
::: tabs JavaScript
```javascript
console.log('Hello, JavaScript!');
```
:::

::: tabs Python
```python
print('Hello, Python!')
```
:::

::: tabs Java
```java
System.out.println("Hello, Java!");
```
:::
```

### 3. 使用 `vuepress-plugin-demo-block`

你也可以使用 `vuepress-plugin-demo-block` 插件，它能够生成更复杂的代码示例块。

#### 安装插件

```bash
npm install vuepress-plugin-demo-block
```

#### 配置插件

在 `config.js` 中添加配置：

```javascript
module.exports = {
  plugins: [
    'vuepress-plugin-demo-block'
  ]
}
```

#### 使用语法

```markdown
::: demo 语言选择
```html
<!-- HTML -->
<div>Hello HTML</div>
```

```css
/* CSS */
div {
  color: red;
}
```

```javascript
// JavaScript
console.log('Hello JavaScript');
```
:::
```

### 结论

根据你的需求，你可以选择不同的插件或方法来实现代码块之间的语言切换功能。如果你需要简单的切换，可以使用 `@vuepress/plugin-tabs`；如果需要更灵活的自定义，则可以使用 `vuepress-plugin-container` 或 `vuepress-plugin-demo-block`。



