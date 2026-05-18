const n=`# 局部调光 (Local Dimming)

> 来源: https://www.rtings.com/tv/tests/picture-quality/local-dimming
> Test Bench: [2.2](https://www.rtings.com/tv/tests/changelogs/2-2) (v1.8)
> 页面更新: 2025-02-25
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

评估 LED 电视背光层对画面内容的适应能力。局部调光通过暗化画面暗区的背光分区来提升[对比度](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio)，使黑色更深同时保持亮部亮度，是 HDR 内容表现的关键因素。

**何时重要**: 暗室中观看暗场景时最为重要。良好的局部调光可以使星空场景中的星星明亮锐利，同时周围的天空保持纯黑。明亮房间里环境光会抬升黑色亮度，差异不太明显。

**它是什么**: 局部调光是 LED/LCD 电视（非 OLED）的一项背光控制技术。电视背光被分为若干独立区域，每个区域可以根据画面内容独立调节亮度。当画面某区域需要显示黑色时，对应[背光分区](https://www.rtings.com/tv/tests/picture-quality/lighting-zones)变暗或关闭，从而实现更深的黑色。OLED 不需要局部调光，因为每个像素可以独立发光和关闭。

**评分方式**: 该测试为**复合测试** (composite test)，综合多个子测试的结果给出最终评分。其中部分子测试（[光晕 (Blooming)](https://www.rtings.com/tv/tests/picture-quality/local-dimming#downsides-of-local-dimming)、分区过渡、游戏模式）为**主观评分** (subjectively assigned)，对比度子测试为客观测量。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/local-dimming#when-it-matters)

## 测试方法

> **Test Bench 1.11 更新**: 将权重从光晕 (blooming) 和分区过渡 (zone transitions) 转移到了对比度 (contrast)，使无局部调光的电视不会获得过高分数。同时更新了光晕测试以更好反映真实使用，减少可视角度对评分的影响。

局部调光不是单一测试，而是综合评估受局部调光影响的多个画质方面的复合测试。最终评分基于以下子测试的综合加权。

### 前置条件

- **设备校准状态**: 电视必须已完成校准 (post-calibration)，使用校准后的画面模式设置
- **环境要求**: 完全暗室，无任何环境光源。光晕和分区过渡的视觉评估对环境光极其敏感
- **电视预热时间**: 电视需预热至稳定工作状态（建议至少 30 分钟），背光和面板性能需达到稳态
- **信号源设置**:
  - 对比度测试: Murideo 7G 信号发生器输出 HDMI 4K @ 60Hz
  - 光晕和分区过渡: Murideo 7G 或指定信号源输出测试视频
- **局部调光档位选择**: 需预先确定最佳局部调光档位。通常选择最高档位，但某些电视的最高档位可能产生过度光晕或暗部细节丢失，此时中等档位可能更优
- **相机设置（光晕测试专用）**: 需要按指定角度架设相机，详见光晕测试步骤

### 测试组成

| 测试项目 | 评分方式 | 测量设备 | 说明 |
|---------|---------|---------|------|
| 对比度 (Contrast) | 客观测量 | CR-100 + Calman | 局部调光对对比度的提升效果 |
| 光晕 (Blooming) | 主观评分 | 相机（指定角度拍摄） | 暗区中亮物体周围的光晕扩散程度 |
| 分区过渡视频 (Zone Transitions) | 主观评分 | 目视评估 | 背光跟随画面元素移动的过渡质量 |
| 黑色均匀性 (Black Uniformity) | 客观 + 主观 | CR-100 | 局部调光对黑色均匀性的影响 |
| 背光类型 (Backlight Type) | 分类标注 | 厂商规格 | Full-Array / Direct LED / Edge-Lit |
| 游戏模式 (Game Mode) | 主观评分 | 目视 + 仪器 | 游戏模式下的局部调光表现 |

### 详细测量步骤

#### 子测试 1: 对比度测试 (Contrast with Local Dimming)

1. 将电视切换至校准后 (post-calibration) 的画面模式
2. 将局部调光 (Local Dimming) 设置为**最佳档位**（通过预备测试确定）
3. 通过 Murideo 7G 输出自定义 Cave 场景测试图（与对比度单项测试使用的相同图案）
4. 调节背光使洞穴中心白色区域的亮度尽可能接近 **200 cd/m²**
5. 测量场景中 **5 个点**的光输出（黑色亮度）:
   - 4 个点位于画面的**四个角**
   - 1 个点位于洞穴入口**右侧**暗区
6. 记录 5 个黑色测量值: B₁, B₂, B₃, B₄, B₅
7. 测量洞穴中心白色区域的亮度作为白色参考值 W
8. 计算局部调光对比度: \`Contrast_LD = W / avg(B₁...B₅)\`
9. **可感知差异**: 500（即对比度差值需 ≥ 500:1 才能被感知）

#### 子测试 2: 光晕测试 (Blooming)

10. 架设相机于指定角度:
    - **水平角度**: 从正面向侧面偏转 **+40° 到 +50°**
    - **垂直角度**: 从正面向上偏转 **+4° 到 +6°**
11. 选择包含暗场景中亮物体的测试场景（如字幕测试场景）
12. 拍摄光晕现象，并基于以下标准进行主观评分:
    - **光晕的刺眼程度** (harshness): 这是评分的核心因素，而非单纯的光晕扩散范围
    - 一圈柔和渐变的光晕通常不如突然截断的亮线刺眼
    - 极亮高亮在暗场景中突然截断 (hard cutoff) 可能比渐变亮度梯度更分散注意力
    - 考虑真实使用中的视觉影响: 用户在正常观看距离下是否注意到光晕
13. 评分范围 0-10 分，基于主观判断

> **注意**: 1.11 版本更新了光晕测试方法，减少了可视角度对评分的影响，使评分更侧重于光晕本身的刺眼程度而非拍摄角度带来的视觉差异。

#### 子测试 3: 分区过渡视频测试 (Zone Transitions)

14. 播放局部调光专用测试视频，视频中包含亮物体在暗背景上移动的场景
15. 评估以下三个维度:

    **(a) 分区过渡可见性 (Zone Transition Visibility)**:
    - 亮物体移动时，背光分区是否在物体前方过早亮起
    - 物体通过后，背光分区是否过慢关闭
    - 是否有多个分区同时亮起（"手电筒"效应）
    - 分区过渡是否平滑自然

    **(b) 过渡速度 (Speed)**:
    - 新分区是否在物体到达前过早激活
    - 旧分区是否在物体离开后滞留过久
    - 滞留时间越短越好

    **(c) 分区数量和大小估算**:
    - 通过观察亮物体周围亮区的范围来估算分区大小
    - 亮区范围越小说明分区越小、数量越多
    - 分区数量多的电视通常光晕更小、过渡更平滑
    - 注意这只是估算，非精确计数

16. 综合以上三个维度给出主观评分 (0-10 分)

#### 子测试 4: 游戏模式测试 (Game Mode)

17. 将电视切换至 **Game Mode**（游戏模式）
18. 如电视支持，启用 **VRR** (Variable Refresh Rate, 可变刷新率)
19. 重复子测试 1-3 的关键评估项目:
    - 对比度测量
    - 光晕评估
    - 分区过渡评估
20. 比较游戏模式与标准模式下的差异:
    - 部分型号在 Game Mode 下光晕更严重（为降低延迟而减少处理时间）
    - 部分型号在 Game Mode 下局部调光效果几乎相同
21. 给出游戏模式下的综合主观评分 (0-10 分)

> **Game Mode 测试自 v1.9 起加入**，之前版本不包含游戏模式下的局部调光评估。

### 数据处理与公式

**对比度计算**:

\`\`\`
Contrast_LD = W / avg(B₁ + B₂ + B₃ + B₄ + B₅)
\`\`\`

其中 W 为白色亮度，B₁-B₅ 为 5 个黑色测量点（4 角 + 洞穴入口右侧）。

**最终评分**: 局部调光的最终评分是多个子测试的加权综合:
- 对比度: 客观测量值，转换为 0-10 分
- 光晕: 主观评分
- 分区过渡: 主观评分
- 游戏模式: 主观评分
- 背光类型: 分类标注（不直接参与评分，但影响其他子测试的期望值）

> **注意**: 具体权重在 Test Bench 1.11 中已调整，增加了对比度的权重，降低了光晕和分区过渡的权重。精确权重数值未公开。

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/local-dimming#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/local-dimming#how-to-get-the-best-results)

| 设备 | 型号 | 用途 | 备注 |
|------|------|------|------|
| 色度计 | Colorimetry Research CR-100 | 亮度测量 | 用于对比度测试中的黑白亮度读取 |
| 亮度计 | Konica Minolta LS-100 | 真实场景亮度测量 | 辅助测量，用于特定场景的亮度确认 |
| 信号发生器 | Murideo Seven G (7G) | 信号输出 | 输出 Cave 场景测试图和分区过渡测试视频 |
| 相机 | 指定型号，固定角度架设 | 光晕主观评估 | 水平 +40°~+50°，垂直 +4°~+6° |
| 校准软件 | Portrait Displays Calman | 数据采集 | 连接 CR-100 进行实时亮度读取 |

## 测试资源

### 测试图案和视频

| 资源 | 用途 | 说明 |
|------|------|------|
| 自定义 Cave 场景测试图 | 对比度测量 | 与对比度单项测试相同的洞穴场景图案 |
| 局部调光测试视频 | 分区过渡评估 | 包含亮物体在暗背景上移动的专用视频 |
| 字幕测试场景 | 光晕评估 | 暗背景上的亮色字幕，用于评估光晕刺眼程度 |
| 暗场景测试内容 | 综合评估 | 包含各种亮暗分布的真实内容 |

### Local Dimming 原理图

![全阵列式局部调光](assets/test-patterns/local-dimming-full-array.png)
*全阵列式局部调光 (Full Array Local Dimming): 背光分区均匀分布在屏幕后方*

![侧入式局部调光](assets/test-patterns/local-dimming-edge-lit.png)
*侧入式背光 (Edge-lit): LED 灯条位于屏幕边缘，光通过导光板扩散*

![局部调光测试页面示意](assets/methodology-diagrams/local-dimming-hero.png)
*局部调光测试页面示意图：展示全阵列/侧入式/直下式背光类型的测试结果对比*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_16975))

![光晕测试](assets/product-examples/lg-c4-oled/02-local-dimming/blooming-small.jpg)
*局部调光光晕测试：暗场景中明亮物体周围的光晕表现*

![游戏模式光晕](assets/product-examples/lg-c4-oled/02-local-dimming/blooming-game-mode-small.jpg)
*游戏模式下的光晕表现：部分电视在游戏模式中光晕更明显*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_16975))

![局部调光均匀性](assets/product-examples/samsung-qn90f/02-local-dimming/uniformity-local-dimming-small.jpg)
*局部调光均匀性测试：开启局部调光后的屏幕均匀性*

![光晕测试](assets/product-examples/samsung-qn90f/02-local-dimming/blooming-small.jpg)
*局部调光光晕测试：暗场景中明亮物体周围的光晕表现*

![游戏模式光晕](assets/product-examples/samsung-qn90f/02-local-dimming/blooming-game-mode-small.jpg)
*游戏模式下的光晕表现：部分电视在游戏模式中光晕更明显*

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分结构**:

局部调光测试的评分由多个子项组成，包括客观测量和主观评估：
- **对比度 (Contrast)**: 客观测量，通过测量值转换为 0-10 分（与对比度测试共用 help_good: > 80,000）
- **光晕 (Blooming)**: 主观评分 (0-10)，基于指定角度拍摄后的视觉评估
- **分区过渡 (Local Dimming Transitions)**: 主观评分 (0-10)，综合可见性、速度和分区数量
- **游戏模式 (Game Mode)**: 主观评分 (0-10)，与标准模式对比评估

> Rtings 未公开各子项的精确权重分配（部分为主观评分），但对比度客观指标在其中占重要地位。

各子测试评分方式:
- **对比度**: 客观测量，通过测量值转换为 0-10 分
- **光晕**: 主观评分 (0-10)，基于指定角度拍摄后的视觉评估
- **分区过渡**: 主观评分 (0-10)，综合可见性、速度和分区数量
- **游戏模式**: 主观评分 (0-10)，与标准模式对比评估

### 可感知差异阈值

| 子测试 | 可感知差异 | 说明 |
|--------|-----------|------|
| 对比度 | 500 | 对比度差值需 ≥ 500:1 才能被感知 |
| 光晕 | 主观判断 | 无固定数值阈值，基于整体视觉影响评估 |
| 分区过渡 | 主观判断 | 无固定数值阈值，基于过渡可见性和速度评估 |
| 游戏模式 | 主观判断 | 与标准模式的差异程度评估 |

### 评分参考范围

**光晕评分参考**:

| 等级 | 评分 | 典型表现 |
|------|------|---------|
| 优秀 | 9-10 | 几乎无可见光晕。OLED 自动满分 |
| 良好 | 7-8 | 轻微光晕，仅在特定场景下可察觉 |
| 一般 | 5-6 | 明显光晕，在暗场景中可见但不严重影响观看 |
| 较差 | < 5 | 严重光晕，严重影响暗场景观看体验 |

**分区过渡评分参考**:

| 等级 | 评分 | 典型表现 |
|------|------|---------|
| 优秀 | 9-10 | 分区过渡几乎不可见，速度极快。OLED 自动满分 |
| 良好 | 7-8 | 过渡轻微可见，速度较快 |
| 一般 | 5-6 | 过渡明显可见，有一定延迟 |
| 较差 | < 5 | 过渡非常明显，"手电筒"效应严重，明显延迟 |

**背光类型分类** (非评分项，但影响期望值):

| 分类 | 条件 | 典型型号 | 局部调光效果 |
|------|------|---------|-------------|
| Full-Array (Local Dimming) | 直下式背光 + 支持局部调光 | Hisense U8N | 精确控光，分区数多 |
| Direct LED (No Local Dimming) | 直下式背光，无局部调光 | TCL Q5 | 无控光能力 |
| Edge-Lit | 侧入式背光 | LG QNED85T | 控光不精确，分区极少 |

## 关键指标

### 面板技术与局部调光表现

| 技术 | 局部调光表现 | 典型分区数 | 光晕程度 |
|------|------------|-----------|---------|
| OLED | 自发光像素，无需局部调光，完美黑色无光晕 | N/A (像素级) | 无 |
| Mini LED (Full-Array) | 分区数多（数百到数千），控光精确，接近 OLED | 500-5000+ | 轻微到中等 |
| 传统 Full-Array LED | 分区数有限，有一定光晕 | 32-128 | 中等 |
| Edge-Lit | 分区极少（如 LG QNED85T 仅 6 个），控光最差 | 2-16 | 严重 |

### 局部调光的副作用 [↗](https://www.rtings.com/tv/tests/picture-quality/local-dimming#downsides-of-local-dimming)

| 副作用 | 描述 | 严重程度取决于 |
|--------|------|---------------|
| 光晕 (Blooming) | 亮物体周围的暗区出现光晕 | 分区大小、光晕控制算法 |
| 光迹拖尾 | 快速移动亮物体的背光分区滞留 | 分区响应速度 |
| 暗部细节丢失 | 局部调光过度压暗导致暗部细节不可见 | 算法激进度 |
| 意外变暗 | 靠近亮物体的暗区被过度压暗 | 分区大小和精度 |
| 均匀性问题 | 亮度在背光分区间波动 | 分区数量和过渡平滑度 |

### 相关设置

| 设置 | 影响 | 建议 |
|------|------|------|
| Local Dimming 档位 | 低档位光晕少但对比度改善弱，高档位对比度好但光晕明显 | 根据内容类型调整 |
| HDR 模式 | 良好的局部调光可进一步提升 HDR 高亮表现 | HDR 时建议开启最高档位 |
| Game Mode | 可能影响局部调光算法的处理时间和精度 | 注意检查游戏模式下的光晕差异 |

### Test Bench 版本覆盖 [↗](https://www.rtings.com/tv/tests/picture-quality/local-dimming#test-methodology-coverage)

| 版本 | 1.6-1.10 | 1.11+ | 2.0+ |
|------|----------|-------|------|
| 光晕测试方法 | 旧方法 | ✅ 更新 | ✅ |
| 对比度权重 | 较低 | ✅ 提高 | ✅ |
| 游戏模式测试 | 无 | ✅ 新增 (v1.9) | ✅ |
| Cave 场景测试图 | 旧图案 | 旧图案 | ✅ 新图案 |

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/local-dimming#additional-information)

相关测试: [对比度](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio) | [黑色均匀性](https://www.rtings.com/tv/tests/picture-quality/black-uniformity-clouding-flashlighting)
[↗](https://www.rtings.com/tv/tests/picture-quality/local-dimming#conclusion)
`;export{n as default};
