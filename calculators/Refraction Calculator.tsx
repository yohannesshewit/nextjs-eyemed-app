"use client";

import { Eye } from "lucide-react";
import { useState, useMemo } from "react";

type RefractionType = "Myopia" | "Hyperopia" | "Emmetropia" | "Astigmatism";

export default function RefractionCalculator() {
  const [sphere, setSphere] = useState<number | "">("");
  const [cylinder, setCylinder] = useState<number | "">("");
  const [axis, setAxis] = useState<number | "">("");

  // Spherical Equivalent
  const sphericalEquivalent = useMemo(() => {
    if (sphere === "" || cylinder === "") return null;
    return sphere + cylinder / 2;
  }, [sphere, cylinder]);

  // Classification logic
  const classification = useMemo<RefractionType | null>(() => {
    if (sphere === "") return null;

    const sph = sphere as number;
    const cyl = cylinder === "" ? 0 : (cylinder as number);

    const hasAstigmatism = Math.abs(cyl) >= 0.75;

    // Emmetropia
    if (Math.abs(sph) < 0.5 && !hasAstigmatism) {
      return "Emmetropia";
    }

    // Mixed Astigmatism (simplified clinical rule)
    if (hasAstigmatism && sph !== 0) {
      return "Astigmatism";
    }

    // Myopia
    if (sph < 0) return "Myopia";

    // Hyperopia
    if (sph > 0) return "Hyperopia";

    return null;
  }, [sphere, cylinder]);

  return (
    <div className="w-full h-full   rounded-2xl shadow-xl  flex flex-col justify-between ">
      {/* Header */}
      <div className="flex flex-col">
        <div className="flex gap-2 bg-green-50 pl-3 py-2  rounded-t-xl">
          <div>
            <Eye />
          </div>
          <p className="font-bold  text-sm text-green-500 ">
            Refraction Calculator
          </p>
        </div>

        {/* Inputs */}
        <div className="flex flex-col gap-3 mt-2 px-3">
          <input
            type="number"
            step="0.25"
            placeholder="Sphere (SPH)"
            value={sphere}
            onChange={(e) =>
              setSphere(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            step="0.25"
            placeholder="Cylinder (CYL)"
            value={cylinder}
            onChange={(e) =>
              setCylinder(
                e.target.value === "" ? "" : parseFloat(e.target.value),
              )
            }
            className="border p-2 rounded-lg"
          />

          <input
            type="number"
            placeholder="Axis (0 - 180°)"
            value={axis}
            onChange={(e) =>
              setAxis(e.target.value === "" ? "" : parseFloat(e.target.value))
            }
            className="border p-2 rounded-lg"
            min={0}
            max={180}
          />
        </div>
      </div>

      {/* Classification */}
      <div className="bg-blue-50 m-2 px-1 py-2 rounded-xl text-center space-y-2">
        {/* Spherical Equivalent */}
        <div className="  text-xl  ">
          Spherical Equivalent:{" "}
          <span className="font-bold text-3xl text-green-600">
            {sphericalEquivalent !== null
              ? sphericalEquivalent.toFixed(2)
              : "—"}
          </span>
        </div>
        <p className="text-sm text-gray-600">Clinical interpretation</p>

        <p className="text-2xl font-bold text-green-600">
          {classification ?? "—"}
        </p>

        {/* Clinical hints */}
        {classification === "Myopia" && (
          <p className="text-xs text-gray-500">
            Image focuses in front of retina
          </p>
        )}

        {classification === "Hyperopia" && (
          <p className="text-xs text-gray-500">Image focuses behind retina</p>
        )}

        {classification === "Emmetropia" && (
          <p className="text-xs text-gray-500">Normal refractive state</p>
        )}

        {classification === "Astigmatism" && (
          <p className="text-xs text-gray-500">
            Combined spherical + cylindrical error
          </p>
        )}
      </div>
    </div>
  );
}
