import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const config = {
  intialColorMode: 'light',
  useSystemColorMode: false,
}

const themes = extendTheme({config});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={themes}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

export const server = `https://api.coingecko.com/api/v3`;
