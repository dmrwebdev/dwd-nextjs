import { useRef } from "react";
import Particles from "react-tsparticles";

export default function ParticleBG({ className }) {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const particlesRef = useRef(
    <Particles
      id="tsparticles"
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: "#F0F0F0",
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            /*             onClick: {
              enable: true,
              mode: "push",
            }, */
          },
          modes: {
            bubble: {
              opacity: 0.8,
              size: 10,
              color: {
                value: "#ff0000",
              },
            },
          },
        },
        particles: {
          number: 10,
          color: "#000000",
          collisions: {
            enable: true,
            mode: "bounce",
          },
          links: {
            distance: 150,
            enable: true,
            color: "#000000",
          },
          move: {
            enable: true,
          },
          opacity: {
            value: 0.5,
          },
          size: {
            value: 2,
          },
          shape: {
            type: "circle",
            color: "#000000",
          },
        },
      }}
    />
  );

  return particlesRef.current;
}
