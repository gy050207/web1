import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">📝</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">🎨</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🌟</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🎀</div>
      </div>
      
      <main className="flex-grow container mx-auto px-4 py-12 z-10">
        <div className="relative mb-8">
          <Link href="/" className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 shadow-lg">
            <span className="text-xl">🏠</span>
            <span>回到学习小屋</span>
          </Link>
        </div>

        {/* 说明卡片 */}
        <section className="max-w-4xl mx-auto mb-10 kawaii-card p-8">
          <div className="text-center mb-6">
            <div className="text-4xl mb-4 animate-bounce">📝</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              HTML基础标签魔法课堂
            </h2>
            <p className="text-lg text-blue-600 bg-blue-50 rounded-full px-6 py-2 inline-block">
              探索HTML标签的奇妙世界！每个标签都有自己的超能力~ ✨
            </p>
          </div>
          
          {/* 学习要点 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-green-700">标签魔法</h3>
              </div>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• 📝 标题和段落的结构魔法</li>
                <li>• 🔗 超链接的传送门魔法</li>
                <li>• 📋 列表的整理魔法</li>
                <li>• 🖼️ 图片的展示魔法</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-purple-700">互动体验</h3>
              </div>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• 📊 表格的数据整理魔法</li>
                <li>• 📝 表单的信息收集魔法</li>
                <li>• 🎪 所有元素都可以互动</li>
                <li>• 🎉 体验HTML的基础魅力</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl animate-bounce">📝</span>
              <span className="font-bold text-orange-700">HTML基础入门</span>
              <span className="text-xl animate-bounce">🎨</span>
            </div>
            <p className="text-sm text-orange-600">
              所有的标签都是HTML的基础构建块！点击链接、填写表单，感受每个标签的独特魅力~ 💖
            </p>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-700 kawaii-decoration">
            🌟 HTML标签魔法展示台 ✨
          </h1>
          
          <div className="space-y-8">
            {/* 标题和段落演示 */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📝</span>
                <h3 className="text-xl font-bold text-blue-700">标题与段落魔法</h3>
              </div>
              
              <p className="text-blue-600 leading-relaxed mb-4">
                段落标记就像一个温馨的小窝，让文字住得舒舒服服！a标签是行内元素，效果是这样的，
                <a 
                  href="https://yangzh.cn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-pink-600 font-bold hover:text-pink-700 hover:underline decoration-wavy transition-all duration-300"
                >
                  🔗 这是一个神奇的传送门链接！
                </a>
                点击它就能穿越到另一个网站~ ✨
              </p>
            </div>

            {/* 列表演示 */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border-2 border-green-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📋</span>
                <h3 className="text-xl font-bold text-green-700">列表整理魔法</h3>
              </div>
              
              <ol className="space-y-2 text-green-600 font-semibold">
                <li className="flex items-center gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">1</span>
                  🎈 苹果
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">2</span>
                  🌸 葡萄
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">3</span>
                  ⭐ 草莓
                </li>
                <li className="flex items-center gap-2">
                  <span className="bg-green-200 text-green-800 px-2 py-1 rounded-full text-sm">4</span>
                  🦋 芒果
                </li>
              </ol>
            </div>

            {/* 图片演示 */}
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 p-6 rounded-xl border-2 border-pink-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🖼️</span>
                <h3 className="text-xl font-bold text-pink-700">图片展示魔法</h3>
              </div>
              
              <div className="flex gap-6 flex-wrap items-center justify-center">
                <div className="relative group">
                  <Image 
                    src="/practice/images/chiikawa动态表情包 (159)_爱给网_aigei_com.gif"
                    alt="欢迎来到我的主页"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg mb-4"
                    priority
                  />
                  <div className="absolute -top-2 -right-2 text-2xl animate-bounce">📸</div>
                </div>
                <div className="relative group">
                  <Image 
                    src="/practice/images/Chiikawa透明动图 (11)_爱给网_aigei_com.gif"
                    alt="学习之旅"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-lg mb-4"
                    priority
                  />
                  <div className="absolute -top-2 -left-2 text-2xl animate-pulse">🌄</div>
                </div>
              </div>
              <p className="text-pink-600 text-center mt-4 text-sm">
                悬停在图片上看看会发生什么可爱的事情~ 💕
              </p>
            </div>

            {/* 表格演示 */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-2 border-cyan-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📊</span>
                <h3 className="text-xl font-bold text-cyan-700">表格整理魔法</h3>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full border-2 border-cyan-300 rounded-lg overflow-hidden bg-white/80">
                  <thead>
                    <tr className="bg-gradient-to-r from-cyan-200 to-blue-200">
                      <th className="border border-cyan-300 p-3 font-bold text-cyan-800">🎯 序号</th>
                      <th className="border border-cyan-300 p-3 font-bold text-cyan-800">🎪 内容</th>
                      <th className="border border-cyan-300 p-3 font-bold text-cyan-800">✨ 状态</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-cyan-50 transition-colors">
                      <td className="border border-cyan-200 p-3 text-center font-semibold text-cyan-700">1</td>
                      <td className="border border-cyan-200 p-3 text-cyan-700">学习 🎈</td>
                      <td className="border border-cyan-200 p-3 text-center">
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">✅ 完成</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-cyan-50 transition-colors">
                      <td className="border border-cyan-200 p-3 text-center font-semibold text-cyan-700">2</td>
                      <td className="border border-cyan-200 p-3 text-cyan-700">期末 🌸</td>
                      <td className="border border-cyan-200 p-3 text-center">
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm">⏳ 进行中</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-cyan-50 transition-colors">
                      <td className="border border-cyan-200 p-3 text-center font-semibold text-cyan-700">3</td>
                      <td className="border border-cyan-200 p-3 text-cyan-700">暑假 ⭐</td>
                      <td className="border border-cyan-200 p-3 text-center">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-sm">📋 计划中</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 表单演示 */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📝</span>
                <h3 className="text-xl font-bold text-purple-700">表单魔法互动</h3>
              </div>
              
              <form 
                action="https://search.douban.com/book/subject_search" 
                method="get" 
                className="flex gap-4 items-center justify-center flex-wrap"
              >
                <div className="flex items-center gap-3">
                  <span className="text-purple-600 font-bold">🔍</span>
                  <input 
                    type="text" 
                    name="search_text" 
                    className="px-4 py-3 rounded-full border-2 border-purple-300 text-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent bg-white/90 shadow-sm" 
                    placeholder="在豆瓣搜索好书..." 
                  />
                </div>
                <input 
                  type="submit" 
                  value="🚀 开始搜索" 
                  className="kawaii-button px-6 py-3 text-white hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg" 
                />
              </form>
              <p className="text-purple-600 text-center mt-4 text-sm">
                输入书名然后点击搜索，体验表单的神奇传送魔法~ ✨
              </p>
            </div>
          </div>

          {/* 总结卡片 */}
          <div className="mt-12 text-center bg-gradient-to-r from-yellow-100 to-pink-100 p-8 rounded-2xl border-2 border-yellow-200">
            <div className="text-4xl mb-4">🎊</div>
            <h3 className="text-2xl font-bold text-orange-700 mb-4">HTML基础标签学习完成！</h3>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-bold text-blue-700">文本结构</div>
                <div className="text-sm text-blue-600">标题段落</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">🔗</div>
                <div className="font-bold text-green-700">链接导航</div>
                <div className="text-sm text-green-600">超链接</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-bold text-purple-700">数据展示</div>
                <div className="text-sm text-purple-600">列表表格</div>
              </div>
              <div className="bg-white/60 p-4 rounded-lg">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-bold text-pink-700">用户交互</div>
                <div className="text-sm text-pink-600">表单输入</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 