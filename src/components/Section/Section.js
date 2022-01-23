export default function Section({ headerTitle, children, className }) {
  return (
    <section className="w-full relative z-10 bg-slate-600 ">
      {/* Header Group */}
      <div className="rounded-3xl border-t bg-slate-800 ">
        <h2 className="text-3xl sm:text-5xl text-white  text-center p-6">
          {headerTitle}
        </h2>
        <div className="h-[5px] bg-cyan-400" />
        <div className="h-[5px] bg-cyan-500" />
        <div className="h-[5px] bg-cyan-600" />
      </div>
      <div className={`w-full p-3 sm:p-8 ${className}`}>{children}</div>
    </section>
  );
}
