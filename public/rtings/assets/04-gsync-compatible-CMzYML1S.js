const n=`# G-SYNC 兼容性 (G-SYNC Compatible)

> 来源: https://www.rtings.com/tv/tests/motion/g-sync-compatible
> Test Bench: [2.2](https://www.rtings.com/tv/tests/changelogs/2-2) (v1.8)
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

G-SYNC 兼容性测试专门评估电视与 NVIDIA G-SYNC 生态系统的兼容性。[VRR](https://www.rtings.com/tv/tests/motion/variable-refresh-rate) 技术通过减少画面撕裂来提升游戏体验——画面撕裂是一种视觉伪影，当游戏帧率与显示器刷新率不匹配时就会出现。

该测试检查电视在 NVIDIA GPU 环境下使用 Adaptive Sync (G-SYNC Compatible) 时的完整功能表现，包括是否存在过度模糊、屏幕闪烁、画面撕裂等问题，并确认实际可用的可变刷新率范围。

**定义**: 电视在 NVIDIA GPU 环境下通过 HDMI Forum VRR 或 FreeSync 实现 G-SYNC Compatible 的能力
**适用场景**: 使用 NVIDIA GPU 连接电视进行游戏

### 历史背景

- **2018年**: Samsung 成为首个在高端 QLED 电视上提供 [FreeSync](https://www.rtings.com/tv/tests/motion/variable-refresh-rate) VRR 支持的电视厂商
- 最初仅支持 AMD 显卡和少数主机（如 Xbox One X）
- **HDMI 2.1** 引入了对 VESA Adaptive Sync 标准的支持（即 HDMI Forum VRR）
- **2019年10月**: NVIDIA 添加了对 HDMI Forum VRR 的支持
- 如今几乎所有电视型号都支持该功能（部分入门型号除外）

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/motion/g-sync-compatible#when-it-matters)

## 测试方法

### 前置条件

1. **测试 PC**: 配备 NVIDIA RTX 系列 GPU 的定制 PC
   - **最低要求**: GTX 16 系列显卡（电视通过 HDMI 使用 G-SYNC Compatible 需要 GTX 16 系列或更高，不同于显示器支持 GTX 10 系列）
   - **推荐配置**: RTX 30 系列或更高
2. **连接方式**: HDMI 2.1 线缆连接 PC 到电视
3. **电视设置**:
   - 在电视菜单中启用 FreeSync 或 Adaptive Sync（新型号通常有独立开关，必须手动开启）
   - 启用游戏模式 (Game Mode)
4. **PC 端设置**:
   - 安装最新版本 NVIDIA 驱动
   - 在 NVIDIA App 中配置 G-SYNC Compatible（详见下文"启用方法"）
5. **测试软件**: RTINGS 专用版 SmoothFrog
6. **测试游戏**: 多款具有不同帧率特征的游戏用于实际验证

### 详细测量步骤

#### 步骤 1: 禁用 V-SYNC

1. 在 NVIDIA App 或 Control Panel 的全局设置中，将 "Vertical Sync" 设为 **Off**
2. 确认 V-SYNC 已完全禁用——这是让显示器自行调整刷新率以匹配源内容帧率的前提

#### 步骤 2: 启用 G-SYNC

**方式一: NVIDIA App（推荐）**
1. 打开 NVIDIA App
2. 进入 System -> Displays 菜单
3. 在 "Monitor Technology" 下拉菜单中选择 **"G-SYNC Compatible"**
4. 启用 G-SYNC（选择全屏模式 或 全屏+窗口模式）

**方式二: NVIDIA Control Panel（旧版）**
1. 打开 NVIDIA Control Panel
2. 在左侧菜单 "Manage 3D Settings" 中，将 "Monitor Technology" 设为 **"G-SYNC Compatible"**
3. 在左侧菜单 "Display" -> "Set up G-SYNC" 中启用 G-SYNC
4. 选择适用模式（全屏 或 全屏+窗口）

#### 步骤 3: 确定 VRR 范围下限

1. 启动 RTINGS 专用版 SmoothFrog
2. 设置分辨率为电视 **原生分辨率**（如 4K）
3. 设置刷新率为电视 **原生刷新率**（如 120Hz）
4. 从原生刷新率的帧率开始，**逐步降低** 帧率
5. 在每个帧率级别观察:
   - 画面是否平滑（无撕裂、无卡顿）
   - 刷新率是否跟随帧率变化
   - 是否出现闪烁、短暂黑屏、过度模糊
6. 持续降低帧率直到出现以下任一问题:
   - **画面撕裂 (tearing)**: 帧率与刷新率不同步
   - **卡顿 (stuttering)**: 帧显示不均匀
   - **屏幕闪烁 (flickering)**: 亮度不稳定
   - **黑屏 (black screen)**: 短暂失去信号
7. 记录 VRR 正常工作的 **最低帧率** = VRR Min

#### 步骤 4: 确定 VRR 范围上限

1. 恢复到原生帧率
2. **逐步提高** 帧率
3. 在每个帧率级别观察是否出现撕裂或其他伪影
4. 持续提高帧率直到:
   - 出现画面撕裂或其他伪影
   - 达到电视的最大刷新率
5. 记录 VRR 正常工作的 **最高帧率** = VRR Max

#### 步骤 5: 确定 VRR 范围

1. 综合 VRR Min 和 VRR Max，确定电视的 G-SYNC Compatible VRR 范围
2. 范围表示为 "[VRR Min] - [VRR Max]" Hz

#### 步骤 6: 重复测试

1. 将 **步骤 3-5 重复至少 2 次**，确认结果的可靠性和一致性
2. 若多次测试结果不一致，报告最差情况

#### 步骤 7: 多分辨率测试

1. 在 **4K (3840x2160)** 分辨率下完成步骤 3-6
2. 切换到 **1080p (1920x1080)** 分辨率，重新执行步骤 3-6
3. 比较两个分辨率下的 VRR 范围:
   - 部分电视在低分辨率下提供更宽的 VRR 范围
   - 不支持 HDMI 2.1 的旧款电视通常在 4K 下限制为 60Hz
4. 分别记录两个分辨率下的 VRR 范围

#### 步骤 8: 实际游戏测试

1. 选择多款具有不同帧率特征的游戏进行实际测试
2. 重点关注以下场景:
   - **低帧率场景**: VRR 在低帧率下的稳定性
   - **帧率突变场景**: 从预渲染过场动画切换到游戏引擎时的撕裂
   - **快速刷新率变化**: 某些电视在刷新率快速变化时出现短暂撕裂
3. 记录游戏中观察到的所有异常现象

### 数据处理与公式

- **VRR 范围**: 报告为 "[VRR Min] - [VRR Max]" Hz，分别在 4K 和 1080p 下
- **G-SYNC 评级**: 三级评级（见评分标准）
- **游戏测试结果**: 定性描述（有无撕裂、闪烁、过度模糊等现象）
- **大多数电视在刷新率快速变化时仍会出现一定程度的短暂撕裂**——这是当前电视 G-SYNC 实现的常见限制

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/motion/g-sync-compatible#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/motion/g-sync-compatible#how-to-get-the-best-results)

| 设备 | 用途 |
|------|------|
| 定制 PC（搭载 NVIDIA RTX 系列 GPU） | 测试主机，运行 SmoothFrog 和游戏 |
| RTINGS 专用版 SmoothFrog | 精确控制帧率并检测撕裂、卡顿、屏幕闪烁及其他伪影 |
| HDMI 2.1 线缆 (48Gbps) | 确保 4K@120Hz + VRR 信号传输 |
| 多款测试游戏 | 验证实际游戏场景下的 G-SYNC 表现 |

## 测试资源

- **SmoothFrog 测试工具**: RTINGS 定制版本，用于精确控制帧率并检测 VRR 相关问题
- **NVIDIA App**: 用于配置 G-SYNC Compatible 模式（Monitor Technology 设置）
- **NVIDIA Control Panel**: 旧版配置界面（功能相同）
- **测试游戏**: 多种具有不同帧率特征的游戏

![G-SYNC 兼容性测试](assets/test-patterns/gsync-compatible-test.jpg)
*G-SYNC Compatible 测试：验证在可变帧率下是否出现撕裂 (tearing) 或闪烁*

![G-SYNC Compatible 测试页面示意](assets/methodology-diagrams/gsync-hero.png)
*G-SYNC Compatible 测试页面示意图：展示 VRR 范围、NVIDIA 认证状态和兼容性评级*

## 评分标准

### 评分公式与权重

G-SYNC Compatible 不使用数值评分，而是采用三级评级。

### 可感知差异阈值

- VRR 范围差异: **10Hz** 差异可感知
- 画面撕裂: 任何可见撕裂均为可感知差异

### 评分参考范围

#### 结果评级（非数值评分）

| 评级 | 含义 | 判定标准 |
|------|------|---------|
| **Yes, NVIDIA Certified** | 通过 NVIDIA 官方认证 | 电视已获得 NVIDIA 的 G-SYNC Compatible 官方认证。确认支持 Adaptive Sync，VRR 范围合理，无重大问题 |
| **Yes** | 兼容但未认证 | 确认支持 Adaptive Sync 且无重大问题（可能偶有短暂撕裂或闪烁），但未获 NVIDIA 官方认证 |
| **No** | 不兼容 | 不支持 Adaptive Sync，或启用 G-SYNC 后显示异常无法使用（持续撕裂、严重闪烁、黑屏等） |

#### 关键判定因素

1. **画面撕裂**: 在 VRR 范围内是否仍出现撕裂
2. **屏幕闪烁/黑屏**: 启用 G-SYNC 后是否出现闪烁或短暂黑屏
3. **过度模糊**: VRR 模式下是否引入额外模糊
4. **VRR 范围**: 实际可用的最低和最高刷新率范围

## 关键指标

### G-SYNC Compatible 工作原理

- 利用电视的 HDMI Forum VRR 或 FreeSync 功能
- 通过 NVIDIA 驱动层适配，确保与 NVIDIA GPU 的兼容性
- **无需专用 G-SYNC 硬件模块**（不同于显示器上的 G-SYNC Ultimate）
- 电视上最常见的 G-SYNC 支持方式

### G-SYNC 级别对比 [↗](https://www.rtings.com/tv/tests/motion/g-sync-compatible#officially-supported-tvs)

| 级别 | 硬件要求 | 适用设备 |
|------|---------|---------|
| G-SYNC Ultimate | 内置 G-SYNC 硬件模块 | 少数高端游戏显示器 |
| G-SYNC（原生） | 内置 G-SYNC 硬件模块 | 部分游戏显示器 |
| G-SYNC Compatible | 无特殊硬件，依赖 HDMI Forum VRR | 大多数支持 VRR 的电视 |

### 常见问题与注意事项 [↗](https://www.rtings.com/tv/tests/motion/g-sync-compatible#limitations)

1. **VRR 闪烁**: 部分电视在低帧率区间 VRR 会闪烁，尤其是帧率快速变化时
2. **过场动画切换**: 从预渲染过场动画切换到游戏引擎时可能出现数秒的撕裂
3. **显卡要求**: 电视使用 G-SYNC Compatible 需要至少 GTX 16 系列显卡（显示器则支持 GTX 10 系列）
4. **电视端设置**: 某些电视需要在菜单中手动启用 FreeSync 或 Adaptive Sync（不开启则 G-SYNC 不可用）
5. **驱动更新**: NVIDIA 通过驱动更新添加新型号支持，官网认证列表可能不完整
6. **短暂撕裂**: 大多数电视在刷新率快速变化时仍会出现一定程度的短暂撕裂
7. **启用方法**: 通过 NVIDIA App -> Monitor Technology 选择 "G-SYNC Compatible"，或在 NVIDIA Control Panel 中配置

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/motion/g-sync-compatible#additional-information)

相关测试: [可变刷新率](https://www.rtings.com/tv/tests/motion/variable-refresh-rate) [↗](https://www.rtings.com/tv/tests/motion/g-sync-compatible#conclusion)
`;export{n as default};
