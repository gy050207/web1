import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🌟</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">📐</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">⚡</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🎯</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到学习小屋</span>
          </Link>
        </div>

        <header className="text-center mb-16 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">📐</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 kawaii-decoration">
            相对定位小课堂
          </h1>
          <p className="text-lg text-blue-600 max-w-3xl mx-auto bg-white/60 rounded-full px-8 py-4 shadow-lg">
            🎯 相对定位就像给元素一个温馨的小家！它可以相对于原来的位置移动，但原来的空间还是为它保留着~ ✨
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          
          {/* 正常文档流 */}
          <section className="kawaii-card p-8">
            <div className="text-center mb-6">
              <span className="text-3xl mb-3 block">🏠</span>
              <h2 className="text-2xl font-bold text-blue-700">正常文档流</h2>
              <p className="text-blue-600 text-sm mt-2">就像小朋友排队一样整齐</p>
            </div>
            
            <div className="space-y-4 text-center">
              <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl border-2 border-blue-300 shadow-sm">
                <span className="text-blue-700 font-bold">🎈 元素 1</span>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl border-2 border-green-300 shadow-sm">
                <span className="text-green-700 font-bold">🌸 元素 2</span>
              </div>
              <div className="p-4 bg-gradient-to-r from-cyan-100 to-cyan-200 rounded-xl border-2 border-cyan-300 shadow-sm">
                <span className="text-cyan-700 font-bold">⭐ 元素 3</span>
                <div className="text-xs text-cyan-600 mt-1">(即将被定位的小可爱)</div>
              </div>
              <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl border-2 border-purple-300 shadow-sm">
                <span className="text-purple-700 font-bold">🦋 元素 4</span>
              </div>
            </div>
          </section>

          {/* 相对定位演示 */}
          <section className="kawaii-card p-8">
            <div className="text-center mb-6">
              <span className="text-3xl mb-3 block">📐</span>
              <h2 className="text-2xl font-bold text-blue-700">相对定位魔法</h2>
              <p className="text-blue-600 text-sm mt-2">元素3搬了新家，但老家还给它留着</p>
            </div>
            
            <div className="space-y-4 text-center relative">
              <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl border-2 border-blue-300 shadow-sm">
                <span className="text-blue-700 font-bold">🎈 元素 1</span>
              </div>
              <div className="p-4 bg-gradient-to-r from-green-100 to-green-200 rounded-xl border-2 border-green-300 shadow-sm">
                <span className="text-green-700 font-bold">🌸 元素 2</span>
              </div>
              
              {/* 原来位置的幽灵元素 */}
              <div className="p-4 bg-gradient-to-r from-gray-100 to-gray-200 border-2 border-dashed border-gray-400 rounded-xl opacity-50">
                <span className="text-gray-500 font-bold">👻 元素 3 的原始位置</span>
                <div className="text-xs text-gray-400 mt-1">(空间被保留了)</div>
              </div>

              {/* 相对定位的元素 */}
              <div className="p-4 bg-gradient-to-r from-cyan-200 to-cyan-300 rounded-xl border-2 border-cyan-400 shadow-lg absolute w-full" style={{ top: 'calc(8rem + 2rem + 8px)', left: '40px' }}>
                <span className="text-cyan-800 font-bold">⭐ 元素 3</span>
                <div className="text-xs text-cyan-700 mt-1">(position: relative; left: 40px;)</div>
                <div className="text-xs text-cyan-600">搬到了新位置，但原来的空间还在！</div>
              </div>

              <div className="p-4 bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl border-2 border-purple-300 shadow-sm">
                <span className="text-purple-700 font-bold">🦋 元素 4</span>
              </div>

              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center mt-16">
                <p className="text-orange-700 font-bold text-sm">
                  🎯 看到没？元素4的位置没有改变！
                </p>
                <p className="text-orange-600 text-xs mt-1">
                  因为元素3在文档流中的空间被保留了~
                </p>
              </div>
            </div>
          </section>
        </div>
        
        {/* 代码展示 */}
        <div className="mt-12 kawaii-card p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">💻</span>
            <h3 className="text-xl font-bold text-blue-700">核心代码展示</h3>
          </div>
          
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-green-400 p-6 rounded-xl overflow-x-auto font-mono">
            <div className="text-pink-400 mb-2">{/* 相对定位的魔法咒语 ✨ */}</div>
            <div className="text-yellow-300">.target-element</div>
            <div className="text-white"> {`{`}</div>
            <div className="text-cyan-300 ml-4">position: relative;</div>
            <div className="text-cyan-300 ml-4">top: 50px; <span className="text-gray-400">{/* 相对于原位置向下移动 50px */}</span></div>
            <div className="text-cyan-300 ml-4">left: 40px; <span className="text-gray-400">{/* 相对于原位置向右移动 40px */}</span></div>
            <div className="text-white">{`}`}</div>
          </div>
        </div>

        {/* 总结卡片 */}
        <div className="mt-12 text-center bg-gradient-to-r from-pink-100 to-purple-100 p-8 rounded-2xl border-2 border-pink-200">
          <div className="text-4xl mb-4">🎊</div>
          <h3 className="text-2xl font-bold text-purple-700 mb-4">相对定位学习完成！</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/60 p-6 rounded-lg">
              <div className="text-3xl mb-3">🏠</div>
              <div className="font-bold text-blue-700 mb-2">保留原空间</div>
              <div className="text-sm text-blue-600">
                相对定位的元素会保留在文档流中的原始空间，其他元素不会占用这个位置
              </div>
            </div>
            <div className="bg-white/60 p-6 rounded-lg">
              <div className="text-3xl mb-3">📐</div>
              <div className="font-bold text-green-700 mb-2">相对偏移</div>
              <div className="text-sm text-green-600">
                使用top、right、bottom、left属性相对于原始位置进行偏移
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
} 