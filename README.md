# Mini Event Manager

A small event manager app built with **Next.js**, **Tailwind CSS**, and **Framer Motion** inside a [Turborepo](https://turbo.build/repo).

The app allows you to:
- Add events with a **name** and **date**
- View a list of events
- Delete events
- Search events by name
- Data persists in **localStorage**

The landing page includes a spotlight effect built with **Framer Motion**, and a button to navigate to the `/events` page.

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone 
cd mini-event-manager
```

### 2. Install Dependencies

We use [pnpm](https://pnpm.io/) for package management:

```bash
pnpm install
```

### 3. Run the App

Start the `mini-events` app in dev mode:

```bash
pnpm turbo run dev --filter=mini-events
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Project Structure

```
mini-event-manager/
├── apps/
│   └── mini-events/       # Next.js app for Mini Event Manager
│       ├── app/
│       │   ├── page.tsx   # Landing page (Spotlight + Button)
│       │   └── events/    # Events page with form + list
│       └── package.json
├── package.json
└── turbo.json
```

---

## 🛠️ Tech Stack

* **Next.js (App Router)**
* **React**
* **Tailwind CSS**
* **Framer Motion**
* **pnpm + Turborepo**

---

## ✨ Features

* `/` (Landing Page)

  * Spotlight effect (Framer Motion)
  * Description of the app
  * "Go to Events" button → redirects to `/events`

* `/events`

  * Form with **Event Name** and **Date** (both required)
  * Add new events
  * Display list of events
  * Delete button for each event
  * Search filter
  * Data saved in `localStorage`
  * Mobile-friendly UI with Tailwind

---

## ⚡ Scripts

Run inside the repo root:

```bash
# Install dependencies
pnpm install

# Run dev server for mini-events app
pnpm turbo run dev --filter=mini-events

# Build
pnpm turbo run build --filter=mini-events
```

---

## 📸 Preview

Landing Page (Spotlight effect + Button):
➡ `/`

Events Manager Page:
➡ `/events`

---
