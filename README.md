# ReactRouter
---

## 💿 React Router Pro: 
Nested Routing & Data FetchingA modern React application demonstrating the power of React Router v6. This project showcases how to build a scalable multi-page application using a centralized layout and optimized data loading.

---

## 🛠️ Project Architecture:

The application uses the Data Router approach (createBrowserRouter), which allows for faster navigation and pre-fetching of data.

### Layout:
The Root Layout StrategyInstead of repeating the Header and Footer on every page, we use a Layout component. The <Outlet /> component acts as a placeholder for the child routes.
### Header:
Remains static at the top.Outlet: Dynamically swaps between Home, About, Contact, GitHub, and User components.
### Footer: 
Remains static at the bottom.🚦 Route ConfigurationPathComponentTypeDescription/HomeStaticThe default landing page./aboutAboutStaticInformation about the project/company./contactContactStaticContact details/form./githubGitHubLoaderFetches profile data before the component renders./user/:userIdUserDynamicCaptures the ID from the URL (e.g., /user/123).

---

## 💡 Key Implementations:
Data Loading (gitInfoLoader)In main.jsx, we use the loader property on the GitHub route. 
This fetches data from the GitHub API via gitInfoLoader exported from the component.
This prevents "loading flicker" because the data is ready before the page even shows up.Centralized Error HandlingWe've implemented an ErrorPage at the root level using the errorElement prop.404s: If a user visits a route that doesn't exist, they see our custom error UI.Crashes: If a component fails to render, the entire app won't go white; the error is caught gracefully.

---

## 📂 File:
Summarymain.jsx The brain of the app. 
Defines the router,
maps paths to components, 
and initializes the RouterProvider.Layout.jsx: The structural wrapper.
Uses <Header />, <Outlet />, and <Footer />.Header.jsx: Contains navigation links using NavLink for automatic "active" class styling.

---

## 🚀 Getting StartedInstall dependencies:

Clone repo
npm install
npm run dev
