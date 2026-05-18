const n=`# 渐变 / HDR原生渐变 (HDR Native Gradient)

> 来源: https://www.rtings.com/tv/tests/picture-quality/gradient
> Test Bench: [1.10](https://www.rtings.com/tv/tests/changelogs/2-2) / 1.11 (HDR Native Gradient)
> 更新日期: 2024-12-03
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

HDR 原生渐变测试评估电视在 HDR 内容中显示平滑色彩渐变的能力，不产生[色阶 (Banding)](https://www.rtings.com/tv/tests/picture-quality/gradient#why-is-there-banding-in-gradients) 或色调分离 (posterization) 现象。色阶是指原本应该平滑过渡的颜色之间出现可见的条纹或阶梯状变化。

**定义**: 电视在 HDR 中不产生色阶的情况下，能多精细地显示色彩渐变 (How well the TV can display gradual color changes in HDR without banding)

**重要场景**: 暗部细节、天空和肤色等场景中的渐变过渡。色彩渐变是相同颜色或非常相似颜色的色调变化——无论观看电影、电视节目还是玩游戏，都会遇到色彩渐变场景。天空是最常见的渐变场景之一（日落时底部黄色逐渐过渡到中间的橙色，顶部变为深蓝色）。其他常见场景包括: 暗室中的阴影过渡、水面反光渐变、肤色渐变、雾气/烟雾效果。

**色阶产生的原因**: 电视无法显示必要的颜色，而将其归并到另一个相近颜色。具体原因包括:
1. **信号位深不足**: 信号没有足够的位深来区分大量相似颜色
2. **面板位深不足**: 屏幕的位深不够高，无法跟随高位深信号的精细指令
3. **电视图像处理问题**: 电视的图像处理算法引入了色阶

### Test Bench 覆盖范围

| 版本 | 1.6 | 1.7 | 1.8 | 1.9 | 1.10 | 1.11 |
|------|-----|-----|-----|-----|------|------|
| HDR Native Gradient | - | - | - | - | Y | Y |
| Gradient (SDR) | Y | Y | Y | Y | - | - |

**重要**: 1.10 之前的渐变测试在 1080p SDR 下进行，使用完全不同的方法。**旧版 SDR 渐变结果与新版 HDR Native Gradient 结果不可比较**。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/gradient#when-it-matters)

## 测试方法

### 前置条件

1. **画面模式**: 使用校准后的 HDR 画面模式（与 HDR 色彩准确度测试相同的模式）
2. **环境要求**: 完全暗室，确保色阶可见性不受环境光干扰
3. **电视预热**: 电视充分预热后进行测试
4. **所有渐变平滑功能必须关闭**: 这是本测试的核心——评估电视的"原生" (Native) 渐变处理能力，而非依赖后处理平滑功能

### 详细测量步骤

**步骤 1 — 测试图案制作 (Photoshop)**

1. 在 Adobe Photoshop 中创建新文档，使用 **"Classic" (经典) 渐变模式**
   - 选择 Classic 模式的原因: 该模式产生最线性的渐变过渡，不会引入额外的非线性映射
2. 色深设置为 **16-bit** 编码（确保源素材有足够的色深精度）
3. 制作 8 条独立的渐变线，每条定义如下:

| 渐变线编号 | 起始颜色 | 终止颜色 | 测试重点 |
|-----------|---------|---------|---------|
| Line 1 | 100% 黑 | 50% 灰 | 暗部灰阶过渡 |
| Line 2 | 50% 灰 | 100% 白 | 亮部灰阶过渡 |
| Line 3 | 100% 黑 | 50% 红 | 红色暗部过渡 |
| Line 4 | 50% 红 | 100% 红 | 红色亮部过渡 |
| Line 5 | 100% 黑 | 50% 绿 | 绿色暗部过渡 |
| Line 6 | 50% 绿 | 100% 绿 | 绿色亮部过渡 |
| Line 7 | 100% 黑 | 50% 蓝 | 蓝色暗部过渡 |
| Line 8 | 50% 蓝 | 100% 蓝 | 蓝色亮部过渡 |

**步骤 2 — 格式转换**

1. 将 16-bit Photoshop 渐变图案转换为视频格式:
   - 色深: **10-bit**（HDR 标准色深）
   - HDR 格式: **HDR10**（静态元数据）
   - 色彩空间: **RGB 全范围** (Full Range)
   - 分辨率: **4K (3840x2160)** — 对于 8K 型号则制作 8K (7680x4320) 版本
2. 确保转换过程中不引入额外的色阶或量化伪影

**步骤 3 — 信号输出配置**

1. 将转换后的测试图案文件上传到 **Murideo Seven (7G) 信号发生器**
2. Murideo 7G 通过 HDMI 直连电视输出信号
   - 关键: 使用外部信号发生器**绕过电视的内部信号处理**，直接测试面板和处理器的原生渐变能力
3. 信号格式确认: 10-bit HDR10 RGB 全范围

**步骤 4 — 电视设置确认**

1. 确认使用校准后的 HDR 画面模式
2. **逐一确认并关闭所有品牌的渐变平滑功能**:

| 品牌 | 需关闭的功能名称 | 说明 |
|------|----------------|------|
| Hisense | Smooth Gradient (平滑渐变) | 关闭 |
| LG | Smooth Gradation (平滑渐变) | 关闭 |
| Samsung | Noise Reduction (降噪) | 关闭 |
| Sony | Smooth Gradation (平滑渐变) | 关闭 |
| TCL | Gradation Clear (渐变清晰) | 关闭 |
| Vizio | Contour Smoothing (轮廓平滑) | 关闭 |

3. 关闭原因: 这些平滑功能会通过插值算法去除色阶，但同时也会抹除画面中的精细细节。本测试旨在评估电视的**原生**渐变处理能力，即不依赖后处理平滑功能的表现。

**步骤 5 — 视觉评估**

1. 在暗室环境中，逐条观察电视屏幕上的 8 条渐变线
2. 对每条渐变线单独评估色阶严重程度
3. 评估标准:
   - 渐变过渡是否完全平滑
   - 是否存在可见的色阶条纹
   - 色阶出现的具体位置和严重程度
4. 拍摄每条渐变线的照片作为记录和对比依据

**步骤 6 — 附加实拍验证**

1. 使用包含渐变场景的电影片段进行实际观感验证
2. 典型测试场景: 《火星救援》中的天空场景
3. 对比测试图案结果与实际内容的色阶表现一致性

### 数据处理与公式

本测试为纯主观视觉评估，不涉及仪器测量和数值计算。

**评分计算方式**:
- 最终评分 = 8 条渐变线各自得分的算术平均值
- 每条渐变线的评分基于色阶可见性的主观判断

**色深与渐变能力的关系**:
- **原生 10-bit 面板**: 每个子像素 10 位精度，可显示 1024³ = 10.7 亿种颜色
- **8-bit + [FRC](https://www.rtings.com/tv/tests/picture-quality/gradient#color-depth-10-bit-vs-8-bit-frc) 面板**: 原生 256³ = 1677 万种颜色，通过时域抖动 (Temporal Dithering) 模拟中间色
- **Rtings 不区分原生 10-bit 和 8-bit+FRC**: 评分标准是最终渐变的平滑度，而非实现方式
- 8-bit + FRC 在静态渐变中通常表现良好，但在运动画面中可能产生可见的时域伪影

**分辨率与渐变无关**: 分辨率定义像素数量，色深定义每个像素可显示的颜色数量。更多像素不等于更好的渐变。8K 电视不会仅因分辨率更高就有更好的渐变处理。

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/gradient#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/gradient#how-to-get-the-best-results)

| 设备 | 型号 | 用途 |
|------|------|------|
| 信号发生器 | Murideo Seven (7G) | 直接输出 HDR10 测试图案信号到电视，绕过电视内部处理 |
| 图像编辑软件 | Adobe Photoshop | 制作 16-bit 原始渐变测试图案 |
| 拍摄设备 | 数码相机 | 记录渐变表现照片，用于审核和对比 |

## 测试资源

| 资源 | 规格 | 用途 |
|------|------|------|
| 自制定制测试图案 | 8 条 RGB 渐变线，10-bit HDR10 RGB 全范围，4K/8K | HDR 原生渐变评估 |
| 电影场景测试片段 | 如《火星救援》天空场景 | 实际内容渐变验证 |
| 渐变线实拍照片 | 8 条渐变线各自的照片 | 记录和对比 |

![渐变色阶 (banding) 示例](assets/test-patterns/gradient-banding-example.jpg)
*渐变色阶在实际电影内容中的表现：天空中的可见色带 (banding) 现象*

![《火星救援》渐变测试场景](assets/methodology-diagrams/martian-banding.jpg)
*《火星救援》电影场景中的天空渐变色阶：渐变测试在实际内容中的典型表现*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_466))

![渐变测试实拍](assets/product-examples/lg-c4-oled/13-gradient/gradient-small.jpg)
*HDR 渐变测试：8 条渐变线的实际显示效果，检查色阶 (banding) 现象*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_466))

![渐变测试实拍](assets/product-examples/samsung-qn90f/13-gradient/gradient-small.jpg)
*HDR 渐变测试：8 条渐变线的实际显示效果，检查色阶 (banding) 现象*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

8 条渐变线权重相等，每条各占 **12.5%**:

| 渐变线 | 权重 |
|--------|------|
| 100% Black → 50% Gray | 12.5% |
| 50% Gray → 100% White | 12.5% |
| 100% Black → 50% Red | 12.5% |
| 50% Red → 100% Red | 12.5% |
| 100% Black → 50% Green | 12.5% |
| 50% Green → 100% Green | 12.5% |
| 100% Black → 50% Blue | 12.5% |
| 50% Blue → 100% Blue | 12.5% |

> 每条渐变线单独评分（0.5 分增量），最终评分为 8 条线的加权平均值。

### 可感知差异阈值

- 10 分与 9 分的差异: 仅在最严格的测试图案中可辨别
- 8 分与 7 分的差异: 在测试图案中明显，但在实际内容中可能不显著
- 低于 6 分: 在实际观看内容中即可察觉色阶

### 评分参考范围

| 渐变表现 | 评分 | 说明 |
|----------|------|------|
| 完全平滑，无任何可见色阶 | 10.0 | 理想状态 |
| 仅在绿色通道有极轻微色阶 | ~9.5 | 绿色通道是大多数电视最容易出现色阶的通道 |
| 轻微色阶，个别线条可见 | 8.0 - 9.0 | 少数渐变线有轻微条纹 |
| 多条线有可见色阶 | 6.0 - 7.9 | 多个通道出现明显色阶 |
| 大部分线条有明显色阶 | 4.0 - 5.9 | 严重色阶，影响观看体验 |
| 几乎所有线条严重色阶 | 1.0 - 3.9 | 非常差的渐变处理能力 |

### 典型案例

| 电视型号 | 评分 | 表现 |
|---------|------|------|
| Samsung S90D/S90DD OLED | ~9.5+ | 仅在"100% 黑 → 50% 绿"线有极轻微色阶 |
| Sony A80J OLED | 低分 | 几乎所有线条都有可见色阶 |

## 关键指标

### 色深对比: 10-bit vs 8-bit + FRC [↗](https://www.rtings.com/tv/tests/picture-quality/gradient#color-depth-10-bit-vs-8-bit-frc)

| 参数 | 10-bit 原生 | 8-bit + FRC |
|------|------------|-------------|
| 可显示颜色数 | 10.7 亿 (1024³) | 1677 万 (256³) 原生 |
| 工作原理 | 每个子像素 10 位精度 | 利用时域抖动模拟中间色 |
| 静态渐变效果 | 通常更平滑 | 通常表现良好 |
| 运动画面 | 无时域伪影 | 可能有可见的时域伪影 |
| Rtings 评分方式 | 不区分两者 | 不区分两者，仅评最终平滑度 |

### 各品牌渐变增强功能 [↗](https://www.rtings.com/tv/tests/picture-quality/gradient#gradient-enhancement-settings)

| 品牌 | 功能名称 | 效果 | 代价 |
|------|---------|------|------|
| Hisense | Smooth Gradient (平滑渐变) | 减少可见色阶 | 损失精细细节 |
| LG | Smooth Gradation (平滑渐变) | 减少可见色阶 | 损失精细细节 |
| Samsung | Noise Reduction (降噪) | 减少可见色阶 | 损失精细细节 |
| Sony | Smooth Gradation (平滑渐变) | 减少可见色阶 | 损失精细细节 |
| TCL | Gradation Clear (渐变清晰) | 减少可见色阶 | 损失精细细节 |
| Vizio | Contour Smoothing (轮廓平滑) | 减少可见色阶 | 损失精细细节 |

**重要**: 启用这些功能可减少可见色阶，但会损失画面精细细节。Rtings 测试中全部关闭以评估原生能力。

### 如何获得最佳效果

1. 确保电视接受真正的 10-bit 信号（从外部设备观看时启用增强信号格式）
2. 关闭可能导致色阶的处理功能（如动态对比度、白平衡校准设置）
3. 如果仍有色阶，尝试开启渐变平滑功能（注意会损失细节）
4. 如果以上均无效，说明电视渐变处理能力有限，无法通过设置改善

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/gradient#additional-information)

相关测试: [色彩准确度](https://www.rtings.com/tv/tests/picture-quality/color-accuracy)
[↗](https://www.rtings.com/tv/tests/picture-quality/gradient#conclusion)
`;export{n as default};
