import { BrowserRouter } from "react-router-dom";
import HookFormLib from "./modules/form/HookFormLib";

const App = () => {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <HookFormLib />
      </BrowserRouter>
    </div>
  );
};

export default App;
