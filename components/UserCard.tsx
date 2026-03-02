import Image from 'next/image';

export default function UserCard() {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl overflow-hidden">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
          <div className="w-32 h-32 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
