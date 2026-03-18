import { motion } from 'framer-motion';
import { Send, MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact-form" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900 rounded-[48px] overflow-hidden shadow-2xl">
          <div className="flex flex-col lg:flex-row">
            {/* Contact Info */}
            <div className="lg:w-2/5 p-12 lg:p-20 bg-emerald-600 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-8">联系我们</h2>
                <p className="text-emerald-100 mb-12 text-lg">
                  无论您是寻求人才的企业，还是寻找机遇的精英，我们都期待与您的交流。
                </p>

                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-200 mb-1">咨询热线</div>
                      <div className="text-xl font-bold">+86 (021) 8888-8888</div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-200 mb-1">电子邮箱</div>
                      <div className="text-xl font-bold">contact@haihuaquan.com</div>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-sm text-emerald-200 mb-1">总部地址</div>
                      <div className="text-xl font-bold">上海市浦东新区陆家嘴环路1000号</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            </div>

            {/* Form */}
            <div className="lg:w-3/5 p-12 lg:p-20">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">姓名</label>
                    <input 
                      type="text" 
                      placeholder="您的姓名"
                      className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">联系电话</label>
                    <input 
                      type="tel" 
                      placeholder="您的电话"
                      className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">电子邮箱</label>
                  <input 
                    type="email" 
                    placeholder="您的邮箱"
                    className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-400 uppercase tracking-wider">留言内容</label>
                  <textarea 
                    rows={4}
                    placeholder="请描述您的需求..."
                    className="w-full bg-zinc-800 border-none rounded-2xl px-6 py-4 text-white placeholder:text-zinc-600 focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                  ></textarea>
                </div>
                <button className="w-full bg-emerald-600 text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-700 transition-all flex items-center justify-center gap-3 group">
                  提交申请 <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
