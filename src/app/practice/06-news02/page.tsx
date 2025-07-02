'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 可爱的汽车类和对象
    class Car {
      brand: string;
      model: string;
      year: number;
      constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
      }
      start() {
        console.log(`🚗 汽车 ${this.brand} ${this.model} 嘟嘟嘟~启动啦！`);
      }
      stop() {
        console.log(`🛑 汽车 ${this.brand} ${this.model} 乖乖停下来了~`);
      }
    }
    const myCar = new Car('Mi', 'Yu7', 2025);
    myCar.start();
    myCar.stop();

    class ElectricCar extends Car {
      range: number;
      constructor(brand: string, model: string, year: number, range: number) {
        super(brand, model, year);
        this.range = range;
      }
      charge() {
        console.log(`⚡ 电动汽车 ${this.brand} ${this.model} 正在快乐充电中~嗡嗡嗡！`);
      }
    }
    const myElectricCar = new ElectricCar('Tesla', 'Model Y', 2025, 300);
    myElectricCar.start();
    myElectricCar.charge();

    // 可爱的回调函数练习
    console.log('🎬 111111 - 开始演出');
    setTimeout(function () {
      console.log('🎭 22222 - 2秒后的精彩回调表演！');
    }, 2000);
    console.log('🎪 333333 - 演出继续');

    // 可爱的DOM操作
    if (divRef.current) {
      console.log('🎯 找到div元素啦！', divRef.current);
      divRef.current.innerHTML = '✨ 这是从脚本魔法变出来的内容（点击我试试看）🎀';
      divRef.current.onclick = function () {
        alert('🎉 哇！我也被点击了！好开心呀~ 💖');
      };
    }
    alert('🎊 页面加载完成！快去控制台看看我们的可爱输出吧~');
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🚗</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">⚡</div>
        <div className="absolute bottom-40 left-1/4 text-4xl animate-spin slow">🎪</div>
        <div className="absolute bottom-60 right-1/4 text-3xl animate-bounce">🎭</div>
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
            <div className="text-4xl mb-4 animate-bounce">🚗</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              JavaScript高级魔法学院2
            </h2>
            <p className="text-lg text-blue-600 bg-blue-50 rounded-full px-6 py-2 inline-block">
              汽车类、继承、回调与DOM的奇妙世界 ✨
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
                <li>• 🚗 汽车类的创建和使用</li>
                <li>• ⚡ 电动汽车类的继承</li>
                <li>• ⏰ 回调函数的异步处理</li>
                <li>• 🎭 DOM元素的动态操作</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">💡</span>
                <h3 className="font-bold text-purple-700">互动体验</h3>
              </div>
              <ul className="text-purple-600 space-y-2 text-sm">
                <li>• 🔍 F12查看汽车启动日志</li>
                <li>• 👆 点击标题和内容区域</li>
                <li>• 🎪 观察动态内容变化</li>
                <li>• 🎉 体验面向对象编程</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl animate-bounce">🚗</span>
              <span className="font-bold text-orange-700">汽车主题学习</span>
              <span className="text-xl animate-bounce">⚡</span>
            </div>
            <p className="text-sm text-orange-600">
              这次我们用汽车作为例子学习类和继承！从普通汽车到电动汽车，体验面向对象的魅力~ 💖
            </p>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <Image
                src="/practice/images/chiikawa动态表情包 (208)_爱给网_aigei_com.gif"
                alt="新闻图片"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"
                priority
              />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🚗</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">⚡</div>
            </div>
            
            <h1
              ref={h1Ref}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => alert('🎉 我被点击啦！汽车嘟嘟嘟~ 🚗💨')}
              className="text-3xl font-bold text-center hover:text-blue-600 hover:scale-105 kawaii-decoration"
            >
              🚗 JavaScript 语法练习（点击我试试）✨
            </h1>
            
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-2xl border-2 border-cyan-200 text-center max-w-md">
              <div className="text-3xl mb-3">🎭</div>
              <div
                ref={divRef}
                className="text-lg text-cyan-700 font-bold cursor-pointer hover:bg-cyan-200 hover:scale-105 transition-all duration-300 p-4 rounded-lg"
              >
                div content
              </div>
              <p className="text-sm text-cyan-600 mt-2">
                ⬆️ 这个区域会被JavaScript魔法改变哦！
              </p>
            </div>

            {/* 功能展示卡片 */}
            <div className="grid md:grid-cols-2 gap-6 w-full mt-8">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 text-center">
                <div className="text-3xl mb-3">🚗</div>
                <h3 className="font-bold text-green-700 mb-2">汽车类演示</h3>
                <p className="text-sm text-green-600">
                  控制台中有小汽车的启动和停止记录！
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-bold text-purple-700 mb-2">电动汽车继承</h3>
                <p className="text-sm text-purple-600">
                  看看电动汽车如何继承普通汽车的功能！
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 