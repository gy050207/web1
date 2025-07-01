'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  useEffect(() => {
    // 可爱化的JavaScript学习内容
    const a = 100;
    console.log('🎯 变量a的值是:', a);
    
    const api_key = 'kawaii-secret-key-2024';
    console.log('🔑 API密钥:', api_key);
    console.log('🔍 数据类型检查:', typeof a, typeof api_key, typeof true);
    
    const b = '1';
    console.log('➕ 字符串拼接:', a + b);
    console.log('🔢 数字相加:', a + Number(b));
    
    const c = '100';
    console.log('📊 类型比较:', typeof a, typeof c);
    console.log('🟰 宽松相等:', a == Number(c));
    console.log('🎯 严格相等:', a === Number(c));
    
    // 可爱的分支语句
    const current_time = '12:20';
    if (current_time == '12:20') {
      console.log('🍽️ 午餐时间到！冲啊！');
    } else {
      console.log('📚 假装学习中……');
    }
    
    // 可爱的for循环
    console.log('🔢 开始数数啦：');
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}只小羊 🐑`);
    }
    
    // 可爱的while循环
    let hug = 60;
    console.log('🍚 开始干饭循环：');
    while (hug > 0) {
      console.log('😋 继续干饭……还剩' + hug + '%');
      hug = hug - 10;
    }
    
    // 可爱的函数们
    function intro() {
      console.log('👋 你好，我是一个超可爱的脚本！');
    }
    intro();
    
    function intro2(content: string) {
      console.log('💫 以下是我要介绍的内容： ' + content);
    }
    intro2('这是传入的可爱参数~');
    
    function intro3(content1: string, content2: string) {
      console.log('🌟 ' + content1 + ' ' + content2);
    }
    intro3('参数1很可爱', '参数2也很可爱');
    
    function intro4(content: string) {
      console.log('📝 输入内容:', content);
      return content + ' ✨这是魔法返回值✨';
    }
    const result = intro4('带返回值的可爱函数');
    console.log('🎁 函数返回值:', result);
    
    alert('🎉 页面加载完成啦！快去控制台看看可爱的输出吧~ F12打开控制台哦！');
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">📝</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">💻</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🔄</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🎯</div>
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
            <div className="text-4xl mb-4 animate-bounce">📚</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              JavaScript魔法学院
            </h2>
            <p className="text-lg text-blue-600 bg-blue-50 rounded-full px-6 py-2 inline-block">
              变量、类型、分支、循环与函数的奇妙旅程 ✨
            </p>
          </div>
          
          {/* 学习要点 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">🎯</span>
                <h3 className="font-bold text-green-700">学习内容</h3>
              </div>
              <ul className="text-green-600 space-y-2 text-sm">
                <li>• 📊 变量声明和类型判断</li>
                <li>• 🔀 条件分支语句</li>
                <li>• 🔄 循环结构的使用</li>
                <li>• ⚡ 函数定义和调用</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-purple-700">查看方法</h3>
              </div>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• 🔍 页面加载后会弹出提示框</li>
                <li>• ⌨️ 按F12打开浏览器控制台</li>
                <li>• 👀 观察控制台的可爱输出</li>
                <li>• 🎉 享受JavaScript学习过程</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl animate-bounce">⚠️</span>
              <span className="font-bold text-orange-700">重要提示</span>
              <span className="text-xl animate-bounce">⚠️</span>
            </div>
            <p className="text-sm text-orange-600">
              这个页面的精彩内容都在控制台里哦！按F12打开控制台，会有很多可爱的输出等着你~ 💖
            </p>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8 text-center">
          <div className="mb-6">
            <Image
              src="/practice/images/吉伊卡哇chiikawa动态表情9_爱给网_aigei_com.gif"
              alt="新闻图片"
              width={800}
              height={400}
              className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"
              priority
            />
          </div>
          
          <div className="space-y-6">
            <div className="text-4xl animate-bounce">💻</div>
            <h3 className="text-2xl font-bold text-blue-700 mb-4">
              JavaScript魔法正在施展中...
            </h3>
            
            <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-6 rounded-2xl border-2 border-blue-200">
              <div className="text-3xl mb-3">🔍</div>
              <p className="text-lg text-blue-700 font-bold mb-2">
                控制台查看区域
              </p>
              <p className="text-blue-600">
                页面的主要内容都在浏览器控制台中展示<br/>
                按 <kbd className="bg-blue-200 px-2 py-1 rounded text-sm font-mono">F12</kbd> 打开控制台查看可爱的输出吧！
              </p>
            </div>

            <div className="flex justify-center space-x-4 flex-wrap gap-2">
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-green-200">
                🔢 变量学习完成
              </div>
              <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-yellow-200">
                🔀 分支语句掌握
              </div>
              <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-pink-200">
                🔄 循环结构理解
              </div>
              <div className="bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold border-2 border-purple-200">
                ⚡ 函数功能实现
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 