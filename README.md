# Login with Nuxt - Home Assignment

## Overview

This project is a submission for a frontend engineering position. The task was to create a client-side only Nuxt 3 (or Vue 3) application that allows users to sign up for a product. It uses the [Provet Cloud Design System](https://provetcloud.design/) to match the company’s design language.

The final result is a fully functional, TypeScript-based Nuxt 3 app featuring:

- A responsive signup form with validation
- Toggle visibility for the password input
- Checkbox to subscribe to product updates
- Success confirmation page upon signup
- State persisted using `sessionStorage`
- Page access control using route middleware
- CI pipeline with GitHub Actions
- Deployed via [NuxtHub](https://hub.nuxt.com/) on [nordhealth.nuxt.dev](https://nordhealth.nuxt.dev/)
  - _Site indexing is disabled for this env_

<details>
<summary>Checkout the original task</summary>

> Create a client-side only rendered Nuxt 3 application that allows people to sign up for a product. If you don't have any experience with Nuxt 3, it's OK to only use Vue 3. The form should contain fields for email and password, which should be required and show an error if no value is entered. The password field should have a way to make the password visible. The user should be able to choose to receive occasional product updates and announcements. Once signed up, they should be presented with a success page.
>
> Please use the Provet Cloud Design System ([https://provetcloud.design/]) appropriately.
> Read https://provetcloud.design/web-components/#installation-1 to learn how to use the Provet components in Vue. If possible, use TypeScript; however, JavaScript is also fine."
>
> Looking forward to seeing what you will come up with! Please keep in mind that we're looking for a Senior Frontend Engineer, so the solution should demonstrate such seniority level.
>
> Thank you and I'm looking forward to your response; good luck!

</details>

---

## 🧠 Implementation Notes

### ✅ Features Implemented

- **Form validation** with [zod](https://zod.dev/) schemas
- **Password visibility toggle** implemented with a button adjacent to the password field
- **Opt-in checkbox** for product updates
- **Client-side routing** to a confirmation dashboard
- **Data management via [`pinia`](https://pinia.vuejs.org/)**
- **User data stored in `sessionStorage`** to persist state across routes
- **Middleware** to redirect users based on their authentication state
- **Multiple layouts** used to separate the guest and authenticated views

---

## 🧩 Challenges Faced

### 🧱 1. Working with the Provet Cloud Design System

While the design system is well-documented, using it inside Nuxt 3 was not as seamless as other UI libraries. Key challenges included:

- Custom element registration and SSR-related quirks
- Using deprecated slot notation

### 🔒 2. Password visibility toggle in `provet-input` component

Whilte the Provet `provet-input` component does support injecting a custom button into the end slot, it wasn't clickable. As a workaround, I implemented a custom wrapper component to simulate the same UX, with a toggle button placed adjacent to the input field.

---

## 📁 Project Structure

- `pages/index.vue` - **Guest Landing Page**
- `pages/auth/signup.vue` - **Signup Page**
- `pages/dashboard/index.vue` - **Confirmation Dashboard**
- `layouts/` - Multiple layout definitions for guests and authenticated users
- `middleware/auth.ts` - Route middleware for redirecting based on session state
- `components/PasswordInput.vue` - Custom wrapper with visibility toggle
- `plugins/provet.client.ts` - Registers Provet Cloud web components

---

## 🔧 Running the Project Locally

```bash
pnpm install
pnpm dev
```

Or use npm install / yarn install if preferred.

Visit http://localhost:3000 to explore the app.

---

## ⚙️ CI/CD & Deployment

- CI is set up using GitHub Actions to run checks on each push
- 🚀 Deployed on NuxtHub: https://nordhealth.nuxt.dev/
- 📁 GitHub Repository: https://github.com/gion/nordhealth

---

## ✨ Final Thoughts

This was a thoughtful exercise that demonstrated how to:

- Integrate a specialized design system into a Nuxt 3 project
- Maintain clear separation of concerns through layouts and middleware
- Build a clean, accessible, and user-friendly UI with form validation
- Work around limitations of third-party components with composable design

Looking forward to discussing the technical decisions in more detail!

---

## 👤 Author

Bogdan Gradinariu (Gion)  
Senior Engineer  
[github](https://github.com/gion) | [linkedin](https://www.linkedin.com/in/bogdangradinariu/)
