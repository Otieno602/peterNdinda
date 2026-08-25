import React from "react";

import workImage from "../../assets/images/workII.jpeg";
import childrenImage from "../../assets/images/children.jpeg";
import communityImage from "../../assets/images/communityInteraction.jpeg";
import communityVideo from "../../assets/videos/peterNdinda.mp4";

const Scene04Vision = () => {
  return (
    <section
      id="vision"
      aria-labelledby="scene-04-title"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* =========================================================
          OPENING — THE VISION
      ========================================================= */}
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-6 py-24 text-center sm:px-10 lg:min-h-[85svh] lg:px-16">
        <div className="mx-auto max-w-4xl">
          <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs">
            The vision
          </p>

          <h2
            id="scene-04-title"
            className="text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl"
          >
            Knowing a place means knowing
            <span className="block">what keeps it moving.</span>
          </h2>
        </div>
      </section>

      {/* =========================================================
          01 — LIVELIHOOD
      ========================================================= */}
      <section className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={workImage}
            alt="People working in the local community"
            className="
              h-full w-full object-cover
              object-[50%_25%]
              lg:object-[50%_20%]
            "
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs">
              01 — Livelihood
            </p>

            <h3 className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl">
              People who wake up every day
              <br />
              to make a living.
            </h3>
          </div>
        </div>
      </section>

      {/* =========================================================
          BREATHING BEAT
      ========================================================= */}
      <section className="flex min-h-[70svh] items-center justify-center bg-black px-6 py-32 text-center sm:px-10">
        <p className="mt-7 text-4xl font-medium leading-none tracking-[-0.045em] sm:text-6xl lg:text-7xl">
          There is talent here.
          <br className="hidden sm:block" />
          There is work here.
          <br className="hidden sm:block"/>
          There is potential here.
        </p>
      </section>

      {/* =========================================================
          02 — THE NEXT GENERATION
      ========================================================= */}
      <section className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={childrenImage}
            alt="Young people playing football in the community"
            className="h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs">
              02 — The next generation
            </p>

            <h3 className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl">
              And there is a generation
              <br />
              already growing up here.
            </h3>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              What they become depends on what we give them today.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          03 — PRESENCE
      ========================================================= */}
      <section className="relative flex min-h-svh items-center overflow-hidden bg-black px-6 py-24 sm:px-10 lg:px-16">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40 sm:text-xs">
              03 — Presence
            </p>

            <h3 className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl">
              Sometimes leadership
              <br />
              begins by showing up.
            </h3>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Before asking people what they need, you have to be willing to
              stand where they stand, see what they see, and understand what
              they live.
            </p>
          </div>

          <div className="mx-auto w-full max-w-md overflow-hidden">
            <video
              src={communityVideo}
              muted
              playsInline
              loop
              autoPlay
              preload="metadata"
              aria-label="Peter Wa Soko interacting with community members"
              className="h-auto max-h-[75svh] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          04 — SERVICE
      ========================================================= */}
      <section className="relative min-h-svh overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={communityImage}
            alt="Peter Wa Soko visiting and supporting a community member"
            className="
              h-full w-full object-cover
              object-[50%_25%]
              lg:object-[50%_20%]
            "
          />

          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/10" />
        </div>

        <div className="relative z-10 flex min-h-svh items-end px-6 pb-20 sm:px-10 sm:pb-24 lg:px-16 lg:pb-28">
          <div className="max-w-3xl">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/55 sm:text-xs">
              04 — Service
            </p>

            <h3 className="mt-5 text-5xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl">
              Leadership is not only
              <br />
              about plans.
            </h3>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              It is about people.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          ENDING
      ========================================================= */}
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black px-6 py-32 text-center sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <p className="text-4xl font-bold leading-[1.2] tracking-tight sm:text-5xl lg:text-6xl">
            A better community doesn't begin
            <br />
            with a promise.
          </p>

          <p className="mt-16 text-4xl font-bold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
            It begins with understanding
            <br />
            what people need.
          </p>

          <div className="mt-24">
            <p className="text-[10px] font-medium uppercase tracking-[0.4em] text-white/40 sm:text-xs">
              And that is where
            </p>

            <p className="mt-4 text-5xl font-medium leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
              the work begins.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Scene04Vision;