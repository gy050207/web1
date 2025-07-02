'use client';
import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Page() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // 可爱的学生类和对象
    class Student {
      name: string;
      age: number;
      school: string;
      grade: number;
      constructor(name: string, age: number, school: string, grade: number) {
        this.name = name;
        this.age = age;
        this.school = school;
        this.grade = grade;
      }
      learn(subject = '语文') {
        console.log(`📚 ${this.name}正在认真学习${subject}，好棒棒哦！✨`);
      }
      exam() {
        console.log(`📝 ${this.name} 正在努力考试中~加油加油！💪`);
      }
    }
    const xiaoming = new Student('幺幺', 7, '前进楼小学', 1);
    xiaoming.learn('英语');
    xiaoming.exam();

    class Undergraduate extends Student {
      major: string;
      experience: number;
      constructor(name: string, age: number, school: string, grade: number, major: string, experience: number) {
        super(name, age, school, grade);
        this.major = major;
        this.experience = experience;
      }
      intern(corp: string) {
        console.log(`🎉 ${this.name}在${corp}开心实习中，获得经验值1000！好厉害~`);
        console.log(super.exam());
      }
    }
    const xiaoming2 = new Undergraduate('幺幺', 17, '千金楼大学', 1, '新闻学', 0);
    xiaoming2.intern('腾讯');

    // 可爱的回调函数，函数作为参数传递给另一个函数
    console.log('🎭 111111 - 开始表演啦！');
    setTimeout(function () { console.log('🎪 222222 - 1秒后的惊喜回调表演！'); }, 1000);
    console.log('🎬 333333 - 表演继续进行中~');

    // 可爱的DOM操作
    if (h1Ref.current) {
      console.log('🎯 找到标题元素啦！', h1Ref.current);
      h1Ref.current.innerHTML = '✨ 这是来自JavaScript魔法的动态内容（点击我试试看）🎀';
      h1Ref.current.style.color = '#1e40af';
    }
    if (pRef.current) {
      pRef.current.onclick = function () {
        alert('🎉 哇！你点击了我！好开心呀~ 我是一个可爱的段落！💖');
      };
    }
    alert('🎊 页面加载完成啦！快去控制台看看我们的可爱学生们在做什么吧~');
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-4xl animate-bounce">🎓</div>
        <div className="absolute top-40 right-20 text-3xl animate-pulse">📚</div>
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
            <div className="text-4xl mb-4 animate-bounce">🎓</div>
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              JavaScript高级魔法学院1
            </h2>
            <p className="text-lg text-blue-600 bg-blue-50 rounded-full px-6 py-2 inline-block">
              类、继承、回调与DOM的奇妙世界 ✨
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
                <li>• 🎓 学生类的创建和使用</li>
                <li>• 📚 大学生类的继承关系</li>
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
                <li>• 🔍 F12查看学生们的学习日志</li>
                <li>• 👆 点击标题和段落区域</li>
                <li>• 🎪 观察动态内容变化</li>
                <li>• 🎉 体验面向对象编程</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-xl animate-bounce">🎓</span>
              <span className="font-bold text-orange-700">学生主题学习</span>
              <span className="text-xl animate-bounce">📚</span>
            </div>
            <p className="text-sm text-orange-600">
              这次我们用学生作为例子学习类和继承！从小学生到大学生，体验知识成长的快乐~ 💖
            </p>
          </div>
        </section>

        {/* 主展示区 */}
        <section className="max-w-4xl mx-auto kawaii-card p-8">
          <div className="flex flex-col items-center space-y-8">
            <div className="relative">
              <Image
                src="/practice/images/Chiikawa透明动图 (12)_爱给网_aigei_com.gif"
                alt="新闻图片"
                width={800}
                height={400}
                className="rounded-lg shadow-lg mb-4 w-full h-48 object-cover"
                priority
              />
              <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎓</div>
              <div className="absolute -bottom-2 -left-2 text-2xl animate-pulse">📚</div>
            </div>
            
            <h1
              ref={h1Ref}
              style={{ cursor: 'pointer', transition: 'all 0.3s' }}
              onClick={() => alert('🎉 哇！你点击了我！我是一个会变身的标题哦~ 🎭✨')}
              className="text-3xl font-bold text-center hover:text-blue-600 hover:scale-105 kawaii-decoration"
            >
              🎭 这是一个神奇标题的原始内容（点击我试试）✨
            </h1>
            
            <div className="bg-gradient-to-r from-cyan-100 to-blue-100 p-6 rounded-2xl border-2 border-cyan-200 text-center max-w-md">
              <div className="text-3xl mb-3">🎪</div>
              <p 
                ref={pRef} 
                className="text-lg text-cyan-700 font-bold cursor-pointer hover:bg-cyan-200 hover:scale-105 transition-all duration-300 p-4 rounded-lg"
              >
                🌟 这是一个可爱的段落（点击我试试看）💫
              </p>
              <p className="text-sm text-cyan-600 mt-2">
                ⬆️ 这个段落会被JavaScript魔法改变哦！
              </p>
            </div>

            {/* 功能展示卡片 */}
            <div className="grid md:grid-cols-2 gap-6 w-full mt-8">
              <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200 text-center">
                <div className="text-3xl mb-3">🎓</div>
                <h3 className="font-bold text-green-700 mb-2">学生类演示</h3>
                <p className="text-sm text-green-600">
                  控制台中有幺幺的学习记录！
                </p>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200 text-center">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="font-bold text-purple-700 mb-2">继承关系演示</h3>
                <p className="text-sm text-purple-600">
                  看看大学生如何继承小学生的学习能力！
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
} 