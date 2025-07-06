## Full-Stack Project: Online Pizza Store

### Summary

Create an e-commerce platform for a pizza store with:

*   **Backend** in Django + Django REST Framework ✅
*   **Frontend** in React, using a bundler 🕐
*   **Styles** with Tailwind CSS ✅
*   **State Management** with Zustand 🕐
*   **Animations** with Framer Motion 🕐
*   **Authentication** with Auth0 ✅
*   **Testing**: Pytest (backend) ✅ and Jest + React Testing Library (frontend) ✅
*   **Containerization** with Docker and Docker Compose ✅
*   **Deployment**: Railway for backend 🕐, Vercel for frontend 🕐, Neon as serverless PostgreSQL ✅
*   **CI/CD** with GitHub Actions 🕐
*   **Best Practices**: ESLint 🕐, Prettier 🕐, Type Hints ✅, Black ✅, Flake8 ✅
*   **Optionals**: WebSockets (Django Channels) 🕐, Celery + Redis 🕐, GraphQL 🕐

---

### 1. Architecture and Technologies

| Layer           | Technology / Tool                                              | Status |
| --------------- | -------------------------------------------------------------- | ------ |
| Backend         | Django, Django REST Framework, PostgreSQL (Neon)               | ✅     |
| Authentication  | Auth0                                                          | ✅     |
| Frontend        | React ✅, Bundler 🕐, Tailwind CSS ✅, Zustand 🕐             |        |
| Animations      | Framer Motion                                                  | 🕐     |
| Testing         | Pytest (backend), Jest + React Testing Library (frontend)      | ✅     |
| Containerization| Docker, Docker Compose                                         | ✅     |
| Infrastructure  | Railway (backend) 🕐, Vercel (frontend) 🕐, Neon (PostgreSQL) ✅ |        |
| CI/CD           | GitHub Actions (lint, tests, build, deploy)                    | 🕐     |
| Linter/Formatter| ESLint 🕐, Prettier 🕐, Black ✅, Flake8 ✅                     |        |
| Optionals       | WebSockets (Django Channels) 🕐, Celery + Redis 🕐, Graphene GraphQL 🕐 |        |

---

### 2. Functional Requirements

1.  **Authentication and Users**
    *   Registration and login with Auth0 ✅
    *   Roles: Admin (store), Customer 🕐
    *   Customer profile with address and contact details ✅

2.  **Products (Pizzas and Complements)**
    *   Product CRUD: name, description, price, categories, image ✅
    *   Search and filters by name, category, or price 🕐
    *   Pagination and sorting in the backend ✅

3.  **Shopping Cart**
    *   Add/remove products with quantity ✅
    *   Total and discount calculation (optional: coupons) 🕐
    *   Cart persistence in backend or LocalStorage 🕐

4.  **Orders**
    *   Checkout: order creation with order lines, address, and payment method ✅
    *   Order statuses: `pending`, `confirmed`, `in_preparation`, `shipped`, `delivered`, `canceled` 🕐
    *   WebSockets for real-time updates (optional) 🕐

5.  **Admin Panel**
    *   Product and order dashboard 🕐
    *   Order status management with action buttons 🕐
    *   Statistics: total sales, orders by status 🕐

6.  **Notifications**
    *   Email notifications to the customer about order status changes 🕐
    *   Frontend notifications using Toasts or WebSocket 🕐

7.  **Automated Tests**
    *   Backend: Pytest for endpoints, models, and business logic ✅
    *   Frontend: Jest + React Testing Library for components and flows ✅

---

### 3. Folder Structure

```bash
/backend
├── Dockerfile
├── compose.yaml
├── manage.py
├── requirements.txt
├── project/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
└── apps/
    ├── users/
    ├── products/
    └── orders/

/frontend
├── Dockerfile
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── public/
└── src/
    ├── index.tsx
    ├── App.tsx
    ├── hooks/        # custom Zustand hooks
    ├── store/        # Zustand state definition
    ├── styles/       # Tailwind styles and configurations
    ├── components/   # UI with Tailwind + Framer Motion
    ├── pages/
    ├── services/     # client API
    └── tests/
```

---

### 4. Repository Structure

To maintain clarity and separation of responsibilities, organize your root repository as follows:

