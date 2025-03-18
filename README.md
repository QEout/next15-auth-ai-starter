# Next.js 15 + Auth.js + Vercel AI Starter 模板

这是一个基于 [Next.js 15](https://nextjs.org/)、[Auth.js](https://authjs.dev/) 和 [Vercel AI SDK](https://sdk.vercel.ai/docs) 开发的全栈应用模板。该模板提供了现代化的用户认证系统和 AI 功能集成，帮助开发者快速构建支持 AI 的 Web 应用。

## 技术栈特点

- 🚀 **Next.js 15**：采用最新的 Next.js 框架，支持 App Router 和 React Server Components
- 🔐 **Auth.js**：集成强大的认证解决方案，支持多种登录方式
- 🤖 **Vercel AI SDK**：轻松集成 AI 功能，支持流式响应
- 📦 **TypeScript**：提供完整的类型支持，提高代码质量
- 🎨 **Tailwind CSS**：现代化的 CSS 框架，快速构建优美界面
- 💅 **shadcn/ui**：精美的 React 组件库，基于 Radix UI 和 Tailwind CSS
- 🗃️ **Drizzle ORM**：类型安全的 ORM，搭配 Neon Postgres 使用
- 🚅 **Edge Runtime**：支持在边缘运行，提供更快的响应速度

## 快速开始

1. 克隆项目：

```bash
git clone https://github.com/yourusername/next15-auth-ai-starter.git
cd next15-auth-ai-starter
```

2. 安装依赖：

```bash
pnpm install
```

3. 配置环境变量：

复制 `.env.example` 文件为 `.env.local` 并填写必要的环境变量：

```bash
cp .env.example .env.local
```

4. 启动开发服务器：

```bash
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 主要功能

- 📝 用户认证（Email、GitHub、Google 等）
- 🤖 AI 对话接口集成
- 💾 数据库集成与管理
- 🔒 安全的 API 路由
- 🎯 类型安全的数据操作
- 🎨 美观的 UI 组件（基于 shadcn/ui）：
  - 响应式导航栏
  - 深色模式支持
  - 可访问性优化的表单控件
  - 现代化的对话框和弹出提示
  - 动画过渡效果

## 部署

本项目可以一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fnext15-auth-ai-starter)

## 环境变量配置

项目需要配置以下环境变量：

```env
# Auth.js 配置
AUTH_SECRET=your-auth-secret
AUTH_GITHUB_ID=your-github-id
AUTH_GITHUB_SECRET=your-github-secret

# 数据库配置
DATABASE_URL=your-database-url

# AI API 配置
OPENAI_API_KEY=your-openai-api-key
```

## 贡献指南

欢迎提交 Pull Request 和 Issue！在提交之前，请确保：

1. 代码经过格式化
2. 所有测试通过
3. 提交信息清晰明了

## 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

