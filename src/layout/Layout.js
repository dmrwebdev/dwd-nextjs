import Navbar from "../components/Navbar/Navbar";

export default function Layout({
  introOver,
  prevScrollPos,
  setPrevScrollPos,
  children,
}) {
  return (
    <>
      {introOver ? (
        <Navbar
          prevScrollPos={prevScrollPos}
          setPrevScrollPos={setPrevScrollPos}
        />
      ) : null}

      {/*  <main className="w-full relative z-10 flex bg-cyan-900"> */}
      {/*      <div className="mx-auto sm:px-4 bg-cyan-700">
          <div className="sm:px-4 bg-cyan-800">
            <div className="sm:px-4 bg-rose-600"> */}
      {/*    <div className="w-full  mx-auto overflow-hidden "> */}
      {/* max-w-[1600px] */}
      {children}
      {/* </div> */}
      {/*             </div>
          </div>
        </div> */}
      {/* </main> */}
    </>
  );
}
