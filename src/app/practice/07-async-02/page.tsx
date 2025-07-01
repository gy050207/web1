'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [lastPushDate, setLastPushDate] = useState<string | null>(null);

  useEffect(() => {
    // 可爱的异步函数演示
    async function getSomething() {
      await new Promise<void>((resolve) => {
        setTimeout(function () {
          console.log('🎪 111111 - 2秒后的异步魔法表演！');
          resolve();
        }, 2000);
      });
    }
    getSomething().then(
      result => console.log('✨ 异步函数成功完成，结果是:', result)
    );
    console.log('🎬 2222222 - 先执行的同步代码');

    async function getLastPushedDate(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const data = await response.json();
        // pushed_at 字段即为最后一次推送日期
        return data.pushed_at as string;
      } catch (error) {
        console.error('🚨 获取推送日期失败:', error);
        return null;
      }
    }

    getLastPushedDate('yangjh-xbmu', 'Web-develop').then(date => {
      console.log('🎉 最后一次推送日期获取成功:', date);
      setLastPushDate(date);
    });
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🚀</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🌐</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">📡</div>
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
          <div className="text-center mb-6">
            <div className="text-4xl mb-4 animate-bounce">🚀</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              异步魔法学院2
            </h2>
            <p className="text-lg text-blue-600 bg-blue-50 rounded-full px-6 py-2 inline-block">
              GitHub API数据获取的魔法之旅 ✨
            </p>
          </div>
          
          {/* 学习要点 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-green-700">魔法技能</h3>
              </div>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• 🚀 高级async/await使用</li>
                <li>• 🌐 真实API数据获取</li>
                <li>• 📡 GitHub仓库信息查询</li>
                <li>• ⏰ 异步执行顺序理解</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-purple-700">观察要点</h3>
              </div>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• 🔍 控制台查看执行顺序</li>
                <li>• 📅 仓库最后推送时间</li>
                <li>• ⚡ 网络请求加载过程</li>
                <li>• 🎉 异步操作完成反馈</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl animate-bounce">📡</span>
              <span className="font-bold text-orange-700">实时数据获取中</span>
              <span className="text-xl animate-bounce">🌐</span>
            </div>
            <p className="text-sm text-orange-600">
              正在从GitHub API获取仓库的最后推送时间！这是真实的网络请求哦~ 💖
            </p>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              🚀 JavaScript 异步魔法练习 ✨
            </h1>
            <p className="text-blue-600 bg-blue-50 p-4 rounded-lg">
              观察下方数据的加载过程，同时查看控制台的异步执行顺序！
            </p>
          </div>

          {/* 数据展示区 */}
          <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-8 rounded-2xl border-2 border-cyan-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <span className="text-3xl animate-pulse">📡</span>
              <h3 className="text-2xl font-bold text-cyan-700">GitHub仓库信息</h3>
              <span className="text-3xl animate-pulse">🌐</span>
            </div>
            
            <div
              id="demo"
              ref={demoRef}
              className="bg-white/80 rounded-xl p-6 shadow-lg border-2 border-cyan-200"
            >
              {lastPushDate ? (
                <div className="space-y-4">
                  <div className="text-4xl mb-4">🎉</div>
                  <p className="text-lg font-bold text-cyan-700">
                    最后一次推送日期:
                  </p>
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-4 rounded-lg border-2 border-green-200">
                    <span className="text-xl font-mono text-green-700 font-bold">
                      {lastPushDate}
                    </span>
                  </div>
                  <p className="text-sm text-cyan-600 mt-4">
                    ✨ 数据获取成功！这是通过GitHub API实时获取的信息~
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-4xl mb-4 animate-spin">⏳</div>
                  <p className="text-lg font-bold text-blue-600">
                    正在获取数据中...
                  </p>
                  <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-blue-500">🌐</span>
                      <span className="text-blue-600 text-sm">
                        正在连接GitHub API...
                      </span>
                      <span className="text-blue-500">📡</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 异步概念展示 */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="bg-pink-50 p-6 rounded-xl border-2 border-pink-200 text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-pink-700 mb-2">Fetch API</h3>
              <p className="text-sm text-pink-600">
                现代化的网络请求魔法，用于获取远程数据
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200 text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-orange-700 mb-2">异步顺序</h3>
              <p className="text-sm text-orange-600">
                理解同步代码与异步代码的执行先后顺序
              </p>
            </div>
          </div>

          {/* 提示信息 */}
          <div className="mt-8 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl border-2 border-purple-200 text-center">
            <div className="text-2xl mb-3">💡</div>
            <h3 className="font-bold text-purple-700 mb-2">学习提示</h3>
            <p className="text-purple-600 text-sm">
               按F12打开控制台，观察&ldquo;2222222&rdquo;会比&ldquo;111111&rdquo;先输出，这就是异步编程的特点！
               同时观察网络请求的完成时间~
            </p>
          </div>
        </section>
      </main>
    </div>
  );
} 