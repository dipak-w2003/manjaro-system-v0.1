# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```


# UUID
The uuid library supports multiple UUID versions

- To add the uuid library to your project, use the following commands:
```bash
npm install --save-dev @types/uuid
```
- For TypeScript projects, install the type definitions:
```npm install --save-dev @types/uuid
```
- Syntax & useCase
```ts
import { v1 as uuidv1, v4 as uuidv4 } from 'uuid';
// Generate a timestamp-based UUID
const uuidV1 = uuidv1(); 
// Generate a random UUID
const uuidV4 = uuidv4(); 
console.log('UUID v1:', uuidV1);
console.log('UUID v4:', uuidV4);
```
- UUIDs in React
```tsx
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
const App = () => {
  const [ids, setIds] = useState<string[]>([]);
  const generateUUID = () => {
    const newId = uuidv4();
    setIds((prev) => [...prev, newId]);
  };

  return (
    <div>
      <h1>UUID Generator</h1>
      <button onClick={generateUUID}>Generate UUID</button>
      <ul>
        {ids.map((id) => (
          <li key={id}>{id}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
```
# BrowserStorage(session,local,index,cookies else) Data Update issue to UI
Storage which holds up our data in the string format with the limited storage(approximately 10Mib).
- ⁉️ Unlike vanilla projects like SPA does not loads BrowserStorage data dynamically or does loads but after refreshing then it can be dynamically shown on UI.
 ### Solution (customHook.ts):
 export const isBootedKey: string = "isBooted";
``` ts
// Function to set "isBooted" to true in sessionStorage
export const setIsBooted = (): void => {
    sessionStorage.setItem(isBootedKey, JSON.stringify(true));
};

// Function to clear "isBooted" from sessionStorage
export const setNotBooted = (): void => {
    sessionStorage.removeItem(isBootedKey);
    // Corrected from `clearItem` to `removeItem`
};

// Function to get "isBooted" from sessionStorage and parse it
export const getIsBooted = (): boolean => {
    const item = sessionStorage.getItem(isBootedKey);
    return item ? JSON.parse(item) === true : false;
};
```  
- Then it can be accessable directly without refreshing the page.




# React Toastify
React Toastify is a popular library used in React applications for displaying customizable toast notifications. It is easy to use and allows you to add notifications to your project with minimal setup.

## Installation
- To install React Toastify, run the following command:
```bash
npm install react-toastify
```
- or Using Yan:
```bash
yarn add react-toastify
```

## Basic Usage
- Import Styles: Import the toastify CSS file in your project (typically in your main entry point).
- Use the ToastContainer: Add the ToastContainer component to your app.
- Trigger Notifications: Use the toast method to display a toast.

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const notify = () => toast("This is a toast notification!");

  return (
    <div>
      <button onClick={notify}>Show Toast</button>
      <ToastContainer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
```
## Toast Types
You can display different types of notifications using the methods provided:
- toast.success("Success message!")
- toast.error("Error message!")
- toast.info("Info message!")
- toast.warning("Warning message!")
Example
```tsx 
<button onClick={() => toast.success("Success!")}>Success Toast</button>
<button onClick={() => toast.error("Error!")}>Error Toast</button>
```

## Custom Configuration
You can customize toast notifications with options like position, auto-close duration, and more.
```tsx
toast("Custom Toast!", {
  position: "top-right", 
  // Default: "top-right"
  autoClose: 5000,      
  // Time in ms, Default: 5000
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});
```

## ToastContainer Props 
You can also set global configurations via the ToastContainer component.
```tsx
<ToastContainer
  position="bottom-left"
  autoClose={3000}
  hideProgressBar
  newestOnTop
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
/>
```
## Examples
### 1. Success Notification with Custom Options:
```tsx
toast.success("Operation successful!", {
  position: "top-center",
  autoClose: 2000,
});
```
### 2. Notification Error:
```tsx
toast.error("Something went wrong!", {
  position: "bottom-right",
});
```
### 3. Custom JSX in Toast:
```tsx
toast(<div>Custom <strong>Content</strong>!</div>);
```
## Full Example:
```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = () => {
    toast.success("Success Notification!", { autoClose: 3000 });
    toast.error("Error Notification!", { autoClose: 5000 });
    toast.info(<div>Custom JSX Notification!</div>, { autoClose: 4000 });
  };

  return (
    <div>
      <button onClick={notify}>Show Notifications</button>
      <ToastContainer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
```



# React Icons Type - TypeScript
In TypeScript, React Icons are treated as React components. When you're using React Icons (e.g., from the react-icons package), the type of an individual icon is React.ComponentType<React.SVGProps<SVGSVGElement>>.

Here's a breakdown:
- React.ComponentType: This represents a generic React component type.
- React.SVGProps<SVGSVGElement>: This represents the properties that can be passed to an SVG element.

## Example (Normal Usecase):
```tsx
import { ReactNode } from "react";
import { SiGnome } from "react-icons/si";
let Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> = SiGnome;
// Or if you have a variable holding the JSX directly:
let IconNode: ReactNode = <SiGnome />;
```

## Example (Redux & Toolkit)
- Note 🎈 : This error occurs because Redux enforces immutability and serialization of state. Non-serializable values, such as functions or React components, should not be stored in the Redux state. In your case, you're trying to store the desktopIcon, which is a React component (a function), in the Redux store.
- Error ⁉️: A non-serializable value was detected in the state, in the path: `activeUser.desktopIcon`. Value: 
function SiGnome(props) 
Take a look at the reducer(s) handling this action type: `activeUser/setUser`.
(See https://redux.js.org/faq/
organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)
    at checkSerializableValue (redux-toolkit.esm.js:12:145)
    at middleware (redux-toolkit.esm.js:11:257)
    at dispatch (redux-toolkit.esm.js:9:23)
    at setUser (UserComponent.jsx:42)
    at handleClick (UserComponent.jsx:15)
    at onClick (index.js:17)
    at HTMLButtonElement.dispatch (react-dom.js:13)
    at HTMLButtonElement.handle (react-dom.js:12)
    less

## Non/Serializtion Redux/Toolkit
```jsx
// ? Wrong Code: Non-serializable state in Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';
import { SiGnome } from 'react-icons/si';
// Initial state with non-serializable value (React component)
const initialState = {
    activeUser: {
        id: 'user123',
        username: 'Naruto',
        desktopIcon: <SiGnome />, 
        // React component directly in state
    },
};

const userSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        setUser(state, action) {
            state.activeUser = action.payload;
        },
    },
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer; 
```

## Right Code  Serialization
```tsx

// ? Correct Code: Storing serializable values in Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// Map icon names to identifiers
const iconMap = {
    gnome: 'gnome-icon',
    kde: 'kde-icon',
};

// Initial state with serializable values
const initialState = {
    activeUser: {
        id: 'user123',
        username: 'Naruto',
        desktopIcon: 'gnome', 
        // Store string identifier
    },
};

const userSlice = createSlice({
    name: 'activeUser',
    initialState,
    reducers: {
        setUser(state, action) {
            state.activeUser = action.payload; 
            // Payload should be serializable
        },
    },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

// Render icon dynamically
import { SiGnome, SiKde } from 'react-icons/si';

const iconComponents = {
    gnome: SiGnome,
    kde: SiKde,
};

export const RenderIcon = ({ iconKey }) => {
    const Icon = iconComponents[iconKey];
    return Icon ? <Icon /> : null;
};
```

