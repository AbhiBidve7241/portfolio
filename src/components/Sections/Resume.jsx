import React from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, Star } from 'lucide-react';
import { content } from '../data/content';
import { Card, CardHeader, CardTitle, CardContent, Button, Badge } from '../UI';
import ShinyText from '../ShinyText';

const Resume = () => {
  return (
    <div className="w-full space-y-8">
      <div>
          <h2  className="text-3xl font-semibold mb-2">

        <ShinyText text="Resume" />
      </h2>
        <p className="text-muted">Download my complete resume or view details below</p>
      </div>

      {/* Download Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Card className="text-center">
          <Download className="w-10 h-10 text-accent mx-auto mb-4"
          onClick={() => window.open("https://drive.google.com/file/d/1XkvudQz5_aK5j3lq02-lKiLj6ukS7erI/view?usp=sharing", "_blank")} />
          <h3 className="text-2xl font-semibold text-text mb-2">Download Full Resume</h3>
          <p className="text-muted mb-6 text-sm">Get the complete PDF version of my resume</p>
                </Card>
      </motion.div>

      {/* Quick Summary Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Personal Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xs">
                  •
                </div>
                <a
                  href={`mailto:${content.personal.email}`}
                  className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm break-all"
                >
                  {content.personal.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xs">
                  •
                </div>
                <a
                  href={`tel:${content.personal.phone}`}
                  className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm"
                >
                  {content.personal.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xs">
                  •
                </div>
                <span className="text-muted text-sm">{content.personal.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xs">
                  •
                </div>
                <a
                  href={content.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm"
                >
                  LinkedIn Profile
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-accent-primary/20 flex items-center justify-center text-accent-primary text-xs">
                  •
                </div>
                <a
                  href={content.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-primary/80 transition-colors text-sm"
                >
                  GitHub Profile
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
                <span className="text-muted text-sm">Total Projects</span>
                <span className="text-xl font-semibold text-accent">
                  {content.stats.projects}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
                <span className="text-muted text-sm">Experience</span>
                <span className="text-xl font-semibold text-accent-secondary">
                  {content.stats.experience}
                </span>
              </div>
              <div className="flex justify-between items-center p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg">
                <span className="text-muted text-sm">Technologies</span>
                <span className="text-xl font-semibold text-accent-accent">
                  {content.stats.techStack}
                </span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Core Competencies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Star size={20} />
              Core Competencies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                'Full-Stack Web Development',
                'React.js & Modern Frontend',
                'Spring Boot & REST APIs',
                'Database Design (MySQL, MongoDB)',
                'Responsive UI/UX Design',
                'Version Control (Git/GitHub)',
                'Agile Methodology',
                'Problem Solving & Algorithms',
              ].map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 text-sm"
                >
                  <CheckCircle size={16} className="text-accent-primary flex-shrink-0" />
                  <span className="text-text">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Education Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Education</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {content.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-accent-primary/30 pl-4 pb-4 last:pb-0">
                <div className="flex justify-between items-start mb-1 gap-2">
                  <h4 className="font-semibold text-text text-sm">{edu.degree}</h4>
                  {edu.status && <Badge variant="success" size="sm">{edu.status}</Badge>}
                </div>
                <p className="text-muted text-sm mb-2">{edu.institution}</p>
                <div className="flex items-center gap-2 text-xs text-muted">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.duration}</span>
                  {edu.cgpa && (
                    <>
                      <span>•</span>
                      <span>CGPA: {edu.cgpa}</span>
                    </>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Resume;

