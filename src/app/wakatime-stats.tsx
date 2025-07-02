import { Suspense } from 'react';

async function getWakaTimeStats() {
  const apiKey = process.env.WAKATIME_API_KEY;
  if (!apiKey) {
    console.error("WakaTime API key is not set.");
    return "API 密钥未配置 🔑";
  }

  try {
    const url = `https://wakatime.com/api/v1/users/current/all_time_since_today?api_key=${apiKey}`;

    const response = await fetch(
      url,
      {
        next: {
          revalidate: 3600, // 每小时重新获取一次数据
        },
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`WakaTime API request failed with status: ${response.status}`);
      console.error(`WakaTime API error response: ${errorText}`);
      return "数据获取失败 😅";
    }

    const stats = await response.json();
    return stats.data?.text || "还没有活动记录哦~ 💤";
  } catch (error) {
    console.error("Failed to fetch WakaTime stats:", error);
    return "服务器错误 🤖";
  }
}

async function KawaiiWakaTimeData() {
  const stats = await getWakaTimeStats();
  return (
    <div className="flex items-center justify-center space-x-2 bg-white/70 rounded-full px-6 py-3 shadow-lg border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
      <span className="text-2xl animate-bounce">⏰</span>
      <span className="text-blue-700 font-bold">总编码时长:</span>
      <span className="font-bold text-blue-800 bg-blue-100 px-3 py-1 rounded-full">{stats}</span>
      <span className="text-xl animate-pulse">✨</span>
    </div>
  );
}

export default function WakaTimeStats() {
  return (
    <footer className="text-blue-600 text-center p-8 mt-auto w-full z-10 relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 flex justify-center items-center opacity-10">
        <div className="text-8xl animate-pulse">🌟</div>
      </div>

      <div className="relative z-10 space-y-4">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <span className="text-2xl animate-bounce">🌈</span>
          <p className="text-lg font-bold bg-white/60 px-6 py-2 rounded-full shadow-md">
            &copy; {new Date().getFullYear()} P231014827 古雨《Web前端开发》课程练习平台. 保留所有权利.
          </p>
          <span className="text-2xl animate-bounce">🌈</span>
        </div>

        <Suspense fallback={
          <div className="flex items-center justify-center space-x-2 bg-white/70 rounded-full px-6 py-3 shadow-lg border-2 border-blue-200">
            <span className="text-2xl animate-spin">⏳</span>
            <span className="text-blue-700 font-bold">正在加载编码时长...</span>
            <span className="text-xl animate-pulse">💫</span>
          </div>
        }>
          <KawaiiWakaTimeData />
        </Suspense>

        {/* 可爱的装饰元素 */}
        <div className="flex justify-center space-x-8 mt-6 opacity-60">
          <div className="text-2xl animate-bounce delay-100">🎀</div>
          <div className="text-2xl animate-pulse delay-200">💖</div>
          <div className="text-2xl animate-bounce delay-300">🌸</div>
          <div className="text-2xl animate-pulse delay-400">✨</div>
          <div className="text-2xl animate-bounce delay-500">🦋</div>
        </div>

        <p className="text-sm text-blue-500 bg-white/50 px-4 py-2 rounded-full inline-block mt-4">
          💕 遇事不决，可问春风 💕
        </p>
      </div>
    </footer>
  );
} 