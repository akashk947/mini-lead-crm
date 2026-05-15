###React + TypeScript

I used React with TypeScript to build a scalable and component-based frontend architecture. TypeScript improves type safety, maintainability, and developer experience, especially for handling lead models, API responses, and status transitions.

### TanStack Query

TanStack Query was used for server-state management because it provides caching, automatic refetching, optimistic updates, loading states, and mutation handling out of the box. It helped separate server state from UI state cleanly.

### Tailwind CSS

Tailwind CSS was chosen for rapid UI development and consistent design implementation. It enabled building a modern SaaS-style CRM dashboard with reusable utility classes, responsive layouts, and clean spacing without writing large CSS files.

### React Hook Form + Zod

React Hook Form was used for performant form handling with minimal re-renders. Zod was integrated for schema-based validation to ensure strong client-side validation for lead creation and editing.

### Mock API (Express/json-server)

A mock API was implemented using Express/json-server to simulate real CRUD operations and asynchronous workflows. This allowed frontend features like optimistic updates, loading states, and error handling to behave similarly to a production environment.

---

# Setup Steps

## Clone Repository

```bash id="kzmdpb"
git clone https://github.com/yourusername/mini-lead-crm.git
```

## Frontend Setup

```bash id="q1wz4l"
cd client
npm install
npm run dev
```

## Mock Server Setup

Open another terminal:

```bash id="jlwm11"
cd mock-server
npm install
npm run generate
npm start
```

---

# Design Decisions

## Component, State, and Async Logic Organization

The project follows a modular folder structure where layouts, pages, reusable UI components, API logic, hooks, and utility functions are separated clearly. Server-side asynchronous state is managed using TanStack Query, form state is managed with React Hook Form, and lightweight UI state is handled locally or through Zustand where needed.

## Status Rule Enforcement in UI

Lead status transitions are controlled through a centralized utility function that defines valid transitions for each status. Invalid actions are never rendered in the UI, ensuring users can only perform valid transitions visually instead of relying solely on backend validation.

## Offline Support / Concurrent Edit Handling

If given more time, I would implement offline caching using IndexedDB and service workers for offline support. For concurrent editing, I would introduce optimistic concurrency control using timestamps/versioning and WebSocket synchronization to prevent conflicting updates between multiple users.

## Improvements Given Another Week

With additional time, I would improve accessibility, add advanced filters and sorting, implement activity timelines, improve board drag-and-drop interactions, add undo/redo functionality, and optimize large dataset rendering further using virtualization and memoization techniques.

---

# AI Usage Note

AI tools were used primarily for brainstorming architecture ideas, improving code organization, and accelerating boilerplate generation. I intentionally implemented core business logic such as status transition validation, component structure, routing, state management decisions, and UI customization manually to ensure full understanding of the application. I also reviewed and modified AI-generated suggestions wherever they did not align with the project requirements or desired design quality.

---

# .gitignore

```txt id="jlwm22"
node_modules
dist
.env
.vscode
coverage
.DS_Store
```
