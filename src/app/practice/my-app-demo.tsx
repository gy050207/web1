export default function MyAppDemo() {
  return (
    <div className="kawaii-card p-8 m-6 max-w-md mx-auto relative animate-fade-in">
      {/* 可爱的装饰 */}
      <div className="absolute -top-3 -left-3 text-3xl animate-bounce">🎀</div>
      <div className="absolute -top-2 -right-2 text-2xl animate-pulse">✨</div>
      
      <div className="text-center">
        <div className="text-4xl mb-4 animate-bounce">🎨</div>
        <h2 className="text-2xl font-bold text-blue-800 mb-4 kawaii-decoration">
          我的第一个React小精灵！
        </h2>
        <p className="text-blue-600 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300 mb-4">
          哇！我成功创造了第一个React组件！就像魔法一样神奇~ 🪄💫
        </p>
        
        <div className="flex justify-center space-x-4 mt-6">
          <div className="kawaii-button px-4 py-2 text-white text-sm rounded-full hover:scale-105 transition-all">
            🌟 太棒啦！
          </div>
          <div className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm border-2 border-pink-200 hover:scale-105 transition-all">
            💖 继续加油
          </div>
        </div>
      </div>
      
      {/* 底部装饰 */}
      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-2xl animate-pulse">
        🌈
      </div>
    </div>
  );
} 