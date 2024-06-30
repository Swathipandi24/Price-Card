import './App.css';
import PriceCardList from './components/PriceCardList';

const plans = [
  {
    name: "FREE",
    price: "$0/month",
    features: [
      { feature: "Single User", available: true },
      { feature: "50GB Storage", available: true },
      { feature: "Unlimited Public Projects", available: true },
      { feature: "Community Access", available: true },
      { feature: "Unlimited Private Projects", available: false },
      { feature: "Dedicated Phone Support", available: false },
      { feature: "Free Subdomain", available: false },
      { feature: "Monthly Status Reports", available: false },
    ],
  },
  {
    name: "PLUS",
    price: "$9/month",
    features: [
      { feature: "5 Users", available: true },
      { feature: "50GB Storage", available: true },
      { feature: "Unlimited Public Projects", available: true },
      { feature: "Community Access", available: true },
      { feature: "Unlimited Private Projects", available: true },
      { feature: "Dedicated Phone Support", available: true },
      { feature: "Free Subdomain", available: true },
      { feature: "Monthly Status Reports", available: false },
    ],
  },
  {
    name: "PRO",
    price: "$49/month",
    features: [
      { feature: "Unlimited Users", available: true },
      { feature: "50GB Storage", available: true },
      { feature: "Unlimited Public Projects", available: true },
      { feature: "Community Access", available: true },
      { feature: "Unlimited Private Projects", available: true },
      { feature: "Dedicated Phone Support", available: true },
      { feature: "Free Subdomain", available: true },
      { feature: "Monthly Status Reports", available: true },
    ],
  },
];

function App() {
  return (
    <div className="App">
      <h1>React Price Card Task</h1>
      <PriceCardList plans={plans} />
    </div>
  );
}

export default App;
