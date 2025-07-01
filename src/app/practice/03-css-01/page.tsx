import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🎨</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">✨</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🌈</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🎀</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到可爱小屋</span>
          </Link>
        </div>

        <header className="text-center mb-12 relative">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-4xl animate-bounce">🌈</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 kawaii-decoration">
            CSS魔法选择器课堂
          </h1>
          <p className="text-lg text-blue-600 max-w-2xl mx-auto bg-white/60 rounded-full px-8 py-4 shadow-lg">
            🎭 让我们一起学习CSS的三种神奇选择器吧！每一个都有自己的魔法属性哦~ ✨
          </p>
        </header>

        <div className="kawaii-card max-w-4xl mx-auto">
          <div className="p-6 border-b-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <h3 className="text-2xl font-bold text-blue-800 flex items-center gap-3">
              <span className="text-3xl animate-pulse">🎪</span>
              魔法效果演示台
            </h3>
          </div>
          
          <div className="p-8 space-y-8 bg-gradient-to-b from-white to-blue-50/50">
            {/* 主标题 */}
            <div className="text-center">
              <h1 className="text-3xl font-bold text-blue-600 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent" style={{ fontFamily: 'Comic Sans MS, cursive' }}>
                🎨 CSS魔法练习演示 🎨
              </h1>
            </div>
            
            {/* ID 选择器演示 */}
            <div className="kawaii-card p-6 border-l-4 border-green-400 bg-green-50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl animate-bounce">🆔</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">ID选择器</span>
              </div>
              <h2 id="CSSbase" className="text-2xl font-bold text-green-600 mb-2">
                CSS语法基础小课堂 (ID: CSSbase)
              </h2>
              <p className="text-green-700 text-sm">
                💡 ID选择器就像给每个元素一个独特的身份证号码！每个页面上只能有一个相同的ID哦~
              </p>
            </div>
            
            {/* 类选择器演示 */}
            <div className="kawaii-card p-6 border-l-4 border-cyan-400 bg-cyan-50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl animate-pulse">🏷️</span>
                <span className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-bold">类选择器</span>
              </div>
              <p className="abstract text-base leading-relaxed italic text-cyan-700 bg-white/70 p-4 rounded-lg shadow-sm">
                🌟 这是一个可爱的摘要段落 (class: abstract)，类选择器让我变得这么特别！
                就像给一群小朋友穿上同样颜色的校服一样，同一个类的元素都会有相似的样式~ 💖
              </p>
            </div>
            
            {/* 标签选择器演示 */}
            <div className="kawaii-card p-6 border-l-4 border-pink-400 bg-pink-50">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl animate-wave">🏷️</span>
                <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-bold">标签选择器</span>
              </div>
              <p className="leading-relaxed text-pink-700 mb-4">
                🎈 标签选择器是最基础的选择器，它会选择所有相同标签的元素！
                就像说&ldquo;所有的段落都要变成粉色&rdquo;一样简单~ 
              </p>

              <div className="bg-white/80 p-4 rounded-lg shadow-sm">
                <p className="text-pink-600 mb-3">
                  🔗 下面展示链接的伪类选择器魔法：
                </p>
                <div className="space-y-2">
                  <a href="#" className="kawaii-button px-4 py-2 text-white inline-block mr-4 hover:scale-105 transition-all">
                    🌟 普通链接 (a:link)
                  </a>
                  <a href="#" className="bg-purple-200 text-purple-700 px-4 py-2 rounded-full inline-block hover:bg-purple-300 transition-all">
                    💜 访问过的链接 (a:visited)
                  </a>
                </div>
              </div>
            </div>

            {/* 总结卡片 */}
            <div className="text-center bg-gradient-to-r from-yellow-100 to-pink-100 p-6 rounded-2xl border-2 border-yellow-200">
              <div className="text-4xl mb-3">🎊</div>
              <h3 className="text-xl font-bold text-yellow-700 mb-2">恭喜完成CSS选择器学习！</h3>
              <p className="text-yellow-600">
                现在你已经掌握了CSS的三种基础选择器魔法咒语啦~ 继续加油！💪✨
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 