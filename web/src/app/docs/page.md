# ZabUI React Components Library

ZabUI is a React components library that helps you build your web application faster and easier. It provides a set of reusable components that you can use to create your user interface. ZabUI is designed to be easy to use and customize, so you can focus on building your application instead of spending time on styling and layout.

## Installation
To install ZabUI, you can use npm or yarn:

```bash
npm install @zabui/comps
```

or

```bash
yarn add @zabui/comps
```

## Usage

To use ZabUI components in your React application, you need to import the components you want to use from the `@zabui/comps` package. For example, to use the `Button` component, you can import it like this:

```javascript
import { Button } from '@zabui/comps';
```

You must create a tailwind.config.js file in the root of your project and add the following configuration:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./node_modules/@zabui/comps/**/*.js'],
  darkMode: false,
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

In your css file, you must import the tailwindcss styles:

```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

## Component Props