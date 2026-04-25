import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { content } from '../data/content';
import { Card, CardContent } from '../UI';
import ShinyText from '../ShinyText';

const categories = ["certificates", "events", "achievements"];

const Gallery = () => {
  const [active, setActive] = useState("certificates");

  const items = content.gallery?.[active] || [];

  return (
    <div className="w-full space-y-6">

      {/* TITLE */}
      <h2 className="text-3xl font-semibold">
        <ShinyText text="Gallery" />
      </h2>

      {/* CATEGORY TABS */}
      <div className="flex gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`
              px-4 py-1.5 rounded-full text-sm transition
              ${active === cat
                ? "bg-white/10 border border-white/20"
                : "bg-white/5 border border-white/10 hover:bg-white/10"}
            `}
          >
            {cat}
          </button>
        ))}
      </div>


      <h1 className='flex justify-center'>Will Upload Soon</h1>

      {/* GRID */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
          >
            <Card hover className="overflow-hidden">

            
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.path}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition"
                />
              </div>

             
              <CardContent className="p-2">
                <p className="text-xs text-center text-muted">
                  {item.title}
                </p>
              </CardContent>

            </Card>
          </motion.div>
        ))}

      </div> */}

    </div>
  );
};

export default Gallery;