import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">📦</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🏗️</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">⚡</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🎪</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到可爱小屋</span>
          </Link>
        </div>

        <header className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">🎭</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 kawaii-decoration">
            CSS核心魔法概念课堂
          </h1>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto bg-white/60 rounded-full px-8 py-4 shadow-lg">
            📦 探索盒模型、布局系统和动画的奇妙世界！每个概念都是网页设计的重要魔法~ ✨
          </p>
        </header>

        <div className="space-y-12">
          
          {/* 盒模型部分 */}
          <section className="kawaii-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-bounce">📦</span>
              <h2 className="text-3xl font-bold text-blue-700 border-l-4 border-blue-400 pl-4">
                盒模型小世界 (Box Model)
              </h2>
            </div>
            
            <p className="text-blue-600 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
              🎁 CSS盒模型就像俄罗斯套娃一样！每个元素都是一个可爱的小盒子，从内到外有：
              内容→内边距→边框→外边距。让我们来看看这个神奇的结构吧！
            </p>
            
            <div className="flex justify-center items-center bg-gradient-to-br from-blue-50 to-purple-50 p-10 rounded-2xl border-2 border-blue-200">
              <div className="relative">
                {/* 外边距标示 */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                  Margin (外边距) 💜
                </div>
                
                <div className="bg-purple-200 p-6 rounded-lg" style={{ margin: '2rem' }}>
                  {/* 边框标示 */}
                  <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-xs font-bold text-blue-600 bg-blue-100 px-2 py-1 rounded rotate-90">
                    Border (边框) 💙
                  </div>
                  
                  <div className="bg-cyan-200 p-6 rounded-lg" style={{ border: '3px dashed #06B6D4' }}>
                    {/* 内边距标示 */}
                    <div className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-xs font-bold text-cyan-600 bg-cyan-100 px-2 py-1 rounded -rotate-90">
                      Padding (内边距) 💚
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-200 to-yellow-200 text-blue-800 p-8 rounded-lg text-center font-bold shadow-lg">
                      <div className="text-2xl mb-2">✨</div>
                      Content
                      <div className="text-sm">(内容区域)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-6 bg-white/60 p-4 rounded-lg">
              <p className="text-sm text-blue-600 font-semibold">
                🌈 从外到内：Margin(外边距) → Border(边框) → Padding(内边距) → Content(内容)
              </p>
            </div>
          </section>

          {/* 布局部分 */}
          <section className="kawaii-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-pulse">🏗️</span>
              <h2 className="text-3xl font-bold text-blue-700 border-l-4 border-blue-400 pl-4">
                布局游乐场 (Layout)
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inline展示 */}
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🧩</span>
                  <h3 className="text-xl font-bold text-green-700">Display: inline</h3>
                </div>
                <p className="text-green-600 mb-4 text-sm">
                  🎪 让块级元素像小朋友手拉手一样排成一行！
                </p>
                <div className="bg-white/70 p-4 rounded-lg">
                  <div className="inline bg-green-200 text-green-800 p-3 rounded-full text-sm font-bold mr-2">🌟 元素一</div>
                  <div className="inline bg-green-200 text-green-800 p-3 rounded-full text-sm font-bold mr-2">🌟 元素二</div>
                  <div className="inline bg-green-200 text-green-800 p-3 rounded-full text-sm font-bold">🌟 元素三</div>
                </div>
              </div>
              
              {/* Flexbox展示 */}
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🎯</span>
                  <h3 className="text-xl font-bold text-purple-700">Display: flex (Flexbox)</h3>
                </div>
                <p className="text-purple-600 mb-4 text-sm">
                  🚀 超强大的一维布局魔法！可以轻松对齐和分布元素~
                </p>
                <div className="bg-white/70 p-4 rounded-lg flex justify-around items-center">
                  <div className="bg-purple-200 text-purple-800 p-3 rounded-lg text-sm font-bold text-center">
                    <div className="text-lg">🎈</div>
                    Flex子项1
                  </div>
                  <div className="bg-purple-200 text-purple-800 p-3 rounded-lg text-sm font-bold text-center">
                    <div className="text-lg">🎀</div>
                    Flex子项2
                  </div>
                  <div className="bg-purple-200 text-purple-800 p-3 rounded-lg text-sm font-bold text-center">
                    <div className="text-lg">🌸</div>
                    Flex子项3
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 动画部分 */}
          <section className="kawaii-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl animate-spin slow">⚡</span>
              <h2 className="text-3xl font-bold text-blue-700 border-l-4 border-blue-400 pl-4">
                过渡动画魔法 (Transition)
              </h2>
            </div>
            
            <p className="text-blue-600 mb-8 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300">
              ✨ 通过transition属性，可以为CSS属性的变化添加平滑的动画效果！
              就像给网页元素施了魔法一样，让它们优雅地变化~ 把鼠标悬停在下面的小方块上试试！
            </p>
            
            <div className="text-center">
              <div className="inline-flex flex-col items-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 flex justify-center items-center text-white font-bold cursor-pointer transition-all duration-500 ease-in-out hover:bg-gradient-to-br hover:from-pink-400 hover:to-yellow-400 hover:text-blue-800 hover:rounded-full hover:scale-125 hover:rotate-180 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl mb-1">🎭</div>
                    <div className="text-sm">悬停我</div>
                  </div>
                </div>
                <p className="text-sm text-blue-600 mt-4 bg-white/60 px-4 py-2 rounded-full">
                  🌟 悬停后会变色、圆形、放大、旋转！
                </p>
              </div>
            </div>
          </section>

          {/* 总结卡片 */}
          <div className="text-center bg-gradient-to-r from-yellow-100 to-pink-100 p-8 rounded-2xl border-2 border-yellow-200">
            <div className="text-4xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-4">CSS核心概念学习完成！</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">📦</div>
                <div className="font-bold text-blue-700">盒模型</div>
                <div className="text-sm text-blue-600">元素的层次结构</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">🏗️</div>
                <div className="font-bold text-purple-700">布局系统</div>
                <div className="text-sm text-purple-600">元素的排列方式</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">⚡</div>
                <div className="font-bold text-pink-700">过渡动画</div>
                <div className="text-sm text-pink-600">元素的动态效果</div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
} 