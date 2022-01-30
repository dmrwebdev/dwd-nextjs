import Modal from "../../../components/Modal/Modal";
import useModal from "../../../hooks/useModal";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import styles from "../styles/CertPanel.module.scss";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
import useTranslateCenterScreen from "../../../hooks/useTranslateCenterScreen";
import useMediaQuery from "../../../hooks/useMediaQuery";

export default function CertPanel({ certList }) {
  const [selectedCert, setSelectedCert] = useState(null);

  function handleResetCert() {
    if (selectedCert) {
      setSelectedCert(null);
    }
  }

  const isBreakPoint = useMediaQuery(800);

  return isBreakPoint ? (
    <MobileCertView
      certList={certList}
      handleResetCert={handleResetCert}
      setSelectedCert={setSelectedCert}
      selectedCert={selectedCert}
    />
  ) : (
    <DesktopCertView
      certList={certList}
      handleResetCert={handleResetCert}
      setSelectedCert={setSelectedCert}
      selectedCert={selectedCert}
    />
  );
}

function DesktopCertView({
  selectedCert,
  setSelectedCert,
  certList,
  handleResetCert,
}) {
  const [certTileRef] = useTranslateCenterScreen();

  function certTile(cert) {
    return (
      <div
        key={cert.alt}
        ref={selectedCert === cert ? certTileRef : null}
        className={`max-w-[350px] relative flex items-center rounded-xl bg-white m-4  p-4 text-[0px] transition-all duration-[500ms]        `}
        onClick={() => setSelectedCert(cert)}
      >
        <Image src={cert.cert} alt={cert.alt} draggable="false" />;
      </div>
    );
  }

  return (
    <>
      <div
        aria-hidden
        className={`scroll-hidden h-100 absolute inset-0 overflow-hidden transition-all duration-[500ms]  ${
          selectedCert
            ? `bg-terminal-black/80 z-10`
            : "bg-terminal-black/0 z-[-1]"
        }`}
        onClick={() => handleResetCert()}
      />
      <div className="mx-auto" onClick={() => handleResetCert()}>
        {/*      <Modal
        show={selectedCert}
        hide={toggle}
        transparentBody
        //onExited={() => setSelectedCert(null)}
      >
        {selectedCert && certTile(selectedCert)}
      </Modal> */}
        <div className="flex flex-wrap justify-center">
          {certList.map((cert) => certTile(cert))}
        </div>
      </div>
    </>
  );
}

function MobileCertView({
  selectedCert,
  setSelectedCert,
  certList,
  handleResetCert,
}) {
  function certTile(cert) {
    return (
      <div
        key={cert.alt}
        ref={selectedCert === cert ? certTileRef : null}
        className={`relative flex items-center rounded-xl bg-white m-4  p-2 text-[0px] transition-all duration-[500ms]        `}
        onClick={() => setSelectedCert(cert)}
      >
        <Image src={cert.cert} alt={cert.alt} draggable="false" />;
      </div>
    );
  }

  return (
    <>
      <div
        aria-hidden
        className={`scroll-hidden h-100 absolute inset-0 overflow-hidden transition-all duration-[500ms]  ${
          selectedCert
            ? `bg-terminal-black/80 z-10`
            : "bg-terminal-black/0 z-[-1]"
        }`}
        onClick={() => handleResetCert()}
      />
      <div className="mx-auto min-h-[600px]" onClick={() => handleResetCert()}>
        {/*      <Modal
        show={selectedCert}
        hide={toggle}
        transparentBody
        //onExited={() => setSelectedCert(null)}
      >
        {selectedCert && certTile(selectedCert)}
      </Modal> */}
        <div>
          <div className="flex flex-wrap">
            {certList.map((cert, i) => certTile(cert))}
          </div>
          {/*           <div>
            <FontAwesomeIcon icon={faArrowCircleLeft} color={"white"} />
            <FontAwesomeIcon icon={faArrowAltCircleRight} color={"white"} />
          </div> */}
        </div>
      </div>
    </>
  );
}
