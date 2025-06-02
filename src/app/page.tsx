import { Instagram } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative h-[80vh] pt-20 flex items-center justify-center text-white text-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero.mp4" type="video/mp4" />
          お使いのブラウザは動画に対応していません。
        </video>
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="relative z-20">
          <h1 className="text-4xl font-bold">Yusuke Inaba</h1>
          <p className="text-lg mt-4">
            建築 × 映像 × Web を横断し、<br />
            すべてを“伝える力”に変えるマルチクリエイター。
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20 border-t">
        <div className="max-w-3xl mx-auto text-left px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">About</h2>
          <p className="text-gray-700 leading-relaxed">
            私は元・建築資材メーカーの営業職として14年間そして、社内ベンチャーとしてスマートフォン用のアプリとしてサービスを2つ企画し立ち上げた経験があります。
            <br /><br />
            現在は建設会社にて、Next.js や microCMS を使った Webサイト開発に加え、
            一眼カメラとドローンでの動画制作、Blender による 3DCG、
            Adobe after effectやillustrator,photoshopなど各種ツールでの制作全般、そして Google・Meta 広告運用まで対応しています。
            <br /><br />
            現場を知り、企画ができて、作れる——そんな横断的なスキルを強みに、
            「伝わる」アウトプットを届けていきます。
          </p>
        </div>
      </section>

      {/* Works */}
      <section className="py-20 border-t bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* 映像制作 */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold mb-2">映像制作</h3>
              <p className="text-sm text-gray-600">
                ドローン・一眼カメラを用いた企業VP・イベント撮影・編集（上場企業案件含む）
              </p>
            </div>

            {/* Web制作 */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold mb-2">Web制作</h3>
              <p className="text-sm text-gray-600">
                Next.js、microCMSを活用したブランディングサイト制作。広告運用もセットで提供。
              </p>
            </div>

            {/* 3DCG・建築パース */}
            <div className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold mb-2">3DCG / 建築パース</h3>
              <p className="text-sm text-gray-600">
                Blenderで建築空間を再現し、設計ポイントを視覚的に伝える立体資料を制作。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skillset */}
      <section className="py-20 border-t">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Skillset</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Web & 開発</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>HTML / CSS / JavaScript</li>
                <li>Next.js / React</li>
                <li>Tailwind CSS</li>
                <li>microCMS</li>
                <li>Git / GitHub</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">映像 & グラフィック & 3DCG</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>一眼カメラ撮影・編集</li>
                <li>ドローン空撮</li>
                <li>Premiere Pro / After Effects</li>
                <li>Photoshop / Illustrator</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">マーケティング</h3>
              <ul className="list-disc ml-5 space-y-1">
                <li>Google 広告</li>
                <li>Meta（Instagram / Facebook）広告</li>
                <li>GA4解析</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service */}
      <section className="py-20 border-t bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Service</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-700">
            <div className="bg-gray-50 rounded-lg p-5 shadow">
              <h3 className="font-semibold text-lg mb-2">映像制作</h3>
              <p>
                企画・撮影・編集まで一括対応。ドローンや一眼を活かしたブランディング映像を制作します。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 shadow">
              <h3 className="font-semibold text-lg mb-2">Webサイト制作</h3>
              <p>
                Next.js + microCMSで構築する高速・更新性の高いサイト。撮影と連携した制作も可能です。
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-5 shadow">
              <h3 className="font-semibold text-lg mb-2">Web集客サポート</h3>
              <p>
                Google / Meta広告の運用とLP設計、SEO支援。広告と制作を一括で対応できるのが強みです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 border-t bg-gray-100">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <p className="text-gray-700 mb-4">
            お仕事のご相談・ご依頼は、以下のメールアドレスまたはSNSよりお気軽にご連絡ください。
          </p>
          <p className="text-lg font-semibold text-gray-900 mb-2">
            ✉️ info@ayukikaku.com
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://www.instagram.com/your_handle"
              className="text-gray-600 hover:text-pink-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}