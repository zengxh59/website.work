const n=`# 黑色均匀性 (Black Uniformity)

> 来源: https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 页面更新: 2021-04-08
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

测量电视在显示暗画面时的黑色均匀程度。黑色均匀性差的电视在暗场景中会出现[漏光](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#the-cause-of-flashlighting-and-clouding) (light bleed / flashlighting) 和云斑 (clouding) 等现象，在暗室中观看暗场景时尤为明显。该测试同时评估原生黑色均匀性（无局部调光）和启用局部调光后的表现。

**何时重要**：
- **暗室环境**：黑色均匀性在暗室中观看暗场景时最为重要。差的不均匀性（如角落漏光、云斑）会在暗场景中令人分心，尤其是电影中大量暗场景（如太空场景、夜景）会暴露电视的黑色均匀性问题
- **明亮房间**：在明亮房间中，环境光会抬升黑色亮度，不均匀性不太明显，对观看体验的影响较小

**漏光类型说明**：
- **云斑 (Clouding)**：屏幕中央区域的不规则明亮斑块
- **漏光/手电筒效应 (Flashlighting)**：屏幕角落/边缘的漏光带
- **边缘漏光 (Edge Bleed)**：屏幕边缘的漏光
- **光晕 (Blooming)**：局部调光开启后，亮物体周围出现的光晕扩散

**评分方式**：客观计算 (Objectively derived)，基于照片分析的标准差。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#when-it-matters)

## 测试方法

### 前置条件

- **设备校准状态**：
  - 相机镜头设为固定参数（f/4.0, ISO 200, 2 秒），确保每次拍摄的曝光条件完全一致
  - 相机固定在三脚架上，正对电视屏幕中心
- **环境要求**：**完全暗室** (pitch dark room)，关闭所有外部光源。黑色均匀性测试对环境光极为敏感，任何外部光线都可能导致测量结果不准确
- **电视预热时间**：
  - 在测试前播放预热视频 (warmup video)，确保电视背光和面板达到热稳定状态
  - 预热时间至少 15 分钟
  - 冷态面板的背光均匀性可能与热稳定后不同，预热是必要步骤
- **信号源设置**：
  - 电视亮度设置为使白色发出 **100 cd/m²** 的亮度（确保相机曝光条件一致，测试结果可跨电视比较）
  - 画面模式：电影/影院模式（校准后）
  - 其他图像增强功能关闭

### 详细测量步骤

#### 测试一：原生黑色均匀性 (Native Black Uniformity)

1. **关闭局部调光**：将电视的局部调光 (Local Dimming) 功能设为 OFF（关闭）
2. **设置电视亮度**：调节电视亮度控制，使全白画面达到 100 cd/m²（使用色度计或照度计验证）
3. **显示测试图案**：在电视上显示测试图案——**黑色背景 + 白色中心十字交叉线**
   - 黑色背景：测试电视在显示纯黑时的均匀性
   - 白色十字交叉线：提供视觉参考点，同时模拟实际内容中暗场景里存在亮元素的情况（避免电视进入完全熄屏或自动亮度限制模式）
4. **设置相机参数**：
   - 光圈：f/4.0
   - 快门速度：2 秒
   - ISO：200
   - 这些参数经过优化，长时间曝光使相机能够捕捉到人眼在暗室中实际可见的漏光细节
5. **拍摄照片**：在完全暗室中拍摄电视屏幕
6. **检查照片**：确认照片正确曝光，黑色区域有足够的信息量用于分析
7. **计算标准差**：通过软件对照片进行标准差计算，量化黑色不均匀程度

#### 测试二：局部调光黑色均匀性 (Local Dimming Black Uniformity)

1. **启用局部调光**：将电视的局部调光功能设为最佳设置（通常为"高"或"自动"，取该电视可用的最高档位）
2. **保持其他设置不变**：亮度、画面模式等设置与原生测试完全相同
3. **显示相同测试图案**：黑色背景 + 白色中心十字交叉线
4. **使用相同相机参数**：f/4.0, 2 秒, ISO 200
5. **拍摄照片**：在完全暗室中拍摄
6. **计算标准差**：通过软件对照片进行标准差计算
7. **对比分析**：比较局部调光开启前后的均匀性变化
   - FALD 背光电视：局部调光通常显著改善黑色均匀性
   - Edge-Lit 电视：局部调光可能反而恶化均匀性，因为少量分区同时亮起导致更明显的光晕

### 数据处理与公式

**标准差计算**：
- 对拍摄的照片进行像素级亮度分析
- 计算所有像素亮度值的标准差：σ = √(Σ(xi - x̄)² / N)
- 标准差越低，黑色越均匀，面板均匀性越好

**原生与局部调光对比**：
- 两项测试使用完全相同的测试图案和相机参数
- 通过比较两项测试的标准差，量化局部调光对黑色均匀性的改善或恶化程度
- OLED 电视因每个像素可独立关闭，黑色均匀性自动完美，直接获得满分 10 分

**异常值处理**：
- 白色十字交叉线区域在计算中被排除（仅分析黑色背景区域的均匀性）
- 照片边缘可能因相机镜头畸变产生伪影，需在分析时注意

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#how-to-get-the-best-results)

| 设备 | 型号/参数 | 用途 |
|------|----------|------|
| 数码相机 | — | 拍摄黑色均匀性照片（f/4.0, 2 秒, ISO 200） |
| 三脚架 | — | 固定相机位置 |
| 照片处理软件 | — | 计算像素亮度标准差 |

> 注：本测试不使用色度计，完全基于相机照片的像素级分析。与[灰度均匀性](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse)测试方法类似。

## 测试资源

| 资源 | 用途 |
|------|------|
| 黑色背景 + 白色十字交叉线测试图案 | 黑色均匀性评估的核心测试图案 |
| 预热视频 (Warmup Video) | 测试前播放，确保电视达到热稳定状态 |

![黑色均匀性测试图案](assets/test-patterns/black-uniformity-cross.png)
*黑色均匀性测试图案：黑色背景上的白色十字交叉线*

> **注意**: 黑色均匀性测试分别在局部调光 (Local Dimming) 开启和关闭两种状态下进行。使用十字交叉线测试图案而非纯黑屏，可以同时评估黑色均匀性和局部调光的光晕 (blooming) 表现。

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_10))

![黑色均匀性实拍](assets/product-examples/lg-c4-oled/08-black-uniformity/uniformity-small.jpg)
*黑色均匀性测试实拍：十字交叉线图案，展示屏幕黑色背景的均匀程度*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_10))

![黑色均匀性实拍](assets/product-examples/samsung-qn90f/08-black-uniformity/uniformity-small.jpg)
*黑色均匀性测试实拍：十字交叉线图案，展示屏幕黑色背景的均匀程度*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| Std. Dev. (局部调光) | **50%** | < 0.6% | 1% |
| Native Std. Dev. (原生) | **50%** | < 0.6% | 1% |

> 注意：黑色均匀性因制造差异而在同型号不同个体间差异较大，即使同一型号的测量结果也可能不同。

### 子测试指标

| 子测试 | 评分维度 | 说明 |
|--------|---------|------|
| Native Picture | 原生黑色均匀性照片 | 视觉参考 |
| Native Std Dev | 原生标准差 | 核心量化指标 |
| Local Dimming Picture | 局部调光黑色均匀性照片 | 视觉参考 |
| Local Dimming Std Dev | 局部调光标准差 | 核心量化指标 |

### 可感知差异阈值

- **标准差可感知差异**：**1%**
  - 即标准差变化 1% 以上才能被人眼察觉

### 评分参考范围

#### 原生黑色均匀性标准差

| 标准差范围 | 评级 | 说明 |
|-----------|------|------|
| 0% (OLED) | 完美 | OLED 像素可完全关闭，无漏光 |
| < 1% | 优秀 | 漏光极轻微，暗室中几乎不可见 |
| 1% - 2% | 良好 | 轻微漏光，大多数场景不影响观看 |
| 2% - 3% | 一般 | 暗室中可见漏光，暗场景中可能分心 |
| > 3% | 较差 | 明显漏光，严重影响暗场景观看体验 |

> 注：标准差 < 1% 为良好值（修正此前版本中"< 2% 为良好值"的描述）。实际体验中，1%-2% 的标准差在暗室中已可被敏感的观看者察觉。

#### 局部调光黑色均匀性标准差

| 标准差范围 | 评级 | 说明 |
|-----------|------|------|
| 0% (OLED) | 完美 | OLED 不受影响 |
| < 1% | 优秀 | 局部调光有效改善均匀性 |
| 1% - 2% | 良好 | 局部调光有一定效果 |
| > 2% | 一般或较差 | 可能因光晕 (Blooming) 导致局部调光反而恶化均匀性 |

### 评分说明

- **OLED 特殊规则**：OLED 电视每个像素可独立关闭，黑色均匀性自动完美，直接获得满分 **10 分**，无需拍摄照片分析
- **LED 电视**：根据标准差数值评分，标准差越低评分越高
- **个体差异**：同型号不同个体之间均匀性可能有显著差异（面板抽签 / Panel Lottery），这是面板制造工艺的固有问题

## 关键指标

### 漏光成因 [↗](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#the-cause-of-flashlighting-and-clouding)

1. **背光设计**：Edge-Lit 背光仅在屏幕边缘放置 LED 灯条，通过扩散膜均匀化，容易出现不均匀
2. **制造公差**：LCD 面板由多层材料叠加，运输或组装中的弯曲会导致不均匀扩散
3. **LED 亮度差异**：背光 LED 本身的制造差异导致某些区域背光更强

### 面板类型与黑色均匀性 [↗](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#led-vs-oled-black-uniformity)

| 面板类型 | 黑色均匀性特点 |
|---------|--------------|
| OLED | 完美均匀，像素可完全关闭，无漏光，自动满分 |
| VA | 深黑色但均匀性取决于面板个体，同型号波动大 |
| IPS/ADS | 黑色较浅（对比度低），均匀性问题可能更明显 |
| Mini LED (FALD) | 局部调光可大幅改善，但可能引入光晕 (Blooming) |

### 局部调光的影响

| 背光类型 | 局部调光效果 |
|---------|------------|
| Full-Array (FALD) | 通常改善均匀性，减少漏光和云斑。分区数量越多，改善越明显 |
| Edge-Lit | 可能反而恶化均匀性，因为少量分区同时亮起导致更明显的光晕 |
| 无局部调光 | 取决于面板固有均匀性 |

### 相关设置 [↗](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#related-settings)

- **Local Dimming（局部调光）**：可改善黑色均匀性但可能引入光晕，需在均匀性和光晕之间权衡
- **背光亮度**：降低背光可减少漏光可见度，但影响整体亮度
- **环境光**：在电视后方添加偏置照明 (bias lighting) 可减少漏光的视觉感知

### Test Bench 版本覆盖

| 版本 | 说明 |
|------|------|
| TB 1.0+ | 原生 + 局部调光黑色均匀性 |
| TB 2.0+ | 新增 Ambient Black Level Raise（环境光黑色抬升）测试 |

> 注：TV 版本的详细测试内容为会员专享。以上信息基于 Rtings 公开的 Monitor 测试方法和 TV 页面摘要整理。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#additional-information)

相关测试: [灰度均匀性](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse) | [局部调光](https://www.rtings.com/tv/tests/picture-quality/local-dimming) [↗](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting#conclusion)
`;export{n as default};
