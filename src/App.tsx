import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import { Layout } from "./components/Layout";
import { Home } from "./components/pages/Home";
import { client } from "./lib/data";
import { Favorites } from "./components/pages/Favorites";
import { Tours } from "./components/pages/Tours";
import { About } from "./components/pages/About";

export default function App() {
  return (
    <main>
      <GlobalStyle />
      <RecoilRoot>
        <ApolloProvider client={client}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="tours" element={<Tours />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </ApolloProvider>
      </RecoilRoot>
    </main>
  );
}
