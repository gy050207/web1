import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">📦</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🎨</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">⚡</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">💝</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到可爱小屋</span>
          </Link>
        </div>

        <header className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">🎭</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 kawaii-decoration">
            CSS样式的三种魔法引入方式
          </h1>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto bg-white/60 rounded-full px-8 py-4 shadow-lg">
            🎪 学习如何用三种不同的方式给网页穿上美丽的衣服！每种方式都有自己的特色哦~ ✨
          </p>
        </header>

        <div className="kawaii-card max-w-4xl mx-auto">
          <div className="p-6 border-b-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3">
              <span className="text-3xl animate-pulse">🎪</span>
              三种魔法样式演示台
            </h3>
          </div>
          
          <div className="p-8 space-y-8 bg-gradient-to-b from-white to-blue-50/50">
            <div className="text-center mb-6">
              <p className="text-blue-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
                💫 下面的每一项都使用了不同的样式魔法！仔细观察它们的不同之处~
              </p>
            </div>
            
            <div className="space-y-6">
              {/* 外部样式表演示 */}
              <div className="kawaii-card p-6 border-l-4 border-green-400 bg-green-50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl animate-bounce">📄</span>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">外部样式表魔法</span>
                </div>
                <div className="text-green-600 bg-white/70 p-4 rounded-lg">
                  <span className="font-bold">🌟 [全局样式文件]:</span> 这段文字的可爱样式来自全局的CSS文件！
                  就像给整个学校的学生统一发校服一样，一次设置，到处生效~ 💖
                </div>
                <p className="text-sm text-green-600 mt-2">
                  💡 优点：样式统一管理，多个页面共享！
                </p>
              </div>

              {/* 内部样式表演示 */}
              <div className="kawaii-card p-6 border-l-4 border-yellow-400 bg-yellow-50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl animate-pulse">📝</span>
                  <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold">内部样式表魔法</span>
                </div>
                <div className="text-yellow-700 bg-white/70 p-4 rounded-lg underline decoration-wavy">
                  <span className="font-bold">🎨 [页面级样式]:</span> 这段文字的波浪下划线和颜色通过页面内部的样式设置！
                  就像为这个班级的同学特别定制的班服，只在这个页面生效~ ✨
                </div>
                <p className="text-sm text-yellow-600 mt-2">
                  💡 优点：针对当前页面的特殊样式需求！
                </p>
              </div>

              {/* 内联样式演示 */}
              <div className="kawaii-card p-6 border-l-4 border-purple-400 bg-purple-50">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl animate-wave">🎯</span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-bold">内联样式魔法</span>
                </div>
                <div className="bg-white/70 p-4 rounded-lg">
                  <div style={{ color: '#8A2BE2', fontWeight: 'bold', fontSize: '18px' }}>
                    <span style={{ color: '#FBBF24', textDecoration: 'none' }}>🎨 [直接内联样式]:</span> 
                    这段文字的紫色和粗体直接写在元素上！
                    就像给这个小朋友穿上独一无二的特色服装，拥有最高的优先级~ 💫
                  </div>
                </div>
                <p className="text-sm text-purple-600 mt-2">
                  💡 优点：优先级最高，精确控制单个元素！
                </p>
              </div>
            </div>

            {/* 总结卡片 */}
            <div className="text-center bg-gradient-to-r from-pink-100 to-orange-100 p-6 rounded-2xl border-2 border-pink-200 mt-8">
              <div className="text-4xl mb-3">🎊</div>
              <h3 className="text-xl font-bold text-orange-700 mb-3">CSS样式引入方式学习完成！</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-lg mb-1">📄</div>
                  <div className="font-bold text-green-700">外部样式表</div>
                  <div className="text-green-600">全局统一</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-lg mb-1">📝</div>
                  <div className="font-bold text-yellow-700">内部样式表</div>
                  <div className="text-yellow-600">页面专用</div>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <div className="text-lg mb-1">🎯</div>
                  <div className="font-bold text-purple-700">内联样式</div>
                  <div className="text-purple-600">元素专属</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 