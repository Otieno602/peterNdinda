import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../animations/gsap";

import marketImage from "../../assets/scene02/mhesh04.jpeg";
import workImage from "../../assets/scene02/mhesh03.jpeg";
import portraitImage from "../../assets/scene02/mhesh02.jpeg";

const Scene02Leader = () => {
  const sceneRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reveals = gsap.utils.toArray("[data-s02-reveal]");

      // =====================================================
      // OPENING — IMAGE + TEXT MOVE AS ONE COMPOSITION
      // =====================================================
      const opening = sceneRef.current.querySelector("[data-s02-opening]");

      if (opening) {
        const image = opening.querySelector("[data-s02-opening-image]");
        const content = opening.querySelector("[data-s02-opening-content]");
        const eyebrow = opening.querySelector("[data-s02-opening-eyebrow]");
        const title = opening.querySelector("[data-s02-opening-title]");
        const copy = opening.querySelector("[data-s02-opening-copy]");

        gsap.set(image, {
          scale: 1.08,
        });

        gsap.set([eyebrow, title, copy], {
          autoAlpha: 0,
          y: 40,
        });

        const openingTl = gsap.timeline({
          scrollTrigger: {
            trigger: opening,
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        });

        // TEXT ARRIVES FIRST
        openingTl.to(
          eyebrow,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          0,
        );

        openingTl.to(
          title,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.3",
        );

        openingTl.to(
          copy,
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.7,
            ease: "power2.out",
          },
          "-=0.35",
        );

        // IMAGE FINISHES AFTER TEXT HAS ARRIVED
        openingTl.to(
          image,
          {
            scale: 1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.15",
        );
      }

      reveals.forEach((element) => {
        gsap.fromTo(
          element,
          {
            autoAlpha: 0,
            y: 50,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 82%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Image reveals
      gsap.utils.toArray("[data-s02-image]").forEach((image) => {
        gsap.fromTo(
          image,
          {
            scale: 1.08,
          },
          {
            scale: 1,
            duration: 1.4,
            ease: "power3.out",
            scrollTrigger: {
              trigger: image,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      // Leadership timeline line
      gsap.fromTo(
        "[data-s02-line]",
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "[data-s02-timeline]",
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        },
      );
    }, sceneRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sceneRef}
      id="leader-story"
      aria-labelledby="scene02-title"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =====================================================
          OPENING — PETER WA SOKO
      ====================================================== */}
      <section
        data-s02-opening
        className="relative min-h-screen overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden bg-black">
          <img
            data-s02-opening-image
            src={marketImage}
            alt="Peter Wa Soko standing among traders at a local market"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        </div>

        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/45 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-transparent to-black/20" />

        {/* CONTENT — stays attached to the image composition */}
        <div
          data-s02-opening-content
          className="relative z-10 flex min-h-screen items-end px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24"
        >
          <div className="max-w-5xl">
            <p
              data-s02-opening-eyebrow
              className="mb-5 text-[11px] font-medium tracking-[0.38em] text-white/60 uppercase"
            >
              The making of a leader
            </p>

            <h2
              id="scene02-title"
              data-s02-opening-title
              className="max-w-4xl text-[clamp(4rem,11vw,10rem)] font-semibold leading-[0.8] tracking-[-0.065em]"
            >
              PETER
              <br />
              WA SOKO
            </h2>

            <div
              data-s02-opening-copy
              className="mt-8 max-w-xl border-l border-white/35 pl-5"
            >
              <p className="text-base leading-relaxed text-white/80 sm:text-lg">
                Around here, many people know him by the place that has been
                part of his life for years — the market.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 z-20 flex items-center gap-3 text-[10px] tracking-[0.35em] text-white/45 uppercase sm:right-10 lg:right-16">
          <span className="h-px w-8 bg-white/30" />
          <span>02</span>
        </div>
      </section>

      {/* =====================================================
          THE MARKET
      ====================================================== */}
      <section className="relative bg-black px-6 py-28 sm:px-10 lg:min-h-[80vh] lg:px-16 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-24">
          <div data-s02-reveal>
            <p className="text-[11px] tracking-[0.35em] text-white/40 uppercase">
              The market
            </p>

            <h3 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
              This is where people know him.
            </h3>
          </div>

          <div data-s02-reveal className="max-w-xl lg:pt-12">
            <p className="text-lg leading-relaxed text-white/65 sm:text-xl">
              Peter has spent years working among the people of the market. It
              is more than a workplace. It is where relationships were built,
              conversations happened and his name became familiar.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-white/45">
              Peter Wa Soko is not simply a name. It is a reflection of where he
              has been and the people he has grown alongside.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
    THE WORK
===================================================== */}
      <section className="relative bg-[#080808] px-6 py-24 sm:px-10 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="relative mx-auto min-h-[70vh] max-w-5xl overflow-hidden bg-black sm:min-h-[75vh]">
            <img
              data-s02-image
              src={workImage}
              alt="Peter Wa Soko handling produce at a local market"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/35 to-transparent" />
            <div className="absolute inset-0 bg-linear-to-t from-black/65 via-transparent to-transparent" />

            {/* TEXT OVER IMAGE */}
            <div className="relative z-10 flex min-h-[70vh] items-end px-6 pb-10 sm:min-h-[75vh] sm:px-10 sm:pb-14 lg:px-14 lg:pb-16">
              <div className="max-w-2xl">
                <div data-s02-reveal>
                  <p className="text-[11px] tracking-[0.35em] text-white/40 uppercase">
                    The work
                  </p>

                  <h3 className="mt-6 text-4xl font-medium leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                    Not just a familiar face.
                    <br />
                    One of the people.
                  </h3>
                </div>

                <p
                  data-s02-reveal
                  className="mt-8 max-w-lg text-base leading-relaxed text-white/65 sm:text-lg"
                >
                  He knows what it means to work here, to hustle, to deal with
                  everyday challenges and to build a life from what the market
                  provides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          THE CALL
      ====================================================== */}
      <section className="relative overflow-hidden bg-black px-6 py-32 sm:px-10 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-5xl text-center">
          <p
            data-s02-reveal
            className="text-[11px] tracking-[0.4em] text-white/40 uppercase"
          >
            But the calling came earlier
          </p>

          <h3
            data-s02-reveal
            className="mt-8 text-5xl font-medium leading-[0.95] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Leadership
            <br />
            came early.
          </h3>

          <p
            data-s02-reveal
            className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Long before the market, before community groups and before the
            responsibilities of adulthood, there were already signs of a natural
            instinct to lead.
          </p>
        </div>
      </section>

      {/* =====================================================
          LEADERSHIP TIMELINE
      ====================================================== */}
      <section
        data-s02-timeline
        className="relative bg-[#080808] px-6 py-28 sm:px-10 lg:px-16 lg:py-40"
      >
        <div className="mx-auto max-w-6xl">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1.75 top-2 bottom-0 w-px bg-white/10 sm:left-1/2 sm:-translate-x-1/2">
              <div data-s02-line className="h-full w-full bg-white/45" />
            </div>

            {/* Primary school */}
            <div className="relative grid gap-10 pb-24 sm:grid-cols-2 sm:gap-20">
              <div data-s02-reveal className="pl-10 sm:pl-0 sm:text-right">
                <p className="text-[11px] tracking-[0.35em] text-white/35 uppercase">
                  01 · Primary school
                </p>

                <h4 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Headboy.
                </h4>
              </div>

              <div data-s02-reveal className="relative pl-10 sm:pl-0">
                <div className="absolute -left-px top-1 h-4 w-4 rounded-full border border-white/60 bg-black sm:-left-10.25" />

                <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
                  Leadership was already part of his story from a young age. At
                  primary school, he was chosen to serve as headboy.
                </p>
              </div>
            </div>

            {/* High school */}
            <div className="relative grid gap-10 pb-24 sm:grid-cols-2 sm:gap-20">
              <div
                data-s02-reveal
                className="pl-10 sm:order-1 sm:pl-0 sm:text-right"
              >
                <p className="text-[11px] tracking-[0.35em] text-white/35 uppercase">
                  02 · High school
                </p>

                <h4 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Form 3.
                  <br />
                  School captain.
                </h4>
              </div>

              <div
                data-s02-reveal
                className="relative pl-10 sm:order-2 sm:pl-0"
              >
                <div className="absolute -left-px top-1 h-4 w-4 rounded-full border border-white/60 bg-black sm:-left-10.25" />

                <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
                  In high school, the pattern continued. He was chosen as school
                  captain while still in Form 3 — a responsibility normally
                  associated with students in their final year.
                </p>
              </div>
            </div>

            {/* Community */}
            <div className="relative grid gap-10 pb-24 sm:grid-cols-2 sm:gap-20">
              <div data-s02-reveal className="pl-10 sm:pl-0 sm:text-right">
                <p className="text-[11px] tracking-[0.35em] text-white/35 uppercase">
                  03 · Community
                </p>

                <h4 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Chama leader.
                </h4>
              </div>

              <div data-s02-reveal className="relative pl-10 sm:pl-0">
                <div className="absolute -left-px top-1 h-4 w-4 rounded-full border border-white/60 bg-black sm:-left-10.25" />

                <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
                  After college, leadership continued beyond formal titles.
                  While working at the market, Peter became chairman of several
                  community chamas.
                </p>
              </div>
            </div>

            {/* Family */}
            <div className="relative grid gap-10 sm:grid-cols-2 sm:gap-20">
              <div
                data-s02-reveal
                className="pl-10 sm:order-1 sm:pl-0 sm:text-right"
              >
                <p className="text-[11px] tracking-[0.35em] text-white/35 uppercase">
                  04 · Family
                </p>

                <h4 className="mt-4 text-4xl font-medium tracking-[-0.04em] sm:text-5xl">
                  Responsibility.
                </h4>
              </div>

              <div
                data-s02-reveal
                className="relative pl-10 sm:order-2 sm:pl-0"
              >
                <div className="absolute -left-px top-1 h-4 w-4 rounded-full border border-white/60 bg-black sm:-left-10.25" />

                <p className="max-w-md text-base leading-relaxed text-white/55 sm:text-lg">
                  After the loss of his mother, Peter found himself carrying
                  responsibility for his family — eight siblings, with him as
                  the last born.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ====================================================== */}
      <section className="relative min-h-screen overflow-hidden">
        <img
          src={portraitImage}
          alt="Peter Wa Soko standing at a local market"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-black/30" />

        <div className="relative z-10 flex min-h-screen items-end px-6 pb-20 sm:px-10 lg:px-16 lg:pb-28">
          <div className="max-w-5xl">
            <p
              data-s02-reveal
              className="text-[11px] tracking-[0.4em] text-white/50 uppercase"
            >
              The pattern
            </p>

            <h3
              data-s02-reveal
              className="mt-6 max-w-4xl text-4xl font-medium leading-none tracking-[-0.045em] sm:text-6xl lg:text-8xl"
            >
              Leadership was never
              <br />
              just a title.
            </h3>

            <p
              data-s02-reveal
              className="mt-8 max-w-xl border-l border-white/35 pl-5 text-base leading-relaxed text-white/70 sm:text-lg"
            >
              From the classroom to the market, from community groups to family,
              leadership has repeatedly meant stepping forward when
              responsibility called.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Scene02Leader;
