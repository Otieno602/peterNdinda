import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import personal01Image from "../../assets/images/pn1.jpeg";
import personal02Image from "../../assets/images/pn3.jpeg";
import personal03Image from "../../assets/images/pn2.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Scene07Commitment = () => {
  const sceneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const beats = gsap.utils.toArray("[data-s07-beat]");

      beats.forEach((beat) => {
        const image = beat.querySelector("[data-s07-image]");
        const eyebrow = beat.querySelector("[data-s07-eyebrow]");
        const title = beat.querySelector("[data-s07-title]");
        const copy = beat.querySelector("[data-s07-copy]");

        gsap.set([eyebrow, title, copy], {
          opacity: 0,
          y: 35,
        });

        gsap.set(image, {
          scale: 1.06,
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: beat,
            start: "top 75%",
            end: "top 35%",
            toggleActions: "play none none reverse",
          },
        });

        tl.to(image, {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        })
          .to(
            eyebrow,
            {
              opacity: 1,
              y: 0,
              duration: 0.65,
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
            "-=0.45"
          )
          .to(
            copy,
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              ease: "power3.out",
            },
            "-=0.45"
          );
      });

      const final = sceneRef.current?.querySelector("[data-s07-final]");

      if (final) {
        const eyebrow = final.querySelector("[data-s07-final-eyebrow]");
        const title = final.querySelector("[data-s07-final-title]");
        const copy = final.querySelector("[data-s07-final-copy]");

        gsap.set([eyebrow, title, copy], {
          opacity: 0,
          y: 35,
        });

        gsap
          .timeline({
            scrollTrigger: {
              trigger: final,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          })
          .to(eyebrow, {
            opacity: 1,
            y: 0,
            duration: 0.65,
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
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.45"
          );
      }

      ScrollTrigger.refresh();
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sceneRef} id="scene-seven" className="bg-black text-white">
      {/* =====================================================
          OPENING
      ====================================================== */}
      <section className="flex min-h-[55svh] items-center justify-center bg-black px-6 py-28 text-center sm:px-10 lg:py-40">
        <div className="max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs">
            The commitment
          </p>

          <h2 className="mt-7 text-5xl font-medium leading-[0.92] tracking-[-0.055em] sm:text-7xl lg:text-8xl">
            Leadership begins
            <br />
            with a decision.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            A decision to step forward when staying on the sidelines would be
            easier. To accept responsibility when it would be easier to leave
            it to someone else.
          </p>
        </div>
      </section>

      {/* =====================================================
          01 — THE CHOICE
      ====================================================== */}
      <section
        data-s07-beat
        className="relative overflow-hidden bg-[#080808]"
      >
        <div className="relative min-h-[78svh] overflow-hidden">
          <img
            data-s07-image
            src={personal01Image}
            alt="Peter Ndinda seated outdoors in a quiet personal moment"
            className="h-full min-h-[78svh] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-3xl">
              <p
                data-s07-eyebrow
                className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs"
              >
                The choice
              </p>

              <h3
                data-s07-title
                className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
              >
                Leadership begins
                <br />
                with a decision.
              </h3>

              <p
                data-s07-copy
                className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Not every decision is made in front of a crowd. Some are made
                quietly — in the moments when a person decides what kind of
                responsibility they are willing to carry.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="max-w-3xl text-xl font-light leading-relaxed text-white/75 sm:text-2xl lg:text-3xl">
              Stepping forward means accepting that leadership is not simply
              about being seen. It is about being willing to stand behind the
              work.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — THE RESPONSIBILITY
      ====================================================== */}
      <section
        data-s07-beat
        className="relative overflow-hidden bg-black"
      >
        <div className="relative min-h-[78svh] overflow-hidden">
          <img
            data-s07-image
            src={personal02Image}
            alt="Peter Ndinda standing outdoors"
            className="h-full min-h-[78svh] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-3xl">
              <p
                data-s07-eyebrow
                className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs"
              >
                The responsibility
              </p>

              <h3
                data-s07-title
                className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
              >
                A position can be given.
                <br />
                Responsibility must be earned.
              </h3>

              <p
                data-s07-copy
                className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Leadership becomes meaningful when it is treated as a
                responsibility to people, not simply a position to hold.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-24">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/35 sm:text-xs">
                What it asks
              </p>

              <h4 className="mt-5 max-w-xl text-4xl font-medium leading-[0.95] tracking-[-0.045em] sm:text-5xl lg:text-6xl">
                To take responsibility when the work gets difficult.
              </h4>
            </div>

            <p className="max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              It means accepting that the people behind every street, business,
              family and future are not just an audience. They are the reason
              the responsibility matters in the first place.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — THE STAND
      ====================================================== */}
      <section
        data-s07-beat
        className="relative overflow-hidden bg-[#080808]"
      >
        <div className="relative min-h-[82svh] overflow-hidden">
          <img
            data-s07-image
            src={personal03Image}
            alt="Peter Ndinda in a formal portrait"
            className="h-full min-h-[82svh] w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />

          <div className="absolute inset-x-0 bottom-0 px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <div className="max-w-3xl">
              <p
                data-s07-eyebrow
                className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs"
              >
                The stand
              </p>

              <h3
                data-s07-title
                className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
              >
                Before the position,
                <br />
                there was the responsibility.
              </h3>

              <p
                data-s07-copy
                className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
              >
                Long before the possibility of public office, leadership had
                already appeared in different forms — at school, in community,
                in family and in the responsibilities life placed before him.
              </p>
            </div>
          </div>
        </div>

        <div className="px-6 py-24 sm:px-10 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-4xl">
            <p className="text-xl font-light leading-relaxed text-white/70 sm:text-2xl lg:text-3xl">
              The title may change. The responsibility does not.
            </p>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg">
              From early leadership roles to the responsibilities he carried
              within his family and community, the thread has remained the
              same: stepping forward when responsibility calls.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL — THE COMMITMENT
      ====================================================== */}
      <section
        data-s07-final
        className="relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-black px-6 py-32 text-center sm:px-10 lg:px-16"
      >
        <div className="relative z-10 max-w-5xl">
          <p
            data-s07-final-eyebrow
            className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs"
          >
            The commitment
          </p>

          <h3
            data-s07-final-title
            className="mt-7 text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-9xl"
          >
            Commitment is not
            <br className="hidden sm:block" />
            what you say when people are watching.
          </h3>

          <p
            data-s07-final-copy
            className="mx-auto mt-9 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
          >
            It is what you continue to do when they are not.
            <br />
            To listen. To show up. To take responsibility. To keep working.
          </p>
        </div>
      </section>

      {/* =====================================================
          HANDOFF TO FINAL MOVEMENT
      ====================================================== */}
      <section className="flex min-h-[45svh] items-center justify-center bg-[#080808] px-6 py-24 text-center sm:px-10">
        <div>
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/30 sm:text-xs">
            The final movement
          </p>

          <p className="mt-5 text-2xl font-light tracking-[-0.02em] text-white/70 sm:text-4xl">
            The work is bigger than one person.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Scene07Commitment;