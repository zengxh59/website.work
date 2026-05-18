const n=`# 可变刷新率 (Variable Refresh Rate / VRR)

> 来源: https://www.rtings.com/tv/tests/motion/variable-refresh-rate
> Wayback 归档: https://web.archive.org/web/2024/https://www.rtings.com/tv/tests/motion/variable-refresh-rate
> [Test Bench](https://www.rtings.com/tv/tests/changelogs/2-2): 2.2 (v1.8)
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

可变刷新率 (VRR) 测试评估电视自适应调整屏幕刷新率以匹配输入帧率的能力。VRR 可以消除画面撕裂 (screen tearing) 和卡顿 (stuttering)，在帧率不稳定的游戏中提供更流畅的体验。该测试检查电视支持的 VRR 格式、刷新率范围、LFC（低帧率补偿）支持以及 VRR 对画质功能（如局部调光）的影响。

**定义**: 电视自适应调整刷新率以匹配源设备帧率的能力
**适用场景**: 帧率不稳定的游戏（PC 游戏、开放世界游戏）；消除画面撕裂和卡顿

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#when-it-matters)

## 测试方法

### 前置条件

1. **电视预热**: 电视开机并显示内容至少 30 分钟
2. **固件更新**: 确保电视运行最新固件版本（VRR 支持常通过固件更新改进）
3. **测试设备准备**:
   - 配备 NVIDIA RTX GPU 的定制 PC（用于 G-SYNC Compatible 和 HDMI Forum VRR 测试）
   - 配备 AMD Radeon GPU 的定制 PC（用于 FreeSync 测试）
   - PlayStation 5（用于 HDMI Forum VRR 主机端验证）
   - Xbox Series X|S（用于 HDMI Forum VRR 和 FreeSync 主机端验证）
4. **连接线缆**: HDMI 2.1 认证线缆（48Gbps），确保 VRR 高带宽需求
5. **电视设置**: 启用游戏模式 (Game Mode)；在电视菜单中检查并启用 VRR 相关选项
6. **测试软件**: RTINGS 专用版 SmoothFrog 测试工具，用于精确控制帧率并检测 VRR 相关问题

### 详细测量步骤

#### 步骤 1: VRR 格式支持检测

1. 依次将 NVIDIA RTX GPU PC、AMD Radeon GPU PC、PS5、Xbox Series X 连接到电视
2. 对每个源设备，检查电视是否识别并报告 VRR 支持
3. 确认支持的 VRR 格式：
   - **[HDMI Forum VRR](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#our-tests)**: HDMI 2.1 标准中定义的通用 VRR 协议，适用于所有 HDMI 2.1 设备
   - **AMD [FreeSync](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#our-tests)**: AMD 开发的 VRR 标准，Xbox Series X/S 也支持
   - **NVIDIA [G-SYNC](https://www.rtings.com/tv/tests/motion/g-sync-compatible) Compatible**: NVIDIA 的 VRR 兼容认证，通过 HDMI 2.1 连接 NVIDIA GPU 使用
4. 记录是否需要在电视菜单中手动启用 VRR（部分电视需要单独开启 FreeSync 或 Adaptive Sync 开关）
5. 检查不同 HDMI 端口的 VRR 支持情况（部分电视仅特定端口支持 VRR）

#### 步骤 2: 确定原生刷新率

1. 通过 PC 输出固定刷新率信号
2. 确认电视的原生刷新率（60Hz 或 120Hz）
3. 原生刷新率决定 VRR 的理论上限

#### 步骤 3: VRR 最大刷新率测试 (VRR Max)

1. 在 NVIDIA RTX GPU PC 上启动 RTINGS 专用版 SmoothFrog
2. **关闭 V-SYNC**，确保显示器调整刷新率以匹配源内容帧率
3. 设置测试分辨率为 **4K (3840x2160)**
4. 从 **55fps** 开始，逐步 **提高** 帧率
5. 在每个帧率级别停留，观察：
   - 画面是否平滑（无撕裂、无卡顿）
   - 刷新率是否跟随帧率变化
   - 是否出现闪烁、黑屏、或其他伪影
6. 逐步提高帧率直到出现以下任一情况：
   - 画面出现撕裂 (tearing) 或其他伪影
   - 帧率达到电视的最大刷新率
7. 记录 VRR 仍能正常工作的 **最高帧率** 即为 VRR Max
8. **重复步骤 3-7，将分辨率切换为 1080p (1920x1080)**，记录 1080p 下的 VRR Max
9. 良好值: VRR Max 匹配电视的最大刷新率（如 120Hz 电视的 VRR Max 应为 120Hz）

#### 步骤 4: VRR 最小刷新率测试 (VRR Min)

1. 保持 SmoothFrog 运行，V-SYNC 关闭
2. 设置测试分辨率为 **4K (3840x2160)**
3. 从电视的原生刷新率开始，**逐步降低** 帧率
4. 在每个帧率级别停留，观察：
   - 画面是否保持平滑
   - VRR 是否仍然有效
   - 是否出现撕裂或卡顿
5. 逐步降低帧率直到 VRR 失效（出现撕裂、卡顿或刷新率不再跟随帧率）
6. 记录 VRR 仍能正常工作的 **最低帧率** 即为 VRR Min
7. **重复步骤 1-6，将分辨率切换为 1080p**
8. 最低值报告规则: 若 VRR Min 低于 20Hz，则报告为 "<20Hz"
9. 良好值: VRR Min <= 30Hz

#### 步骤 5: LFC (Low Framerate Compensation) 测试

1. 在确定 VRR Min 后，继续降低帧率
2. 观察: 当帧率低于 VRR Min 时，电视是否自动 **倍增** 刷新率
3. **LFC 工作原理**: 若 VRR Min 为 48Hz，当帧率降至 24fps 时，LFC 将刷新率倍增至 48Hz（2x），使 24fps 仍能被 VRR 覆盖
4. 检测 LFC 是否能将有效 VRR 范围扩展到 **低于 40fps**
5. 记录: 支持 LFC / 不支持 LFC
6. 部分电视的 LFC 仅在特定条件下生效（如仅在使用 HDMI Forum VRR 时）

#### 步骤 6: G-SYNC 兼容性评级

1. 使用 NVIDIA RTX GPU PC 连接电视
2. 在 NVIDIA App 中启用 "G-SYNC Compatible"（Monitor Technology 设置）
3. 运行 SmoothFrog 全流程测试（步骤 3-5 的完整范围检测）
4. 进行实际游戏测试:
   - 使用多款游戏进行验证
   - 重点关注低帧率场景中的撕裂现象
   - 检查从预渲染过场动画切换到游戏内场景时的帧率突变
5. 根据测试结果给出评级:
   - **"Yes, NVIDIA Certified"**: 电视已获得 NVIDIA 的 G-SYNC Compatible 官方认证
   - **"Yes"**: 确认支持 Adaptive Sync 且无重大问题，但未获 NVIDIA 官方认证
   - **"No"**: 不支持 Adaptive Sync，或启用后显示异常

#### 步骤 7: VRR + 局部调光 (VRR + Local Dimming) 测试（TB 1.9+ 新增）

1. 启用电视的 VRR 功能
2. 启用电视的局部调光 (Local Dimming) 功能
3. 检查两者是否可以 **同时激活**
4. 部分电视在 VRR 开启时会自动禁用或降低局部调光效果
5. 使用 HDR 测试内容验证 VRR + Local Dimming 的组合表现
6. 记录: 两者可同时使用 / VRR 导致局部调光被禁用或减弱

#### 步骤 8: 主机端 VRR 验证

1. **PlayStation 5**:
   - 仅支持 HDMI Forum VRR
   - 使用支持 VRR 的游戏验证（如《蜘蛛侠 2》《瑞奇与叮当》）
   - 确认 PS5 系统设置中 VRR 选项可用
2. **Xbox Series X|S**:
   - 同时支持 HDMI Forum VRR 和 FreeSync
   - 在 Xbox 设置中启用 VRR
   - 使用内置 VRR 测试或支持 VRR 的游戏验证

### 数据处理与公式

- **VRR 范围**: 报告为 "[VRR Min] - [VRR Max]" Hz，分别在 4K 和 1080p 下
- **VRR Max 评估**: 是否匹配电视标称最大刷新率
- **LFC 检测**: 二值结果（支持/不支持），加上最低可补偿帧率
- **G-SYNC 评级**: 三级评级（Yes NVIDIA Certified / Yes / No）
- **VRR + Local Dimming**: 二值结果（可同时使用 / 不可同时使用）
- **VRR Min < 20Hz**: 报告为 "<20Hz" 而非具体数值

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#how-to-get-the-best-results)

| 设备 | 用途 |
|------|------|
| 定制 PC (NVIDIA RTX GPU) | G-SYNC Compatible 和 HDMI Forum VRR 测试 |
| 定制 PC (AMD Radeon GPU) | FreeSync 测试 |
| PlayStation 5 | HDMI Forum VRR 主机端验证 |
| Xbox Series X|S | HDMI Forum VRR + FreeSync 主机端验证 |
| RTINGS 专用版 SmoothFrog | 精确控制帧率，检测撕裂、卡顿、闪烁及伪影 |
| HDMI 2.1 认证线缆 (48Gbps) | 确保 VRR 高带宽信号传输 |

## 测试资源

- **SmoothFrog 测试工具**: RTINGS 定制版本，用于精确控制帧率并检测 VRR 相关问题
- **NVIDIA App / Control Panel**: 用于配置 G-SYNC Compatible 模式和 Monitor Technology 设置
- **测试游戏**: 多种具有不同帧率特征的游戏，用于实际验证
- **HDMI 2.1 线缆**: 确保 4K@120Hz + VRR 信号传输

![G-SYNC 兼容性测试](assets/test-patterns/gsync-compatible-test.jpg)
*G-SYNC Compatible 模式测试场景：验证 VRR 功能在不同帧率下的稳定性*

![可变刷新率测试页面示意](assets/methodology-diagrams/vrr-hero.png)
*可变刷新率 (VRR) 测试页面示意图：展示 VRR 范围、LFC 支持和多平台兼容性测试结果*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| 4k VRR Maximum | **75%** | 匹配最大刷新率 | 10 Hz |
| 1080p VRR Maximum | **25%** | 匹配最大刷新率 | 10 Hz |

> 4K 分辨率 VRR 范围占评分的 3/4，1080p 占 1/4。

### 可感知差异阈值

- **VRR Max**: **10Hz** 差异可感知（如 110Hz vs 120Hz）

### 评分参考范围

#### VRR 综合支持

| VRR 支持情况 | 评分 | 说明 |
|-------------|------|------|
| 完整 VRR（全格式）+ LFC + 无画质损失 | 10.0 | 顶级，如 LG OLED（NVIDIA Certified） |
| 良好 VRR（48-120Hz）+ LFC | 8.0-9.0 | 优秀的游戏体验 |
| 基础 VRR（48-120Hz），无 LFC | 6.0-7.9 | 基本消除撕裂 |
| 有限 VRR（较窄范围） | 4.0-5.9 | 仅部分帧率有效 |
| 仅基本 VRR 支持 | 2.0-3.9 | 效果有限 |
| 不支持 VRR | 0.0 | 无可变刷新率功能 |

#### VRR 最大刷新率 (VRR Max)

| VRR Max | 评价 |
|---------|------|
| 匹配最大刷新率（如 120Hz） | 良好 — VRR 可在全范围工作 |
| 低于最大刷新率 | 受限 — 高帧率时 VRR 无效 |

#### VRR 最小刷新率 (VRR Min)

| VRR Min | 评价 |
|---------|------|
| <= 30Hz | 优秀 — 配合 LFC 可覆盖极低帧率 |
| 40-48Hz | 良好 — 覆盖大多数游戏场景 |
| 60Hz | 基础 — 仅能在 60-120Hz 范围内工作 |

## 关键指标

### VRR 三大标准对比

| 特性 | HDMI Forum VRR | AMD FreeSync | NVIDIA G-SYNC Compatible |
|------|---------------|-------------|--------------------------|
| 标准来源 | HDMI Forum | AMD | NVIDIA |
| 兼容性 | 通用（HDMI 2.1） | AMD GPU / Xbox | NVIDIA GPU |
| 典型范围 | 48-120Hz | 48-120Hz | 48-120Hz |
| LFC 支持 | 可选 | 可选 | 支持 |
| 主机支持 | PS5 / Xbox Series X | Xbox Series X | PC Only |
| 认证 | 无需 | AMD FreeSync 认证 | NVIDIA Certified 可选 |

### 游戏主机 VRR 支持

| 主机 | VRR 格式 | 支持情况 |
|------|---------|---------|
| Xbox Series X / Series S | HDMI VRR + FreeSync | 完整支持 |
| PlayStation 5 | HDMI Forum VRR | 2023 年系统更新后支持 |
| Nintendo Switch | 无 | 不支持 |
| PC (NVIDIA GPU) | HDMI VRR / G-SYNC Compatible | 完整支持 |
| PC (AMD GPU) | HDMI VRR / FreeSync | 完整支持 |

### VRR 刷新率范围

- **理想范围**: 20-120Hz（带 LFC，覆盖几乎所有帧率）
- **常见范围**: 48-120Hz（大多数 VRR 电视的标准范围）
- **最低范围**: 60-120Hz（仅基本 VRR 功能）

### LFC (Low Framerate Compensation)

LFC 是 VRR 的关键补充功能：
- 当游戏帧率低于 VRR 最低范围时，自动将刷新率倍增
- 例如: VRR 最低 48Hz + LFC -> 24fps 可在 48Hz 显示，30fps 可在 60Hz 显示
- 有效扩展 VRR 的低帧率覆盖范围
- 对开放世界游戏等帧率波动大的场景尤为重要

### VRR 对画质的影响

部分电视在 VRR 开启时会有以下限制：

| 画质功能 | VRR 开启时可能影响 | 说明 |
|---------|-------------------|------|
| 局部调光 (Local Dimming) | 可能被禁用或减弱 | 对比度下降 |
| 色彩空间 | 可能受限 | HDR 效果减弱 |
| 图像处理 | 某些功能不可用 | 降噪、运动插帧等 |
| Dolby Vision | 可能不兼容 | VRR + DV 冲突 |

### Test Bench 版本历史

| 测试项 | 1.6 | 1.7 | 1.8 | 1.9 | 1.10 | 1.11 | 2.0 |
|--------|-----|-----|-----|-----|------|------|-----|
| VRR 支持检测 | N | Y | Y | Y | Y | Y | Y |
| VRR Max/Min 范围 | N | Y | Y | Y | Y | Y | Y |
| FreeSync 测试 | N | Y | Y | Y | Y | Y | Y |
| G-SYNC Compatible 测试 | N | Y | Y | Y | Y | Y | Y |
| HDMI Forum VRR 测试 | N | N | Y | Y | Y | Y | Y |
| LFC 测试 | N | N | Y | Y | Y | Y | Y |
| VRR + Local Dimming | N | N | N | Y | Y | Y | Y |
| VRR Supported Connectors | N | Y | Y | N | N | N | N |

> 注意: TB 1.9 新增 VRR + Local Dimming 测试，移除了 VRR Supported Connectors 测试

### 注意事项

- VRR 需要源设备（PC/主机）和电视同时支持
- HDMI 2.1 是实现完整 VRR 功能的前提
- 部分 120Hz 电视的 VRR 范围有限（并非所有 120Hz 电视都支持 48-120Hz VRR）
- VRR 开启时的画质限制因品牌和型号而异
- PS5 的 VRR 支持较晚（2023 年更新），且仅支持 HDMI Forum VRR
- FreeSync 和 G-SYNC Compatible 可以在同一电视上共存
- LFC 不是所有 VRR 电视都支持，但非常有价值
- VRR 对 PC 游戏最有价值，因为 PC 游戏帧率波动最大

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#additional-information)

相关测试: [G-SYNC 兼容性](https://www.rtings.com/tv/tests/motion/g-sync-compatible) [↗](https://www.rtings.com/tv/tests/motion/variable-refresh-rate#conclusion)
`;export{n as default};
