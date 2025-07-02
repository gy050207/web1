'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Page() {
  const demoRef = useRef<HTMLDivElement>(null);
  const [tableHtml, setTableHtml] = useState('');

  useEffect(() => {
    // 可爱的异步函数演示
    setTimeout(() => {
      console.log('🎪 111 - 2秒后的惊喜表演！');
    }, 2000);
    console.log('🎬 222 - 先执行的小演员');

    function getSomething() {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('🎭 1111 - Promise的魔法表演！');
          resolve();
        }, 1000);
      });
    }
    getSomething().then(() => {
      console.log('🌟 2222 - Promise完成啦！');
    });

    async function getSomething2() {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log('✨ 111111 - async/await的优雅表演！');
          resolve();
        }, 1000);
      });
    }
    (async () => {
      await getSomething2();
      console.log('🎊 222222 - async函数表演结束！');
    })();

    async function getAllCommitDates(owner: string, repo: string) {
      const url = `https://api.github.com/repos/${owner}/${repo}/commits`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('网络响应失败');
        }
        const commits = await response.json();
        // 提取每个提交的日期
        const dates = commits.map((commit: { commit: { author: { date: string } } }) => commit.commit.author.date);
        return dates;
      } catch (error) {
        console.error('🚨 获取提交日期失败:', error);
        return [];
      }
    }

    function showCommitDatesTable(dates: string[]) {
      let html = '<table class="w-full text-left border-collapse border-2 border-blue-300 text-blue-800 bg-white/90 rounded-lg overflow-hidden">';
      html += '<thead><tr class="bg-gradient-to-r from-blue-200 to-purple-200"><th class="p-3 border border-blue-300 font-bold">🎯 序号</th><th class="p-3 border border-blue-300 font-bold">📅 提交日期</th></tr></thead><tbody>';
      dates.forEach((date, idx) => {
        const bgClass = idx % 2 === 0 ? 'bg-blue-50' : 'bg-white';
        html += `<tr class="${bgClass}"><td class="p-3 border border-blue-200 text-center font-semibold">${idx + 1}</td><td class="p-3 border border-blue-200 font-mono text-sm">${date}</td></tr>`;
      });
      html += '</tbody></table>';
      setTableHtml(html);
    }

    getAllCommitDates('yangjh-xbmu', 'Web-develop')
      .then(dates => {
        console.log('🎉 所有提交日期获取成功:', JSON.stringify(dates));
        showCommitDatesTable(dates);
      });
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🔮</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🌐</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">📊</div>
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
            <div className="text-4xl mb-4 animate-bounce">🔮</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              异步魔法学院1
            </h2>
            <p className="text-lg text-blue-600 bg-blue-50 rounded-full px-6 py-2 inline-block">
              Promise、async/await与API数据魔法 ✨
            </p>
          </div>
          
          {/* 学习要点 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-green-700">异步魔法咒语</h3>
              </div>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• ⏰ setTimeout异步延时</li>
                <li>• 🎭 Promise承诺魔法</li>
                <li>• ✨ async/await优雅等待</li>
                <li>• 🌐 fetch API网络召唤</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-purple-700">魔法效果</h3>
              </div>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• 🔍 控制台观察异步执行顺序</li>
                <li>• 📊 GitHub提交日期表格展示</li>
                <li>• 🎪 实时数据获取演示</li>
                <li>• 🎉 体验现代JavaScript魅力</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl animate-bounce">🔮</span>
              <span className="font-bold text-orange-700">异步魔法正在施展中</span>
              <span className="text-xl animate-bounce">⚡</span>
            </div>
            <p className="text-sm text-orange-600">
              页面会自动获取GitHub仓库的提交数据并展示在下方表格中！控制台里还有更多异步魔法~ 💖
            </p>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              🔮 JavaScript 异步魔法练习 ✨
            </h1>
            <p className="text-blue-600 bg-blue-50 p-4 rounded-lg">
              下面的表格数据来自GitHub API的实时获取！观察控制台可以看到异步函数的执行顺序~
            </p>
          </div>

          {/* 数据展示区 */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border-2 border-blue-200">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-2xl animate-pulse">📊</span>
              <h3 className="text-xl font-bold text-blue-700">GitHub提交日期表格</h3>
              <span className="text-2xl animate-pulse">🌐</span>
            </div>
            
            {tableHtml ? (
              <div 
                id="demo" 
                ref={demoRef} 
                className="w-full overflow-x-auto mt-4" 
                dangerouslySetInnerHTML={{ __html: tableHtml }} 
              />
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4 animate-spin">⏳</div>
                <p className="text-blue-600 font-bold">
                  正在施展fetch魔法，从GitHub获取数据中...
                </p>
                <p className="text-blue-500 text-sm mt-2">
                  请稍等片刻，数据马上就来啦~ ✨
                </p>
              </div>
            )}
          </div>

          {/* 异步概念展示 */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200 text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-bold text-yellow-700 mb-2">setTimeout</h3>
              <p className="text-sm text-yellow-600">
                延时执行的异步魔法
              </p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 text-center">
              <div className="text-3xl mb-3">🎭</div>
              <h3 className="font-bold text-green-700 mb-2">Promise</h3>
              <p className="text-sm text-green-600">
                承诺未来会完成的魔法
              </p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-purple-700 mb-2">async/await</h3>
              <p className="text-sm text-purple-600">
                优雅等待异步完成的魔法
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 