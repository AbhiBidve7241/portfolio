// /* eslint-disable no-unused-vars */
// import React from 'react';
// import { motion } from 'framer-motion';
// import { Code2, Zap, BookOpen } from 'lucide-react';
// import { content } from '../data/content';
// import { Card, CardHeader, CardTitle, CardContent, Badge } from '../UI';
// import ShinyText from '../ShinyText';

// const SkillCategory = ({ title, skills, icon: IconComponent, accentColor }) => {
//   const colorMap = {
//     accent: "bg-white/5 text-accent",
//     secondary: "bg-white/5 text-secondary",
//   };

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center gap-2">
//          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${colorMap[accentColor]}`}>
//             <IconComponent size={18} />
//           </div>
//           {title}
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="space-y-4">
//           {skills.map((skill, index) => (
//             <div key={index}>
//               <div className="flex justify-between items-center mb-2">
//                 <span className="text-text text-sm font-medium">{skill.name}</span>
//                 {/* <span className="text-xs text-muted">{skill.level}%</span> */}
//               </div>
//               <div className="h-1.9 bg-white/10 rounded-full overflow-hidden border border-white/10 ">
//                <motion.div
//   initial={{ width: 0 }}
//   animate={{ width: `${skill.level}%` }}
//   transition={{ duration: 1.2, delay: index * 0.08, ease: "easeOut" }}
//   className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]"
// />
//               </div>
//             </div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const Skills = () => {
//   return (
//     <div className="w-full space-y-8">
//       <div>
//           <h2  className="text-3xl font-semibold mb-2">

//         <ShinyText text="Technical Skills" />
//       </h2>
//         <p className="text-muted">My toolkit for building amazing applications</p>
//       </div>

//       {/* Skill Categories */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//         >
//           <SkillCategory
//             title="Frontend"
//             icon={Code2}
//             skills={content.skills.frontend}
//             accentColor="accent"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//         >
//           <SkillCategory
//             title="Backend"
//             icon={Zap}
//             skills={content.skills.backend}
//             accentColor="secondary"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//         >
//           <SkillCategory
//             title="Tools & Platforms"
//             icon={Code2}
//             skills={content.skills.tools}
//             accentColor="accent"
//           />
//         </motion.div>
//       </div>

//       {/* Tech Stack Highlights */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4 }}
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle>Tech Stack Highlights</CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-6 gap-3">
//               {[
//                 'React.js',
//                 'Spring Boot',
//                 'Tailwind CSS',
//                 'MySQL',
//                 'Redux',
//                 'TypeScript',
//                 'Git/GitHub',
//                 'REST APIs',
//               ].map((tech, index) => (
//                 <motion.div
//                   key={tech}
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.5 + index * 0.05 }}
//                   className="group"
//                 >
//                   <div className="glass border border-white/10 rounded-lg p-3 text-center hover:border-accent/50 transition-all hover:scale-105 cursor-pointer hover:shadow-lg">
//                     <div className="font-medium text-text text-sm">
//                       {tech}
//                     </div>
//                   </div>
//                 </motion.div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>

//       {/* Continuous Learning */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.6 }}
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <BookOpen size={20} />
//               Continuous Learning
//             </CardTitle>
//           </CardHeader>
//           <CardContent>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="glass backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-accent/30 transition-all">
//                 <div className="font-semibold text-text mb-1 text-sm">
//                   Problem Solving
//                 </div>
//                 <div className="text-xs text-muted">DSA & Algorithms</div>
//               </div>
//               <div className="glass backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-accent/30 transition-all">
//                 <div className="font-semibold text-text mb-1 text-sm">
//                   Team Player
//                 </div>
//                 <div className="text-xs text-muted">Agile & Collaboration</div>
//               </div>
//               <div className="glass backdrop-blur-md border border-white/10 rounded-lg p-4 hover:border-accent/30 transition-all">
//                 <div className="font-semibold text-text mb-1 text-sm">
//                   Languages
//                 </div>
//                 <div className="text-xs text-muted">
//                   English, Hindi, Marathi
//                 </div>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </motion.div>
//     </div>
//   );
// };

// export default Skills;

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
        <div className="space-y-5">

          {skills.map((skill, index) => (
            <div key={index} className="group">

              {/* Title + % */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-text text-sm font-medium">
                  {skill.name}
                </span>
                {/* <span className="text-xs text-muted">
                  {skill.level}%
                </span> */}
              </div>

              {/* Track */}
              <div className="h-2 bg-white/10 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm">

                {/* Fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{
                    duration: 1.2,
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  className="
                    h-full rounded-full
                    bg-gradient-to-r from-indigo-500 via-cyan-400 to-purple-500
                    shadow-[0_0_10px_rgba(56,189,248,0.6)]
                    group-hover:brightness-110
                    transition-all
                  "
                />
              </div>

            </div>
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
                { title: "Languages", sub: "English, Hindi, Marathi" }
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