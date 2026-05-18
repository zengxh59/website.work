const n=`# HDR 峰值亮度 (HDR Peak Brightness)

> 来源: https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness
> Test Bench: [2.2](https://www.rtings.com/tv/tests/changelogs/2-2) (v1.8)
> 页面更新: 2025-02-28
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

测量电视在 HDR 内容下的亮度表现，包括整体亮度和高光峰值亮度。更高的峰值亮度使 HDR 高光更加突出，直接影响 HDR 观看体验。该测试在启用局部调光的情况下进行。

**何时重要**: HDR 电影和节目中的冲击力高光 (punchy highlights)，以及在明亮房间中对抗眩光时。与 [SDR](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness) 主要用于对抗环境光不同，HDR 峰值亮度更多关乎整体画质——更亮的高光意味着更生动的色彩和更大的动态范围。如果 HDR 峰值亮度不足，高光场景会显得平淡，HDR 内容与 SDR 内容的视觉差异将大打折扣。

**它是什么**: HDR (High Dynamic Range) 峰值亮度是电视在 HDR 模式下能够输出的最高亮度水平。HDR 内容的元数据包含比 SDR 更宽的亮度范围信息，电视需要足够的亮度能力来呈现这些高光。该测试不仅测量测试图案下的峰值亮度，更重要的是测量真实 HDR 场景中的实际亮度表现。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#when-it-matters)

## 测试方法

> **Test Bench 1.7 重大更新**:
> - 新增三个 HDR 真实场景测试 (Hallway Lights, Yellow Skyscraper, Landscape Pool)
> - 测量前校准 HDR 白点至 **6500K** (D65)
> - 1.6 及之前版本的结果与 1.7+ **不可直接比较**
> - PQ EOTF 追踪测试原属 HDR 峰值亮度测试套件，自 1.8 起独立为单独测试

### 前置条件

- **设备校准状态**: 电视必须已完成校准 (post-calibration)。HDR 白点需校准至 **6500K** (D65 标准白点)。此校准步骤自 Test Bench 1.7 起为强制要求
- **环境要求**: 完全暗室，无环境光源。任何环境光都可能影响低亮度测量的精度
- **电视预热时间**: 电视需预热至稳定工作状态（建议至少 30 分钟以上），背光和面板性能需达到热稳态
- **信号源设置**:
  - APL 窗口测试: 通过 PC 发送 HDR10 信号，分辨率 4K @ 60Hz
  - 真实场景测试: 通过 Murideo 7G 信号发生器输出 HDR10 真实场景视频
- **画面模式设置**:
  - 选择最准确的 HDR 画面模式（校准后）
  - **背光/亮度设置为最大值 (100%)**
  - **局部调光启用**（最佳档位）
  - **色彩空间**: 自动或最宽设置
- **测量设备准备**:
  - CR-100: 用于 APL 窗口测试图案的亮度测量，需已完成校准
  - Konica Minolta LS-100: 用于真实场景视频的亮度测量，需已完成校准

### 测试组成

测试分为两组测量：**静态测试窗口**（5 种 APL 窗口）+ **真实场景测试**（3 个 HDR 视频）。真实场景测试是评分的核心，因为它们反映真实内容下的实际表现。

| 测试项目 | 信号源 | 测量设备 | 评分权重 |
|---------|--------|---------|---------|
| 5 种 APL 窗口 (Peak) | PC | CR-100 | 参考数据 |
| 5 种 APL 窗口 (Sustained) | PC | CR-100 | 用于计算 ABL 系数 |
| Hallway Lights 真实场景 | Murideo 7G | Konica Minolta LS-100 | 评分核心 |
| Yellow Skyscraper 真实场景 | Murideo 7G | Konica Minolta LS-100 | 评分核心 |
| Landscape Pool 真实场景 | Murideo 7G | Konica Minolta LS-100 | 评分核心 |
| [ABL](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#additional-information) 系数 | 计算得出 | — | 辅助指标 |
| 游戏模式 HDR | 同上 | 同上 | 辅助指标 |

### 详细测量步骤

#### A. APL 窗口测试 (静态测试图案)

使用 5 种不同 [APL](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#our-tests) (Average Picture Level) 大小的白色矩形测试图案，背景为纯黑:

| 窗口大小 | APL | 模拟场景 | 物理意义 |
|---------|-----|---------|---------|
| 2% 窗口 | 2% | 星星、灯光反射、远处爆炸 | 小面积高光峰值，测试局部调光的极限能力 |
| 10% 窗口 | 10% | 太阳、明亮窗户 | 中等面积高光 |
| 25% 窗口 | 25% | 较大亮区 | 中大面积混合场景 |
| 50% 窗口 | 50% | 大面积亮区 | 测试 ABL 启动阈值 |
| 100% 窗口 | 100% | 全屏白色 | 测试 ABL 极限，代表最不利场景 |

**HDR Peak Window（HDR 峰值窗口）测量步骤**:

1. 通过 PC 发送 HDR10 信号，分辨率 4K @ 60Hz
2. 电视设置为: 校准后 HDR 画面模式 + 背光最大 + 白点 6500K + 局部调光最佳档位
3. 依次显示 2%、10%、25%、50%、100% APL 白色窗口
4. 使用 CR-100 色度计对每个窗口进行测量
5. 记录每个窗口显示后的**瞬时峰值亮度** (peak luminance)，即亮度还未开始下降时的最高值
   - Peak = 即使是短暂瞬间达到的最高亮度也记录
6. 同时记录亮度随时间的变化曲线，用于后续分析 ABL 行为

**HDR Sustained Window（HDR 持续窗口）测量步骤**:

7. 使用与峰值窗口相同的 5 个测试图案
8. 等待数秒让亮度完全稳定后测量持续亮度值
   - 持续亮度代表长时间显示相同内容时的实际亮度
   - 对应实际使用场景: 冰球转播的全白冰面、新闻节目的明亮背景等
9. HDR 模式下电视随时间变暗是正常行为——HDR 高光本就是短时间强亮度爆发
10. 持续亮度数据同时用于计算 ABL 系数

#### B. 真实场景测试 (评分核心)

使用 Murideo 7G 信号发生器输出三个真实 HDR 场景视频，用 Konica Minolta LS-100 亮度计测量场景中特定高光区域的峰值亮度。这三个测试构成评分的**核心**，因为它们反映真实 HDR 内容的实际表现，而非人工测试图案的极限值。

**测试场景 1: Hallway Lights（走廊灯光）**

11. 通过 Murideo 7G 播放 Hallway Lights HDR 视频片段
12. 使用 LS-100 测量走廊中两盏顶灯的峰值亮度
13. 取两盏灯中亮度**较高**的值作为结果
14. **目标亮度**: 约 **1950 cd/m²**
15. **场景特征**:
    - **高 APL** (Average Picture Level): 整体场景较亮，走廊墙壁反射大量光线
    - **小面积高光**: 灯具本身只占画面很小比例
    - **测试意义**: 评估小面积高光在相对明亮场景中的表现。高 APL 环境下，许多电视的 ABL 会降低整体亮度，使小面积高光也无法达到应有亮度
16. 记录测量值

**测试场景 2: Yellow Skyscraper（黄色摩天楼）**

17. 通过 Murideo 7G 播放 Yellow Skyscraper HDR 视频片段
18. 使用 LS-100 测量桥拱附近明亮黄色摩天楼的峰值亮度
19. **目标亮度**: 约 **700 cd/m²**
20. **场景特征**:
    - **低 APL**: 整体场景较暗，大部分画面为暗色建筑和天空
    - **中面积高光**: 黄色摩天楼在画面中占中等比例
    - **测试意义**: 很多高亮度电视在此场景中会**超出**目标亮度，因为低 APL 环境下 ABL 限制较少，电视可以将更多亮度预算分配给高光区域
21. 记录测量值

**测试场景 3: Landscape Pool（景观泳池）**

22. 通过 Murideo 7G 播放 Landscape Pool HDR 视频片段
23. 使用 LS-100 测量画面底部边缘泳池上小三角形区域的峰值亮度
24. **目标亮度**: 约 **300 cd/m²**
25. **场景特征**:
    - **中等 APL**: 画面有明有暗，亮度分布较为均衡
    - **测试意义**: 评估日常 HDR 内容的亮度表现。300 cd/m² 的目标代表大多数实际 HDR 内容中的典型高光水平
26. 记录测量值

#### C. ABL 系数计算

27. 使用 HDR Sustained Window 的 5 个持续亮度测量值
28. 通过 PQ EOTF 将每个亮度值线性化（转换为感知均匀空间）
29. 计算线性化后亮度值的标准差
30. 该标准差即为 ABL 系数

#### D. 游戏模式 HDR 测试

31. 将电视切换至 **Game Mode**（游戏模式）
32. 如支持则启用 **局部调光**
33. 重复上述所有真实场景和 APL 窗口测试
34. 比较游戏模式与标准模式下的差异:
    - 部分型号（如 LG C4 OLED）在 Game Mode 下 HDR 亮度明显降低
    - 部分型号在两种模式下表现几乎相同
35. 记录游戏模式下的所有测量值

### 数据处理与公式

**ABL 系数计算公式**:

\`\`\`
ABL Coefficient = σ(PQ_linearized(L₁, L₂, ..., Lₙ))

其中:
L₁...Lₙ = 5 个 APL 窗口的持续亮度测量值 (cd/m²)
PQ_linearized() = 通过 PQ EOTF 函数将亮度值线性化
σ() = 标准差函数
\`\`\`

**PQ EOTF 线性化方法**:
- 使用 12-bit PQ (Perceptual Quantizer) EOTF 曲线
- 曲线被分为 4096 级（2¹² = 4096 段）
- 每一级对应的人眼可感知亮度差异不同:
  - 低亮度区域: 每一级对应更大的感知亮度变化
  - 高亮度区域: 每一级对应更小的感知亮度变化
- PQ EOTF 线性化确保 ABL 系数反映**人眼实际感知**的亮度差异

**ABL 系数解读**:
- ABL = 0: 电视不根据亮区大小调节亮度，各 APL 窗口亮度一致
- ABL 值越大: 大面积亮区时亮度降低越明显（OLED 通常 ABL 值较高）

**真实场景评分**: 评分主要基于三个真实场景的亮度表现，而非测试图案的峰值亮度。

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#how-to-get-the-best-results)

| 设备 | 型号 | 用途 | 备注 |
|------|------|------|------|
| 色度计 | Colorimetry Research CR-100 | APL 窗口测试图案亮度测量 | 用于 5 种 APL 窗口的峰值和持续亮度测量 |
| 亮度计 | Konica Minolta LS-100 | 真实场景视频亮度测量 | 用于 3 个 HDR 真实场景的峰值亮度测量 |
| 信号发生器 | Murideo Seven G (7G) | HDR 真实场景视频输出 | 输出 Hallway Lights / Yellow Skyscraper / Landscape Pool |
| 校准软件 | Portrait Displays Calman | 数据采集与分析 | 连接 CR-100 和 LS-100 进行数据记录 |

> **设备分工说明**: CR-100 用于静态测试图案（PC 信号源），LS-100 用于真实场景视频（Murideo 7G 信号源）。两者分工明确，不可互换。

## 测试资源

### APL 窗口测试图案

| 测试图案 | APL | 用途 |
|---------|-----|------|
| APL 2% 窗口 | 2% | 小面积高光峰值亮度 |
| APL 10% 窗口 | 10% | 中等面积高光 |
| APL 25% 窗口 | 25% | 中大面积混合场景 |
| APL 50% 窗口 | 50% | ABL 启动阈值测试 |
| APL 100% 窗口 | 100% | 全屏亮度，ABL 极限测试 |

![APL 窗口测试图案](assets/test-patterns/2pct.png) ![APL 10%](assets/test-patterns/10pct.png) ![APL 25%](assets/test-patterns/25pct.png) ![APL 50%](assets/test-patterns/50pct.png) ![APL 100%](assets/test-patterns/100pct.png)
*5 种 APL 窗口测试图案（从左到右：2%、10%、25%、50%、100%）*

### HDR 真实场景视频

| 场景视频 | 来源 | 目标亮度 | 场景特征 |
|---------|------|---------|---------|
| Hallway Lights | Murideo | ~1,950 cd/m² | 高 APL，走廊顶灯，小面积高光 |
| Yellow Skyscraper | Murideo | ~700 cd/m² | 低 APL，黄色摩天楼，中面积高光 |
| Landscape Pool | Murideo | ~300 cd/m² | 中等 APL，泳池高光 |

### 辅助图表

![PQ EOTF 曲线](assets/test-patterns/pq-eotf-curve.png)
*PQ EOTF 曲线：用于 ABL 系数计算时的亮度线性化*

![HDR 峰值亮度测试页面示意](assets/methodology-diagrams/hdr-peak-brightness-hero.png)
*HDR 峰值亮度测试页面示意图：展示真实场景亮度和 APL 窗口测试的综合结果*

### HDR 真实场景测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_4))

![Hallway Lights 场景](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/hdr-brightness-photo-hallway-small.jpg) ![Yellow Skyscraper 场景](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/hdr-brightness-photo-cityscape-small.jpg)
*HDR 真实场景亮度：Hallway Lights（左）和 Yellow Skyscraper（右）*

![Landscape Pool 场景](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/hdr-brightness-photo-landscape-small.jpg) ![PQ EOTF 追踪图](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/pqeotf-graph-small.jpg)
*Landscape Pool 场景（左）和 PQ EOTF 追踪曲线（右）*

![游戏模式 Hallway](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/hdr-brightness-game-photo-hallway-small.jpg) ![游戏模式 Cityscape](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/hdr-brightness-game-photo-cityscape-small.jpg)
*游戏模式下 HDR 亮度：Hallway（左）和 Cityscape（右）*

![游戏模式 Landscape](assets/product-examples/lg-c4-oled/03-hdr-peak-brightness/hdr-brightness-game-photo-landscape-small.jpg)
*游戏模式下 Landscape Pool 场景的 HDR 亮度表现*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_4))

![Hallway Lights 场景](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/hdr-brightness-photo-hallway-small.jpg) ![Yellow Skyscraper 场景](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/hdr-brightness-photo-cityscape-small.jpg)
*HDR 真实场景亮度：Hallway Lights（左）和 Yellow Skyscraper（右）*

![Landscape Pool 场景](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/hdr-brightness-photo-landscape-small.jpg) ![PQ EOTF 追踪图](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/pqeotf-graph-small.jpg)
*Landscape Pool 场景（左）和 PQ EOTF 追踪曲线（右）*

![游戏模式 Hallway](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/hdr-brightness-game-photo-hallway-small.jpg) ![游戏模式 Cityscape](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/hdr-brightness-game-photo-cityscape-small.jpg)
*游戏模式下 HDR 亮度：Hallway（左）和 Cityscape（右）*

![游戏模式 Landscape](assets/product-examples/samsung-qn90f/03-hdr-peak-brightness/hdr-brightness-game-photo-landscape-small.jpg)
*游戏模式下 Landscape Pool 场景的 HDR 亮度表现*

> **版权说明**: Murideo 真实场景视频有版权限制，Rtings 无法公开分享原始文件。

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 |
|--------|------|---------|
| **Hallway Lights** (~1950 cd/m²) | **20%** | > 1000 cd/m² |
| **Yellow Skyscraper** (~700 cd/m²) | **20%** | > 400 cd/m² |
| **Landscape Pool** (~300 cd/m²) | **20%** | > 175 cd/m² |
| Peak 2% Window | **12.5%** | > 1000 cd/m² |
| Peak 10% Window | **10%** | > 1000 cd/m² |
| Peak 25% Window | **7.5%** | — |
| Peak 50% Window | **5%** | — |
| Peak 100% Window | **5%** | — |

> 真实场景测试合计占 **60%** 权重，APL 窗口测试合计占 **40%**。
> Game Mode HDR 部分使用完全相同的权重结构。

### 可感知差异阈值

| 子测试 | 可感知差异 | 说明 |
|--------|-----------|------|
| ABL 系数 | 0.01 | PQ 线性化后的标准差差异 |
| 真实场景亮度 | 未明确公布 | — |

### 评分参考范围

**HDR 峰值亮度参考 (以 10% 窗口为例)**:

| 等级 | 峰值亮度 (10% 窗口) | 典型技术 |
|------|---------------------|---------|
| 优秀 | > 1500 cd/m² | 高端 Mini LED (如 TCL QM89) |
| 良好 | 800 - 1500 cd/m² | 中高端 Mini LED |
| 一般 | 400 - 800 cd/m² | OLED、普通 LED |
| 较差 | < 400 cd/m² | 低端 LED、小尺寸 OLED |

**真实场景亮度参考**:

| 等级 | Hallway Lights | Yellow Skyscraper | Landscape Pool |
|------|---------------|-------------------|----------------|
| 优秀 | 接近 1950 cd/m² | 超过 700 cd/m² | 接近 300 cd/m² |
| 良好 | 1000-1500 cd/m² | 500-700 cd/m² | 200-300 cd/m² |
| 一般 | 500-1000 cd/m² | 300-500 cd/m² | 100-200 cd/m² |
| 较差 | < 500 cd/m² | < 300 cd/m² | < 100 cd/m² |

## 关键指标

### PQ EOTF 与亮度线性化 [↗](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#pq-eotf)

PQ (Perceptual Quantizer) EOTF 是 HDR10 和 Dolby Vision 使用电光转换函数，将数字信号值 (code value) 转换为屏幕亮度。在 12-bit 系统中，PQ 曲线被分为 4096 级:

- **低亮度区域**: 每一级对应更大的感知亮度变化。例如: 25 → 20 cd/m² 的变化比 100 → 95 cd/m² 更容易被察觉
- **高亮度区域**: 每一级对应更小的感知亮度变化

ABL 系数使用 PQ EOTF 线性化所有亮度测量值，确保计算结果反映人眼实际感知而非物理亮度的简单数学差异。

### 面板类型与 HDR 亮度

| 面板类型 | HDR 峰值亮度特点 | ABL 行为 | 典型峰值 (10% 窗口) |
|---------|----------------|---------|---------------------|
| OLED | 单像素亮度有限 (~200-400 cd/m² 全屏) | ABL 明显，大面积亮区亮度大幅下降 | 200-400 cd/m² (100%) / 800-2000+ cd/m² (2%) |
| Mini LED | 高峰值亮度 (1000+ cd/m²) | ABL 中等到明显 | 1000-5000+ cd/m² |
| 传统 LED | 中等亮度 | ABL 限制较少 | 400-800 cd/m² |

### 相关设置 [↗](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#recommended-settings)

| 设置 | 作用 | 建议 |
|------|------|------|
| Backlight/Brightness（背光/亮度） | 控制整体亮度，HDR 时通常自动最大 | 不建议降低，HDR 内容本身设定场景亮度 |
| Local Dimming（局部调光） | 可提升高光亮度 | 启用最佳档位 |
| Contrast（对比度设置） | 增加最白亮度 | 可能导致亮部裁剪，影响画质 |
| Eco Mode/Light Sensor | 可能导致亮度频繁变化 | 建议关闭 |

### Test Bench 版本覆盖

| 版本 | 1.6 及之前 | 1.7+ | 1.8+ |
|------|-----------|------|------|
| 三个 HDR 真实场景测试 | 无 | ✅ 新增 | ✅ |
| 测量前校准白点至 6500K | 无 | ✅ 新增 | ✅ |
| PQ EOTF 追踪 | 属于 HDR 亮度测试 | 属于 HDR 亮度测试 | ✅ 独立测试 |
| ABL 系数 | ✅ | ✅ | ✅ |
| 游戏模式 HDR | — | — | ✅ |
| 与 1.7+ 可比 | **否** | 基准 | ✅ |

> **关键提醒**: 1.6 及之前版本的结果与 1.7+ **不可直接比较**，因为 1.7 新增了真实场景测试和 6500K 白点校准。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#additional-information)

相关测试: [SDR 峰值亮度](https://www.rtings.com/tv/tests/picture-quality/sdr-peak-brightness) | [色量](https://www.rtings.com/tv/tests/picture-quality/color-volume)
[↗](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#conclusion)
`;export{n as default};
