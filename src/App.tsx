import "./App.css";
import {
  SidePeakProvider,
  SidePeakTrigger,
  SidePeakViewport,
} from "./components/SidePeak";

function App() {
  return (
    <SidePeakProvider>
      <SidePeakTrigger>sample button</SidePeakTrigger>
      <SidePeakViewport />
    </SidePeakProvider>
  );
}

export default App;
