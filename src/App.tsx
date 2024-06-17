import Button from "./components/atoms/Button";
import GlobalStyle from "./globalStyles";

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Button type="button" variant="primary">
        Buy
      </Button>
      <Button type="button" variant="secondary">
        Like
      </Button>
    </main>
  );
}
