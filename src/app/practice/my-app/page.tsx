import Link from 'next/link';
import Image from 'next/image';
import MyAppDemo from "../my-app-demo";
import MyAppHello from "../my-app-hello";

export default function MyAppHome() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🎨</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">⚛️</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🌟</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">💎</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到温馨小屋</span>
          </Link>
        </div>

        {/* 说明卡片 */}
        <section className="max-w-4xl mx-auto mb-10 kawaii-card p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0 relative">
              <Image 
                src="/practice/images/chiikawa表情包动图 (10)_爱给网_aigei_com.gif"
                alt="可爱的背景"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-8 w-full h-64 object-cover"
                priority
              />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">⚛️</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">✨</div>
            </div>
            <div className="flex-1">
              <div className="text-center md:text-left mb-4">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <span className="text-3xl animate-bounce">🎨</span>
                  <h2 className="text-3xl font-bold text-blue-700">可爱React应用示例</h2>
                  <span className="text-2xl animate-pulse">💎</span>
                </div>
              </div>
              <p className="text-blue-600 mb-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                🌟 一个超级可爱的React应用页面！展示了组件化开发的魅力，
                每个小组件都像积木一样可以自由组合，创造出美妙的用户界面~ ✨
              </p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start">
                <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-blue-200 hover:scale-105 transition-transform">
                  ⚛️ React魔法
                </span>
                <span className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-green-200 hover:scale-105 transition-transform">
                  🎯 入门友好
                </span>
                <span className="bg-gradient-to-r from-pink-100 to-orange-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-pink-200 hover:scale-105 transition-transform">
                  🎨 组件化
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-4xl animate-bounce">🎪</span>
              <h1 className="text-4xl font-bold text-blue-700 kawaii-decoration">
                可爱组件演示区
              </h1>
              <span className="text-4xl animate-pulse">✨</span>
            </div>
            <p className="text-blue-600 bg-blue-50 p-4 rounded-full max-w-2xl mx-auto">
              下面的每个组件都有自己的个性和功能！点击和互动，感受React组件的魅力吧~ 💖
            </p>
          </div>
          
          <div className="space-y-8">
            {/* 组件展示区域 */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-2xl border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl animate-bounce">🎯</span>
                <h3 className="text-xl font-bold text-green-700">Demo组件展示</h3>
                <span className="text-lg animate-pulse">✨</span>
              </div>
              <MyAppDemo />
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-2xl border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl animate-wave">👋</span>
                <h3 className="text-xl font-bold text-purple-700">Hello组件展示</h3>
                <span className="text-lg animate-pulse">💫</span>
              </div>
              <MyAppHello />
            </div>
          </div>

          {/* 学习要点卡片 */}
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-cyan-50 p-6 rounded-xl border-2 border-cyan-200 text-center">
              <div className="text-3xl mb-3">🧩</div>
              <h3 className="font-bold text-cyan-700 mb-2">组件化思维</h3>
              <p className="text-sm text-cyan-600">
                每个组件都是独立的小积木，可以重复使用和组合！
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200 text-center">
              <div className="text-3xl mb-3">⚛️</div>
              <h3 className="font-bold text-orange-700 mb-2">React魔法</h3>
              <p className="text-sm text-orange-600">
                通过状态管理和事件处理，让界面变得生动有趣！
              </p>
            </div>
          </div>

          {/* 总结卡片 */}
          <div className="mt-12 text-center bg-gradient-to-r from-yellow-100 to-pink-100 p-8 rounded-2xl border-2 border-yellow-200">
            <div className="text-4xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-4">React组件学习完成！</h3>
            <p className="text-orange-600 max-w-2xl mx-auto">
              恭喜你完成了React组件的学习！现在你已经了解了组件化开发的基本概念，
              可以开始创建自己的可爱组件了~ 继续加油！💪✨
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 