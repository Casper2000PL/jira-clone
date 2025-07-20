# 📋 Jira Clone – Project Management Platform

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)

</div>

A modern, full-featured project management platform inspired by Jira. Built with Next.js, TypeScript, and Appwrite, it offers advanced task tracking, team collaboration, and analytics in a responsive and modular architecture.

## 🚀 Features

### 🔧 Core Functionality
- **Authentication System** – Email/password, OAuth, and session management
- **Workspace Management** – Multi-tenant workspaces with invite-based access
- **Project Management** – Nested under workspaces with full CRUD support
- **Task System** – Organize, assign, and track tasks with filters and views
- **Team Collaboration** – Invite members, manage roles, and monitor contributions

### ⚡ Advanced Capabilities
- **Multiple View Modes** – Kanban, calendar, and table views
- **Analytics Dashboard** – Charts and insights on project progress
- **Bulk Operations** – Update multiple tasks in a single action
- **Real-time Updates** – Live sync across users
- **Responsive Design** – Fully optimized for all screen sizes

## 🛠️ Tech Stack

### Frontend
- **Next.js 14** – App Router-based React framework
- **React & TypeScript** – Component-driven, type-safe architecture
- **Tailwind CSS** – Utility-first styling
- **shadcn/ui** – Accessible and customizable UI components
- **React Query** – API state and caching

### Backend & Services
- **Hono.js** – Lightweight API framework (via App Router `route.ts`)
- **Appwrite** – Authentication, database, and storage backend
- **Server Actions** – For secure server-side interactions

### Tooling
- **Bun** – Fast JavaScript runtime and package manager
- **ESLint** – Code quality enforcement
- **PostCSS** – CSS preprocessing and Tailwind integration

## 📁 Project Structure (Updated)

