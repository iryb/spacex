import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { ApolloProvider } from "@apollo/client";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { client } from "./lib/data";
import { Favorites } from "./components/pages/Favorites";

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <ApolloProvider client={client}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
              <Route path="favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </ApolloProvider>
    </main>
  );
}