```
pizza-store-project/
├── .github/                  # GitHub Actions configuration
│   └── workflows/
│       ├── lint.yml
│       ├── test.yml
│       └── deploy.yml
├── backend/                  # Django Backend Code
│   ├── Dockerfile
│   ├── compose.yaml
│   ├── manage.py
│   ├── requirements.txt
│   ├── project/
│   │   ├── settings.py
│   │   ├── urls.py
│   │   └── wsgi.py
│   └── apps/
│       ├── users/
│       ├── products/
│       └── orders/
│   ├── .env.example         # Backend Environment Variables
│   └── auth0_config.py      # Optional: Auth0 configuration (audience, domain)
├── frontend/                 # React Frontend Code
│   ├── Dockerfile
│   ├── package.json
│   ├── pnpm-lock.yaml       # If using pnpm
│   ├── tsconfig.json
│   ├── vite.config.ts
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── public/
│   ├── src/
│   │   ├── index.tsx
│   │   ├── App.tsx
│   │   ├── auth/           # Auth0 setup: Auth0Provider, hooks
│   │   ├── hooks/          # Zustand Hooks
│   │   ├── store/          # State Definition
│   │   ├── styles/         # Tailwind configuration and utilities
│   │   ├── components/     # UI Components (shadcn/ui, animations)
│   │   ├── pages/          # Pages and routes (React Router or Next.js)
│   │   ├── services/       # API Client (axios/fetch wrappers)
│   │   ├── utils/          # Utility functions (formatting, validations)
│   │   └── tests/          # Unit and integration tests
│   ├── .env.example        # Frontend Environment Variables (Auth0 credentials)
│   └── tailwind.config.js  # Accessibility and plugin configuration
├── .env.example             # Global variables (if applicable)
├── docker-compose.yml       # Unified Compose for local development
├── Makefile                 # Common commands (build, run, lint, test)
├── README.md                # Project description and quick start guides
└── LICENSE
```

**Key points:**

*   `.env.example` shows necessary variables and how to name them.
*   `.github/workflows` groups your CI/CD pipelines (lint, test, build, deploy).
*   Auth0:

    *   In `frontend/.env`: `VITE_AUTH0_DOMAIN`, `VITE_AUTH0_CLIENT_ID`, `VITE_AUTH0_AUDIENCE`
    *   In `backend/auth0_config.py`: `AUTH0_DOMAIN`, `API_AUDIENCE`, `ALGORITHMS`
*   `Makefile` or npm/pnpm scripts facilitate daily tasks.

---

### 5. Docker and Deployment

*   **Docker Compose**: defines `web` (Django), `db` (remote Neon), `frontend` services ✅
*   **Environment Variables**: Auth0 ✅, Neon DB URL ✅, Stripe secret 🕐, JWT secrets ✅
*   **Railway**: automatic backend deployment from GitHub 🕐
*   **Vercel**: automatic frontend deployment from repository 🕐
*   **Neon**: serverless PostgreSQL cluster ✅

---

### 5. CI/CD (GitHub Actions)

*   **Linting**: Run ESLint and Flake8 🕐
*   **Format**: Prettier and Black 🕐
*   **Tests**: Pytest and Jest 🕐
*   **Build**: Build and publish Docker images 🕐
*   **Deploy**: Push to Railway (backend) and Vercel (frontend) after merge to `main` 🕐

---

### 6. Extensions and Best Practices

*   Use of **Type Hints** in Python ✅ and TypeScript in frontend 🕐
*   Versioned API with DRF ✅
*   Swagger/OpenAPI documentation (drf-yasg) ✅
*   Monitoring with Sentry for errors and performance 🕐
*   Stripe integration for payments 🕐

---

### 7. Learning Roadmap

1.  Initial setup: Docker, Auth0, Vite, Tailwind CSS
2.  Product modeling, cart, and React pages with Zustand
3.  Animations: integrate Framer Motion into key interactions
4.  Checkout and order creation
5.  Admin panel and WebSockets
6.  Unit and integration tests
7.  CI/CD and deployment: GitHub Actions, Railway, Vercel, Neon
8.  Advanced integrations: Stripe, Celery, GraphQL

---

### 8. UI/UX Design

To offer an attractive and easy-to-use experience in your Online Pizza Store, follow these guidelines:

#### 8.1. Design Principles

*   **Clarity and Simplicity**: Clean interface, with defined visual hierarchy. Vital elements (cart, CTA) highlighted with color.
*   **Consistency**: Uniform use of styles in buttons, typographies, spacing, and components.
*   **Accessibility**: Adequate contrast (minimum AA), ARIA labels on interactive elements, and keyboard navigation.
*   **Visual Feedback**: Smooth animations (Framer Motion) for states: hover, click, loading.

#### 8.2. Color Palette

