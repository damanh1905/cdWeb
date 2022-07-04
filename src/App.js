import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRouterUser } from "./routers";
import DefaultLayout from "./components/Layout/DefaultLayout";
import React, { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  const [scrollTop,setScrollTop]=useState(false);
  console.log(scrollTop)
  const handleScroll=()=>{
    if(window.scrollY>500){
        setScrollTop(!scrollTop)
    }else{
      setScrollTop(false)
    }
}
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
  },[])
  const goToTop=()=>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  }
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
          { scrollTop&&<button style={{position:"fixed",bottom:20,right:20,padding:7,paddingLeft:14,cursor:'pointer',backgroundColor:'#1890ff',color:'white',border:"none"}} onClick={goToTop}><i class="fa-solid fa-arrow-up-long"></i></button>}
    </Router>
 
  );
}

export default App;
