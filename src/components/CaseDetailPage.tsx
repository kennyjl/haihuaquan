import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Tag, Globe, Mail, Phone } from 'lucide-react';
import { cases } from '../data';
import Navbar from './Navbar';
import Footer from './Footer';

export default function CaseDetailPage() {
  const { id } = useParams();
  const item = cases.find(c => c.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">未找到案例</h2>
          <Link to="/" className="text-emerald-600 font-bold hover:underline">返回首页</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        {/* Hero Image Section */}
        <section className="relative h-[50vh] min-h-[400px] w-full overflow-hidden">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-zinc-900/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 md:p-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-6 inline-block">
                  {item.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-4xl">
                  {item.title}
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="prose prose-zinc prose-lg max-w-none"
                >
                  <p className="text-2xl text-zinc-600 leading-relaxed font-medium mb-12">
                    {item.description}
                  </p>
                  <div className="h-px bg-zinc-100 mb-12"></div>
                  <div className="space-y-8 text-zinc-600 leading-relaxed whitespace-pre-line">
                    {item.fullContent}
                  </div>
                </motion.div>

                <div className="mt-16 pt-12 border-t border-zinc-100">
                  <Link 
                    to="/"
                    className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
                  >
                    <ArrowLeft className="w-5 h-5" /> 返回首页
                  </Link>
                </div>
              </div>

              {/* Sidebar */}
              <aside className="space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-zinc-50 p-10 rounded-[32px] space-y-8"
                >
                  <h3 className="text-xl font-bold text-zinc-900 border-b border-zinc-200 pb-4">项目概览</h3>
                  <div className="space-y-6">
                    <div className="flex gap-4 items-center text-zinc-600">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">项目周期</div>
                        <div className="font-medium">2024年第一季度</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-center text-zinc-600">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider">覆盖地区</div>
                        <div className="font-medium">全球主要科技枢纽</div>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start text-zinc-600">
                      <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                        <Tag className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-400 font-bold uppercase tracking-wider mb-2">核心标签</div>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-zinc-500 shadow-sm">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-emerald-600 p-10 rounded-[32px] text-white relative overflow-hidden"
                >
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4">需要类似服务？</h3>
                    <p className="text-emerald-100 mb-8 leading-relaxed">
                      我们的专家团队随时准备为您提供专业的咨询与支持。
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="w-4 h-4" /> +86 (021) 8888-8888
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="w-4 h-4" /> contact@haihuaquan.com
                      </div>
                    </div>
                    <Link to="/#contact-form" className="block w-full bg-white text-emerald-600 py-4 rounded-2xl font-bold text-center hover:bg-emerald-50 transition-colors shadow-lg">
                      立即联系我们
                    </Link>
                  </div>
                  <Globe className="absolute -bottom-10 -right-10 w-40 h-40 text-white/10" />
                </motion.div>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
