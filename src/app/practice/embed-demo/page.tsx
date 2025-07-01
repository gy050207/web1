"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function EmbedDemoPage() {
  const [showStatus, setShowStatus] = useState(true);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // 3秒后隐藏状态提示和说明卡片
    const timer = setTimeout(() => {
      setShowStatus(false);
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen text-blue-800 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute top-20 left-10 w-16 h-16">
          <Image
            src="/practice/images/chiikawa表情包动图 (10)_爱给网_aigei_com.gif"
            alt="可爱装饰"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute top-40 right-20 w-16 h-16">
          <Image
            src="/practice/images/chiikawa动态表情包 (159)_爱给网_aigei_com.gif"
            alt="可爱装饰"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16">
          <Image
            src="/practice/images/chiikawa动态表情包 (208)_爱给网_aigei_com.gif"
            alt="可爱装饰"
            width={64}
            height={64}
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <main className="flex-grow w-full h-full relative z-10">
        {/* 可爱的顶部导航 */}
        <div className="fixed top-0 left-0 w-full z-20 bg-white/90 backdrop-blur-md border-b-2 border-blue-200 shadow-lg">
          <div className="container mx-auto flex items-center justify-between px-4 py-4">
            <div className="flex items-center gap-4">
              <Link href="/" className="kawaii-button px-4 py-2 text-white hover:scale-105 transition-all inline-flex items-center gap-2">
                <div className="w-8 h-8">
                  <Image
                    src="/practice/images/吉伊卡哇chiikawa动态表情9_爱给网_aigei_com.gif"
                    alt="回家"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span>回家</span>
              </Link>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10">
                  <Image
                    src="/practice/images/Chiikawa透明动图 (11)_爱给网_aigei_com.gif"
                    alt="AI助手"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  AI小助手聊天室
                </span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-2">
              <div className="w-8 h-8">
                <Image
                  src="/practice/images/Chiikawa透明动图 (12)_爱给网_aigei_com.gif"
                  alt="打招呼"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-blue-600 text-sm bg-blue-100 px-3 py-1 rounded-full">
                和AI一起聊天吧~
              </span>
            </div>
          </div>
        </div>

        {/* 说明卡片 */}
        {showIntro && (
          <section className="max-w-4xl mx-auto mt-28 mb-6 kawaii-card p-6 relative z-20 transition-all duration-500 ease-in-out">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10">
                <Image
                  src="/practice/images/chiikawa表情包动图 (10)_爱给网_aigei_com.gif"
                  alt="提示"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <h2 className="text-2xl font-bold text-blue-700">超可爱的AI聊天体验</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-xl border-2 border-blue-200">
                <div className="w-10 h-10 mx-auto mb-2">
                  <Image
                    src="/practice/images/chiikawa动态表情包 (159)_爱给网_aigei_com.gif"
                    alt="功能"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-blue-700 mb-1">功能演示</h3>
                <p className="text-sm text-blue-600">展示如何在Next.js中嵌入第三方AI服务</p>
              </div>

              <div className="bg-purple-50 p-4 rounded-xl border-2 border-purple-200">
                <div className="w-10 h-10 mx-auto mb-2">
                  <Image
                    src="/practice/images/chiikawa动态表情包 (208)_爱给网_aigei_com.gif"
                    alt="设计"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-purple-700 mb-1">可爱设计</h3>
                <p className="text-sm text-purple-600">温馨的界面让技术变得更有趣</p>
              </div>

              <div className="bg-pink-50 p-4 rounded-xl border-2 border-pink-200">
                <div className="w-10 h-10 mx-auto mb-2">
                  <Image
                    src="/practice/images/Chiikawa透明动图 (11)_爱给网_aigei_com.gif"
                    alt="互动"
                    width={40}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="font-bold text-pink-700 mb-1">互动体验</h3>
                <p className="text-sm text-pink-600">在下方聊天区直接输入问题体验</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-xl border-2 border-yellow-200 text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="w-8 h-8">
                  <Image
                    src="/practice/images/Chiikawa透明动图 (12)_爱给网_aigei_com.gif"
                    alt="开始"
                    width={32}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="font-bold text-orange-700">开始你的AI对话之旅吧！</span>
              </div>
              <p className="text-sm text-orange-600">
                在下方的聊天窗口中输入任何问题，AI小助手会很乐意帮助你哦~
              </p>
            </div>
          </section>
        )}

        {/* AI聊天窗口 */}
        <div className="relative">
          {showStatus && (
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-30 transition-opacity duration-500">
              <div className="bg-white/90 px-4 py-2 rounded-full border-2 border-blue-200 shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">
                    <Image
                      src="/practice/images/chiikawa动态表情包 (159)_爱给网_aigei_com.gif"
                      alt="AI助手"
                      width={32}
                      height={32}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm font-bold text-blue-700">AI助手在线中</span>
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                </div>
              </div>
            </div>
          )}

          <iframe
            src="https://ai.youdao.com/saas/qanything/#/bots/6A03D1816E2F40B2/share"
            title="可爱的AI问答助手"
            width="100%"
            height="100%"
            className="fixed left-0 w-full z-10 rounded-t-3xl border-t-4 border-blue-300"
            style={{
              top: showIntro ? 140 : 80,
              height: showIntro ? 'calc(100vh - 140px)' : 'calc(100vh - 80px)',
              transition: 'all 0.5s ease-in-out',
              border: 'none',
              borderTop: '4px solid #93C5FD',
            }}
            allowFullScreen
          />
        </div>

        {/* 浮动装饰 */}
        <div className="fixed bottom-6 right-6 z-30">
          <div className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform">
            <Image
              src="/practice/images/吉伊卡哇chiikawa动态表情9_爱给网_aigei_com.gif"
              alt="聊天"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </main>
    </div>
  );
} 