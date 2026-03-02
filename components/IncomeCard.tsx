export default function IncomeCard() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-gray-600 text-sm mb-1">Income</p>
          <h3 className="text-3xl font-bold text-gray-900">$32,134</h3>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg width="4" height="16" viewBox="0 0 4 16" fill="currentColor">
            <circle cx="2" cy="2" r="2"/>
            <circle cx="2" cy="8" r="2"/>
            <circle cx="2" cy="14" r="2"/>
          </svg>
        </button>
      </div>
      
      <div className="flex items-center gap-2 mb-4">
        <span className="text-green-500 text-sm font-medium">+2.5%</span>
        <span className="text-gray-400 text-sm">301.082 USD</span>
      </div>

      {/* Simple Bar Chart */}
      <div className="flex items-end justify-between gap-2 h-24">
        {[40, 60, 45, 70, 55, 80, 65, 75, 50, 85, 60, 70].map((height, index) => (
          <div
            key={index}
            className="flex-1 bg-green-200 rounded-t-sm"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}
