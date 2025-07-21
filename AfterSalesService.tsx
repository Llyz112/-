import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';

// 售后服务数据
export const afterSalesServices = [
  {
    name: '服务修订（基础）',
    price: '具体费用请询问客服',
    description: '针对已完成项目的基础修订，包括简单混音调整、音量平衡等'
  },
  {
    name: '服务修订（深度）',
    price: '具体费用请询问客服',
    description: '针对已完成项目的深度修订，包括多轨重新处理、音色调整等'
  },
  {
    name: '技术支持服务',
    price: '具体费用请询问客服',
    description: '提供音频文件播放、格式转换、设备兼容等技术问题解决方案'
  },
  {
    name: '额外材料提供',
    price: '具体费用请询问客服',
    description: '提供项目相关的额外材料，包括分轨文件、高清音频、工程文件等'
  },
  {
    name: '售后保障服务',
    price: '免费',
    description: '所有服务项目提供7天质量保障期，期间可享受一次免费基础修订'
  }
];

export default function AfterSalesService() {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      {/* 导航栏 */}
      <nav className="container mx-auto px-4 mb-10">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-orange-400 hover:text-orange-300 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            返回首页
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              to="/services/post-production" 
              className="px-4 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg transition-colors"
            >
              后期制作
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
        <h1 className="text-3xl md:text-4xl font-bold mb-4">售后服务</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          我们提供完善的售后服务保障，确保您对音乐制作成果满意。从服务修订到技术支持，全方位满足您的需求。
        </p>
      </div>
      
      {/* 价格表 */}
      <div className="container mx-auto px-4">
        <PriceTable 
          title="售后服务价格表" 
          columns={['服务项目', '服务费用', '服务说明']} 
          services={afterSalesServices}
          headerBgColor="bg-gradient-to-r from-orange-600 to-orange-800"
        />
      </div>
      
      {/* 咨询和下单区域 */}
      <div className="container mx-auto px-4 mt-16 text-center">
        <div className="max-w-2xl mx-auto bg-gray-800 p-8 rounded-xl">
           <h3 className="text-xl font-bold mb-4 text-white">需要售后服务支持？</h3>
           <p className="text-gray-300 mb-6">
             如有任何售后问题或需要技术支持，请联系我们的客服团队，我们将尽快为您解决。
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
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg transition-colors"
              >
                联系售后支持
              </Link>
            <Link 
              to="/payment" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
            >
              提交服务申请
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
