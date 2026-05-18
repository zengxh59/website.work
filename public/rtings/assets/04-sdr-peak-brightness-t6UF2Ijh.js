const n=`# SDR 峰值亮度 (SDR Peak Brightness)

> 来源: https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 页面更新: 2025-02-28
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

测量电视在 SDR（标准动态范围）内容下的峰值亮度表现。足够的 SDR 亮度在明亮房间中对抗环境光眩光时至关重要，可确保画面不显得洗白 (washed out)。与 [HDR](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness) 峰值亮度关注冲击力高光 (punchy highlights) 不同，SDR 峰值亮度更多关乎日常观看中的画面可辨识度和清晰度。

**何时重要**: 明亮房间观看时最为重要。足够亮度可克服屏幕反射和环境光，保持画面对比度和色彩饱和度。在暗室中观看 SDR 内容时，即使是较低亮度的电视也足以提供良好的观看体验。

**它是什么**: SDR (Standard Dynamic Range) 峰值亮度是电视在标准动态范围模式下能够输出的最高亮度水平。SDR 是大多数日常内容的格式（广播电视、流媒体 SDR 内容、游戏 SDR 模式等）。与 HDR 不同，SDR 内容没有高亮度元数据，但电视的 SDR 亮度能力直接决定了在明亮环境中的观看体验。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#when-it-matters)

## 测试方法

> **Test Bench 2.0 重大更新**:
> - **持续亮度 (Sustained Brightness) 不再纳入评分**，仅峰值亮度 (Peak Brightness) 参与评分
> - 新增 **SDR 真实场景视频测试**
> - Test Bench 1.8-1.11 的结果与 2.0 的**评分不直接可比**（原始测量值可比，但评分标准不同）
> - Test Bench 1.0-1.7 虽有测量但无评分（测量值记录但不产生分数）
> - 注意: 原始测量数据 (raw measurements) 在不同 Test Bench 版本间可比较；但**评分 (scores) 不可跨版本比较**

### 前置条件

- **设备校准状态**: 电视必须已完成校准 (post-calibration)，使用校准后的 SDR 画面模式设置
- **环境要求**: 完全暗室，无环境光源。环境光会影响低亮度测量精度
- **电视预热时间**: 电视需预热至稳定工作状态（建议至少 30 分钟以上），确保背光性能达到稳态
- **信号源设置**: 通过 PC 发送 SDR 信号，分辨率 4K @ 60Hz
- **画面模式设置**:
  - 选择最准确的 SDR 画面模式（校准后）
  - **背光设置为最大值 (100%)**
  - **色彩空间**: 自动
- **测量设备准备**:
  - CR-100: 主测量设备，需使用 CR-250 光谱辐射计完成校准
  - LS-100: 仅用于抽样验证 (spot-check)，非主要测量设备

### 测试组成

| 测试项目 | 信号源 | 测量设备 | 评分参与 |
|---------|--------|---------|---------|
| 5 种 APL 窗口 (Peak) | PC | CR-100 | ✅ 参与评分 |
| 5 种 APL 窗口 (Sustained) | PC | CR-100 | ❌ 不参与评分，仅参考 |
| SDR 真实场景视频 | PC | CR-100 | ✅ 参与评分 |
| ABL 系数 | 计算得出 | — | 辅助指标 |

### 详细测量步骤

#### A. APL 窗口测试

使用 5 种不同 [APL](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#our-tests) (Average Picture Level) 大小的白色矩形测试图案，与 HDR 峰值亮度测试使用相同的图案:

| 窗口大小 | APL | 模拟场景 | 物理意义 |
|---------|-----|---------|---------|
| 2% 窗口 | 2% | 小面积高光峰值 | 测试电视对小面积亮区的亮度能力 |
| 10% 窗口 | 10% | 太阳、明亮窗户 | 中等面积高光，SDR 峰值亮度参考标准 |
| 25% 窗口 | 25% | 较大亮区 | 中大面积混合场景 |
| 50% 窗口 | 50% | 大面积亮区 | 测试 ABL 启动阈值 |
| 100% 窗口 | 100% | 全屏白色 | 测试 ABL 极限，代表最不利场景 |

**SDR Peak Window（SDR 峰值窗口）测量步骤**:

1. 通过 PC 发送 SDR 信号，分辨率 4K @ 60Hz
2. 电视设置为: 校准后 SDR 画面模式 + **背光最大 (100%)** + 色彩空间自动
3. 依次显示 2%、10%、25%、50%、100% APL 白色窗口
4. 使用 **CR-100 色度计**（已通过 CR-250 光谱辐射计校准）记录每个窗口的瞬时峰值亮度
5. 记录每个窗口显示后亮度还未开始下降时的最高值 (peak luminance)
6. 峰值亮度即使只短暂出现也予以记录

**SDR Sustained Window（SDR 持续窗口）测量步骤**:

7. 使用与峰值窗口相同的 5 个测试图案
8. 等待数秒让亮度完全稳定后测量持续亮度值
9. **Test Bench 2.0 起**: 持续亮度**不再参与评分**，仅作为参考数据保留
10. 持续亮度数据用于计算 ABL 系数（见下文）

#### B. SDR 真实场景视频测试 (SDR Real Scene)

11. 播放 SDR 真实场景视频测试片段
12. 场景描述: 画面中有一盏灯从画面**左上角**开始，在画面中移动
13. 使用 **CR-100 色度计**跟踪灯的位置并实时测量其峰值亮度
    - CR-100 探头需要物理跟随灯的位置移动
    - 测量过程中操作人员需要手动或通过机械装置移动 CR-100 探头以保持对准灯光
14. 重复测试 **≥ 9 次** (至少 9 次)
    - 多次重复的目的是获得可靠的统计数据和排除测量误差
15. 从所有重复测量中取**最大非异常值** (max non-outlier) 作为最终结果
    - **异常值判定**: 如果某次测量的亮度值明显偏离其他测量值的集中范围，则判定为异常值并剔除
    - 异常值通常由测量设备未准确对准目标、瞬间信号干扰等原因导致
16. 使用 **LS-100 亮度计**进行抽样验证 (spot-check)
    - LS-100 仅用于辅助确认 CR-100 的测量结果，不作为主要数据来源

**SDR 真实场景与 HDR 真实场景的区别**:
- SDR 真实场景使用 **CR-100** 测量（而非 LS-100）
- SDR 真实场景通过 **PC** 输出（而非 Murideo 7G）
- SDR 真实场景的操作方式为 CR-100 跟踪移动灯光（HDR 真实场景为 LS-100 测量固定高光区域）

#### C. ABL 系数计算

17. 使用 SDR Sustained Window 的 5 个持续亮度测量值
18. 通过 PQ EOTF 将每个亮度值线性化（转换为感知均匀空间）
19. 计算线性化后亮度值的标准差
20. 该标准差即为 ABL 系数

### 数据处理与公式

**SDR 真实场景最终值**:

\`\`\`
SDR_Real_Scene = max_non_outlier(L₁, L₂, ..., Lₙ)

其中:
n ≥ 9 (至少 9 次重复测量)
max_non_outlier = 剔除异常值后的最大值
异常值判定: 明显偏离其他测量值集中范围的数据点
\`\`\`

**ABL 系数计算公式** (与 HDR 测试相同方法):

\`\`\`
ABL Coefficient = σ(PQ_linearized(L₁, L₂, ..., L₅))

其中:
L₁...L₅ = 5 个 APL 窗口的 SDR 持续亮度测量值 (cd/m²)
PQ_linearized() = 通过 PQ EOTF 函数将亮度值线性化
  - 使用 12-bit PQ EOTF 曲线
  - 曲线被分为 4096 级 (2¹² = 4096 段)
  - 低亮度区域每级对应更大感知变化，高亮度区域每级对应更小感知变化
σ() = 标准差函数
\`\`\`

**ABL 系数解读**:
- ABL = 0: 电视不根据亮区大小调节亮度，各 APL 窗口亮度一致
- ABL 值越大: 大面积亮区时亮度降低越明显
- PQ EOTF 线性化确保只计算人眼可感知的亮度差异

**评分结构 (Test Bench 2.0)**:
- 评分仅基于**峰值亮度** (Peak Brightness)
- 持续亮度 (Sustained Brightness) 仅作为参考数据，不参与评分
- 评分维度包括: 各 APL 窗口峰值 + SDR 真实场景峰值

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#how-to-get-the-best-results)

| 设备 | 型号 | 用途 | 备注 |
|------|------|------|------|
| 色度计 | Colorimetry Research CR-100 | APL 窗口和真实场景亮度测量 | **主测量设备**，用于所有 SDR 测量 |
| 光谱辐射计 | Colorimetry Research CR-250 | 校准 CR-100 | 确保 CR-100 的测量精度 |
| 亮度计 | Konica Minolta LS-100 | 真实场景亮度抽样验证 | 仅用于 spot-check，非主测量设备 |
| 校准软件 | Portrait Displays Calman | 数据采集与分析 | 连接 CR-100 进行实时亮度读取 |

> **设备分工说明**: SDR 测试中 CR-100 是主测量设备（已通过 CR-250 校准），LS-100 仅用于辅助验证。这与 HDR 测试不同——HDR 测试中真实场景使用 LS-100 作为主测量设备。

## 测试资源

### 测试图案

| 测试图案 | 描述 | 用途 |
|---------|------|------|
| APL 2% 窗口 | 黑色背景上的小面积白色矩形 | 测试小面积高光峰值亮度 |
| APL 10% 窗口 | 黑色背景上的中面积白色矩形 | SDR 峰值亮度参考标准 |
| APL 25% 窗口 | 黑色背景上的较大白色矩形 | 中大面积混合场景 |
| APL 50% 窗口 | 黑色背景上的大面积白色矩形 | 测试 ABL 启动阈值 |
| APL 100% 窗口 | 全屏白色 | 测试 ABL 极限 |

![APL 窗口测试图案](assets/test-patterns/2pct.png) ![APL 10%](assets/test-patterns/10pct.png) ![APL 25%](assets/test-patterns/25pct.png) ![APL 50%](assets/test-patterns/50pct.png) ![APL 100%](assets/test-patterns/100pct.png)
*5 种 APL 窗口测试图案：2%、10%、25%、50%、100%（从左到右）*

### 真实场景测试

| 资源 | 来源 | 用途 | 备注 |
|------|------|------|------|
| SDR 真实场景视频 | Rtings | 包含移动灯光的真实场景测试 | 灯从左上角开始移动，CR-100 跟踪测量 |

**SDR 真实场景视频描述**: 画面中有一盏灯从画面左上角开始，在画面中移动。CR-100 色度计探头需要物理跟随灯的位置，实时测量其峰值亮度。测试重复 ≥9 次，取最大非异常值。

### 辅助图表

![PQ EOTF 曲线](assets/test-patterns/pq-eotf-curve.png)
*PQ EOTF (Perceptual Quantizer) 曲线：用于将亮度值线性化到感知均匀空间，ABL 系数在此空间计算*

![SDR 峰值亮度测试页面示意](assets/methodology-diagrams/sdr-peak-brightness-hero.png)
*SDR 峰值亮度测试页面示意图：展示真实场景亮度和 APL 窗口测试的综合结果*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| **Real Scene Peak Brightness** | **50%** | > 500 cd/m² | 30 cd/m² |
| Peak 25% Window | **15%** | > 500 cd/m² | — |
| Peak 10% Window | **12.5%** | > 500 cd/m² | — |
| Peak 50% Window | **12.5%** | > 500 cd/m² | — |
| Peak 2% Window | **5%** | — | — |
| Peak 100% Window | **5%** | — | — |

> SDR 真实场景测试占据评分的 **50%** 权重，是评分的核心指标。

**重要变更 (Test Bench 2.0)**:
- 评分**仅基于峰值亮度** (Peak Brightness)
- **持续亮度不再参与评分** (Sustained Brightness removed from scoring)
- Test Bench 1.0-1.7 虽有测量但无评分
- Test Bench 1.8-1.11 有评分但标准不同
- **评分不可跨 Test Bench 版本比较**（原始测量值可比，评分不可比）

### 可感知差异阈值

| 子测试 | 可感知差异 | 说明 |
|--------|-----------|------|
| SDR Real Scene | **30 cd/m²** | 真实场景峰值亮度差异需 ≥ 30 cd/m² 才能被人眼感知 |
| ABL 系数 | **0.01** | PQ 线性化后的标准差差异 |
| APL 窗口峰值 | 未明确公布 | — |

### 评分参考范围

**SDR 峰值亮度参考 (10% 窗口)**:

| 等级 | SDR 峰值亮度 (10% 窗口) | 使用场景 |
|------|--------------------------|---------|
| 优秀 | > 1,000 cd/m² | 极亮房间也无压力，可轻松克服任何环境光 |
| 良好 | 600 - 1,000 cd/m² | 大多数明亮环境表现良好 |
| 一般 | 350 - 600 cd/m² | 中等亮度房间可接受，极亮房间可能偏暗 |
| 较差 | < 350 cd/m² | 明亮环境中画面可能偏暗或洗白 |

**SDR 真实场景亮度参考**:

| 等级 | SDR 真实场景峰值 | 使用场景 |
|------|-----------------|---------|
| 优秀 | > 800 cd/m² | 任何环境均可应对 |
| 良好 | 500 - 800 cd/m² | 明亮房间表现良好 |
| 一般 | 300 - 500 cd/m² | 中等亮度房间可接受 |
| 较差 | < 300 cd/m² | 明亮环境中不够亮 |

## 关键指标

### 品牌背光设置名称

不同品牌将背光/亮度控制称为不同名称，测试时需确保调整的是正确的控制项:

| 品牌 | SDR 背光控制名称 | 备注 |
|------|----------------|------|
| 大多数品牌 | Backlight（背光） | 直接控制背光亮度 |
| LG (OLED) | OLED Pixel Brightness | OLED 像素亮度 |
| LG (LED) | Backlight | 与大多数品牌一致 |
| Samsung | Backlight | 直接控制背光亮度 |
| Sony | Brightness | 注意: 这里的 "Brightness" 是背光控制，不是黑电平 |
| 部分 LG 型号 | Light Sensor / Eco Mode | 环境光自适应，测试时应关闭 |

> **常见混淆**: 部分品牌有两个 "Brightness" 控制——一个控制背光（实际亮度输出），一个控制黑电平（暗部亮度）。确保在测试和日常使用中调整的是**背光控制**项。

### SDR vs HDR 亮度差异 [↗](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#bright-rooms)

| 特征 | SDR | HDR |
|------|-----|-----|
| 典型峰值目标 | 100-500 cd/m² | 500-2000+ cd/m² |
| 主要目的 | 对抗环境光，保持画面清晰 | 冲击力高光 + 动态范围扩展 |
| 亮度不足的影响 | 画面洗白、色彩不饱和 | 高光不突出、HDR 效果打折 |
| 测试信号 | SDR，4K @ 60Hz | HDR10，4K @ 60Hz |
| 主测量设备 | CR-100 | CR-100 (窗口) + LS-100 (真实场景) |
| 背光设置 | 手动最大 | 自动最大 (通常) |
| 白点校准 | 使用校准后设置 | 额外校准至 6500K (Test Bench 1.7+) |

### 相关设置 [↗](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#recommended-settings)

| 设置 | 作用 | 建议 |
|------|------|------|
| Backlight/Brightness（背光/亮度） | 直接控制 SDR 亮度输出。HDR 时通常自动最大，但 SDR 可手动调节 | 明亮房间设为最大，暗室可适当降低 |
| Eco Mode/Light Sensor（节能模式/光线传感器） | 根据环境光自动调节亮度 | 可能导致亮度频繁变化，测试和观看时建议关闭 |
| ABL（自动亮度限制器） | 大面积亮区时自动降低亮度 | 不可关闭（硬件固有行为），影响全屏内容 |

### Test Bench 版本覆盖

| 版本 | 1.0-1.7 | 1.8-1.11 | 2.0+ |
|------|---------|----------|------|
| 5 种 APL 窗口测试 (测量) | ✅ | ✅ | ✅ |
| SDR 真实场景视频 | 无 | 无 | ✅ 新增 |
| 评分存在 | ❌ 无评分 | ✅ 有评分 | ✅ 有评分 |
| 持续亮度参与评分 | N/A | ✅ 参与 | ❌ 不再参与 |
| ABL 系数 | ✅ | ✅ | ✅ |
| 原始数据可比性 | ✅ 可比 | ✅ 可比 | ✅ 可比 |
| 评分可比性 | N/A | 基准 | ❌ 不可比 |

> **关键提醒**:
> - 原始测量值 (raw measurements) 在不同 Test Bench 版本间可比较
> - **评分 (scores) 不可跨版本比较**，特别是 1.8-1.11 与 2.0+ 之间
> - 2.0 移除了持续亮度的评分权重，新增了真实场景测试，评分结构已根本改变

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#additional-information)

相关测试: [HDR 峰值亮度](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness)
[↗](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness#conclusion)
`;export{n as default};
