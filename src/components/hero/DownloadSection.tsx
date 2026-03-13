import { motion } from "motion/react";
import { Button } from "../ui/button";
import { ArrowRight, Download, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export function DownloadSection() {

  const {t} = useTranslation("hero");

  return(
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
    >
      <a
        href="https://drive.google.com/file/d/1-DHqAfBQ5PiNr8UlyZ-8Q8V_8XY5kpW-/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" className="rounded-full group">
          {t("download")}
          <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
        </Button>
      </a>
      
      <a
        href="https://github.com/Titosy-fit"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button size="lg" variant="outline" className="rounded-full group">
          <Github className="ml-2 h-4 w-4" />
          {t("code")}
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </a>

    </motion.div>
  );
}