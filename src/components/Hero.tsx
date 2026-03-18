import { motion } from 'framer-motion';
import { ArrowRight, Globe, Users, Briefcase } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-zinc-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-8"
          >
            <Globe className="w-4 h-4" />
            <span>连接全球华人精英，助力海外职业发展</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight"
          >
            海华圈 <span className="text-emerald-600">Haihuaquan</span> <br />
            您的全球职业伙伴
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg lg:text-xl text-zinc-600 mb-12"
          >
            海华圈致力于为全球华人提供最专业的招聘、社交及商务咨询服务。
            我们通过精准的人才匹配和深厚的行业洞察，助力企业与人才实现双赢。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <a 
              href="#about"
              className="w-full sm:w-auto bg-emerald-600 text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-lg shadow-emerald-600/20"
            >
              立即开始 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">10万+</h3>
            <p className="text-zinc-500">全球华人精英人才库</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Briefcase className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">5000+</h3>
            <p className="text-zinc-500">合作知名企业与机构</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-2">20+</h3>
            <p className="text-zinc-500">覆盖全球主要国家和地区</p>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-emerald-50 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>
    </section>
  );
}
