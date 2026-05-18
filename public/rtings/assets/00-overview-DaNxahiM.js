const n=`# 游戏测试总览 (Gaming Tests Overview)

> 来源: https://www.rtings.com/tv/tests/inputs + https://www.rtings.com/tv/tests/motion
> Test Bench: 2.2 (v1.8)

## 测试目的

Rtings 的游戏 (Gaming) 测试涵盖了与游戏体验直接相关的所有指标。这些测试分布在两个主要类别中：

- **Inputs（输入）**: 包含输入延迟 (Input Lag) 测试
- **Motion（运动）**: 包含响应时间 (Response Time)、可变刷新率 (VRR)、G-SYNC 兼容、累积绝对偏差 (CAD)、过渡伪影、图像闪烁、24p 颤抖和卡顿

游戏测试综合评估电视作为游戏显示设备的表现，从操控响应性到画面流畅度全方位覆盖。

## 测试子项一览

| 编号 | 测试项目 | 英文名 | 所属类别 | 评估要点 |
|------|----------|--------|----------|----------|
| 1 | 输入延迟 | Input Lag | Inputs | 从输入到显示的延迟时间 |
| 2 | 响应时间 | Response Time | Motion | 像素颜色/亮度变化的速度 |
| 3 | 可变刷新率 | Variable Refresh Rate (VRR) | Motion | 自适应刷新率支持 |
| 4 | G-SYNC 兼容 | G-SYNC Compatible | Motion | NVIDIA G-SYNC 支持 |
| 5 | 累积绝对偏差 | Cumulative Absolute Deviation (CAD) | Motion | 运动模糊的量化评估 |
| 6 | 过渡伪影 | Transition Artifacts | Motion | 像素过渡中的异常 |
| 7 | 图像闪烁 | Image Flicker | Motion | 屏幕闪烁特性 |
| 8 | 24p 颤抖 | 24p Judder | Motion | 24fps 电影内容的颤抖 |
| 9 | 卡顿 | Stutter | Motion | 低帧率内容的卡顿感 |

## 运动类别评分权重

| 测试子项 | 权重 | 说明 |
|----------|------|------|
| 响应时间 (Response Time) | 56% | 最重要的运动指标 |
| 无闪烁 (Flicker-Free) | 11% | 背光闪烁控制 |
| 黑帧插入 (BFI) | 4% | 减少运动模糊的功能 |
| 卡顿 (Stutter) | 13% | 低帧率内容的流畅性 |
| 24p 颤抖 (Judder) | 11% | 电影播放流畅性 |
| 可变刷新率 (VRR) | 5% | 自适应同步支持 |

## 测试设备

游戏测试使用专门的设备：

- **自定义输入延迟/响应时间测量工具**: Rtings 自研工具，精确测量像素响应和输入延迟
- **NVIDIA GPU**: 用于测试 G-SYNC 兼容性
- **AMD GPU**: 用于测试 FreeSync 兼容性
- **游戏主机**: PlayStation 5、Xbox Series X
- **CR-100 色度计**: 辅助亮度/色彩测量

## 游戏特性关键参数

| 参数 | 目标值 | 说明 |
|------|--------|------|
| 输入延迟 (4K @ 60Hz) | < 15ms | 竞技游戏理想值 |
| 输入延迟 (4K @ 120Hz) | < 8ms | 120Hz 游戏的理想值 |
| 响应时间 | < 5ms (GtG) | 快速像素响应 |
| VRR 范围 | 48-120Hz | 宽广的 VRR 范围 |
| HDMI 2.1 | 支持 | 4K @ 120Hz 的必要条件 |
| ALLM | 支持 | 自动低延迟模式 |
`;export{n as default};
