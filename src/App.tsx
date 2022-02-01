import { GlobalStyle } from "./styles/global";

import { Header } from "./components/Header/index";
import { ProductInfoSection } from "./components/ProductInfoSection";
import { ProductNumbersSection } from "./components/ProductNumbersSection";
import { ProductAboutSection } from "./components/ProductAboutSection";
import { BackOptionsModal } from "./components/BackOptionsModal";

function App(): JSX.Element {
  return (
    <>
      <Header />
      <ProductInfoSection />
      <ProductNumbersSection />
      <ProductAboutSection />
      <BackOptionsModal />
      <GlobalStyle />
    </>
  );
}

export default App;
