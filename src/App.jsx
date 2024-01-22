import "./App.scss";
import { useNavigate, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header.jsx";
import Home from "./pages/home.jsx";
import Blog from "./pages/blog.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";

import SignIn from "./pages/signin.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Menu from "./components/Menu/Menu.jsx";
import { useState } from "react";
import SignUp from "./pages/signup.jsx";
import Auth from "./pages/auth.jsx";

function App() {
  const navigate = useNavigate();
  const menuItems = [
    { id: 1, value: "Home", href: "/" },
    { id: 2, value: "Blog", href: "/blog" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  const currentPath = window.location.pathname;
  const isLoginPage =
    currentPath === "/auth/login" || currentPath === "/auth/registration";
  const renderHeader = !isLoginPage && (
    <Header
      menuItems={menuItems}
      menuOpen={menuOpen}
      setMenuOpen={setMenuOpen}
    />
  );
  const renderFooter = !isLoginPage && <Footer />;

  return (
    <div className="wrapper">
      {/* <div style={{minHeight: 'calc(100vh - 0px)'}}> */}

      {renderHeader}

      <main className="conteiner main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Routes>
        <Route path="/auth/*" element={<Auth />} />
      </Routes>
      {/* </div> */}
      {renderFooter}
    </div>
  );
}

export default App;
