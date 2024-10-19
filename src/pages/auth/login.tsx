export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="lg:w-1/2 bg-white flex flex-col justify-center items-center p-10">
        <div className="w-full max-w-md">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Hi Warga TRK{"'"}24!
          </h1>
          <p className="text-sm lg:text-lg mb-8">
            Welcome to TRK Website. Community Dashboard
          </p>
          <input
            type="number"
            placeholder="Your NIM"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4"
          />
          <div className="flex justify-end mb-4">
            <a href="#" className="text-blue-500">
              Forgot password?
            </a>
          </div>
          <button className="w-full bg-black text-white rounded-lg py-2 mb-4">
            Log In
          </button>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 bg-black text-white relative flex-col justify-center items-center p-10">
        <img
          src="https://placehold.co/400x400"
          alt="Astronaut with a colorful galaxy reflection in the helmet"
        />
      </div>
    </div>
  );
}
