---
date: 2024-09-02 16:49:48
category: 图像处理
tag: 
  - Python
  - 编程学习
  - QrCode
---

# Python 生成二维码

### 安装
这里需要用到的第三方库为`qrcode`,让我们通过`pip`来安装它吧.
```cmd
pip install 'qrcode[pil]'
```
> [PyPI文档链接](https://pypi.org/project/qrcode/)

安装`qrcode`为标准安装,而安装`qrcode[qil]`可以获得更多的图像功能.

### 用法

#### 使用命令行生成二维码

```cmd
qr "Ciallo～(∠・ω< )⌒☆" > yozusoft.png
```
您猜怎么着?
```
PS C:\Users\laffe> qr
Traceback (most recent call last):
  File "<frozen runpy>", line 198, in _run_module_as_main
  File "<frozen runpy>", line 88, in _run_code
  File "C:\Users\laffe\AppData\Local\Programs\Python\Python312\Scripts\qr.exe\__main__.py", line 7, in <module>
  File "C:\Users\laffe\AppData\Local\Programs\Python\Python312\Lib\site-packages\qrcode\console_scripts.py", line 43, in main
    from pkg_resources import get_distribution
ModuleNotFoundError: No module named 'pkg_resources'
```
那么我们通过使用模块来生成二维码吧

#### 简单的用法
``` python
import qrcode
img = qrcode.make('Ciallo～(∠・ω< )⌒☆')
type(img)  # qrcode.image.pil.PilImage
img.save("yozusoft.png")
```
#### 高级用法
我们可以使用`QRCode`类来控制更多的功能.