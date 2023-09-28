import { ChakraProvider } from "@chakra-ui/react";

import CustomRoutes from "./router/custom-router";

function App() {
  return (
    <ChakraProvider>
      <CustomRoutes />
    </ChakraProvider>
  );
}

export default App;
