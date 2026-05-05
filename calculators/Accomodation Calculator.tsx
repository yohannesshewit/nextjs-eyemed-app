"use client";

import { Eye } from "lucide-react";
import { useMemo, useState } from "react";

export default function AccommodationCalculator() {
  const [nearPoint, setNearPoint] = useState<number | "">("");
  const [age, setAge] = useState<number | "">("");

  const result = useMemo(() => {
    if (nearPoint === "" || nearPoint === 0) return null;

    const meters = nearPoint / 100;
    const amplitude = 1 / meters;

    let expectedMin = null;
    let expectedAvg = null;
    let expectedMax = null;
    let addPower: number | null = null;

    if (age !== "") {
      // Hofstetter formulas
      expectedAvg = 18.5 - 0.3 * age;
      expectedMin = 15 - 0.25 * age;
      expectedMax = 25 - 0.4 * age;

      // ✅ PURE ADD CALCULATION (NO PRESBYOPIA LABELS)
      const deficit = expectedAvg - amplitude;

      if (deficit > 0) {
        addPower = Math.ceil(deficit * 4) / 4;
      }
    }

    return {
      amplitude: amplitude.toFixed(2),
      expectedMin: expectedMin?.toFixed(2),
      expectedAvg: expectedAvg?.toFixed(2),
      expectedMax: expectedMax?.toFixed(2),
      addPower: addPower?.toFixed(2),
    };
  }, [nearPoint, age]);

  const inputStyle = "border p-2 rounded-lg w-full";

  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-xl flex flex-col justify-between">
      {/* Header */}
      <div>
        <div className="flex gap-1 bg-orange-50 pl-1 py-2 rounded-t-xl">
          <Eye />
          <p className="font-bold text-sm text-orange-500">
            Accommodation Calculator
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3 px-3 pt-2">
          <input
            type="number"
            placeholder="Near Point (cm)"
            className={inputStyle}
            value={nearPoint}
            onChange={(e) =>
              setNearPoint(e.target.value === "" ? "" : Number(e.target.value))
            }
          />

          <input
            type="number"
            placeholder="Age (optional)"
            className={inputStyle}
            value={age}
            onChange={(e) =>
              setAge(e.target.value === "" ? "" : Number(e.target.value))
            }
          />
        </div>
      </div>

      {/* Result */}
      <div className="m-2 px-1 py-2 text-center rounded-xl bg-violet-50 border border-violet-100">
        {result ? (
          <>
            <p className="text-xl">Amplitude of Accommodation:</p>
            <p className="text-3xl font-bold text-orange-600">
              {result.amplitude} D
            </p>

            {age !== "" && (
              <>
                <p className="text-sm mt-2 text-gray-600">
                  Expected Min AA: {result.expectedMin} D
                </p>
                <p className="text-sm text-gray-600">
                  Expected Avg AA: {result.expectedAvg} D
                </p>
                <p className="text-sm text-gray-600">
                  Expected Max AA: {result.expectedMax} D
                </p>
              </>
            )}
          </>
        ) : (
          <p className="text-gray-500">
            Enter near point and <br /> age to calculate
          </p>
        )}
      </div>
    </div>
  );
}
