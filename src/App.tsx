import { Route, Routes } from "react-router-dom";
import { Home } from "./components/templates/Home";
import GlobalStyle from "./globalStyles";
import { Layout } from "./components/Layout";

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}
