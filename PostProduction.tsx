import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';

// 贴唱后期服务数据
export const vocalPostProductionServices = [
  {
    name: '普通贴唱后期',
    price: '300元/首',
    description: '人声修音对轨、修节奏、降噪、EQ(均衡)、压缩、混响DELAY'
  },
  {
    name: '专业贴唱后期',
    price: '800元/首',
    description: '高级人声修音对轨、精细节奏调整、深度降噪、专业EQ均衡、多段压缩、空间混响DELAY处理'
  }
];

// 母带处理服务数据
export const masteringServices = [
  {
    name: '母带处理',
    price: '600元/首',
    description: '母带门限、动态处理、立体声增强、整体音色平衡、响度优化等专业母带处理'
  }
];

// 混音服务数据
export const mixingServices = [
  {
    name: '音轨混音(分轨混音)',
    price: '200元/乐器',
    description: '需客户提供MIDI文件，专业分轨混音处理'
  },
  {
    name: '网络发行级混音(分轨混音)',
    price: '3000元/起',
    description: '编曲分轨混音、单轨精细处理、乐器及人声润色，达到网络发行标准'
  },
  {
    name: '出版级混音(分轨混音)',
    price: '8000元/首',
    description: '唱片公司出版质量，顶级混音技术，多轨精细处理，达到专业发行水准'
  }
];

export default function PostProduction() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-pink-400 hover:text-pink-300 flex items-center">
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">后期制作服务价格</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我们提供专业的音乐后期制作服务，从人声处理到母带制作，满足您从 demo 到发行级别的各种需求。
        </p>
      </div>
      
      {/* 贴唱后期价格表 */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">贴唱后期服务</h2>
        <PriceTable 
          title="人声后期处理价格表" 
          columns={['服务级别', '价格', '服务内容']} 
          services={vocalPostProductionServices}
          headerBgColor="bg-gradient-to-r from-pink-600 to-pink-800"
        />
      </div>
      
      {/* 母带处理价格表 */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">母带处理服务</h2>
        <PriceTable 
          title="母带处理价格表" 
          columns={['服务项目', '价格', '服务内容']} 
          services={masteringServices}
          headerBgColor="bg-gradient-to-r from-rose-600 to-rose-800"
        />
      </div>
      
      {/* 混音服务价格表 */}
      <div className="container mx-auto px-4 mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">混音服务</h2>
        <PriceTable 
          title="混音服务价格表" 
          columns={['服务项目', '价格', '服务内容']} 
          services={mixingServices}
          headerBgColor="bg-gradient-to-r from-fuchsia-600 to-fuchsia-800"
        />
        
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <p className="text-yellow-400 font-medium">注意：音轨混音(分轨混音)服务需客户提供MIDI文件，按乐器数量计费，200元/乐器</p>
        </div>
      </div>
      
      {/* 咨询和下单区域 */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 text-white">需要专业后期制作服务？</h3>
           <p className="text-gray-300 mb-6">
             我们的专业后期团队将为您的音乐作品提供高质量的混音和母带处理，提升作品品质。
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
            <button className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors">
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
