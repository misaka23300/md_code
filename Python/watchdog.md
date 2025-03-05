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
    # 日志设置
    logging.basicConfig(level=logging.INFO,
                        format='%(asctime)s - %(message)s',
                        datefmt='%Y-%m-%d %H:%M:%S')

    # 如果命令行参数的数量大于1，则将第一个参数赋值给`path`；否则，将`path`设为当前目录`.`。
    path = sys.argv[1] if len(sys.argv) > 1 else '.'

    # 实例化事件处理器
    event_handler = LoggingEventHandler()
    observer = Observer()

    try:
        # 调度监控事件
        observer.schedule(event_handler, path, recursive=True)
        # 启动观察者
        observer.start()
        logging.info(f"开始监控目录: {path}")
        
        # 循环检查观察者状态
        while observer.isAlive():
            # 主线程等待 observer 线程完成，最多等待 1 秒
            observer.join(1)
    except Exception as e:
        # 捕捉并记录监控过程中的任何异常
        logging.error(f"发生错误: {e}")
    finally:
        # 确保观察者被正确停止和关闭
        observer.stop()
        observer.join()
        logging.info("停止监控。")

```