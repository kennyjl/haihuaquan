import { Link, useLocation } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer id="contact" className="bg-zinc-900 text-zinc-400 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-2 text-white">
              <Globe className="w-8 h-8 text-emerald-500" />
              <span className="text-2xl font-bold tracking-tight">海华圈 <span className="text-emerald-500">Haihuaquan</span></span>
            </Link>
            <p className="text-zinc-400 leading-relaxed max-w-xs">
              连接全球华人精英，助力海外职业发展。海华圈是您最值得信赖的全球职业伙伴。
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-500 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8">快速链接</h3>
            <ul className="space-y-4">
              <li><a href={isHome ? "#about" : "/#about"} className="hover:text-emerald-500 transition-colors">关于我们</a></li>
              <li><a href={isHome ? "#services" : "/#services"} className="hover:text-emerald-500 transition-colors">核心服务</a></li>
              <li><a href={isHome ? "#cases" : "/#cases"} className="hover:text-emerald-500 transition-colors">案例展示</a></li>
              <li><a href={isHome ? "#features" : "/#features"} className="hover:text-emerald-500 transition-colors">平台优势</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">隐私政策</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8">服务领域</h3>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">互联网与科技</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">金融与投资</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">新能源与环保</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">生物医药</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">智能制造</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-8">联系我们</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>上海市浦东新区陆家嘴环路1000号恒生银行大厦</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>+86 (021) 8888-8888</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-6 h-6 text-emerald-500 shrink-0" />
                <span>contact@haihuaquan.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-800 text-center text-sm">
          <p>© {new Date().getFullYear()} 海华圈 Haihuaquan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
