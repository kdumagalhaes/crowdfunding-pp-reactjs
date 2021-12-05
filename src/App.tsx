import { GlobalStyle } from './styles/global'

import { Header } from './components/Header/index'
import { ProductInfoSection } from './components/ProductInfoSection';

function App() {
  return (
    <>
      <Header />
      <ProductInfoSection />
      <GlobalStyle />
    </>
  );
}

export default App;
