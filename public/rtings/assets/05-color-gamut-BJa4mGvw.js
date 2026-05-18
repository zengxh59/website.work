const n=`# 色域 (Wide Color Gamut)

> 来源: https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 页面更新: 2024 年
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

测量电视能够显示的颜色范围，即色域 (Color Gamut)。色域越广，电视能够呈现的色彩越丰富、越饱和。测试主要关注电视对 **DCI-P3** 和 **Rec.2020** 两个广色域标准的覆盖能力，这两个标准是 HDR 内容的核心色彩空间。

**何时重要**: HDR 内容中的鲜艳色彩表现。广色域 (Wide Color Gamut, WCG) 使红色更红、绿色更绿，让 HDR 内容的色彩更加生动。没有广色域支持的电视在播放 HDR 内容时，鲜艳色彩会被压缩到较小范围内，导致色彩不够饱和、画面缺乏冲击力。

**它是什么**: 色域是指显示设备能够再现的色彩范围，通常在 CIE 色度图上以三角形区域表示。三角形的三个顶点对应显示设备的三原色（红、绿、蓝）的色度坐标。色域覆盖率是指显示设备的色域三角形面积与目标色彩空间（如 DCI-P3、Rec.2020）三角形面积的比值，以百分比表示。

**重要说明**:
- 本测试为 **HDR 专属测试**，不测量 SDR 色域
- 本测试**不测量 Rec.709** (SDR 标准色域)，因为几乎所有现代电视都能完全覆盖 Rec.709
- 本测试为**电视 (TV) 专属测试**，与显示器 (Monitor) 的色域测试方法完全不同，结果**不可互相对比**

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#when-it-matters)

## 测试方法

### 前置条件

- **设备校准状态**: 电视必须已完成校准 (post-calibration)，使用校准后的 HDR 画面模式设置
- **环境要求**: 暗室，无直射环境光源
- **电视预热时间**: 电视需预热至稳定工作状态（建议至少 30 分钟），确保面板和背光性能达到稳态
- **信号源设置**:
  - GPU: **NVIDIA GTX 1060** 或 **GTX 1660 SUPER**
  - 信号格式: **HDR10, 4K @ 60Hz, chroma 4:2:2, 10-bit**
  - 使用 **75% stimulus**（75% 刺激水平）进行所有色度测量
    - 75% stimulus 的选择原因: 避免接近 100% 时可能出现的色调压缩和裁剪，同时保持足够高的亮度以确保测量精度
- **画面模式设置**:
  - 选择 HDR 电影/影院模式（校准后）
  - 色彩空间: 自动或最宽设置
  - 确保电视已正确识别 HDR10 信号并切换到 HDR 模式
- **测量设备准备**:
  - CR-100 色度计需已完成校准
  - Calman 校准软件已完成配置并连接 CR-100

### 详细测量步骤

1. 通过 NVIDIA GPU (GTX 1060 或 GTX 1660 SUPER) 输出 HDR10 测试信号
   - 分辨率: 4K (3840 × 2160) @ 60Hz
   - 色度采样: 4:2:2
   - 色深: 10-bit
   - 信号类型: HDR10
2. 确认电视已正确接收 HDR10 信号并切换到 HDR 画面模式
3. 使用 **75% stimulus** 水平生成测试图案
4. 使用 CR-100 色度计配合 Calman 校准软件，依次测量 **6 种颜色**的色度坐标:

   | 序号 | 颜色 | 英文名 | 类型 | 说明 |
   |------|------|--------|------|------|
   | 1 | 红 | Red | 原色 (Primary) | 显示设备的基础红色 |
   | 2 | 绿 | Green | 原色 (Primary) | 显示设备的基础绿色 |
   | 3 | 蓝 | Blue | 原色 (Primary) | 显示设备的基础蓝色 |
   | 4 | 黄 | Yellow | 次级色 (Secondary) | 红 + 绿混合 |
   | 5 | 品红 | Magenta | 次级色 (Secondary) | 红 + 蓝混合 |
   | 6 | 青 | Cyan | 次级色 (Secondary) | 绿 + 蓝混合 |

5. 对每种颜色，在不同的**饱和度级别** (saturation levels) 下测量色度坐标
   - 饱和度级别通常包括: 25%, 50%, 75%, 100% 等多个级别
   - 不同饱和度下的色度坐标用于评估色域在不同色彩强度下的一致性
6. 记录每种颜色在每个饱和度级别的 **CIE 1931 xy** 坐标和 **CIE 1976 u'v'** 坐标
7. 计算色域三角形面积与目标色彩空间的覆盖率:

   **DCI-P3 覆盖率计算**:
   - 使用测量的红、绿、蓝三原色坐标构建色域三角形
   - 计算该三角形与 DCI-P3 标准色域三角形的重叠面积
   - 覆盖率 = 重叠面积 / DCI-P3 总面积 × 100%
   - 分别在 CIE 1931 xy 和 CIE 1976 u'v' 两个坐标系下计算

   **Rec.2020 覆盖率计算**:
   - 同上方法，但目标色彩空间为 Rec.2020
   - 分别在 CIE 1931 xy 和 CIE 1976 u'v' 两个坐标系下计算

8. **同时进行色调映射 (Tone Mapping) 评估**:
   - 对每种颜色在不同饱和度下的色度坐标计算**标准差** (standard deviation)
   - 标准差越小，表示色调映射越精确，电视能更准确地再现色彩
   - 如果标准差较大，说明电视在处理超出其色域范围的色彩时存在偏差

### 数据处理与公式

**色域覆盖率计算**:

\`\`\`
Coverage = (A_intersection / A_target) × 100%

其中:
A_intersection = 电视色域三角形与目标色彩空间三角形的交集面积
A_target = 目标色彩空间 (DCI-P3 或 Rec.2020) 三角形面积
\`\`\`

**色调映射评估**:

\`\`\`
Tone Mapping Score = σ(CIE_coordinates per color across saturation levels)

每种颜色 (R, G, B, Yellow, Magenta, Cyan) 在不同饱和度下的色度坐标标准差。
标准差越小 → 色调映射越精确
\`\`\`

**坐标系转换 (xy → u'v')**:

\`\`\`
u' = 4x / (-2x + 12y + 3)
v' = 9y / (-2x + 12y + 3)

其中 x, y 为 CIE 1931 色度坐标
\`\`\`

**结果报告**: 每台电视报告 4 个色域覆盖率值 + 色调映射指标:
- DCI-P3 覆盖率 (CIE 1931 xy)
- DCI-P3 覆盖率 (CIE 1976 u'v')
- Rec.2020 覆盖率 (CIE 1931 xy)
- Rec.2020 覆盖率 (CIE 1976 u'v')
- 色调映射 (每种颜色的标准差)

**UV vs XY 注意事项**:
- 同一台电视在 **uv 坐标系**下的覆盖率数值通常**高于** xy 坐标系
- 这是因为 CIE 1976 u'v' 坐标系在绿-红方向上更均匀，LCD 电视的绿色通常比 xy 坐标系下更接近目标
- 因此在比较不同电视的色域时，应使用同一坐标系下的数值

### 四个子测试

| 子测试 | 色彩空间 | 坐标系统 | 可感知差异 |
|--------|---------|---------|-----------|
| DCI P3 xy | DCI-P3 | CIE 1931 xy | 5% |
| DCI P3 uv | DCI-P3 | CIE 1976 u'v' | 5% |
| Rec.2020 xy | Rec.2020 | CIE 1931 xy | 5% |
| Rec.2020 uv | Rec.2020 | CIE 1976 u'v' | 5% |

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#how-to-get-the-best-results)

| 设备 | 型号 | 用途 | 备注 |
|------|------|------|------|
| 色度计 | Colorimetry Research CR-100 | 色度坐标测量 | 测量 6 种颜色在不同饱和度下的 xy / u'v' 坐标 |
| 校准软件 | Portrait Displays Calman | 数据采集与分析 | 自动计算色域覆盖率和色调映射指标 |
| GPU | NVIDIA GTX 1060 / GTX 1660 SUPER | HDR10 测试信号输出 | 发送 4K@60Hz, 4:2:2, 10-bit HDR10 信号 |

> **GPU 选择说明**: 使用 NVIDIA GTX 1060 或 GTX 1660 SUPER 是因为这些 GPU 能稳定输出 4K@60Hz HDR10 信号，且色度采样 4:2:2 和 10-bit 色深输出可靠。并非所有 GPU 都能正确输出所需的信号格式。

## 测试资源

### 测试图案

| 测试图案 | 描述 | 用途 |
|---------|------|------|
| HDR10 色域测试图案 | 6 色（红、绿、蓝、黄、品红、青）在不同饱和度级别的色度测试 | 测量 DCI-P3 和 Rec.2020 色域覆盖率 |
| 75% stimulus 信号 | 所有测量在 75% 刺激水平下进行 | 标准化测量条件，避免色调压缩和裁剪 |

**6 色测试图案说明**:
- 每种颜色在多个饱和度级别（25%, 50%, 75%, 100%）下测量色度坐标
- 使用 75% stimulus 避免接近 100% 时的色调压缩
- 信号格式: HDR10, 4K @ 60Hz, chroma 4:2:2, 10-bit

### 辅助图表

![色域环图 — DCI-P3](assets/test-patterns/gamut-rings-p3.jpg)
*色域环图 (Gamut Rings)：SDR 色域体积测试使用的 DCI-P3 色域环图参考*

![色域环图 — BT.2020](assets/test-patterns/gamut-rings-2020.jpg)
*色域环图：BT.2020 色域环图参考*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_427))

![DCI-P3 色域环图结果](assets/product-examples/lg-c4-oled/05-color-gamut/p3-gamut-rings-small.jpg)
*DCI-P3 色域环图：展示实际色域覆盖情况*

![BT.2020 色域环图结果](assets/product-examples/lg-c4-oled/05-color-gamut/bt2020-gamut-rings-small.jpg)
*BT.2020 色域环图：展示在更广色域标准下的覆盖情况*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_427))

![DCI-P3 色域环图结果](assets/product-examples/samsung-qn90f/05-color-gamut/p3-gamut-rings-small.jpg)
*DCI-P3 色域环图：展示实际色域覆盖情况*

![BT.2020 色域环图结果](assets/product-examples/samsung-qn90f/05-color-gamut/bt2020-gamut-rings-small.jpg)
*BT.2020 色域环图：展示在更广色域标准下的覆盖情况*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| DCI P3 xy | **25%** | > 90% | 5% |
| DCI P3 uv | **25%** | > 90% | 5% |
| Rec.2020 xy | **25%** | > 90% | 5% |
| Rec.2020 uv | **25%** | > 90% | 5% |

> 4 个子测试权重相等（JSON 数据中均为 1.0），即各占 25%。

### 可感知差异阈值

| 子测试 | 可感知差异 | 说明 |
|--------|-----------|------|
| DCI P3 xy | **5%** | 覆盖率差异需 ≥ 5% 才能被人眼感知 |
| DCI P3 uv | **5%** | 同上 |
| Rec.2020 xy | **5%** | 同上 |
| Rec.2020 uv | **5%** | 同上 |

### 评分参考范围

**色域覆盖率评级**:

| 等级 | 覆盖率 (所有 4 个子测试) | 典型技术 |
|------|--------------------------|---------|
| 优秀 | **> 90%** (DCI-P3) | QD-OLED, 高端量子点 LED |
| 良好 | 80% - 90% (DCI-P3) | WOLED, 中高端量子点 LED |
| 一般 | 70% - 80% (DCI-P3) | 普通 LED |
| 较差 | < 70% (DCI-P3) | 低端 LED |

**广色域 (WCG) 分类**:

| 分类 | 条件 | 典型表现 |
|------|------|---------|
| 广色域 (WCG) | **≥ 67% Rec.2020 uv** | QD-OLED, 量子点 LED |
| 中等色域 | 60% - 67% Rec.2020 uv | 高端白光 LED |
| 标准色域 | < 60% Rec.2020 uv | 普通白光 LED |

## 关键指标

### 色域 vs 色域体积 [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#color-gamut-vs-color-volume)

| 概念 | 测量维度 | 说明 |
|------|---------|------|
| 色域 (Color Gamut) | 2D (色度图面积) | 本测试的内容。色彩范围在 CIE 色度图中的三角形面积，不考虑亮度维度 |
| 色域体积 (Color Volume) | 3D (包含亮度维度) | 单独测试。色彩范围在 3D 空间中的体积，反映不同亮度下的色彩还原能力 |

色域只测量色彩覆盖的"面积"，不反映不同亮度下的色彩表现。例如，OLED 在低亮度下可能因色调偏移而缩小有效色域体积，但 2D 色域覆盖率不受影响。[色量](https://www.rtings.com/tv/tests/picture-quality/color-volume)（单独测试）才是完整的色彩能力评估。

### CIE 1931 xy vs CIE 1976 u'v' [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#other-color-gamuts)

| 坐标系统 | 特点 | 实际影响 |
|---------|------|---------|
| CIE 1931 xy | 传统色度坐标系统，**人眼感知不均匀** | 绿色区域被过度放大，数值对绿色变化更敏感 |
| CIE 1976 u'v' | 改进的均匀色度坐标，**感知更均匀** | 更准确地反映人眼实际感知到的色彩差异 |

- 同一台电视在 **uv 坐标系**下的覆盖率数值通常**高于** xy 坐标系
- 这在 LCD 电视上尤为明显，因为 LCD 的绿色在 u'v' 坐标系下通常更接近目标
- 在比较不同电视时，应始终使用同一坐标系

### 显示技术与色域 [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#tone-mapping)

| 显示技术 | DCI-P3 覆盖率 (典型) | Rec.2020 覆盖率 (uv, 典型) | 技术原理 |
|---------|---------------------|---------------------------|---------|
| QD-OLED | ~99%+ | ~80%+ | 蓝光激发量子点产生纯红和纯绿，窄光谱高色纯 |
| 量子点 LED (高端) | ~97%+ | ~78%+ | 蓝光 LED + 量子点膜，量子点吸收蓝光后发射窄光谱红/绿 |
| WOLED | ~98% | ~73% | 白光 OLED + 彩色滤光片，宽光谱，三原色纯度相对较低 |
| 普通 LED (白光) | ~85-90% | ~60-65% | 白光 LED + 彩色滤光片，无量子点，色域受限 |

### 量子点 (Quantum Dot) 的优势 [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#advantage-of-quantum-dot-tvs)

[量子点](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#advantage-of-quantum-dot-tvs)技术是实现广色域的关键:
- **窄光谱发射**: 量子点受激发后发射极窄的光谱带，使三原色纯度极高
- **Rec.2020 提升**: 量子点技术显著提升 Rec.2020 覆盖率，是达到 ≥67% WCG 阈值的主要手段
- **不影响亮度效率**: 量子点转换效率高，在扩展色域的同时不会显著牺牲亮度
- **两大阵营**:
  - **QD-OLED** (三星): 蓝光 OLED 基板 + 量子点层，色域最广
  - **量子点 LED** (多家): 蓝光 LED 背光 + 量子点膜，性价比高

### 相关设置

| 设置 | 作用 | 建议 |
|------|------|------|
| Color Space / Color Gamut | 选择色域范围 | 选择"自动"或"最宽"以充分利用色域能力 |
| HDR 模式 | 确保色域完全展开 | HDR 信号下电视会自动切换到最宽色域 |
| 色温 (Color Temperature) | 影响色域测量的基准 | 暖色温 (Warm) 通常对应更准确的色彩 |
| 色彩增强 / 鲜艳模式 | 可能扩展或扭曲色域 | 建议关闭，使用标准模式测量真实色域 |

### 重要注意事项 [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#testing-color-gamut-on-tvs-vs-monitors)

- **本测试仅适用于电视 (TV)**: 显示器 (Monitor) 的色域测试方法完全不同，使用不同的测试图案、测量条件和评分标准，结果**不可互相对比**
- **SDR 色域不测试**: 所有现代电视都能完全覆盖 Rec.709 (SDR 色域)，因此无需测量
- **2025 快照数据限制**: 2025 年快照数据可能有限，完整内容参考 2024 年快照
- **75% stimulus 的一致性**: 所有测量在 75% stimulus 下进行，确保不同电视的可比性

### Test Bench 版本覆盖 [↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#other-notes)

| 版本 | 1.8 | 2.0+ |
|------|-----|------|
| DCI P3 xy | ✅ | ✅ |
| DCI P3 uv | ✅ | ✅ |
| Rec.2020 xy | ✅ | ✅ |
| Rec.2020 uv | ✅ | ✅ |
| Tone Mapping | ✅ | ✅ |
| 75% stimulus | ✅ | ✅ |
| 测试方法变更 | — | 无重大变更 |

> **注意**: 色域测试方法在不同 Test Bench 版本间变化较小，1.8 与 2.0 的结果基本可比。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#additional-information)

相关测试: [色量](https://www.rtings.com/tv/tests/picture-quality/color-volume) | [色彩准确度](https://www.rtings.com/tv/tests/picture-quality/color-accuracy)

[↗](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020#conclusion)
`;export{n as default};
