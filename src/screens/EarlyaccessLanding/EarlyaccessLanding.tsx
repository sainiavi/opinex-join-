import { useState } from "react";
import type { CSSProperties } from "react";
import {
  ClockIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  UsersIcon,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ScrollArea } from "../../components/ui/scroll-area";

const categories = [
  { name: "Cricket", icon: "/frame-34515.svg", active: true },
  { name: "Crypto", icon: "/background-border-shadow-1.svg", active: false },
  { name: "Forex", icon: "/background-border-shadow-2.svg", active: false },
  { name: "More", icon: "/background-border-shadow.svg", active: false },
];

const featuredCards = [
  {
    bgImage:
      "/opinex-style--dramatic-night-cricket-stadium-view--bright-lights.png",
    badge: "T20 WORLD CUP",
    badgeIcon: "/iconify-icon-8.svg",
    title: "India to win the semi-final against\nEngland?",
    yesPrice: "$0.72",
    noPrice: "$0.28",
    yesPercentage: 72,
  },
  {
    bgImage: "/opinex-style--futuristic-bitcoin-concept-art--glowing-gold.png",
    badge: "CRYPTO",
    badgeIcon: "/iconify-icon-1.svg",
    title: "Bitcoin to cross $70k resistance\nlevel today?",
    yesPrice: "$0.72",
    noPrice: "$0.28",
    yesPercentage: 72,
  },
];

const trendingEvents = [
  [
    {
      icon: "/iconify-icon-6.svg",
      text: "IND vs AUS",
      hasLiveBadge: true,
      isVS: true,
    },
    {
      icon: "/iconify-icon-6.svg",
      text: "US Election 25",
      hasLiveBadge: false,
      isVS: false,
    },
    {
      icon: "/image-2.png",
      text: "NFL Playoff",
      hasLiveBadge: false,
      isVS: false,
    },
  ],
  [
    {
      icon: "/iconify-icon-3.svg",
      text: "ETH Breakout",
      hasLiveBadge: false,
      isVS: false,
    },
    {
      icon: "/image-1.png",
      text: "Bitcon Latest",
      hasLiveBadge: false,
      isVS: false,
    },
    { icon: "/image-3.png", text: "Oscars", hasLiveBadge: false, isVS: false },
  ],
];

const livePredictions = [
  {
    icon: "/background-1.svg",
    timeLeft: "0h 12m left",
    title: "Bitcoin (BTC) to close above\n$68,500 today?",
    yesPrice: "$0.65",
    noPrice: "$0.35",
    yesPercentage: 62,
    noPercentage: 38,
    traders: "3,402 traders",
    bgColor: "bg-[#f3ba2f]",
  },
  {
    icon: "/background.svg",
    timeLeft: "4h 12m left",
    title: "India to win the 2nd ODI match\nagainst Australia?",
    yesPrice: "$0.65",
    noPrice: "$0.35",
    yesPercentage: 62,
    noPercentage: 38,
    traders: "3,402 traders",
    bgColor: "bg-[#f2f2f2]",
  },
  {
    icon: "/silver.svg",
    timeLeft: "12/02/2026",
    title: "Silver rate will increase in\nfebruary 2026?",
    yesPrice: "$0.65",
    noPrice: "$0.35",
    yesPercentage: 62,
    noPercentage: 38,
    traders: "3,402 traders",
    bgColor: "bg-[#f2f2f2]",
  },
];

const userAvatars = [
  "/ellipse-4135.svg",
  "/ellipse-4136.svg",
  "/ellipse-4137.svg",
  "/ellipse-4138.svg",
  "/ellipse-4139.svg",
];

