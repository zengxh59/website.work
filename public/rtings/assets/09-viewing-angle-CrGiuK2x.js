const n=`# 可视角度 (Viewing Angle)

> 来源: https://www.rtings.com/tv/tests/picture-quality/viewing-angle
> Wayback 快照: 2025-12-31T01:56:32
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 页面最后修改: 2021-03-02
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

可视角度测试评估从不同角度观看电视时色彩和图像准确性的变化程度。当从侧面观看时，某些电视的图像会变得不准确（色彩褪色、色相偏移、亮度损失、黑位提升、Gamma 偏移），而另一些则能更好地保持图像准确性。对于拥有宽座位布局、多人观看场景的家庭来说，宽广的可视角度非常重要。

**定义**：从侧面观看时的色彩和图像准确度

**何时重要**：
- **宽座位布局的家庭**：沙发横跨较大范围、多人同时观看时，坐在边缘位置的观众会体验到角度导致的画质下降
- **大客厅多人观看**：聚会、体育赛事观看等多人场景
- **近距离使用**：将电视作为电脑显示器使用时，由于观看距离近，屏幕边缘相对角度较大，窄可视角度的电视边缘可能出现变暗和褪色
- **不测试垂直角度**：本测试仅测试水平可视角度（从侧面观看），不测试垂直可视角度（从上方或下方观看）

**面板技术特点**（[面板类型](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#panel-type)）：
- **OLED**：自发光像素，各方向均匀发光，可视角度最宽广
- **IPS**：液晶分子排列方式使其具有较宽广的可视角度，但对比度较低
- **VA**：对比度高但可视角度窄，侧面观看时画质下降明显
- **VA + 可视角度技术**：三星 Ultra Viewing Angle 和索尼 X-Wide Angle 技术可改善 VA 面板的可视角度，但会略微降低对比度

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#when-it-matters)

## 测试方法

### 前置条件

- **设备校准状态**：
  - Colorimetry Research CR-100 色度计需针对每台被测电视进行独立校准
  - 校准过程确保色度计对被测电视的光谱特性有准确的响应曲线
- **环境要求**：可控光照环境，避免屏幕反射和外部光线干扰色度计读数
- **电视预热时间**：电视需播放预热视频至少 15 分钟，确保面板达到热稳定状态
- **信号源设置**：
  - 画面模式：电影/影院模式（校准后）
  - 其他图像增强功能使用推荐设置
- **电视安装方式**：电视放置在旋转台上，可精确控制旋转角度

### 详细测量步骤

1. **安装电视**：将电视固定在旋转台上，确保旋转轴与屏幕垂直中心线对齐
2. **校准色度计**：将 CR-100 色度计校准至被测电视的光谱特性，确保色彩和亮度读数准确
3. **定位色度计**：将 CR-100 放置在电视正前方（0° 位置），对准屏幕中心
4. **开始旋转测量**：将电视从 **0°（正对）** 旋转至 **70°**（向右侧），单向旋转
   - 仅测量电视的一侧（不测量左右两侧）
   - 假设面板特性在水平方向上对称
   - 在旋转过程中，CR-100 持续或分步采集色彩和亮度数据
5. **数据采集**：
   - 测量不同角度下的色彩色度 (Chroma)、色相 (Hue)、亮度 (Lightness)
   - 使用纯红、纯蓝、纯绿测试图案进行色彩测量
   - 使用 6 级灰阶测试图案（纯黑、20% 灰、40% 灰、60% 灰、80% 灰、纯白）进行亮度和 Gamma 测量
6. **Octave 软件处理**：所有测量数据传入 Octave 软件，自动生成可视角度相关的结果和图表
7. **拍摄旋转视频**：使用固定位置的数码相机拍摄从正面到 70° 右侧的旋转视频
   - 视频仅作为视觉参考，不影响最终评分

### 数据处理与公式

**色彩褪色 (Color Washout) 分析**：
- 对纯红、纯蓝、纯绿三种颜色的色度 (Chroma) 数据进行分析
- 记录每种颜色的色度降至 0° 位置原始值 **80%** 时的角度
- 取三个角度中最小的值作为色彩褪色角度（最先出现明显褪色的颜色决定整体表现）

**色彩偏移 (Color Shift) 分析**：
- 使用与色彩褪色测试相同的 RGB 色度数据，但分析色相 (Hue) 变化而非色度
- 记录色相偏移达到 **3 度**时的角度
- 色相偏移 3 度即被认定为可感知的色彩偏移

**亮度损失 (Brightness Loss) 分析**：
- 对 6 级灰阶测试图案的亮度 (Lightness) 数据进行分析
- 记录亮度降至 0° 位置原始值 **75%** 时的角度
- 纯白测试图案的亮度归一化为 1.0，纯黑为 0.0
- 此测试测量的是感知亮度损失，而非物理亮度的绝对变化

**黑位提升 (Black Level Raise) 分析**：
- 基于灰阶测试中的纯黑测试图案数据
- 记录黑位亮度翻倍（即亮度达到 0° 位置黑位的 **2 倍**）时的角度
- 黑位翻倍意味着暗色出现明显褪色，暗场景中黑色变成灰色

**Gamma 偏移 (Gamma Shift) 分析**：
- 使用灰阶测试中的各级灰度数据
- 计算各灰阶色调相对于黑白水平的位移
- 记录灰阶位移达到 **3%**（相对于纯白和纯黑之间的范围）时的角度
- 图表中的虚线代表理想灰度值，当灰阶偏离虚线时表示 Gamma 正在偏移

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#how-to-get-the-best-results)

| 设备 | 型号 | 用途 |
|------|------|------|
| 色度计 | Colorimetry Research CR-100 | 校准至被测电视后，测量不同角度下的色彩和亮度数据 |
| 分析软件 | Octave | 自动生成角度相关的结果图表 |
| 旋转台 | — | 精确控制电视旋转角度，从 0° 到 70° |
| 数码相机 | — | 固定位置拍摄多角度对比视频（仅作视觉参考，不影响评分） |

## 测试资源

| 资源 | 用途 |
|------|------|
| 纯红测试图案 | 色彩褪色和色彩偏移测试 |
| 纯蓝测试图案 | 色彩褪色和色彩偏移测试 |
| 纯绿测试图案 | 色彩褪色和色彩偏移测试 |
| 纯黑测试图案 (0%) | 亮度损失、黑位提升和 Gamma 偏移测试 |
| 20% 灰测试图案 | 亮度损失和 Gamma 偏移测试 |
| 40% 灰测试图案 | 亮度损失和 Gamma 偏移测试 |
| 60% 灰测试图案 | 亮度损失和 Gamma 偏移测试 |
| 80% 灰测试图案 | 亮度损失和 Gamma 偏移测试 |
| 纯白测试图案 (100%) | 亮度损失和 Gamma 偏移测试 |
| 旋转视频素材 | 从正面到 70° 右侧拍摄的视觉参考 |

### 测量工具示意

![窄角度测量](assets/test-patterns/viewing-angle-narrow.png) ![宽角度测量](assets/test-patterns/viewing-angle-wide.png)
*可视角度测量工具示意：窄角度（左）和宽角度（右）的测量对比*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_17))

![色彩褪色角度曲线](assets/product-examples/lg-c4-oled/09-viewing-angle/viewing-angle-from-left-chroma-small.jpg) ![色相偏移角度曲线](assets/product-examples/lg-c4-oled/09-viewing-angle/viewing-angle-from-left-hue-small.jpg) ![亮度损失角度曲线](assets/product-examples/lg-c4-oled/09-viewing-angle/viewing-angle-from-left-lightness-small.jpg)
*可视角度测试曲线：色彩褪色（左）、色相偏移（中）、亮度损失（右）*

![黑位提升曲线](assets/product-examples/lg-c4-oled/09-viewing-angle/black-level-raise-small.jpg) ![环境光黑位提升](assets/product-examples/lg-c4-oled/09-viewing-angle/ambient-black-level-raise-graph-small.jpg)
*黑位提升曲线（左）和环境光下的黑位提升（右）*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_17))

![色彩褪色角度曲线](assets/product-examples/samsung-qn90f/09-viewing-angle/viewing-angle-from-left-chroma-small.jpg) ![色相偏移角度曲线](assets/product-examples/samsung-qn90f/09-viewing-angle/viewing-angle-from-left-hue-small.jpg) ![亮度损失角度曲线](assets/product-examples/samsung-qn90f/09-viewing-angle/viewing-angle-from-left-lightness-small.jpg)
*可视角度测试曲线：色彩褪色（左）、色相偏移（中）、亮度损失（右）*

![黑位提升曲线](assets/product-examples/samsung-qn90f/09-viewing-angle/black-level-raise-small.jpg) ![环境光黑位提升](assets/product-examples/samsung-qn90f/09-viewing-angle/ambient-black-level-raise-graph-small.jpg)
*黑位提升曲线（左）和环境光下的黑位提升（右）*

> **注意**: 可视角度测试使用纯色和灰阶图案进行自动化 CR-100 色度计测量，不使用标准化的测试图案图片。测试结果以不同角度下的色度/亮度变化曲线呈现。

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重** (Rtings 内部权重比例，总权重 = 25):

| 子测试 | 原始权重 | 百分比权重 | 优秀阈值 | 可感知差异 |
|--------|---------|-----------|---------|-----------|
| Brightness Loss | 6 | **24%** | > 45° | 10° |
| Gamma Shift | 6 | **24%** | > 45° | 10° |
| Color Washout | 5 | **20%** | > 45° | 10° |
| Color Shift | 4 | **16%** | > 45° | 10° |
| Black Level Raise | 4 | **16%** | > 45° | 10° |

### 5 个子测试

| 序号 | 子测试 | 阈值定义 | 可感知差异 |
|------|--------|---------|-----------|
| 1 | Color Washout（色彩褪色） | RGB 色度降至原始值 80% 的角度 | **10 度** |
| 2 | Color Shift（色彩偏移） | 色相偏移 3 度的角度 | **10 度** |
| 3 | Brightness Loss（亮度损失） | 亮度降至原始值 75% 的角度 | **10 度** |
| 4 | Black Level Raise（黑位提升） | 黑位亮度翻倍的角度 | **10 度** |
| 5 | Gamma Shift（Gamma 偏移） | 灰阶位移 3% 的角度 | **10 度** |

### 可感知差异阈值

- **所有 5 个子测试的可感知差异均为 10 度**
- 即两个电视在同一子测试中的角度差异需达到 10 度以上，人眼才能察觉实际观感差异

### 评分参考范围

| 评分 | 描述 | 典型面板技术 |
|------|------|-------------|
| 10.0 | 从任何角度画质几乎无变化 | OLED |
| 8.0 - 9.0 | 大角度下轻微变化 | IPS 高端 |
| 6.0 - 7.0 | 30° 以内表现良好，更大角度明显下降 | IPS 中端 |
| 4.0 - 5.0 | 15° 以外就开始明显变化 | VA + 可视角度技术 |
| 2.0 - 3.0 | 几乎只能正对观看 | VA 标准 |

## 关键指标

### 面板技术与可视角度 [↗](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#panel-type)

| 面板类型 | 可视角度表现 | 特点 |
|----------|------------|------|
| OLED | 优秀，几乎无色彩/亮度偏移 | 自发光像素，各方向均匀发光，且对比度接近无穷大 |
| IPS | 良好，色彩偏移小但对比度下降 | 适合宽座位布局，但原生对比度低于 VA 面板 |
| VA | 较差，色彩偏移和对比度下降明显 | 原生对比度高但角度窄 |
| VA + 可视角度技术 | 改善（三星 Ultra Viewing Angle、索尼 X-Wide Angle） | 折中对比度和角度，对比度仍高于 IPS |

### 可视角度技术说明 [↗](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#viewing-angle-technology)

为改善 VA 面板可视角度，部分厂商引入了专有技术：
- **三星 Ultra Viewing Angle**：三星高端型号使用
- **索尼 X-Wide Angle**：索尼高端型号使用
- 这些技术在改善可视角度的同时会略微降低对比度，但不会像 IPS 面板那样对比度大幅下降
- 三星和索尼是目前唯二推出此类技术的厂商，且仅限于高端型号

### 子测试的典型面板表现

#### 色彩褪色 (Color Washout)

| 面板 | 典型表现 |
|------|---------|
| OLED | 几乎无褪色，角度表现优异 |
| IPS | 轻微褪色，大角度下可感知 |
| VA | 显著褪色，标准蓝色最先失去色度，开始看起来像蓝/灰色 |

#### 亮度损失 (Brightness Loss)

| 面板 | 典型表现 |
|------|---------|
| OLED | 亮度保持良好 |
| IPS | 亮度保持较好 |
| VA | VA 面板（如 Hisense H9G）在大角度下纯黑实际上会变亮（不再是纯黑）；IPS 面板（如 Sony X800H）在大角度下亮度保持更好 |

#### 黑位提升 (Black Level Raise)

| 面板 | 典型表现 |
|------|---------|
| OLED | 黑位始终为 0（像素完全关闭） |
| VA | 黑位极低（发光很少），但角度偏移后翻倍（如 Hisense H9G 在 20° 偏移时即翻倍） |
| IPS | 黑位本身较高（黑色偏灰），角度变化影响不大（如 Sony X800H 在 70° 范围内变化不大） |

#### Gamma 偏移 (Gamma Shift)

| 面板 | 典型表现 |
|------|---------|
| IPS | 宽广角度内保持 Gamma 稳定（如 Sony X800H） |
| VA | 窄角度即开始偏移（如 Hisense H9G，20% 灰看起来像 40% 灰） |

### 选择建议：IPS vs VA

这是可视角度与对比度之间的权衡：
- **IPS**：可视角度更好，但对比度更低
- **VA**：对比度更高，但可视角度更窄
- **OLED**：最佳选择，同时拥有宽广可视角度和接近无穷大的对比度

### 实际影响

- **窄房间/单人观看**：任何电视都可以，可视角度影响不大
- **宽座位布局/多人观看**：需要好的可视角度（OLED 或 IPS）
- **近距离使用（如作为电脑显示器）**：窄可视角度电视的屏幕边缘可能出现变暗和褪色
- **无法改善**：可视角度是面板固有特性，无法通过设置改善
- **建议**：如有 VA 面板且从侧面观看不准确，尽量将座位后退以减小角度（远距离观看时，相对角度更小，偏移感不明显）

### 如何获得最佳结果

可视角度无法通过任何设置来改善。如果拥有宽座位布局，建议购买 OLED 或 IPS 面板电视。如果已有 VA 面板并注意到从侧面观看图像不准确，尽量将座位后移。在较远距离观看时，窄可视角度的影响不那么明显，因为相对角度更小。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#additional-information)

相关测试: [对比度](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio) [↗](https://www.rtings.com/tv/tests/picture-quality/viewing-angle#conclusion)
`;export{n as default};
