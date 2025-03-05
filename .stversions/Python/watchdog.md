---
date: 2024-09-28 19:20:10
category: Python
---
# watchdog 看门狗
> [开源地址](https://github.com/gorakhargosh/watchdog)   
`watch dog`是用于监控文件系统事件的 Python API 和 shell 实用程序。
适用于 Python 3.9+。

## 示例代码
```Python
import sys
import logging
from watchdog.observers import Observer
from watchdog.events import LoggingEventHandler

if __name__ == "__main__":
    # 日志
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')

    # 如果命令行参数的数量大于1，则将第一个参数赋值给`path`；否则，将`path`设为当前目录`.`。
    path = sys.argv[1] if len(sys.argv) > 1 else '.'
    # 实例化对象
    event_handler = LoggingEventHandler()
    observer = Observer()
    
    # 指定需要监控的目录和相应的事件处理器。
    observer.schedule(event_handler, path, recursive=True)
    observer.start()    # 启用监控
    try:
        while observer.isAlive():
            observer.join(1)
    finally:
        observer.stop() # 停止监控
        observer.join()
```