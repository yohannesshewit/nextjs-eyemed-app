"use client";

import { Eye } from "lucide-react";
import { useState, useMemo, useEffect } from "react";

type FormulaType = "SRK" | "SRK/T" | "Hoffer Q";

export default function IOLCalculatorPage() {
  const [formula, setFormula] = useState<FormulaType>("SRK/T");
  const [useAutoFormula, setUseAutoFormula] = useState(true);

  const [AL, setAL] = useState<number | "">("");
  const [K1, setK1] = useState<number | "">("");
  const [K2, setK2] = useState<number | "">("");
  const [A, setA] = useState<number | "">(118);

  // Tooltip state
  const [showFormulaHint, setShowFormulaHint] = useState(false);

  // Average K
  const K = useMemo(() => {
    if (K1 === "" || K2 === "") return null;
    return (K1 + K2) / 2;
  }, [K1, K2]);

  // Recommended formula
  const recommendedFormula = useMemo<FormulaType | null>(() => {
    if (AL === "") return null;

    if (AL < 22) return "Hoffer Q";
    if (AL <= 26) return "SRK/T";
    return "SRK/T";
  }, [AL]);

  // Auto apply formula
  useEffect(() => {
    if (useAutoFormula && recommendedFormula) {
      setFormula(recommendedFormula);
    }
  }, [recommendedFormula, useAutoFormula]);

  // Calculation
  const result = useMemo(() => {
    if (AL === "" || K === null || A === "") return null;

    let P = A - 2.5 * AL - 0.9 * K;

    if (formula === "SRK/T") P += 0.5;
    if (formula === "Hoffer Q") P -= 0.5;

    return P.toFixed(2);
  }, [AL, K, A, formula]);

  const canCalculate = AL !== "" && K !== null && A !== "";

  return (
    <div className="w-full h-full  bg-white rounded-2xl shadow-xl   flex flex-col justify-between">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex gap-2 bg-blue-50 pl-3 py-2 rounded-t-xl">
          <div>
            <Eye />
          </div>
          <p className="font-bold  text-sm text-blue-500 ">
            IOL Power Calculator
          </p>
        </div>{" "}
        {/* Inputs */}
        <div className="flex flex-col gap-3 px-3 mt-2  ">
          <input
            type="number"
            placeholder="Axial Length (mm)"
            value={AL}
            onChange={(e) =>
              setAL(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="K1 (D)"
            value={K1}
            onChange={(e) =>
              setK1(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
            className="border p-2 rounded-lg"
          />
          <input
            type="number"
            placeholder="K2 (D)"
            value={K2}
            onChange={(e) =>
              setK2(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
            className="border p-2 rounded-lg"
          />
          <div>
            <p className="pl-1 text-sm text-gray-600">A-constant</p>{" "}
            <input
              type="number"
              placeholder="A-Constant"
              value={A}
              onChange={(e) =>
                setA(e.target.value === "" ? "" : parseFloat(e.target.value))
              }
              className="border w-full p-2 rounded-lg"
            />
          </div>{" "}
          {/* Formula with hover hint */}
          <div className="relative">
            <select
              value={formula}
              onChange={(e) => {
                setFormula(e.target.value as FormulaType);
                setUseAutoFormula(false);
              }}
              onMouseEnter={() => setShowFormulaHint(true)}
              onMouseLeave={() => setShowFormulaHint(false)}
              className="border p-2 rounded-lg bg-white w-full"
            >
              <option value="SRK">SRK</option>
              <option value="SRK/T">SRK/T</option>
              <option value="Hoffer Q">Hoffer Q</option>
            </select>

            {/* Tooltip */}
            {showFormulaHint && (
              <div className="absolute z-10 mt-2 bg-gray-500 text-white text-xs p-3 rounded-lg shadow-lg w-full">
                <p className="font-semibold mb-1">Formula Guide</p>
                <ul className="space-y-1">
                  <li>
                    <b>SRK:</b> Basic regression formula
                  </li>
                  <li>
                    <b>SRK/T:</b> Best for normal & long eyes
                  </li>
                  <li>
                    <b>Hoffer Q:</b> Best for short eyes (AL &lt; 22 mm)
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        {/* Auto formula toggle */}
        <label className="flex items-center text-center gap-2 text-sm text-gray-900 px-4 pt-2">
          <input
            type="checkbox"
            checked={useAutoFormula}
            onChange={(e) => setUseAutoFormula(e.target.checked)}
          />
          Auto-recommended formula
        </label>
      </div>

      {/* Result */}
      <div className="bg-blue-50 px-1 py-2 rounded-xl text-center flex items-center justify-center  m-2">
        <p
          className={` text-center ${
            canCalculate
              ? "text-blue-700 text-3xl font-bold"
              : "text-gray-500  "
          }`}
        >
          {canCalculate
            ? ` ${result} D`
            : " Enter all values to calculated IOL power"}
        </p>
      </div>
    </div>
  );
}
