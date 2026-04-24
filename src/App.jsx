import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import GroceryPost from './pages/GroceryPost';
import HouseholdPost from './pages/HouseholdPost';
import SaveMoneyPost from './pages/SaveMoneyPost';

import ProducePage from './pages/ProducePage';
import KitchenwarePage from './pages/KitchenwarePage';
import HouseholdPage from './pages/HouseholdPage';
import PersonalCarePage from './pages/PersonalCarePage';
import ElectronicsPage from './pages/ElectronicsPage';
import GourmetPage from './pages/GourmetPage';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* Store Directories */}
            <Route path="produce" element={<ProducePage />} />
            <Route path="kitchenware" element={<KitchenwarePage />} />
            <Route path="household" element={<HouseholdPage />} />
            <Route path="personal-care" element={<PersonalCarePage />} />
            <Route path="electronics" element={<ElectronicsPage />} />
            <Route path="gourmet" element={<GourmetPage />} />

            {/* General Pages */}
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="search" element={<SearchPage />} />

            {/* Blog Pages */}
            <Route path="blog" element={<Blog />} />
            <Route path="blog/grocery-koforidua" element={<GroceryPost />} />
            <Route path="blog/affordable-household" element={<HouseholdPost />} />
            <Route path="blog/save-money-shopping" element={<SaveMoneyPost />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
