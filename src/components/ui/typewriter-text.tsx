import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
  cursorClassName?: string;
  infinite?: boolean;
  startDelay?: number;
}

export const TypewriterText = ({
  texts,
  speed = 100,
  deleteSpeed = 50,
  pauseDuration = 2000,
  className = '',
  cursorClassName = '',
  infinite = true,
  startDelay = 0,
}: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (startDelay > 0) {
      const startTimer = setTimeout(() => setStarted(true), startDelay);
      return () => clearTimeout(startTimer);
    } else {
      setStarted(true);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!started || texts.length === 0) return;

    const currentText = texts[currentIndex];
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(waitTimer);
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          if (infinite || currentIndex < texts.length - 1) {
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, isWaiting, texts, speed, deleteSpeed, pauseDuration, infinite, started]);

  if (!started) return null;

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayText}</span>
      <motion.span
        className={`inline-block w-0.5 h-1em bg-current ml-1 ${cursorClassName}`}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1, repeat: Infinity }}
      />
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'slideIn';
  staggerDelay?: number;
  startDelay?: number;
}

export const AnimatedText = ({
  text,
  className = '',
  animation = 'fadeInUp',
  staggerDelay = 0.02,
  startDelay = 0,
}: AnimatedTextProps) => {
  const words = text.split(' ');

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slideIn: {
      hidden: { opacity: 0, y: 50, rotate: -5 },
      visible: { opacity: 1, y: 0, rotate: 0 },
    },
  };

  return (
    <motion.span 
      className={className}
      initial=\"hidden\"
      animate=\"visible\"
      transition={{ delay: startDelay }}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={animations[animation]}
          transition={{
            duration: 0.5,
            delay: index * staggerDelay,
            ease: 'easeOut',
          }}
          className=\"inline-block mr-1\"
        >
          {word}
          {index < words.length - 1 && ' '}
        </motion.span>
      ))}
    </motion.span>
  );
};

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  startDelay?: number;
  decimals?: number;
}

export const CountUp = ({
  end,
  start = 0,
  duration = 2,
  prefix = '',
  suffix = '',
  className = '',
  startDelay = 0,
  decimals = 0,
}: CountUpProps) => {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, startDelay * 1000);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    const increment = (end - start) / (duration * 60); // 60fps
    const timer = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        return next >= end ? end : next;
      });
    }, 1000 / 60);

    const cleanup = setTimeout(() => {
      clearInterval(timer);
      setCount(end);
    }, duration * 1000);

    return () => {
      clearInterval(timer);
      clearTimeout(cleanup);
    };
  }, [end, start, duration, hasStarted]);

  const formatNumber = (num: number) => {
    return num.toFixed(decimals);
  };

  return (
    <motion.span
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={hasStarted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.5 }}
    >
      {prefix}{formatNumber(count)}{suffix}
    </motion.span>
  );
};