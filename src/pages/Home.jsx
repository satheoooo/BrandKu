import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-[#f8faff] py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Solusi Terbaik untuk Bisnismu
          </h1>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
          </p>
          <Link to="/login" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
            Mulai Gratis
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-16">Mengapa BrandKu?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FeatureCard 
            id="mudah"
            title="Mudah Digunakan"
            description="Tidak perlu keahlian teknis. Setup dalam 5 menit."
            iconColor="text-orange-500"
            bgColor="bg-orange-50"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            }
          />
          <FeatureCard 
            id="otomatis"
            title="Serba Otomatis"
            description="Otomatiskan tugas berulang dan fokus pada hal yang penting."
            iconColor="text-purple-500"
            bgColor="bg-purple-50"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <FeatureCard 
            id="laporan"
            title="Laporan Real-time"
            description="Pantau performa bisnismu kapan saja dan di mana saja."
            iconColor="text-green-500"
            bgColor="bg-green-50"
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2h2a2 2 0 002-2zm0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
          />
        </div>
      </section>
    </main>
  );
};

export default Home;
