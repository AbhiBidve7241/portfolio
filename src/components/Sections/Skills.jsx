/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, BookOpen } from 'lucide-react';
import { content } from '../data/content';
import { Card, CardHeader, CardTitle, CardContent } from '../UI';
import ShinyText from '../ShinyText';

/* ================= SKILL CATEGORY ================= */

const SkillCategory = ({ title, skills, icon: IconComponent }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-accent shadow-inner">
            <IconComponent size={18} />
          </div>
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2.5">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="
                glass rounded-xl px-3.5 py-2
                border border-white/10
                backdrop-blur-md
                hover:border-cyan-400/40
                hover:scale-105
                transition-all cursor-pointer
              "
            >
              <span className="text-sm text-text font-medium">
                {skill.name}
              </span>
            </motion.div>
          ))}

        </div>
      </CardContent>
    </Card>
  );
};

/* ================= MAIN COMPONENT ================= */

const Skills = () => {
  return (
    <div className="w-full space-y-10">

      {/* Header */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          <ShinyText text="Technical Skills" />
        </h2>
        <p className="text-muted">
          My toolkit for building modern, scalable applications
        </p>
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SkillCategory
            title="Frontend"
            icon={Code2}
            skills={content.skills.frontend}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SkillCategory
            title="Backend"
            icon={Zap}
            skills={content.skills.backend}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <SkillCategory
            title="Tools & Platforms"
            icon={Code2}
            skills={content.skills.tools}
          />
        </motion.div>

      </div>

      {/* Tech Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Tech Stack Highlights</CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">

              {[
                'React.js',
                'Spring Boot',
                'Tailwind CSS',
                'MySQL',
                'Redux',
                'TypeScript',
                'Git/GitHub',
                'REST APIs',
              ].map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="
                    glass rounded-xl p-3 text-center
                    border border-white/10
                    hover:border-cyan-400/40
                    hover:scale-105
                    transition-all cursor-pointer
                  ">
                    <span className="text-sm text-text font-medium">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}

            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Learning */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen size={18} />
              Continuous Learning
            </CardTitle>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

              {[
                { title: "Problem Solving", sub: "DSA & Algorithms" },
                { title: "Team Player", sub: "Agile & Collaboration" },
                { title: "Languages", sub: "English, Hindi, Marathi,German(Conversational)" }
              ].map((item, i) => (
                <div
                  key={i}
                  className="
                    glass rounded-xl p-4
                    border border-white/10
                    hover:border-cyan-400/30
                    transition-all
                  "
                >
                  <div className="text-sm font-semibold text-text">
                    {item.title}
                  </div>
                  <div className="text-xs text-muted">
                    {item.sub}
                  </div>
                </div>
              ))}

            </div>
          </CardContent>
        </Card>
      </motion.div>

    </div>
  );
};

export default Skills;