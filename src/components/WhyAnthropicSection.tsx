import { motion } from "framer-motion";
import { CheckCircle2, Brain, Shield, FileText, Zap, Handshake, type LucideIcon } from "lucide-react";
import siteConfig from "@/lib/siteConfig";

const iconMap: Record<string, LucideIcon> = {
  Brain,
  Shield,
  FileText,
  Zap,
  Handshake,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyAnthropicSection = () => {
  return (
    <section id="why-anthropic" className="py-16 bg-secondary/50">
      <div className="container max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="section-heading">Why I'm Your Commercial Counsel</h2>
          <div className="accent-line mx-auto mt-4" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {siteConfig.fitItems.map((fi, i) => {
            const Icon = iconMap[fi.iconName] ?? Shield;
            return (
              <motion.div key={i} variants={item} className="experience-card flex flex-col justify-between min-h-[340px]">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <p className="text-sm font-semibold text-accent font-heading leading-tight">
                      {fi.label}
                    </p>
                  </div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body mb-2">
                    What Anthropic Needs
                  </p>
                  <p className="text-sm text-foreground/85 font-body leading-relaxed mb-5">
                    {fi.jobReq}
                  </p>
                  <div className="w-full h-px bg-border mb-5" />
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle2 className="w-4 h-4 text-accent" />
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground font-body">
                      What I Bring
                    </p>
                  </div>
                  <p className="text-sm text-foreground/90 font-body leading-relaxed">
                    {fi.myFit}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-border">
                  {fi.tags.map((tag) => (
                    <span key={tag} className="fit-badge">{tag}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyAnthropicSection;
