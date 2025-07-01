import Image from "next/image";
import Link from "next/link";

export interface ExerciseCardProps {
  id: string | number;
  title: string;
  description: string;
  imageUrl?: string;
  link?: string;
  tags?: string[];
}

// 可爱的图标映射
const kawaiiIcons = ['🌸', '🌟', '🎀', '🦋', '🌈', '✨', '💫', '🎯', '🌺', '🌷', '🎊', '🎈', '💖'];

export default function KawaiiExerciseCard({ id, title, description, imageUrl, link, tags }: ExerciseCardProps) {
  // 根据ID选择可爱图标
  const iconIndex = typeof id === 'number' ? id % kawaiiIcons.length : 0;
  const cardIcon = kawaiiIcons[iconIndex];

  const cardContent = (
    <>
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden rounded-t-xl">
          <Image
            src={imageUrl}
            alt={title || 'Exercise image'}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-500 group-hover:scale-110 filter brightness-110 saturate-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-200/60 via-transparent to-white/20"></div>
          <div className="absolute top-3 left-3 text-3xl animate-bounce">
            {cardIcon}
          </div>
          <div className="absolute top-3 right-3 bg-white/80 rounded-full px-3 py-1 text-sm font-bold text-blue-600 shadow-lg">
            #{id}
          </div>
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-white to-blue-50/50">
        <div className="flex items-center mb-3">
          <span className="text-2xl mr-2 animate-pulse">{cardIcon}</span>
          <h3 className="text-xl font-bold text-blue-800 flex-1">{title}</h3>
        </div>
        
        <p className="text-blue-600 text-sm mb-4 line-clamp-3 flex-grow bg-white/60 p-3 rounded-lg border-l-4 border-blue-300">
          {description}
        </p>
        
        {tags && tags.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="inline-flex items-center bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-300 hover:scale-105 transition-transform"
              >
                <span className="mr-1">
                  {['🏷️', '📝', '💻', '🎨', '⚡'][index % 5]}
                </span>
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-auto">
          <div className="kawaii-button text-center py-3 px-6 text-white font-bold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:scale-105">
            <span className="mr-2">🎯</span>
            开始探索
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="group relative">
      {/* 可爱的光晕效果 */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 rounded-2xl blur-sm opacity-0 group-hover:opacity-75 transition duration-500 animate-pulse"></div>
      
      <div className="relative kawaii-card group-hover:rotate-1 transition-all duration-300 h-full flex flex-col">
        {/* 可爱的顶部装饰条 */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 via-blue-300 to-purple-300 rounded-t-xl"></div>
        
        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full rounded-xl overflow-hidden">
            {cardContent}
          </Link>
        ) : (
          <div className="flex flex-col h-full rounded-xl overflow-hidden">{cardContent}</div>
        )}
        
        {/* 可爱的浮动装饰 */}
        <div className="absolute -top-2 -right-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
          ✨
        </div>
        <div className="absolute -bottom-2 -left-2 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
          💖
        </div>
      </div>
    </div>
  );
} 