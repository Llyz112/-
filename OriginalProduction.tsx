import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';

// 原创制作服务数据 - 套餐价格
const packageServices = [
  {
    name: '普通级套餐',
    price: '1100元/套',
    description: '作词200元 + 作曲300元 + 编曲600元 (流行四大乐器)'
  },
  {
    name: '发行级套餐',
    price: '2200元/套',
    description: '作词600元 + 作曲600元 (送范唱) + 编曲1000元 (可各类曲风，乐器元素丰富)'
  },
  {
    name: '高端原创级套餐',
    price: '5500元/套',
    description: '作词1000元 + 作曲1500元 + 编曲3000元 (主题突出，感情基调契合，乐器丰富)'
  }
];

// 原创制作服务数据 - 单项价格
const individualServices = [
  {
    name: '作词',
    price: '200元起/首',
    description: '根据客户提供的素材和要求进行创作，普通级基础价格，单独定制需加100元手工费'
  },
  {
    name: '作曲',
    price: '300元起/首',
    description: '主旋律创作，需要客户提供歌词，普通级基础价格，单独定制需加100元手工费'
  },
  {
    name: '编曲',
    price: '600元起/首',
    description: '伴奏制作，需要客户提供词旋律和要求进行制作，普通级基础价格，单独定制需加100元手工费'
  }
];

export default function OriginalProduction() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-indigo-400 hover:text-indigo-300 flex items-center">
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">原创制作服务价格</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我们提供专业的原创音乐制作服务，从作词、作曲到编曲一站式服务，满足不同客户的音乐创作需求。
        </p>
      </div>
      
      {/* 套餐价格表 */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">套餐价格</h2>
        <PriceTable 
          title="原创制作套餐价格表" 
          columns={['套餐名称', '套餐价格', '包含服务']} 
          services={packageServices}
          headerBgColor="bg-gradient-to-r from-indigo-600 to-indigo-800"
        />
      </div>
      
      {/* 单项服务价格表 */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">单项服务价格</h2>
        <PriceTable 
          title="原创制作单项服务价格表" 
          columns={['服务项目', '单项价格', '服务说明']} 
          services={individualServices}
          headerBgColor="bg-gradient-to-r from-blue-600 to-blue-800"
        />
        
        <div className="mt-6 bg-gray-800 p-4 rounded-lg text-center">
          <p className="text-yellow-400 font-medium">注意：单独定制单项服务需额外增加100元手工费</p>
        </div>
      </div>
      
      {/* 咨询和下单区域 */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 text-white">需要定制您的专属音乐？</h3>
           <p className="text-gray-300 mb-6">
             我们提供一对一的专属定制服务，根据您的需求创作独一无二的音乐作品。
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
            <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
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
