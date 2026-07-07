const Features = () => {
  return (
    <main className="py-24 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Fitur Unggulan</h1>
        <p className="text-lg text-slate-500 mb-10">
          Temukan berbagai alat yang dirancang untuk mempercepat pertumbuhan bisnis Anda.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">Manajemen Konten</h3>
            <p className="text-slate-500">Kelola semua konten pemasaran Anda dalam satu dashboard yang intuitif.</p>
          </div>
          <div className="p-6 border border-slate-100 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">Analitik Mendalam</h3>
            <p className="text-slate-500">Pahami perilaku pelanggan Anda dengan data yang akurat dan real-time.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features;
