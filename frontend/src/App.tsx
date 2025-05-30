import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./v2/pages/Home";
import AppProvider from "./context/AppContext";
import Loading from "./components/Loading";
import Footer from "./v2/components/Footer";

const Page404 = lazy(() => import("./pages/Page404"));
const WorkV2 = lazy(() => import("./v2/pages/Work"));
const ContactV2 = lazy(() => import("./v2/pages/Contact"));
const About = lazy(() => import("./v2/pages/About"));
const Career = lazy(() => import("./v2/pages/Career"));

function App() {
  return (
    <AppProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/work" element={<WorkV2 />} />
          <Route path="/work/:dataId" element={<WorkV2 />} />
          <Route path="/contact" element={<ContactV2 />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Suspense>
    </AppProvider>
  );
}

export default App;
