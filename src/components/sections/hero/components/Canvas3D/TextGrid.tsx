import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { keywords, type Keyword } from './keywords';

interface TextGridProps {
  mousePosition: { x: number; y: number };
}

const calculateGridPosition = (index: number) => {
  const rows = 5;
  const cols = Math.ceil(keywords.length / rows);
  const row = index % rows;
  const col = Math.floor(index / rows);

  const colWidth = 100 / cols;
  const rowHeight = 100 / rows;

  return {
    left: `${col * colWidth}%`,
    top: `${row * rowHeight}%`,
    width: `${colWidth}%`,
    height: `${rowHeight}%`,
    size: 1,
  };
};

export default function TextGrid({ mousePosition }: TextGridProps) {
  const [keywordPositions] = useState(() =>
    keywords.map((_, index) => calculateGridPosition(index))
  );
  const [selectedKeywords, setSelectedKeywords] = useState<Keyword[]>([]);

  const handleSelect = (word: Keyword) => {
    setSelectedKeywords(prev => {
      if (prev.includes(word)) {
        return prev.filter(k => k !== word);
      }
      
      const newSelection = [...prev, word];
      return newSelection;
    });
  };

  const findClosestText = () => {
    const mouseX = mousePosition.x;
    const mouseY = mousePosition.y;
    
    let closestIndex = 0;
    let minDistance = Infinity;

    keywordPositions.forEach((position, index) => {
      const elementX = (parseFloat(position.left) + parseFloat(position.width) / 2) * window.innerWidth / 100;
      const elementY = (parseFloat(position.top) + parseFloat(position.height) / 2) * window.innerHeight / 100;
      
      const distance = Math.sqrt(
        Math.pow(mouseX - elementX, 2) +
        Math.pow(mouseY - elementY, 2)
      );
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    return closestIndex;
  };

  const closestIndex = findClosestText();
  const selectedKey = selectedKeywords.length >= 3 
    ? selectedKeywords.sort((a, b) => a.localeCompare(b)).join('-')
    : null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {keywords.map((word, index) => {
          const position = keywordPositions[index];
          const isClosest = index === closestIndex;
          const isSelected = selectedKeywords.includes(word);

          const content = (
            <motion.div
              key={word}
              className={`absolute font-extrabold text-kiyori-text/80 dark:text-kiyori-dark-text/80 pointer-events-auto cursor-pointer flex items-center justify-center ${
                isSelected ? 'text-yellow-400 dark:text-yellow-400' : ''
              }`}
              onClick={() => handleSelect(word)}
              style={{
                left: position.left,
                top: position.top,
                width: position.width,
                height: position.height,
                transform: `scale(${isClosest ? 1.2 : 1})`,
                fontSize: 'clamp(1.5rem, 4vw, 5rem)',
                whiteSpace: 'nowrap',
                filter: isClosest ? 'blur(0px)' : 'blur(2px)',
              }}
              initial={{ opacity: 0.2 }}
              animate={{
                opacity: isClosest || isSelected ? 1 : 0.3,
              }}
              transition={{
                duration: 0.15,
                delay: index * 0.01,
                ease: 'easeOut',
              }}
            >
              {word}
            </motion.div>
          );

          return selectedKey && isSelected ? (
            <Link 
              key={word}
              href={`/tag/${encodeURIComponent(selectedKey)}`}
              className="absolute"
              style={{
                left: position.left,
                top: position.top,
                width: position.width,
                height: position.height,
              }}
            >
              {content}
            </Link>
          ) : content;
        })}
      </div>
    </div>
  );
}
