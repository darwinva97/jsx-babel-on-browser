import { Title } from "./components/Title.js";
import { Card } from "./components/Card.js";

const App = () => {
  const [count, setCount] = React.useState(0);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("https://admin.vemastercup.com/api/")
      .then((res) => setData(res.data));
  }, []);

  React.useEffect(() => {
    const ctx = document.getElementById("myChart");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <Title>Clientes</Title>
      <pre>{JSON.stringify(data, null, 3)}</pre>
      <Card
        title="Principales"
        description="Estos son lso principales clientes"
      />
      <button onClick={() => setCount(count + 1)}>+</button>
      <strong>{count}</strong>
      <button onClick={() => setCount(count - 1)}>-</button>
      <canvas id="myChart"></canvas>
    </div>
  );
};

const root = document.querySelector("#root-clients");

ReactDOM.createRoot(root).render(<App />);
