import Card from "./Card.jsx";

function App() {
  return (
    <main className="
      w-full max-w-[736px] sm:grid sm:grid-cols-2
      sm:bg-white sm:rounded-4xl sm:shadow-xl overflow-hidden
    ">
      <section className="
        bg-linear-to-b from-[#7857ff] to-[#2e2be9]
        flex flex-col items-center justify-between
        gap-6 px-10 pt-6 pb-10 sm:py-10 sm:px-12
        text-white rounded-b-4xl sm:rounded-4xl
      ">
        <h1 className="text-lg font-bold text-light-lavender sm:text-2xl">
          Your Result
        </h1>

        <div className="
          bg-linear-to-b from-[#4e21ca] to-[#2421ca00]
          w-36 h-36 sm:w-48 sm:h-48 rounded-full
          flex flex-col items-center justify-center
        ">
          <span className="text-5xl font-extrabold sm:text-7xl">76</span>
          <span className="text-light-lavender/60 text-sm sm:text-base font-bold mt-1">
            of 100
          </span>
        </div>

        <div className="text-center">
          <h2 className="mb-2 sm:mb-3 text-2xl font-bold sm:text-3xl">
            Great
          </h2>
          <p className="text-light-lavender text-base sm:text-lg leading-snug max-w-[260px] mx-auto">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </section>

      <section className="p-7 sm:p-10 flex flex-col justify-between gap-6">
        <h2 className="text-lg sm:text-2xl font-bold text-dark-gray-blue">
          Summary
        </h2>

        <Card />

        <button
          type="button"
          className="
            w-full py-3.5 rounded-full bg-dark-gray-blue text-white font-bold
            cursor-pointer transition-colors
            active:bg-linear-to-b active:from-[#7857ff] active:to-[#2e2be9]
            hover:bg-linear-to-b hover:from-[#7857ff] hover:to-[#2e2be9]
          ">
          Continue
        </button>
      </section>
    </main>
  );
}

export default App;
