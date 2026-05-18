const n=`# Rtings TV 测试方法文档 (Test Bench 2.2)

> 基于 Rtings TV Test Bench 2.2 (v1.8) 整理
> 内容来源: 通过 Wayback Machine 从 Rtings 网站深度抓取页面内容
> 包含: 画质测试 (Picture Quality) + 游戏测试 (Gaming)
> 重要说明: **Rtings 不公开评分权重公式**——评分算法为专有信息。本文档仅记录已公开的测量方法、设备参数和评分标准。

## 目录结构

### 01-picture-quality/ — 画质测试

| 文件 | 测试项目 | 简述 |
|------|----------|------|
| [00-overview.md](01-picture-quality/00-overview.md) | 画质测试总览 | 画质测试的整体介绍和设备说明 |
| [01-contrast.md](01-picture-quality/01-contrast.md) | 对比度 | 原生对比度，暗室中最亮与最暗的比值 |
| [02-local-dimming.md](01-picture-quality/02-local-dimming.md) | 局部调光 | 背光分区控制能力，光晕抑制表现 |
| [03-hdr-peak-brightness.md](01-picture-quality/03-hdr-peak-brightness.md) | HDR 峰值亮度 | HDR 内容下的最大亮度输出 |
| [04-sdr-peak-brightness.md](01-picture-quality/04-sdr-peak-brightness.md) | SDR 峰值亮度 | SDR 内容下的最大亮度输出 |
| [05-color-gamut.md](01-picture-quality/05-color-gamut.md) | 色域 | DCI-P3 / Rec.2020 色域覆盖率 |
| [06-color-volume.md](01-picture-quality/06-color-volume.md) | 色量 | 不同亮度级别下的色彩体积 (SDR + HDR) |
| [07-gray-uniformity.md](01-picture-quality/07-gray-uniformity.md) | 灰度均匀性 | 脏屏效应 (DSE) 评估 |
| [08-black-uniformity.md](01-picture-quality/08-black-uniformity.md) | 黑色均匀性 | 漏光和暗场均匀性 |
| [09-viewing-angle.md](01-picture-quality/09-viewing-angle.md) | 可视角度 | 侧面观看时画质保持度 |
| [10-color-accuracy.md](01-picture-quality/10-color-accuracy.md) | 色彩准确度 | 开箱/校准后的色彩还原精度 |
| [11-hdr-color-accuracy.md](01-picture-quality/11-hdr-color-accuracy.md) | HDR 色彩准确度 | HDR 模式下的 EOTF 追踪和色彩精度 |
| [12-reflections.md](01-picture-quality/12-reflections.md) | 反射 | 屏幕反射特性和亮室表现 |
| [13-gradient.md](01-picture-quality/13-gradient.md) | 渐变 | 色阶过渡平滑度 |
| [14-lighting-zones.md](01-picture-quality/14-lighting-zones.md) | 背光分区 | 分区数量和布局 |

### 02-gaming/ — 游戏测试

| 文件 | 测试项目 | 简述 |
|------|----------|------|
| [00-overview.md](02-gaming/00-overview.md) | 游戏测试总览 | 游戏相关测试的整体介绍和评分权重 |
| [01-input-lag.md](02-gaming/01-input-lag.md) | 输入延迟 | 从输入到显示的延迟时间 |
| [02-response-time.md](02-gaming/02-response-time.md) | 响应时间 | 像素过渡速度和运动模糊 (权重 56%) |
| [03-variable-refresh-rate.md](02-gaming/03-variable-refresh-rate.md) | 可变刷新率 | VRR 支持范围和兼容性 |
| [04-gsync-compatible.md](02-gaming/04-gsync-compatible.md) | G-SYNC 兼容 | NVIDIA G-SYNC 兼容性测试 |
| [05-cad.md](02-gaming/05-cad.md) | 累积绝对偏差 | 运动模糊的量化评估指标 |
| [06-transition-artifacts.md](02-gaming/06-transition-artifacts.md) | 过渡伪影 | 过冲和逆向伪影评估 |
| [07-image-flicker.md](02-gaming/07-image-flicker.md) | 图像闪烁 | PWM/DC 调光和 BFI 测试 |
| [08-24p-judder.md](02-gaming/08-24p-judder.md) | 24p 颤抖 | 电影内容的颤抖处理 |
| [09-stutter.md](02-gaming/09-stutter.md) | 卡顿 | 低帧率内容的卡顿评估 |

## 测试设备汇总

### 核心测量设备

| 设备 | 型号 | 用途 | 相关测试 |
|------|------|------|---------|
| 色度计 | Colorimetry Research CR-100 | 亮度、色度坐标测量 | 通用 (对比度、亮度、色域、色量、色彩准确度等) |
| 光谱辐射计 | Colorimetry Research CR-250 | 校准 CR-100，精确光谱测量 | 通用 (每台电视使用 CR-250 对 CR-100 进行四轮矩阵校准) |
| 亮度计 | Konica Minolta LS-100 | 真实场景亮度测量、SDR 100 nits 验证 | HDR 峰值亮度、SDR 峰值亮度、色彩准确度 |
| 信号发生器 | Murideo Seven G (7G) | HDR/SDR 测试图案和真实场景输出 | HDR/SDR 峰值亮度、对比度、局部调光、渐变 |
| 信号发生器 | Murideo Six G (6G) | SDR 色彩准确度测试图案输出 | SDR 色彩准确度 |
| HDR 信号路由 | HDFury VRROOM | HDR10 信号路由 | HDR 色彩准确度 |
| HDR 信号控制 | HDFury Linker | HDR 信号控制 | HDR 色域体积 |
| 校准软件 | Portrait Displays Calman | 自动化数据采集与分析 | 通用 |
| GPU | NVIDIA GTX 1060 / GTX 1660 SUPER | HDR10 测试信号输出 | 色域、色域体积 |
| 相机 | Nikon D750 | 均匀性和反射照片拍摄 (f/4.0) | 灰度均匀性、黑色均匀性、反射 |

### 游戏与运动测试设备

| 设备 | 型号/类型 | 用途 | 相关测试 |
|------|----------|------|---------|
| 输入延迟测量工具 | Rtings 自定义光电二极管工具 | 输入延迟时间测量 (中心位置) | 输入延迟 |
| 响应时间测量工具 | Rtings 自定义 USB 光电二极管 (16-bit, 0-65535) | 像素过渡时间测量 | 响应时间、CAD |
| 高速相机 | ≥1000fps | 帧级别过渡分析 (1000fps→TIFF) | 过渡伪影 |
| 高速相机 | ≥240fps | 帧保持时间验证 | 24p 颤抖 (Native Apps) |
| 示波器 | Rigol DS1102E | 背光闪烁频率和波形检测 | 图像闪烁 |
| 光电二极管 | 通用型 | 配合示波器检测闪烁波形 | 图像闪烁 |
| GPU | NVIDIA RTX 3070 | G-SYNC/VRR/120Hz+ 测试 | G-SYNC、VRR、输入延迟 |
| GPU | AMD Radeon | FreeSync 兼容性测试 | VRR |
| 游戏主机 | Sony PS5 | 主机 HDMI Forum VRR 测试 | VRR |
| 游戏主机 | Microsoft Xbox Series X | 主机 HDMI Forum VRR + FreeSync 测试 | VRR |
| VRR 测试软件 | RTINGS SmoothFrog | 自动化 VRR 范围和伪影检测 | VRR、G-SYNC |

### 反射测试设备

| 设备 | 型号 | 用途 | 相关测试 |
|------|------|------|---------|
| 环形灯 | Neewer RP18B Pro | 9 英尺距离模拟正前方光源 | 直射反射 |
| 黑色背景板 | 非反射材质 | 遮挡环形灯的非屏幕反射 | 直射反射 |

## 测试资源汇总

## 测试资源汇总

### 测试图案 (Test Patterns)

| 测试图案 | 用途 | 相关测试 |
|---------|------|---------|
| 自定义真实场景测试图 (Cave Scene) | 含明亮/黑暗区域的对比度测量 (TB 2.0+) | 对比度、局部调光 |
| APL 窗口 (2%, 10%, 25%, 50%, 100%) | 不同面积下的亮度测量 | HDR/SDR 峰值亮度 |
| 全屏 50% 灰色图案 | 灰度均匀性和 DSE 测量 | 灰度均匀性 |
| 全屏 5% 灰色图案 | 接近黑色的均匀性测量 (TB 1.2+) | 灰度均匀性 |
| 黑色背景 + 白色十字交叉线 | 黑色均匀性测量 | 黑色均匀性 |
| HDR 渐变图案 (Photoshop "Classic", 16→10-bit HDR10) | 色阶过渡平滑度检测 (8 条渐变线) | 渐变 |
| 6 色 HDR 测试图案 (75% stimulus) | 色域覆盖率测量 | 色域 |
| 602 点色域测量图案 | SDR 色域体积测量 | SDR 色域体积 |
| 白色全屏图案 | PWM 频率和 BFI 测量 | 图像闪烁 |

### 真实场景测试 (Real Scene Tests)

| 场景名称 | 来源 | 目标亮度 | 场景特点 | 相关测试 |
|---------|------|---------|---------|---------|
| Hallway Lights | Murideo | ~1,950 cd/m² | 高 APL，小面积高光 | HDR 峰值亮度 |
| Yellow Skyscraper | Murideo | ~700 cd/m² | 低 APL，中面积高光 | HDR 峰值亮度 |
| Landscape Pool | Murideo | ~300 cd/m² | 中等 APL | HDR 峰值亮度 |
| SDR Real Scene | Rtings | — | 灯光从左上角移动，CR-100 跟踪 | SDR 峰值亮度 |

### 运动测试视频

| 测试视频 | 用途 | 相关测试 |
|---------|------|---------|
| 彩色球运动视频 (960 px/s) | 色彩伪影和边缘伪影分析 | 过渡伪影 |
| 24fps 白色方块循环视频 | 24 个槽位/秒的颤抖检测 | 24p 颤抖 |
| 追逐测试图案 (1,920 px/s) | 运动模糊可视化 | 响应时间、CAD |
| 局部调光过渡视频 | 分区开/关速度和可见性评估 | 局部调光 |
| 背光分区测试视频 | 静态字幕 + 暗背景上的亮物体 | 背光分区 |

### 信号格式

| 信号格式 | 用途 | 相关测试 |
|---------|------|---------|
| HDR10 (4K@60Hz, 4:2:2, 10-bit) | HDR 基础测试 | HDR 峰值亮度、HDR 色彩准确度、色域、色域体积 |
| SDR (4K@60Hz) | SDR 基础测试 | SDR 峰值亮度、色彩准确度 |
| 24p / 60Hz / 120Hz | 不同刷新率测试 | 24p 颤抖、响应时间、VRR |

## 重要发现

- **评分权重已通过会员页面获取**: 通过 Rtings 会员 Cookie 从页面数据中提取了各测试的评分权重。详见各测试文档的"评分公式与权重"章节。以下为主要测试的权重摘要：

### 评分权重摘要（通过会员数据提取）

| 测试项 | 子测试权重 |
|--------|-----------|
| **对比度** | 局部调光对比度 80%，原生对比度 20% |
| **HDR 峰值亮度** | 3 个真实场景各 20%（合计 60%），APL 窗口 40% |
| **SDR 峰值亮度** | 真实场景 50%，APL 窗口 50%（25% 窗口最高 15%） |
| **色域** | 4 个子测试等权重（各 25%） |
| **SDR 色量** | CIELAB DCI-P3 60%，CIELAB BT.2020 40% |
| **灰度均匀性** | 50% 灰度 70%（Std Dev 35% + DSE 35%），5% 灰度 30% |
| **黑色均匀性** | 局部调光 Std Dev 50%，原生 Std Dev 50% |
| **可视角度** | Brightness Loss 24%，Gamma Shift 24%，Color Washout 20%，Color Shift 16%，Black Level Raise 16% |
| **色彩准确度 (SDR/HDR)** | 白平衡 dE 40%，色彩 dE 40%，色温 20% |
| **渐变** | 8 条渐变线等权重（各 12.5%） |
| **输入延迟** | 4k@Max 40%，4k@120Hz 20%，其余 40% |
| **响应时间** | Total 45%，First 30%，Worst 10% 25% |
| **CAD** | Avg. CAD 60%，Best 10% 20%，Worst 10% 20% |
| **VRR** | 4k VRR Max 75%，1080p VRR Max 25% |
| **过渡伪影** | Color Artifacts 70%，Edge Artifacts 30% |
| **卡顿 (TB 2.2)** | Sample And Hold 70%，Frame Hold Time @24fps 30% |

- **CR-100 必须逐台校准**: 使用 CR-250 光谱辐射计对 CR-100 进行四轮矩阵校准，确保光谱响应与被测电视的背光匹配。
- **Gamma 校正用于运动测试**: CAD 和响应时间测试前，需测量全部 256 级灰阶的光输出，建立 gamma 校正映射，使不同亮度输出的电视可直接比较。
- **OLED 自动满分项**: 对比度 (10.0)、黑色均匀性 (10.0)、光晕 (10.0)、分区过渡 (10.0)。
- **Test Bench 2.0 是分水岭**: 多项测试在 2.0 中发生了重大变化（对比度换用 cave 场景、SDR 评分仅用峰值、响应时间从 12 种改为 72 种过渡），2.0 前后结果不可比。
- **TB 2.2 移除了部分页面**: 反射 (Reflections) 和 24p 颤抖 (24p Judder) 页面在 Rtings 网站上返回 404，可能在 TB 2.2 重构中被合并。过渡伪影和卡顿测试被大幅更新。

## 参考链接

- Rtings TV 测试总览: https://www.rtings.com/tv/learn/how-we-test
- Test Bench 2.2 变更日志: https://www.rtings.com/tv/tests/changelogs/2-2
- 画质测试: https://www.rtings.com/tv/tests/picture-quality
- 运动测试: https://www.rtings.com/tv/tests/motion
- 输入测试: https://www.rtings.com/tv/tests/inputs
`;export{n as default};
