const n=`# 累积绝对偏差 (Cumulative Absolute Deviation / CAD)

> 来源: https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation
> Test Bench: [2.2](https://www.rtings.com/tv/tests/changelogs/2-2) (v1.8)
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

累积绝对偏差 (CAD) 是 Rtings Test Bench 2.0 引入的量化运动模糊的核心指标。它客观地衡量屏幕上运动画面与理想显示器之间的偏差程度，**综合考量了[响应时间](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time)和过冲效应**。较低的 CAD 值意味着更清晰的运动表现，更高的 CAD 值意味着更严重的运动模糊。

与传统的响应时间指标不同，CAD 将响应时间和过冲统一为单一数值，更全面地反映像素偏离理想状态的程度，从而更准确地量化运动模糊。

**定义**: 像素过渡过程中实际 RGB 值与目标 RGB 值之间偏差绝对值的累积量，综合反映响应时间和过冲
**适用场景**: 所有运动画面（游戏、体育、电影）；量化运动模糊的严重程度

### CAD 与响应时间的关系 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#cad-vs-response-time)

- CAD 和响应时间是不同的测量概念
- CAD 包含响应时间 **和** 过冲效应
- 即使电视有过冲但响应更快，CAD 仍能正确反映其运动比慢响应无过冲的电视更清晰
- 在讨论电视时，"响应时间快" 通常意味着 CAD 低、运动清晰

### 版本说明 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#differences-with-monitor-testing)

- CAD 是 **Test Bench 2.0 新增测试**，在 TB 1.11 中不存在
- **TB 2.0 的 CAD 结果与 TB 1.11 不可比较**（旧版使用 12 种过渡和 80%/100% 响应时间）
- **电视与显示器的 CAD 评分不可比较**（显示器评分标准更严格）
- **原始 CAD 数值可跨产品类别比较**（电视 vs 显示器的原始数据可对比）

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#when-it-matters)

## 测试方法

### 前置条件

1. **电视预热**: 电视开机并显示内容至少 **30 分钟**。冷态电视响应时间明显偏慢，预热是确保测量准确性的关键步骤
2. **电视校准**: 使用推荐设置校准电视，进入 **游戏模式 (Game Mode)**
3. **测量工具**: 将 Rtings 自主研发的专用光电二极管测量工具通过 USB 连接到测试 PC
4. **放置位置**: 光电二极管放置在屏幕上的 **任意位置** 即可（不同于输入延迟测试必须放在屏幕中心）
   - 原因: CAD 测量的是像素过渡过程，不依赖于屏幕扫描时间
5. **测试环境**: 标准室内环境

### 详细测量步骤

#### 步骤 1: Gamma 校正 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#gamma-correction)

Gamma 校正是 CAD 测试的核心准备工作，旨在使不同显示技术（OLED vs LED LCD）的测量结果可比较。

1. 将光电二极管测量工具放置在屏幕上的固定位置
2. 依次显示从 **RGB 0（纯黑）到 RGB 255（纯白）的全部 256 个灰阶级别**
3. 对每个灰阶级别，记录光电二极管读取的 **光输出值**（16 位整数，范围 0-65,535）
4. 建立完整的映射表: RGB 值（0-255） <-> 光输出值（0-65,535）
5. **校正原理**:
   - 不同显示技术的光输出曲线不同
   - OLED 纯黑时光输出为 0；LED 背光 LCD 纯黑时光输出大于 0（因为背光无法完全关闭）
   - Gamma 校正将所有测量值统一到 RGB 0-255 的标准化尺度
6. **Gamma 尺度的优势**:
   - Gamma 是 **感知均匀** 的: 在任何亮度级别，RGB 差值 5 的视觉差异相同
   - 光输出电压尺度是 **非线性** 的: 100 vs 200 的差异远比 15,000 vs 15,100 明显
   - 校正后，后续测量使用 RGB 0-255 而非原始的 0-65,535

#### 步骤 2: 定义 9 个灰阶测试级别

测试使用以下 9 个均匀分布的灰阶级别:

| 级别编号 | RGB 值 | 大致亮度 | 描述 |
|---------|--------|---------|------|
| 1 | 0 | 0% | 纯黑 |
| 2 | 31 | ~12% | 深灰 |
| 3 | 63 | ~25% | 暗灰 |
| 4 | 95 | ~37% | 中暗灰 |
| 5 | 127 | ~50% | 中灰 |
| 6 | 159 | ~62% | 中亮灰 |
| 7 | 191 | ~75% | 亮灰 |
| 8 | 223 | ~87% | 高亮灰 |
| 9 | 255 | 100% | 纯白 |

- 9 个灰阶之间共有 **72 种灰阶过渡组合**（9 x 8 = 72，不含自身到自身的过渡）
- 虽然仅测量灰阶，但结果代表任何颜色过渡——因为 RGB 灰阶使用等量的 R/G/B 子像素

#### 步骤 3: 执行 72 种灰阶过渡测量

对每种灰阶过渡（如 RGB 0 -> RGB 255），执行以下子步骤:

1. 在屏幕上显示起始灰阶颜色（如 RGB 0），确保像素稳定在起始状态
2. 突然切换到目标灰阶颜色（如 RGB 255）
3. 光电二极管以高采样率持续记录光输出的变化曲线
4. 将原始光输出数据（0-65,535）通过 Gamma 校正映射表转换为 RGB 值（0-255）
5. 记录完整的过渡曲线（起始 RGB -> 实际 RGB 随时间变化 -> 目标 RGB）
6. 目标容差: 像素到达目标值 **+/- 3 RGB** 范围内即视为达到目标

#### 步骤 4: 计算 CAD 值

对每种过渡的完整曲线，计算 CAD:

1. **理想过渡**: 像素在 0 时间内从起始 RGB 瞬间变为目标 RGB（理想方波）
2. **实际过渡**: 像素需要时间过渡，可能产生过冲和振荡
3. **CAD = 过渡曲线中高亮区域面积**:
   - 在每个采样时间点，计算 \`|实际 RGB - 目标 RGB|\`（绝对偏差）
   - 将所有采样时间点的绝对偏差值累加
   - 累加值即为 CAD
4. **CAD 没有物理单位**: 它是多个采样点偏差的累加值
5. **CAD 越小 = 运动越清晰**: 高亮区域（CAD 面积）越小，像素偏离理想过渡状态越少

#### 步骤 5: 三种刷新率下的完整测试

在以下三种刷新率设置下，分别重复步骤 1-4:

| 测试盒子 | 刷新率 | 说明 |
|---------|--------|------|
| CAD @ Max Refresh Rate | 电视最大刷新率（如 120Hz 或 144Hz） | 最佳运动表现 |
| CAD @ 120Hz | 120Hz | 标准高刷新率游戏场景 |
| CAD @ 60Hz | 60Hz | 最常见游戏场景（主机游戏） |

每种刷新率下:
- 完整执行 Gamma 校正
- 测量全部 72 种灰阶过渡
- 计算每种过渡的 CAD

#### 步骤 6: 计算三个核心指标

对每种刷新率下的 72 个 CAD 值，计算以下三个指标:

**6a. Avg. CAD（平均 CAD）**:
- 定义: 所有 **72 种过渡** 的 CAD 值的 **算术平均值**
- **占测试评分的主要部分**
- 反映整体运动表现

**6b. Best 10% CAD（最佳 10% CAD）**:
- 定义: 对 72 种过渡按 CAD 值升序排列，取最小的 **7 种过渡** 的平均值
- **不代表全部内容**: 仅反映最佳情况的过渡
- 某些面板在特定过渡上表现极好（如 OLED 的亮灰阶过渡）

**6c. Worst 10% CAD（最差 10% CAD）**:
- 定义: 对 72 种过渡按 CAD 值降序排列，取最大的 **7 种过渡** 的平均值
- 反映 **最坏情况** 的运动表现
- 典型表现: VA 面板在暗色过渡（如 RGB 0 -> RGB 31）的 CAD 极高

#### 步骤 7: 追踪图案拍照 (Pursuit Pattern)

1. 在屏幕上显示专用追踪测试图案
2. 图案以 **1,920 像素/秒** 的速度在屏幕上水平移动
3. 分别在三种刷新率下拍摄
4. **目的**: 直观展示运动清晰度
5. **解读方法**:
   - 图案中字母 **R** 后方可观察逆向鬼影程度
   - 字母边缘清晰 = CAD 低，运动清晰
   - 即使 CAD 值相似，高刷新率下的运动仍然更清晰（因为持续模糊更少）
   - 要减少持续模糊，需要使用电视的 BFI（黑帧插入）功能

### 数据处理与公式

#### CAD 计算公式

对每种灰阶过渡 i（i = 1, 2, ..., 72）:

\`\`\`
CAD_i = Sum( |Actual_RGB(t) - Target_RGB| ) for all t from transition start to end
\`\`\`

其中:
- \`Actual_RGB(t)\` = 时间 t 时 Gamma 校正后的实际 RGB 值
- \`Target_RGB\` = 目标灰阶的 RGB 值
- 求和覆盖整个过渡持续时间

#### 指标聚合公式

\`\`\`
Avg. CAD = (1/72) * Sum(CAD_i) for i = 1 to 72

Best 10% CAD = (1/7) * Sum(CAD_i) for the 7 smallest CAD values

Worst 10% CAD = (1/7) * Sum(CAD_i) for the 7 largest CAD values
\`\`\`

#### Gamma 校正映射

\`\`\`
Corrected_RGB = f(Raw_Light_Output)
\`\`\`

其中 \`f\` 是通过测量 256 个灰阶级别的光输出建立的映射函数，将 16 位光输出值（0-65,535）映射到 RGB 值（0-255）。

#### 容差判定

- 目标容差: **+/- 3 RGB**
- 像素在 [Target_RGB - 3, Target_RGB + 3] 范围内视为已达到目标值

[→ Rtings: How We Measure](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#how-we-measure)

## 测试设备 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#how-to-get-the-best-results)

| 设备 | 型号/描述 | 用途 |
|------|----------|------|
| 自定制响应时间工具 | 内置光电二极管的专用测量设备 | 测量光输出并转换为 16 位整数（0-65,535） |
| 测试 PC | 定制 PC | 通过 USB 连接测量工具，运行自动测试程序 |
| 光电二极管传感器 | 内置于测量工具中 | 感应屏幕光输出变化 |
| HDMI 线缆 | 标准 / HDMI 2.1 | 信号传输 |

## 测试资源

- **72 种灰阶过渡测试程序**: 自动遍历所有 9x8 种过渡组合
- **256 级灰阶 Gamma 校正表**: 256 个灰阶级别的光输出映射数据
- **CAD 热力图**: 将所有 72 种过渡的 CAD 值以热力图形式展示
  - 纵轴（垂直列）: 起始 RGB 级别
  - 横轴（水平行）: 目标 RGB 级别
  - 颜色越暖（红/黄）表示 CAD 越高，颜色越冷（绿/蓝）表示 CAD 越低
- **单过渡 CAD 曲线图**: 每种过渡的 Gamma 校正后 CAD 曲线（高亮区域即为 CAD 面积）
- **Pursuit 追踪图案**: 以 1,920 像素/秒的速度移动，直观展示运动清晰度

### 9 级灰阶示意

CAD 测试使用以下 9 个均匀分布的灰阶（RGB 0-255），共 72 种过渡组合：

![RGB 0](assets/test-patterns/rgb-0.jpg) ![RGB 31](assets/test-patterns/rgb-31.jpg) ![RGB 63](assets/test-patterns/rgb-63.jpg) ![RGB 95](assets/test-patterns/rgb-95.jpg) ![RGB 127](assets/test-patterns/rgb-127.jpg) ![RGB 159](assets/test-patterns/rgb-159.jpg) ![RGB 191](assets/test-patterns/rgb-191.jpg) ![RGB 223](assets/test-patterns/rgb-223.jpg) ![RGB 255](assets/test-patterns/rgb-255.jpg)
*9 个灰阶测试级别：从纯黑 (RGB 0) 到纯白 (RGB 255)，72 种过渡覆盖所有组合*

### CAD 热力图示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_30865))

![60Hz CAD 热力图](assets/product-examples/lg-c4-oled/g05-cad/heatmap-60hz-cad-small.jpg) ![120Hz CAD 热力图](assets/product-examples/lg-c4-oled/g05-cad/heatmap-120hz-cad-small.jpg)
*CAD 热力图：60Hz（左）vs 120Hz（右）— 颜色越暖（红/黄）表示 CAD 越高*

![60Hz 响应时间热力图](assets/product-examples/lg-c4-oled/g05-cad/heatmap-60hz-rt-small.jpg) ![最大刷新率 CAD 热力图](assets/product-examples/lg-c4-oled/g05-cad/heatmap-max-cad-small.jpg)
*60Hz 响应时间热力图（左）vs 最大刷新率 CAD 热力图（右）*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_30865))

![60Hz CAD 热力图](assets/product-examples/samsung-qn90f/g05-cad/heatmap-60hz-cad-small.jpg) ![120Hz CAD 热力图](assets/product-examples/samsung-qn90f/g05-cad/heatmap-120hz-cad-small.jpg)
*CAD 热力图：60Hz（左）vs 120Hz（右）— 颜色越暖（红/黄）表示 CAD 越高*

![60Hz 响应时间热力图](assets/product-examples/samsung-qn90f/g05-cad/heatmap-60hz-rt-small.jpg) ![最大刷新率 CAD 热力图](assets/product-examples/samsung-qn90f/g05-cad/heatmap-max-cad-small.jpg)
*60Hz 响应时间热力图（左）vs 最大刷新率 CAD 热力图（右）*

## 评分标准

### 评分公式与权重

每个测试盒子（Max Refresh Rate / 120Hz / 60Hz）的评分基于三个核心指标:

**通过 Rtings 会员页面获取的评分权重**:

| 指标 | 权重 | 说明 |
|------|------|------|
| **Avg. CAD** | **60%** | 占测试评分的主要部分，反映整体运动表现 |
| Worst 10% CAD | **20%** | 反映最坏情况的运动表现 |
| Best 10% CAD | **20%** | 反映最佳情况的过渡表现 |

> 所有三种刷新率（Max / 120Hz / 60Hz）使用完全相同的权重结构。

### 可感知差异阈值

- CAD 值差异约 **15-20%** 可感知（取决于基准值）

### 评分参考范围（电视）

| CAD 值范围（Avg. CAD） | 运动表现 | 典型代表 |
|----------------------|---------|---------|
| ~20 | 极佳，几乎无运动模糊 | Sony A95L OLED |
| ~37-45 | 优秀，运动非常清晰 | LG B4/C4 OLED |
| ~200-300 | 中等，可见运动模糊 | TCL QM8, Sony BRAVIA 9 |
| ~350-400 | 较差，明显模糊和拖影 | Sony BRAVIA 9 QLED, LG UT7570 |

### 跨产品评分说明

- **电视与显示器的 CAD 评分不可比较**: 显示器使用更严格的评分标准
- **原始 CAD 数值可跨产品类别比较**: 电视 vs 显示器的原始数据可直接对比
- **不同刷新率下的 CAD 不可直接比较**: 60Hz 的 CAD 通常高于 120Hz（因为帧间隔更长，偏差累积更多）

## 关键指标

### 不同面板类型的运动特性 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#panel-types)

| 面板类型 | 运动特点 | 典型 CAD（60Hz Avg. CAD） | 主要伪影 |
|---------|---------|--------------------------|---------|
| OLED | 最清晰的运动 | ~37-45 | 低刷新率下的持续模糊；极低过冲 |
| VA LCD | 暗色过渡慢 | ~283 | 暗部拖影 (smearing)；CAD 热力图左上角和左下角高值 |
| IPS LCD | 可能过冲较多 | ~390 | 逆向鬼影 (inverse ghosting)；过冲增加 CAD 面积 |

### CAD 热力图读取方法

1. 纵轴（垂直列）: 起始 RGB 级别
2. 横轴（水平行）: 目标 RGB 级别
3. 示例: 查找 RGB 95 到 RGB 31 的过渡，在对应单元格中找到 CAD 值
4. 颜色越暖（红/黄）表示 CAD 越高 = 运动模糊越严重
5. 颜色越冷（绿/蓝）表示 CAD 越低 = 过渡越清晰
6. **典型模式**:
   - VA 面板: 暗色到暗色的过渡（左上角区域）CAD 极高
   - IPS 面板: 各过渡的 CAD 较为均匀，但整体偏高
   - OLED: 几乎所有过渡的 CAD 都很低

### Pursuit 图案的解读 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#test_section-pursuit-pattern)

- 图案以 **1,920 像素/秒** 的速度在屏幕上移动
- 即使 CAD 值相似，高刷新率下的运动仍然更清晰（因为持续模糊更少）
- 要减少持续模糊，需要使用电视的 BFI（黑帧插入）功能
- 图案中字母 **R** 后方可观察逆向鬼影程度

### 改善运动表现的方法

1. **使用最高支持的刷新率**: 减少持续模糊
2. **启用 BFI / 背光频闪**: 进一步减少持续模糊
3. **充分预热电视**: 冷态电视响应时间更慢，建议先播放视频预热 30 分钟以上
4. **注意**: 电视与显示器的 CAD 评分体系不同（显示器更严格），但原始 CAD 数值可跨产品对比

### 注意事项 [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#limitations-of-our-testing)

- CAD 是 Test Bench 2.0 新增测试，与 TB 1.11 的结果不可比较
- CAD 同时包含响应时间和过冲效应，是比纯响应时间更全面的运动指标
- CAD 测试在游戏模式下进行（与响应时间测试的非游戏模式不同）
- 电视与显示器的评分标准不同，但原始数值可以比较
- Gamma 校正确保 OLED 和 LCD 的 CAD 值可公平比较

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#additional-information)

相关测试: [响应时间](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time) [↗](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation#conclusion)
`;export{n as default};
