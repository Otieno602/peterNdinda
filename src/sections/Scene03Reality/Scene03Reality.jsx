import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import marketImage from "../../assets/images/scene304.jpeg";
import rhythmImage from "../../assets/images/scene306.jpeg";
import realityImage from "../../assets/images/scene303.jpeg";
import generationImage from "../../assets/images/scene302.jpeg";
import homeImage from "../../assets/images/scene301.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Scene03Reality = () => {
  const sceneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray("[data-s03-beat]");

      sections.forEach((section) => {
        const image = section.querySelector("[data-s03-image]");
        const eyebrow = section.querySelector("[data-s03-eyebrow]");
        const title = section.querySelector("[data-s03-title]");
        const copy = section.querySelector("[data-s03-copy]");

        if (!image) return;

        gsap.set(image, {
          scale: 1.06,
        });

        if (eyebrow) {
          gsap.set(eyebrow, {
            autoAlpha: 0,
            y: 24,
          });
        }

        if (title) {
          gsap.set(title, {
            autoAlpha: 0,
            y: 32,
          });
        }

        if (copy) {
          gsap.set(copy, {
            autoAlpha: 0,
            y: 24,
          });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play reverse play reverse",
          },
        });

        tl.to(image, {
          scale: 1,
          duration: 1.4,
          ease: "power3.out",
        });

        if (eyebrow) {
          tl.to(
            eyebrow,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            "-=0.55",
          );
        }

        if (title) {
          tl.to(
            title,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.35",
          );
        }

        if (copy) {
          tl.to(
            copy,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.75,
              ease: "power2.out",
            },
            "-=0.35",
          );
        }
      });

      // Opening quote
      const quote = sceneRef.current.querySelector("[data-s03-opening-quote]");

      if (quote) {
        gsap.fromTo(
          quote,
          {
            autoAlpha: 0,
            y: 30,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: quote,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }

      // Final statement
      const finalStatement = sceneRef.current.querySelector("[data-s03-final]");

      if (finalStatement) {
        gsap.fromTo(
          finalStatement,
          {
            autoAlpha: 0,
            y: 40,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: finalStatement,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          },
        );
      }
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sceneRef}
      id="the-place-he-knows"
      aria-labelledby="scene-three-title"
      className="overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          OPENING — NARRATIVE DOORWAY
      ====================================================== */}
      <section className="relative flex min-h-[75svh] items-center justify-center bg-black px-6 py-24 text-center sm:px-10 lg:min-h-[85svh]">
        <div className="mx-auto max-w-4xl">
          <p
            data-s03-opening-quote
            className="text-3xl font-light leading-[1.15] tracking-[-0.035em] text-white/90 sm:text-5xl lg:text-6xl"
          >
            But leadership is also about knowing where you belong.
          </p>
        </div>
      </section>

      {/* =====================================================
          01 — THE MARKET
      ====================================================== */}
      <section data-s03-beat className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-s03-image
            src={marketImage}
            alt="Peter Wa Soko standing among people at a local market"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p
              data-s03-eyebrow
              className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The market
            </p>

            <h2
              id="scene-three-title"
              data-s03-title
              className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              For years,
              <br />
              Peter worked here.
            </h2>

            <p
              data-s03-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Before politics, before campaigns and before people called him a
              leader, this was where he earned his living — among the people and
              businesses that make this community what it is.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — PETER WA SOKO
      ====================================================== */}
      <section className="relative bg-[#080808] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div>
            <p
              data-s03-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/40 sm:text-xs"
            >
              The name
            </p>

            <h3
              data-s03-title
              className="mt-5 text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-8xl"
            >
              Peter
              <br />
              Wa Soko.
            </h3>
          </div>

          <div>
            <p
              data-s03-copy
              className="max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
            >
              That's why they call him Peter Wa Soko.
            </p>

            <p
              data-s03-copy
              className="mt-6 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg"
            >
              Soko means market. The name wasn't created for a campaign. It came
              from years of being here — working, talking, listening and living
              alongside the people.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — THE RHYTHM
      ====================================================== */}
      <section data-s03-beat className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-s03-image
            src={rhythmImage}
            alt="Busy community street with people, businesses and local transport"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/15 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p
              data-s03-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The rhythm
            </p>

            <h3
              data-s03-title
              className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              He knows
              <br />
              these streets.
            </h3>

            <p
              data-s03-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              The traders opening their stalls. The boda bodas moving through
              the streets. The businesses trying to make it through another day.
              The everyday rhythm of a community that never stops.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — BEYOND THE MARKET
      ====================================================== */}
      <section className="relative bg-black px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p
              data-s03-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/40 sm:text-xs"
            >
              Beyond the market
            </p>

            <h3
              data-s03-title
              className="mt-5 max-w-xl text-5xl font-medium leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl"
            >
              The market is only part of the story.
            </h3>
          </div>

          <div>
            <p
              data-s03-copy
              className="max-w-xl text-base leading-8 text-white/60 sm:text-lg"
            >
              Beyond the busy streets are homes, schools, young people and
              families — each carrying their own hopes, responsibilities and
              struggles.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — THE NEXT GENERATION
      ====================================================== */}
      <section data-s03-beat className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            data-s03-image
            src={generationImage}
            alt="Local school and surrounding community"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/10" />
        </div>

        <div className="absolute inset-0 flex items-end">
          <div className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
            <p
              data-s03-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The next generation
            </p>

            <h3
              data-s03-title
              className="mt-5 max-w-2xl text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              Tomorrow is
              <br />
              already growing here.
            </h3>

            <p
              data-s03-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Every child deserves a place where possibility feels real. Every
              family deserves the opportunity to build something better.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — THE CONNECTION
      ====================================================== */}
      <section className="relative bg-[#080808] px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-5xl text-center">
          <p
            data-s03-eyebrow
            className="text-[10px] uppercase tracking-[0.4em] text-white/40 sm:text-xs"
          >
            The connection
          </p>

          <h3
            data-s03-title
            className="mt-7 text-4xl font-medium leading-none tracking-[-0.045em] sm:text-6xl lg:text-7xl"
          >
            He doesn't want to lead
            <br className="hidden sm:block" />a place he doesn't understand.
          </h3>

          <p
            data-s03-copy
            className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg"
          >
            The problems here aren't numbers on a page to him. They are streets
            he has walked, businesses he has understood and people he has lived
            alongside.
          </p>
        </div>
      </section>

      {/* =====================================================
          FINAL STATEMENT
      ====================================================== */}
      <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden bg-black px-6 py-32 text-center sm:px-10 lg:px-16">
        <img
          src={homeImage}
          alt="Residential community street"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 flex items-end">
          <div
            data-s03-final
            className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-white/45 sm:text-xs">
              The place he knows
            </p>

            <h3 className="mt-7 max-w-5xl text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-9xl">
              He wants to lead
              <br />
              the place he knows.
            </h3>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/60 sm:text-lg">
              Because belonging gives him more than a connection to this place.
              It gives him a reason to make it better.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SCENE 04 HANDOFF
      ====================================================== */}
      <section
        className="flex min-h-[45svh] items-center justify-center bg-black px-6 py-24 text-center sm:px-10"
        aria-label="Transition to the next chapter"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            The next chapter
          </p>

          <p className="mt-5 text-2xl font-light tracking-[-0.02em] text-white/75 sm:text-4xl">
            What can this place become?
          </p>
        </div>
      </section>
    </section>
  );
};

export default Scene03Reality;