```
jira-clone/
├── .eslintrc.json
├── .gitignore
├── bun.lock
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── public/
│   └── logo.svg
├── README.md
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   │   ├── error.tsx
│   │   │   ├── laoding.tsx
│   │   │   ├── layout.tsx
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx
│   │   │   └── sign-up/
│   │   │       └── page.tsx
│   │   ├── (dashboard)/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── workspaces/
│   │   │       └── [workspaceId]/
│   │   │           ├── client.tsx
│   │   │           ├── page.tsx
│   │   │           ├── projects/
│   │   │           │   └── [projectId]/
│   │   │           │       ├── client.tsx
│   │   │           │       └── page.tsx
│   │   │           └── tasks/
│   │   │               ├── [taskId]/
│   │   │               │   ├── client.tsx
│   │   │               │   └── page.tsx
│   │   │               └── page.tsx
│   │   ├── (standalone)/
│   │   │   ├── error.tsx
│   │   │   ├── laoding.tsx
│   │   │   ├── layout.tsx
│   │   │   └── workspaces/
│   │   │       ├── [workspaceId]/
│   │   │       │   ├── join/
│   │   │       │   │   └── [inviteCode]/
│   │   │       │   │       ├── client.tsx
│   │   │       │   │       └── page.tsx
│   │   │       │   ├── members/
│   │   │       │   │   └── page.tsx
│   │   │       │   ├── projects/
│   │   │       │   │   └── [projectId]/
│   │   │       │   │       └── settings/
│   │   │       │   │           ├── client.tsx
│   │   │       │   │           └── page.tsx
│   │   │       │   └── settings/
│   │   │       │       ├── client.tsx
│   │   │       │       └── page.tsx
│   │   │       └── create/
│   │   │           └── page.tsx
│   │   ├── api/
│   │   │   └── [[...route]]/
│   │   │       └── route.ts
│   │   ├── error.tsx
│   │   ├── favicon.ico
│   │   ├── fonts/
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── laoding.tsx
│   │   ├── layout.tsx
│   │   └── oauth/
│   │       └── route.ts
│   ├── components/
│   │   ├── analytics-card.tsx
│   │   ├── analytics.tsx
│   │   ├── date-picker.tsx
│   │   ├── dotted-separator.tsx
│   │   ├── mobile-sidebar.tsx
│   │   ├── navbar.tsx
│   │   ├── navigation.tsx
│   │   ├── page-error.tsx
│   │   ├── page-loader.tsx
│   │   ├── projects.tsx
│   │   ├── query-provider.tsx
│   │   ├── responsive-modal.tsx
│   │   ├── sidebar.tsx
│   │   ├── ui/
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── textarea.tsx
│   │   └── workspace-switcher.tsx
│   ├── config.ts
│   ├── features/
│   │   ├── auth/
│   │   │   ├── api/
│   │   │   │   ├── use-current.ts
│   │   │   │   ├── use-login.ts
│   │   │   │   ├── use-logout.ts
│   │   │   │   └── use-register.ts
│   │   │   ├── components/
│   │   │   │   ├── join-workspace-form.tsx
│   │   │   │   ├── sign-in-card.tsx
│   │   │   │   ├── sign-up-card.tsx
│   │   │   │   └── user-button.tsx
│   │   │   ├── constants.ts
│   │   │   ├── queries.ts
│   │   │   ├── schemas.ts
│   │   │   └── server/
│   │   │       └── route.ts
│   │   ├── members/
│   │   │   ├── api/
│   │   │   │   ├── use-delete-member.ts
│   │   │   │   ├── use-get-members.ts
│   │   │   │   └── use-update-member.ts
│   │   │   ├── components/
│   │   │   │   └── member-avatar.tsx
│   │   │   ├── server/
│   │   │   │   └── route.ts
│   │   │   ├── types.ts
│   │   │   └── utils.ts
│   │   ├── projects/
│   │   │   ├── api/
│   │   │   │   ├── use-create-project.ts
│   │   │   │   ├── use-delete-project.ts
│   │   │   │   ├── use-get-project-analytics.ts
│   │   │   │   ├── use-get-project.ts
│   │   │   │   ├── use-get-projects.ts
│   │   │   │   └── use-update-project.ts
│   │   │   ├── components/
│   │   │   │   ├── create-project-form.tsx
│   │   │   │   ├── create-project-modal.tsx
│   │   │   │   ├── edit-project-form.tsx
│   │   │   │   └── project-avatar.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-create-project-modal.ts
│   │   │   │   └── use-project-id.ts
│   │   │   ├── queries.ts
│   │   │   ├── schemas.ts
│   │   │   ├── server/
│   │   │   │   └── route.ts
│   │   │   └── types.ts
│   │   ├── tasks/
│   │   │   ├── api/
│   │   │   │   ├── use-bulk-update-tasks.ts
│   │   │   │   ├── use-create-task.ts
│   │   │   │   ├── use-delete-task.ts
│   │   │   │   ├── use-get-task.ts
│   │   │   │   ├── use-get-tasks.ts
│   │   │   │   └── use-update-task.ts
│   │   │   ├── components/
│   │   │   │   ├── columns.tsx
│   │   │   │   ├── create-task-form-wrapper.tsx
│   │   │   │   ├── create-task-form.tsx
│   │   │   │   ├── create-task-modal.tsx
│   │   │   │   ├── data-calendar.css
│   │   │   │   ├── data-calendar.tsx
│   │   │   │   ├── data-filters.tsx
│   │   │   │   ├── data-kanban.tsx
│   │   │   │   ├── data-table.tsx
│   │   │   │   ├── edit-task-form-wrapper.tsx
│   │   │   │   ├── edit-task-form.tsx
│   │   │   │   ├── edit-task-modal.tsx
│   │   │   │   ├── event-card.tsx
│   │   │   │   ├── kanban-card.tsx
│   │   │   │   ├── kanban-column-header.tsx
│   │   │   │   ├── overview-property.tsx
│   │   │   │   ├── task-actions.tsx
│   │   │   │   ├── task-breadcrumbs.tsx
│   │   │   │   ├── task-date.tsx
│   │   │   │   ├── task-description.tsx
│   │   │   │   ├── task-overview.tsx
│   │   │   │   └── task-view-switcher.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-create-task-modal.ts
│   │   │   │   ├── use-edit-task-modal.ts
│   │   │   │   ├── use-task-filters.ts
│   │   │   │   └── use-task-id.ts
│   │   │   ├── schemas.ts
│   │   │   ├── server/
│   │   │   │   └── route.ts
│   │   │   └── types.ts
│   │   └── workspaces/
│   │       ├── api/
│   │       │   ├── use-create-workspace.ts
│   │       │   ├── use-delete-workspace.ts
│   │       │   ├── use-get-workspace-analytics.ts
│   │       │   ├── use-get-workspace-info.ts
│   │       │   ├── use-get-workspace.ts
│   │       │   ├── use-get-workspaces.ts
│   │       │   ├── use-join-workspace.ts
│   │       │   ├── use-reset-invite-code.ts
│   │       │   └── use-update-workspace.ts
│   │       ├── components/
│   │       │   ├── create-workspace-form.tsx
│   │       │   ├── create-workspace-modal.tsx
│   │       │   ├── edit-workspace-form.tsx
│   │       │   ├── members-list.tsx
│   │       │   └── workspace-avatar.tsx
│   │       ├── hooks/
│   │       │   ├── use-create-workspace-modal.ts
│   │       │   ├── use-invite-code.ts
│   │       │   └── use-workspace-id.ts
│   │       ├── queries.ts
│   │       ├── schemas.ts
│   │       ├── server/
│   │       │   └── route.ts
│   │       └── types.ts
│   ├── hooks/
│   │   └── use-confirm.tsx
│   └── lib/
│       ├── appwrite.ts
│       ├── oauth.ts
│       ├── rpc.ts
│       ├── session-middleware.ts
│       └── utils.ts
├── tailwind.config.ts
└── tsconfig.json

```

