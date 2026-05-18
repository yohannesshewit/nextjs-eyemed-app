"use client";

import { useState } from "react";
import { Mail, User, MessageSquare, Send, Stethoscope } from "lucide-react";

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResult("Sending...");

    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "c6e3fe92-f813-4ba2-a038-43edbad8a7a3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Consultation submitted successfully.");
      alert(
        "Our team will review your details and get back to you shortly with your email account.",
      );
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Something went wrong");
    }
  };

  return (
    <main className="min-h-screen lg:h-screen overflow-hidden bg-linear-to-br from-slate-100 via-gray-50 to-slate-200">
      {/* Layout */}
      <div className="relative z-10 flex h-full">
        {/* LEFT SIDE */}
        <section className="hidden lg:flex w-[42%] flex-col justify-between overflow-hidden rounded-r-[40px] bg-linear-to-br from-blue-400 via-zinc-900 to-zinc-900 px-12 py-10 text-white shadow-2xl">
          {/* Top */}
          <div>
            {/* Logo */}
            <div className="mb-10 flex h-24 w-24 items-center justify-center rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl">
              <Stethoscope size={40} />
            </div>

            {/* Heading */}
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-zinc-400">
              Professional Eye Care
            </p>

            <h1 className="text-5xl font-bold leading-[1.05] tracking-tight">
              Online Eye
              <br />
              Consultation
            </h1>

            <p className="mt-6 max-w-lg text-[16px] leading-8 text-zinc-300">
              Get professional consultation for eye conditions, symptoms,
              medication history, and vision concerns through our secure digital
              healthcare platform.
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-5">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">24/7</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Consultation support anytime
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <h3 className="text-3xl font-bold">100%</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  Secure patient information
                </p>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="space-y-4">
            <div className="flex items-center gap-4  border  px-5 py-4  rounded-[30px]  border-white/10 bg-white/10 backdrop-blur-xl">
              <div className="h-3 w-3 rounded-full bg-green-400 shadow-[0_0_20px_rgba(74,222,128,0.8)]" />

              <p className="text-sm text-zinc-200">Professional Consultation</p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
              <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(96,165,250,0.8)]" />

              <p className="text-sm text-zinc-200">Fast & Reliable Response</p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
              <div className="h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_20px_rgba(192,132,252,0.8)]" />

              <p className="text-sm text-zinc-200">
                Trusted Digital Healthcare
              </p>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE */}
        <section className="flex w-full items-center justify-center px-4 py-4 lg:w-[58%] lg:px-10 overflow-y-auto">
          <div className="w-full max-w-2xl  rounded-[36px] border border-white/50 bg-white/80 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.08)] backdrop-blur-2xl lg:p-8 ">
            {/* Mobile Header */}
            <div className=" text-center lg:hidden bg-linear-to-br from-blue-400 via-zinc-900 to-zinc-900 p-6 rounded-[26px]">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-400 text-white backdrop-blur-3xl">
                <Stethoscope size={28} />
              </div>

              <h1 className="text-3xl font-bold text-zinc-100">
                Online Consultation
              </h1>

              <p className="mt-2 text-sm text-zinc-300">
                Submit your consultation details
              </p>
            </div>

            {/* Form */}
            <form onSubmit={onSubmit} className="space-y-5 md:space-y-10 mt-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 ">
                {/* Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-zinc-700">
                    Full Name
                  </label>

                  <div className="flex items-center rounded-2xl border border-zinc-200 bg-white px-4 shadow-sm transition-all focus-within:border-black focus-within:ring-4 focus-within:ring-black/5">
                    <User size={18} className="text-zinc-400" />

                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Peter"
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-zinc-700">
                    Email Address
                  </label>

                  <div className="flex items-center rounded-2xl border border-zinc-200 bg-white px-4 shadow-sm transition-all focus-within:border-black focus-within:ring-4 focus-within:ring-black/5">
                    <Mail size={18} className="text-zinc-400" />

                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="you@example.com"
                      className="w-full bg-transparent px-3 py-4 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-700">
                  Consultation Topic
                </label>

                <div className="flex items-center rounded-2xl border border-zinc-200 bg-white px-4 shadow-sm transition-all focus-within:border-black focus-within:ring-4 focus-within:ring-black/5">
                  <MessageSquare size={18} className="text-zinc-400" />

                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="Eye pain, blurred vision..."
                    className="w-full bg-transparent px-3 py-4 outline-none"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-zinc-700">
                  Consultation Details
                </label>

                <div className="rounded-3xl border border-zinc-200 bg-white px-5 py-5 shadow-sm transition-all focus-within:border-black focus-within:ring-4 focus-within:ring-black/5">
                  <div className="flex gap-3">
                    <MessageSquare size={18} className="mt-1 text-zinc-400" />

                    <textarea
                      name="message"
                      required
                      rows={7}
                      placeholder={`Symptoms:
- Eye redness
- Pain
- Itching

Medication History:
- Eye drops used

Additional Notes:
Write details here...`}
                      className="w-full resize-none bg-transparent text-sm leading-7 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-black via-zinc-900 to-black py-4 text-[15px] font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl"
              >
                <Send size={18} />
                Submit Consultation
              </button>

              {/* Result */}
              {result && (
                <div className="pt-1 text-center text-sm text-zinc-600">
                  {result}
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}
