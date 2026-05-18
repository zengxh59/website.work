const n=`# 色彩准确度 (Color Accuracy)

> 来源: https://www.rtings.com/tv/tests/picture-quality/color-accuracy
> Wayback 快照: 2024-12-24T22:14:54
> Test Bench: [2.2](https://www.rtings.com/tv/tests/changelogs/2-2) (v1.8)
> 页面最后修改: 2022-04-04
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

色彩准确度测试评估电视在开箱即用（未手动校准）状态下以及校准后的色彩还原能力。测试涵盖[白平衡](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#our-tests)、色彩准确度、Gamma 和[色温](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#our-tests)四个维度，衡量电视是否能够忠实地还原内容创作者意图呈现的色彩。大多数电视开箱即用已有足够准确的色彩，但校准后可获得接近完美的准确度。

**定义**: 电视在校准前的色彩准确度。仅更改不因个体差异而变化的设置，如画面模式、色温和 Gamma (TV's color accuracy before a full calibration. The only settings that are changed are those that don't vary from unit to unit, like picture mode, color temperature, and gamma)

**重要场景**: 未校准电视上的所有视频内容，这代表大多数人的使用情况 (All video on an uncalibrated TV. This represents most people's use)。色彩准确度在观看电影、电视节目、体育赛事和玩游戏时都至关重要——任何包含色彩的画面都受其影响。

**色准确度与色域的区别**: 色域 (Color Gamut) 衡量电视能够显示的颜色范围，而色彩准确度衡量这些颜色与目标值的偏差程度。一台色域广但不准确的电视，可能比一台色域窄但准确的电视看起来更差。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#when-it-matters)

## 测试方法

### 前置条件

1. **电视预热**: 电视必须充分预热后再进行任何测量，预热不足会导致白平衡和色温偏移。通常需要运行至少 30 分钟的预热内容。
2. **环境要求**: 完全暗室环境，避免任何环境光影响测量探头读数。
3. **设备校准序列**:
   - CR-250 光谱仪用于对 CR-100 色度计进行四轮矩阵校准（4-matrix calibration），确保 CR-100 的光谱响应与被测电视的背光光谱匹配
   - CR-100 和 CR-250 通过 USB 连接至运行 Calman 软件的 PC
   - Konica Minolta LS-100 亮度计用于验证背光设置
4. **背光标准化**: 将电视背光调整至恰好 100 尼特（使用 LS-100 亮度计验证），确保所有电视在相同亮度基准下比较。
5. **画面模式选择**: 使用各品牌推荐的最准确画面模式（详见下方品牌设置表）。Rtings 对同一品牌的所有型号使用相同的画面设置，以便公平比较。

### 详细测量步骤

#### A. 校准前 (Pre-Calibration) 测量

**步骤 1 — 设置电视参数**

1. 选择该品牌对应的最准确画面模式（见下方品牌设置表）
2. 设置色温至对应品牌的暖色温档位
3. 设置 Gamma 至 2.2（或对应品牌等效设置）
4. 调整背光至 100 尼特（使用 LS-100 亮度计验证）
5. 不进行任何其他手动调整——测试目的正是评估"开箱即用"的准确度

**步骤 2 — 子测试 1: 白平衡 dE 测量**

1. 通过 Murideo Six G 信号发生器向电视发送 SDR 4K@60Hz 灰阶测试图案
2. 使用 18% 屏幕面积的窗口尺寸
3. 从 5% 灰（接近纯黑）开始，每 5% 增量逐级测量至 100% 灰（纯白），共 20 个灰阶
4. 每个灰阶由 Calman 软件通过 CR-100（已用 CR-250 校准至该电视）自动测量色度坐标 (x, y) 和亮度 (Y)
5. 记录每个灰阶的白平衡偏差 RGB 跟踪值（红/绿/蓝三通道各自的相对增益）
6. 计算每个灰阶的 dE2000 值
7. 最终白平衡 dE = 20 个灰阶 dE2000 的算术平均值

**步骤 3 — 子测试 2: 色彩 dE 测量**

1. 通过 Murideo Six G 发送 SDR 4K@60Hz 色彩测试图案
2. 窗口尺寸：18% 屏幕面积；刺激信号：75%
3. 对 6 种颜色（红 R、绿 G、蓝 B、黄 Y、品红 M、青 C）分别测量
4. 每种颜色在 5 个饱和度级别测量：25%、50%、75%、95%、100%
5. 额外测量纯白作为基准参考
6. 总计测量 31 个色彩点（6 色 x 5 饱和度 + 纯白）
7. 每个色彩点计算 dE2000
8. 最终色彩 dE = 所有 31 个 dE2000 的算术平均值

**步骤 4 — 子测试 3: Gamma 测量**

1. 与白平衡测试同时进行（使用同一组灰阶测量数据）
2. 从 0% 到 100% 灰阶系列，每 5% 增量记录亮度值
3. 对每个灰阶计算实际 Gamma 值：γ = log(L_measured / L_black) / log(stimulus_level)
4. 最终 Gamma = 所有灰阶 Gamma 的加权平均值
5. 目标值：Gamma 2.2（BT.1886 标准，适用于暗室环境）

**步骤 5 — 子测试 4: 色温测量**

1. 与白平衡测试同时进行
2. 从每个灰阶的色度坐标 (x, y) 计算相关色温 (CCT, Correlated Color Temperature)
3. 记录所有灰阶的平均色温
4. 目标值：6500K（D65 白点标准，精确值为 6504K）

#### B. 校准后 (Post-Calibration) 测量

**步骤 6 — 白平衡校准**

1. 首先使用电视的 2 点白平衡调整（高光/阴影）进行粗校准
2. 如电视支持 10 点或 20 点白平衡，则进一步精细调整
3. **关键原则**:
   - 避免极端调整值（过度调整会导致色彩断层 banding 和灰阶过渡不自然）
   - 保持相邻灰阶过渡自然流畅（不接受平均 dE 低但个别灰阶剧烈跳变的情况）
   - 每个调整点的理想值越接近零越好
   - 某些电视不能过于激进地校准——修复一个问题可能引入另一个问题
4. 校准完成后，重新运行步骤 2-5 的全部测量

**步骤 7 — 记录校准后数据**

1. 记录校准后的白平衡 dE、色彩 dE、Gamma 和色温
2. 保存 Calman 校准报告用于审核

### 数据处理与公式

**dE2000 计算公式** (CIE Delta E 2000, 基于 CIELAB 色彩空间):

dE2000 = sqrt( (ΔL'/kL·SL)² + (ΔC'/kC·SC)² + (ΔH'/kH·SH)² + RT·(ΔC'/kC·SC)·(ΔH'/kH·SH) )

其中:
- ΔL': 明度差（加权）
- ΔC': 饱和度差（加权）
- ΔH': 色调差（加权）
- SL, SC, SH: 各分量的权重函数（与颜色的具体位置相关）
- RT: 旋转项（处理蓝色区域的交互误差）
- kL, kC, kH: 参考条件下的参数权重，通常设为 1

**dE2000 特性**:
- dE = 0: 完美还原，与目标色无差异
- dE 值仅表示色差大小，不指示偏差方向（如偏红或偏蓝）
- 相同 dE 的两种偏差可能看起来完全不同（例如一台电视的红色偏粉红，另一台偏橙红，但 dE 值相同）
- dE2000 相比老式 dE76 在感知均匀性方面有显著改善，特别是在饱和蓝色区域

**Gamma 计算方法**:
- 对每个灰阶，使用测量亮度值和信号输入水平计算局部 Gamma
- 最终 Gamma = 所有灰阶局部 Gamma 的加权平均值
- 偏离目标 2.2 的方向含义: 实际 Gamma > 2.2 表示画面偏暗，< 2.2 表示偏亮

**色温计算方法**:
- 从色度坐标 (x, y) 通过 McCamy 近似公式转换为相关色温 (CCT):
  CCT ≈ 437n³ + 3601n² + 6861n + 5517，其中 n = (x - 0.3320) / (0.1858 - y)

### 各品牌校准前画面模式 [↗](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#test_section-picture-mode-and-settings)

| 品牌 | 画面模式 | 色温设置 | Gamma 设置 |
|------|---------|---------|-----------|
| Hisense (Android TV) | Theater Night | Low | 2.2 |
| Hisense (Roku TV) | Movie | Warm | 2.2 |
| LG | Expert (Dark Space) | Warm 50 | 2.2 |
| Samsung | Movie | Warm 2 | 2.2 |
| Sony | Custom | Expert 1 | 0 |
| TCL | Movie | Warm | 2.2 |
| Vizio | Calibrated Dark | Warm | 2.2 |

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#getting-the-best-results)

| 设备 | 型号 | 用途 |
|------|------|------|
| 色度计 | Colorimetry Research CR-100 | 校准至被测电视后执行所有亮度和色度测量 |
| 光谱仪 | Colorimetry Research CR-250 | 校准 CR-100 至被测电视的光谱特性并进行光谱验证 |
| 亮度计 | Konica Minolta LS-100 | 验证背光设置是否精确达到 100 尼特基准 |
| 校准软件 | Portrait Displays Calman | 自动化测量工作流、数据分析、报告生成 |
| 信号发生器 | Murideo Six G | 向电视输出精确的测试图案信号 |
| 控制电脑 | PC (USB 连接) | 连接 CR-100 和 CR-250，运行 Calman 软件 |

## 测试资源

| 资源 | 规格 | 用途 |
|------|------|------|
| 灰阶测试图案 | 5%-100%，每 5% 增量，18% 窗口，SDR 4K@60Hz | 白平衡 dE 和 Gamma 测量 |
| 色彩测试图案 | 6 色 (RGBYMC) x 5 饱和度 (25/50/75/95/100%)，75% 刺激信号，18% 窗口 | 色彩 dE 测量 |
| 纯白测试图案 | 100% 白，18% 窗口 | 色彩 dE 基准参考 |
| Calman ColorChecker 工作流 | 自动化 | 全流程测量自动化 |

![色彩准确度测试示意](assets/methodology-diagrams/color-accuracy-hero.png)
*色彩准确度测试页面示意图：展示白平衡 dE、色彩 dE 和色温三个核心指标的测量过程*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_142))

![校准前白平衡](assets/product-examples/lg-c4-oled/10-color-accuracy/pre-white-balance-small.jpg)
*校准前白平衡 dE：各灰阶的白平衡偏差*

![校准后白平衡](assets/product-examples/lg-c4-oled/10-color-accuracy/post-white-balance-small.jpg)
*校准后白平衡 dE：校准后各灰阶的白平衡偏差应显著缩小*

![校准前色彩](assets/product-examples/lg-c4-oled/10-color-accuracy/pre-colorspace-small.jpg)
*校准前色彩空间覆盖：6 色 x 5 饱和度的 dE 测量*

![校准后色彩](assets/product-examples/lg-c4-oled/10-color-accuracy/post-colorspace-small.jpg)
*校准后色彩空间覆盖：校准后的色彩准确度应接近目标值*

![校准前 Gamma](assets/product-examples/lg-c4-oled/10-color-accuracy/pre-gamma-small.jpg) ![校准后 Gamma](assets/product-examples/lg-c4-oled/10-color-accuracy/post-gamma-small.jpg)
*Gamma 曲线：校准前（左）vs 校准后（右）的灰阶 Gamma 追踪*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_142))

![校准前白平衡](assets/product-examples/samsung-qn90f/10-color-accuracy/pre-white-balance-small.jpg)
*校准前白平衡 dE：各灰阶的白平衡偏差*

![校准后白平衡](assets/product-examples/samsung-qn90f/10-color-accuracy/post-white-balance-small.jpg)
*校准后白平衡 dE：校准后各灰阶的白平衡偏差应显著缩小*

![校准前色彩](assets/product-examples/samsung-qn90f/10-color-accuracy/pre-colorspace-small.jpg)
*校准前色彩空间覆盖：6 色 x 5 饱和度的 dE 测量*

![校准后色彩](assets/product-examples/samsung-qn90f/10-color-accuracy/post-colorspace-small.jpg)
*校准后色彩空间覆盖：校准后的色彩准确度应接近目标值*

![校准前 Gamma](assets/product-examples/samsung-qn90f/10-color-accuracy/pre-gamma-small.jpg) ![校准后 Gamma](assets/product-examples/samsung-qn90f/10-color-accuracy/post-gamma-small.jpg)
*Gamma 曲线：校准前（左）vs 校准后（右）的灰阶 Gamma 追踪*

> **注意**: 色彩准确度测试使用 Calman 软件自动化的 ColorChecker 工作流，通过 Murideo Six G 信号发生器输出精确的灰阶和色彩测试图案。测试图案为标准化的窗口图案，不使用特定图片。

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重** (校准前 Pre-Calibration):

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| White Balance dE 2000 | **40%** | < 3 | 1 |
| Color dE 2000 | **40%** | < 3 | 1 |
| Color Temperature | **20%** | 6500K | 400K |

> 校准后 (Post-Calibration) 使用完全相同的权重结构。校准前评分权重 > 校准后。

### 可感知差异阈值

| 指标 | 几乎不可察觉 | 专业人士可察觉 | 爱好者可察觉 | 所有人可察觉 |
|------|------------|-------------|------------|------------|
| 白平衡 dE | < 1 | 1-3 | 3-5 | 5+ |
| 色彩 dE | < 1 | 1-3 | 3-5 | 5+ |
| Gamma 偏差 | < 0.05 | 0.1 | 0.2 | > 0.2 |
| 色温偏差 | < 100K | 200K | 400K | 500K+ |

### 评分参考范围

| 白平衡 / 色彩 dE | 质量等级 |
|-------------------|---------|
| < 1.0 | 极佳 — 即使专业人士也难以察觉偏差 |
| 1.0 - 3.0 | 良好 — 仅专业人士在对比条件下可察觉 |
| 3.0 - 5.0 | 一般 — 爱好者可察觉偏差 |
| > 5.0 | 较差 — 普通观众即可察觉明显色彩偏差 |

| Gamma 偏差 (与 2.2 的差距) | 质量等级 |
|---------------------------|---------|
| < 0.05 | 极佳 |
| 0.05 - 0.1 | 良好 |
| 0.1 - 0.2 | 一般 |
| > 0.2 | 较差 |

| 色温偏差 (与 6500K 的差距) | 质量等级 |
|---------------------------|---------|
| < 100K | 极佳 |
| 100K - 200K | 良好 |
| 200K - 400K | 一般 |
| > 400K | 较差 |

### Gamma 参考值

- **Gamma 2.2**: 中间值，适用于暗室（Rtings 目标值）
- **Gamma 2.4**: 适用于非常暗的环境（画面更暗，对比度更高）
- **Gamma 2.0**: 适用于较亮环境（画面更亮）
- 电视通常提供 1.8 到 2.6 的 Gamma 选项
- 即使整体 Gamma 为 2.2，个别场景可能不完全准确

## 关键指标

### Delta E (dE) [↗](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#de-color-difference)

- 色彩误差的量化指标（dE = "color difference"）
- 通过两个色调之间的标准偏差计算
- dE = 0: 完美还原
- dE 仅表示色差大小，不表示偏差方向（如偏红或偏蓝）
- 相同 dE 的两种偏差可能看起来完全不同（例如，一台电视的红色偏粉红，另一台偏橙红，但 dE 值相同）

### 重要注意事项

- **校准前结果因同型号不同个体而异**: 您购买的电视可能比 Rtings 测试的个体更好或更差
- **不建议直接使用他人校准值**: 每块面板性能略有不同
- **"色彩"和"色调"设置**: 通常默认正确，一般不需要调整
- **OLED 和 LED 电视的色彩准确度无本质差异**: 取决于具体型号而非面板类型
- **OLED 在纯蓝色表现上优于 LED**: 且倾向于偏冷色温
- **白平衡 dE 是所有灰阶的平均值**: 如果平均 dE 为 0.4 但这是由于 20% 灰和 80% 灰各有 4 的 dE 平均所得，不被认为是可接受的校准，因为相邻灰阶之间的剧烈跳变会令人不适

### 补充信息 [↗](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#other-notes)

专业校准（或购买设备自行校准）是确保电视色彩尽可能准确的唯一方法。但专业校准服务和入门级校准套件价格昂贵，对于廉价电视可能占电视价格的很大比例。高端型号通常已有较好的色彩准确度，校准的改善不大。仅切换画面模式并调整几个设置到自己喜欢的效果就能产生很大改善。最终，观看电视的是你自己，所以选择你最喜欢的设置即可。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#additional-information)

相关测试: [HDR 色彩准确度](https://www.rtings.com/tv/tests/picture-quality/hdr-color-accuracy) | [色域](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020)
[↗](https://www.rtings.com/tv/tests/picture-quality/color-accuracy#conclusion)
`;export{n as default};
