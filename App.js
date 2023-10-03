import { NativeBaseProvider } from "native-base";
import Home from "./app/Home";

export default function App() {
  return (
    <NativeBaseProvider>
      <Home />
    </NativeBaseProvider>
  );
}


