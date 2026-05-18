const n=`# 图像闪烁 / 黑帧插入 (Image Flicker / Black Frame Insertion)

> 来源: https://www.rtings.com/tv/tests/motion/image-flicker
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 最后更新: 2026-04-28
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

图像闪烁测试评估电视屏幕的闪烁特性以及黑帧插入 ([BFI](https://www.rtings.com/tv/tests/motion/image-flicker#black-frame-insertion-vs-backlight-scanning-vs-backlight-strobing)) 功能的可用性。图像闪烁是指每一帧仅在短时间内显示、帧与帧之间插入黑帧或黑暗时段的现象。在 LCD 电视上，这通常通过频闪 (strobing) 背光来实现；OLED 电视由于没有背光且可以完全关闭单个像素，能够以更高效率实现相同效果。

背光闪烁 ([PWM](https://www.rtings.com/tv/tests/motion/image-flicker#our-tests) dimming) 与响应时间共同影响运动模糊。人眼追踪运动物体时，电视闪烁会影响快速移动物体的清晰度。缺乏闪烁可能导致移动物体后方出现拖尾，这对体育赛事或电子游戏尤其不利。

**重要声明**: Rtings 明确指出——"我们目前仅测量电视是否具备 BFI 功能以及其闪烁频率，但**不**评估 BFI 的实际效果表现"。也就是说，本测试确认的是功能存在性和频率参数，而非 BFI 对运动模糊的实际改善程度。

### 测试覆盖范围 (Test Bench 版本对比)

| 闪烁测试项 | 1.8 | 2.0 | 2.1 | 2.2 |
|-----------|-----|-----|-----|-----|
| PWM 调光频率 | 支持 | 支持 | 支持 | 支持 |
| 黑帧插入 (BFI) | 支持 | 支持 | 支持 | 支持 |
| 最低 BFI 频率 | 支持 | 支持 | 支持 | 支持 |
| 游戏模式最低闪烁 | 支持 | 支持 | 支持 | 支持 |

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/motion/image-flicker#when-it-matters)

## 测试方法

### 前置条件

1. **电视配置**: 将电视设置为 Rtings 推荐的校准设置
2. **画面模式**: 对于 PWM 测试使用校准后的标准/电影模式；对于 BFI 测试需手动开启电视的 BFI 相关设置
3. **测试信号**: 准备 60Hz 和 120Hz 两种输入信号
4. **设备准备**: Rigol DS1102E 示波器预热并校准，光电二极管完好且灵敏度正常
5. **环境要求**: 室内光照不应过亮，避免环境光对光电二极管的干扰

### 详细测量步骤

#### 子测试 1: PWM 调光频率测量

此测试测量电视背光在不同亮度级别下的闪烁频率和模式。

**步骤**:

1. 在电视上显示**白色全屏测试图像**
2. 将光电二极管 (photodiode) 放置在屏幕前方，对准白色区域
3. 将光电二极管连接至 Rigol DS1102E 示波器的输入通道
4. **第一次测量——最大亮度**: 将电视亮度设为最大值，记录示波器输出的亮度波形
5. **第二次测量——中等亮度**: 将电视亮度调至约 50% 的中等亮度，记录亮度波形
6. **第三次测量——最低亮度**: 将电视亮度调至最低（非关闭），记录亮度波形
7. 分析三次测量的示波器波形：
   - **无闪烁 (DC 调光)**: 波形为平稳直线，无周期性波动
   - **PWM 调光**: 波形呈现周期性的方波或脉冲，频率即为 PWM 频率
   - **混合调光**: 某些亮度级别为平稳直线（DC），某些级别为周期性脉冲（PWM）
8. 记录每个亮度级别的 PWM 频率（以 Hz 为单位）。如果为 DC 调光（无闪烁），记录为 **0 Hz**

#### 子测试 2: 黑帧插入 (BFI) 是否支持

此测试确认电视是否具备为 60fps 内容引入黑帧的功能。

**步骤**:

1. 检查电视设置菜单中是否存在 BFI 相关选项（见下方各品牌设置路径）
2. 如果找到 BFI 选项，将其开启至最强设置
3. 在电视上显示 60fps 白色测试图像
4. 使用示波器和光电二极管观察背光模式的变化
5. 判定标准：
   - **通过 (Yes)**: 开启 BFI 后，示波器波形出现明显的黑帧插入模式（周期性的亮度降为零或接近零的时段），证明电视确实在帧之间插入了黑帧
   - **失败 (No)**: 电视不具备此功能，或所谓的"BFI"选项实际上没有改变背光模式
6. 如果 BFI 支持，额外使用数码相机拍摄启用 BFI 后的运动模糊照片（与运动模糊测试相同的方法），记录 BFI 对运动清晰度的视觉改善

#### 子测试 3: 最低 BFI 频率测试

此测试确定电视能达到的最低闪烁频率。

**步骤**:

1. 在 **60Hz 输入信号**下测试
2. 将电视的 BFI 设置调至最低频率选项
3. 使用示波器测量实际的闪烁频率
4. 记录电视在 60Hz 输入下能达到的**最低闪烁频率**（以 Hz 为单位）
5. 评估闪烁频率是否与帧率匹配（理想情况：60Hz 输入 → 60Hz 闪烁）
6. 额外在 **120Hz 输入信号**下重复上述步骤
7. 检查电视能否在 120Hz 输入下匹配闪烁频率与帧率

**解读**: 较低的 BFI 频率意味着更长的黑帧时间，产生更强的闪烁效果。更强的闪烁可以更有效地减少眼追踪运动模糊，但也会导致更明显的亮度损失和潜在的视觉不适。

#### 子测试 4: 游戏模式最低闪烁

此测试在游戏模式下验证 BFI 功能的可用性。

**步骤**:

1. 将电视切换至**游戏模式** (Game Mode)
2. 输入 60fps 内容
3. 在游戏模式下开启电视的 BFI 功能（如果支持）
4. 使用示波器测量游戏模式下的最低闪烁频率
5. 记录结果（以 Hz 为单位）
6. **额外验证**:
   - 检查启用 BFI 后是否对输入延迟产生负面影响
   - 检查 BFI 是否能与可变刷新率 (VRR) 同时使用
   - 记录 BFI 与 VRR 的兼容性状态

**重要说明**: BFI 通常无法与 VRR 技术同时使用，因为 BFI 需要固定的帧时序来插入黑帧，而 VRR 的帧时序是动态变化的。

### 数据处理与公式

**PWM 频率计算**:
1. 从示波器波形中测量一个完整闪烁周期的时长 T（单位：ms）
2. PWM 频率 = 1000 / T (Hz)
3. 如果波形为平稳直线（无周期性变化），则 PWM 频率 = 0 Hz（DC 调光）

**BFI 频率判定**:
- 示波器波形的闪烁频率即为 BFI 的实际工作频率
- 该频率应与电视设置中声明的频率一致
- 如果实测频率与声明不符，以实测值为准

**无明确数值评分公式**: Rtings 未公开图像闪烁测试的数值评分公式。PWM 频率和 BFI 功能以"好值/差值"的方式呈现，而非精确的分数映射。

### 调光方式对比

| 调光方式 | 原理 | 优点 | 缺点 |
|---------|------|------|------|
| DC 调光 (无闪烁) | 调节电流控制亮度 | 无闪烁，护眼 | 低亮度可能有色偏或对比度下降 |
| PWM 调光 | 快速开关背光控制亮度 | 调光精确，亮度均匀 | 低频闪烁可能引起眼部不适和头痛 |
| 混合调光 | 高亮度 DC，低亮度切换至 PWM | 折中方案 | 切换点可能出现不自然的亮度跳变 |

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/motion/image-flicker#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/motion/image-flicker#how-to-get-the-best-results)

| 设备 | 型号/规格 | 用途 | 备注 |
|------|----------|------|------|
| 示波器 | Rigol DS1102E | 记录和分析背光亮度波形 | 双通道，100 MHz 带宽，1 GSa/s 采样率 |
| 光电二极管 | 通用型 | 将屏幕亮度变化转换为电信号 | 灵敏度需覆盖电视背光亮度范围 |
| 测试图案 | 白色全屏图像 | 提供稳定的亮度信号源 | 用于示波器测量 |
| 数码相机 | 运动模糊专用 | 拍摄有无 BFI 时的模糊对比照 | 用于运动模糊测试方法拍摄 |

## 测试资源

- **白色全屏图像**: 用于示波器测量时提供稳定的亮度信号
- **运动模糊测试图案**: 用于拍摄有无 BFI 时的模糊对比照（复用运动模糊测试的素材和方法）
- **60Hz 和 120Hz 测试信号**: 验证不同输入信号下的 BFI 频率匹配情况
- **Rtings 推荐设置文档**: 各电视型号的校准参数，确保测试从一致的基线开始

> **注意**: 图像闪烁测试使用示波器 (Rigol DS1102E) 配合光电二极管记录背光亮度波形。PWM 调光在示波器上表现为周期性的方波脉冲，DC 调光则表现为平稳的直线。BFI 功能通过在示波器波形中观察周期性的亮度降零时段来确认。测试图案为简单的白色全屏图像，不使用复杂的测试图片。

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_559))

![背光亮度波形](assets/product-examples/lg-c4-oled/g07-image-flicker/backlight-small.jpg)
*背光亮度波形：示波器记录的背光亮度随时间变化曲线，可识别 PWM 频率或 DC 调光*

![BFI 背光波形](assets/product-examples/lg-c4-oled/g07-image-flicker/bfi-small.jpg)
*BFI 黑帧插入效果：开启 BFI 后的背光波形，帧之间可见周期性的亮度降零时段*

![BFI + 背光组合](assets/product-examples/lg-c4-oled/g07-image-flicker/backlight-bfi-small.jpg)
*BFI 与背光调光的组合效果：同时展示背光亮度和 BFI 的综合波形*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_559))

![背光亮度波形](assets/product-examples/samsung-qn90f/g07-image-flicker/backlight-small.jpg)
*背光亮度波形：示波器记录的背光亮度随时间变化曲线，可识别 PWM 频率或 DC 调光*

![BFI 背光波形](assets/product-examples/samsung-qn90f/g07-image-flicker/bfi-small.jpg)
*BFI 黑帧插入效果：开启 BFI 后的背光波形，帧之间可见周期性的亮度降零时段*

![BFI + 背光组合](assets/product-examples/samsung-qn90f/g07-image-flicker/backlight-bfi-small.jpg)
*BFI 与背光调光的组合效果：同时展示背光亮度和 BFI 的综合波形*

## 评分标准

### 评分公式与权重

**注意**: Rtings 未公开图像闪烁各子测试的精确数值评分公式。以下为已公开的"好值"参考和权重信息。

#### PWM 调光频率

| PWM 频率 | 评级 | 说明 |
|----------|------|------|
| 0 Hz (无闪烁 / DC 调光) | 最佳 | 最理想的背光实现方式，完全无闪烁 |
| > 300 Hz | 优秀 | 远超人眼感知范围，闪烁不可见。60Hz 的整数倍（如 360 Hz、600 Hz、720 Hz）更佳 |
| 120 - 300 Hz | 一般 | 大多数人无法感知闪烁，但敏感人群可能注意到 |
| < 120 Hz | 较差 | 明显闪烁，可能导致眼部不适、头痛，尤其在暗室环境中 |

- **好值**: 0 Hz 或 > 300 Hz
- **额外加分**: 频率为 60Hz 的整数倍（如 120 Hz、180 Hz、240 Hz、360 Hz 等）表现更好，因为与常见视频帧率（24fps、30fps、60fps）的谐波匹配，减少了频闪串扰 (strobing crosstalk)

#### BFI 是否支持

| 结果 | 评级 | 说明 |
|------|------|------|
| Yes | 通过 | 电视具备为 60fps 内容引入黑帧的选项 |
| No | 失败 | 电视不具备此功能 |

- 这是简单的**通过/失败**判定，不涉及数值评分

#### 最低 BFI 频率 (60Hz 输入)

| 频率 | 评级 | 说明 |
|------|------|------|
| 60 Hz | 最佳 | 能完美匹配 60fps 源帧率，黑帧插入效果最自然 |
| 120 Hz | 良好 | 高于帧率，闪烁更不明显但 BFI 效果较弱 |
| < 60 Hz | 较差 | 低于帧率的闪烁会导致图像重复和严重闪烁 |

- **好值**: 60 Hz
- **可感知差异**: 20 Hz

#### 游戏模式最低闪烁频率

| 频率 | 评级 | 说明 |
|------|------|------|
| 60 Hz | 最佳 | 游戏模式下仍可使用最佳闪烁频率 |
| 120 Hz | 良好 | 可用但效果较弱 |
| 不支持 | 最差 | 游戏模式下无法使用 BFI |

- **好值**: 60 Hz
- **可感知差异**: 20 Hz
- **注意**: BFI 可能干扰输入延迟，且通常无法与 VRR 同时使用

### 可感知差异阈值

| 指标 | 可感知差异阈值 |
|------|-------------|
| PWM 频率 | 约 120 Hz 以下可被敏感人群感知 |
| BFI 频率变化 | 20 Hz（低于此差异难以察觉） |
| BFI 开/关 | 显著差异，运动模糊对比照片中清晰可见 |

### 评分参考范围

**在 Rtings 运动总分中的权重**:
- **无闪烁 (Flicker-Free)**: 权重 **11%**
- **黑帧插入 (BFI)**: 权重 **4%**
- 总计：图像闪烁测试在运动评分中占 **15%**

**注意**: Rtings 未公开 PWM 频率、BFI 支持度、最低 BFI 频率、游戏模式闪烁这四个子测试之间的权重分配。

## 关键指标

### BFI vs 背光扫描 vs 背光频闪 [↗](https://www.rtings.com/tv/tests/motion/image-flicker#black-frame-insertion-vs-backlight-scanning-vs-backlight-strobing)

| 技术 | 工作方式 | 优点 | 缺点 |
|------|---------|------|------|
| **黑帧插入 (BFI)** | 在每帧之间插入全黑帧 | 理论上清晰度最高 | BenQ 2006 年提出，实际采用较少 |
| **背光扫描 (Backlight Scanning)** | 模拟 CRT，从上到下依次关闭背光区域 | 接近 CRT 的运动清晰度 | 可能导致背光泄漏，可见扫描线 |
| **背光频闪 (Backlight Strobing)** | 整个背光同步频闪，匹配刷新率 | 实用性强，实现简单 | 可能有频闪、暗淡、图像重复等问题 |

Rtings 在测试台中统一使用"黑帧插入 (BFI)"作为总称，涵盖背光频闪/扫描的所有实现方式。当测评中提到"BFI"时，可能指以上任何一种技术。

### OLED 与 LCD 的闪烁差异

| 特性 | OLED | LCD (LED 背光) |
|------|------|----------------|
| 调光方式 | 通常 DC 调光（无闪烁） | PWM 或 DC，取决于型号和价位 |
| BFI 实现 | 像素级独立控制，逐像素完全关闭 | 通过背光频闪实现，整块区域同步 |
| 闪烁问题 | 更少的图像重复和闪烁伪影 | 可能有频闪串扰 (crosstalk) |
| 运动清晰度 | 像素响应更快，BFI 效果更佳 | 受限于背光响应速度和液晶分子翻转时间 |
| 亮度损失 | BFI 导致的亮度损失相对可控 | 背光频闪导致显著的亮度下降 |

### 各品牌 BFI 设置路径 [↗](https://www.rtings.com/tv/tests/motion/image-flicker#related-settings)

| 品牌 | 设置路径 |
|------|---------|
| Samsung | Picture settings → Expert Settings → Picture Clarity Settings → LED Clear Motion |
| LG | Picture settings → Picture Mode settings → Picture Options → TruMotion (User) → Motion Pro |
| Sony | Picture settings → Advanced Settings → Motion → Motionflow → 调整 Clearness 滑块 |
| Vizio | Picture settings → Motion Control → Clear Action |
| Hisense | Advanced Settings → Motion Clearness |
| TCL | Picture settings → LED Motion Clarity |

### 使用建议

- **最少运动模糊**: 选择最大闪烁设置（最低 BFI 频率），但接受亮度和舒适度损失
- **更流畅图像（更多模糊）**: 禁用 BFI 功能，保持连续显示
- **源帧率影响**: 较低帧率内容（如 24fps 电影）由于帧保持时间更长，可见运动模糊更多，BFI 的改善效果更明显
- **背光亮度交互**: 调整某些电视的背光级别会因 PWM 调光影响闪烁频率——降低背光产生更清晰图像（闪烁频率降低），增加背光产生更流畅运动（频率升高或切换至 DC 调光）
- **BFI 与 VRR 不兼容**: 启用 BFI 时通常无法同时使用可变刷新率，这对于游戏玩家是重要的取舍考虑
- **输入延迟影响**: BFI 可能增加输入延迟，游戏模式下需特别注意

## 相关测试

- **响应时间 (Response Time)**: 影响运动模糊的另一关键因素，与 PWM/BFI 共同决定运动清晰度
- **运动插帧 (Motion Interpolation)**: 与 BFI 不同的运动模糊减少方法，增加帧率而非插入黑帧
- **24p 颤抖 (Judder)**: 快响应时间的电视在播放 24p 电影时可能出现的抖动；注意部分 LG OLED 在 BFI 频率为 60Hz 时无法消除颤抖
- **卡顿 (Stutter)**: BFI 可以通过减少帧保持时间间接改善卡顿感知

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/motion/image-flicker#additional-information)

相关测试: [响应时间](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time) [↗](https://www.rtings.com/tv/tests/motion/image-flicker#conclusion)
`;export{n as default};
