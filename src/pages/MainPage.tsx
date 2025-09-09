import DealsPage from "./DealsPage";

export default function MainPage() {
  return (
    <>
      <div
        className="relative h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
        style={{ backgroundImage: `url('/landing-bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-[#172234]/60"></div>

        <main className="relative z-10 text-center px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-[64px] font-serif font-bold mb-4">
            The chemical negatively charged
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl">
            Numerous calculations predict, and experiments confirm, that the
            force field reflects the beam, while the mass defect is not formed.
            The chemical compound is negatively charged. Twhile the mass defect
            is
          </p>
          <button className="bg-inherit border border-white font-bold rounded-md mt-7.5 w-40 h-[54px] flex items-center justify-center">
            Get Started
          </button>
        </main>
      </div>
      <DealsPage />
    </>
  );
}
