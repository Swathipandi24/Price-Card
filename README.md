# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


# React Price Cards

This project demonstrates how to create a dynamic price card interface using React and Vite. 
The interface includes three price plans, each with a list of features indicating their availability with icons. 
Additionally, the price cards have a gradient background effect.

### Prerequisites

- Node.js and npm should be installed on your system.



## project structure
price-card
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── PriceCard.jsx
│ │ ├── PriceCard.css
│ │ ├── PriceCardList.jsx
│ │ └── PriceCardList.css
│ ├── App.jsx
│ ├── App.css
│ └── main.jsx
├── package.json
├── README.md
└── vite.config.js


### Components

- **App.jsx**: The main component that renders the title and the `PriceCardList` component.
- **PriceCardList.jsx**: A component that maps over the plans and renders a `PriceCard` for each plan.
- **PriceCard.jsx**: A component that displays the details of a single price plan, including the plan name, price, features, and a button.

### CSS Files

- **App.css**: Styles for the main `App` component.
- **PriceCardList.css**: Styles for the `PriceCardList` component, including the gradient background.
- **PriceCard.css**: Styles for the `PriceCard` component, including icons for feature availability.


This `README.md` provides a comprehensive overview of  my project, including setup instructions, project structure, component details.
