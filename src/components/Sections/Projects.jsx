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
            // FIX: motion.div must be a flex column to pass full height down
            className="flex flex-col h-full"
          >
            {/* FIX: Card takes up all available flex space */}
            <Card hover className="flex-1 w-full flex flex-col">
              
              <CardContent className="flex-1 flex flex-col">
                {/* TITLE */}
                <h3 className="text-lg font-semibold mb-2 break-words">
                  {project.title}
                </h3>

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
                <div className="flex-1">
                  <h4 className="text-xs font-semibold mb-2 tracking-wider text-muted/80">
                    KEY FEATURES
                  </h4>
                  <ul className="space-y-1.5">
                    {(project.features || []).map((f, i) => (
                      <li key={i} className="text-xs text-muted flex gap-2">
                        <span className="text-primary/70">→</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>

              {/* FOOTER - mt-auto pushes this to the very bottom */}
              <CardFooter className="mt-auto flex gap-3 pt-6">
                <Button
                  variant="primary"
                  size="sm"
                  className="flex-1"
                  onClick={() => project.live && window.open(project.live, '_blank')}
                  disabled={!project.live}
                >
                  <ExternalLink size={14} />
                  <span>Live</span>
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() => project.github && window.open(project.github, '_blank')}
                  disabled={!project.github}
                >
                  <GitBranch size={14} />
                  <span>Code</span>
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