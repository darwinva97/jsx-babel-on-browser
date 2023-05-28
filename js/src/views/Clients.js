import { Title } from "./Title.js";
import { Card } from "./Card.js";

const App = () => (
  <div>
    <Title>Clientes</Title>
    <Card
      title="Principales"
      description="Estos son lso principales clientes"
    />
  </div>
);

const root = document.querySelector("#root-clients");

ReactDOM.createRoot(root).render(<App />);
