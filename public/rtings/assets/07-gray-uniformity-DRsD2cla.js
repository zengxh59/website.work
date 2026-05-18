const n=`# 灰度均匀性 / 脏屏效应 (Gray Uniformity / DSE)

> 来源: https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 页面更新: 2025-02-28
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

测量电视在显示均匀灰色画面时的亮度一致性。不均匀的表现（[DSE (脏屏效应)](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#causes-of-gray-uniformity-issues)，Dirty Screen Effect / DSE）在观看体育运动、平移镜头时最为明显，表现为画面上可见的亮度不均匀斑块。测试在两种灰度级别下进行：50% 灰色（中等灰度）和 5% 灰色（接近黑色）。

**何时重要**：灰度均匀性在以下场景最为关键——

- **体育比赛**：足球场、冰球场等大面积均匀背景的平移镜头中，DSE 会表现为屏幕上可见的静态亮度斑块，即使画面在移动，这些斑块也不随之移动，极为干扰观看体验
- **平移镜头**：电影和电视剧中缓慢水平或垂直移动的镜头中，DSE 同样以静态斑块形式显现
- **全灰/全白画面**：某些电视在全灰或全白画面下可见明显的不均匀

**DSE 的本质**：DSE 是面板制造工艺固有的不均匀性，无法通过软件校准或设置调整来修复。同型号不同个体之间的均匀性可能有显著差异（面板抽签 / Panel Lottery）。

**评分方式**：客观计算 (Objectively derived)，基于照片分析的[标准差](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#our-tests)和 DSE 值。本测试不使用色度计，完全基于相机照片的像素级分析。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#when-it-matters)

## 测试方法

> Test Bench 1.2 更新：新增 5% 灰色测试。自 TB 1.2 以来，所有 6 个子测试在 TB 1.6 至 1.11 版本中均存在，测试方法基本未变，结果可跨版本比较。

### 前置条件

- **设备校准状态**：
  - Nikon D750 相机镜头设为固定参数，确保每次拍摄的曝光条件完全一致
  - 相机需固定在三脚架上，正对电视屏幕中心，距离适中以确保屏幕完全填充画面
- **环境要求**：完全暗室，关闭所有外部光源。外部光线可能在屏幕上产生反射，干扰均匀性分析
- **电视预热时间**：电视需播放预热视频至少 15 分钟，确保背光和面板达到热稳定状态。冷态面板的均匀性可能与热稳定后不同
- **信号源设置**：
  - 电视亮度设置：使用校准后的推荐设置（非最大亮度）
  - 局部调光：**关闭**（Local Dimming OFF）—— 测试目的是评估面板本身的固有均匀性，而非局部调光的补偿效果
  - 画面模式：电影/影院模式（校准后）
  - 其他图像增强功能（如动态对比度、降噪等）关闭

### 详细测量步骤

#### 步骤一：50% 灰色测试

1. **显示测试图案**：在电视上显示 50% 灰色全屏测试图案（RGB 各通道约 128/255 的中等灰度）
2. **设置相机参数**：
   - 相机：Nikon D750
   - 光圈：f/4.0
   - 快门速度：1/4 秒
   - ISO：200
   - 以上参数经过优化，最能代表在完全暗室中人眼实际感知的画面
3. **拍摄照片**：在暗室中等待外部光线完全消失后，使用上述参数拍摄电视屏幕
4. **检查照片**：确认照片正确曝光，没有过曝或欠曝
5. **记录原始照片**：保存 RAW 格式或高质量 JPEG 格式照片供后续分析

#### 步骤二：5% 灰色测试

1. **显示测试图案**：在电视上显示 5% 灰色全屏测试图案（RGB 各通道约 13/255，接近纯黑的深灰色）
2. **保持相机参数**：使用与 50% 灰色测试完全相同的相机参数（f/4.0, 1/4 秒, ISO 200）
3. **拍摄照片**：在暗室中拍摄电视屏幕
4. **记录原始照片**：保存照片供后续分析

#### 步骤三：标准差 (Std Dev) 计算

1. **对原始照片应用高斯低通滤波器 (Gaussian Low-Pass Filter)**
   - 滤波器作用：去除相机传感器的极细像素级噪声和摩尔纹 (moire)，仅保留人眼可感知的较大尺度亮度变化
   - 保留频率：对应人眼在正常观看距离下可分辨的空间频率
2. **计算像素颜色值的标准差**：
   - 对滤波后照片的所有像素颜色值计算标准差
   - 标准差公式：σ = √(Σ(xi - x̄)² / N)，其中 xi 为各像素颜色值，x̄ 为平均值，N 为像素总数
   - 标准差越小，表示亮度分布越均匀，面板均匀性越好
3. **分别对 50% 灰色照片和 5% 灰色照片执行此计算**

#### 步骤四：DSE（脏屏效应）计算

1. **对原始照片应用高通滤波器 (High-Pass Filter)**
   - 高通滤波器仅保留画面中的高频空间变化（即局部的亮度不均匀），去除大面积的渐变
2. **应用高斯低通滤波器**
   - 在高通滤波结果上再次应用高斯低通滤波，去除细粒度噪声，保留 DSE 级别的不均匀特征
3. **应用中心区域遮罩 (Center-Isolating Mask)**
   - 遮罩设计：仅保留屏幕中央约 **50%** 面积区域的像素数据
   - 设计原因：DSE 在屏幕中央区域对观看体验影响最大（体育比赛、电影等主要关注区域都在画面中央），边缘区域的不均匀性对主观观感影响较小
4. **计算 DSE 值**：
   - DSE = √(平均值(各像素值²))
   - 即对遮罩内所有像素值取平方 → 求平均值 → 开平方根
   - 该公式等效于中心区域像素值的均方根 (RMS)
   - DSE 值越小，脏屏效应越轻微
5. **分别对 50% 灰色照片和 5% 灰色照片执行此计算**

### 数据处理与公式

**标准差计算流程**：
\`\`\`
原始照片 → 高斯低通滤波器 → 像素颜色值标准差 (σ)
\`\`\`

**DSE 计算流程**：
\`\`\`
原始照片 → 高通滤波器 → 高斯低通滤波器 → 中心区域遮罩 → √(mean(像素值²))
\`\`\`

**异常值处理**：
- 高斯低通滤波器有效去除相机传感器噪声和摩尔纹，避免将设备噪声误计为面板不均匀性
- 中心遮罩排除边缘区域，聚焦于观看体验最关键的中央区域
- 照片边缘可能因相机镜头畸变或几何失真产生伪影，遮罩同样排除了这些影响

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#getting-the-best-results)

| 设备 | 型号 | 用途 |
|------|------|------|
| 数码相机 | Nikon D750 | 灰度均匀性照片拍摄，全画幅传感器确保高信噪比 |
| 镜头 | — | 光圈固定为 f/4.0，兼顾景深和通光量 |
| 三脚架 | — | 固定相机位置，确保每次拍摄构图一致 |

> 注：本测试不使用 CR-100 等色度计，完全基于照片分析计算。这是与色域、色量等测试的根本区别。

## 测试资源

### 测试图案

| 资源 | 用途 |
|------|------|
| 50% 灰色全屏测试图案 | 中等灰度均匀性测试 |
| 5% 灰色全屏测试图案 | 接近黑色均匀性测试 |

![50% 灰色全屏测试图案](assets/test-patterns/gray-uniformity-50pct.png)
*50% 灰色全屏测试图案：用于检测脏屏效应 (DSE) 和灰度不均匀性*

![5% 灰色全屏测试图案](assets/test-patterns/gray-5pct.png)
*5% 灰色全屏测试图案：用于检测接近黑色的均匀性*

### 数据处理工具

| 资源 | 用途 |
|------|------|
| 高斯低通滤波器 | 标准差计算前滤波，去除相机噪声 |
| 高通滤波器 | DSE 计算，提取空间频率不均匀特征 |
| 中心区域遮罩 | DSE 计算时仅保留中央约 50% 区域 |

![DSE 高通滤波权重图](assets/test-patterns/dse-weight.jpg)
*DSE (脏屏效应) 计算中使用的高通滤波权重图：中心区域权重最高，边缘逐渐衰减*

### DSE 公式示意

![DSE 标准差公式](assets/test-patterns/dse-std-dev-formula.png)
*标准差 (Std. Dev.) 计算公式*

![DSE 权重公式](assets/test-patterns/dse-formula.png)
*DSE (脏屏效应) 计算公式：使用高通滤波提取空间不均匀性*

### DSE 处理示例

![LG LF6300 DSE 高通滤波结果](assets/test-patterns/lf6300-dse-medium.jpg)
*LG LF6300 的 DSE 处理示例：高通滤波后提取的空间不均匀性特征，暖色区域为亮度偏差较大的区域*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_47))

![50% 灰度 DSE](assets/product-examples/lg-c4-oled/07-gray-uniformity/dse-small.jpg)
*50% 灰度 DSE 测试：脏屏效应 (DSE) 的实际表现*

![5% 灰度均匀性](assets/product-examples/lg-c4-oled/07-gray-uniformity/gray-5-percent-small.jpg)
*5% 灰度均匀性：接近黑色的灰阶均匀性表现*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_47))

![50% 灰度 DSE](assets/product-examples/samsung-qn90f/07-gray-uniformity/dse-small.jpg)
*50% 灰度 DSE 测试：脏屏效应 (DSE) 的实际表现*

![5% 灰度均匀性](assets/product-examples/samsung-qn90f/07-gray-uniformity/gray-5-percent-small.jpg)
*5% 灰度均匀性：接近黑色的灰阶均匀性表现*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| 50% Std. Dev. | **35%** | < 2% | 1% |
| 50% DSE | **35%** | < 0.15% | 0.025% |
| 5% Std. Dev. | **15%** | < 0.5% | 1% |
| 5% DSE | **15%** | < 0.1% | — |

> 50% 灰度测试合计占 **70%** 权重，5% 灰度测试合计占 **30%**。
> 灰色照片（Picture）为视觉参考，不参与量化评分。

### 6 个子测试

| 子测试 | 评分维度 | 可感知差异 |
|--------|---------|-----------|
| 50% Gray Picture | 50% 灰色照片（视觉参考） | — |
| 50% Std Dev | 50% 灰色亮度标准差 | — |
| 50% DSE | 50% 灰色脏屏效应 | **0.025%** |
| 5% Gray Picture | 5% 灰色照片（视觉参考） | — |
| 5% Std Dev | 5% 灰色亮度标准差 | — |
| 5% DSE | 5% 灰色脏屏效应 | — |

### 可感知差异阈值

- **50% DSE 可感知差异**：**0.025%**
  - 即 DSE 值变化 0.025% 以上才能被人眼察觉
  - 这是所有子测试中唯一公开了可感知差异阈值的指标
- 5% Std Dev、5% DSE 和 50% Std Dev 的可感知差异阈值未公开

### 评分参考范围

#### 50% 灰色均匀性

| 标准差范围 | 体验评价 |
|-----------|---------|
| < 0.5% | 几乎完美，无可见 DSE |
| 0.5% - 1.0% | 轻微不均匀，大多数人不注意 |
| 1.0% - 2.0% | 可感知 DSE，体育比赛平移时可见 |
| > 2.0% | 明显 DSE，影响日常观看 |

## 关键指标

### OLED vs LED 均匀性差异 [↗](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#gray-uniformity-on-oleds-vs-leds)

| 面板类型 | 50% 灰色均匀性 | 5% 灰色均匀性 | 说明 |
|---------|--------------|--------------|------|
| OLED | 通常较好 | 近黑色可能不均匀 | 像素级控光，但低灰度下子像素阈值差异可能产生不均匀 |
| LED (FALD) | 取决于面板 | 取决于面板和背光 | 面板差异大，个体间波动明显 |
| LED (Edge-Lit) | 通常较差 | 通常较差 | 背光不均匀性影响大 |

### 面板抽签 (Panel Lottery) [↗](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#variance-between-models)

- 同型号不同个体之间的均匀性可能有显著差异
- 由面板制造工艺的随机性导致
- 即使是高端型号也无法保证每台均匀性一致
- 这是购买后如果发现严重 DSE 需要换机的主要原因

### 常见不均匀模式

| 模式 | 描述 | 最明显的场景 |
|------|------|-------------|
| 垂直条纹 | 屏幕上明暗交替的竖条 | 体育比赛平移 |
| 水平条带 | 水平方向的亮度变化 | 全灰画面 |
| 边缘暗角 | 四角亮度降低 | 全白/全灰画面 |
| 云斑 | 不规则明暗斑块 | 暗场景 |
| DSE 条带 | 中央区域的水平/垂直条带 | 体育转播平移镜头 |

### DSE 对体育观看的影响

- DSE 在**平移镜头**中最容易被感知
- 足球场、冰球场等大面积均匀背景是 DSE 的"放大镜"
- 当画面平移时，静态的亮度不均匀斑块变得非常明显
- 这也是为什么灰度均匀性测试对体育迷特别重要

### 相关设置 [↗](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#related-settings-other-notes)

- **局部调光**：本测试关闭局部调光，以测试面板固有均匀性。开启局部调光可能改善部分不均匀
- **背光均匀性功能**：部分品牌提供背光均匀性校准功能
- **面板校准**：专业校准无法修复物理层面的不均匀性

### Test Bench 版本覆盖

| 版本 | 1.0-1.1 | 1.2+ | 1.6-1.11 |
|------|---------|------|----------|
| 50% 灰色测试 | 有 | 有 | 有 |
| 5% 灰色测试 | — | 有 | 有 |
| DSE 计算 | 有 | 有 | 有 |
| 全部 6 个子测试 | — | — | 有 |

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#additional-information)

相关测试: [黑色均匀性](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting) [↗](https://www.rtings.com/tv/tests/picture-quality/gray-uniformity-dirty-screen-effect-dse#conclusion)
`;export{n as default};
