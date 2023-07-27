import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import HookFormLib from "./modules/form/HookForm";
import MultiStepForm from "./modules/form/HookForm/MultiStepForm";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={"Home"} />
        <Route path="/form" element={<HookFormLib />} />
        <Route path="/multi-step" element={<MultiStepForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
