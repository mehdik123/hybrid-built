import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calculator, TrendingUp, Dumbbell } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CountUp from "@/components/motion/CountUp";

const PLATE_SIZES = [25, 20, 15, 10, 5, 2.5, 1.25];
const BAR_WEIGHT = 20;

function calcPlatesPerSide(totalKg: number): number[] {
  let remaining = Math.max(0, (totalKg - BAR_WEIGHT) / 2);
  const plates: number[] = [];
  for (const size of PLATE_SIZES) {
    while (remaining >= size - 0.01) {
      plates.push(size);
      remaining -= size;
    }
  }
  return plates;
}

function calc1RM(exercise: string, weight: string, bodyweight: string): number | null {
  const w = parseFloat(weight);
  if (isNaN(w) || w < 0) return null;

  const isWeighted = exercise === "weightedDips" || exercise === "weightedPullups";

  if (isWeighted) {
    const bw = parseFloat(bodyweight);
    if (isNaN(bw) || bw <= 0) return null;
    const total1RM = (w + bw) * (1 + 10 / 30);
    return Math.round(total1RM - bw);
  }

  if (w === 0) return null;
  return Math.round(w * (1 + 10 / 30));
}

const PlateBar = ({ plates }: { plates: number[] }) => (
  <div className="flex items-center justify-center gap-0.5 py-4 overflow-x-auto">
    <div className="w-3 h-16 bg-zinc-400 rounded-sm shrink-0" title="Bar sleeve" />
    {plates.map((p, i) => (
      <div
        key={`${p}-${i}`}
        className="shrink-0 rounded-sm bg-red-br/90 border border-red-br flex items-center justify-center text-[8px] font-bold text-white"
        style={{ width: 14 + p * 0.6, height: 28 + p * 1.2 }}
        title={`${p} kg`}
      >
        {p}
      </div>
    ))}
    <div className="w-8 h-3 bg-zinc-500 rounded-sm shrink-0 mx-1" title="Bar" />
    {[...plates].reverse().map((p, i) => (
      <div
        key={`r-${p}-${i}`}
        className="shrink-0 rounded-sm bg-red-br/90 border border-red-br flex items-center justify-center text-[8px] font-bold text-white"
        style={{ width: 14 + p * 0.6, height: 28 + p * 1.2 }}
      >
        {p}
      </div>
    ))}
    <div className="w-3 h-16 bg-zinc-400 rounded-sm shrink-0" />
  </div>
);

const OneRepMaxCalculator = () => {
  const { language } = useLanguage();
  const t = translations.tools.orm;
  const [exercise, setExercise] = useState("benchPress");
  const [weight, setWeight] = useState("");
  const [bodyweight, setBodyweight] = useState("");

  const result = useMemo(() => calc1RM(exercise, weight, bodyweight), [exercise, weight, bodyweight]);
  const isWeightedExercise = exercise === "weightedDips" || exercise === "weightedPullups";
  const plates = result && !isWeightedExercise ? calcPlatesPerSide(result) : [];

  const zones = result
    ? [
        { label: t.zoneStrength[language], value: Math.round(result * 0.9) },
        { label: t.zoneHypertrophy[language], value: Math.round(result * 0.8) },
        { label: t.zoneEndurance[language], value: Math.round(result * 0.6) },
      ]
    : [];

  return (
    <div className="border border-white/[0.08] bg-[#111] p-6 md:p-8 h-full flex flex-col" data-cursor-label="OPEN">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 border border-red-br/30 flex items-center justify-center">
          <Calculator className="w-5 h-5 text-red-br" />
        </div>
        <h4 className="font-display text-xl uppercase">{t.title[language]}</h4>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="font-editorial text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
            {t.exerciseLabel[language]}
          </label>
          <Select value={exercise} onValueChange={setExercise}>
            <SelectTrigger className="bg-ink border-white/10 h-12 font-editorial">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-4 h-4 text-red-br" />
                  <span>{t.exercises[exercise as keyof typeof t.exercises][language]}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-ink border-white/10">
              {Object.entries(t.exercises).map(([key, label]) => (
                <SelectItem key={key} value={key} className="font-editorial cursor-pointer">
                  {label[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="font-editorial text-[10px] uppercase tracking-widest text-muted-foreground mb-2 block">
              {t.weightLabel[language]} (KG)
            </label>
            <Input
              type="number"
              inputMode="decimal"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="10"
              className="bg-ink border-white/10 text-xl font-display h-12 focus-visible:ring-red-br/50"
            />
          </div>
          {isWeightedExercise && (
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} className="flex-1">
              <label className="font-editorial text-[10px] uppercase tracking-widest text-red-br mb-2 block">
                {t.bodyweightLabel[language]} (KG)
              </label>
              <Input
                type="number"
                inputMode="decimal"
                value={bodyweight}
                onChange={(e) => setBodyweight(e.target.value)}
                placeholder="80"
                className="bg-ink border-red-br/30 text-xl font-display h-12 focus-visible:ring-red-br/50"
              />
            </motion.div>
          )}
        </div>
      </div>

      {result !== null ? (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5 mt-auto">
          <div className="text-center p-5 border border-red-br/20 bg-red-br/5">
            <p className="font-editorial text-[10px] uppercase tracking-[0.2em] text-red-br mb-1">
              {t.resultLabel[language]}
            </p>
            <div className="font-display text-5xl text-foreground">
              <CountUp key={result} end={result} duration={800} />
              <span className="text-lg ml-2 text-muted-foreground">KG</span>
            </div>
          </div>

          {!isWeightedExercise && plates.length > 0 && (
            <div>
              <p className="font-editorial text-[10px] uppercase tracking-widest text-muted-foreground mb-2 text-center">
                Plates per side
              </p>
              <PlateBar plates={plates} />
            </div>
          )}

          <div className="space-y-2">
            <p className="font-editorial text-[10px] uppercase tracking-widest text-muted-foreground flex items-center gap-2">
              <TrendingUp className="w-3 h-3" /> {t.trainingZones[language]}
            </p>
            {zones.map((zone, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 border border-white/[0.06]">
                <span className="font-editorial text-xs text-muted-foreground">{zone.label}</span>
                <span className="font-display text-sm">{zone.value} KG</span>
              </div>
            ))}
          </div>
        </motion.div>
      ) : (
        <p className="font-editorial text-sm text-muted-foreground/60 italic mt-auto">{t.desc[language]}</p>
      )}
    </div>
  );
};

export default OneRepMaxCalculator;
