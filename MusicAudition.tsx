import { Link } from 'react-router-dom';

export default function MusicAudition() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-green-400 hover:text-green-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              to="/services/audio-processing" 
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              音频处理
            </Link>
            <Link 
              to="/payment" 
              className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              立即支付
            </Link>
          </div>
        </div>
      </nav>
      
      {/* 页面标题 */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">音乐试听制作服务</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我们提供专业的音乐试听制作服务，将您的音乐作品以最佳状态展示给听众，无论是个人展示还是专业投递都能满足需求。
        </p>
      </div>
      
       {/* 试听内容提示 */}
       <div className="container mx-auto px-4 py-12 text-center">
         <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <p className="text-2xl font-medium text-green-400 mb-4">具体试听内容请联系客服</p>
           <p className="text-gray-400 italic mb-8">（作品仅代表制作水平，具体制作风格会按照您的具体要求进行制作）</p>
           
           <div className="border-t border-gray-700 pt-8 mt-8">
             <div className="mb-8">
               <i className="fa-brands fa-weixin text-green-500 text-5xl mb-4"></i>
               <h2 className="text-2xl font-bold mb-2">客服微信</h2>
               <p className="text-xl text-gray-300 mb-6">yunbinmusician</p>
               <div className="p-4 bg-gray-900 rounded-lg">
                 <p className="text-gray-400">扫描下方二维码添加客服微信</p>
                 <div className="w-48 h-48 mx-auto mt-4">
                   <img 
                     src="https://lf-code-agent.coze.cn/obj/x-ai-cn/258295330562/attachment/1b45411911d8cc5311052a131a7685a_20250721175232.png" 
                     alt="客服微信二维码" 
                     className="w-full h-full object-contain"
                   />
                 </div>
               </div>
             </div>
             <div className="mb-6">
               <i className="fa-solid fa-phone text-blue-500 text-2xl mb-2"></i>
               <h3 className="text-xl font-bold mb-1">联系电话</h3>
               <p className="text-gray-300">19079246479</p>
             </div>
             <p className="text-gray-400">工作时间: 周一至周日 9:00-22:00</p>
           </div>
         </div>
       </div>
      
      {/* 咨询和下单区域 */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 text-white">需要制作专业的音乐试听？</h3>
           <p className="text-gray-300 mb-6">
             我们的专业制作团队将为您打造高质量的音乐试听作品，提升您音乐的展示效果和专业度。
           </p>
            <div className="mb-6 space-y-4">
              <div className="p-4 bg-gray-900 rounded-lg flex items-center justify-center space-x-3">
                <i class="fa-brands fa-weixin text-green-400 text-2xl"></i>
                <span className="text-white text-lg font-medium">客服微信：yunbinmusician</span>
              </div>
              <div className="p-4 bg-gray-900 rounded-lg flex items-center justify-center space-x-3">
                <i class="fa-solid fa-phone text-blue-400 text-2xl"></i>
                <span className="text-white text-lg font-medium">联系电话：19079246479</span>
              </div>
            </div>
           <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors">
              联系客服咨询
            </button>
            <Link 
              to="/payment" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              立即下单定制
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
