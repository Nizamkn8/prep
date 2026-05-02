# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

src/
│
├── assets/              # images, icons
│
├── components/          # reusable UI components
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Loader.jsx
│   │   ├── Modal.jsx
│   │   └── Pagination.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   └── MainLayout.jsx
│
├── pages/               # route-based pages
│   ├── Home.jsx
│   ├── Users.jsx
│   ├── UserDetails.jsx
│   ├── Form.jsx
│   ├── FormWizard.jsx
│   ├── Search.jsx
│   └── NotFound.jsx
│
├── hooks/               # custom hooks
│   ├── useFetch.js
│   ├── useDebounce.js
│
├── context/             # global state (Context API)
│   └── AuthContext.jsx
│
├── services/            # API calls
│   └── userService.js
│
├── routes/              # route config (optional but pro-level)
│   └── AppRoutes.jsx
│
├── utils/               # helper functions
│   └── helpers.js
│
├── App.jsx
├── main.jsx
└── index.css

<!--
  loadmore/load less - scroll
  form validation
  search/debounce search
  user details - page with dynamic routing
  api fetching
 -->
