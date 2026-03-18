import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Tag, Globe, Mail, Phone, Share2 } from 'lucide-react';
import { newsItems } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';

export default function NewsDetailPage() {
  const { id } = useParams();
  const item = newsItems.find(n => n.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">未找到新闻</h2>
          <Link to="/" className="text-emerald-600 font-bold hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold uppercase tracking-wider">
                {item.category}
              </span>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <Calendar className="w-4 h-4" />
                {item.date}
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 leading-tight mb-8">
              {item.title}
            </h1>
            <div className="flex items-center justify-between border-y border-zinc-100 py-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                  海
                </div>
                <div>
                  <div className="font-bold text-zinc-900">海华圈研究院</div>
                  <div className="text-sm text-zinc-400">官方发布</div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-zinc-400 hover:text-emerald-600 transition-colors">
                <Share2 className="w-5 h-5" /> 分享
              </button>
            </div>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[16/9] rounded-[40px] overflow-hidden mb-16 shadow-2xl"
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-zinc prose-lg max-w-none"
          >
            <p className="text-2xl text-zinc-600 leading-relaxed font-medium mb-12 italic border-l-4 border-emerald-500 pl-8">
              {item.excerpt}
            </p>
            <div className="space-y-8 text-zinc-600 leading-relaxed whitespace-pre-line">
              {item.fullContent}
            </div>
          </motion.div>

          {/* Footer Actions */}
          <div className="mt-20 pt-12 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-8">
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> 返回首页
            </Link>
            <div className="flex gap-4">
              <button className="px-8 py-3 rounded-2xl bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-colors">
                关注公众号
              </button>
              <button className="px-8 py-3 rounded-2xl border border-zinc-200 text-zinc-900 font-bold hover:bg-zinc-50 transition-colors">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
