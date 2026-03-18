import { motion } from 'framer-motion';
import { Search, Users, Briefcase, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: <Search className="w-6 h-6" />,
    title: "高端猎头服务",
    description: "为全球知名企业寻找最合适的中高端华人人才，提供全方位的招聘解决方案。",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "海外华人社交",
    description: "构建全球华人精英社交网络，促进知识分享、资源对接与职业合作。",
    color: "bg-blue-100 text-blue-600"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "商务咨询服务",
    description: "为出海企业提供市场进入、法律合规、人才战略等全方位的商务咨询。",
    color: "bg-purple-100 text-purple-600"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "职业发展辅导",
    description: "提供简历优化、面试技巧、职业规划等一对一辅导，助力职场进阶。",
    color: "bg-orange-100 text-orange-600"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-zinc-900 mb-6"
          >
            我们的核心服务
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl mx-auto text-lg text-zinc-500"
          >
            海华圈通过多元化的服务体系，全方位满足海外华人与企业的核心需求。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-zinc-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
