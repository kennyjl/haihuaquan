import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, MapPin, Tag, ArrowLeft } from 'lucide-react';

interface CaseDetailProps {
  item: {
    category: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    fullContent?: string;
  } | null;
  onClose: () => void;
}

export default function CaseDetail({ item, onClose }: CaseDetailProps) {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10 bg-zinc-900/90 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="bg-white w-full max-w-5xl max-h-[90vh] rounded-[32px] overflow-hidden shadow-2xl relative flex flex-col"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white hover:text-zinc-900 transition-all flex items-center justify-center shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="flex-1 overflow-y-auto">
            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <span className="px-4 py-1.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider mb-4 inline-block">
                  {item.category}
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                  {item.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 sm:p-12 md:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Text */}
                <div className="lg:col-span-2 space-y-8">
                  <div className="prose prose-zinc max-w-none">
                    <p className="text-xl text-zinc-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                    <div className="h-px bg-zinc-100 my-8"></div>
                    <div className="space-y-6 text-zinc-600 leading-relaxed">
                      <p>
                        在当今全球化竞争日益激烈的背景下，海华圈凭借其深厚的海外资源和专业的顾问团队，为客户提供了量身定制的解决方案。通过对目标市场的深度洞察和对人才画像的精准刻画，我们不仅解决了客户的燃眉之急，更在长期的战略层面提供了持续的价值。
                      </p>
                      <p>
                        本项目中，海华圈团队采用了多维度的评估体系，不仅关注候选人的专业技能，更深入考察其文化适应性和领导力潜质。通过全球范围内的资源调动，我们在极短的时间内完成了从需求分析、人才寻访到面试评估的全流程服务。
                      </p>
                      <p>
                        最终，候选人的成功入职不仅填补了客户的核心岗位空缺，更带动了相关业务板块的快速增长。这一案例再次证明了海华圈在连接全球华人精英、助力企业出海方面的卓越能力。
                      </p>
                    </div>
                  </div>
                  
                  <button 
                    onClick={onClose}
                    className="inline-flex items-center gap-2 text-emerald-600 font-bold hover:gap-3 transition-all pt-8"
                  >
                    <ArrowLeft className="w-5 h-5" /> 返回案例列表
                  </button>
                </div>

                {/* Sidebar Info */}
                <div className="space-y-8">
                  <div className="bg-zinc-50 p-8 rounded-3xl space-y-6">
                    <h3 className="text-lg font-bold text-zinc-900">项目详情</h3>
                    <div className="space-y-4">
                      <div className="flex gap-3 items-center text-zinc-600">
                        <Calendar className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm">项目周期：2024年第一季度</span>
                      </div>
                      <div className="flex gap-3 items-center text-zinc-600">
                        <MapPin className="w-5 h-5 text-emerald-600" />
                        <span className="text-sm">覆盖地区：全球主要科技枢纽</span>
                      </div>
                      <div className="flex gap-3 items-start text-zinc-600">
                        <Tag className="w-5 h-5 text-emerald-600 mt-0.5" />
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-bold uppercase tracking-widest text-zinc-400">
                              #{tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-emerald-600 p-8 rounded-3xl text-white">
                    <h3 className="text-lg font-bold mb-4">需要类似服务？</h3>
                    <p className="text-emerald-100 text-sm mb-6">
                      我们的专家团队随时准备为您提供专业的咨询与支持。
                    </p>
                    <a 
                      href="#contact-form"
                      onClick={onClose}
                      className="w-full bg-white text-emerald-600 py-3 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-colors text-center block"
                    >
                      立即咨询
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
