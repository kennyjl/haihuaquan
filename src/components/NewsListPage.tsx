import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag, Search } from 'lucide-react';
import { newsItems } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NewsListPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-24 pb-20">
        {/* Header Section */}
        <section className="py-12 bg-zinc-50 border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">动态洞察</h1>
              <p className="text-lg text-zinc-600 leading-relaxed">
                关注海华圈，获取全球职场前沿资讯、深度行业分析及公司最新动态。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters & Search (Optional placeholder for future) */}
        <section className="py-8 border-b border-zinc-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {['全部', '公司动态', '行业研究', '全球布局'].map((cat) => (
                  <button 
                    key={cat}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                      cat === '全部' 
                        ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/20' 
                        : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full md:w-72">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input 
                  type="text" 
                  placeholder="搜索动态..." 
                  className="w-full pl-11 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                />
              </div>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {newsItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-zinc-100 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all"
                >
                  <Link to={`/news/${item.id}`} className="flex flex-col h-full">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-emerald-600 text-[10px] font-bold uppercase tracking-wider shadow-sm">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-zinc-400 text-xs mb-4">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </div>
                      <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-zinc-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm group-hover:gap-3 transition-all">
                        阅读全文 <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>

            {/* Pagination Placeholder */}
            <div className="mt-20 flex justify-center gap-2">
              <button className="w-10 h-10 rounded-xl bg-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/20">1</button>
              <button className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-600 font-bold text-sm hover:bg-zinc-200 transition-colors">2</button>
              <button className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-600 font-bold text-sm hover:bg-zinc-200 transition-colors">3</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
