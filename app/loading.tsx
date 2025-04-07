'use client';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white">
      <div className="flex flex-col items-center space-y-4 animate-pulse">
        <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin" />
        <p className="text-lg font-medium">Loading, please wait...</p>
      </div>
    </div>
  );
}