// app/layout.tsx
import React from 'react';
import Link from 'next/link';
import './globals.css'; // グローバルなスタイルを適用するためにインポート

const Layout: React.FC = ({ children }) => {
  return (
    <html lang="ja">
      <head>
        <title>備忘録アプリ</title>
      </head>
      <body>
        <header className="bg-blue-400 text-white py-4">
          <nav className="container mx-auto flex justify-between items-center">
            <div className="flex space-x-4">
              <div className="text-white hover:text-gray-300">
                備忘録一覧(完全に理解していないため，すぐにアクセスできるように．)
              </div>
            </div>
          </nav>
        </header>
        <main className="container mx-auto py-8">
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
