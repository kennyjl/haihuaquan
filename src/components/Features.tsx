import { motion } from 'framer-motion';
import { CheckCircle2, Globe, Shield, Zap } from 'lucide-react';

const features = [
  {
    icon: <Globe className="w-6 h-6" />,
    title: "全球资源覆盖",
    description: "我们在北美、欧洲、东南亚等主要地区设有分支机构，拥有庞大的全球华人人才库。"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "专业服务保障",
    description: "由资深猎头和商务顾问组成的专业团队，提供高标准、高效率的定制化服务。"
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "精准匹配技术",
    description: "利用先进的人才画像和匹配算法，大幅提升招聘成功率和沟通效率。"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "深厚行业背景",
    description: "深耕互联网、金融、新能源、生物医药等热门行业，精准把握市场动态。"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-zinc-50 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-zinc-900 mb-8 leading-tight"
            >
              为什么选择 <span className="text-emerald-600">海华圈</span>？
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-zinc-600 mb-12"
            >
              我们不仅仅是一个招聘平台，更是您在海外职业发展的长期战略伙伴。
              凭借全球化的视野和本地化的执行力，我们为每一位客户创造卓越价值。
            </motion.p>
            
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center text-emerald-600 shrink-0">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-2">{feature.title}</h3>
                    <p className="text-zinc-500 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-4"
            >
              <div className="aspect-square rounded-[40px] bg-emerald-600 overflow-hidden shadow-2xl shadow-emerald-600/20">
                <img 
                  src="https://picsum.photos/seed/global/1000/1000" 
                  alt="Global Network" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 max-w-[240px]"
              >
                <div className="text-4xl font-bold text-emerald-600 mb-2">98%</div>
                <p className="text-sm font-medium text-zinc-600">客户满意度，长期合作率领先行业</p>
              </motion.div>

              {/* Floating stat card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="absolute -top-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 max-w-[240px]"
              >
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <p className="text-sm font-medium text-zinc-600">全球响应，跨时区无缝对接</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-emerald-100 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
}
