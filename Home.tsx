import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// 工作室服务类别数据
const serviceCategories = [
  {
    id: 'audio-processing',
    title: '音频处理',
    description: '专业音频处理服务，包括移调、消音、变速等',
    bgColor: 'from-purple-600 to-purple-800',
  },
  {
    id: 'original-production',
    title: '原创制作',
    description: '作词、作曲、编曲等原创音乐制作服务',
    bgColor: 'from-indigo-600 to-indigo-800',
  },
  {
    id: 'post-production',
    title: '后期制作',
    description: '专业混音、母带处理等后期制作服务',
    bgColor: 'from-pink-600 to-pink-800',
  },
  {
    id: 'vocal-production',
    title: '代唱制作',
    description: '各类人声代唱服务，满足不同风格需求',
    bgColor: 'from-blue-600 to-blue-800',
  },
  {
    id: 'music-audition',
    title: '音乐试听',
    description: '专业制作音乐试听服务，展示您的音乐作品',
    bgColor: 'from-green-600 to-green-800',
  },
  {
    id: 'after-sales',
    title: '售后服务',
    description: '专业售后服务支持，包括修订、技术支持等',
    bgColor: 'from-orange-600 to-orange-800',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* 工作室头部区域 */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-gray-900 opacity-90"></div>
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
          云斌音乐工作室
        </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10">
              专注品质 成就你的音乐梦想
            </p>
            <div className="inline-block rounded-full bg-white/10 backdrop-blur-sm px-8 py-3">
              <p className="text-lg font-medium">专业音乐制作服务提供商</p>
            </div>
          </div>
        </div>
        
        {/* 装饰元素 */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </header>

      {/* 服务类别区域 */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">我们的服务</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category) => (
            <Link 
              key={category.id}
              to={`/services/${category.id}`}
              className={cn(
                "group relative rounded-2xl overflow-hidden p-8 h-full transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl",
                "bg-gradient-to-br",
                category.bgColor
              )}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-6">
                   <span className="text-2xl font-bold">{category.title.slice(0, 2)}</span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-gray-200 mb-6">{category.description}</p>
                <div className="flex items-center text-white/90 group-hover:text-white transition-colors">
                  <span>查看详情</span>
                  <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 工作室介绍区域 */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">关于我们的工作室</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="bg-gray-900 rounded-xl overflow-hidden h-64 mb-4">
                  <img 
                    src="https://lf-code-agent.coze.cn/obj/x-ai-cn/258295330562/attachment/share_5497da4a0521b19adc00e8a46e5abd21_edit_347830702790675_20250721181119.png" 
                    alt="云斌音乐工作室环境" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <p className="text-gray-300 mb-6">
                  我们是一家专业的音乐制作工作室，拥有多年行业经验和顶尖的制作设备，致力于为客户提供高质量的音乐制作服务。
                </p>
                <p className="text-gray-300 mb-6">
                  无论您是需要原创歌曲制作、音频处理还是专业混音，我们都能满足您的需求，让您的音乐作品达到专业水准。
                </p>
                <div className="pt-4">
                  <Link 
                    to="/contact" 
                    className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 rounded-full font-medium hover:shadow-lg transition-shadow"
                  >
                    联系我们
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
    <footer className="bg-gray-900 border-t border-gray-800 py-10">
      <div className="container mx-auto px-4 text-center text-gray-400">
         <p>© {new Date().getFullYear()} 云斌音乐工作室 - 专注品质 成就你的音乐梦想</p>
          <div className="mt-4 flex flex-col items-center justify-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <i className="fa-brands fa-weixin text-green-400 text-xl"></i>
              <span className="text-white font-medium">客服微信：yunbinmusician</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <i className="fa-solid fa-phone text-blue-400 text-xl"></i>
              <span className="text-white font-medium">联系电话：19079246479</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}