export const EarlyaccessLanding = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");
  const apiBase =
    import.meta.env.VITE_API_URL?.toString() || "http://localhost:3001";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email.trim()) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      setStatus("loading");
      setMessage("");
      const response = await fetch(`${apiBase}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json()) as { ok: boolean; inserted?: boolean; error?: string };
      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }
      setStatus("success");
      setMessage(
        data.inserted ? "You’re on the waitlist!" : "You’re already on the waitlist.",
      );
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage("Could not submit. Please try again.");
    }
  };

  return (
    <div className="bg-white overflow-x-hidden w-full min-h-screen">
      <main className="relative overflow-hidden min-h-screen flex items-center justify-center pt-12 sm:pt-16 pb-10 sm:pb-12">
        <div className="pointer-events-none absolute -top-40 -left-32 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,214,102,0.9),rgba(255,214,102,0.2)_45%,rgba(255,255,255,0)_70%)] blur-2xl animate-breathe" />
        <div className="pointer-events-none absolute -bottom-48 -right-32 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(255,174,0,0.65),rgba(255,174,0,0.12)_50%,rgba(255,255,255,0)_75%)] blur-3xl animate-float-slow" />
        <div className="pointer-events-none absolute top-24 right-10 h-24 w-24 rounded-full border border-yellow-300/60 bg-white/10 backdrop-blur-sm animate-slow-spin" />
        {/* Hero frame (clip everything inside the rounded frame) */}
        <div className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-16 lg:right-16 top-8 bottom-8 rounded-2xl overflow-hidden z-0">
          <div
            className="hero-bg absolute inset-0 bg-cover bg-center opacity-100 animate-hero-zoom"
            style={{
              backgroundImage: "url(/frame-2087327136.png)",
            }}
          />
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[520px] w-[520px] sm:h-[600px] sm:w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95),rgba(255,255,255,0.55)_35%,rgba(255,255,255,0)_70%)] blur-3xl" />
          </div>
          <div className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center">
            <div className="orbit-wrap">
              <div className="orbit-scene">
              <div
                className="orbit-layer orbit-outer"
                style={
                  {
                    "--orbit-duration": "38s",
                    "--arc-length": "220",
                    "--arc-gap": "2500",
                    "--arc-offset": "380",
                  } as CSSProperties
                }
              >
                <div className="orbit-rotator">
                  <svg className="orbit-svg" viewBox="0 0 1000 1000" aria-hidden="true">
                    <circle className="orbit-circle" cx="500" cy="500" r="445" />
                    <circle className="orbit-arc" cx="500" cy="500" r="445" />
                  </svg>
                  <div
                    className="orbit-label"
                    style={{ "--orbit-angle": "300deg", "--orbit-tilt": "0deg" } as CSSProperties}
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
                    style={{ "--orbit-angle": "240deg", "--orbit-tilt": "0deg" } as CSSProperties}
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
                    style={{ "--orbit-angle": "60deg", "--orbit-tilt": "0deg" } as CSSProperties}
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
                    style={{ "--orbit-angle": "120deg", "--orbit-tilt": "0deg" } as CSSProperties}
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

              <div
                className="orbit-layer orbit-mid orbit-reverse"
                style={
                  {
                    "--orbit-duration": "30s",
                    "--arc-length": "170",
                    "--arc-gap": "2000",
                    "--arc-offset": "140",
                  } as CSSProperties
                }
              >
                <div className="orbit-rotator">
                  <svg className="orbit-svg" viewBox="0 0 800 800" aria-hidden="true">
                    <circle className="orbit-circle" cx="400" cy="400" r="320" />
                    <circle className="orbit-arc" cx="400" cy="400" r="320" />
                  </svg>
                </div>
              </div>

              <div
                className="orbit-layer orbit-inner"
                style={{ "--orbit-duration": "22s" } as CSSProperties}
              >
                <div className="orbit-rotator">
                  <svg className="orbit-svg" viewBox="0 0 600 600" aria-hidden="true">
                    <circle
                      className="orbit-circle orbit-circle--soft"
                      cx="300"
                      cy="300"
                      r="230"
                    />
                  </svg>
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex flex-col items-center gap-8 sm:gap-12 lg:gap-16 py-8 sm:py-12">
            <div className="flex flex-col items-center gap-4 sm:gap-6 text-center max-w-4xl">
              <div className="flex justify-center w-full">
                <img
                  className="h-6 sm:h-7 mb-1 animate-fade-in"
                  style={{ "--animation-delay": "0.1s" } as CSSProperties}
                  alt="Opinex"
                  src="/content.svg"
                />
              </div>

              <h1
                className="[font-family:'Sk-Modernist-Regular',Helvetica] font-normal text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight animate-fade-up px-2"
                style={{ "--animation-delay": "0.15s" } as CSSProperties}
              >
                <span className="text-transparent bg-clip-text bg-[linear-gradient(90deg,#111,#ffb300,#111)] bg-[length:200%_200%] animate-gradient-shift">
                  New era of Predictions
                  <br />
                  Driven by Community Opinion
                </span>
              </h1>

              <p
                className="max-w-2xl font-text-medium-normal text-[#444444] text-sm sm:text-base lg:text-md text-center px-4 animate-fade-up"
                style={{ "--animation-delay": "0.3s" } as CSSProperties}
              >
                A prediction marketplace where hosts create curated pools across
                Crypto, Cricket, and Forex and the community takes positions on
                real-world outcomes.
              </p>
            </div>
{/* 
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <Button className="w-full sm:w-auto px-6 py-3 rounded-full bg-[linear-gradient(90deg,rgba(255,213,79,1)_0%,rgba(255,179,0,1)_100%)] border-0 hover:opacity-90">
                <span className="[font-family:'Sk-Modernist-Bold',Helvetica] font-bold text-gray-900 text-base tracking-[-0.32px]">
                  Get Early Access
                </span>
              </Button>

              <Button
                variant="outline"
                className="w-full sm:w-auto px-6 py-3 bg-white rounded-full border border-solid"
              >
                <span className="[font-family:'Sk-Modernist-Bold',Helvetica] font-bold text-gray-900 text-base tracking-[-0.32px]">
                  Join Community
                </span>
              </Button>
            </div> */}

            {/* Email input and Join Waitlist button */}
            <form
              className="w-full flex items-center justify-center mt-3 animate-fade-up"
              style={{ "--animation-delay": "0.45s" } as CSSProperties}
              onSubmit={handleSubmit}
            >
              <div className="w-[92%] sm:w-[60%] max-w-[540px] h-auto sm:h-[100px] py-4 sm:py-0 bg-white/90 backdrop-blur-xl rounded-[32px] sm:rounded-[100px] shadow-[0_14px_34px_rgba(15,23,42,0.12)] sm:shadow-[0_20px_48px_rgba(15,23,42,0.1)] border border-[#eef1f6] px-4 sm:px-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[10px]">
                <div className="flex items-center gap-3 bg-white rounded-full border border-[#e5e7eb] px-4 sm:px-5 h-[54px] sm:h-[52px] w-full sm:w-[344px] shadow-none sm:shadow-[inset_0_0_0_1px_rgba(226,232,240,0.5)]">
                  <img src="/icon-postcard.svg" alt="" className="h-4 w-4 opacity-70" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="border-0 bg-transparent px-0 py-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-sm sm:text-base placeholder:text-[#98a2b3]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto h-[54px] sm:h-[52px] px-8 rounded-full bg-[#f7b51c] hover:bg-[#f4a300] text-gray-900 font-semibold text-sm sm:text-base shadow-[0_8px_16px_rgba(247,181,28,0.35)] transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Submitting..." : "Get Early Access"}
                </Button>
              </div>
            </form>
            {message ? (
              <p
                className={`mt-2 text-xs sm:text-sm ${
                  status === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </p>
            ) : null}
            <div className="flex items-center justify-center gap-4 mt-2 sm:-mt-2 scale-[0.75]">
              <div className="flex items-center justify-center">
                {userAvatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className={`w-8 h-8 sm:w-9 sm:h-9 border-2 border-white ${index > 0 ? "-ml-2" : ""}`}
                  >
                    <AvatarImage src={avatar} alt={`User ${index + 1}`} />
                    <AvatarFallback>U{index + 1}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <img className="h-4" alt="Stars" src="/frame-2087327058.svg" />
                <p className="[font-family:'Sk-Modernist-Regular',Helvetica] font-normal text-[#444444] text-sm sm:text-base tracking-[0] leading-[20px]">
                  3,244 Traders Joined the Waitlist
                </p>
              </div>
            </div>
            </div>

            {/* <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
              <div className="flex flex-col items-center gap-2 w-full">
                <div className="flex items-center justify-center">
                  {userAvatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      className={`w-8 h-8 sm:w-9 sm:h-9 border-2 border-white ${index > 0 ? "-ml-2" : ""}`}
                    >
                      <AvatarImage src={avatar} alt={`User ${index + 1}`} />
                      <AvatarFallback>U{index + 1}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex flex-col items-center mt-2">
                  <img
                    className="h-4"
                    alt="Frame"
                    src="/frame-2087327058.svg"
                  />
                  <p className="[font-family:'Sk-Modernist-Regular',Helvetica] font-normal text-[#444444] text-xs tracking-[0] leading-[18px] mt-1">
                    3,244 Traders Joined the Waitlist
                  </p>
                </div>
              </div>


          </div> */}
        </div>
      </main>
    </div>
  );
};
