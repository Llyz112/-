import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { vocalPostProductionServices, masteringServices, mixingServices } from './services/PostProduction';
import { audioProcessingServices } from './services/AudioProcessing';
import { afterSalesServices } from './services/AfterSalesService';


// 模拟支付方式
const paymentMethods = [
  { id: 'alipay', name: '支付宝', icon: 'alipay' },
  { id: 'wechat', name: '微信支付', icon: 'wechat' },
  { id: 'creditcard', name: '信用卡', icon: 'creditcard' },
];

export default function Payment() {
  // 状态管理
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedMethod, setSelectedMethod] = useState<string>(paymentMethods[0].id);
  const [quantity, setQuantity] = useState<number>(1);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showWeChatQR, setShowWeChatQR] = useState<boolean>(false);
  const [wechatCountdown, setWechatCountdown] = useState<number>(900); // 15分钟 = 900秒
  const [wechatTimer, setWechatTimer] = useState<number | null>(null);
  const [alipayCountdown, setAlipayCountdown] = useState<number>(900); // 15分钟 = 900秒
  const [alipayTimer, setAlipayTimer] = useState<number | null>(null);
  
  // 格式化时间为 MM:SS 格式
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  const [showAlipayQR, setShowAlipayQR] = useState<boolean>(false);
  
  // 微信支付倒计时效果
  useEffect(() => {
    if (showWeChatQR) {
      // 重置倒计时
      setWechatCountdown(900);
      
      // 启动倒计时
      const timer = setInterval(() => {
        setWechatCountdown(prev => {
          if (prev <= 1) {
            // 倒计时结束，关闭弹窗
            setShowWeChatQR(false);
            if (wechatTimer) clearInterval(wechatTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      setWechatTimer(timer);
    } else if (wechatTimer) {
      // 清除定时器
      clearInterval(wechatTimer);
      setWechatTimer(null);
    }
    
    // 组件卸载时清除定时器
    return () => {
      if (wechatTimer) clearInterval(wechatTimer);
    };
  }, [showWeChatQR, wechatTimer]);
  
  // 支付宝支付倒计时效果
  useEffect(() => {
    if (showAlipayQR) {
      // 重置倒计时
      setAlipayCountdown(900);
      
      // 启动倒计时
      const timer = setInterval(() => {
        setAlipayCountdown(prev => {
          if (prev <= 1) {
            // 倒计时结束，关闭弹窗
            setShowAlipayQR(false);
            if (alipayTimer) clearInterval(alipayTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      
      setAlipayTimer(timer);
    } else if (alipayTimer) {
      // 清除定时器
      clearInterval(alipayTimer);
      setAlipayTimer(null);
    }
    
    // 组件卸载时清除定时器
    return () => {
      if (alipayTimer) clearInterval(alipayTimer);
    };
  }, [showAlipayQR, alipayTimer]);
  
  // 服务列表（完整版）
  const services = [
    // 音频处理服务
    { id: 'pitch-shifting', name: '移调', price: 50, category: 'audio' },
    { id: 'vocal-removal', name: '消音', price: 30, category: 'audio' },
    { id: 'speed-adjustment', name: '变速', price: 50, category: 'audio' },
    { id: 'video-to-audio', name: '视频转音频', price: 50, category: 'audio' },
    { id: 'editing', name: '剪辑/串烧', price: 50, category: 'audio' },
    { id: 'seamless-joining', name: '无缝衔接', price: 50, category: 'audio' },
    
    // 原创制作服务 - 套餐
    { id: 'basic-package', name: '普通级套餐', price: 1100, category: 'original' },
    { id: 'release-package', name: '发行级套餐', price: 2200, category: 'original' },
    { id: 'premium-package', name: '高端原创级套餐', price: 5500, category: 'original' },
    
    // 原创制作服务 - 单项
    { id: 'songwriting', name: '作词', price: 300, category: 'original', note: '含100元手工费' },
    { id: 'composition', name: '作曲', price: 400, category: 'original', note: '含100元手工费' },
    { id: 'arrangement', name: '编曲', price: 700, category: 'original', note: '含100元手工费' },
    
    // 代唱服务
    { id: 'vocal-basic', name: '普通代唱', price: 500, category: 'vocal' },
    { id: 'vocal-pro', name: '发行级代唱', price: 2000, category: 'vocal' },
    { id: 'vocal-premium', name: '高端原创级代唱', price: 5000, category: 'vocal' },
    
    // 后期制作服务
    { id: 'vocal-post-basic', name: '普通贴唱后期', price: 300, category: 'post' },
    { id: 'vocal-post-pro', name: '专业贴唱后期', price: 800, category: 'post' },
    { id: 'mastering', name: '母带处理', price: 600, category: 'post' },
     { id: 'track-mixing', name: '音轨混音(分轨混音)', price: 200, category: 'post', note: '按乐器数量计费' },
     { id: 'online-release-mixing', name: '网络发行级混音', price: 3000, category: 'post' },
     { id: 'publishing-mixing', name: '出版级混音', price: 8000, category: 'post' }
   ];
   
   // 组合所有后期制作服务
   const postProductionServices = [
     ...vocalPostProductionServices,
     ...masteringServices,
     ...mixingServices
  ];
  
  // 合并所有服务用于价格计算（移除售后服务，因其价格不固定）
  const allServices = [
    ...audioProcessingServices,
    ...services
    // 售后服务因价格不固定，不包含在此处
  ];
  
   // 计算总价
  const calculateTotal = () => {
    const service = allServices.find(s => s.id === selectedService);
    if (service) {
      setTotalPrice(service.price * quantity);
    } else {
      setTotalPrice(0);
    }
  };
  
  // 当选择的服务或数量变化时重新计算总价
  useEffect(() => {
    calculateTotal();
  }, [selectedService, quantity]);
  
  // 选择服务时更新总价
  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };
  
  // 选择数量时更新总价
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };
  
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
          
          <Link 
            to="/services/audio-processing" 
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            查看服务价格
          </Link>
        </div>
      </nav>
      
      {/* 页面标题 */}
      <div className="container mx-auto px-4 mb-10 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">支付订单</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          请选择您需要的服务并完成支付，我们将尽快为您处理订单。
        </p>
      </div>
      
      {/* 支付表单 */}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* 订单信息 */}
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-6">订单信息</h2>
            
            {/* 服务选择 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                选择服务
              </label>
              <select 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 max-h-96 overflow-y-auto"
                value={selectedService}
                onChange={handleServiceChange}
              >
                 <option value="">-- 请选择服务类别 --</option>
                 <optgroup label="音频处理服务">
                   {services.filter(s => s.category === 'audio').map(service => (
                     <option key={service.id} value={service.id}>
                       {service.name} - {service.price}元/首
                     </option>
                   ))}
                 </optgroup>
                  <optgroup label="原创制作套餐">
                    {services.filter(s => s.category === 'original' && !s.note).map(service => (
                      <option key={service.id} value={service.id}>
                       {service.name} - {service.price}元{service.note ? ` (${service.note})` : ''}
                     </option>
                   ))}
                 </optgroup>
                  <optgroup label="原创制作单项服务 (含手工费)">
                    {services.filter(s => s.category === 'original' && s.note).map(service => (
                      <option key={service.id} value={service.id}>
                       {service.name} - {service.price}元{service.note ? ` (${service.note})` : ''}
                     </option>
                   ))}
                  </optgroup>
                  <optgroup label="代唱制作服务">
                    {services.filter(s => s.category === 'vocal').map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price}元/首
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="后期制作服务">
                    {postProductionServices.map(service => (
                      <option key={service.id} value={service.id}>
                        {service.name} - {service.price}元{service.note ? ` (${service.note})` : ''}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="售后服务">
                    {afterSalesServices.map(service => (
                      <option key={service.name} value={service.name.toLowerCase().replace(/\s+/g, '-')}>
                        {service.name} - {service.price}
                      </option>
                    ))}
                  </optgroup>
              </select>
            </div>
            
            {/* 数量选择 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                数量
              </label>
              <input 
                type="number" 
                min="1" 
                value={quantity}
                onChange={handleQuantityChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            
            {/* 附加说明 */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                附加说明（可选）
              </label>
              <textarea 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 min-h-[100px]"
                placeholder="请输入您的特殊要求或说明..."
              ></textarea>
            </div>
            
              {/* 重要提示 */}
            <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-lg text-center">
              <p className="text-orange-400 font-bold">请务必与客服沟通后再下单支付所需费用</p>
            </div>
          </div>
          
          {/* 支付信息 */}
          <div className="lg:col-span-1 bg-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-6">支付信息</h2>
            
            {/* 支付方式选择 */}
            <div className="mb-8">
              <p className="text-sm font-medium text-gray-300 mb-3">选择支付方式</p>
              <div className="space-y-3">
                {paymentMethods.map(method => (
                  <div 
                    key={method.id}
                    className={cn(
                      "flex items-center p-3 rounded-lg cursor-pointer transition-colors",
                      selectedMethod === method.id 
                        ? "bg-purple-900 border border-purple-500" 
                        : "bg-gray-900 border border-gray-700 hover:border-purple-500"
                    )}
                    onClick={() => setSelectedMethod(method.id)}
                  >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 transition-all duration-300 ${
                        selectedMethod === method.id 
                          ? 'bg-green-600' 
                          : "bg-gray-700 hover:bg-gray-600"
                      }`}></div>
                    <span>{method.name}</span>
                    {selectedMethod === method.id && (
                      <svg className="ml-auto w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* 价格明细 */}
            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">单价</span>
                <span className="text-white">
                   {selectedService 
                     ? `${allServices.find(s => s.id === selectedService)?.price || 0}元` 
                     : '0元'}
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-400">数量</span>
                <span className="text-white">{quantity}</span>
              </div>
              <div className="flex justify-between font-bold text-lg mt-4 pt-4 border-t border-gray-700">
                <span>总计</span>
                <span className="text-green-400">{totalPrice}元</span>
              </div>
            </div>
            
            {/* 支付按钮 */}
            <button 
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!selectedService}
               onClick={() => {
                 if (selectedMethod === 'wechat') {
                   setShowWeChatQR(true);
                 } else if (selectedMethod === 'alipay') {
                   setShowAlipayQR(true);
                 } else {
                   // 其他支付方式的处理逻辑
                   alert(`将跳转到${paymentMethods.find(m => m.id === selectedMethod)?.name}支付页面`);
                 }
               }}
            >
              确认支付 {totalPrice}元
            </button>
            
              <div className="mt-6 p-3 bg-gray-900 rounded-lg text-center">
                <p className="text-sm text-gray-300 mb-2">支付过程中有疑问？联系客服</p>
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <i class="fa-brands fa-weixin text-green-400"></i>
                  <span className="text-white">yunbinmusician</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <i class="fa-solid fa-phone text-blue-400"></i>
                  <span className="text-white">19079246479</span>
                </div>
              </div>
             <p className="text-xs text-gray-500 mt-4 text-center">
               支付即表示您同意我们的服务条款和隐私政策
             </p>
          </div>
          
          {/* 微信支付二维码弹窗 */}
          {showWeChatQR && (
            <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-6 max-w-md w-full"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900">微信支付</h3>
                  <button 
                    onClick={() => setShowWeChatQR(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <i className="fa-solid fa-times text-xl"></i>
                  </button>
                </div>
                
                <div className="text-center mb-6">
                  <p className="text-gray-700 mb-2">请使用微信扫描二维码支付</p>
                  <p className="text-2xl font-bold text-gray-900 mb-4">¥{totalPrice}</p>
                  
                  <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
                    <img 
                      src="https://lf-code-agent.coze.cn/obj/x-ai-cn/258295330562/attachment/a8afd3911ebf9eb5eddb3d7815c4345_20250721211058.jpg" 
                      alt="微信支付二维码" 
                      className="w-64 h-64 object-contain mx-auto"
                    />
                  </div>
                </div>
                
                 <div className="text-center text-gray-700 mb-6">
                   <p className="mb-2">请在15分钟内进行支付</p>
                   <p className="text-xl font-bold text-red-600">{formatTime(wechatCountdown)}</p>
                 </div>
              </motion.div>
            </div>
          )}
           </div>
           
           {/* 支付宝支付二维码弹窗 */}
           {showAlipayQR && (
             <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
               <motion.div 
                 initial={{ scale: 0.8, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 0.3 }}
                 className="bg-white rounded-2xl p-6 max-w-md w-full"
               >
                 <div className="flex justify-between items-center mb-6">
                   <h3 className="text-xl font-bold text-gray-900">支付宝支付</h3>
                   <button 
                     onClick={() => setShowAlipayQR(false)}
                     className="text-gray-500 hover:text-gray-700"
                   >
                     <i className="fa-solid fa-times text-xl"></i>
                   </button>
                 </div>
                 
                 <div className="text-center mb-6">
                   <p className="text-gray-700 mb-2">请使用支付宝扫描二维码支付</p>
                   <p className="text-2xl font-bold text-gray-900 mb-4">¥{totalPrice}</p>
                   
                   <div className="bg-white p-4 rounded-xl inline-block shadow-lg">
                     <img 
                       src="https://lf-code-agent.coze.cn/obj/x-ai-cn/258295330562/attachment/99a608acbb013d187fdafad46e84031_20250721215637.jpg" 
                       alt="支付宝支付二维码" 
                       className="w-64 h-64 object-contain mx-auto"
                     />
                   </div>
                 </div>
                 
                  <div className="text-center text-gray-700 mb-6">
                    <p className="mb-2">请在15分钟内进行支付</p>
                    <p className="text-xl font-bold text-red-600">{formatTime(alipayCountdown)}</p>
                  </div>
               </motion.div>
             </div>
           )}
         </div>
    </div>
  );
}