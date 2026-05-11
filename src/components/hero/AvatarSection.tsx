import { motion } from "motion/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export function AvatarSection() {
  const { t } = useTranslation("hero");
  
  const stats = [
    { value: "2+", label: "ans exp" },
    { value: "20+", label: "projects" },
    { value: "6", label: "ans dev" },
    { value: "10+", label: "clients" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-8 w-full">
      {/* Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
      >
        <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow [animation-duration:20s]" />
        <div className="absolute inset-3 border border-primary/10 rounded-full animate-spin-slow [animation-duration:15s] [animation-direction:reverse]" />
            
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
          <Image
            src="/static/images/tyt.png"
            alt="TITOSY"
            fill={true}
            className="object-cover"
            priority={true}
            sizes="100vh"
          />
        </div>
            
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="absolute -bottom-3 -right-3 bg-background px-4 py-2 rounded-full shadow-lg border border-border"
        >
          <span className="font-medium text-foreground">
            {t("badge")}
          </span>
        </motion.div>
      </motion.div>

      {/* Stats Section - Sans background ni carte */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-full max-w-md mx-auto"
      >
        <div className="grid grid-cols-4 gap-4 place-items-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <span className="font-bold text-2xl md:text-3xl text-foreground mb-1">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm text-muted-foreground">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}