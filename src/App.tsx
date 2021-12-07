import { GlobalStyle } from './styles/global'

import { Header } from './components/Header/index'
import { ProductInfoSection } from './components/ProductInfoSection';
import { ProductNumbersSection } from './components/ProductNumbersSection';
import { ProductAboutSection } from './components/ProductAboutSection';

function App() {
  return (
    <>
      <Header />
      <ProductInfoSection />
      <ProductNumbersSection />
      <ProductAboutSection />
      <GlobalStyle />
    </>
  );
}

export default App;
