const n=`# HDR 色彩准确度 (HDR Color Accuracy)

> 来源: https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy
> Wayback 快照: 2025-12-18T08:37:01
> Test Bench: [2.0](https://www.rtings.com/tv/tests/changelogs/2-2) 起 (v1.8)
> 页面最后修改: 2025-03-26
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

HDR 色彩准确度测试评估电视在 HDR10 模式下显示广色域内容的色彩还原能力。随着 HDR 成为广泛使用的格式，了解电视开箱即用的 HDR 色彩准确度以及是否需要校准变得尤为重要。该测试在 Test Bench 2.0 中新增，之前版本无等效测试。

**定义**: 电视在 HDR10 模式下校准前的色彩准确度，使用最佳画面模式 (The TV's HDR10 color accuracy before a full calibration, in the picture mode that provides the best results)

**重要场景**: 未校准电视上的所有 HDR10 视频内容 (All HDR10 video content on an uncalibrated TV)。随着 HDR 电影、电视剧和游戏内容的大量增加，HDR 色彩准确度对日常观看体验的影响日益显著。

**HDR 与 SDR 色彩准确度的区别**: HDR 内容使用 PQ (ST 2084) 传递函数和 DCI-P3/Rec.2020 广色域，亮度范围远超 SDR。因此 HDR 色彩准确度测试采用不同的度量标准（dE ITP 而非 dE2000），结果与[SDR 色彩准确度](https://www.rtings.com/tv/tests/picture-quality/color-accuracy)测试不可直接比较。

### Test Bench 版本覆盖 [↗](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy#test-methodology-coverage)

该测试作为 Test Bench 2.0 更新的一部分添加。在此之前无等效测试，因此未在 2.0 或更高版本上测试过的电视没有这些结果。

| 测试项目 | Test Bench 1.11 | Test Bench 2.0 |
|---------|-----------------|----------------|
| HDR 校准前白平衡 dE ITP | 不支持 | 支持 |
| HDR 校准前色彩 dE ITP | 不支持 | 支持 |
| HDR 校准前色温 | 不支持 | 支持 |
| HDR 校准后白平衡 dE ITP | 不支持 | 支持 |
| HDR 校准后色彩 dE ITP | 不支持 | 支持 |
| HDR 校准后色温 | 不支持 | 支持 |

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy#when-it-matters)

## 测试方法

### 前置条件

1. **电视预热**: 电视必须充分预热后再进行任何测量。HDR 模式下亮度更高，预热不充分会导致白平衡和色温随温度漂移。通常需要运行至少 30 分钟 HDR 内容进行预热。
2. **环境要求**: 完全暗室环境，避免任何环境光影响测量探头读数。
3. **设备校准序列**:
   - 使用 CR-250 光谱仪对 CR-100 色度计进行四轮矩阵校准（4-matrix calibration），确保 CR-100 的光谱响应与被测电视的 HDR 背光光谱匹配
   - CR-100 和 CR-250 通过 USB 连接至运行 Calman 软件的 PC
   - 注意: HDR 测试使用 **HDFury VRROOM** 进行信号路由，而非 SDR 测试中的 Murideo Six G
4. **信号配置**: HDFury VRROOM 配置为输出 HDR10 信号格式
5. **画面模式选择**: 选择电视最准确的 HDR 画面模式（通常为 Filmmaker、Movie 或 Cinema 模式，因品牌而异）——选择开箱即用最准确的模式
6. **局部调光**: 如有局部调光功能，设置为 "High"（高），以获得最佳的 HDR 黑位和对比度

### 详细测量步骤

#### A. 校准前 (Pre-Calibration) 测量

**步骤 1 — 设置电视参数**

1. 选择该品牌最准确的 HDR 画面模式（通常为 Filmmaker / Movie / Cinema）
2. 局部调光设为 "High"（如可用）
3. 色彩空间设为 "Auto"（自动识别 HDR10 信号并切换至广色域）
4. 不进行任何手动色彩调整——测试目的正是评估"开箱即用"的 HDR 色彩准确度

**步骤 2 — 子测试 1: 白平衡 dE ITP 测量**

1. 通过 HDFury VRROOM 向电视发送 HDR10 灰阶测试图案
2. 从白色到黑色的灰阶，每 5% 增量测量一次，共 20 个灰阶
3. 每个灰阶由 Calman 软件通过 CR-100（已用 CR-250 校准至该电视）自动测量色度坐标和亮度
4. 记录每个灰阶的红、绿、蓝三色跟踪情况
5. 对每个灰阶计算 dE ITP 值
6. 最终白平衡 dE ITP = 所有灰阶 dE ITP 的算术平均值

**步骤 3 — 子测试 2: 色温测量**

1. 与白平衡测试使用同一组灰阶测量数据
2. 从每个灰阶的色度坐标 (x, y) 计算相关色温 (CCT)
3. 记录所有灰阶的平均色温
4. 目标值：6500K（D65 白点标准，即 6504K）

**步骤 4 — 子测试 3: 色彩 dE ITP 测量**

1. 通过 HDFury VRROOM 发送 HDR10 色彩测试图案
2. 对 6 种颜色（红 R、绿 G、蓝 B、黄 Y、品红 M、青 C）分别测量
3. 对每种颜色计算 dE ITP 值
4. 最终色彩 dE ITP = 所有颜色 dE ITP 的算术平均值
5. 图表可视化: 每种颜色的测量点在 CIE 色度图中以黑色圆点表示，目标点以白色方块表示——黑点落在白色方块内表示该颜色准确度良好

#### B. 校准后 (Post-Calibration) 测量

**步骤 5 — HDR 白平衡校准**

1. 使用电视内置的 HDR 白平衡调整工具进行校准
2. 校准原则与 SDR 相同: 避免极端调整，保持灰阶过渡自然
3. 部分电视的 HDR 校准选项可能比 SDR 更有限
4. 校准完成后，重新运行步骤 2-4 的全部测量

**步骤 6 — 记录校准后数据**

1. 记录校准后的白平衡 dE ITP、色温和色彩 dE ITP
2. 保存 Calman HDR 校准报告

### 数据处理与公式

**dE ITP 计算说明** (基于 ICtCp 色彩空间的 Delta E ITP):

dE ITP 基于 ITU-R BT.2100 定义的 ICtCp 色彩空间:

1. 首先将测量值从 XYZ 转换至 ICtCp 色彩空间
   - I (Intensity): 亮度分量
   - CT (Chroma Tritan): 蓝-黄色度分量
   - Cp (Chroma Protan): 红-绿色度分量
2. 计算 dE ITP = 720 * sqrt( ΔI² + ΔCT² + ΔCp² )
3. 其中 ΔI、ΔCT、ΔCp 分别为测量值与目标值在 ICtCp 三个分量上的差异

**dE ITP vs dE2000 的关键差异**:

| 特性 | dE2000 (SDR) | dE ITP (HDR) |
|------|-------------|-------------|
| 基础色彩空间 | CIELAB | ICtCp |
| 感知均匀性 | 在高饱和蓝色区域存在已知缺陷 | 在整个色彩空间中更均匀 |
| 数值范围 | 通常 0-10 | 通常 0-20+ |
| HDR 适用性 | 非设计用于 HDR 亮度范围 | 专门为 HDR/PQ 传递函数设计 |
| **可比较性** | **两者不可直接比较数值** | **两者不可直接比较数值** |

**色温计算**: 与 SDR 测试相同，使用色度坐标通过 McCamy 近似公式转换为 CCT。

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy#our-tests)

## 测试设备

| 设备 | 型号 | 用途 | 与 SDR 测试的差异 |
|------|------|------|------------------|
| 色度计 | Colorimetry Research CR-100 | 校准至被测电视后执行 HDR 亮度和色度测量 | 相同设备 |
| 光谱仪 | Colorimetry Research CR-250 | 校准 CR-100 至被测电视的 HDR 光谱特性 | 相同设备 |
| 信号路由器 | HDFury VRROOM | HDR10 测试信号路由和传输 | **不同于 SDR 的 Murideo Six G** |
| 校准软件 | Portrait Displays Calman | HDR 自动化测量工作流、数据分析 | 使用 HDR 专用工作流 |

**重要说明**: HDFury VRROOM 在本测试中的角色是 HDR 信号路由和传输，而非信号发生器。它与 SDR 测试中使用 Murideo Six G 的原因不同——HDR10 信号需要特殊的元数据传输支持（静态元数据 SMPTE ST 2086）。

## 测试资源

| 资源 | 规格 | 用途 |
|------|------|------|
| HDR10 灰阶测试图案 | 5%-100%，每 5% 增量 | 白平衡 dE ITP 和色温测量 |
| HDR10 色彩测试图案 | 6 色 (RGBYMC) | 色彩 dE ITP 测量 |
| Calman HDR ColorChecker 工作流 | 自动化 | HDR 全流程测量自动化 |
| HDFury VRROOM HDR10 信号配置 | 静态元数据 ST 2086 | 确保 HDR10 信号正确传输 |

### 测试结果示例

![HDR 校准前白平衡准确度](assets/test-patterns/hdr-pre-white-balance-example.jpg)
*HDR 校准前白平衡准确度示例：dE ITP 测量结果*

![HDR 校准前色彩准确度](assets/test-patterns/hdr-pre-color-example.jpg)
*HDR 校准前色彩准确度示例：dE ITP 色度图*

![HDR 色彩准确度测试页面示意](assets/methodology-diagrams/hdr-color-accuracy-hero.png)
*HDR 色彩准确度测试页面示意图：展示白平衡 dE、色彩 dE 和色温的 HDR 测量结果*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_29341))

![HDR 校准前白平衡](assets/product-examples/lg-c4-oled/10-color-accuracy/hdr-pre-white-balance-small.jpg) ![HDR 校准后白平衡](assets/product-examples/lg-c4-oled/10-color-accuracy/hdr-post-white-balance-small.jpg)
*HDR 白平衡 dE：校准前（左）vs 校准后（右）*

![HDR 校准前色彩](assets/product-examples/lg-c4-oled/10-color-accuracy/hdr-pre-color-small.jpg) ![HDR 校准后色彩](assets/product-examples/lg-c4-oled/10-color-accuracy/hdr-post-color-small.jpg)
*HDR 色彩 dE：校准前（左）vs 校准后（右）*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_29341))

![HDR 校准前白平衡](assets/product-examples/samsung-qn90f/10-color-accuracy/hdr-pre-white-balance-small.jpg) ![HDR 校准后白平衡](assets/product-examples/samsung-qn90f/10-color-accuracy/hdr-post-white-balance-small.jpg)
*HDR 白平衡 dE：校准前（左）vs 校准后（右）*

![HDR 校准前色彩](assets/product-examples/samsung-qn90f/10-color-accuracy/hdr-pre-color-small.jpg) ![HDR 校准后色彩](assets/product-examples/samsung-qn90f/10-color-accuracy/hdr-post-color-small.jpg)
*HDR 色彩 dE：校准前（左）vs 校准后（右）*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| White Balance dE ITP | **40%** | < 9 | 1 |
| Color dE ITP | **40%** | < 9 | 1 |
| Color Temperature | **20%** | 6500K | 400K |

### 可感知差异阈值

| 指标 | 几乎不可察觉 | 专业人士可察觉 | 爱好者可察觉 | 所有人可察觉 |
|------|------------|-------------|------------|------------|
| 色温偏差 | < 100K | 200K | 400K | 500K+ |

**注意**: dE ITP 的可感知差异阈值与 dE2000 不同。由于 dE ITP 的数值范围更大，相同的感知级别对应不同的数值。Rtings 未明确发布 dE ITP 的具体感知阈值数值。

### 评分参考范围

**白平衡 dE ITP** (数值范围与 dE2000 不可比):
- 白平衡不准确在大面积白色或灰色区域最明显（如用作显示器或观看体育赛事）
- 典型案例: Panasonic Z85A OLED 校准前偏差极小；TCL QM8/QM851G QLED 校准前灰阶中红色过多

**色彩 dE ITP** (数值范围与 dE2000 不可比):
- 如果电视能准确显示 6 种测试目标颜色，整个色彩范围的准确度通常也会很好
- 典型案例: Panasonic Z85A OLED 校准前所有色彩条远未达到可察觉阈值；TCL QM8/QM851G QLED 校准前大多数色彩超过可察觉阈值，校准后黄色和绿色改善但蓝色基本不变

### 典型案例对比

| 电视型号 | 校准前表现 | 校准后改善 |
|---------|-----------|-----------|
| Panasonic Z85A OLED | 极小的偏差，多数人不会察觉 | 仅微小改善，差异可忽略不计 |
| TCL QM8/QM851G QLED | 灰阶红色过多，5%-85% 有显著不准确 | 红色被拉下，25%-45% 改善，但白平衡无法完全修复 |

## 关键指标

### dE ITP vs dE2000

- **HDR 测试使用 dE ITP 度量**: 基于 ICtCp 色彩空间
- **SDR 测试使用 dE2000 度量**: 基于 CIELAB 色彩空间
- **两者不可直接比较数值**: 量纲和感知权重完全不同
- dE ITP 在整个色彩空间中具有更均匀的感知权重，特别是在高饱和蓝色区域优于 dE2000

### HDR 与 SDR 色彩准确度的差异

| 方面 | SDR | HDR |
|------|-----|-----|
| [EOTF](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy#our-tests) | Gamma 2.2 / BT.1886 | PQ (ST 2084) |
| 色域 | Rec.709 | DCI-P3 / Rec.2020 |
| 亮度范围 | ~100-300 cd/m² | 最高 1000-4000 cd/m² |
| 元数据 | 无 | 静态 (HDR10) / 动态 (Dolby Vision) |
| dE 度量 | dE2000 | dE ITP |
| 信号路由 | Murideo Six G | HDFury VRROOM |

### 实际意义

- 如果追求内容创作者意图的准确色彩，HDR 校准前准确度很重要
- 愿意花钱校准的用户更应关注 HDR 校准后准确度
- 开箱即用准确度高的电视（如 Panasonic Z85A）对色彩爱好者更友好
- 即使是最微小的校准改善，对于色彩纯粹主义者来说也有价值

### 补充信息

与 SDR 一样，专业校准是确保 HDR 色彩尽可能准确的唯一方法。但购买高端型号通常已具备较好的 HDR 色彩准确度。对于预算有限的用户，选择开箱即用 HDR 准确度好的电视比购买便宜电视再花钱校准更划算。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy#additional-information)

相关测试: [SDR 色彩准确度](https://www.rtings.com/tv/tests/picture-quality/color-accuracy)
[↗](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy#conclusion)
`;export{n as default};
