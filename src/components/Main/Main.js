export default function Main({ children }) {
  return (
    <main className="w-full relative z-10 ">
      <div className="w-full max-w-[1600px] mx-auto overflow-hidden rounded-3xl sm:border ">
        {children}
      </div>
    </main>
  );
}
