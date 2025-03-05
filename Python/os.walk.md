---
date: 2024-09-05 02:05:00
category: Python
tag:
    - Python
    - 文件处理
    - 编程学习
---

# Python `os.walk`
`os.walk` 是 Python 中 `os` 模块提供的一个函数，用于生成目录树下的所有文件名。在遍历指定目录及其子目录时，`os.walk` 会返回该目录中的文件名、子目录名以及当前目录路径。

### 用法

```python
import os

for dirpath, dirnames, filenames in os.walk('your_directory'):
    # dirpath: 当前遍历到的目录路径
    # dirnames: 当前目录下的子目录列表
    # filenames: 当前目录下的文件列表
    print(f"Current Path: {dirpath}")
    print(f"Directories: {dirnames}")
    print(f"Files: {filenames}")
    print()
```

### 参数说明

- **`dirpath`**：当前遍历到的目录路径（字符串）。
- **`dirnames`**：当前目录中的子目录列表（列表形式）。
- **`filenames`**：当前目录中的文件列表（列表形式）。

### 例子

假设有以下目录结构：

```
/your_directory
    /subdir1
        file1.txt
    /subdir2
        file2.txt
    file3.txt
```

使用 `os.walk` 遍历 `your_directory` 目录时，输出可能如下：

```python
Current Path: /your_directory
Directories: ['subdir1', 'subdir2']
Files: ['file3.txt']

Current Path: /your_directory/subdir1
Directories: []
Files: ['file1.txt']

Current Path: /your_directory/subdir2
Directories: []
Files: ['file2.txt']
```

### `os.walk` 的特点

1. **递归遍历**：`os.walk` 会递归遍历目录树，包括所有子目录。
2. **生成器**：`os.walk` 是一个生成器，按需生成结果，可以节省内存。
3. **深度优先**：`os.walk` 默认是按深度优先顺序（先子目录后父目录）遍历。

### 实际应用
`os.walk` 通常用于批量处理文件系统中的文件，例如：
- 查找特定类型的文件。
- 计算目录中所有文件的大小。
- 执行批量重命名操作等。

通过结合 `os.walk` 和其他文件操作函数，可以高效地处理复杂的文件操作任务。