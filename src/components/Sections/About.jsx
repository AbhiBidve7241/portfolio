/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, FileText, GraduationCap, Briefcase, Code, FolderGit2,
  ExternalLink, GitBranch, Building2, Dumbbell, ShoppingCart,
  Layers, Users, LayoutDashboard, Link as LinkIcon, Palette
} from 'lucide-react';
import { content } from '../data/content';
import { Card, Button, Badge } from '../UI';
import ShinyText from '../UI/ShinyText';
import Contact from './Contact';

const renderProjectIcon = (iconKey) => {
  switch (iconKey) {
    case 'RealEstate': return <Building2 size={18} className="text-accent" />;
    case 'Fitness': return <Dumbbell size={18} className="text-accent" />;
    case 'ECommerce': case 'Store': return <ShoppingCart size={18} className="text-accent" />;
    case 'FullStack': return <Layers size={18} className="text-accent" />;
    case 'Campus': return <Users size={18} className="text-accent" />;
    case 'Dashboard': return <LayoutDashboard size={18} className="text-accent" />;
    case 'Utility': return <LinkIcon size={18} className="text-accent" />;
    case 'UI': return <Palette size={18} className="text-accent" />;
    default: return <FolderGit2 size={18} className="text-accent" />;
  }
};

const About = ({ setActiveSection }) => {
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
        <Card className="p-6 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-background to-background/80 border-border/50 shadow-xl shadow-primary/5">
          {/* Header Section */}
          <div className="flex items-center gap-3 mb-6">
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center ring-1 ring-accent/10 shadow-lg shadow-accent/5">
                <FolderGit2 size={20} className="text-accent" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent/60 animate-pulse" />
            </div>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-text">Featured Projects</h3>
              <p className="text-xs text-muted/70 font-medium tracking-wide uppercase">Recent work</p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {content.projects.slice(0, 4).map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  if (project.live && project.live !== '#') {
                    window.open(project.live, '_blank');
                  } else if (project.github && project.github !== '#') {
                    window.open(project.github, '_blank');
                  } else if (setActiveSection) {
                    setActiveSection('projects');
                  }
                }}
                className="group relative flex items-center gap-4 p-3.5 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 dark:border-white/5 hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-accent/5 hover:-translate-y-0.5"
              >
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent/0 via-accent/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Icon with gradient background */}
                <div className="relative flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {renderProjectIcon(project.icon)}
                  <div className="absolute inset-0 rounded-lg ring-1 ring-accent/10 group-hover:ring-accent/30 transition-all" />
                </div>

                {/* Project info */}
                <div className="flex-1 min-w-0 relative z-10">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-sm font-medium text-text group-hover:text-accent transition-colors truncate">
                      {project.title}
                    </p>
                  </div>
                  <p className="text-[11px] text-muted/80 truncate mb-1">{project.category}</p>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.tech.slice(0, 2).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-medium text-muted/70 bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-full border border-black/5 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 2 && (
                      <span className="text-[10px] font-medium text-muted/50">+{project.tech.length - 2}</span>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex-shrink-0 flex items-center gap-1 relative z-20">
                  {project.live && project.live !== '#' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.live, '_blank');
                      }}
                      title="Live Demo"
                      className="p-1.5 rounded-lg hover:bg-accent/20 text-muted hover:text-accent transition-colors"
                    >
                      <ExternalLink size={15} />
                    </button>
                  )}
                  {project.github && project.github !== '#' && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        window.open(project.github, '_blank');
                      }}
                      title="View Code"
                      className="p-1.5 rounded-lg hover:bg-accent/20 text-muted hover:text-accent transition-colors"
                    >
                      <GitBranch size={15} />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* View all link */}
          <div className="mt-5 pt-4 border-t border-white/10 dark:border-white/5 flex justify-end">
            <button
              onClick={() => setActiveSection && setActiveSection('projects')}
              className="group flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors cursor-pointer"
            >
              <span>View all projects</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default About;