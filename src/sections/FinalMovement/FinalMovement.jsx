import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import workImage from "../../assets/images/pn5.jpeg";
import movementImage from "../../assets/images/pn4.jpeg";

gsap.registerPlugin(ScrollTrigger);

const FinalMovement = () => {
  const sceneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const beats = gsap.utils.toArray("[data-final-beat]");

      beats.forEach((beat) => {
        const image = beat.querySelector("[data-final-image]");
        const eyebrow = beat.querySelector("[data-final-eyebrow]");
        const title = beat.querySelector("[data-final-title]");
        const copy = beat.querySelector("[data-final-copy]");

        gsap.set(image, { scale: 1.06 });
        gsap.set([eyebrow, title, copy], {
          opacity: 0,
          y: 30,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: beat,
              start: "top 72%",
              toggleActions: "play none none reverse",
            },
          })
          .to(image, {
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
          })
          .to(
            eyebrow,
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power3.out",
            },
            "-=0.9"
          )
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .to(
            copy,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          );
      });

      const ending = sceneRef.current?.querySelector("[data-final-ending]");

      if (ending) {
        const eyebrow = ending.querySelector("[data-ending-eyebrow]");
        const title = ending.querySelector("[data-ending-title]");
        const copy = ending.querySelector("[data-ending-copy]");
        const actions = ending.querySelector("[data-ending-actions]");

        gsap.set([eyebrow, title, copy, actions], {
          opacity: 0,
          y: 30,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: ending,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          })
          .to(eyebrow, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          })
          .to(
            title,
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.35"
          )
          .to(
            copy,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .to(
            actions,
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.35"
          );
      }

      ScrollTrigger.refresh();
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sceneRef}
      id="final-movement"
      className="bg-black text-white"
    >
      {/* =====================================================
          OPENING — DARKNESS
      ====================================================== */}
      <section className="flex min-h-[60svh] items-center justify-center bg-black px-6 py-28 text-center sm:px-10 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            The movement
          </p>

          <h2 className="mt-7 text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            The work is bigger
            <br />
            than one person.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">
            A community's future cannot be carried by one voice, one office,
            or one individual.
          </p>
        </div>
      </section>

      {/* =====================================================
          BEAT 01 — THE JOURNEY
      ====================================================== */}
      <section
        data-final-beat
        className="relative overflow-hidden bg-[#080808]"
      >
        <div className="relative min-h-[80svh] overflow-hidden">
          <img
            data-final-image
            src={workImage}
            alt="Peter Ndinda standing and working within his community"
            className="h-full min-h-[80svh] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-3xl">
              <p
                data-final-eyebrow
                className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
              >
                The journey
              </p>

              <h3
                data-final-title
                className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
              >
                The journey
                <br />
                continues.
              </h3>

              <p
                data-final-copy
                className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                The work does not end with a moment, a meeting or a single
                decision. It continues wherever people choose to show up,
                listen and serve.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="max-w-3xl text-xl font-light leading-relaxed text-white/70 sm:text-2xl lg:text-3xl">
              Tomorrow is shaped by what we choose to do today.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          BEAT 02 — TOGETHER
      ====================================================== */}
      <section
        data-final-beat
        className="relative overflow-hidden bg-black"
      >
        <div className="relative min-h-[80svh] overflow-hidden">
          <img
            data-final-image
            src={movementImage}
            alt="Peter Ndinda engaging with members of his community"
            className="h-full min-h-[80svh] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-3xl">
              <p
                data-final-eyebrow
                className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
              >
                Together
              </p>

              <h3
                data-final-title
                className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
              >
                No future is
                <br />
                built alone.
              </h3>

              <p
                data-final-copy
                className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                A better tomorrow belongs to everyone willing to take part in
                building it. One conversation, one contribution and one act
                of service at a time.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="max-w-3xl text-xl font-light leading-relaxed text-white/70 sm:text-2xl lg:text-3xl">
              The next chapter belongs to all of us willing to take part.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL FRAME
      ====================================================== */}
      <section
        data-final-ending
        className="flex min-h-svh items-center justify-center bg-black px-6 py-32 text-center sm:px-10 lg:px-16"
      >
        <div className="max-w-5xl">
          <p
            data-ending-eyebrow
            className="text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs"
          >
            The next chapter
          </p>

          <h3
            data-ending-title
            className="mt-7 text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-9xl"
          >
            Let's build
            <br />
            what comes next.
          </h3>

          <p
            data-ending-copy
            className="mx-auto mt-9 max-w-2xl text-base leading-8 text-white/50 sm:text-lg"
          >
            The future is not something we simply wait for.
            <br />
            It is something we choose to build together.
          </p>

          <div
            data-ending-actions
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#join"
              className="inline-flex min-w-52 items-center justify-center rounded-full bg-white px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-black transition-transform duration-300 hover:scale-[1.03]"
            >
              Join the Movement
            </a>

            <a
              href="#vision"
              className="inline-flex min-w-52 items-center justify-center rounded-full border border-white/30 px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:border-white/60"
            >
              Read the Vision
            </a>
          </div>
        </div>
      </section>
    </section>
  );
};

export default FinalMovement;