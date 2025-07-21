import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';

// 代唱制作服务数据
const vocalServices = [
  {
    name: '普通代唱',
    price: '500元/首',
    description: '酒馆歌手级别，多用于流行歌曲'
  },
  {
    name: '发行级代唱',
    price: '2000元/首',
    description: '音乐学院声乐系毕业，多用于美声唱法'
  },
  {
    name: '高端原创级代唱',
    price: '5000元/首',
    description: '金牌专业级，细节处理更加细腻，情感表达更丰富'
  }
];

export default function VocalProduction() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-blue-400 hover:text-blue-300 flex items-center">
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">代唱制作服务价格</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我们提供不同级别的专业代唱服务，从流行歌曲到美声唱法，满足您的各种音乐制作需求。所有价格仅供参考，实际价格可能因歌曲难度有所调整。
        </p>
      </div>
      
      {/* 价格表 */}
      <div className="container mx-auto px-4">
        <PriceTable 
          title="代唱制作价格表" 
          columns={['服务级别', '制作费（元）', '服务说明']} 
          services={vocalServices}
          headerBgColor="bg-gradient-to-r from-blue-600 to-blue-800"
        />
      </div>
      
      {/* 咨询和下单区域 */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 text-white">需要专业代唱服务？</h3>
           <p className="text-gray-300 mb-6">
             无论您是需要流行歌曲演唱还是专业美声演绎，我们都能提供符合您需求的代唱服务。
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
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors">
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