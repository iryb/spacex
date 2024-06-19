import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";

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
