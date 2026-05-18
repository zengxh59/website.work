const n=`# 画质测试总览 (Picture Quality Overview)

> 来源: https://www.rtings.com/tv/tests/picture-quality
> Test Bench: 2.2 (v1.8)

## 测试目的

画质测试 (Picture Quality) 是 Rtings TV 评测中最核心的测试类别之一，旨在全面评估电视在各种使用场景下的图像显示能力。该类别涵盖了从暗室表现到亮室表现、从色彩还原能力到均匀性等多个维度的测试。

## 测试子项一览

| 编号 | 测试项目 | 英文名 | 评估要点 |
|------|----------|--------|----------|
| 1 | 对比度 | Contrast Ratio | 原生对比度，暗室中最亮与最暗的比值 |
| 2 | 局部调光 | Local Dimming | 背光分区控制能力，暗场细节表现 |
| 3 | HDR 峰值亮度 | HDR Peak Brightness | HDR 内容下的最大亮度输出 |
| 4 | SDR 峰值亮度 | SDR Peak Brightness | SDR 内容下的最大亮度输出 |
| 5 | 色域 | Color Gamut | 可显示的颜色范围（DCI-P3、Rec.2020） |
| 6 | 色量 | Color Volume | 在不同亮度级别下能显示的颜色总量 |
| 7 | 灰度均匀性 | Gray Uniformity | 纯色画面的亮度均匀性（脏屏效应 DSE） |
| 8 | 黑色均匀性 | Black Uniformity | 暗场画面的均匀性（漏光情况） |
| 9 | 可视角度 | Viewing Angle | 侧面观看时画质衰减程度 |
| 10 | 色彩准确度 | Color Accuracy | 开箱即用的色彩还原准确度 |
| 11 | HDR 色彩准确度 | HDR Color Accuracy | HDR 模式下的色彩还原准确度 |
| 12 | 反射 | Reflections | 屏幕对环境光的反射特性 |
| 13 | 渐变 | Gradient | 色阶过渡的平滑程度 |
| 14 | 背光分区 | Lighting Zones | 背光分区数量和布局 |

## 测试设备

画质测试主要使用以下设备：
- **Colorimetry Research CR-100**：色度计，用于测量亮度、色度坐标
- **Colorimetry Research CR-250**：光谱辐射计，用于精确测量光谱功率分布
- **Murideo Six G**：信号发生器，用于输出标准测试图案
- **Portrait Displays Calman**：校准软件，用于数据采集和分析

## 测试环境

- 画质测试在受控光环境下进行
- 对比度和黑色均匀性测试在完全暗室中进行
- 反射测试使用可控光源模拟不同光照条件
- 所有测试在电视的默认/校准设置下进行

## 评分体系

Rtings 对每个测试子项给出 0-10 的评分，综合评分通过加权计算得出。画质测试在整体评分中占有重要权重，直接影响 TV 的综合推荐评分。
`;export{n as default};
