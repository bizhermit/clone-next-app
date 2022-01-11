import { AppStyle } from "@biz-hermit/react-sdk/dist/styles/style";
import type { AppProps } from "next/app";
import "../styles/base.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <AppStyle design="neumorphism" color="dark"><Component {...pageProps} /></AppStyle>;
};
export default App;