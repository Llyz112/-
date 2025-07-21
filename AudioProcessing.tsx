import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';

// 音频处理服务数据
export const audioProcessingServices = [
  {
    name: '移调',
    price: '50元/首',
    description: '歌曲变奏升降调处理'
  },
  {
    name: '消音',
    price: '30元/精消50元',
    description: '根据不同软件打到弱化歌曲人声还原伴奏的效果'
  },
  {
    name: '变速',
    price: '50元/首',
    description: '改变歌曲原有节奏速度'
  },
  {
    name: '视频转音频',
    price: '50元/首',
    description: '视频转化成音频例如MP4转成MP3'
  },
  {
    name: '剪辑/串烧',
    price: '50元/首',
    description: '点，剪一刀是一个点，接一下也是一个点，例：3首歌接在一起就会有两个点，那么费用就为20元。'
  },
  {
    name: '无缝衔接',
    price: '50元/首',
    description: '(对衔接要求比较高的)'
  }
];

export default function AudioProcessing() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-purple-400 hover:text-purple-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              to="/services/original-production" 
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
            >
              原创制作
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">音频处理服务价格</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我们提供专业的音频处理服务，满足您对音乐制作的各种需求。所有价格仅供参考，实际价格可能因制作难度有所调整。
        </p>
      </div>
      
      {/* 价格表 */}
      <div className="container mx-auto px-4">
        <PriceTable 
          title="音频处理价格表" 
          columns={['项目', '制作费（元）', '制作说明']} 
          services={audioProcessingServices}
          headerBgColor="bg-gradient-to-r from-purple-600 to-purple-800"
        />
      </div>
      
      {/* 咨询和下单区域 */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 text-white">需要更多信息或定制服务？</h3>
           <p className="text-gray-300 mb-6">
             如有任何疑问或需要定制化服务，请联系我们的客服团队获取详细信息。
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
            <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors">
              联系客服
            </button>
            <Link 
              to="/payment" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              立即下单
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}