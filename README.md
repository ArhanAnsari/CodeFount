# Code Craft - SaaS Code Editor - Next.js 15

![Demo App](/public/screenshot-for-readme.png)
![Next.js](https://img.shields.io/badge/Next.js-15.0-blue)
![Convex](https://img.shields.io/badge/Convex-Framework-yellow)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-green)
![TypeScript](https://img.shields.io/badge/TypeScript-4.x-blue)

<img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=react&color=3178C6" alt="typescript" />
<img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
<img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
<img src="https://img.shields.io/badge/-Sanity-black?style=for-the-badge&logoColor=white&logo=sanity&color=F03E2F" alt="sanity" />
<img src="https://img.shields.io/badge/-Lemon_Squeezy-black?style=for-the-badge&logoColor=white&logo=lemonsqueezy&color=FCD34D" alt="lemon squeezy" />

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)

## <a name="introduction">🤖 Introduction</a>

**Code Craft** is a powerful online integrated development environment (IDE) built with modern technologies to streamline coding and collaboration. Designed for developers, it supports multi-language programming, offers advanced customization, and provides a seamless coding experience. 


### <a name="tech-stack">⚙️ Tech Stack</a>
- **React 19**
- **Next.js 15**: The foundation of the project, ensuring high performance and scalability.
- **Convex**: Provides a robust backend for real-time data handling.
- **Clerk**: Simplifies user authentication and management.
- **TypeScript**: Ensures type safety and improved developer experience.
- **Tailwind CSS**: Offers a customizable and responsive UI.
- **Sentry**: Offers Error & Bug Tracking.
- **Lemon Squeezy**: For payment.

## <a name="features">🔋 Features</a>

👉 **🚀 Cutting-Edge Tech Stack**: Built with Next.js 15, Convex, Clerk, and TypeScript.
👉 **💻 Multi-Language Support**: Code in 10 different programming languages.
👉 **🎨 Customizable Experience**: Choose from 5 VSCode-inspired themes.
👉 **✨ Smart Output Handling**: Display Success & Error states for code execution.
👉 **💎 Flexible Pricing**: Free and Pro plans tailored to your needs.
👉 **🤝 Community-Driven Sharing**: Share and discover code snippets.
👉 **🔍 Advanced Search**: Filter and search for specific snippets or projects.
👉 **👤 Personal Profiles**: Track execution history and user statistics.
👉 **📊 Dashboard**: View comprehensive usage statistics.
👉 **⚙️ Font Size Control**: Customize your coding experience.
👉 **🔗 Webhook Integration**: Seamlessly connect with external tools.
👉 **🌟 Deployment Guide**: Step-by-step instructions for deploying your app.

## <a name="quick-start">🤸 Quick Start</a>

### Prerequisites

To run this project, ensure you have the following installed:

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/ArhanAnsari/CodeCraft.git
   cd CodeCraft
   ```

2. Install dependencies:

   ```shell
   npm install
   ```

### Configuration

1. Create a `.env` file in the root directory and add the following environment variables:

   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=

   CLERK_WEBHOOK_SECRET=
   LEMON_SQUEEZY_WEBHOOK_SECRET=
   ```

2. Configure additional secrets in the Convex Dashboard:

   ```env
   CLERK_WEBHOOK_SECRET=
   LEMON_SQUEEZY_WEBHOOK_SECRET=
   ```

3. Set up Convex:
   - Install the Convex CLI:
     ```shell
     npm install -g convex
     ```
   - Login to your Convex account:
     ```shell
     convex login
     ```
   - Initialize Convex in your project:
     ```shell
     convex init
     ```
   - Deploy your Convex functions:
     ```shell
     convex deploy
     ```
   - Copy the Convex deployment URL and add it to your `.env` file under `CONVEX_DEPLOYMENT`.

### Running the Application

Start the development server:

```shell
npm run dev
```

Visit `http://localhost:3000` to explore the application.

## Deployment

Follow the comprehensive deployment walkthrough provided in the app to set up your SaaS Code Editor on a production server.

## Contributions

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Support

For any issues or feature requests, please [open an issue](https://github.com/ArhanAnsari/CodeCraft/issues) in the repository.

---

Enjoy using the Code Craft! 🚀
