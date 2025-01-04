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
- ⁉️ Unlike vanilla projects like SPA does not loads [BrowserStorage] data dynamically or does loads but after refreshing then it can be dynamically shown on UI.
 ### Solution ([customHook.ts]):
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
