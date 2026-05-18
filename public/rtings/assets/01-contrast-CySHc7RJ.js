const n=`# 对比度 (Contrast Ratio)

> 来源: https://www.rtings.com/tv/tests/picture-quality/contrast-ratio
> Test Bench: 2.2 (v1.8)
> 页面更新: 2025-03-26
> 产品评测: [LG C4 OLED](https://www.rtings.com/tv/reviews/lg/c4-oled) | [Samsung QN90F](https://www.rtings.com/tv/reviews/samsung/qn90f)
> 测试方法变更: [Test Bench 2.2](https://www.rtings.com/tv/tests/changelogs/2-2)

## 测试目的

测量电视最亮白色与最暗黑色之间的亮度比率。对比度是画质最重要的基础指标之一，直接影响画面的层次感和暗场表现。高对比度意味着电视可以在同一画面中同时呈现深邃的黑色和明亮的白色，使 [HDR](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness) 中的高亮在暗场景中格外突出。

**何时重要**: 对比度始终重要，但在暗室中观看暗场景时尤为关键。在完全黑暗的环境中，低对比度电视的黑色会呈现为灰色，严重影响沉浸感。在明亮房间里，屏幕反射会增加黑色的亮度，对比度差异不那么明显，此时屏幕涂层和抗反射涂层的影响更大。

**它是什么**: 对比度是最亮的白色亮度与最暗的黑色亮度之比，以 X:1 表示。例如 5000:1 意味着最亮的白色比最暗的黑色亮 5000 倍。对比度越高，画面中亮暗细节的区分越明显，暗场景中的层次感越丰富。

[→ Rtings: When It Matters](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#when-it-matters)

## 测试方法

> **版本兼容性说明**: 该测试在 [Test Bench 2.0](https://www.rtings.com/tv/tests/changelogs/2-0) 中进行了重大更新。1.9-1.11 版本使用不同的测试图像和测量点，结果与 2.0+ 不直接可比。1.9 之前使用修改版 ANSI 棋盘格图案 (checkerboard pattern)，白电平设为接近 100 nits。2.0 起改用自定义真实场景 (cave) 测试图，目标白电平提升至 200 cd/m²。测试图像、测量位置和目标亮度均已变更，因此 **2.0 的结果与 1.9-1.11 不可直接比较**。

### 前置条件

- **设备校准状态**: 电视必须已完成校准 (post-calibration)，使用校准后的画面模式设置。所有图像增强功能（动态对比度、动态背光等）应按校准结果设定
- **环境要求**: 完全暗室，无环境光源。任何环境光都会抬升黑色亮度，影响测量精度
- **电视预热时间**: 电视需预热至稳定工作状态（建议至少 30 分钟以上），确保背光和面板性能达到稳态
- **信号源设置**: 通过 Murideo 7G 信号发生器输出 HDMI 信号，分辨率 4K @ 60Hz。使用 Portrait Displays Calman 软件进行数据采集
- **测量设备准备**: CR-100 色度计需已完成校准，测量探头需与屏幕表面垂直对准

### 详细测量步骤

**A. 原生对比度测量 (Native Contrast) — 关闭局部调光**

1. 将电视切换至校准后 (post-calibration) 的画面模式
2. **关闭**[局部调光](https://www.rtings.com/tv/tests/picture-quality/local-dimming) (Local Dimming) 功能。如果电视有多个局部调光档位，选择"关闭"
3. 同时关闭其他可能影响对比度的处理功能（动态对比度 Dynamic Contrast、黑色增强 Black Enhancer 等）
4. 通过 Murideo 7G 信号发生器输出自定义 Cave 场景测试图 #1（洞穴场景，包含洞穴开口和中心白色区域）
5. 调节电视背光 (Backlight) 设置，使洞穴中心白色区域的亮度尽可能接近 **200 cd/m²** 目标值
   - 使用 CR-100 实时监测白色区域亮度，微调背光直至接近目标
   - **选择 200 cd/m² 而非 100 nits 的原因**:
     - (a) 200 cd/m² 足够低，确保市场上所有电视都能达到该亮度，从而保证不同型号之间的结果可比性。100 nits 时部分低端电视可能无法在相同条件下达标
     - (b) 200 cd/m² 代表中等亮度房间的典型使用亮度，使测试结果更接近用户真实使用场景
6. 背光锁定后，在洞穴开口**右侧**测量 **2 个点**的光输出（白色区域亮度）
7. 记录两个白色测量值: W₁ 和 W₂
8. 通过 Murideo 7G 切换显示 Cave 场景测试图 #2（即 #1 的水平镜像翻转版本）
9. 在洞穴开口**左侧**（翻转后的暗区）测量 **4 个点**的光输出（黑色区域亮度）
   - **镜像翻转的目的**: 确保[侧入式背光](https://www.rtings.com/tv/tests/picture-quality/lighting-zones) (Edge-Lit) 和均匀性差的电视被公平测量。侧入式电视的一侧可能比另一侧更亮或更暗，镜像后交换亮暗区域的位置，取平均值可以消除背光不均匀带来的偏差
10. 记录四个黑色测量值: B₁, B₂, B₃, B₄
11. 总计获得 **6 个测量值**: 2 个白色 + 4 个黑色

**B. 局部调光对比度测量 (Contrast with Local Dimming)**

12. 将电视的局部调光 (Local Dimming) 设置为**最佳档位**
    - 最佳档位的确定: 通常选择最高档位，但某些电视的最高档位可能过度压缩暗部细节或产生严重[光晕](https://www.rtings.com/tv/tests/picture-quality/local-dimming#downsides-of-local-dimming)，此时中等档位可能是最佳选择
    - 如果电视的局部调光效果极差（如仅有极少数背光分区的侧入式电视），最佳选择可能是关闭局部调光
13. 保持背光设置不变（仍为步骤 5 中确定的值）
14. 重复步骤 4-11，在启用局部调光的条件下再次测量
15. 记录第二组 6 个测量值

### 数据处理与公式

**对比度计算公式**:

\`\`\`
Contrast Ratio = avg(White) / avg(Black)

其中:
avg(White) = (W₁ + W₂) / 2
avg(Black) = (B₁ + B₂ + B₃ + B₄) / 4
\`\`\`

- 白色区域取 2 个测量点的算术平均值
- 黑色区域取 4 个测量点的算术平均值
- 对比度 = 白色平均值 / 黑色平均值，以 X:1 格式表示

**异常值处理**: 如果黑色测量值中存在明显偏离其他测量值的异常点（通常由背光不均匀导致），仍纳入平均值计算，不做剔除处理。这是有意为之——背光不均匀本身就是电视的真实性能特征。

**结果报告**: 每台电视报告两个对比度值:
- Native Contrast（原生对比度）: 关闭局部调光时的对比度
- Contrast with Local Dimming（局部调光对比度）: 启用最佳局部调光时的对比度

[→ Rtings: Our Tests](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#our-tests)

## 测试设备 [↗](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#how-to-get-the-best-results)

| 设备 | 型号 | 用途 | 备注 |
|------|------|------|------|
| 色度计 | Colorimetry Research CR-100 | 亮度和色度测量 | 主要测量设备，用于所有洞穴场景的亮度读数 |
| 信号发生器 | Murideo Seven G (7G) | 输出测试图案 | 生成 Cave 场景测试图 #1 和 #2 |
| 校准软件 | Portrait Displays Calman | 数据采集与分析 | 连接 CR-100 进行实时亮度读取和记录 |

## 测试资源

### 测试图案

| 资源 | 描述 | 来源 |
|------|------|------|
| 自定义 Cave 场景测试图 #1 | 包含洞穴开口的暗场景，左侧为洞穴暗区，右侧为白色亮区，中心有白色目标区域用于校准背光 | Rtings 自定义设计 |
| 自定义 Cave 场景测试图 #2 | #1 的水平镜像翻转版本。亮暗区域左右互换，用于消除侧入式背光不均匀偏差 | Rtings 自定义设计 |

![对比度测试场景拼图](assets/test-patterns/contrast-collage.jpg)
*对比度测试场景拼图：展示不同电视在 cave 场景下的对比度表现差异*

### PQ EOTF 曲线

![PQ EOTF 感知量化曲线](assets/test-patterns/pq-eotf-curve.png)
*[PQ (Perceptual Quantizer) EOTF](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness#pq-eotf) 曲线：HDR 内容使用的感知线性化传递函数，人眼对暗部变化更敏感*

### 产品测试结果示例

**OLED — LG C4** ([完整评测 →](https://www.rtings.com/tv/reviews/lg/c4-oled#test_3))

![对比度测试场景](assets/product-examples/lg-c4-oled/01-contrast/contrast-small.jpg)
*对比度测试场景：cave 场景中暗部与亮部的对比表现*

**MiniLED — Samsung QN90F** ([完整评测 →](https://www.rtings.com/tv/reviews/samsung/qn90f#test_3))

![对比度测试场景](assets/product-examples/samsung-qn90f/01-contrast/contrast-small.jpg)
*对比度测试场景：cave 场景中暗部与亮部的对比表现*

> **重要说明**: 测试图像为自定义设计的真实场景 (real scene)，**并非**棋盘格 (checkerboard) 或 ANSI 测试图案。棋盘格图案在 1.9 之前的版本中使用，自 2.0 起已弃用。

> **重要说明**: 测试图像为自定义设计的真实场景 (real scene)，**并非**棋盘格 (checkerboard) 或 ANSI 测试图案。棋盘格图案在 1.9 之前的版本中使用，自 2.0 起已弃用。

## 评分标准

### 评分公式与权重

**通过 Rtings 会员页面获取的评分权重**:

| 子测试 | 权重 | 优秀阈值 | 可感知差异 |
|--------|------|---------|-----------|
| Contrast (局部调光对比度) | **80%** | > 80,000:1 | 500 |
| Native Contrast (原生对比度) | **20%** | > 5,500:1 | 500 |

### 可感知差异阈值

| 子测试 | 可感知差异 | 说明 |
|--------|-----------|------|
| Native Contrast | 500 | 对比度差值需 ≥ 500:1 才能被人眼感知。例如，从 3000:1 提升到 3400:1 几乎无法察觉，但从 3000:1 提升到 5000:1 可感知 |
| Contrast with Local Dimming | 500 | 同上 |

### 评分参考范围

**原生对比度参考范围**:

| 等级 | 对比度范围 | 典型面板类型 |
|------|-----------|-------------|
| 优秀 (Excellent) | > 5000:1 | VA 面板高端型号 |
| 良好 (Good) | 3000:1 - 5000:1 | VA 面板主流型号 |
| 一般 (Average) | 1000:1 - 3000:1 | IPS/ADS 面板 |
| 较差 (Poor) | < 1000:1 | 低端 IPS 面板 |

**局部调光对比度参考范围**:

| 等级 | 对比度范围 | 典型配置 |
|------|-----------|---------|
| 优秀 (Excellent) | 理论无穷大 | OLED（自动满分 10.0） |
| 良好 (Good) | 10000:1+ | Mini LED 千级分区 |
| 一般 (Average) | 3000:1 - 10000:1 | 传统 Full-Array LED |
| 较差 (Poor) | < 3000:1 | Edge-Lit 或少量分区 |

> **OLED 特殊规则**: OLED 像素可以完全关闭，理论上对比度是无穷大，因此在两个子测试中均自动获得满分 10.0，无需实际测量。

## 关键指标

### 面板类型与对比度关系 [↗](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#differences-in-panel-technology)

| 面板类型 | 原生对比度特点 | 技术原因 |
|----------|--------------|---------|
| OLED | 像素级控光，理论上无穷大对比度，无光晕 | 每个像素独立发光，可完全关闭 |
| VA | 3000:1 - 10000:1，LCD 中最佳 | VA 液晶分子排列方式使漏光最少 |
| IPS/ADS | 600:1 - 1500:1，对比度最低 | IPS 液晶分子横向排列，漏光较多 |
| Mini LED (配合 VA) | 可接近 OLED 水平 | 千级分区精确控光弥补 VA 原生对比度 |
| Mini LED (配合 IPS/ADS) | 大幅提升有效对比度 | 分区控光弥补 IPS 低原生对比度的短板 |

### 相关设置对对比度的影响 [↗](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#related-settings)

| 设置 | 作用 | 副作用 |
|------|------|--------|
| Local Dimming（局部调光） | 暗化暗区背光，大幅提升对比度 | 可能产生光晕 (blooming)、暗部细节丢失 |
| Contrast（对比度设置） | 增加最白亮度，可能提升对比度 | 通常影响画质，导致亮部裁剪 |
| Black Level（黑电平） | 部分品牌称为"Brightness"，降低可使黑色更深 | 过低会丢失暗部细节 |
| Dynamic Contrast（动态对比度） | 软件处理使黑色更深 | 会丢失暗部细节，画面不自然 |
| Gamma | 控制暗部可见细节量 | 不直接控制黑电平深度，但影响暗部层次 |
| Backlight（背光） | 提升整体亮度 | 不改变对比度比率（白黑同比例变化） |

### Test Bench 版本覆盖 [↗](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#test-methodology-coverage)

| 版本 | 1.6 及之前 | 1.7-1.8 | 1.9-1.11 | 2.0+ |
|------|-----------|---------|----------|------|
| 测试图像 | 修改版 ANSI 棋盘格 | 修改版 ANSI 棋盘格 | 类似真实场景 | Cave 真实场景 |
| 白电平目标 | ~100 nits | ~100 nits | ~100 nits | 200 cd/m² |
| 测量点 | 棋盘格黑白格 | 棋盘格黑白格 | 多点测量 | 2白 + 4黑 = 6点 |
| Native Contrast | ✅ | ✅ | ✅ | ✅ |
| Contrast With Local Dimming | ✅ | ✅ | ✅ | ✅ |
| 与 2.0 可比 | 否 | 否 | 否 | 基准 |

> **关键提醒**: 2.0 的结果与 1.9-1.11 不可直接比较。测试图像已从棋盘格更换为真实场景，测量位置已改变，目标白电平从 100 nits 提升至 200 cd/m²。跨版本比较需谨慎。

[→ Rtings: Additional Information](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#additional-information)

相关测试: [局部调光](https://www.rtings.com/tv/tests/picture-quality/local-dimming) | [HDR 峰值亮度](https://www.rtings.com/tv/tests/picture-quality/hdr-peak-brightness)

[↗](https://www.rtings.com/tv/tests/picture-quality/contrast-ratio#conclusion)
`;export{n as default};
