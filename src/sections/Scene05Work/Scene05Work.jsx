import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import placeImage from "../../assets/images/scene305.jpeg";
import communityImage from "../../assets/images/withTheCommunity.jpeg";
import presenceImage from "../../assets/images/engagingCommunity02.jpeg";
import everydayImage from "../../assets/images/engagingCommunity01.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Scene05Work = () => {
  const sceneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =====================================================
          IMAGE / STORY BEATS
      ====================================================== */

      const imageBeats = gsap.utils.toArray("[data-s05-beat]");

      imageBeats.forEach((section) => {
        const image = section.querySelector("[data-s05-image]");
        const eyebrow = section.querySelector("[data-s05-eyebrow]");
        const title = section.querySelector("[data-s05-title]");
        const copy = section.querySelector("[data-s05-copy]");

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
            "-=0.55"
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
        "[data-s05-editorial]"
      );

      editorialBeats.forEach((section) => {
        const eyebrow = section.querySelector(
          "[data-s05-editorial-eyebrow]"
        );

        const title = section.querySelector(
          "[data-s05-editorial-title]"
        );

        const copy = section.querySelector(
          "[data-s05-editorial-copy]"
        );

        const elements = [eyebrow, title, copy].filter(Boolean);

        if (!elements.length) return;

        gsap.set(elements, {
          autoAlpha: 0,
          y: 30,
        });

        gsap.to(elements, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          stagger: 0.14,
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
        "[data-s05-opening]"
      );

      if (opening) {
        gsap.fromTo(
          opening,
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
              trigger: opening,
              start: "top 75%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }

      /* =====================================================
          FINAL STATEMENT
      ====================================================== */

      const finalStatement = sceneRef.current.querySelector(
        "[data-s05-final]"
      );

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
          }
        );
      }

      /* =====================================================
          SCENE HANDOFF
      ====================================================== */

      const handoff = sceneRef.current.querySelector(
        "[data-s05-handoff]"
      );

      if (handoff) {
        gsap.fromTo(
          handoff,
          {
            autoAlpha: 0,
            y: 25,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: handoff,
              start: "top 78%",
              toggleActions: "play reverse play reverse",
            },
          }
        );
      }
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sceneRef}
      id="the-work"
      aria-labelledby="scene-five-title"
      className="overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          OPENING — NARRATIVE DOORWAY
      ====================================================== */}

      <section className="relative flex min-h-[75svh] items-center justify-center bg-black px-6 py-24 text-center sm:px-10 lg:min-h-[85svh]">
        <div
          data-s05-opening
          className="mx-auto max-w-4xl"
        >
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/40 sm:text-xs">
            05 — The Work
          </p>

          <h2
            id="scene-five-title"
            className="mt-7 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Leadership is not a title.
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-lg font-light leading-relaxed text-white/65 sm:text-xl">
            It is the work that follows.
          </p>
        </div>
      </section>

      {/* =====================================================
          01 — THE PLACE
      ====================================================== */}

      <section
        data-s05-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s05-image
            src={placeImage}
            alt="Matatus and people moving through a busy local community"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-transparent to-black/20" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p
              data-s05-eyebrow
              className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The place
            </p>

            <h3
              data-s05-title
              className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              A community
              <br />
              is always moving.
            </h3>

            <p
              data-s05-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Every morning, people set out to work, trade, build and
              provide. Matatus fill the roads, businesses open their doors,
              and another day begins.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          02 — THE RESPONSIBILITY
      ====================================================== */}

      <section
        data-s05-editorial
        className="relative bg-[#080808] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div>
            <p
              data-s05-editorial-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/40 sm:text-xs"
            >
              The responsibility
            </p>

            <h3
              data-s05-editorial-title
              className="mt-5 max-w-xl text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              To understand the work,
              <br />
              understand what is at stake.
            </h3>
          </div>

          <div>
            <p
              data-s05-editorial-copy
              className="max-w-2xl text-lg leading-relaxed text-white/65 sm:text-xl"
            >
              Behind every shop, every matatu, every market stall and every
              early morning journey is someone trying to build a life.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-7 max-w-2xl text-base leading-relaxed text-white/45 sm:text-lg"
            >
              That is the community leadership is meant to serve — not as an
              abstract idea, but as people with work to do, families to
              support and futures they are trying to build.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          03 — THE PEOPLE
      ====================================================== */}

      <section
        data-s05-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s05-image
            src={communityImage}
            alt="Peter Ndinda walking alongside members of the community"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p
              data-s05-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The people
            </p>

            <h3
              data-s05-title
              className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              And leadership means
              <br />
              moving with them.
            </h3>

            <p
              data-s05-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Not standing above people. Not watching from a distance.
              Leadership becomes meaningful when it stays close enough to
              understand the realities people face every day.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          04 — THE PRESENCE
      ====================================================== */}

      <section
        data-s05-editorial
        className="relative bg-black px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div>
            <p
              data-s05-editorial-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/40 sm:text-xs"
            >
              The presence
            </p>

            <h3
              data-s05-editorial-title
              className="mt-5 max-w-xl text-5xl font-medium leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl"
            >
              Presence is not something you announce.
            </h3>
          </div>

          <div>
            <p
              data-s05-editorial-copy
              className="max-w-xl text-base leading-8 text-white/60 sm:text-lg"
            >
              It is something people experience.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-7 max-w-xl text-base leading-8 text-white/45 sm:text-lg"
            >
              It is showing up. Being available. Seeing what others see.
              Understanding before deciding.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl"
            >
              Because you cannot lead people you have never taken the time to
              understand.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          05 — THE PRESENCE IN PRACTICE
      ====================================================== */}

      <section
        data-s05-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s05-image
            src={presenceImage}
            alt="Peter Ndinda engaging with members of the community"
            className="h-full w-full object-cover object-[75%_25%] sm:object-[78%_38%] lg:object-[82%_15%]"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/30 to-transparent" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p
              data-s05-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The presence
            </p>

            <h3
              data-s05-title
              className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              It means being present
              <br />
              where people are.
            </h3>

            <p
              data-s05-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Before asking people what they need, you have to be willing to
              stand where they stand, see what they see and understand what
              they live.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          06 — THE EVERYDAY
      ====================================================== */}

      <section
        data-s05-editorial
        className="relative bg-[#080808] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-24">
          <div className="max-w-3xl">
            <p
              data-s05-editorial-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The everyday
            </p>

            <h3
              data-s05-editorial-title
              className="mt-5 max-w-3xl text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              The work doesn't happen only when people are watching.
            </h3>
          </div>

          <div>
            <p
              data-s05-editorial-copy
              className="max-w-xl text-base leading-8 text-white/60 sm:text-lg"
            >
              Communities do not pause when meetings end. Businesses still
              open. People still travel. Families still provide. Young people
              still dream.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white/80 sm:text-xl"
            >
              The everyday is where leadership eventually has to prove itself.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          07 — THE EVERYDAY / NIGHT
      ====================================================== */}

      <section
        data-s05-beat
        className="relative min-h-svh overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            data-s05-image
            src={everydayImage}
            alt="Community members and motorcycles gathered at night"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p
              data-s05-eyebrow
              className="text-[10px] uppercase tracking-[0.4em] text-white/55 sm:text-xs"
            >
              The everyday
            </p>

            <h3
              data-s05-title
              className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
            >
              The work does not stop
              <br />
              when the day does.
            </h3>

            <p
              data-s05-copy
              className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8"
            >
              Long after the sun goes down, the community is still moving.
              Life continues. So does the responsibility to understand it.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          08 — THE MEANING
      ====================================================== */}

      <section
        data-s05-editorial
        className="relative bg-black px-6 py-32 text-center sm:px-10 lg:px-16 lg:py-44"
      >
        <div className="mx-auto max-w-5xl">
          <p
            data-s05-editorial-eyebrow
            className="text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs"
          >
            The meaning
          </p>

          <h3
            data-s05-editorial-title
            className="mt-7 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            This is what presence looks like.
          </h3>

          <div className="mx-auto mt-10 max-w-2xl">
            <p
              data-s05-editorial-copy
              className="text-lg leading-relaxed text-white/45 sm:text-xl"
            >
              Not a photograph.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-3 text-lg leading-relaxed text-white/45 sm:text-xl"
            >
              Not a campaign moment.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-3 text-lg leading-relaxed text-white/45 sm:text-xl"
            >
              Not a title.
            </p>

            <p
              data-s05-editorial-copy
              className="mt-8 text-2xl font-medium leading-relaxed text-white sm:text-3xl"
            >
              A responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL — TRANSITION TOWARD SCENE 06
      ====================================================== */}

      <section
        data-s05-final
        className="relative flex min-h-[85svh] items-center justify-center bg-black px-6 py-32 text-center sm:px-10 lg:px-16"
      >
        <div className="max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            Where it leads
          </p>

          <h3 className="mt-7 text-5xl font-medium leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-9xl">
            Understanding is where
            <br />
            it begins.
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            But leadership is measured by what we do with it.
          </p>
        </div>
      </section>

      {/* =====================================================
          SCENE 06 HANDOFF
      ====================================================== */}

      <section
        data-s05-handoff
        className="flex min-h-[45svh] items-center justify-center bg-[#080808] px-6 py-24 text-center sm:px-10"
        aria-label="Transition to the next chapter"
      >
        <div>
          <p className="text-[10px] uppercase tracking-[0.45em] text-white/35 sm:text-xs">
            The next chapter
          </p>

          <p className="mt-5 text-2xl font-light tracking-[-0.02em] text-white/75 sm:text-4xl">
            Who is the work ultimately for?
          </p>
        </div>
      </section>
    </section>
  );
};

export default Scene05Work;