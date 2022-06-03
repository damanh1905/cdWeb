import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRouterUser } from "./routers";
import DefaultLayout from "./components/Layout/DefaultLayout";
function App() {
  return (
    
    <Router>
        <Routes>
          {publicRouterUser.map((router, index) => {
            const Layout = router.layout === null ? Fragment:  DefaultLayout;
            const Page = router.component;
            return (
              <Route
                key={index}
                path={router.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
          </Routes>
    </Router>
 
  );
}

export default App;
