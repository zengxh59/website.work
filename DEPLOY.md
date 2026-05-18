# OpenClawTV OS 部署文档

## 架构概览

```
openclawtvos.com
├── Cloudflare Pages（静态托管）
│   ├── /                    → Landing Page（入口）
│   ├── /rtings/             → Rtings Review Tool（SPA）
│   └── /product/            → Product Data Tool（占位页）
│
└── Cloudflare Workers（认证 API）
    ├── POST /api/send-code  → 发送邮箱验证码
    └── POST /api/verify-code → 验证码校验，签发 JWT
```

## 三个 GitHub 仓库

| 仓库 | 内容 | URL |
|------|------|-----|
| **rts.tool** | Rtings Review Tool 源码 | https://github.com/zengxh59/rts.tool |
| **product.tool** | Product Data Tool 源码 | https://github.com/zengxh59/product.tool |
| **website.work** | 部署配置 + 静态页面 + 构建产物 | https://github.com/zengxh59/website.work |

## Cloudflare 资源

| 资源 | 名称 | 说明 |
|------|------|------|
| Pages 项目 | `openclawtvos-site` | 静态页面托管，绑定域名 `openclawtvos.com` |
| Worker | `rtings-auth` | 认证 API，路由 `openclawtvos.com/api/*` |
| KV Namespace | `CODES` (id: `0043d97967c14363920387466f441e12`) | 临时存储验证码 |
| Account ID | `5f8224d401aa5c91fb1d1c312382132f` | Cloudflare 账号 |

## 部署流程

### 部署 Rtings 应用

```bash
# 1. 在 rts.tool 仓库中构建
cd rtings.review.tool
npm run build

# 2. 构建产物自动复制到 website.work/public/rtings/
# 3. 在 website.work 仓库中部署到 Cloudflare Pages
cd ../
npx wrangler pages deploy public --project-name openclawtvos-site
```

### 部署 Worker 认证服务

```bash
cd rtings.review.tool/worker
npm install        # 首次或依赖变更时
npx wrangler deploy
```

### 部署主页或 Product 占位页

直接编辑 `website.work/public/` 下的 HTML 文件，然后：

```bash
npx wrangler pages deploy public --project-name openclawtvos-site
```

## Worker 环境变量

### 公开变量（wrangler.toml `[vars]`）

| 变量 | 值 |
|------|----|
| `ALLOWED_DOMAIN` | `skyworth.com` |
| `SMTP_HOST` | `mail.skyworth.com` |
| `SMTP_PORT` | `465` |
| `SMTP_FROM` | `zengxianhui@skyworth.com` |
| `CODE_EXPIRY_MINUTES` | `5` |
| `RATE_LIMIT_SECONDS` | `30` |

### Secrets（通过 `wrangler secret put` 设置）

| 变量 | 说明 |
|------|------|
| `SMTP_USER` | SMTP 登录用户名 |
| `SMTP_PASS` | SMTP 登录密码 |
| `JWT_SECRET` | JWT 签名密钥（32 字节 hex） |

## 认证流程

1. 用户访问 `/rtings/`，前端展示登录页面
2. 用户输入 `@skyworth.com` 邮箱，前端 POST `/api/send-code`
3. Worker 生成 6 位验证码，存入 KV（TTL 5 分钟），通过 SMTP 发送邮件
4. 用户输入验证码，前端 POST `/api/verify-code`
5. Worker 校验验证码，签发 JWT（有效期 7 天），返回给客户端
6. 客户端将 JWT 存入 `localStorage`，后续页面加载时检查 JWT 有效性

## SPA 路由

- `public/_redirects`：`/rtings/*` → `/rtings/index.html`（Cloudflare Pages SPA 回退）
- `public/_routes.json`：`/api/*` 排除 Pages 处理，由 Worker 接管

## 协作者指南

### 环境准备

1. clone 仓库：`git clone https://github.com/zengxh59/rts.tool.git`
2. 安装依赖：`npm install`
3. 无需任何环境变量或 `.env` 文件（认证由 Cloudflare Workers 处理）

### 本地开发

```bash
npm run dev    # 启动前端开发服务器 (localhost:5173)
```

注意：本地开发时认证 API 不可用（Worker 运行在 Cloudflare 边缘）。可用 `wrangler dev` 单独启动 Worker 进行调试。

### 权限

- **代码提交**：GitHub 仓库 collaborator 权限
- **部署**：需要 Cloudflare 账号（`zengxh59@gmail.com`）的 Workers/Pages 操作权限
- **Worker Secrets**：仅账号管理员可查看/修改
