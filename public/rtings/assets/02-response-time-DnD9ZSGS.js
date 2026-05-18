const n=`# 响应时间 / 运动模糊 (Response Time / Motion Blur)

> 来源: https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time
> Wayback 归档: https://web.archive.org/web/2024/https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

响应时间测试衡量电视像素从一种灰阶过渡到另一种灰阶所需的时间。该测试是 Motion 类别中权重最高的子项，直接影响运动画面的清晰度。响应时间慢会导致运动模糊 (motion blur) 和残影 (ghosting)，快速响应时间则能呈现清晰锐利的运动画面。

**定义**: 像素从一种灰阶亮度过渡到目标灰阶亮度所需的时间
**适用场景**: 所有运动画面（游戏、体育、电影）；快速运动场景最为明显

### 重要说明

本文件描述的是 **Test Bench 2.0 版本** 的响应时间测试方法。该版本与 Test Bench 1.11 的测试方法 **完全不同**，两者的结果 **不可直接比较**：

| 对比项 | TB 1.11（旧版） | TB 2.0（新版） |
|--------|----------------|----------------|
| 过渡数量 | 12 种灰阶过渡 | 72 种灰阶过渡（9 个灰阶之间） |
| 灰阶级别 | 固定百分比过渡（如 0%->20%） | 9 个固定 RGB 级别（0, 31, 63, 95, 127, 159, 191, 223, 255） |
| 核心指标 | 80% 响应时间 + 100% 响应时间 | 首次响应时间 + 总响应时间 + 最差 10% 响应时间 |
| Gamma 校正 | 无 | 有（测量全部 256 级灰阶） |
| [CAD](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation) 计算 | 旧方法 | 本测试不包含 CAD（CAD 为独立测试） |

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#when-it-matters)

## 测试方法

### 前置条件

1. **电视预热**: 电视开机并显示内容至少 **30 分钟**。冷态电视的响应时间明显偏慢，预热是确保测量准确性的关键步骤
2. **电视设置**: 使用校准后的推荐设置，**不启用游戏模式**（使用正常/标准模式）——因为响应时间是面板固有特性，非游戏模式更能反映面板真实表现
3. **测试刷新率**: 在 **60Hz** 下进行测试
4. **测量环境**: 标准室内环境
5. **工具连接**: 将 Rtings 自主研发的专用光电二极管测量工具通过 USB 连接到测试 PC

### 详细测量步骤

#### 步骤 1: Gamma 校正

Gamma 校正是 TB 2.0 的核心创新步骤，旨在使不同显示技术（OLED vs LED LCD）的测量结果可比较。

1. 将光电二极管测量工具放置在屏幕上的固定位置
2. 依次显示从 RGB 0（纯黑）到 RGB 255（纯白）的 **全部 256 个灰阶级别**
3. 对每个灰阶级别，记录光电二极管读取的 **光输出值**（16 位整数，范围 0-65,535）
4. 建立 RGB 值（0-255）到光输出值（0-65,535）的完整映射表
5. **校正原理**: 不同显示技术的光输出曲线不同。OLED 纯黑时光输出为 0，LED 背光 LCD 纯黑时光输出大于 0。Gamma 校正将所有测量值统一到 RGB 0-255 的标准化尺度
6. 后续测量时，将光电二极管读取的原始光输出值（0-65,535）通过映射表转换为 Gamma 校正后的 RGB 值（0-255）

#### 步骤 2: 定义 9 个灰阶测试级别

测试使用以下 9 个均匀分布的灰阶级别：

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

对每种灰阶过渡，执行以下子步骤：

1. 在屏幕上显示起始灰阶颜色（如 RGB 0），确保像素稳定在起始状态
2. 突然切换到目标灰阶颜色（如 RGB 255）
3. 光电二极管以高采样率持续记录光输出的变化曲线
4. 将原始光输出数据通过 Gamma 校正映射表转换为 RGB 值
5. 记录完整的过渡曲线（起始 RGB -> 目标 RGB 的过渡轨迹）

#### 步骤 4: 计算三个核心指标

对每种过渡，从过渡曲线中提取以下三个指标：

**4a. 首次响应时间 (First Response Time)**:
- 定义: 像素 **首次** 穿过目标值附近 ±3 RGB 范围的时间点
- 衡量过渡的初始速度
- **< 7ms** 为良好

**4b. 总响应时间 (Total Response Time)**:
- 定义: 像素 **最终稳定** 在目标值 ±3 RGB 范围内的时间点
- 包含所有[过冲](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#ghosting-overshoot) (overshoot) 和振荡 (ringing) 的时间
- **< 14ms** 为良好

**4c. 最差 10% 响应时间 (Worst 10% Response Time)**:
- 定义: 在所有 72 种过渡中，表现最差的 7 种过渡（约 10%）的总响应时间平均值
- 反映最坏情况下的运动表现
- **< 20ms** 为良好

#### 步骤 5: 追踪相机拍照 (Pursuit Photo)

1. 在屏幕上显示专用追踪测试图案
2. 图案以 **1,920 像素/秒** 的速度在屏幕上水平移动
3. 在 **60Hz** 刷新率下拍摄
4. 拍摄条件: 使用追踪相机同步拍摄
5. **目的**: 直观揭示过冲导致的逆向鬼影 (inverse ghosting) 以及其他运动伪影
6. 照片中可清晰观察到:
   - 清晰的字母边缘 = 响应时间快
   - 字母后方出现反向色块 = 过冲导致的逆向鬼影
   - 字母后方出现拖尾 = 响应时间慢导致的残影

### 数据处理与公式

#### 过渡曲线数据处理

1. **原始数据**: 光电二极管输出的 16 位整数时间序列（0-65,535），采样间隔为亚毫秒级
2. **Gamma 校正**: 将每个采样点的光输出值通过映射表转换为 RGB 值（0-255）
3. **首次响应时间判定**: 过渡曲线上首次进入 [目标 RGB - 3, 目标 RGB + 3] 区间的时间点
4. **总响应时间判定**: 过渡曲线上最后一次离开 [目标 RGB - 3, 目标 RGB + 3] 区间之后，持续保持在该区间内的时间点
5. **容差**: ±3 RGB——像素到达目标值 ±3 RGB 范围内即视为达到目标

#### 指标聚合

- **首次响应时间报告值**: 72 种过渡的首次响应时间的算术平均值
- **总响应时间报告值**: 72 种过渡的总响应时间的算术平均值
- **最差 10% 响应时间**: 对 72 种过渡按总响应时间降序排列，取前 7 个（最差 10%）的平均值

#### 过冲可视化 [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#ghosting-overshoot)

- 虽然不单独计算过冲百分比数值，但过冲在过渡曲线图中清晰可见
- 过冲表现为过渡曲线超出目标 RGB 值的峰值部分
- 严重的过冲会在追踪照片中产生明显的逆向鬼影

[→ Rtings: How We Measure](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#how-we-measure)

## 测试设备 [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#how-to-get-the-best-results)

| 设备 | 型号/描述 | 用途 |
|------|----------|------|
| 自定义光电二极管工具 | 内置高精度光电二极管的专用测量设备 | 测量光输出，转换为 16 位整数（0-65,535） |
| 测试 PC | 定制 PC | 通过 USB 连接测量工具，运行自动测试程序 |
| 追踪相机 | Pursuit Camera | 以 1,920 px/sec 速度拍摄运动图案，揭示运动伪影 |
| HDMI 线缆 | 标准 HDMI | 60Hz 信号传输 |

## 测试资源

- **Rtings 自主研发响应时间工具**: 光电二极管 + USB 连接 + 自动测试软件
- **256 级灰阶 Gamma 校正表**: 256 个灰阶级别的光输出映射数据
- **72 种灰阶过渡测试程序**: 自动遍历所有 9x8 种过渡组合
- **追踪测试图案**: 专用运动测试图案，1,920 px/sec 速度

### 9 级灰阶示意

响应时间测试使用与 CAD 相同的 9 级灰阶：

![RGB 0](assets/test-patterns/rgb-0.jpg) ![RGB 31](assets/test-patterns/rgb-31.jpg) ![RGB 63](assets/test-patterns/rgb-63.jpg) ![RGB 95](assets/test-patterns/rgb-95.jpg) ![RGB 127](assets/test-patterns/rgb-127.jpg) ![RGB 159](assets/test-patterns/rgb-159.jpg) ![RGB 191](assets/test-patterns/rgb-191.jpg) ![RGB 223](assets/test-patterns/rgb-223.jpg) ![RGB 255](assets/test-patterns/rgb-255.jpg)
*9 个灰阶测试级别：72 种过渡组合全面覆盖灰阶变化*

![响应时间测试页面示意](assets/methodology-diagrams/response-time-hero.png)
*运动模糊与响应时间测试页面示意图：展示首次响应时间、总响应时间和最差 10% 响应时间的测量结果*

### 追踪相机拍摄示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_16))

![60Hz 追踪照片](assets/product-examples/lg-c4-oled/g02-response-time/pursuit-60hz-small.jpg) ![120Hz 追踪照片](assets/product-examples/lg-c4-oled/g02-response-time/pursuit-120hz-small.jpg)
*追踪相机照片：60Hz（左）vs 120Hz（右）— 字母边缘清晰度反映运动模糊程度*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_16))

![60Hz 追踪照片](assets/product-examples/samsung-qn90f/g02-response-time/pursuit-60hz-small.jpg) ![120Hz 追踪照片](assets/product-examples/samsung-qn90f/g02-response-time/pursuit-120hz-small.jpg)
*追踪相机照片：60Hz（左）vs 120Hz（右）— 字母边缘清晰度反映运动模糊程度*

### 过渡测试示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_16))

![色彩过渡](assets/product-examples/lg-c4-oled/g02-response-time/color-transition-img-small.jpg) ![灰阶过渡](assets/product-examples/lg-c4-oled/g02-response-time/gray-transition-img-small.jpg)
*色彩过渡（左）和灰阶过渡（右）测试实拍：展示不同类型过渡的运动表现*

![最大刷新率追踪照片](assets/product-examples/lg-c4-oled/g02-response-time/pursuit-max-small.jpg)
*最大刷新率下的追踪相机照片：运动清晰度在不同刷新率下的表现*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_16))

![色彩过渡](assets/product-examples/samsung-qn90f/g02-response-time/color-transition-img-small.jpg) ![灰阶过渡](assets/product-examples/samsung-qn90f/g02-response-time/gray-transition-img-small.jpg)
*色彩过渡（左）和灰阶过渡（右）测试实拍：展示不同类型过渡的运动表现*

![最大刷新率追踪照片](assets/product-examples/samsung-qn90f/g02-response-time/pursuit-max-small.jpg)
*最大刷新率下的追踪相机照片：运动清晰度在不同刷新率下的表现*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 指标 | 权重 | 优秀阈值 |
|------|------|---------|
| Total Response Time (总响应时间) | **45%** | < 14 ms |
| First Response Time (首次响应时间) | **30%** | < 7 ms |
| Worst 10% Response Time (最差10%) | **25%** | < 20 ms |

### 可感知差异阈值

- **首次响应时间**: ~3-5ms 差异可感知
- **总响应时间**: ~5-7ms 差异可感知
- **最差 10% 响应时间**: ~10ms 差异可感知

### 评分参考范围

#### 首次响应时间

| 首次响应时间 | 评分参考 | 说明 |
|-------------|---------|------|
| < 2ms | 10.0 | OLED 级别，接近瞬时 |
| 2-7ms | 8.0-9.0 | 极快至良好 |
| 7-15ms | 5.0-7.0 | 一般 |
| > 15ms | 1.0-4.0 | 明显运动模糊 |

#### 总响应时间

| 总响应时间 | 评分参考 | 说明 |
|-----------|---------|------|
| < 5ms | 10.0 | OLED 级别 |
| 5-14ms | 8.0-9.0 | 良好至优秀 |
| 14-25ms | 5.0-7.0 | 一般 |
| > 25ms | 1.0-4.0 | 严重运动模糊 |

#### 最差 10% 响应时间

| 最差 10% 响应时间 | 评分参考 | 说明 |
|------------------|---------|------|
| < 10ms | 10.0 | 几乎无弱过渡 |
| 10-20ms | 7.0-9.0 | 少数暗部过渡偏慢 |
| 20-50ms | 4.0-6.0 | VA 面板典型，暗部拖影明显 |
| > 50ms | 1.0-3.0 | 严重黑色拖影 |

## 关键指标

### 响应时间术语

| 术语 | 定义 | 说明 |
|------|------|------|
| GtG (Gray-to-Gray) | 灰阶到灰阶的过渡时间 | 最常用的响应时间指标 |
| BtW (Black-to-White) | 全黑到全白的过渡时间 | 通常是最慢的过渡之一 |
| WtB (White-to-Black) | 全白到全黑的过渡时间 | 关键过渡 |
| MPRT (Moving Picture Response Time) | 运动画面响应时间 | 反映实际观看时的模糊程度 |
| 首次响应时间 (TB 2.0) | 首次到达目标 ±3 RGB 的时间 | 衡量初始速度 |
| 总响应时间 (TB 2.0) | 最终稳定在目标 ±3 RGB 的时间 | 包含过冲和振荡 |

### 不同面板类型的运动特性 [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#oled-vs-led)

| 显示技术 | 典型 GtG 响应时间 | 运动特点 | 主要伪影 |
|----------|------------------|---------|---------|
| OLED | ~0.1-0.5ms | 最清晰的运动，几乎瞬时 | 低刷新率下的持续模糊 |
| 高端 LCD (Fast IPS/VA) | 2-5ms | 快但可能有过冲 | 可能出现逆向鬼影 |
| 普通 LCD (IPS) | 5-10ms | 中等，轻微运动模糊 | 可能过冲较多 |
| 普通 LCD (VA) | 10-20ms | 暗部过渡慢 | 黑色拖影 (black smearing) |

### 常见残影类型 [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#ghosting-black-smearing)

| 残影类型 | 典型面板 | 表现 | 原因 |
|----------|---------|------|------|
| 黑色拖影 (Black Smearing) | VA | 暗场景运动时出现黑色拖尾 | VA 面板在低灰阶过渡极慢 |
| 逆向伪影 (Inverse Ghosting) | 过驱 LCD | 运动物体边缘出现反向色块 | 过冲 (overshoot) 导致 |
| 运动模糊 (Motion Blur) | 所有 LCD | 快速运动时画面模糊不清 | 慢响应 + 采样保持效应 |

### 运动模糊的根本原因 [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#causes-and-effects-of-motion-blur)

1. **慢响应时间**: 像素过渡不够快，导致画面残留
2. **采样保持效应 (Sample-and-Hold)**: 即使响应快，保持型显示仍有固有模糊
3. **低刷新率**: 60Hz 比 120Hz 的运动模糊更严重
4. **缺少 BFI**: 没有黑帧插入 (Black Frame Insertion) 来减少保持效应

### 版本可比性说明

- **TB 2.0 响应时间结果与 TB 1.11 不可比较**: 测试方法完全不同（72 vs 12 过渡、不同指标定义、新增 Gamma 校正）
- **原始测量值（过渡曲线）可用于参考**: 但指标定义不同，不能直接对比数值
- **CAD 为独立测试**: 响应时间测试不包含 CAD 计算，CAD 有单独的测试文件

### 注意事项 [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#other-notes)

- 响应时间不等于输入延迟 (Input Lag)——两者是完全独立的指标
- 响应时间影响运动画面清晰度，输入延迟影响操控响应
- VA 面板在暗场景下的黑色拖影是最常见的响应时间问题
- 本测试在 60Hz 下以非游戏模式进行，反映面板固有特性
- MPRT 可通过 BFI 功能显著改善
- 追踪相机测试照片反映的是实际观看体验

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#additional-information)

相关测试: [CAD](https://www.rtings.com/tv/tests/motion/cumulative-absolute-deviation) | [输入延迟](https://www.rtings.com/tv/tests/inputs/input-lag) [↗](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time#conclusion)
`;export{n as default};
