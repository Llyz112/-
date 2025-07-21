import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import AudioProcessing from "@/pages/services/AudioProcessing";
import OriginalProduction from "@/pages/services/OriginalProduction";
import PostProduction from "@/pages/services/PostProduction";
import VocalProduction from "@/pages/services/VocalProduction";
import MusicAudition from "@/pages/services/MusicAudition";
import AfterSalesService from "@/pages/services/AfterSalesService";
import Payment from "@/pages/Payment";
import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuthenticated: false,
  setIsAuthenticated: (value: boolean) => {},
  logout: () => {},
});

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, logout }}
    >
      <Routes>
22|        <Route path="/" element={<Home />} />
23|        <Route path="/services/audio-processing" element={<AudioProcessing />} />
        <Route path="/services/original-production" element={<OriginalProduction />} />
          <Route path="/services/post-production" element={<PostProduction />} />
          <Route path="/services/vocal-production" element={<VocalProduction />} />
           <Route path="/services/music-audition" element={<MusicAudition />} />
           <Route path="/services/after-sales" element={<AfterSalesService />} />
          <Route path="/payment" element={<Payment />} />
         <Route path="/contact" element={
            <div className="min-h-screen bg-gray-900 text-white py-20">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl font-bold mb-10">联系我们</h1>
                <div className="max-w-md mx-auto bg-gray-800 p-8 rounded-xl">
                  <div className="mb-8">
                    <i class="fa-brands fa-weixin text-green-500 text-5xl mb-4"></i>
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
                    <i class="fa-solid fa-phone text-blue-500 text-2xl mb-2"></i>
                    <h3 className="text-xl font-bold mb-1">联系电话</h3>
                    <p className="text-gray-300">19079246479</p>
                  </div>
                  <p className="text-gray-400">工作时间: 周一至周日 9:00-22:00</p>
                </div>
              </div>
            </div>
          } />
29|      </Routes>
    </AuthContext.Provider>
  );
}