## 📸 Screenshots

### 🔐 Authentication
<img width="1912" height="856" alt="obraz" src="https://github.com/user-attachments/assets/7ef8a2aa-f753-448e-b574-3db2d70e94b7" />

### 🧠 Dashboard
<img width="1885" height="846" alt="obraz" src="https://github.com/user-attachments/assets/8242b855-2d51-4490-bda3-c6efa891dcdb" />

### 🧩 Kanban Board
<img width="1905" height="840" alt="obraz" src="https://github.com/user-attachments/assets/53b88ff3-9d0a-4c97-a028-1f1aaa5bd8fc" />

### 🗓️ Calendar
<img width="1884" height="844" alt="obraz" src="https://github.com/user-attachments/assets/decc7a76-9e61-4c89-9ea6-9945f36b0a1a" />

### 📊 Analytics
<img width="1891" height="855" alt="obraz" src="https://github.com/user-attachments/assets/9242b10d-69a2-4603-abf4-61bc48117773" />

## ⚙️ Getting Started

### Prerequisites

- **Node.js** ≥ v18
- **Bun** (recommended) or `npm`, `yarn`, or `pnpm`
- **Appwrite** account and project

### 🔧 Appwrite Setup

1. **Create Project** – Log in to [Appwrite Cloud](https://cloud.appwrite.io/) or self-host and create a new project.
2. **Database Collections** – Create the following:
   - `Workspaces`
   - `Members`
   - `Projects`
   - `Tasks`
3. **Storage** – Create a storage bucket for file uploads.
4. **API Key** – Generate a server key with required permissions.
5. **OAuth (Optional)** – Set up providers and redirect URLs.

   - Go to **Authentication → OAuth2** in your Appwrite console and enable the providers you want (e.g., GitHub, Google).
   - Enter the client ID and client secret from each provider.
   - For redirect URLs, use the format:  
     `https://cloud.appwrite.io/v1/account/sessions/oauth2/callback/{provider}`
   - ⚠️ If Appwrite gives you a region-prefixed URL like  
     `https://fra.cloud.appwrite.io/v1/account/sessions/oauth2/callback/github/123456`,  
     **remove the region subdomain (`fra`)** so it matches your `NEXT_PUBLIC_APPWRITE_ENDPOINT`.
   - Make sure to add the same callback URL in your provider's settings (e.g., GitHub OAuth app dashboard).


This ensures OAuth redirection works properly.
## 📦 Installation

```bash
# Clone repo
git clone https://github.com/Casper2000PL/jira-clone.git
cd jira-clone

# Install dependencies (Bun recommended)
bun install
# or: npm install / yarn install / pnpm install
```

### 🔑 Environment Setup

Create a `.env.local` file with:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=your_project_id
NEXT_PUBLIC_APPWRITE_DATABASE_ID=your_database_id

NEXT_PUBLIC_APPWRITE_WORKSPACES_ID=your_workspaces_collection_id
NEXT_PUBLIC_APPWRITE_MEMBERS_ID=your_members_collection_id
NEXT_PUBLIC_APPWRITE_PROJECTS_ID=your_projects_collection_id
NEXT_PUBLIC_APPWRITE_TASKS_ID=your_tasks_collection_id

NEXT_PUBLIC_APPWRITE_IMAGES_BUCKET_ID=your_images_bucket_id
NEXT_APPWRITE_KEY=your_server_api_key
```

## ▶️ Run Dev Server

```bash
# Start with Bun
bun dev

# or: npm run dev / yarn dev / pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📱 Usage Guide

### Basic Flow
1. **Register/Login** – Create an account or sign in
2. **Create Workspace** – Start your first workspace
3. **Invite Members** – Collaborate with others
4. **Add Projects** – Organize initiatives
5. **Create & Track Tasks** – Use boards, filters, and calendar

### Views & Tools
- 🧩 **Kanban** – Drag & drop task cards
- 🗓 **Calendar** – Visual scheduling
- 📊 **Analytics** – Visualize metrics
- 🧮 **Bulk Actions** – Edit many tasks efficiently

## 🎯 Feature Overview

### 🔐 Auth & Access
- Email/password + OAuth
- Session & token handling
- Role-based permissions

### 🧑‍🤝‍🧑 Workspace System
- Multi-tenant setup
- Invite flows with join links
- Member roles & settings

### ✅ Task Management
- Status, assignees, deadlines
- Priorities, labels, comments
- Multiple visual views

### 📈 Insights
- Charts by task status, users, dates
- Project completion metrics
- Filterable dashboards

## 🚀 Deployment

### ☁️ Vercel (Recommended)

1. Link GitHub repo
2. Add environment variables in Vercel settings
3. Deploy with every commit

### Other Options

- **Netlify**
- **Railway**
- **DigitalOcean App Platform**

## 🤝 Contributing

1. Fork this repo
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit: `git commit -m "Add my feature"`
4. Push: `git push origin feature/my-feature`
5. Open a Pull Request

## 📝 License

Licensed under the **MIT License** – see [`LICENSE`](LICENSE)

## 🙌 Credits

Originally inspired by [Antonio Erdeljac](https://github.com/antonioerdeljac)'s tutorial.

🎥 **Tutorial**: [Build a Jira Clone With Next.js, Tailwind, Appwrite, Hono.js](https://www.youtube.com/watch?v=Av9C7xlV0fA)

## 📞 Support

- 💬 [GitHub Issues](https://github.com/Casper2000PL/jira-clone/issues)
- 📚 Documentation (see this README)
- 🎥 [Video Tutorial](https://www.youtube.com/watch?v=Av9C7xlV0fA)

<div align="center">

**Built with ❤️ using Next.js, Tailwind, and Appwrite**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Open Source](https://img.shields.io/badge/Open%20Source-💚-green?style=for-the-badge)

</div>
