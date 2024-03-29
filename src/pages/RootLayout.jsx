import * as S from "../styles/rootLayout";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";
import Provider from "../context/Provider";
import BtnToTop from "../components/ButtonToTop/BtnToTop";

function RootLayout() {
  return (
    <Provider>
      <Header />

      <S.Section>
        <ScrollToTop />
        <BtnToTop />
        <Outlet />
      </S.Section>

      <Footer />
    </Provider>
  );
}

export default RootLayout;
