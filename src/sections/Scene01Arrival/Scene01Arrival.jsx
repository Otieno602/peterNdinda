import { useLayoutEffect, useRef } from "react";
import { gsap } from "../../animations/gsap";
import heroImage from "../../assets/mhesh01.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaWhatsapp,
} from "react-icons/fa6";

const Scene01Arrival = () => {
  const sceneRef = useRef(null);
  const viewportRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      // Initial states
      gsap.set("[data-hero-image]", {
        autoAlpha: 0,
        scale: 1.06,
      });

      gsap.set(
        [
          "[data-hero-nav]",
          "[data-hero-eyebrow]",
          "[data-hero-title]",
          "[data-hero-identity]",
          "[data-hero-cta]",
          "[data-hero-social]",
          "[data-hero-marker]",
        ],
        {
          autoAlpha: 0,
          y: 30,
        },
      );

      // IMAGE ARRIVAL
      tl.to("[data-hero-image]", {
        autoAlpha: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
      })

        // NAVIGATION
        .to(
          "[data-hero-nav]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=1",
        )

        // EYEBROW
        .to(
          "[data-hero-eyebrow]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.15",
        )

        // NAME
        .to(
          "[data-hero-title]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          "+=0.25",
        )

        // IDENTITY
        .to(
          "[data-hero-identity]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "+=0.3",
        )

        // CTA
        .to(
          "[data-hero-cta]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "+=0.3",
        )

        // SOCIAL
        .to(
          "[data-hero-social]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "+=0.15",
        )

        // SCENE MARKER
        .to(
          "[data-hero-marker]",
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "<",
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sceneRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.25,
          pin: viewportRef.current,
          anticipatePin: 1,
        },
      });

      // SOCIALS
      // SOCIALS
      scrollTl.fromTo(
        "[data-hero-social]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -20,
          duration: 0.12,
          ease: "none",
        },
        0.02,
      );

      // SCENE MARKER
      scrollTl.fromTo(
        "[data-hero-marker]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -20,
          duration: 0.12,
          ease: "none",
        },
        0.02,
      );

      // CTA
      scrollTl.fromTo(
        "[data-hero-cta]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: 30,
          duration: 0.15,
          ease: "none",
        },
        0.08,
      );

      // IDENTITY / SUBTITLE
      scrollTl.fromTo(
        "[data-hero-identity]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -30,
          duration: 0.18,
          ease: "none",
        },
        0.14,
      );

      scrollTl.fromTo(
        "[data-hero-eyebrow]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -20,
          duration: 0.16,
          ease: "none",
        },
        0.12,
      );

      // TITLE
      scrollTl.fromTo(
        "[data-hero-title]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: "-25vh",
          duration: 0.3,
          ease: "none",
        },
        0.2,
      );

      // NAVIGATION
      scrollTl.fromTo(
        "[data-hero-nav]",
        {
          opacity: 1,
          y: 0,
        },
        {
          opacity: 0,
          y: -30,
          duration: 0.15,
          ease: "none",
        },
        0.32,
      );

      // DARK TRANSITION
      scrollTl.fromTo(
        "[data-transition-overlay]",
        {
          opacity: 0,
        },
        {
          opacity: 0.65,
          duration: 0.25,
          ease: "none",
        },
        0.58,
      );

      // SCENE 02 TEASE
      scrollTl.fromTo(
        "[data-scene02-tease]",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 0.2,
          ease: "none",
        },
        0.7,
      );
    }, sceneRef);

    return () => ctx.revert();
  }, []);
  return (
    <section ref={sceneRef} className="relative  h-[320vh] bg-black text-white">
      <div ref={viewportRef} className="relative h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            data-hero-image
            src={heroImage}
            alt="Peter Wa Soko interacting with members of his community at a local market"
            className="h-full w-full object-cover object-[65%_10%]"
          />

          <div
            data-transition-overlay
            className="pointer-events-none absolute inset-0 z-10 bg-black opacity-0"
          />

          {/* Left readability gradient */}
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/65 via-45% to-transparent" />

          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black/70 to-transparent" />
        </div>

        {/* Navigation */}
        <header data-hero-nav className="absolute inset-x-0 top-0 z-20">
          <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-6 sm:px-8 lg:px-12">
            <div className="text-sm font-medium tracking-[0.25em] uppercase">
              Peter Wa Soko
            </div>

            <button
              type="button"
              aria-label="Open menu"
              className="group flex items-center gap-3 text-sm tracking-[0.2em] uppercase"
            >
              <span className="hidden sm:inline">Menu</span>

              <span className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-full border border-white/30 transition duration-300 group-hover:bg-white">
                <span className="h-px w-4 bg-white transition duration-300 group-hover:bg-black" />
                <span className="h-px w-4 bg-white transition duration-300 group-hover:bg-black" />
              </span>
            </button>
          </div>
        </header>

        {/* Main content */}
        <div className="relative z-10 flex min-h-screen items-end">
          <div className="mx-auto w-full max-w-[1600px] px-6 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
            <div className="max-w-3xl">
              {/* Eyebrow */}
              <p
                data-hero-eyebrow
                className="mb-6 text-xs font-medium tracking-[0.35em] text-white/60 uppercase sm:text-sm"
              >
                Leadership · Service · Community
              </p>

              {/* Main name */}
              <h1
                data-hero-title
                className="text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.82] tracking-[-0.06em]"
              >
                <span className="block">PETER</span>
                <span className="block">NDINDA</span>
              </h1>

              {/* Identity */}
              <div
                data-hero-identity
                className="mt-8 flex max-w-xl items-start gap-4"
              >
                <span className="mt-2 h-px w-10 shrink-0 bg-white/60" />

                <p className="max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                  A story of leadership, service and a community called home.
                </p>
              </div>

              {/* Explore */}
              <div data-hero-cta className="mt-12">
                <button
                  type="button"
                  className="group flex items-center gap-4 text-xs font-medium tracking-[0.3em] uppercase"
                >
                  <span>Explore the story</span>

                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition duration-300 group-hover:translate-y-1 group-hover:bg-white group-hover:text-black">
                    ↓
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll progress / scene marker */}
        {/* Scene indicator */}
        <div
          data-hero-marker
          className="absolute bottom-8 right-24 z-20 hidden items-center gap-3 sm:flex lg:right-36"
        >
          <span className="h-px w-12 bg-white/30" />

          <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">
            01
          </span>
        </div>

        {/* Social links */}
        <div
          data-hero-social
          className="absolute bottom-8 right-6 z-20 hidden flex-col items-center gap-4 sm:flex lg:right-12"
        >
          <a
            href="#"
            aria-label="Facebook"
            className="text-white/50 transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaFacebookF size={15} />
          </a>

          <a
            href="#"
            aria-label="Instagram"
            className="text-white/50 transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaInstagram size={16} />
          </a>

          <a
            href="#"
            aria-label="X"
            className="text-white/50 transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaXTwitter size={15} />
          </a>

          <a
            href="#"
            aria-label="whatsapp"
            className="text-white/50 transition duration-300 hover:scale-110 hover:text-white"
          >
            <FaWhatsapp size={15} />
          </a>
        </div>

        <div
          data-scene02-tease
          className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6 text-center opacity-0"
        >
          <div>
            <p className="mb-5 text-xs tracking-[0.35em] text-white/50 uppercase">
              Before the title
            </p>

            <p className="max-w-3xl text-3xl font-medium leading-tight tracking-tight sm:text-5xl lg:text-7xl">
              There was the call to lead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scene01Arrival;
