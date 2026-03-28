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
        <section className="px-6 pt-8 sm:px-12 sm:pt-12 lg:px-16">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 border-t-0 bg-[#F9F8EE]">
            <img
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              src="/frame-2087327136.png"
            />

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

            <div className="relative z-20 pt-1 sm:pt-2">
              <div className="px-10 sm:px-14 lg:px-16">
                <div className="hidden h-14 items-center justify-between gap-10 lg:flex">
                  <div className="flex h-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md px-4 shadow-sm border border-white/20">
                    <nav className="flex items-center gap-10 text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-black [font-family:'Sk-Modernist-Regular',Helvetica]">
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
                  </div>

                  <div className="flex translate-x-9 items-center gap-8 rounded-full bg-white/15 backdrop-blur-md px-4 py-1.5 text-[16px] font-normal leading-[150%] tracking-[-0.02em] text-black [font-family:'Sk-Modernist-Regular',Helvetica] shadow-sm border border-white/20">
                    <a className="hover:text-black" href="#why-opinex">
                      About Us
                    </a>
                    <a className="hover:text-black" href="#cta">
                      Contact
                    </a>
                    <div className="flex items-center gap-3">
                      <Button className="h-9 w-[97px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] p-0 font-['DM_Sans'] text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-black shadow-none hover:opacity-90">
                        Sign in
                      </Button>
                      <Button
                        className="h-9 rounded-full border border-black/10 bg-white/75 px-6 font-['DM_Sans'] text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-black hover:bg-white"
                        variant="outline"
                      >
                        Download APK
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-full bg-white/30 backdrop-blur-md px-4 py-2 lg:hidden shadow-sm border border-white/20">
                  <img
                    alt="Opinex"
                    className="h-6 w-auto"
                    src="/content.svg"
                  />
                  <div className="flex items-center gap-2">
                    <Button className="h-9 w-[97px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] p-0 font-['DM_Sans'] text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-black shadow-none hover:opacity-90">
                      Sign in
                    </Button>
                    <Button
                      className="h-9 rounded-full border border-black/10 bg-white/70 px-4 font-['DM_Sans'] text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-black hover:bg-white"
                      variant="outline"
                    >
                      APK
                    </Button>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute left-1/2 top-0 z-30 hidden -translate-x-1/2 lg:block">
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
                <p className="mx-auto mt-5 max-w-[680px] text-sm leading-relaxed text-[#444444] sm:text-base">
                  A prediction marketplace where you can predict Bitcoin moves,
                  Forex shifts and sports outcomes in transparent on-chain
                  markets.
                </p>

                <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
                  <Button className="h-11 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] px-8 font-['DM_Sans'] text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-black shadow-none hover:opacity-90">
                    Start Your Journey
                  </Button>
                  <Button
                    className="h-11 rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] px-8 font-['DM_Sans'] text-[16px] font-semibold leading-[150%] tracking-[-0.02em] text-black shadow-none hover:opacity-90"
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
                        className={`h-8 w-8 rounded-full border-2 border-white object-cover ${idx === 0 ? "" : "-ml-2"
                          }`}
                        key={src}
                        src={src}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col items-start gap-1 text-xs text-black/55">
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

        <section className="px-6 pb-2 sm:px-12 lg:px-16">
          <div className="mx-auto w-full max-w-[1440px]">
            <div className="relative flex h-[118.6px] items-center overflow-hidden rounded-2xl border border-black/5 bg-white/55 px-6 py-8 backdrop-blur sm:px-10 lg:px-16">
              <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/90 to-transparent" />

              <div className="flex h-[54.6px] w-max items-center gap-10 pl-0 pr-0 [--duration:28s] [--gap:2.5rem] motion-reduce:animate-none animate-marquee">
                <div className="flex w-max items-center gap-10 pr-10">
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
                  className="flex w-max items-center gap-10 pr-10"
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

        <section className="px-6 sm:px-12 lg:px-16" id="trending-markets">
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
              <h2 className="text-center text-[64px] font-normal leading-[1.1] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-[52px] lg:text-[64px]">
                Made For Everyone!
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center font-['DM_Sans'] text-[18px] font-normal leading-[1.5] text-[#444444]">
                Explore Trending markets & events across Crypto, Cricket & Forex.
              </p>

              <div className="mt-16 grid gap-8 md:grid-cols-3">
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
                    className="flex flex-col overflow-hidden rounded-[16px] border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]"
                    key={card.title}
                  >
                    <div className="px-6 pb-6 pt-6 text-center">
                      <div className="mx-auto inline-flex items-center rounded-full bg-[#FDE9B4] px-3 py-1 text-[11px] font-bold tracking-[0.05em] text-black/70">
                        {card.badge}
                      </div>
                      <div className="mt-4 text-[26px] font-bold tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica]">
                        {card.title}
                      </div>
                    </div>

                    <div className="relative mt-auto overflow-hidden">
                      <img
                        alt=""
                        className="h-[420px] w-full object-cover object-top"
                        loading="lazy"
                        src={card.image}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="how-it-works">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src="/howitworks.png"
            />
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
              <h2 className="text-center text-[64px] font-normal leading-[1.1] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-[52px] lg:text-[64px]">
                How it Works?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center font-['DM_Sans'] text-[18px] font-normal leading-[1.5] text-[#444444]">
                Opinex markets feels simpler than trading & works in 4 simple steps
              </p>

              <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
                <div className="space-y-5">
                  {howItWorksSteps.map((step, idx) => {
                    const isActive = idx === activeHowStep;
                    const number = String(idx + 1).padStart(2, "0");
                    return (
                      <button
                        className={`w-full rounded-2xl border text-left transition-colors ${isActive
                          ? "border-black/10 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.06)]"
                          : "border-transparent bg-white/45 hover:bg-white/55"
                          }`}
                        key={step.title}
                        onClick={() => setActiveHowStep(idx)}
                        type="button"
                      >
                        <div className="flex items-center gap-5 px-6 py-6 sm:px-7">
                          <div
                            className={`flex h-16 w-16 flex-none items-center justify-center rounded-full text-2xl font-medium [font-family:'Sk-Modernist-Regular',Helvetica] ${isActive
                              ? "bg-[#FFC045] text-black"
                              : "bg-black/5 text-black/25"
                              }`}
                          >
                            {number}
                          </div>
                          <div>
                            <div
                              className={`text-3xl font-medium tracking-tight [font-family:'Sk-Modernist-Regular',Helvetica] ${isActive ? "text-black" : "text-black/25"
                                }`}
                            >
                              {step.title}
                            </div>
                            <div
                              className={`mt-2 text-sm ${isActive ? "text-black/60" : "text-black/25"
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
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 px-6 pt-14 sm:px-10 sm:pt-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src="/howitworks.png"
            />

            <div className="relative">
              <h2 className="text-center text-[36px] font-normal leading-[1.1] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-[48px] lg:text-[64px]">
                WHY OPINEX?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center font-['DM_Sans'] text-[18px] font-normal leading-[1.5] text-[#444444]">
                What makes opinex different from traditional platforms. click the
                button to know!
              </p>

              <div className="mt-8 flex justify-center">
                <div className="inline-flex rounded-full bg-white/65 p-1 shadow-sm">
                  <button
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${whyTab === "opinex"
                      ? "bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black"
                      : "text-black/40 hover:text-black/60"
                      }`}
                    onClick={() => setWhyTab("opinex")}
                    type="button"
                  >
                    OPINEX
                  </button>
                  <button
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition-colors ${whyTab === "traditional"
                      ? "bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black"
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
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
                      <Flame className="h-6 w-6 text-[#FFB300]" />
                    </div>
                    <div className="text-[18px] font-bold text-black">
                      Transparent markets
                    </div>
                    <div className="mt-2 font-['DM_Sans'] text-[15px] leading-relaxed text-[#444444]">
                      Real-Time Markets along with transparency.
                    </div>
                  </div>

                  <div className="max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
                      <Zap className="h-6 w-6 text-[#FFB300]" />
                    </div>
                    <div className="text-[18px] font-bold text-black">
                      Instant USDT settlement
                    </div>
                    <div className="mt-2 font-['DM_Sans'] text-[15px] leading-relaxed text-[#444444]">
                      Instant settlements after the event ends.
                    </div>
                  </div>
                </div>

                <div className="relative mx-auto w-full max-w-[520px]">
                  <div className="relative mx-auto h-[520px] w-full max-w-[420px] overflow-hidden">
                    <img
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute left-1/2 top-40 w-[400px] -translate-x-1/2"
                      src="/iphone-16-pro---black-titanium---portrait.png"
                    />
                    <img
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute bottom-0 left-1/2 w-[380px] -translate-x-1/2"
                      src="/landing-v1/why-person.png"
                    />
                  </div>

                  {/* Decorative Hand-drawn Arrows */}
                  <div className="pointer-events-none absolute left-[-20px] top-[45%] hidden lg:block">
                    <svg
                      className="h-24 w-24 -rotate-12 text-black/80"
                      fill="none"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M80 20 C 60 20, 20 40, 20 80"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M20 80 L 10 65 M 20 80 L 35 75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3.5"
                      />
                    </svg>
                  </div>

                  <div className="pointer-events-none absolute right-[-20px] top-[45%] hidden lg:block">
                    <svg
                      className="h-24 w-24 rotate-[195deg] text-black/80"
                      fill="none"
                      viewBox="0 0 100 100"
                    >
                      <path
                        d="M80 20 C 60 20, 20 40, 20 80"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="3.5"
                      />
                      <path
                        d="M20 80 L 10 65 M 20 80 L 35 75"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="space-y-14 lg:text-right">
                  <div className="ml-auto max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
                      <PieChart className="h-6 w-6 text-[#FFB300]" />
                    </div>
                    <div className="text-[18px] font-bold text-black">
                      Top Creators Analytics
                    </div>
                    <div className="mt-2 font-['DM_Sans'] text-[15px] leading-relaxed text-[#444444]">
                      Professionals analytics shared within Community.
                    </div>
                  </div>

                  <div className="ml-auto max-w-xs">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-[0_10px_25px_rgba(0,0,0,0.06)]">
                      <Sparkles className="h-6 w-6 text-[#FFB300]" />
                    </div>
                    <div className="text-[18px] font-bold text-black">
                      Community revenue share
                    </div>
                    <div className="mt-2 font-['DM_Sans'] text-[15px] leading-relaxed text-[#444444]">
                      Calculated on the basis of referral business volume.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-4 sm:mt-12" id="global-markets">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src="/howitworks.png"
            />

            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1200px] -translate-x-1/2 opacity-30"
              src="/earth.png"
            />

            <div className="relative">
              <h2 className="text-center text-[36px] font-normal leading-[1.1] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-[48px] lg:text-[64px]">
                Global Markets & Events
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center font-['DM_Sans'] text-[18px] font-normal leading-[1.5] text-[#444444]">
                Checkout our Live Markets & Real World Events to place
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
                      className={`rounded-full px-7 py-3 text-sm font-semibold transition-all ${globalTab === tab.key
                        ? "bg-gradient-to-r from-[#FFD54F] to-[#FFB300] text-black shadow-[0_10px_22px_rgba(255,179,0,0.3)]"
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

              <div className="mt-12 grid gap-8 lg:grid-cols-3">
                {globalMarkets[globalTab].map((market, idx) => (
                  <div
                    className="relative rounded-[20px] border border-[#FFB300]/30 bg-white px-6 pb-6 pt-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
                    key={`${globalTab}-${idx}`}
                  >
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 flex h-8 items-center gap-1.5 rounded-full bg-[#FFB300] px-4 py-1 text-[11px] font-bold text-black shadow-sm">
                      <Clock className="h-3.5 w-3.5" />
                      {market.timeLeft}
                    </div>

                    <div className="flex gap-4">
                      <div
                        className={`flex h-12 w-12 flex-none items-center justify-center rounded-xl ${market.color.replace('bg-', 'bg-opacity-20 bg-')}`}
                      >
                        <Rocket className={`h-6 w-6 ${market.color.replace('bg-', 'text-')}`} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-['DM_Sans'] text-[16px] font-bold leading-tight text-black">
                          {market.title}
                        </div>
                        <div className="mt-1 text-[13px] font-medium text-black/40">
                          {market.traders}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 grid grid-cols-2 gap-3">
                      <div className="flex items-center justify-between rounded-xl bg-[#EAF2FF] px-4 py-3 border border-[#EAF2FF] hover:border-[#1D5CFF]/30 transition-all cursor-pointer">
                        <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#1D5CFF]">
                          <ArrowUpRight className="h-4 w-4" />
                          Yes
                        </span>
                        <span className="text-[13px] font-bold text-[#1D5CFF]/70">
                          {market.yesPrice}
                        </span>
                      </div>
                      <div className="flex items-center justify-between rounded-xl bg-[#FFEFEF] px-4 py-3 border border-[#FFEFEF] hover:border-[#FF4D2E]/30 transition-all cursor-pointer">
                        <span className="flex items-center gap-1.5 text-[14px] font-bold text-[#FF4D2E]">
                          <ArrowDownRight className="h-4 w-4" />
                          No
                        </span>
                        <span className="text-[13px] font-bold text-[#FF4D2E]/70">
                          {market.noPrice}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex items-center justify-between text-[13px] font-bold">
                        <span className="text-[#00A86B] font-['DM_Sans']">{market.yesPct}%</span>
                        <span className="text-[#FF4D2E] font-['DM_Sans']">{market.noPct}%</span>
                      </div>
                      <div className="mt-2.5 h-2 overflow-hidden rounded-full bg-black/5">
                        <div className="flex h-full w-full">
                          <div
                            className="h-full bg-[#00A86B] rounded-l-full"
                            style={{ width: `${market.yesPct}%` }}
                          />
                          <div
                            className="h-full bg-[#FF4D2E] rounded-r-full"
                            style={{ width: `${market.noPct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex justify-center">
                <Button className="h-[52px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] px-12 text-[16px] font-bold text-black shadow-[0_10px_25px_rgba(255,179,0,0.3)] transition-transform hover:scale-105 active:scale-95">
                  View Markets
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="testimonials">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src="/howitworks.png"
            />

            <div className="relative">
              <h2 className="text-center text-[36px] font-normal leading-[1.1] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-[48px] lg:text-[64px]">
                See What Our Circle Says!
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center font-['DM_Sans'] text-[18px] font-normal leading-[1.5] text-[#444444]">
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
                  },
                ].map((t) => (
                  <div
                    className="rounded-[20px] border border-[#E8EAF0] bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)]"
                    key={t.handle}
                  >
                    <div className="font-['DM_Sans'] text-[18px] font-bold text-black">
                      {t.title}
                    </div>
                    <div className="mt-4 font-['DM_Sans'] text-[16px] leading-[1.6] text-[#444444]">
                      {t.body}
                    </div>

                    <div className="mt-10 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          alt=""
                          aria-hidden="true"
                          className="h-12 w-12 rounded-full bg-[#F3F4F6] object-cover"
                          src={t.avatar}
                        />
                        <div>
                          <div className="font-['DM_Sans'] text-[16px] font-bold text-black">
                            {t.name}
                          </div>
                          <div className="font-['DM_Sans'] text-[14px] font-bold text-[#F3BA2F]">
                            {t.handle}
                          </div>
                        </div>
                      </div>

                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8EAF0] bg-white shadow-sm">
                        {t.social}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-6 lg:grid-cols-3">
                {/* Visual Placeholder Cards */}
                <div className="rounded-[20px] border border-[#E8EAF0] bg-white/40 p-8 opacity-40 grayscale">
                  <div className="font-['DM_Sans'] text-[18px] font-bold text-black">Incredibly useful product</div>
                  <div className="mt-4 font-['DM_Sans'] text-[16px] leading-[1.6] text-[#444444]">
                    We've gained invaluable insights and improved our SEO ranking, resulting in significant business growth.
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img alt="" className="h-12 w-12 rounded-full bg-[#F3F4F6]" src="/landing-v1/avatar-amaya.png" />
                      <div>
                        <div className="text-[16px] font-bold text-black">Sadie Berlin</div>
                        <div className="text-[14px] font-bold text-[#F3BA2F]">@sadieberlin00</div>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8EAF0] bg-white">
                      <Instagram className="h-5 w-5 text-[#E1306C]" />
                    </div>
                  </div>
                </div>

                {/* Central Action Card */}
                <div className="relative flex flex-col items-center justify-center rounded-[20px] border border-[#FFB300]/20 bg-white p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)]">
                  <div className="text-center font-['DM_Sans'] text-[18px] font-bold text-black">
                    Incredibly useful product
                  </div>
                  <div className="mt-4 text-center font-['DM_Sans'] text-[15px] leading-[1.6] text-[#444444]/60">
                    Stellar's user–friendly dashboards have simplified our digital strategy management.
                  </div>

                  <div className="mt-8">
                    <Button className="h-[52px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] px-10 text-[16px] font-bold text-black shadow-[0_10px_25px_rgba(255,179,0,0.3)] transition-transform hover:scale-105 active:scale-95">
                      Follow us on social media
                    </Button>
                  </div>

                  <div className="mt-6 flex items-center gap-3 opacity-30 grayscale">
                    <img alt="" className="h-8 w-8 rounded-full" src="/landing-v1/avatar-fig.png" />
                    <span className="text-[14px] font-bold text-black">@fignel_sooon</span>
                    <Twitter className="h-4 w-4 text-[#1D9BF0]" />
                  </div>
                </div>

                <div className="rounded-[20px] border border-[#E8EAF0] bg-white/40 p-8 opacity-40 grayscale">
                  <div className="font-['DM_Sans'] text-[18px] font-bold text-black">Incredibly useful product</div>
                  <div className="mt-4 font-['DM_Sans'] text-[16px] leading-[1.6] text-[#444444]">
                    Stellar's user–friendly dashboards have simplified our digital strategy management.
                  </div>
                  <div className="mt-10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img alt="" className="h-12 w-12 rounded-full bg-[#F3F4F6]" src="/landing-v1/avatar-sadie.png" />
                      <div>
                        <div className="text-[16px] font-bold text-black">Amaya Locosta</div>
                        <div className="text-[14px] font-bold text-[#F3BA2F]">@amaylocosta</div>
                      </div>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#E8EAF0] bg-white">
                      <Twitter className="h-5 w-5 text-[#1D9BF0]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="cta">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[24px] border border-black/5 px-6 py-12 sm:px-10 sm:py-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src="/Background.png"
            />

            <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              {/* Left Column Mockup Card */}
              <div className="relative overflow-hidden rounded-[24px] border border-black/5 bg-gradient-to-br from-[#FFF8E6] to-[#FFEAB0] px-8 pb-0 pt-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] sm:px-12">
                <div className="relative z-10 text-center">
                  <div className="inline-flex rounded-full bg-[#E8B100]/10 px-3 py-1 text-[16px] font-bold text-[#E8B100]">
                    Opinion Based Trading
                  </div>
                  <div className="mt-4 text-[24px] font-bold leading-tight tracking-tight text-black sm:text-[42px] [font-family:'Sk-Modernist-Regular',Helvetica]">
                    <span className="relative">
                      Scan the QR CODE
                      <span className="absolute -bottom-2 left-0 h-[6px] w-full rounded-full bg-[#FFB300]" />
                    </span>
                  </div>
                </div>

                <div className="relative mt-10 grid grid-cols-[1.4fr_1fr] items-end">
                  <div className="relative z-10 -mb-2">
                    <img
                      alt="iPhone Mockup"
                      className="w-full max-w-[320px]"
                      src="/iphone.png"
                    />
                  </div>

                  <div className="relative pb-16 pl-4">
                    <img
                      alt=""
                      className="absolute -left-4 -top-6 w-[70px] -rotate-[15deg] opacity-80"
                      src="/curvearrow.png"
                    />
                    <div className="w-fit rounded-[24px] bg-white p-4 shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                      <img
                        alt="QR Code"
                        className="h-[140px] w-[140px] rounded-xl sm:h-[160px] sm:w-[160px]"
                        src="/landing-v1/qr.png"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column Content */}
              <div className="px-2 sm:px-4">
                <div className="font-['DM_Sans'] text-sm font-semibold tracking-wide text-[#FFB300]">
                  Opinion Based Trading!
                </div>
                <h2 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] lg:text-5xl  ">
                  Start Your Journey Today!
                </h2>
                <p className="mt-2 max-w-xl font-['DM_Sans'] text-[18px] font-normal leading-relaxed text-[#444444]">
                  Experience the Opinex difference and unlock the true potential.
                </p>

                <div className="mt-6">
                  <Button className="h-[52px] rounded-full bg-gradient-to-r from-[#FFD54F] to-[#FFB300] px-12 text-[16px] font-bold text-black shadow-[0_10px_25px_rgba(255,179,0,0.3)] transition-transform hover:scale-105">
                    Download APK
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                  {[
                    { label: "Instant Settlements", color: "bg-[#FFB300]" },
                    { label: "No Hidden Charges", color: "bg-[#FFB300]" },
                  ].map((item) => (
                    <div className="flex items-center gap-3 font-['DM_Sans'] text-[15px] font-semibold text-black/80" key={item.label}>
                      <div className={`flex h-6 w-6 items-center justify-center rounded-full ${item.color} text-black shadow-sm`}>
                        <Check className="h-3.5 w-3.5 stroke-[3px]" />
                      </div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16" id="faq">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 px-6 py-14 sm:px-10 sm:py-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              src="/howitworks.png"
            />

            <img
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 left-1/2 w-full max-w-[1280px] -translate-x-1/2 opacity-30"
              src="/earth.png"
            />

            <div className="relative">
              <h2 className="text-center text-[36px] font-normal leading-[1.1] tracking-tight text-black [font-family:'Sk-Modernist-Regular',Helvetica] sm:text-[48px] lg:text-[64px]">
                Frequently Asked Questions
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center font-['DM_Sans'] text-[18px] font-normal leading-[1.5] text-[#444444]">
                Checkout our Live Markets & Real World Events to place
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
                    className="group overflow-hidden rounded-[16px] border border-[#E8EAF0] bg-white transition-all hover:border-[#F3BA2F]/40"
                    key={item.q}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-10 py-7 text-left text-base font-medium text-black sm:px-12">
                      <span className="font-['DM_Sans'] text-[18px]">{item.q}</span>
                      <ChevronDown className="h-5 w-5 flex-none text-black/30 transition-transform duration-300 group-open:rotate-180" />
                    </summary>
                    <div className="px-10 pb-7 font-['DM_Sans'] text-[16px] leading-relaxed text-[#444444] sm:px-12">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-8 px-6 sm:mt-12 sm:px-12 lg:px-16">
          <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-[22px] border border-black/5 px-6 py-12 sm:px-10 sm:py-14 lg:py-16">
            <img
              alt=""
              className="absolute inset-0 h-full w-full object-fill"
              src="/howitworks.png"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="flex flex-col gap-9 sm:flex-row sm:items-center lg:gap-11">
                <div className="w-fit rounded-3xl border border-black/5 bg-white p-4 shadow-[0_18px_48px_rgba(0,0,0,0.06)]">
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
                  <div className="mt-4 max-w-xs font-['DM_Sans'] text-[18px] text-[#444444]">
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
                      { label: "404", href: "/404" },
                      { label: "More Templates", href: "#" },
                    ],
                  },
                ].map((col) => (
                  <div key={col.title}>
                    <div className="font-['DM_Sans'] text-[14px] font-semibold text-black/45">
                      {col.title}
                    </div>
                    <div className="mt-8 space-y-6 font-['DM_Sans'] text-[16px] text-black/60">
                      {col.links.map((link) => (
                        <a
                          className={`block w-fit hover:text-black ${link.underline ? "underline underline-offset-8" : ""
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

            <div className="relative mt-20 h-px w-full bg-black/5" />

            <div className="relative mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="font-['DM_Sans'] text-[14px] text-black/55">
                Copyright ©{new Date().getFullYear()}{" "}
                <span className="text-black/70">opinex.io</span>
              </div>

              <div className="flex items-center gap-4">
                {[
                  { icon: <Facebook className="h-5 w-5" />, label: "Facebook" },
                  { icon: <Twitter className="h-5 w-5" />, label: "Twitter" },
                  { icon: <Instagram className="h-5 w-5" />, label: "Instagram" },
                ].map((item) => (
                  <a
                    aria-label={item.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#F3BA2F] shadow-[0_10px_25px_rgba(0,0,0,0.04)] transition-transform hover:scale-110 hover:bg-white"
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
