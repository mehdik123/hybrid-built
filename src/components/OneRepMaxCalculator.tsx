import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, TrendingUp, Dumbbell } from "lucide-react";
import { useLanguage } from "@/contexts/AppContext";
import { translations } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

const OneRepMaxCalculator = () => {
    const { language } = useLanguage();
    const t = translations.tools.orm;
    const [exercise, setExercise] = useState<string>("benchPress");
    const [weight, setWeight] = useState<string>("");
    const [bodyweight, setBodyweight] = useState<string>("");
    const [result, setResult] = useState<number | null>(null);

    const isWeightedExercise = exercise === "weightedDips" || exercise === "weightedPullups";

    const calculate1RM = () => {
        const w = parseFloat(weight);
        const bw = parseFloat(bodyweight);

        if (w >= 0) { // Changed to >= 0 to allow 0 added weight
            let res = 0;
            // Epley Formula for 10 reps: 1RM = weight × (1 + 10/30) = weight × 1.333

            if (isWeightedExercise) {
                if (!bw || bw <= 0) {
                    alert(language === 'en' ? "Please enter your bodyweight" : "المرجو إدخال وزن الجسم");
                    return;
                }
                const totalWeight = w + bw;
                const total1RM = totalWeight * (1 + 10 / 30);
                res = total1RM - bw;
            } else {
                if (w === 0) return; // For standard lifts, 0 weight is invalid
                res = w * (1 + 10 / 30);
            }

            setResult(Math.round(res));
        }
    };

    const zones = result ? [
        { label: t.zoneStrength[language], percentage: 90, value: Math.round(result * 0.9) },
        { label: t.zoneHypertrophy[language], percentage: 80, value: Math.round(result * 0.8) },
        { label: t.zoneEndurance[language], percentage: 60, value: Math.round(result * 0.6) },
    ] : [];

    return (
        <div className="bg-secondary/30 border border-white/5 rounded-3xl p-8 h-full flex flex-col justify-between">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="text-xl font-black uppercase tracking-tight">{t.title[language]}</h4>
                </div>

                <div className="space-y-4 mb-8">
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                            {t.exerciseLabel[language]}
                        </label>
                        <Select value={exercise} onValueChange={setExercise}>
                            <SelectTrigger className="bg-background/50 border-white/10 text-base font-bold h-14">
                                <SelectValue>
                                    <div className="flex items-center gap-2">
                                        <Dumbbell className="w-4 h-4 text-primary" />
                                        <span>{t.exercises[exercise as keyof typeof t.exercises][language]}</span>
                                    </div>
                                </SelectValue>
                            </SelectTrigger>
                            <SelectContent className="bg-background border-white/10">
                                <SelectItem value="benchPress" className="text-base font-medium cursor-pointer">
                                    {t.exercises.benchPress[language]}
                                </SelectItem>
                                <SelectItem value="weightedDips" className="text-base font-medium cursor-pointer">
                                    {t.exercises.weightedDips[language]}
                                </SelectItem>
                                <SelectItem value="weightedPullups" className="text-base font-medium cursor-pointer">
                                    {t.exercises.weightedPullups[language]}
                                </SelectItem>
                                <SelectItem value="squat" className="text-base font-medium cursor-pointer">
                                    {t.exercises.squat[language]}
                                </SelectItem>
                                <SelectItem value="deadlift" className="text-base font-medium cursor-pointer">
                                    {t.exercises.deadlift[language]}
                                </SelectItem>
                                <SelectItem value="zBarCurls" className="text-base font-medium cursor-pointer">
                                    {t.exercises.zBarCurls[language]}
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block">
                                {t.weightLabel[language]} (KG)
                            </label>
                            <Input
                                type="number"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                placeholder="10"
                                className="bg-background/50 border-white/10 text-xl font-bold h-14"
                            />
                        </div>

                        {isWeightedExercise && (
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex-1"
                            >
                                <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 block text-primary">
                                    {t.bodyweightLabel[language]} (KG)
                                </label>
                                <Input
                                    type="number"
                                    value={bodyweight}
                                    onChange={(e) => setBodyweight(e.target.value)}
                                    placeholder="80"
                                    className="bg-background/50 border-primary/30 focus-visible:ring-primary text-xl font-bold h-14"
                                />
                            </motion.div>
                        )}
                    </div>
                </div>

                <Button
                    onClick={calculate1RM}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-widest py-6 mb-8"
                >
                    {t.calculate[language]}
                </Button>
            </div>

            {result !== null && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6"
                >
                    <div className="text-center p-6 bg-primary/5 rounded-2xl border border-primary/10">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">
                            {t.resultLabel[language]}
                        </p>
                        <div className="text-5xl font-black text-foreground">
                            {result}<span className="text-xl ml-2 text-muted-foreground">KG</span>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-2">
                            <TrendingUp className="w-3 h-3" /> {t.trainingZones[language]}
                        </p>
                        {zones.map((zone, idx) => (
                            <div key={idx} className="flex items-center justify-between p-3 bg-background/40 rounded-xl border border-white/5">
                                <span className="text-xs font-medium text-muted-foreground">{zone.label}</span>
                                <span className="text-sm font-black text-foreground">{zone.value} KG</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )}

            {result === null && (
                <div className="flex items-center gap-2 text-muted-foreground/40 italic text-sm">
                    <Info className="w-4 h-4" />
                    <p>{t.desc[language]}</p>
                </div>
            )}
        </div>
    );
};

export default OneRepMaxCalculator;
