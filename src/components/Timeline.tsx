"use client";

import { motion } from "framer-motion";
import { CardInfo } from "./timeline/CardInfo";
import { useTranslation } from "react-i18next";

export interface TimelineItem {
  id: number
  date: string
  title: string
  company: string
  description: string
  tags: string[]
}

export default function Timeline() {

  const {t} = useTranslation("timeline");

  const timelineData: TimelineItem[] = [
    {
      id: 4,
      date: t("pr-4.date"),
      title: t("pr-4.title"),
      company: t("pr-4.company"),
      description: t("pr-4.description"),
      tags: ["Next.js", "React Native", "API REST", "SQL"],
    },
    {
      id: 3,
      date: t("pr-3.date"),
      title: t("pr-3.title"),
      company: t("pr-3.company"),
      description: t("pr-3.description"),
      tags: ["WordPress", "PHP", "SEO", "Performance"],
    },
    {
      id: 2,
      date: t("pr-2.date"),
      title: t("pr-2.title"),
      company: t("pr-2.company"),
      description: t("pr-2.description"),
      tags: ["PHP", "MySQL", "PDF/Excel", "Architecture"],
    },
    {
      id: 1,
      date: t("pr-1.date"),
      title: t("pr-1.title"),
      company: t("pr-1.company"),
      description: t("pr-1.description"),
      tags: ["CodeIgniter", "PHP", "MySQL", "React Native"],
    },
  ];

  return (
    <section id="timeline" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("section")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("description")}
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <CardInfo key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}