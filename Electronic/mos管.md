---
date: 2024-09-25 22:54:00
category: 电子
---
# mos管 场效应管

mos管是电压控制的元件,可以用来做电子开关.mos管分为Nmos和Pmos.

> 已入库的型号:  
    IRF540NPBF([数据手册](https://atta.szlcsc.com/upload/public/pdf/source/20200629/C693382_19264310A0AB3647F33205B5CBE63153.pdf?Expires=4070880000&OSSAccessKeyId=LTAIJDIkh7KmGS1H&Signature=T4JrfFfLO3h2izHeOZ4gNMXJOXE%3D&response-content-disposition=attachment%3Bfilename%3DC693382_%25E5%259C%25BA%25E6%2595%2588%25E5%25BA%2594%25E7%25AE%25A1%2528MOSFET%2529_IRF540N-VB_%25E8%25A7%2584%25E6%25A0%25BC%25E4%25B9%25A6_VBSEMI%2528%25E5%25BE%25AE%25E7%25A2%25A7%2529%25E5%259C%25BA%25E6%2595%2588%25E5%25BA%2594%25E7%25AE%25A1%2528MOSFET%2529%25E8%25A7%2584%25E6%25A0%25BC%25E4%25B9%25A6.PDF))  
P45N03LTFG

## 原理图符号
以NMOS举例:
![](pciture\nmos符号.png)
- 区分NMOS和PMOS:  
        **头指向栅极是NMOS,箭头背离栅极是PMOS.**


    D: 漏极
    S: 源极
    G: 栅极

## NMOS 电流方向
- NMOS的电流是双向流动的,既可以有D(漏极)流向S(源极),
- 做开关管时D流向S,做续流管时S到D.