"use client";

import { ScanEye } from "lucide-react";
import { useMemo, useState } from "react";

type Result = {
  avgK: number;
  astigmatism: number;
  classification: string;
} | null;

export default function CorneaPowerCalculator() {
  const [k1, setK1] = useState<number | "">("");
  const [k2, setK2] = useState<number | "">("");

  const result: Result = useMemo(() => {
    if (k1 === "" || k2 === "") return null;

    const K1 = Number(k1);
    const K2 = Number(k2);

    const avgK = (K1 + K2) / 2;
    const astigmatism = Math.abs(K1 - K2);

    let classification = "Normal Cornea";

    if (avgK > 48) classification = "Steep Cornea (Keratoconus suspicion)";
    else if (avgK < 41)
      classification = "Flat Cornea (Hypotony/Hyperopic shift possible)";

    if (astigmatism > 2) {
      classification += " + High Astigmatism";
    }

    return { avgK, astigmatism, classification };
  }, [k1, k2]);

  const inputStyle = "border p-2 rounded-lg w-full";

  return (
    <div className="w-full h-full  rounded-2xl shadow-xl flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex gap-2 bg-indigo-50 pl-1 py-2 rounded-t-xl">
          <div className="text-indigo-500">
            {" "}
            <ScanEye />
          </div>
          <p className="font-bold text-sm text-indigo-500">
            Corneal Power Calculator
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3 px-3 pt-2">
          <input
            type="number"
            placeholder="K1 (Flat K)"
            value={k1}
            onChange={(e) =>
              setK1(e.target.value === "" ? "" : Number(e.target.value))
            }
            className={inputStyle}
          />

          <input
            type="number"
            placeholder="K2 (Steep K)"
            value={k2}
            onChange={(e) =>
              setK2(e.target.value === "" ? "" : Number(e.target.value))
            }
            className={inputStyle}
          />
        </div>
      </div>

      {/* Result */}
      <div className=" text-center rounded-xl bg-indigo-50 border border-indigo-100 m-2 px-1 py-2">
        {result ? (
          <>
            <p className="text-xl text-black">Average Corneal Power:</p>
            <p className="text-3xl font-bold text-indigo-600">
              {result.avgK.toFixed(2)} D
            </p>

            <p className="text-sm mt-2 text-black">
              Corneal Astigmatism: {result.astigmatism.toFixed(2)} D
            </p>

            <p className="text-xl mt-3 font-bold text-indigo-600">
              {result.classification}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Enter K1 and K2 to calculate</p>
        )}
      </div>
    </div>
  );
}
