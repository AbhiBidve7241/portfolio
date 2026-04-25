/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileText, GraduationCap, Briefcase, Code, FolderGit2 } from 'lucide-react';
import { content } from '../data/content';
import { Card, Button, Badge } from '../UI';
import ShinyText from '../UI/ShinyText';
import Contact from './Contact';

const About = () => {
  return (
    <div className="w-full space-y-8">

      {/* ================= HEADER ================= */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          <ShinyText text="About Me" />
        </h2>
        <p className="text-muted text-sm">
          A quick overview of my journey, skills, and work
        </p>
      </div>

      {/* ================= PROFILE ================= */}
      <Card className="p-6 hover:shadow-xl transition-all">
        <div className="flex flex-col md:flex-row gap-6">

          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
              <img 
              src="/PP.jpeg" 
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover border border-border"
            />
            </div>
          </div>

          {/* Info */}
          <div className="flex-1">
            <h3 className="text-2xl font-semibold mb-1">
              {content.personal.name} 
            </h3>

            <p className="text-muted text-sm mb-3">
              {content.personal.title}
            </p>

            <p className="text-sm text-text leading-relaxed mb-5">
              {content.about.intro}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
          <Button
  variant="primary"
  onClick={() => window.location.href = "mailto:abhishekbidwe123@gmail.com"}
>
  Contact Me
</Button>

              <Button variant="secondary"
              onClick={() => window.open("https://drive.google.com/file/d/1XkvudQz5_aK5j3lq02-lKiLj6ukS7erI/view?usp=sharing", "_blank")}>
                <FileText size={16} />
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </Card>

      {/* ================= GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* EDUCATION */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <GraduationCap size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-text">Education</h3>
          </div>

          <div className="space-y-4">
            {content.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-accent/50 pl-4">
                <h4 className="text-sm font-medium">{edu.degree}</h4>
                <p className="text-xs text-muted">{edu.institution}</p>
                <p className="text-xs text-muted">{edu.duration}</p>

                <div className="flex gap-2 mt-1">
                  {edu.cgpa && (
                    <Badge variant="primary">CGPA: {edu.cgpa}</Badge>
                  )}
                  {edu.status && (
                    <Badge variant="accent">{edu.status}</Badge>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* EXPERIENCE */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Briefcase size={20} className="text-accent" />
            </div>
            <h3 className="font-semibold text-text">Experience</h3>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted">Total</span>
              <span className="font-medium">{content.stats.experience}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted">Projects</span>
              <span className="font-medium">{content.stats.projects}</span>
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-muted">Tech Stack</span>
              <span className="font-medium">{content.stats.techStack}</span>
            </div>
          </div>
        </Card>

        {/* SKILLS */}
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Code size={20} className="text-primary" />
            </div>
            <h3 className="font-semibold text-text">Core Skills</h3>
          </div>

         <div className="flex flex-wrap gap-2">

  {[
    ...content.skills.frontend.slice(0, 4),
    ...content.skills.backend.slice(0, 4),
    ...content.skills.tools.slice(0, 2)
  ].map((skill, i) => (
    <Badge
      key={i}
      className="bg-white/5 border border-white/10 hover:border-cyan-400/40 transition"
    >
      {skill.name}
    </Badge>
  ))}

</div>
        </Card>

        {/* PROJECTS */}
        <Card className="p-6 md:col-span-2 lg:col-span-3">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <FolderGit2 size={20} className="text-accent" />
            </div>
            <h3 className="font-semibold text-text">Featured Projects</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {content.projects.slice(0, 4).map((project, i) => (
              <div key={i} className="flex gap-3 items-center glass border border-white/10 rounded-lg p-3 hover:border-accent/30 transition-all">
                <div className="text-xl">{project.icon}</div>
                <div>
                  <p className="text-sm font-medium">{project.title}</p>
                  <p className="text-xs text-muted">
                    {project.tech.slice(0, 2).join(', ')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default About;