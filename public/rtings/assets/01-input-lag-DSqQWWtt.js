const n=`# 输入延迟 (Input Lag)

> 来源: https://www.rtings.com/tv/tests/inputs/input-lag
> Wayback 归档: https://web.archive.org/web/2025/https://www.rtings.com/tv/tests/inputs/input-lag
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

输入延迟 (Input Lag) 是指从信号源发送画面信号到电视屏幕上的像素实际开始改变颜色之间的时间差。该指标是游戏体验的核心参数——延迟越低，操控响应越跟手。对于基于反应的视频游戏（如格斗游戏、FPS 竞技游戏）最为重要。

**定义**: 输入信号发出到屏幕像素开始变色之间的时间差（不包含响应时间）
**适用场景**: 视频游戏；将电视用作 PC 显示器

### 输入延迟的三个组成阶段 [↗](https://www.rtings.com/tv/tests/inputs/input-lag#why-there-s-input-lag-on-tvs)

1. **图像采集 (Acquisition)**: 数字 HDMI 传输几乎瞬时完成，在现代电视上几乎不构成延迟。模拟连接时代曾是主要延迟源。
2. **视频处理 (Video Processing)**: 包括颜色/亮度调整、运动插帧（最显著的延迟增加因素）、分辨率缩放、VRR 技术处理等。仅高负载处理（如运动插帧）会显著增加延迟。
3. **图像显示 (Displaying)**: 取决于面板技术和硬件，用户无法控制此阶段。不同于响应时间 (Response Time)，响应时间影响运动表现而非延迟。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/inputs/input-lag#when-it-matters)

## 测试方法

### 前置条件

1. **电视预热**: 电视开机并显示内容至少 **30 分钟**，确保面板和电子元件达到稳定工作温度
2. **测试环境**: 标准室内光照环境，无需暗室
3. **信号源连接**: 通过 HDMI 线缆将测试 PC 连接到电视
4. **电视设置**: 根据测试子项，启用或禁用[游戏模式](https://www.rtings.com/tv/tests/inputs/input-lag#other-notes-and-related-settings) (Game Mode)
5. **HDMI 线缆**: 对于 120Hz 及以上测试，使用 HDMI 2.1 认证线缆（48Gbps 带宽）
6. **显卡准备**: 120Hz 及以上测试使用配备 NVIDIA RTX 3070 GPU 的 HDMI 2.1 PC

### 详细测量步骤

#### 步骤 1: 工具安装与校准

1. 将 Rtings 自主研发的专用光电二极管 (photodiode) 测量工具放置在 **屏幕正中心位置**
2. 通过 USB 将测量工具连接到测试 PC
3. 启动 Rtings 配套软件，确认工具与 PC 通信正常
4. 校准工具灵敏度，确保能可靠检测到像素颜色变化的起始时刻

#### 步骤 2: 电视配置

1. 根据当前测试子项，将电视切换到对应输入模式：
   - 游戏模式测试：启用 Game Mode
   - 非游戏模式测试：禁用 Game Mode
   - 运动插帧测试：关闭 Game Mode，启用最高级别运动插帧
2. 通过测试 PC 将输出分辨率和刷新率设置为对应测试参数
3. 确认电视正确识别并显示指定分辨率和刷新率

#### 步骤 3: 延迟测量

1. 测试软件在屏幕中心（光电二极管所在位置）闪烁一个白色方块
2. 同时向信号源发送时间戳标记（信号发出的时刻 T₀）
3. 光电二极管持续监测屏幕中心区域的亮度变化
4. 当检测到像素颜色 **开始变化** 的瞬间（时刻 T₁），立即停止计时
5. **关键**: 计时在像素开始变色时停止，**不包含响应时间**（不等待过渡完成）
6. 每次测量记录一个数据点：T₁ - T₀ = 输入延迟值

#### 步骤 4: 多次重复测量

1. 对每个测试子项重复步骤 3，采集 **多个数据点**
2. 软件自动计算所有有效数据点的 **平均值** 作为最终报告值
3. 自动排除统计异常值（偏离均值过远的数据点）

#### 步骤 5: 遍历所有测试子项

对以下 11 个测试子项逐一重复步骤 2-4：

| 序号 | 测试子项 | 分辨率 | 刷新率 | 画面模式 | 说明 |
|------|---------|--------|--------|---------|------|
| 1 | 1080p@60Hz | 1920x1080 | 60Hz | 游戏模式 | 面向旧代主机（PS4/Xbox One）及 60Hz PC 游戏 |
| 2 | 1080p@60Hz 游戏模式关闭 | 1920x1080 | 60Hz | 非游戏模式 | 显示非游戏模式的延迟差异 |
| 3 | 1080p@120Hz | 1920x1080 | 120Hz | 游戏模式 | 低分辨率高刷新率主机/PC 游戏 |
| 4 | 1080p@144Hz | 1920x1080 | 144Hz | 游戏模式 | 高刷新率 PC 游戏 |
| 5 | 4K@60Hz | 3840x2160 | 60Hz | 游戏模式 | 最重要指标（PS5 Pro/Xbox Series X 多数游戏） |
| 6 | 4K@60Hz@4:4:4 | 3840x2160 | 60Hz | 游戏模式 | 全色度采样，面向 PC 显示器用途 |
| 7 | 4K@60Hz 游戏模式关闭 | 3840x2160 | 60Hz | 非游戏模式 | 4K 分辨率下非游戏模式延迟 |
| 8 | 4K@60Hz 开启运动插帧 | 3840x2160 | 60Hz | 运动插帧最高 | 最坏场景测试 |
| 9 | 4K@120Hz | 3840x2160 | 120Hz | 游戏模式 | 需要 HDMI 2.1 源设备 |
| 10 | 4K@144Hz | 3840x2160 | 144Hz | 游戏模式 | 高端 PC 游戏场景 |
| 11 | 8K@60Hz | 7680x4320 | 60Hz | 游戏模式 | 仅对 8K 电视有效 |

### 测量原理与限制

由于光电二极管放置在屏幕中心，且电视从上到下逐行扫描显示：

- **120Hz 电视**: 每帧耗时 8.33ms（1/120s），中心位置为半程 = **4.17ms 理论最低可测延迟**
- **60Hz 电视**: 每帧耗时 16.67ms（1/60s），中心位置为半程 = **8.33ms 理论最低可测延迟**
- **示例**: 若在 120Hz 电视上测得 5.17ms 延迟，实际额外处理延迟仅为 1ms（5.17 - 4.17 = 1.0ms）

### 数据处理与公式

- **最终报告值** = 所有有效数据点的算术平均值
- **异常值排除规则**: 超出平均值 ±2 标准差的数据点视为异常值并剔除
- **最小可测量单位**: 取决于测试工具的采样率和刷新率
- **精度**: 工具可检测亚毫秒级的时间差

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/inputs/input-lag#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/inputs/input-lag#how-input-lag-is-measured)

| 设备 | 型号/描述 | 用途 |
|------|----------|------|
| 自定义光电二极管工具 | Rtings 自主研发专用输入延迟测量设备 | 放置在屏幕中心，记录信号发出到像素开始变色的时间 |
| Rtings 配套软件 | 自主开发测试软件 | 控制测量过程、采集数据、计算平均值 |
| HDMI 2.1 PC (NVIDIA RTX 3070) | 定制 PC | 用于 4K@120Hz 及 HDMI 2.1 相关测试 |
| 测试 PC | 标准配置 PC | 用于 60Hz 相关测试 |
| HDMI 2.1 线缆 | 48Gbps 认证线缆 | 确保 4K@120Hz 带宽需求 |
| PS5 / Xbox Series X|S | 游戏主机 | 游戏主机验证（辅助参考） |

## 测试资源

- **Rtings 输入延迟测试工具**: 自主研发的光电二极管 + USB 连接 + 配套软件
- **HDMI 2.1 PC**: 配备 NVIDIA RTX 3070，支持 4K@120Hz 及 8K@60Hz 输出
- **标准 HDMI 线缆**: 用于 60Hz 测试
- **HDMI 2.1 认证线缆 (48Gbps)**: 用于 120Hz 及以上测试

![输入延迟测试原理](assets/test-patterns/input-lag-tool.png)
*输入延迟测试原理：从输入信号发送到屏幕像素响应之间的时间差*

![输入延迟测试页面示意](assets/methodology-diagrams/input-lag-hero.png)
*输入延迟测试页面示意图：展示不同分辨率和刷新率下的输入延迟测量结果*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| 4k @ Max Refresh Rate | **40%** | < 10 ms | 15 ms |
| 4k @ 120Hz | **20%** | < 10 ms | 15 ms |
| 1080p @ Max Refresh Rate | **10%** | < 10 ms | 15 ms |
| 4k @ 60Hz | **10%** | < 15 ms | 15 ms |
| 4k @ 60Hz @ 4:4:4 | **10%** | < 15 ms | 15 ms |
| 1080p @ 60Hz | **5%** | < 15 ms | 15 ms |
| 1080p @ 120Hz | **5%** | < 10 ms | 15 ms |

> 4K 分辨率合计占 **80%** 权重，最高刷新率测试合计占 **50%**。

### 可感知差异阈值 [↗](https://www.rtings.com/tv/tests/inputs/input-lag#when-do-we-start-to-notice-a-delay)

- **所有子测试的可感知差异 (Noticeable Difference)**: **15ms**
- 即同一测试子项下，两台电视的输入延迟差异小于 15ms 时，大多数用户难以感知差异

### 评分参考范围

#### 4K@60Hz 游戏模式

| 输入延迟 | 评分 | 说明 |
|----------|------|------|
| < 5ms | 10.0 | 顶级 OLED / 高端 LCD |
| 5-10ms | 9.0 | 优秀 |
| 10-15ms | 8.0 | 良好 |
| 15-20ms | 7.0 | 不错 |
| 20-30ms | 5.0-6.0 | 一般 |
| > 50ms | 1.0-3.0 | 明显卡顿 |

#### 4K@120Hz 游戏模式

| 输入延迟 | 评分 | 说明 |
|----------|------|------|
| < 4ms | 10.0 | 接近理论极限 |
| 4-6ms | 9.0 | 优秀 |
| 6-10ms | 8.0 | 良好 |
| 10-15ms | 6.0-7.0 | 一般 |
| > 15ms | 4.0-5.0 | 较差 |

### 不同使用场景的延迟需求

| 场景 | 可接受延迟 | 说明 |
|------|-----------|------|
| 竞技 FPS/格斗游戏 | < 10ms | 需要极致响应 |
| 动作游戏 | < 15ms | 良好体验 |
| RPG/冒险游戏 | < 30ms | 可接受 |
| 休闲游戏 | < 50ms | 基本无感 |
| 影视/流媒体 | 不敏感 | 延迟不影响观看 |

## 关键指标

### Test Bench 版本历史

| 测试格式 | 1.6 | 1.7 | 1.8 | 1.9 | 1.10 | 1.11 | 2.0 |
|----------|-----|-----|-----|-----|------|------|-----|
| 1080p@60Hz, 120Hz | Y | Y | Y | Y | Y | Y | Y |
| 1080p@144Hz | N | Y | Y | Y | Y | Y | N |
| 1080p@Max Refresh Rate | N | N | N | N | N | N | Y |
| 1440p@60Hz, 120Hz | Y | Y | Y | Y | Y | Y | N |
| 1440p@144Hz | N | Y | Y | Y | Y | Y | N |
| 4K@60Hz, 120Hz | Y | Y | Y | Y | Y | Y | Y |
| 4K@144Hz | N | Y | Y | Y | Y | Y | N |
| 4K@Max Refresh Rate | N | N | N | N | N | N | Y |

### 版本可比性说明

- **v1.6 起**: 评分可直接比较
- **v1.6 之前**: 仅原始测量值可比较
- **TB 2.0 变更**: 移除了 1440p 和固定 144Hz 测试子项；新增了最大刷新率测试（1080p@Max / 4K@Max）

### 游戏模式的影响

| 模式 | 典型延迟 | 说明 |
|------|---------|------|
| 游戏模式开启 | 5-15ms | 跳过大部分图像处理管线 |
| 游戏模式关闭 | 50-150ms | 完整图像处理管线 |
| PC 模式 | 5-20ms | 通常接近游戏模式 |

### HDMI 2.1 游戏特性

- **4K@120Hz**: 需要 HDMI 2.1 带宽（48Gbps）
- **[VRR](https://www.rtings.com/tv/tests/motion/variable-refresh-rate) (Variable Refresh Rate)**: 自适应刷新率技术
- **ALLM (Auto Low Latency Mode)**: 检测游戏信号自动切换低延迟模式
- **eARC**: 增强音频回传通道

### 注意事项 [↗](https://www.rtings.com/tv/tests/inputs/input-lag#other-notes-and-related-settings)

- 输入延迟不等于响应时间 (Response Time)——两者是完全独立的指标
- 游戏模式可能会降低画质以换取更低延迟
- 部分电视在 VRR 开启时可能禁用局部调光 (Local Dimming) 等画质功能
- ALLM 需要游戏设备和电视同时支持
- 整体系统延迟 = 输入设备（键盘/手柄）+ 主机/PC 处理 + 电视输入延迟
- 三星 (Samsung) 是少数在游戏模式下仍支持运动插帧的品牌
- 部分电视用作 PC 显示器时需切换到 PC 模式才能获得低延迟
- 蓝牙外设（鼠标/键盘）会额外增加延迟

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/inputs/input-lag#additional-information)

相关测试: [响应时间](https://www.rtings.com/tv/tests/motion/motion-blur-and-response-time) [↗](https://www.rtings.com/tv/tests/inputs/input-lag#conclusion)
`;export{n as default};
