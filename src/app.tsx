import { Title } from "@solidjs/meta";
import { Errored, Loading } from "solid-js";
import { Router } from "./router";
import { DefaultCatchBoundary } from "./components/DefaultCatchBoundary";
import "./app.css";

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>Solid 2 - SSR Cacheable Preload</Title>
          <Errored fallback={(err) => <DefaultCatchBoundary error={err() as Error} />}>
            <Loading>{props.children}</Loading>
          </Errored>
        </>
      )}
    </Router>
  );
}