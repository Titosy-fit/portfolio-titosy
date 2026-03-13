import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const fullName = "RAKOTOMANGA Titosy Fitia";

function useTypewriter(text: string, typeSpeed: number = 80, eraseSpeed: number = 40, pauseAfterType: number = 2000, pauseAfterErase: number = 1000) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loop() {
      while (!cancelled) {
        // Type forward
        for (let i = 0; i <= text.length; i++) {
          if (cancelled) return;
          setDisplayed(text.slice(0, i));
          await new Promise(r => setTimeout(r, typeSpeed));
        }
        // Pause after typing
        await new Promise(r => setTimeout(r, pauseAfterType));

        // Erase backward
        for (let i = text.length; i >= 0; i--) {
          if (cancelled) return;
          setDisplayed(text.slice(0, i));
          await new Promise(r => setTimeout(r, eraseSpeed));
        }
        // Pause after erasing
        await new Promise(r => setTimeout(r, pauseAfterErase));
      }
    }

    loop();
    return () => { cancelled = true; };
  }, [text, typeSpeed, eraseSpeed, pauseAfterType, pauseAfterErase]);

  return { displayed };
}

export function Info() {
  const { t } = useTranslation("hero");
  const { displayed } = useTypewriter(fullName);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
          {t("hello")}
        </span>
      </motion.div>

      <motion.h1
        id="main-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className=" text-4xl md:text-6xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          {displayed}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent"
          >
            |
          </motion.span>
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
      >
        {t("description")}
      </motion.p>
    </>
  );
}