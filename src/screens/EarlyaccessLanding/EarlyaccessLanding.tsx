import { useMemo, useState, type CSSProperties } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Clock,
  Facebook,
  Flame,
  Instagram,
  PieChart,
  Rocket,
  Sparkles,
  Twitter,
  Zap,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export const EarlyaccessLanding = (): JSX.Element => {
  const sectionShell =
    "mx-auto w-full max-w-[1440px] rounded-xl bg-[#F9F8EE] px-5 py-10 shadow-[0_1px_0_rgba(0,0,0,0.04)] sm:px-10";
  const sectionTitle =
    "text-center text-2xl font-semibold text-[#1b1f2a] [font-family:'Sk-Modernist-Regular',Helvetica]";
  const sectionSubtitle = "mt-2 text-center text-sm text-black/60";
  const heroAvatars = [
    "/ellipse-4135.svg",
    "/ellipse-4136.svg",
    "/ellipse-4137.svg",
    "/ellipse-4138.svg",
    "/ellipse-4139.svg",
  ];
  const partnerLogos = [
    {
      name: "Trust Wallet",
      src: "/landing-v1/partner-logos/trustwallet.png",
    },
    { name: "Binance", src: "/landing-v1/partner-logos/binance.png" },
    { name: "MetaMask", src: "/landing-v1/partner-logos/metamask.png" },
    { name: "Bybit", src: "/landing-v1/partner-logos/bybit.png" },
    { name: "Bitget", src: "/landing-v1/partner-logos/bitget.png" },
    { name: "MEXC", src: "/landing-v1/partner-logos/mexc.png" },
    { name: "Uniswap", src: "/landing-v1/partner-logos/uniswap.png" },
    { name: "OKX", src: "/landing-v1/partner-logos/okx.png" },
    { name: "Coinbase", src: "/landing-v1/partner-logos/coinbase.png" },
    { name: "WeeX", src: "/landing-v1/partner-logos/weex.jpg" },
  ];
  const howItWorksSteps = [
    {
      title: "Choose a Market",
      body: "Choose Market amongst Cricket, Crypto & Forex.",
    },
    {
      title: "Predict Yes or No",
      body: "Place your opinion by clicking on Yes or No.",
    },
    {
      title: "Enter Amount",
      body: "Enter your amount & swipe to place your order.",
    },
    {
      title: "Market Resolves",
      body: "Instant USDT settlements after event ends.",
    },
  ];
  const [activeHowStep, setActiveHowStep] = useState(0);
  const [whyTab, setWhyTab] = useState<"opinex" | "traditional">("opinex");
  const [globalTab, setGlobalTab] = useState<"cricket" | "crypto" | "forex">(
    "cricket",
  );

  const globalMarkets = useMemo(() => {
    const shared = {
      timeLeft: "4h 12m left",
      traders: "3,402 traders",
      yesPrice: "$0.65",
      noPrice: "$0.35",
      yesPct: 62,
      noPct: 38,
    };

    return {
      cricket: [
        {
          ...shared,
          title: "Mumbai Indians to win the IPL\nFinals against CSK?",
          color: "bg-[#E8F0FF] text-[#1D5CFF]",
        },
        {
          ...shared,
          title: "Australia to win the 2nd ODI\nmatch against India?",
          color: "bg-[#FFF6D8] text-[#E8B100]",
        },
        {
          ...shared,
          title: "RCB to score 50+ runs in\npowerplay against SRH?",
          color: "bg-[#FFE7E7] text-[#FF4D2E]",
        },
      ],
      crypto: [
        {
          ...shared,
          title: "Bitcoin to cross $70k\nresistance level today?",
          color: "bg-[#FFF6D8] text-[#E8B100]",
        },
        {
          ...shared,
          title: "ETH to close above\n$3,500 today?",
          color: "bg-[#E8F0FF] text-[#1D5CFF]",
        },
        {
          ...shared,
          title: "SOL to outperform\nBTC this week?",
          color: "bg-[#E8F0FF] text-[#1D5CFF]",
        },
      ],
      forex: [
        {
          ...shared,
          title: "USD/INR to break above\n83.50 this week?",
          color: "bg-[#E8F0FF] text-[#1D5CFF]",
        },
        {
          ...shared,
          title: "EUR/USD to rebound from\nrecent lows?",
          color: "bg-[#FFF6D8] text-[#E8B100]",
        },
        {
          ...shared,
          title: "GBP/USD to close higher\nthis session?",
          color: "bg-[#FFE7E7] text-[#FF4D2E]",
        },
      ],
    } as const;
  }, []);

  return (
    <div className="min-h-screen w-full bg-white font-text-medium-normal text-[#101318]">
      <main id="top" className="pb-16">
        <section className="px-6 pb-8 pt-8 sm:px-12 sm:pb-12 sm:pt-12 lg:px-16">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 border-t-0 bg-[#F9F8EE]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,207,92,0.55),rgba(255,255,255,0)_56%),radial-gradient(circle_at_80%_35%,rgba(255,194,69,0.35),rgba(255,255,255,0)_58%),radial-gradient(circle_at_50%_70%,rgba(255,255,255,0.95),rgba(255,255,255,0.0)_70%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFE9B4]/45 via-white/55 to-white/90" />
              <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,214,102,0.75),rgba(255,214,102,0.18)_45%,rgba(255,255,255,0)_70%)] blur-2xl" />
              <div className="absolute -bottom-52 -right-36 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,174,0,0.45),rgba(255,174,0,0.10)_50%,rgba(255,255,255,0)_75%)] blur-3xl" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 top-24 z-[2] hidden items-center justify-center sm:flex lg:top-28">
              <div className="orbit-wrap">
                <div className="orbit-scene">
                  <div
                    className="orbit-layer orbit-outer"
                    style={
                      {
                        "--orbit-duration": "38s",
                      } as CSSProperties
                    }
                  >
                    <div className="orbit-rotator">
                      <svg
                        className="orbit-svg opacity-0"
                        viewBox="0 0 1000 1000"
                        aria-hidden="true"
                      >
                        <circle className="orbit-circle" cx="500" cy="500" r="445" />
                        <circle className="orbit-arc" cx="500" cy="500" r="445" />
                      </svg>

                      <div
                        className="orbit-label"
                        style={
                          {
                            "--orbit-angle": "300deg",
                            "--orbit-tilt": "0deg",
                          } as CSSProperties
                        }
                      >
                        <span className="orbit-label-inner">
                          <span className="orbit-pill">
                            <span className="orbit-pill-icon">
                              <img src="/iconify-icon-1.svg" alt="" />
                            </span>
                            <span>Bitcoin</span>
                          </span>
                        </span>
                      </div>

                      <div
                        className="orbit-label"
                        style={
                          {
                            "--orbit-angle": "240deg",
                            "--orbit-tilt": "0deg",
                          } as CSSProperties
                        }
                      >
                        <span className="orbit-label-inner">
                          <span className="orbit-pill">
                            <span className="orbit-pill-icon orbit-pill-icon--cricket">
                              <img src="/icon-cricket.svg" alt="" />
                            </span>
                            <span>Cricket</span>
                          </span>
                        </span>
                      </div>

                      <div
                        className="orbit-label"
                        style={
                          {
                            "--orbit-angle": "60deg",
                            "--orbit-tilt": "0deg",
                          } as CSSProperties
                        }
                      >
                        <span className="orbit-label-inner">
                          <span className="orbit-pill">
                            <span className="orbit-pill-icon orbit-pill-icon--blue">
                              <img src="/iconify-icon-3.svg" alt="" />
                            </span>
                            <span>Ethereum</span>
                          </span>
                        </span>
                      </div>

                      <div
                        className="orbit-label"
                        style={
                          {
                            "--orbit-angle": "120deg",
                            "--orbit-tilt": "0deg",
                          } as CSSProperties
                        }
                      >
                        <span className="orbit-label-inner">
                          <span className="orbit-pill">
                            <span className="orbit-pill-icon orbit-pill-icon--green">
                              <img src="/icon-forex.svg" alt="" />
                            </span>
                            <span>Forex</span>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pb-2 pt-1 sm:pb-4 sm:pt-2">
              <div className="px-10 sm:px-14 lg:px-16">
                <div className="hidden h-14 items-center justify-between gap-10 lg:flex">
                  <nav className="flex items-center gap-10 text-[15px] font-medium text-black/65">
                    <a className="hover:text-black" href="#top">
                      Home
                    </a>
                    <a className="hover:text-black" href="#trending-markets">
                      Markets
                    </a>
                    <a className="hover:text-black" href="#how-it-works">
                      How it works
                    </a>
                    <a className="hover:text-black" href="#testimonials">
                      Blogs
                    </a>
                  </nav>

                  <div className="flex translate-x-9 items-center gap-8 text-[15px] font-medium text-black/65">
                    <a className="hover:text-black" href="#why-opinex">
                      About Us
                    </a>
                    <a className="hover:text-black" href="#cta">
                      Contact
                    </a>
                    <div className="flex items-center gap-3">
                      <Button className="h-9 rounded-full bg-[#FFC045] px-6 text-black hover:bg-[#f3ba2f]">
                        Sign in
                      </Button>
                      <Button
                        className="h-9 rounded-full border border-black/10 bg-white/75 px-6 text-black hover:bg-white"
                        variant="outline"
                      >
                        Download APK
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between lg:hidden">
                  <img
                    alt="Opinex"
                    className="h-6 w-auto"
                    src="/content.svg"
                  />
                  <div className="flex items-center gap-2">
                    <Button className="h-9 rounded-full bg-[#FFC045] px-4 text-black hover:bg-[#f3ba2f]">
                      Sign in
                    </Button>
                    <Button
                      className="h-9 rounded-full border border-black/10 bg-white/70 px-4 text-black hover:bg-white"
                      variant="outline"
                    >
                      APK
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block">
                <div className="rounded-b-[28px] bg-white px-16 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                  <img alt="Opinex" className="h-8 w-auto" src="/content.svg" />
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-[920px] px-5 text-center sm:mt-14 sm:px-10">
                <h1 className="[font-family:'Sk-Modernist-Regular',Helvetica] text-[40px] font-medium leading-[1.05] tracking-tight text-black sm:text-[56px] lg:text-[68px]">
                  Trade Your Opinion
                  <br />
                  On Real World Events
                </h1>
                <p className="mx-auto mt-5 max-w-[680px] text-sm leading-relaxed text-black/60 sm:text-base">
                  A prediction marketplace where you can predict Bitcoin moves,
                  Forex shifts and sports outcomes in transparent on-chain
                  markets.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button className="h-11 rounded-full bg-[#FFC045] px-8 text-black hover:bg-[#f3ba2f]">
                    Start Your Journey
                  </Button>
                  <Button
                    className="h-11 rounded-full border border-black/10 bg-white/70 px-8 text-black hover:bg-white"
                    variant="outline"
                  >
                    Download APK
                  </Button>
                </div>

                <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
                  <div className="flex items-center">
                    {heroAvatars.map((src, idx) => (
                      <img
                        alt=""
                        aria-hidden="true"
                        className={`h-8 w-8 rounded-full border-2 border-white object-cover ${
                          idx === 0 ? "" : "-ml-2"
                        }`}
                        key={src}
                        src={src}
                      />
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-black/55">
                    <img alt="Rating" className="h-4" src="/frame-2087327058.svg" />
                    <span>3,244 Traders Joined the Waitlist</span>
                  </div>
                </div>
              </div>

              <div className="relative mt-10 flex justify-center px-5 sm:mt-12 sm:px-10">
                <div className="w-full max-w-[920px] overflow-hidden">
                  <img
                    alt="Opinex mobile preview"
                    className="mx-auto w-[560px] max-w-[92%] translate-y-[10%] drop-shadow-[0_30px_80px_rgba(0,0,0,0.18)] sm:w-[720px]"
                    src="/MobileMockup.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="-mt-2 px-6 pb-2 sm:-mt-3 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="relative overflow-hidden rounded-2xl border border-black/5 bg-white/55 py-6 backdrop-blur">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 to-transparent" />

              <div className="flex w-max items-center gap-14 pl-10 pr-10 [--duration:28s] [--gap:3.5rem] motion-reduce:animate-none animate-marquee">
                <div className="flex w-max items-center gap-14 pr-14">
                  {partnerLogos.map((partner) => (
                    <div
                      className="flex items-center gap-3 text-lg font-semibold text-black/35"
                      key={partner.name}
                    >
                      <img
                        alt={partner.name}
                        className="h-7 w-7 rounded-md object-contain opacity-60 grayscale"
                        loading="lazy"
                        src={partner.src}
                      />
                      <span className="text-black/40">{partner.name}</span>
                    </div>
                  ))}
                </div>

                <div
                  aria-hidden="true"
                  className="flex w-max items-center gap-14 pr-14"
                >
                  {partnerLogos.map((partner) => (
                    <div
                      className="flex items-center gap-3 text-lg font-semibold text-black/35"
                      key={`dup-${partner.name}`}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        className="h-7 w-7 rounded-md object-contain opacity-60 grayscale"
                        loading="lazy"
                        src={partner.src}
                      />
                      <span className="text-black/40">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 px-6 sm:mt-10 sm:px-12 lg:px-16" id="trending-markets">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-14 sm:px-10">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FFE9B4]/55 via-transparent to-transparent" />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-10 top-6 w-[260px] -rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-8 w-[260px] rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />

            <div className="relative">
              <h2 className="text-center text-4xl font-semibold tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-5xl">
                Trending Markets
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-black/60 sm:text-base">
                Explore trending markets &amp; events across Crypto, Cricket
                &amp; Forex.
              </p>

              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {[
                  {
                    badge: "CURATED FOR",
                    title: "CRYPTO QUEENS",
                    image: "/landing-v1/trending-crypto.png",
                  },
                  {
                    badge: "MADE FOR",
                    title: "CRICKET KINGS",
                    image: "/landing-v1/trending-cricket.png",
                  },
                  {
                    badge: "BUILT FOR",
                    title: "FOREX SHASTRA",
                    image: "/landing-v1/trending-forex.png",
                  },
                ].map((card) => (
                  <div
                    className="overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                    key={card.title}
                  >
                    <div className="px-6 pt-6 text-center">
                      <div className="mx-auto inline-flex items-center rounded-full bg-[#F7E7BA] px-3 py-1 text-[10px] font-semibold tracking-widest text-black/60">
                        {card.badge}
                      </div>
                      <div className="mt-3 text-[28px] font-medium tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica]">
                        {card.title}
                      </div>
                    </div>

                    <div className="mt-4 px-5 pb-5">
                      <div className="overflow-hidden rounded-xl bg-[#f4f4f4]">
                        <img
                          alt=""
                          className="h-[360px] w-full object-cover object-top"
                          loading="lazy"
                          src={card.image}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="how-it-works">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-10 top-6 w-[260px] -rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-8 w-[260px] rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />

            <div className="relative">
              <h2 className="text-center text-5xl font-medium tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-6xl">
                How it Works?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-black/60 sm:text-base">
                Opinex markets feels simpler than trading &amp; works in 4
                simple steps
              </p>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                <div className="space-y-5">
                  {howItWorksSteps.map((step, idx) => {
                    const isActive = idx === activeHowStep;
                    const number = String(idx + 1).padStart(2, "0");
                    return (
                      <button
                        className={`w-full rounded-2xl border text-left transition-colors ${
                          isActive
                            ? "border-black/10 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                            : "border-transparent bg-white/45 hover:bg-white/55"
                        }`}
                        key={step.title}
                        onClick={() => setActiveHowStep(idx)}
                        type="button"
                      >
                        <div className="flex items-center gap-5 px-6 py-6 sm:px-7">
                          <div
                            className={`flex h-16 w-16 flex-none items-center justify-center rounded-full text-2xl font-medium [font-family:'Sk-Modernist-Regular',Helvetica] ${
                              isActive
                                ? "bg-[#FFC045] text-black"
                                : "bg-black/5 text-black/25"
                            }`}
                          >
                            {number}
                          </div>
                          <div>
                            <div
                              className={`text-3xl font-medium tracking-tight [font-family:'Sk-Modernist-Regular',Helvetica] ${
                                isActive ? "text-black" : "text-black/25"
                              }`}
                            >
                              {step.title}
                            </div>
                            <div
                              className={`mt-2 text-sm ${
                                isActive ? "text-black/60" : "text-black/25"
                              }`}
                            >
                              {step.body}
                            </div>
                          </div>
                        </div>
                        {isActive ? (
                          <div className="px-7 pb-5">
                            <div className="h-px w-[62%] bg-[#FFC045]" />
                          </div>
                        ) : null}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-center justify-center rounded-2xl border border-black/10 bg-white p-8 shadow-[0_18px_48px_rgba(0,0,0,0.06)] sm:p-10">
                  <img
                    alt="Opinex app preview"
                    className="block w-[260px] sm:w-[300px] lg:w-[340px]"
                    loading="lazy"
                    src="/landing-v1/how-phone.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="why-opinex">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-10 top-6 w-[260px] -rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-8 w-[260px] rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />

            <div className="relative">
              <h2 className="text-center text-5xl font-medium tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-6xl">
                WHY OPINEX?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-black/60 sm:text-base">
                What makes opinex different from traditional platforms. click the
                button to know!
              </p>

              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-full bg-white/65 p-1 shadow-sm">
                  <button
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      whyTab === "opinex"
                        ? "bg-[#FFC045] text-black"
                        : "text-black/40 hover:text-black/60"
                    }`}
                    onClick={() => setWhyTab("opinex")}
                    type="button"
                  >
                    OPINEX
                  </button>
                  <button
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      whyTab === "traditional"
                        ? "bg-[#FFC045] text-black"
                        : "text-black/40 hover:text-black/60"
                    }`}
                    onClick={() => setWhyTab("traditional")}
                    type="button"
                  >
                    Traditional Platforms
                  </button>
                </div>
              </div>

              <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_520px_1fr] lg:items-center">
                <div className="space-y-14">
                  <div className="max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                      <Flame className="h-5 w-5 text-[#FFC045]" />
                    </div>
                    <div className="text-base font-semibold text-black">
                      Transparent markets
                    </div>
                    <div className="mt-2 text-sm text-black/60">
                      Real-Time Markets along with transparency.
                    </div>
                  </div>

                  <div className="max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                      <Zap className="h-5 w-5 text-[#FFC045]" />
                    </div>
                    <div className="text-base font-semibold text-black">
                      Instant USDT settlement
                    </div>
                    <div className="mt-2 text-sm text-black/60">
                      Instant settlements after the event ends.
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-[520px]">
                  <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-white px-8 pb-0 pt-12 shadow-[0_18px_48px_rgba(0,0,0,0.06)]">
                    <div className="relative mx-auto h-[520px] w-full max-w-[420px] overflow-hidden">
                      <img
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute left-1/2 top-0 w-[420px] -translate-x-1/2"
                        src="/iphone-16-pro---black-titanium---portrait.png"
                      />
                      <img
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute bottom-0 left-1/2 w-[380px] -translate-x-1/2"
                        src="/landing-v1/why-person.png"
                      />
                    </div>
                  </div>

                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute left-[-22px] top-[58%] hidden h-24 w-24 text-black/70 lg:block"
                    fill="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M78 70C60 76 41 71 30 57c-8-10-7-23 2-31"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="8"
                    />
                    <path
                      d="M22 26l18-2-9 15"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="8"
                    />
                  </svg>

                  <svg
                    aria-hidden="true"
                    className="pointer-events-none absolute right-[-22px] top-[58%] hidden h-24 w-24 text-black/70 lg:block"
                    fill="none"
                    viewBox="0 0 100 100"
                  >
                    <path
                      d="M22 70c18 6 37 1 48-13 8-10 7-23-2-31"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeWidth="8"
                    />
                    <path
                      d="M78 26l-18-2 9 15"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="8"
                    />
                  </svg>
                </div>

                <div className="space-y-14 lg:text-right">
                  <div className="ml-auto max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                      <PieChart className="h-5 w-5 text-[#FFC045]" />
                    </div>
                    <div className="text-base font-semibold text-black">
                      Top Creators Analytics
                    </div>
                    <div className="mt-2 text-sm text-black/60">
                      Professionals analytics shared within community.
                    </div>
                  </div>

                  <div className="ml-auto max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white shadow-sm">
                      <Sparkles className="h-5 w-5 text-[#FFC045]" />
                    </div>
                    <div className="text-base font-semibold text-black">
                      Community revenue share
                    </div>
                    <div className="mt-2 text-sm text-black/60">
                      Calculated on the basis of referral business volume.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-4 sm:mt-12" id="global-markets">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-10 top-6 w-[260px] -rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-8 w-[260px] rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />

            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-420px] left-1/2 w-[1400px] max-w-none -translate-x-1/2 opacity-25"
              src="/landing-v1/globe.svg"
            />

            <div className="relative">
              <h2 className="text-center text-5xl font-medium tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-6xl">
                Global Markets &amp; Events
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-black/60 sm:text-base">
                Checkout our Live Markets &amp; Real World Events to place
                predictions
              </p>

              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-full bg-white/65 p-1 shadow-sm">
                  {(
                    [
                      { key: "cricket", label: "Cricket" },
                      { key: "crypto", label: "Crypto" },
                      { key: "forex", label: "Forex" },
                    ] as const
                  ).map((tab) => (
                    <button
                      className={`rounded-full px-7 py-3 text-sm font-semibold transition-colors ${
                        globalTab === tab.key
                          ? "bg-[#FFC045] text-black shadow-[0_10px_22px_rgba(255,192,69,0.35)]"
                          : "text-black/35 hover:text-black/55"
                      }`}
                      key={tab.key}
                      onClick={() => setGlobalTab(tab.key)}
                      type="button"
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {globalMarkets[globalTab].map((market, idx) => (
                  <div
                    className="relative rounded-2xl border border-[#FFC045]/60 bg-white px-6 pb-5 pt-6 shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                    key={`${globalTab}-${idx}`}
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#FFC045]/70 bg-white px-3 py-1 text-xs font-semibold text-black/70 shadow-sm">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {market.timeLeft}
                      </span>
                    </div>

                    <div className="flex gap-4">
                      <div
                        className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl ${market.color}`}
                      >
                        <Rocket className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <div className="whitespace-pre-line text-base font-semibold text-black">
                          {market.title}
                        </div>
                        <div className="mt-2 text-xs text-black/45">
                          {market.traders}
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-xl border border-[#CFE0FF] bg-[#EAF2FF] px-4 py-3">
                        <div className="flex items-center justify-between text-sm font-semibold text-[#1D5CFF]">
                          <span className="inline-flex items-center gap-1">
                            <ArrowUpRight className="h-4 w-4" />
                            Yes
                          </span>
                          <span className="text-xs font-semibold">
                            {market.yesPrice}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl border border-[#FFD0D0] bg-[#FFEFEF] px-4 py-3">
                        <div className="flex items-center justify-between text-sm font-semibold text-[#FF4D2E]">
                          <span className="inline-flex items-center gap-1">
                            <ArrowDownRight className="h-4 w-4" />
                            No
                          </span>
                          <span className="text-xs font-semibold">
                            {market.noPrice}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[11px] font-semibold">
                        <span className="text-[#00A86B]">{market.yesPct}%</span>
                        <span className="text-[#FF4D2E]">{market.noPct}%</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-black/5">
                        <div className="flex h-full w-full">
                          <div
                            className="h-full bg-[#00A86B]"
                            style={{ width: `${market.yesPct}%` }}
                          />
                          <div
                            className="h-full bg-[#FF4D2E]"
                            style={{ width: `${market.noPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 flex justify-center">
                <Button className="h-11 rounded-full bg-[#FFC045] px-10 text-black hover:bg-[#f3ba2f]">
                  View Markets
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="testimonials">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-10 top-6 w-[260px] -rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-8 w-[260px] rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />

            <div className="relative">
              <h2 className="text-center text-5xl font-medium tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-6xl">
                See What Our Circle Says!
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-black/60 sm:text-base">
                We have always believed in Community First Approach.
              </p>

              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    title: "Incredibly useful product",
                    body: "Stellar's user–friendly dashboards have simplified our digital strategy management.",
                    name: "Fig Nelson",
                    handle: "@fignel_sooon",
                    avatar: "/landing-v1/avatar-fig.png",
                    social: (
                      <Twitter className="h-5 w-5 text-[#1D9BF0]" />
                    ),
                    socialBg: "bg-[#EAF4FF]",
                  },
                  {
                    title: "Incredibly useful product",
                    body: "Stellar has truly transformed our online presence. With its powerful analytics and seamless integration, we've gained invaluable insights.",
                    name: "Sadie Berlin",
                    handle: "@sadieberlin00",
                    avatar: "/landing-v1/avatar-sadie.png",
                    social: (
                      <Instagram className="h-5 w-5 text-[#E1306C]" />
                    ),
                    socialBg: "bg-[#FFF0F7]",
                  },
                  {
                    title: "Incredibly useful product",
                    body: "We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth",
                    name: "Amaya Locosta",
                    handle: "@amaylocosta",
                    avatar: "/landing-v1/avatar-amaya.png",
                    social: (
                      <Facebook className="h-5 w-5 text-[#1877F2]" />
                    ),
                    socialBg: "bg-[#EAF1FF]",
                  },
                ].map((t) => (
                  <div
                    className="rounded-2xl border border-black/10 bg-white p-7 shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                    key={t.handle}
                  >
                    <div className="text-base font-semibold text-black">
                      {t.title}
                    </div>
                    <div className="mt-4 text-sm leading-relaxed text-black/60">
                      {t.body}
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          alt=""
                          aria-hidden="true"
                          className="h-12 w-12 rounded-full bg-black/5 object-cover"
                          src={t.avatar}
                        />
                        <div>
                          <div className="text-sm font-semibold text-black">
                            {t.name}
                          </div>
                          <div className="text-sm font-semibold text-[#FFC045]">
                            {t.handle}
                          </div>
                        </div>
                      </div>

                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full border border-black/10 ${t.socialBg}`}
                      >
                        {t.social}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                <div className="rounded-2xl border border-black/5 bg-white/35 p-7 text-black/30">
                  <div className="text-base font-semibold">Incredibly useful product</div>
                  <div className="mt-4 text-sm leading-relaxed">
                    We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth
                  </div>
                  <div className="mt-8 flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <img
                        alt=""
                        aria-hidden="true"
                        className="h-12 w-12 rounded-full bg-black/5 object-cover"
                        src="/landing-v1/avatar-sadie.png"
                      />
                      <div>
                        <div className="text-sm font-semibold text-black/40">
                          Sadie Berlin
                        </div>
                        <div className="text-sm font-semibold text-[#FFC045]/60">
                          @sadieberlin00
                        </div>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/55">
                      <Instagram className="h-5 w-5 text-[#E1306C]/60" />
                    </div>
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-7 shadow-[0_18px_48px_rgba(0,0,0,0.06)]">
                  <div className="text-base font-semibold text-black">
                    Incredibly useful product
                  </div>
                  <div className="mt-4 text-sm leading-relaxed text-black/60">
                    Stellar's user–friendly dashboards have simplified our digital strategy management.
                  </div>

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />

                  <div className="mt-10 flex justify-center">
                    <Button className="h-11 rounded-full bg-[#FFC045] px-10 text-black hover:bg-[#f3ba2f]">
                      Follow us on social media
                    </Button>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-black/35">
                    <img
                      alt=""
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full bg-black/5 object-cover"
                      src="/landing-v1/avatar-fig.png"
                    />
                    <span>@fignel_sooon</span>
                    <Twitter className="h-4 w-4 text-[#1D9BF0]/70" />
                  </div>
                </div>

                <div className="rounded-2xl border border-black/5 bg-white/35 p-7 text-black/30">
                  <div className="text-base font-semibold">Incredibly useful product</div>
                  <div className="mt-4 text-sm leading-relaxed">
                    Stellar's user–friendly dashboards have simplified our digital strategy management.
                  </div>
                  <div className="mt-8 flex items-center justify-between opacity-50">
                    <div className="flex items-center gap-3">
                      <img
                        alt=""
                        aria-hidden="true"
                        className="h-12 w-12 rounded-full bg-black/5 object-cover"
                        src="/landing-v1/avatar-sadie.png"
                      />
                      <div>
                        <div className="text-sm font-semibold text-black/40">
                          Sadie Berlin
                        </div>
                        <div className="text-sm font-semibold text-[#FFC045]/60">
                          @sadieberlin00
                        </div>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/55">
                      <Instagram className="h-5 w-5 text-[#E1306C]/60" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="cta">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-[#FFC045]/70 bg-[#F9F8EE] px-6 py-12 sm:px-10 sm:py-14">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-[0.45]"
              style={{
                backgroundImage:
                  "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
                backgroundSize: "54px 54px",
                backgroundPosition: "-1px -1px",
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-70"
              style={{
                background:
                  "radial-gradient(circle at 40% 30%, rgba(255,192,69,0.14), rgba(255,255,255,0) 55%), radial-gradient(circle at 70% 70%, rgba(0,0,0,0.06), rgba(255,255,255,0) 60%)",
              }}
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="relative overflow-hidden rounded-3xl border border-black/10 bg-[#F7E7BA]/55 p-7 text-center shadow-[0_18px_48px_rgba(0,0,0,0.06)] sm:p-9">
                <div className="mx-auto inline-flex items-center rounded-full bg-white/65 px-3 py-1 text-[11px] font-semibold text-black/60 shadow-sm">
                  Opinion Based Trading
                </div>

                <div className="mt-4 text-3xl font-semibold tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-4xl">
                  <span className="relative inline-block">
                    Scan the QR CODE
                    <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#FFC045]" />
                  </span>
                </div>

                <div className="mt-8 flex justify-center">
                  <div className="rounded-2xl border border-black/10 bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.10)]">
                    <img
                      alt="Download QR"
                      className="h-[190px] w-[190px] rounded-xl"
                      loading="lazy"
                      src="/landing-v1/qr.png"
                    />
                  </div>
                </div>
              </div>

              <div className="px-2 sm:px-4">
                <div className="text-sm font-semibold text-[#FFC045]">
                  Opinion Based Trading!
                </div>
                <h2 className="mt-3 text-5xl font-semibold leading-[1.02] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-6xl">
                  Start your Journey Today!
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-black/60 sm:text-base">
                  Experience the Opinex difference and unlock the true
                  potential.
                </p>

                <div className="mt-8">
                  <Button className="h-12 rounded-full bg-[#FFC045] px-10 text-base font-semibold text-black hover:bg-[#f3ba2f]">
                    Download APK
                  </Button>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                  {["Instant Settlements", "No Hidden Charges"].map((label) => (
                    <div className="flex items-center gap-3 text-sm font-medium text-black/70" key={label}>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FFC045] text-black shadow-[0_10px_22px_rgba(255,192,69,0.35)]">
                        <Check className="h-4 w-4" />
                      </span>
                      <span>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="faq">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-10 top-6 w-[260px] -rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-10 top-8 w-[260px] rotate-6 opacity-80"
              src="/landing-v1/cloud.png"
            />

            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-[-380px] left-1/2 w-[1280px] max-w-none -translate-x-1/2 opacity-25"
              src="/landing-v1/globe.svg"
            />

            <div className="relative">
              <h2 className="text-center text-5xl font-medium tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-6xl">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-sm text-black/60 sm:text-base">
                Checkout our Live Markets &amp; Real World Events to place
                predictions
              </p>

              <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-6">
                {[
                  {
                    q: "What is Opinex?",
                    a: "Opinex is a prediction marketplace where you trade outcomes (Yes/No) on real-world events across Crypto, Forex, and Sports.",
                  },
                  {
                    q: "How do Yes/No trades work?",
                    a: "You buy “Yes” or “No” shares. Prices move with demand and represent market odds. You can exit anytime before resolution (subject to liquidity).",
                  },
                  {
                    q: "When does a market settle?",
                    a: "A market settles after the outcome is confirmed from the predefined source. Winning side is paid out and losing side settles to zero.",
                  },
                  {
                    q: "Can I withdraw anytime?",
                    a: "Withdrawals depend on network conditions and internal checks. If withdrawals are temporarily paused, you’ll see it in-app with an ETA.",
                  },
                  {
                    q: "Are there fees?",
                    a: "You may pay small platform / network fees depending on the market and chain used. Fees, if any, are shown before you confirm a trade.",
                  },
                  {
                    q: "Is Opinex available in my country?",
                    a: "Availability can vary by jurisdiction and local regulations. Please check the latest in-app notice and Terms before using the platform.",
                  },
                ].map((item) => (
                  <details
                    className="group overflow-hidden rounded-2xl border border-[#E8EAF0] bg-white shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                    key={item.q}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-8 py-7 text-left text-base font-semibold text-black sm:px-10">
                      <span>{item.q}</span>
                      <ChevronDown className="h-5 w-5 flex-none text-black/45 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <div className="px-8 pb-7 text-sm text-black/60 sm:px-10">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 bg-[#F9F8EE] px-6 py-12 sm:px-10 sm:py-14">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFE9B4]/55 via-white/20 to-[#FFE9B4]/35" />
            </div>

            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute left-8 top-8 w-[340px] -rotate-6 opacity-85"
              src="/landing-v1/cloud.png"
            />
            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute right-8 top-10 w-[340px] rotate-6 opacity-85"
              src="/landing-v1/cloud.png"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
              <div className="flex flex-col gap-7 sm:flex-row sm:items-start">
                <div className="w-fit rounded-3xl border border-black/10 bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.10)]">
                  <img
                    alt="Download QR"
                    className="h-[170px] w-[170px] rounded-2xl sm:h-[190px] sm:w-[190px]"
                    loading="lazy"
                    src="/landing-v1/qr.png"
                  />
                </div>

                <div className="pt-1">
                  <img
                    alt="Opinex"
                    className="h-11 w-auto"
                    loading="lazy"
                    src="/content.svg"
                  />
                  <div className="mt-3 max-w-xs text-sm text-black/60">
                    Trade Your Opinion On Real World Events
                  </div>
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-3">
                {[
                  {
                    title: "Opinex Page",
                    links: [
                      { label: "Home", href: "#top" },
                      { label: "About", href: "#why-opinex", underline: true },
                      { label: "Pricing", href: "#global-markets" },
                    ],
                  },
                  {
                    title: "Product",
                    links: [
                      { label: "Contact", href: "#cta" },
                      { label: "Blog", href: "#testimonials" },
                      { label: "Product", href: "#trending-markets" },
                    ],
                  },
                  {
                    title: "Company",
                    links: [
                      { label: "Login", href: "#top" },
                    ],
                  },
                ].map((col) => (
                  <div key={col.title}>
                    <div className="text-sm font-semibold text-black/45">
                      {col.title}
                    </div>
                    <div className="mt-7 space-y-6 text-[15px] text-black/70">
                      {col.links.map((link) => (
                        <a
                          className={`block w-fit hover:text-black ${
                            link.underline ? "underline underline-offset-4" : ""
                          }`}
                          href={link.href}
                          key={link.label}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-12 h-px w-full bg-black/10" />

            <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-black/55">
                Copyright ©{new Date().getFullYear()}{" "}
                <span className="text-black/70">opinex.io</span>
              </div>

              <div className="flex items-center gap-4">
                {[
                  { icon: <Facebook className="h-4 w-4" />, label: "Facebook" },
                  { icon: <Twitter className="h-4 w-4" />, label: "Twitter" },
                  { icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
                ].map((item) => (
                  <a
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white/70 text-[#E8B100] shadow-[0_14px_34px_rgba(0,0,0,0.08)] hover:bg-white"
                    href="#top"
                    key={item.label}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};
