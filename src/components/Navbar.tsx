import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe, Menu, X, ArrowLeft } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const isCaseDetail = location.pathname.startsWith('/case/');
  const isNewsDetail = location.pathname.startsWith('/news/');
  const isNewsList = location.pathname === '/news';
  const isInternalPage = isCaseDetail || isNewsDetail || isNewsList;

  const getPageTitle = () => {
    if (isCaseDetail) return '案例展示';
    if (isNewsDetail || isNewsList) return '动态洞察';
    return '';
  };

  const navLinks = [
    { name: '关于我们', href: isHome ? '#about' : '/#about' },
    { name: '核心服务', href: isHome ? '#services' : '/#services' },
    { name: '案例展示', href: isHome ? '#cases' : '/#cases' },
    { name: '动态洞察', href: isHome ? '#news' : '/#news' },
    { name: '平台优势', href: isHome ? '#features' : '/#features' },
    { name: '联系我们', href: isHome ? '#contact-form' : '/#contact-form' },
  ];

  if (isInternalPage) {
    return (
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-zinc-600 hover:text-emerald-600 transition-colors font-medium"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>返回</span>
              </button>
              <div className="h-4 w-px bg-zinc-200"></div>
              <span className="text-lg font-bold text-zinc-900">{getPageTitle()}</span>
            </div>
            
            <Link to="/" className="flex items-center gap-2">
              <Globe className="w-6 h-6 text-emerald-600" />
              <span className="text-sm font-bold tracking-tight text-zinc-900">海华圈</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <Globe className="w-8 h-8 text-emerald-600" />
            <span className="text-xl font-bold tracking-tight text-zinc-900">海华圈 <span className="text-emerald-600">Haihuaquan</span></span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={isHome ? '#contact-form' : '/#contact-form'}
              className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors"
            >
              立即咨询
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-600">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-black/5 px-4 py-4 space-y-4"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="block text-base font-medium text-zinc-600" 
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href={isHome ? '#contact-form' : '/#contact-form'}
            className="w-full bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium text-center block"
            onClick={() => setIsOpen(false)}
          >
            立即咨询
          </a>
        </motion.div>
      )}
    </nav>
  );
}
