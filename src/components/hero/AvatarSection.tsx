// import { motion } from "motion/react";
// import Image from "next/image";
// import { useTranslation } from "react-i18next";

// export function AvatarSection() {
//   const { t } = useTranslation("hero");
  
//   const stats = [
//     { value: "2+", label: "ans exp" },
//     { value: "20+", label: "projects" },
//     { value: "6", label: "ans dev" },
//     { value: "10+", label: "clients" },
//   ];

//   return (
//     <div className="flex flex-col items-center justify-center gap-8 w-full">
//       {/* Avatar */}
//       <motion.div
//         initial={{ opacity: 0, scale: 0.8 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//         className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
//       >
//         <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-spin-slow [animation-duration:20s]" />
//         <div className="absolute inset-3 border border-primary/10 rounded-full animate-spin-slow [animation-duration:15s] [animation-direction:reverse]" />
            
//         <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
//           <Image
//             src="/static/images/tyt.png"
//             alt="TITOSY"
//             fill={true}
//             className="object-cover"
//             priority={true}
//             sizes="100vh"
//           />
//         </div>
            
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//           className="absolute -bottom-3 -right-3 bg-background px-4 py-2 rounded-full shadow-lg border border-border"
//         >
//           <span className="font-medium text-foreground">
//             {t("badge")}
//           </span>
//         </motion.div>
//       </motion.div>

//       {/* Stats Section - Sans background ni carte */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.8 }}
//         className="w-full max-w-md mx-auto"
//       >
//         <div className="grid grid-cols-4 gap-4 place-items-center">
//           {stats.map((stat, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
//               className="flex flex-col items-center text-center"
//             >
//               <span className="font-bold text-2xl md:text-3xl text-foreground mb-1">
//                 {stat.value}
//               </span>
//               <span className="text-xs md:text-sm text-muted-foreground">
//                 {stat.label}
//               </span>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }import { motion } from "motion/react";
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
    <div className="flex flex-col items-center justify-center gap-12 w-full">
      {/* Avatar avec design géométrique */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="relative"
      >
        {/* Forme géométrique en background */}
        <div className="absolute -inset-8 md:-inset-12">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full h-full"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary/40 rounded-full blur-sm" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary/30 rounded-full blur-sm" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-primary/30 rounded-full blur-sm" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary/40 rounded-full blur-sm" />
          </motion.div>
        </div>

        {/* Container principal */}
        <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* Bordure découpée */}
          <svg
            className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]"
            viewBox="0 0 100 100"
          >
            <motion.circle
              cx="50"
              cy="50"
              r="48"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/20"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              strokeDasharray="4 4"
            />
          </svg>

          {/* Image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/static/images/tyt.png"
              alt="TITOSY"
              fill={true}
              className="object-cover"
              priority={true}
              sizes="(max-width: 768px) 14rem, (max-width: 1024px) 18rem, 20rem"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </motion.div>
        </div>

        {/* Badge flottant */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute -bottom-2 -left-2 bg-background border border-border rounded-2xl px-4 py-2 shadow-lg"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium">{t("badge")}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Stats - Style compteur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="w-full max-w-lg mx-auto"
      >
        <div className="flex items-center justify-center gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.4 + index * 0.15 }}
              className="flex-1 flex flex-col items-center"
            >
              <motion.span
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.8 + index * 0.15,
                  type: "spring",
                  stiffness: 200
                }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent"
              >
                {stat.value}
              </motion.span>
              <span className="text-xs md:text-sm text-muted-foreground mt-1.5 uppercase tracking-wider font-medium">
                {stat.label}
              </span>
              
              {/* Séparateur */}
              {index < stats.length - 1 && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-border hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ligne décorative */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
        className="w-24 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
      />
    </div>
  );
}