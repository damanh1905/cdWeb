import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouterUser } from "./routers";
import DefaultLayout from "./components/Layout/DefaultLayout";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {publicRouterUser.map((router, index) => {
            const Layout = router.layout || DefaultLayout;
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
      </div>
    </Router>
  );
}

export default App;
