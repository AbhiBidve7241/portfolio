import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, GitBranch } from 'lucide-react';
import { content } from '../data/content';
import { Card, CardContent, CardFooter, Badge, Button } from '../UI';
import ShinyText from '../ShinyText';

const Projects = () => {
  return (
    <div className="w-full space-y-8">
      {/* HEADER */}
      <div>
        <h2 className="text-3xl font-semibold mb-2">
          <ShinyText text="Featured Projects" />
        </h2>

        <p className="text-muted">
          Building modern, scalable applications with cutting-edge technologies
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {content.projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.08 }}
            className="h-full"
          >
            <Card
              hover
              className="h-full flex flex-col"
            >
              <CardContent className="flex-1 flex flex-col">

                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className='text-muted mb-4'>{project.category}</p>

                {/* DESCRIPTION */}
                <p className="text-muted text-sm mb-4">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {(project.tech || []).map((tech, i) => (
                    <Badge key={i}>{tech}</Badge>
                  ))}
                </div>

                {/* FEATURES */}
                <div>
                  <h4 className="text-xs font-semibold mb-2 tracking-wider text-muted/80">
                    KEY FEATURES
                  </h4>

                  <ul className="space-y-1.5">
                    {(project.features || []).map((f, i) => (
                      <li
                        key={i}
                        className="text-xs text-muted flex gap-2"
                      >
                        <span className="text-primary/70">→</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </CardContent>

              {/* ALWAYS AT BOTTOM */}
              <CardFooter className="mt-auto">
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={() =>
                    project.live && window.open(project.live, '_blank')
                  }
                  disabled={!project.live}
                >
                  <ExternalLink size={14} />
                  Live
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() =>
                    project.github &&
                    window.open(project.github, '_blank')
                  }
                  disabled={!project.github}
                >
                  <GitBranch size={14} />
                  Code
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;