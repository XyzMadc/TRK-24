export default function UserPage() {
  return (
    <section className="p-6 h-screen overflow-y-scroll w-full text-white">
      <h1 className="text-3xl text-center font-extrabold tracking-wide mb-6">
        Profile
      </h1>
      <div className="flex flex-col items-center justify-center p-4">
        <div className="border border-zinc-700 rounded-xl shadow-xl p-8 w-full max-w-lg text-zinc-300">
          <h2 className="text-2xl font-bold mb-6">Student Information</h2>

          <div className="space-y-4">
            <div>
              <p className="text-lg font-semibold text-zinc-400">NIM:</p>
              <p className="text-xl font-light">4.33.24.0.10</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Nama:</p>
              <p className="text-xl font-light">Akbar Muzzaki</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Email:</p>
              <p className="text-xl font-light">akbargamingop@gmail.com</p>
            </div>

            <div>
              <p className="text-lg font-semibold text-zinc-400">Kelas:</p>
              <p className="text-xl font-light">TI-1A</p>
            </div>
          </div>
          <button className="mt-8 w-full py-2 rounded-lg border border-zinc-700 bg-zinc-700/60 hover:bg-zinc-600/70 text-white font-semibold transition-all duration-200 ease-in-out transform hover:scale-105">
            Reset Password
          </button>
        </div>
      </div>
    </section>
  );
}
