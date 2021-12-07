import { GlobalStyle } from './styles/global'

import { Header } from './components/Header/index'
import { ProductInfoSection } from './components/ProductInfoSection';
import { ProductNumbersSection } from './components/ProductNumbersSection';

function App() {
  return (
    <>
      <Header />
      <ProductInfoSection />
      <ProductNumbersSection />
      <GlobalStyle />
    </>
  );
}

export default App;
