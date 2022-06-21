import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/Routes";
import { DefaultLayout } from "~/Components/Layout";
import { Fragment } from "react";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home/>}/> 
          <Route path="/following" element={<Following/>}/>  */}
          {publicRoutes.map((route, index) => {
            // const Layout = route.layout
            //   ? route.layout
            //   : route.layout === null
            //   ? Fragment
            //   : DefaultLayout;

              //diễn giả ra
            let Layout = DefaultLayout;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }

            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
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
