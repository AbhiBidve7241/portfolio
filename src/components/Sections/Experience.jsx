/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award } from 'lucide-react';
import { content } from '../data/content';
import { Card, Badge, Button } from '../UI';
import ShinyText from '../UI/ShinyText';

const Experience = () => {
  const getBadgeVariant = (type) => {
    switch (type) {
      case 'Full-time':
        return 'success';
      case 'Internship':
        return 'accent';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="w-full space-y-12">

      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          <ShinyText text="Professional Journey" />
        </h2>
        <p className="text-muted">
          A timeline of my growth and experience
        </p>
      </div>

      {/* TIMELINE WRAPPER */}
      <div className="relative w-full">

        {/* LINE (overlay — does NOT affect width) */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10" />

        <div className="space-y-10 w-full">

          {content.experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="relative w-full"
            >

              {/* DOT */}
              <div className="absolute left-3 top-6 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-lg z-10">
                <Briefcase size={12} className="text-white" />
              </div>

              {/* CARD (full width restored) */}
              <div className="w-full pl-14">
                <Card hover className="p-6 w-full">

                  {/* HEADER */}
                  <div className="flex flex-col md:flex-row md:justify-between gap-2 mb-3">

                    <div>
                      <h3 className="text-lg font-semibold">
                        {exp.role}
                      </h3>
                      <p className="text-accent text-sm font-medium">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="default" size="sm" className="flex items-center gap-1">
                        <Calendar size={12} />
                        {exp.duration}
                      </Badge>
                      <Badge variant={getBadgeVariant(exp.type)} size="sm">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  {/* ACHIEVEMENTS */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-3 text-sm text-muted">
                        <span className="text-accent mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                </Card>
              </div>

            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="text-center  w-full">
          <Award className="w-8 h-8 text-accent mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Interested in working together?
          </h3>
          <p className="text-muted mb-6 text-sm">
            Let’s build something amazing!
          </p>
          <Button
            variant="primary"
            onClick={() => window.location.href = `mailto:${content.personal.email}`}
          >
            Get in Touch
          </Button>
        </Card>
      </motion.div>

    </div>
  );
};

export default Experience;