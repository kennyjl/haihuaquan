import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Quote } from 'lucide-react';
import { cases } from '../data';

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-900 mb-6"
          >
            成功案例展示
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-zinc-500"
          >
            多年来，我们已助力数千名精英人才与数百家顶尖企业实现卓越对接。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full"
            >
              <Link to={`/case/${item.id}`} className="block">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 shadow-lg">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-emerald-600 text-xs font-bold uppercase tracking-wider shadow-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="flex-1 flex flex-col">
                <div className="flex gap-2 mb-4">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">
                      #{tag}
                    </span>
                  ))}
                </div>
                <Link to={`/case/${item.id}`}>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-emerald-600 transition-colors leading-tight">
                    {item.title}
                  </h3>
                </Link>
                <p className="text-zinc-500 leading-relaxed mb-8 flex-1">
                  {item.description}
                </p>
                <Link 
                  to={`/case/${item.id}`}
                  className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all"
                >
                  阅读全文 <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 lg:p-20 bg-emerald-600 rounded-[48px] relative overflow-hidden text-white"
        >
          <Quote className="absolute top-12 left-12 w-24 h-24 text-white/10 -rotate-12" />
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <p className="text-2xl lg:text-3xl font-medium italic mb-12 leading-relaxed">
              "海华圈不仅帮我们找到了急需的技术领袖，更在文化融合和团队建设上提供了宝贵的建议。他们是真正懂海外华人，也懂中国企业的专业伙伴。"
            </p>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-white/20 p-1 mb-4">
                <img 
                  src="https://picsum.photos/seed/avatar/100/100" 
                  alt="Client Avatar" 
                  className="w-full h-full rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="font-bold text-xl">张先生</div>
              <div className="text-emerald-100 text-sm">某纳斯达克上市科技公司 HRVP</div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        </motion.div>
      </div>
    </section>
  );
}
