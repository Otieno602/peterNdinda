import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import pupilsImage from "../../assets/images/pupils.jpeg";
import groupImage from "../../assets/images/group.jpeg";
import interactingImage from "../../assets/images/interacting.jpeg";
import kidsImage from "../../assets/images/kids.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Scene06People = () => {
  const sceneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
          CINEMATIC IMAGE BEATS
      ====================================================== */

      const imageBeats = gsap.utils.toArray("[data-s06-beat]");

      imageBeats.forEach((section) => {
        const image = section.querySelector("[data-s06-image]");
        const eyebrow = section.querySelector("[data-s06-eyebrow]");
        const title = section.querySelector("[data-s06-title]");
        const copy = section.querySelector("[data-s06-copy]");

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
            y: 34,
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
          duration: 1.5,
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
            "-=0.6"
          );
        }

        if (title) {
          tl.to(
            title,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.95,
              ease: "power3.out",
            },
            "-=0.35"
          );
        }

        if (copy) {
          tl.to(
            copy,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: "power2.out",
            },
            "-=0.35"
          );
        }
      });

      /* =====================================================
          EDITORIAL BEATS
      ====================================================== */

      const editorialBeats = gsap.utils.toArray(
        "[data-s06-editorial]"
      );

      editorialBeats.forEach((section) => {
        const eyebrow = section.querySelector(
          "[data-s06-editorial-eyebrow]"
        );

        const title = section.querySelector(
          "[data-s06-editorial-title]"
        );

        const copyBlocks = section.querySelectorAll(
          "[data-s06-editorial-copy]"
        );

        const elements = [
          eyebrow,
          title,
          ...copyBlocks,
        ].filter(Boolean);

        if (!elements.length) return;

        gsap.set(elements, {
          autoAlpha: 0,
          y: 30,
        });

        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 0.95,
          stagger: 0.13,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 72%",
            toggleActions: "play reverse play reverse",
          },
        });
      });

      /* =====================================================
          OPENING
      ====================================================== */

      const opening = sceneRef.current.querySelector(
        "[data-s06-opening]"
      );

      if (opening) {
        const elements = opening.querySelectorAll(
          "[data-s06-opening-eyebrow], [data-s06-opening-title], [data-s06-opening-copy]"
        );

        gsap.set(elements, {
          autoAlpha: 0,
          y: 30,
        });

        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: opening,
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        });
      }

      /* =====================================================
          FINAL CLOSING
      ====================================================== */

      const closing = sceneRef.current.querySelector(
        "[data-s06-closing]"
      );

      if (closing) {
        const elements = closing.querySelectorAll(
          "[data-s06-closing-eyebrow], [data-s06-closing-line], [data-s06-closing-main], [data-s06-closing-copy]"
        );

        gsap.set(elements, {
          autoAlpha: 0,
          y: 28,
        });

        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: closing,
            start: "top 72%",
            toggleActions: "play reverse play reverse",
          },
        });
      }
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sceneRef}
      id="the-people"
      className="overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          OPENING — THE QUESTION
      ====================================================== */}

      <section className="relative flex min-h-[80svh] items-center justify-center bg-black px-6 py-28 text-center sm:px-10 lg:min-h-[85svh]">
        <div
          data-s06-opening
          className="mx-auto max-w-5xl"
        >
          <p
            data-s06-opening-eyebrow
            className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs"
          >
            06 — The People
          </p>

          <h2
            data-s06-opening-title
            className="mt-7 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Because every vision
            <br />
            eventually comes back to people.
          </h2>

          <p
            data-s06-opening-copy
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-8 text-white/55 sm:text-lg"
          >
            The people who are here today.
            <span className="mx-2 text-white/25">And</span>
            those who will inherit tomorrow.
          </p>
        </div>
      </section>

      {/* =====================================================
          01 — THE NEXT GENERATION
      ====================================================== */}

      <section
        data-s06-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s06-image
            src={pupilsImage}
            alt="School children walking together in their community"
            className="h-full w-full object-cover object-center lg:object-[50%_10%]"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-4xl">
            <p
              data-s06-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The next generation
            </p>

            <h3
              data-s06-title
              className="mt-5 max-w-4xl text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              Tomorrow is already
              <br />
              walking among us.
            </h3>

            <p
              data-s06-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Every child carries a future that has not yet been written.
              The schools they attend, the streets they walk, the
              opportunities they encounter and the people who believe in
              them all shape what they become.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL — WHAT WE LEAVE BEHIND
      ====================================================== */}

      <section
        data-s06-editorial
        className="relative bg-[#080808] px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <p
              data-s06-editorial-eyebrow
              className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs"
            >
              What we leave behind
            </p>

            <h3
              data-s06-editorial-title
              className="mt-6 max-w-3xl text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              Every generation
              <br />
              inherits something.
            </h3>
          </div>

          <div>
            <p
              data-s06-editorial-copy
              className="max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
            >
              The choices made before us helped shape the world we received.
              The choices we make today will shape the world that comes
              after us.
            </p>

            <p
              data-s06-editorial-copy
              className="mt-8 max-w-2xl text-base leading-8 text-white/45 sm:text-lg"
            >
              Leadership is therefore not only about what we achieve now.
              It is also about what we leave behind.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — THE PEOPLE
      ====================================================== */}

      <section
        data-s06-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s06-image
            src={groupImage}
            alt="Young people gathered together sharing a meal"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-4xl">
            <p
              data-s06-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The people
            </p>

            <h3
              data-s06-title
              className="mt-5 text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              Every future is
              <br />
              built by people.
            </h3>

            <p
              data-s06-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              People who learn together, work together, support one another,
              build relationships and create opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL — BELONGING
      ====================================================== */}

      <section
        data-s06-editorial
        className="relative bg-black px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
      >
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p
              data-s06-editorial-eyebrow
              className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs"
            >
              Belonging
            </p>

            <h3
              data-s06-editorial-title
              className="mt-6 max-w-2xl text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              No one builds
              <br />
              a future alone.
            </h3>
          </div>

          <div>
            <p
              data-s06-editorial-copy
              className="max-w-xl text-lg leading-relaxed text-white/60 sm:text-xl"
            >
              Behind every achievement is someone who opened a door, offered
              a hand, shared an idea, created an opportunity or simply
              believed.
            </p>

            <p
              data-s06-editorial-copy
              className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl"
            >
              Progress becomes meaningful when more people are able to take
              part in it.
            </p>

            <p
              data-s06-editorial-copy
              className="mt-5 max-w-xl text-base leading-8 text-white/40 sm:text-lg"
            >
              That is what belonging makes possible.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — PARTICIPATION
      ====================================================== */}

      <section
        data-s06-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s06-image
            src={interactingImage}
            alt="Young people participating together in their community"
            className="h-full w-full object-cover object-center lg:object-[50%_18%]"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-4xl">
            <p
              data-s06-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              Participation
            </p>

            <h3
              data-s06-title
              className="mt-5 max-w-4xl text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              The future is not
              <br />
              something we wait for.
            </h3>

            <p
              data-s06-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              It is shaped by the people who choose to take part in building
              it. Every conversation, every idea, every contribution and
              every act of service becomes part of the community's story.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL — THE CHOICE
      ====================================================== */}

      <section
        data-s06-editorial
        className="relative bg-[#080808] px-6 py-32 sm:px-10 lg:px-16 lg:py-44"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <p
              data-s06-editorial-eyebrow
              className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs"
            >
              The choice
            </p>

            <h3
              data-s06-editorial-title
              className="mt-6 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              What we leave behind is shaped by what we choose to build
              today.
            </h3>
          </div>

          <div className="mt-16 grid gap-8 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-10">
            <p
              data-s06-editorial-copy
              className="text-base leading-8 text-white/55 sm:text-lg"
            >
              The question is not simply what kind of community we have
              inherited.
            </p>

            <p
              data-s06-editorial-copy
              className="text-base leading-8 text-white/55 sm:text-lg"
            >
              It is what kind of community we are willing to build together.
            </p>

            <p
              data-s06-editorial-copy
              className="text-base leading-8 text-white/45 sm:text-lg"
            >
              For those growing up here. For those building their lives here.
              For those who will come after us.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — THE BEGINNING
      ====================================================== */}

      <section
        data-s06-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s06-image
            src={kidsImage}
            alt="Children walking and interacting together"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-4xl">
            <p
              data-s06-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The beginning
            </p>

            <h3
              data-s06-title
              className="mt-5 text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              It begins
              <br />
              with them.
            </h3>

            <p
              data-s06-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              With the environments we create around them. With the examples
              they grow up seeing. With the opportunities they are given.
              With the belief that their future is worth building for.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDITORIAL — THE WHY
      ====================================================== */}

      <section
        data-s06-editorial
        className="relative bg-black px-6 py-32 sm:px-10 lg:px-16 lg:py-48"
      >
        <div className="mx-auto max-w-6xl">
          <p
            data-s06-editorial-eyebrow
            className="text-center text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs"
          >
            The why
          </p>

          <h3
            data-s06-editorial-title
            className="mx-auto mt-7 max-w-5xl text-center text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            This is why
            <br />
            the work matters.
          </h3>

          <div className="mx-auto mt-16 max-w-3xl space-y-7">
            <p
              data-s06-editorial-copy
              className="text-lg leading-8 text-white/60 sm:text-xl sm:leading-9"
            >
              Because behind every road, every school, every business, every
              market and every decision is a human life being lived.
            </p>

            <p
              data-s06-editorial-copy
              className="text-lg leading-8 text-white/45 sm:text-xl sm:leading-9"
            >
              Behind every statistic is a face.
            </p>

            <p
              data-s06-editorial-copy
              className="text-lg leading-8 text-white/45 sm:text-xl sm:leading-9"
            >
              Behind every plan is a family.
            </p>

            <p
              data-s06-editorial-copy
              className="text-lg leading-8 text-white/45 sm:text-xl sm:leading-9"
            >
              Behind every tomorrow is a generation waiting to inherit what
              we build today.
            </p>

            <p
              data-s06-editorial-copy
              className="pt-5 text-2xl font-medium leading-relaxed text-white sm:text-3xl"
            >
              Leadership is ultimately measured by what happens to people.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING — THE PEOPLE
      ====================================================== */}

      <section
        data-s06-closing
        className="relative flex min-h-[90svh] items-center justify-center bg-black px-6 py-32 text-center sm:px-10 lg:min-h-screen"
      >
        <div className="mx-auto max-w-5xl">
          <p
            data-s06-closing-eyebrow
            className="text-[10px] uppercase tracking-[0.45em] text-white/30 sm:text-xs"
          >
            The people
          </p>

          <div className="mt-12 space-y-3 sm:mt-16">
            <p
              data-s06-closing-line
              className="text-2xl font-light tracking-tight text-white/35 sm:text-4xl"
            >
              Not power.
            </p>

            <p
              data-s06-closing-line
              className="text-2xl font-light tracking-tight text-white/35 sm:text-4xl"
            >
              Not position.
            </p>

            <p
              data-s06-closing-main
              className="text-5xl font-medium tracking-tighter sm:text-7xl lg:text-9xl"
            >
              People.
            </p>
          </div>

          <p
            data-s06-closing-copy
            className="mx-auto mt-12 max-w-xl text-base leading-8 text-white/50 sm:text-lg"
          >
            Because that is who the work is for.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Scene06People;