*   **Primary**: #EF4444 (Pizza Red) for CTAs, main buttons, and active states.
*   **Secondary**: #FBBF24 (Cheese Yellow) for accents and highlights.
*   **Neutrals**: #F3F4F6 (Background), #374151 (Main text), #6B7280 (Secondary text).
*   **Success/Error**: #10B981 / #EF4444 for success and error messages.

#### 8.3. Typography

For a modern and consistent experience in React, you can use Google Fonts or a system font stack:

1.  **Primary: Inter** (Google Fonts)

    *   Clean and legible sans-serif.
    *   Recommended for body text.
    *   Includes weights: 400 (Regular), 500 (Medium), 700 (Bold).
    *   Installation:

        ```bash
        npm install @fontsource/inter
        ```
    *   Usage in Tailwind (`tailwind.config.js`):

        ```js
        module.exports = {
          theme: {
            fontFamily: {
              sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
          },
        }
        ```

2.  **Alternative: Roboto** (Google Fonts)

    *   Very common in web and Android interfaces.
    *   Similar weights to Inter.
    *   Installation and configuration same as Inter, using `@fontsource/roboto`.

3.  **System font stack**

    *   For maximum performance and OS consistency:

        ```css
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        ```
    *   Configuration in Tailwind:

        ```js
        module.exports = {
          theme: {
            fontFamily: {
              sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
            },
          },
        }
        ```

**Recommended usage:**

*   To improve FOUC, include `display=swap` in the Google Fonts link.
*   Combine Inter for headings and body, and system stack as a fallback.

#### 8.4. Layout and Navigation

1.  **Fixed Header**: Logo on the left, links to `Home`, `Menu`, `My Cart`, and `Profile`. Show item count in cart. ✅
2.  **Hero/Home**: Large pizza image with "Order Now" CTA. Welcome text and prominent button. ✅
3.  **Menu Page**: Responsive grid (2 columns on mobile, 4 on desktop) of product cards with hover animations (Framer Motion). Each card shows image, name, price, and "Add to Cart" button. 🕐
4.  **Cart**: Slide-in panel from the right. List of items with small animations when adding/removing. Fixed "Checkout" button at the bottom. ✅
5.  **Checkout**: Address and payment method form in two steps. Progress bar at the top. ✅
6.  **Profile/Order History**: List of orders with status in a colored tag. Button to view details. ✅
7.  **Admin Dashboard**: Collapsible sidebar with `Products`, `Orders`, `Statistics` sections. In the main area, tables with filters and sales charts. 🕐

#### 8.5. Key Components

*   **Primary Button**: bg-primary text-white rounded-lg py-2 px-4 shadow-sm hover\:shadow-md transition
*   **Product Card**: bg-white rounded-xl overflow-hidden shadow-sm hover\:scale-105 transition transform
*   **Input/Forms**: border border-gray-300 rounded-md p-2 focus\:outline-none focus\:ring-2 focus\:ring-primary
*   **Status Badge**: px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 (adjustable by status)

#### 8.6. Animations with Framer Motion

*   **Enter and Exit**: `initial={{ opacity: 0, y: 20 }}` `animate={{ opacity: 1, y: 0 }}`
*   **Hover**: `whileHover={{ scale: 1.05 }}`
*   **Loading**: Animated spinner on button with smooth `rotateY`.

#### 8.7. Accessibility

*   **ARIA Roles**: `role="button"`, `aria-label` on icons.
*   **Keyboard Nav**: `tabIndex` on interactive elements.
*   **Contrast**: Verify with `@tailwindcss/a11y` plugin.

#### 8.8. Icons

To enrich your UI with consistent and lightweight iconography, you can use:

1.  **react-icons**

    *   Internationally popular, includes sets like FontAwesome, Material, Feather, etc.
    *   Installation: `npm install react-icons`
    *   Usage: `import { FaPizzaSlice } from 'react-icons/fa'`

2.  **Heroicons** (`@heroicons/react`)

    *   Official from Tailwind Labs, designed for Tailwind CSS.
    *   Installation: `npm install @heroicons/react`
    *   Usage: `import { ShoppingCartIcon } from '@heroicons/react/outline'`

3.  **lucide-react**

    *   Derived from Feather Icons, more customizable.
    *   Installation: `npm install lucide-react`
    *   Usage: `import { Pizza, User } from 'lucide-react'`

4.  **shadcn/ui Icons**

    *   Part of the shadcn/ui library, ready to use with Tailwind.
    *   Installation: Included with the `shadcn/ui` package.
    *   Usage: `import { IconName } from '@/components/ui/icons'`

**Recommendation:** Choose a primary one (e.g., Heroicons if using Tailwind) and complement with lucide-react for more specific icons. Maintain the same stroke style and thickness throughout the app.
