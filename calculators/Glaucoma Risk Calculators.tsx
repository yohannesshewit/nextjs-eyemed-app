"use client";

import { Eye } from "lucide-react";
import { useMemo, useState } from "react";

type RiskLevel = "Low Risk" | "Moderate Risk" | "High Risk";

export default function GlaucomaRiskCalculator() {
  const [age, setAge] = useState<number | "">("");
  const [iop, setIop] = useState<number | "">("");
  const [cct, setCct] = useState<number | "">("");
  const [cdRatio, setCdRatio] = useState<number | "">("");
  const [familyHistory, setFamilyHistory] = useState<"yes" | "no">("no");

  const result = useMemo(() => {
    if (age === "" || iop === "" || cct === "" || cdRatio === "") return null;

    let score = 0;

    if (age >= 60) score += 2;
    else if (age >= 45) score += 1;

    if (iop >= 26) score += 3;
    else if (iop >= 22) score += 2;
    else if (iop >= 18) score += 1;

    if (cct < 520) score += 2;
    else if (cct < 540) score += 1;

    if (cdRatio >= 0.8) score += 3;
    else if (cdRatio >= 0.6) score += 2;
    else if (cdRatio >= 0.4) score += 1;

    if (familyHistory === "yes") score += 2;

    // ✅ Convert to percentage (max score = 12)
    const percentage = Math.round((score / 12) * 100);

    let level: RiskLevel = "Low Risk";
    if (percentage >= 70) level = "High Risk";
    else if (percentage >= 40) level = "Moderate Risk";

    return { score: percentage, level };
  }, [age, iop, cct, cdRatio, familyHistory]);

  const inputStyle = "border  p-2 rounded-lg ";

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 bg-blue-50 pl-3 py-2 rounded-t-xl">
          <div>
            <Eye />
          </div>
          <p className="font-bold text-sm text-violet-500">
            Glaucoma Risk Calculator
          </p>
        </div>

        <div className="flex flex-col gap-3 px-3">
          <input
            type="number"
            placeholder="Age (years)"
            className={inputStyle}
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <input
            type="number"
            placeholder="IOP (mmHg)"
            className={inputStyle}
            value={iop}
            onChange={(e) =>
              setIop(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <input
            type="number"
            placeholder="CCT (µm)"
            className={inputStyle}
            value={cct}
            onChange={(e) =>
              setCct(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <input
            type="number"
            step="0.01"
            placeholder="C/D Ratio (e.g. 0.6)"
            className={inputStyle}
            value={cdRatio}
            onChange={(e) =>
              setCdRatio(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>

        {/* Family History */}
        <div className="flex flex-col gap-2 px-3">
          <p className="font-medium text-gray-700 ">
            Family History of Glaucoma
          </p>

          <div className="flex gap-3">
            <button
              onClick={() => setFamilyHistory("no")}
              className={`flex-1 py-2 rounded-xl border transition ${
                familyHistory === "no"
                  ? "bg-violet-600 text-white border-violet-600"
                  : "border-violet-300 text-violet-700"
              }`}
            >
              No
            </button>

            <button
              onClick={() => setFamilyHistory("yes")}
              className={`flex-1 py-2 rounded-xl border transition ${
                familyHistory === "yes"
                  ? "bg-violet-600 text-white border-violet-600"
                  : "border-violet-300 text-violet-700"
              }`}
            >
              Yes
            </button>
          </div>
        </div>
      </div>

      {/* Result */}
      <div className="m-2 px-1 py-2 rounded-xl bg-violet-50 border border-violet-100 flex justify-center items-center flex-col">
        {result ? (
          <>
            <p className="text-xl">
              Risk Score:{" "}
              <span className="font-semibold text-2xl text-violet-700">
                {result.score}%
              </span>
            </p>
            <p className="text-2xl font-bold text-violet-700">{result.level}</p>
          </>
        ) : (
          <p className="text-gray-500 text-center">
            Enter all values to <br /> calculate risk
          </p>
        )}
      </div>
    </div>
  );
}
