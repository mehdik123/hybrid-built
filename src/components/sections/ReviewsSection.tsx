import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const ReviewsSection = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const { language, isRTL } = useLanguage();

    // Sample reviews - replace with real client reviews
    const reviews = [
        {
            name: { en: "Client Name 1", ar: "اسم العميل 1" },
            result: { en: "Lost 15kg in 12 weeks", ar: "فقد 15 كجم في 12 أسبوعًا" },
            review: {
                en: "Working with this coach completely transformed not just my body, but my entire mindset. The personalized program was exactly what I needed, and the support was incredible throughout the journey.",
                ar: "العمل مع هذا المدرب غيّر تمامًا ليس فقط جسدي، بل عقليتي بالكامل. كان البرنامج الشخصي هو بالضبط ما كنت بحاجة إليه، والدعم كان رائعًا طوال الرحلة."
            },
            rating: 5,
        },
        {
            name: { en: "Client Name 2", ar: "اسم العميل 2" },
            result: { en: "Gained 8kg of muscle", ar: "اكتسب 8 كجم من العضلات" },
            review: {
                en: "I've tried many programs before, but this is the only one that actually delivered results. The hybrid approach of combining calisthenics and weights was a game-changer for me.",
                ar: "لقد جربت العديد من البرامج من قبل، لكن هذا هو الوحيد الذي حقق نتائج فعلية. كان النهج الهجين الجامع بين الجمباز والأوزان عاملاً محوريًا بالنسبة لي."
            },
            rating: 5,
        },
        {
            name: { en: "Client Name 3", ar: "اسم العميل 3" },
            result: { en: "Best shape of my life", ar: "أفضل شكل في حياتي" },
            review: {
                en: "The weekly check-ins and constant support kept me accountable. The nutrition plan was easy to follow and the training was challenging but enjoyable. Highly recommend!",
                ar: "حافظت الفحوصات الأسبوعية والدعم المستمر على مسؤوليتي. كانت خطة التغذية سهلة الاتباع وكان التدريب صعبًا لكن ممتعًا. أوصي به بشدة!"
            },
            rating: 5,
        },
        {
            name: { en: "Client Name 4", ar: "اسم العميل 4" },
            result: { en: "Transformed in 10 weeks", ar: "تحول في 10 أسابيع" },
            review: {
                en: "Amazing results! The personalized approach made all the difference. I finally found a program that fits my lifestyle and delivers real results.",
                ar: "نتائج مذهلة! النهج الشخصي أحدث كل الفرق. أخيرًا وجدت برنامجًا يناسب نمط حياتي ويقدم نتائج حقيقية."
            },
            rating: 5,
        },
        {
            name: { en: "Client Name 5", ar: "اسم العميل 5" },
            result: { en: "Built my dream physique", ar: "بنيت جسم أحلامي" },
            review: {
                en: "This coaching changed my life. Professional, knowledgeable, and genuinely cares about your success. Worth every penny!",
                ar: "هذا التدريب غيّر حياتي. احترافي، ذو معرفة، ويهتم حقًا بنجاحك. يستحق كل قرش!"
            },
            rating: 5,
        },
    ];

    // Duplicate reviews for seamless loop
    const duplicatedReviews = [...reviews, ...reviews];

    return (
        <section id="reviews" className="section-padding bg-card overflow-hidden" ref={ref}>
            <div className="container-tight">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <ShieldCheck className="w-8 h-8 text-primary" />
                        <span className="text-primary font-semibold text-lg">
                            {language === "ar" ? "100٪ مراجعات حقيقية" : "100% Real Reviews"}
                        </span>
                    </div>
                    <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-4">
                        {language === "ar" ? "ما يقوله" : "What Our"}{" "}
                        <span className="text-gradient">
                            {language === "ar" ? "عملاؤنا" : "Clients Say"}
                        </span>
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        {language === "ar"
                            ? "تحولات حقيقية من أشخاص حقيقيين"
                            : "Real transformations from real people"}
                    </p>
                </motion.div>

                {/* Auto-scrolling Carousel */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative">
                        {/* Carousel Container */}
                        <div className="overflow-hidden">
                            <motion.div
                                className="flex gap-6"
                                animate={{
                                    x: isRTL ? ["0%", "50%"] : ["-50%", "0%"],
                                }}
                                transition={{
                                    x: {
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        duration: 30,
                                        ease: "linear",
                                    },
                                }}
                                style={{ width: "fit-content" }}
                            >
                                {duplicatedReviews.map((review, index) => (
                                    <div
                                        key={index}
                                        className="flex-shrink-0 w-[350px] md:w-[400px]"
                                    >
                                        <div className={`bg-background border border-border rounded-2xl p-6 md:p-8 h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 ${isRTL ? 'text-right' : ''}`}>
                                            {/* Star Rating */}
                                            <div className={`flex gap-1 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                                                {[...Array(review.rating)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-primary text-primary"
                                                    />
                                                ))}
                                            </div>

                                            {/* Quote Icon */}
                                            <Quote className={`w-10 h-10 text-primary/30 mb-4 ${isRTL ? 'scale-x-[-1]' : ''}`} />

                                            {/* Review Text */}
                                            <p className="text-foreground/90 leading-relaxed mb-6 flex-grow italic">
                                                "{review.review[language]}"
                                            </p>

                                            {/* Client Info */}
                                            <div className="pt-4 border-t border-border">
                                                <p className="font-semibold text-foreground text-lg mb-1">
                                                    {review.name[language]}
                                                </p>
                                                <p className="text-primary text-sm font-medium">
                                                    {review.result[language]}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        {/* Gradient Overlays */}
                        <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} h-full w-20 bg-gradient-to-r from-card to-transparent pointer-events-none z-10`} />
                        <div className={`absolute top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-20 bg-gradient-to-l from-card to-transparent pointer-events-none z-10`} />
                    </div>
                </motion.div>

                {/* Trust Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <div className="inline-flex items-center gap-3 bg-primary/10 border border-primary/30 rounded-full px-6 py-3">
                        <div className="flex -space-x-2">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-primary text-primary"
                                />
                            ))}
                        </div>
                        <span className="text-foreground font-semibold">
                            {language === "ar"
                                ? "تقييم 5.0 من 5 نجوم من عملائنا"
                                : "Rated 5.0/5 stars by our clients"}
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ReviewsSection;
