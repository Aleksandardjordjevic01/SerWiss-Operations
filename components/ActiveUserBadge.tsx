export default function ActiveUserBadge() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative">
        {/* Jagged circle background */}
        <svg width="200" height="200" viewBox="0 0 200 200" className="animate-pulse">
          <circle 
            cx="100" 
            cy="100" 
            r="90" 
            fill="#c3ff6d" 
            strokeDasharray="3,3" 
            strokeWidth="0"
          />
        </svg>
        
        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-6xl font-bold text-gray-900">20M</div>
          <div className="text-lg text-gray-700">Active user</div>
        </div>
      </div>
    </div>
  );
}
