---
date: 2024-09-05 16:49:00
category: Python
tag:
    - Python
    - 文件处理
    - 编程学习
---
# Python `os.path.join()`

`os.path.join(root, filename)` 是 Python 中用于路径拼接的函数，属于 `os` 模块。它将不同部分的路径组合起来，生成一个完整的文件路径。以下是其功能的中文解释：

- `root`：代表目录的路径，通常是文件夹的路径。
- `filename`：代表文件名，或文件路径中的另一个部分。
- `os.path.join`：将多个路径组件组合成一个完整的路径，自动处理路径分隔符，确保在不同操作系统中路径的格式是正确的（比如 Windows 使用 `\` 作为分隔符，而 Unix 系统使用 `/`）。

例如：
```python
import os
path = os.path.join('/home/user', 'file.txt')
print(path)  # 输出: /home/user/file.txt
```

在 Windows 中，输出会是：`\home\user\file.txt`