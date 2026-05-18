const n=`# 色量 (Color Volume)

> 来源: https://www.rtings.com/tv/tests/picture-quality/color-volume
> 补充来源: https://www.rtings.com/tv/tests/picture-quality/color-volume-hdr-dci-p3-and-rec-2020
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

色量 (Color Volume) 测试评估电视在整个亮度范围内能够显示的颜色总量。色量是一个三维概念：传统的[色域](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020)测试仅测量 CIE 色度图上的二维面积（即电视能显示哪些颜色），而色量在此基础上加入亮度轴，构成三维体积，告诉我们电视在哪些亮度级别下能保持色彩饱和度。

**何时重要**：色量对于所有 HDR 内容都至关重要，尤其是当画面中出现非常饱和且非常明亮的颜色时。例如，HDR 电影中的日落、霓虹灯、烟花等高饱和高亮度场景，需要电视同时维持色彩的纯度和亮度。色量不足的电视在显示这类内容时，鲜艳色彩会显得暗淡、褪色。

**色域与色量的关系**：
- **色域 (Color Gamut)** 告诉我们电视能显示**哪些颜色**——这是 CIE 色度图上的二维切片
- **色量 (Color Volume)** 告诉我们电视在**哪些亮度下**能显示这些颜色——这是加入亮度轴后的三维体积
- 色域和色量在测试中同时测量，但传达不同的信息

**比喻**：如果色域是三明治中的芝士，色量就是整个三明治。只有芝士只知道味道的一部分，咬下整个三明治才能体会完整风味。

本测试分为 SDR 色量和 HDR 色量两大部分，使用不同的色彩空间和测量方法。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/color-volume#when-it-matters)

## 测试方法

本测试包含两大独立测量部分：SDR 色量（使用 CIELAB 色彩空间）和 HDR 色量（使用 ICtCp/ITP 色彩空间）。两部分在 Test Bench 2.0 中引入，并在后续版本中持续更新。

---

### SDR 色量测量

#### 前置条件

- **设备校准状态**：
  - Colorimetry Research CR-100 色度计需预先使用 CR-250 参考光源进行校准
  - Calman 软件已配置 CR-100 通信参数
- **环境要求**：暗室环境，避免外部光线对色度计读数产生干扰
- **电视预热时间**：电视需播放预热视频至少 15 分钟，确保面板达到热稳定状态
- **信号源设置**：
  - 使用标准 SDR 信号源（非 HDR）
  - 电视校准至漫射白 (diffuse white) 亮度为 100 cd/m²（SDR 标准参考亮度）
  - 电视色彩空间设置为最大色域（通常为 "Native" 或 "Auto"）
  - 局部调光关闭（SDR 测量需评估面板原生色彩能力）
- **选择 [CIELAB](https://www.rtings.com/tv/tests/picture-quality/color-volume#our-tests) 色彩空间的原因**：
  - CIELAB 中 L*=100 对应漫射白 = 100 cd/m²，恰好匹配 SDR 的参考亮度
  - CIELAB 不存在 L*>100 的值，这与 SDR 无需高于漫射白亮度的特性一致
  - HDR 场景下缺乏关于漫射白亮度的业界共识，因此 SDR 使用 CIELAB 而非 ITP

#### 详细测量步骤

1. **连接设备**：将搭载 NVIDIA GTX 1060 或 GTX 1660 显卡的 PC 通过 HDMI 连接到电视
2. **校准电视白点**：使用 CR-100 色度计将 SDR 白点校准至 D65（约 6500K），亮度设为 100 cd/m²
3. **设置色彩空间**：将电视色彩空间设置为最大色域模式（通常为 "Native"），以测量面板所能达到的最大色彩范围
4. **启动 Calman 测量**：在 Calman 软件中启动 SDR 色量自动测量程序
5. **EOTF 曲线测量**：Calman 软件首先发送一系列灰阶信号（从 0% 到 100% 刺激量），通过 CR-100 逐点测量电视的电-光转换函数 (EOTF)
6. **色域边界测量**：Calman 沿色域边界发送多个色彩测试图案，CR-100 逐个测量各色彩的色度坐标和亮度
7. **全亮度范围扫描**：Calman 自动生成并显示不同亮度级别下的色彩测试图案，共采集 **602 个独立测量点**，覆盖整个 SDR 亮度范围内的色彩表现
8. **数据采集完成**：Calman 软件自动汇总所有测量点，生成以下输出：
   - **Cube Data（三维立方体数据）**：完整的三维色彩体积数据
   - **Target & Intersect Data（目标与交集数据）**：实测色量与目标色量的交集信息
   - **Gamut Rings（色域环图）**：从交集数据生成的可视化色域环图

#### 数据处理与公式

- **CIELAB DCI-P3 Coverage**：测量电视在 CIELAB 空间中对 DCI-P3 色域的覆盖百分比。计算方式为电视实际色量体积与 DCI-P3 理想色量体积的比值
- **CIELAB BT.2020 Coverage**：测量电视在 CIELAB 空间中对 BT.2020 色域的覆盖百分比。计算方式同理
- **异常值处理**：超出目标色量的部分（过亮或过饱和）不计入覆盖率，确保结果不会超过 100%
- **Gamut Rings**：由 Dr. Kenichiro Masaoka（NHK）开发的可视化方法，通过同心环图直观展示不同亮度级别下的色域覆盖情况
- **交集图 (Intersection Diagram)**：由 Dr. Euan Smith 开发，展示实测色量与理想色量的空间关系

---

### HDR 色量测量

#### 前置条件

- **设备校准状态**：
  - CR-100 色度计已使用 CR-250 校准
  - NVIDIA GTX 1060/1660 显卡输出已验证可正确发送 HDR10 信号
  - HDFury Linker 已配置为 HDR 信号透传模式
- **环境要求**：暗室环境
- **电视预热时间**：电视需播放 HDR 预热视频至少 15 分钟
- **信号源设置**：
  - PC 端通过 HDFury Linker 发送 HDR10 信号至电视
  - 电视切换至 HDR 电影/影院模式
  - HDR 白点校准至 6500K（D65）
  - 局部调光开启（HDR 模式下应使用最佳局部调光设置）
  - 背光/亮度设为最大值（确保 HDR 峰值亮度）

#### 详细测量步骤

1. **连接设备链路**：PC → HDFury Linker → HDMI → 电视，确保 HDR 信号正确传递
2. **触发 HDR 模式**：通过 HDFury Linker 向电视发送 HDR10 信号，电视自动切换至 HDR 画面模式
3. **校准 HDR 白点**：使用 CR-100 将 HDR 白点校准至 6500K
4. **设置电视参数**：
   - 画面模式：HDR 电影/影院模式
   - 背光/亮度：最大值
   - 色彩空间：Auto 或最宽
   - 局部调光：最佳设置（通常为"高"或"自动"）
5. **启动 CalMan 5 测量**：在 CalMan 5 for Business 中启动 HDR 色量自动测量程序
6. **EOTF 曲线测量**：发送灰阶信号，测量 HDR EOTF 曲线，确定电视在各亮度级别的实际输出
7. **色域边界测量**：沿 HDR 色域边界发送色彩测试图案，CR-100 逐点测量
8. **全亮度范围扫描**：CalMan 自动在不同亮度级别下采集色彩数据
9. **色彩亮度测量**：额外测量 7 种纯色在最大刺激量下的峰值亮度：纯白、纯红、纯绿、纯蓝、青色、品红、黄色

#### 数据处理与公式

- **DCI-P3 Coverage ITP**：使用 ICtCp（又称 ITP）感知均匀色彩空间计算。参考基准为峰值亮度 **1000 cd/m²** 的理想电视的 DCI-P3 色量体积。计算公式为：

  \`\`\`
  DCI-P3 Coverage = (实测 ICtCp 色量 ∩ 理想 1000 cd/m² DCI-P3 色量) / (理想 1000 cd/m² DCI-P3 色量) × 100%
  \`\`\`

  **v1.8 版本重要变更**：此前的测试基准为被测电视自身峰值亮度对应的理想电视，v1.8 改为固定 1000 cd/m² 参考基准。这一变更提供了更好的跨电视比较基准，因为大多数电视峰值亮度接近 1000 cd/m²，且绝大多数 HDR 内容的亮度级别低于此值。

- **Rec.2020 Coverage ITP**：参考基准为峰值亮度 **10000 cd/m²** 的理想电视的 Rec.2020 色量体积。计算公式为：

  \`\`\`
  Rec.2020 Coverage = (实测 ICtCp 色量 ∩ 理想 10000 cd/m² Rec.2020 色量) / (理想 10000 cd/m² Rec.2020 色量) × 100%
  \`\`\`

- **Color Luminance**：直接报告 7 种纯色的峰值亮度（单位：cd/m² 或 nits），不进行归一化处理。重点关注各颜色亮度与纯白亮度的对比关系。

- **上限限制**：任何子测试结果不会超过 100%，超出部分不计入。

- **ICtCp 色彩空间说明**：
  - ICtCp（也称 ITP）是专为 HDR 内容设计的感知均匀色彩空间
  - 模拟人眼对颜色的感知响应特性——人眼对暗光亮度变化的敏感度远高于亮光
  - 相比 CIELAB，ICtCp 在 HDR 亮度范围内更加感知均匀
  - 确保测量结果与人眼实际感知一致，而非仅仅反映物理量的差异

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/color-volume#our-tests)

## 测试设备

| 设备 | 型号 | 用途 |
|------|------|------|
| 色度计 | Colorimetry Research CR-100 | 放置在电视正前方，测量各测试图案的色度坐标和亮度值 |
| 校准参考 | Colorimetry Research CR-250 | 作为 CR-100 的校准参考光源 |
| 信号源 PC | NVIDIA GTX 1060 或 GTX 1660 显卡 | 生成并发送测试信号图案 |
| HDR 信号控制器 | HDFury Linker | 向电视发送 HDR10 信号，控制 HDR 信令 |
| 测量软件 | CalMan 5 for Business | 自动生成测试图案、采集 CR-100 数据、计算色量结果 |

## 测试资源

### 测试图案

| 资源 | 用途 |
|------|------|
| SDR 灰阶测试图案序列 | EOTF 曲线测量（SDR） |
| SDR 色彩测试图案序列 | SDR 色域边界和色量测量（602 个测量点） |
| HDR 灰阶测试图案序列 | EOTF 曲线测量（HDR） |
| HDR 色彩测试图案序列 | HDR 色域边界和色量测量 |
| 纯色测试图案（7色） | 色彩亮度子测试（纯白、红、绿、蓝、青、品红、黄） |
| CalMan 5 for Business | 自动化测量、数据处理与可视化 |

### SDR 色域环图 (Gamut Rings)

![色域环图 — DCI-P3](assets/test-patterns/gamut-rings-p3.jpg)
*SDR 色域环图 (DCI-P3 参考空)*

![色域环图 — DCI-P3 测量结果](assets/test-patterns/gamut-rings-p3-results.jpg)
*SDR 色域环图实际测量结果示例（电视色域填充 DCI-P3 的程度）*

![色域环图 — BT.2020](assets/test-patterns/gamut-rings-2020.jpg)
*SDR 色域环图 (BT.2020 参考空)*

![色域环图 — BT.2020 测量结果](assets/test-patterns/gamut-rings-2020-results.jpg)
*SDR 色域环图实际测量结果示例（电视色域填充 BT.2020 的程度）*

### HDR 色量参考

![色量对照表](assets/test-patterns/cv-cheat-sheet.jpg)
*色量 (Color Volume) 对照表：不同显示技术在各个亮度级别的色域覆盖能力参考*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_28332))

![DCI-P3 色量](assets/product-examples/lg-c4-oled/06-color-volume/volume-p3-itp-small.jpg) ![BT.2020 色量](assets/product-examples/lg-c4-oled/06-color-volume/volume-2020-itp-small.jpg)
*色量 (Color Volume) 测试结果：DCI-P3（左）和 BT.2020（右）色域体积*

![亮室色量](assets/product-examples/lg-c4-oled/06-color-volume/bright-room-color-volume-graph-small.jpg)
*亮室环境下色量表现：环境光对色域覆盖的影响*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_28332))

![DCI-P3 色量](assets/product-examples/samsung-qn90f/06-color-volume/volume-p3-itp-small.jpg) ![BT.2020 色量](assets/product-examples/samsung-qn90f/06-color-volume/volume-2020-itp-small.jpg)
*色量 (Color Volume) 测试结果：DCI-P3（左）和 BT.2020（右）色域体积*

![亮室色量](assets/product-examples/samsung-qn90f/06-color-volume/bright-room-color-volume-graph-small.jpg)
*亮室环境下色量表现：环境光对色域覆盖的影响*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

**SDR 色量**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| CIELAB DCI-P3 Coverage | **60%** | > 85% | 5% |
| CIELAB BT.2020 Coverage | **40%** | > 75% | 5% |

**HDR 色量**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| 10,000 cd/m² BT.2020 Coverage ITP | **100%** | > 35% | 未公开 |

### 可感知差异阈值

- **DCI-P3 Coverage ITP**：未公开具体可感知差异阈值
- **Rec.2020 Coverage ITP**：未公开具体可感知差异阈值
- **Color Luminance**：各颜色的峰值亮度差异可感知性取决于颜色种类和绝对亮度级别

### 评分参考范围

#### DCI-P3 色量（主要指标）

| 评级 | DCI-P3 Coverage | 代表型号示例 |
|------|----------------|-------------|
| 优秀 | > 90% | Samsung S95B OLED（QD-OLED，RGB 像素布局） |
| 良好 | 75%-90% | 多数高端 LED 和 WOLED |
| 一般 | 60%-75% | 中端 LED |
| 较差 | < 60% | 入门级 LED |

#### Rec.2020 色量（高端指标）

| 评级 | Rec.2020 Coverage | 说明 |
|------|-------------------|------|
| 优秀 | > 30% | Samsung S95B OLED 约 51.7%，业界领先 |
| 良好 | 15%-30% | 高端 QD-OLED 和旗舰 LED |
| 一般 | 8%-15% | 多数中高端电视 |
| 较差 | < 8% | 入门级电视 |

#### 色彩亮度（辅助指标）

| 指标 | 良好值 | 说明 |
|------|--------|------|
| 纯白峰值亮度 | > 650 cd/m² | HDR 高光表现 |
| 各颜色亮度关系 | — | 各颜色与纯白的亮度比例关系比绝对值更重要 |

## 关键指标

### 色域 vs 色量

| 方面 | 色域 (Color Gamut) | 色量 (Color Volume) |
|------|-------------------|-------------------|
| 维度 | 二维（CIE 色度图面积） | 三维（加入亮度轴） |
| 测量位置 | 75% 刺激信号处的一个切片 | 全部亮度级别 |
| 含义 | 哪些颜色能显示 | 在什么亮度下能显示 |
| 测试关系 | 色量是色域的三维扩展 | 色域是色量的二维切片 |

### 子像素布局对色量的影响

| 子像素类型 | 代表型号 | 色量特点 |
|-----------|---------|---------|
| RGB（标准三色） | Samsung S95B OLED | 各颜色亮度均匀，色量表现最优 |
| RWBG（四色 WOLED） | LG C2 OLED | 纯白更亮但其他颜色较暗，整体色量受影响 |

RWBG 布局的 OLED 因白色子像素使纯白更亮，但其他颜色不够亮。人眼对绿色更敏感，对蓝色敏感度较低，蓝色亮度低于红绿是正常的。

### 不同显示技术的色量差异

| 显示技术 | 色量特点 |
|----------|---------|
| QD-OLED（RGB） | 高亮度下保持高色纯度，色量表现最优 |
| WOLED（RWBG） | 白色子像素提升亮度但降低其他颜色亮度 |
| 量子点 LED | 高亮度下色域保持较好 |
| 普通 LED | 高亮度下色域缩小明显 |

### 影响色量的因素

1. **高亮度下的色域缩水**：部分技术在提高亮度时降低色纯度，导致色量体积在高亮度端收缩
2. **低亮度下的色彩准确度**：低亮度时某些技术的色彩追踪不佳，导致色量体积在低亮度端收缩
3. **色调映射**：HDR 色调映射可能影响色彩表现，裁剪 (Clipping) 或压缩 (Compression) 策略不同导致色量差异
4. **子像素布局**：RWBG vs RGB 对色量有显著影响，白色子像素提升白光亮度但牺牲彩色亮度

### 色调映射 (Tone Mapping)

没有电视能显示全部 Rec.2020 色彩空间，因此需要色调映射：
- **裁剪 (Clipping)**：超出显示能力的颜色直接丢失
- **压缩 (Compression)**：将颜色压缩到显示限制内
- 目前没有广色域校准标准，因为缺乏参考实现

### 如何获得最佳效果

1. **背光设为最大**：充分利用明亮高光和色彩
2. **开启局部调光**：降低部分区域背光强度，暗场景中获得更宽的色彩范围
3. **色彩空间设为 Auto**：让电视自动匹配内容色彩空间
4. **启用 HDR 全带宽信号**：确保电视接收到完整 HDR 信息
5. **避免强制 Native 模式**：可能导致色彩过饱和

### 相关测试

| 相关测试 | 关系 |
|----------|------|
| Color Gamut（色域） | 同时测量，色域是色量的二维切片 |
| HDR Peak Brightness | 包含 EOTF 测试，与色量测量配合进行 |
| Color Accuracy | 色量的准确性影响整体色彩表现 |

### Test Bench 版本历史

| 版本 | 变更内容 |
|------|---------|
| TB 2.0 | 首次引入色量测试（SDR + HDR） |
| TB 1.8 | HDR DCI-P3 Coverage 参考基准从电视自身峰值亮度改为固定 1000 cd/m² |

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/color-volume#additional-information)

相关测试: [色域](https://www.rtings.com/tv/tests/picture-quality/wide-color-gamut-rec-709-dci-p3-rec-2020) | [色彩准确度](https://www.rtings.com/tv/tests/picture-quality/color-accuracy) [↗](https://www.rtings.com/tv/tests/picture-quality/color-volume#conclusion)
`;export{n as default};
