import { BrowserRouter, Route, Routes } from "react-router-dom";
import HookFormLib from "./modules/form/HookFormLib";
import MainLayout from "./components/MainLayout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={"Home"} />
        <Route path="/form" element={<HookFormLib />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
