import Link from "next/link";
import KawaiiExerciseCard, { ExerciseCardProps } from "./exercise-card";
import exercisesData from './exercises.json';
import WakaTimeStats from "./wakatime-stats";

function KawaiiNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md text-blue-800 p-4 shadow-lg w-full z-50 border-b-2 border-blue-200">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-blue-600 transition-colors duration-300 tracking-wider kawaii-decoration relative">
          🌈 可爱学习小屋 🌈
        </Link>
        <div className="space-x-6 text-lg">
          <Link href="/" className="kawaii-button px-4 py-2 text-white hover:scale-105 transition-all duration-300 inline-block">
            🏠 首页
          </Link>
          <Link href="/archive" className="kawaii-button px-4 py-2 text-white hover:scale-105 transition-all duration-300 inline-block">
            📚 归档
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen text-blue-800 items-center overflow-hidden relative">
      {/* 可爱的背景装饰 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 text-6xl animate-bounce">🌸</div>
        <div className="absolute top-40 right-20 text-4xl animate-pulse">✨</div>
        <div className="absolute top-60 left-1/4 text-5xl animate-spin slow">🌟</div>
        <div className="absolute bottom-40 right-1/4 text-4xl animate-bounce">🦋</div>
        <div className="absolute bottom-60 left-20 text-5xl animate-pulse">🌈</div>
        <div className="absolute top-80 right-40 text-3xl animate-spin slow">☁️</div>
      </div>
      
      <KawaiiNavbar />

      <main className="flex-grow container mx-auto px-4 py-12 pt-28 w-full z-10">
        <header className="text-center mb-20 relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
            <div className="text-4xl animate-bounce">🎀</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 kawaii-decoration relative">
            ✨ 可爱前端学习之旅 ✨
          </h1>
          <p className="text-lg md:text-xl text-blue-600 max-w-3xl mx-auto tracking-wide bg-white/60 rounded-full px-8 py-4 shadow-lg">
            🌟 和小伙伴一起探索奇妙的编程世界吧！ 🌟
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="text-2xl animate-bounce delay-100">🐱</div>
            <div className="text-2xl animate-bounce delay-200">🐰</div>
            <div className="text-2xl animate-bounce delay-300">🐻</div>
            <div className="text-2xl animate-bounce delay-400">🐶</div>
          </div>
        </header>

        <section className="relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700 mb-4 kawaii-decoration">
              🎯 超可爱的练习任务 🎯
            </h2>
            <p className="text-blue-600 bg-white/50 rounded-full px-6 py-2 inline-block">
              每一个都是精心准备的小惊喜哦~ 💕
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercisesData.map((exercise: ExerciseCardProps, index: number) => (
              <div key={exercise.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <KawaiiExerciseCard
                  id={exercise.id}
                  title={exercise.title}
                  description={exercise.description}
                  imageUrl={exercise.imageUrl}
                  link={exercise.link}
                  tags={exercise.tags}
                />
              </div>
            ))}
          </div>
        </section>

        {/* 可爱的分隔线 */}
        <div className="text-center my-16">
          <div className="inline-flex items-center space-x-4 text-4xl">
            <span className="animate-pulse">🌸</span>
            <span className="animate-bounce">💫</span>
            <span className="animate-pulse">🌸</span>
          </div>
        </div>
      </main>

      <WakaTimeStats />
      
      {/* 可爱的浮动元素 */}
      <div className="fixed bottom-10 right-10 z-20">
        <div className="text-6xl animate-bounce cursor-pointer hover:scale-110 transition-transform">
          🎈
        </div>
      </div>
    </div>
  );
}
