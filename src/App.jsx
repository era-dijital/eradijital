import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import HakkimizdaPage from './pages/HakkimizdaPage';
import HizmetlerPage from './pages/HizmetlerPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import OnAnalizPage from './pages/OnAnalizPage';
import IletisimPage from './pages/IletisimPage';
import ChatBot from './components/ChatBot';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import AdminBlogModal from './components/AdminBlogModal';
import { QuoteWizardProvider } from './context/QuoteWizardContext';
import QuoteWizardModal from './components/quote-wizard/QuoteWizardModal';

function App() {
  return (
    <QuoteWizardProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/hakkimizda" element={<HakkimizdaPage />} />
          <Route path="/hizmetler" element={<HizmetlerPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/on-analiz" element={<OnAnalizPage />} />
          <Route path="/iletisim" element={<IletisimPage />} />
          {/* Fiyatlar sayfası kaldırıldı, doğrudan ücretsiz dijital röntgen analizine yönlendiriliyor */}
          <Route path="/fiyatlar" element={<Navigate to="/on-analiz" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <ChatBot />
        <WhatsAppButton />
        <AdminBlogModal />
        <QuoteWizardModal />
      </Router>
    </QuoteWizardProvider>
  );
}

export default App;