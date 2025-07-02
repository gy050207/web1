import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🎯</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">📌</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">⚡</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🧭</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到学习小屋</span>
          </Link>
        </div>

        <header className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">🎯</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 kawaii-decoration">
            CSS定位魔法课堂
          </h1>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto bg-white/60 rounded-full px-8 py-4 shadow-lg">
            🧭 通过互动式演示学习CSS的position属性！每种定位方式都有自己的超能力~ ✨
          </p>
        </header>

        <div className="space-y-12">
          
          {/* 相对定位 vs 绝对定位 */}
          <section className="kawaii-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-bounce">📌</span>
              <h2 className="text-3xl font-bold text-blue-700 border-l-4 border-blue-400 pl-4">
                相对定位 vs 绝对定位
              </h2>
            </div>
            
            <p className="text-blue-600 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
              🎯 绝对定位就像给元素装上了传送器！它会相对于最近的非static祖先元素进行定位。
              如果找不到这样的祖先，就会相对于整个页面定位~ 来看看演示吧！
            </p>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl h-80 relative border-4 border-dashed border-blue-300">
              <div className="absolute top-4 left-4 text-sm font-bold text-blue-600 bg-white/80 px-3 py-1 rounded-full">
                📦 父容器 (position: relative)
              </div>
              
              <div className="w-48 h-24 bg-white/80 border-2 border-blue-200 rounded-xl p-4 text-center shadow-lg">
                <p className="font-bold text-blue-700">🏠 默认位置的元素</p>
                <p className="text-sm text-blue-600">(position: static)</p>
              </div>

              <div className="w-48 h-24 bg-pink-100 border-2 border-pink-300 rounded-xl p-4 text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg">
                <p className="font-bold text-pink-700">✨ 绝对定位元素</p>
                <p className="text-sm text-pink-600">(position: absolute)</p>
                <p className="text-xs text-pink-500">top: 50%; left: 50%</p>
              </div>

               <div className="w-48 h-24 bg-purple-100 border-2 border-purple-300 rounded-xl p-4 text-center absolute bottom-4 right-4 shadow-lg">
                <p className="font-bold text-purple-700">🎪 另一个绝对定位</p>
                <p className="text-sm text-purple-600">(position: absolute)</p>
                <p className="text-xs text-purple-500">bottom: 1rem; right: 1rem</p>
              </div>
            </div>
            
            <div className="mt-4 text-center bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-lg">
              <p className="text-orange-700 font-semibold">
                🌟 看到了吗？绝对定位的元素可以在父容器内自由移动，就像有魔法一样！
              </p>
            </div>
          </section>

          {/* 固定定位 */}
          <section className="kawaii-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-pulse">📍</span>
              <h2 className="text-3xl font-bold text-blue-700 border-l-4 border-blue-400 pl-4">
                固定定位的超能力
              </h2>
            </div>
            
            <p className="text-blue-600 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
              🚀 固定定位就像给元素装上了吸盘！无论页面怎么滚动，它都会牢牢吸在同一个位置。
              看看右下角那个可爱的小元素吧~ 它永远跟着你！
            </p>
            
            <div className="h-48 flex justify-center items-center bg-gradient-to-br from-green-50 to-blue-50 p-10 rounded-2xl border-2 border-green-200">
              <div className="text-center">
                <div className="text-4xl mb-4">📜</div>
                <p className="text-green-700 font-bold text-lg">
                  向下滚动页面试试看！
                </p>
                <p className="text-green-600 text-sm">
                  观察右下角的固定元素，它会一直跟着你哦~ 💫
                </p>
              </div>
            </div>
          </section>

          {/* 固定定位的可爱元素 */}
          <div className="fixed bottom-10 right-10 w-40 h-16 bg-gradient-to-r from-pink-400 to-purple-500 text-white font-bold rounded-full shadow-2xl shadow-pink-500/50 flex justify-center items-center z-50 animate-bounce hover:scale-110 transition-transform cursor-pointer">
            <div className="text-center">
              <div className="text-lg">💖</div>
              <div className="text-xs">我是固定的!</div>
            </div>
          </div>

          {/* 定位方式总结 */}
          <div className="text-center bg-gradient-to-r from-yellow-100 to-pink-100 p-8 rounded-2xl border-2 border-yellow-200">
            <div className="text-4xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-4">CSS定位方式学习完成！</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">🏠</div>
                <div className="font-bold text-blue-700">Static</div>
                <div className="text-sm text-blue-600">默认正常流</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">📌</div>
                <div className="font-bold text-green-700">Relative</div>
                <div className="text-sm text-green-600">相对原位置</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">✨</div>
                <div className="font-bold text-pink-700">Absolute</div>
                <div className="text-sm text-pink-600">绝对定位</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white/60 p-4 rounded-lg inline-block">
                <div className="text-2xl mb-2">📍</div>
                <div className="font-bold text-purple-700">Fixed</div>
                <div className="text-sm text-purple-600">固定在视口</div>
              </div>
            </div>
          </div>
        </div>

        {/* 添加滚动空间 */}
        <div className="h-96 flex items-center justify-center">
          <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-8 rounded-2xl border-2 border-blue-200 text-center">
            <div className="text-4xl mb-4">🌟</div>
            <p className="text-blue-700 font-bold">
              继续滚动，观察固定定位元素的表现！
            </p>
            <p className="text-blue-600 text-sm mt-2">
              它会一直待在右下角陪伴你~ 💕
            </p>
          </div>
        </div>

      </main>
    </div>
  );
} 