export default function MyAppHello() {
  return (
    <div className="kawaii-card p-6 m-4 max-w-sm mx-auto text-center relative animate-fade-in">
      <div className="absolute -top-2 -right-2 text-2xl animate-spin slow">🌟</div>
      
      <div className="text-5xl mb-3 animate-wave">👋</div>
      <h3 className="text-xl font-bold text-blue-800 mb-2">
        Hello, 可爱的世界！
      </h3>
      <p className="text-blue-600 text-sm">
        欢迎来到我的小宇宙~ 🌙✨
      </p>
      
      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 text-lg animate-bounce">
        💝
      </div>
    </div>
  );
} 