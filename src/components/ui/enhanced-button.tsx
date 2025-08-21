import * as React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const enhancedButtonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group',
  {
    variants: {
      variant: {
        default: 'gradient-bg text-primary-foreground hover:opacity-90 shadow-lg hover:shadow-xl glow-effect-hover',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl',
        outline:
          'border border-input bg-background hover:bg-accent hover:text-accent-foreground shadow-md hover:shadow-lg',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 shadow-md hover:shadow-lg',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        gradient: 'gradient-bg text-white hover:opacity-90 shadow-lg hover:shadow-xl glow-effect-hover',
        'gradient-alt': 'gradient-bg-alt text-white hover:opacity-90 shadow-lg hover:shadow-xl glow-effect-hover',
        glass: 'glass-effect text-gray-900 hover:bg-white/20 backdrop-blur-xl border border-white/30',
        neumorphism: 'neumorphism text-gray-900 hover:shadow-neumorphism-inset transition-shadow duration-300',
        shine: 'bg-gradient-to-r from-brand-500 to-purple-500 text-white relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        xl: 'h-14 rounded-lg px-10 text-lg',
        icon: 'h-10 w-10',
      },
      animation: {
        none: '',
        bounce: 'hover:animate-bounce-soft',
        pulse: 'hover:animate-pulse-glow',
        float: 'animate-float',
        shimmer: 'animate-shimmer'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      animation: 'none'
    },
  }
);

export interface EnhancedButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'size'>,
    VariantProps<typeof enhancedButtonVariants> {
  asChild?: boolean;
  ripple?: boolean;
  glow?: boolean;
  particles?: boolean;
}

const EnhancedButton = React.forwardRef<HTMLButtonElement, EnhancedButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    animation, 
    asChild = false, 
    ripple = false,
    glow = false,
    particles = false,
    children,
    onClick,
    ...props 
  }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ id: number; x: number; y: number }>>([]);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && event.currentTarget) {
        const rect = event.currentTarget.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const newRipple = {
          id: Date.now(),
          x,
          y
        };

        setRipples(prev => [...prev, newRipple]);

        setTimeout(() => {
          setRipples(prev => prev.filter(r => r.id !== newRipple.id));
        }, 600);
      }

      onClick?.(event);
    };

    const Comp = asChild ? Slot : motion.button;

    const motionProps = asChild ? {} : {
      whileHover: { 
        scale: 1.02,
        y: -1,
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      },
      whileTap: { 
        scale: 0.98,
        transition: { type: 'spring', stiffness: 400, damping: 10 }
      },
      initial: { opacity: 0, y: 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.3 }
    };

    return (
      <Comp
        className={cn(enhancedButtonVariants({ variant, size, animation, className }))}
        ref={ref}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...motionProps}
        {...props}
      >
        {/* Background animations */}
        {!asChild && (
          <>
            {/* Hover glow effect */}
            {glow && (
              <motion.div
                className=\"absolute inset-0 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-md opacity-0\"
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            )}

            {/* Shine effect */}
            {variant === 'shine' && (
              <motion.div
                className=\"absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full\"
                animate={{ translateX: isHovered ? '200%' : '-100%' }}
                transition={{ duration: 0.6 }}
              />
            )}

            {/* Particles effect */}
            {particles && isHovered && (
              <div className=\"absolute inset-0 pointer-events-none\">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className=\"absolute w-1 h-1 bg-white rounded-full\"
                    initial={{ 
                      x: '50%', 
                      y: '50%', 
                      scale: 0, 
                      opacity: 0 
                    }}
                    animate={{
                      x: `${50 + (Math.random() - 0.5) * 100}%`,
                      y: `${50 + (Math.random() - 0.5) * 100}%`,
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 1, 
                      delay: i * 0.1,
                      repeat: Infinity,
                      repeatDelay: 2
                    }}
                  />
                ))}
              </div>
            )}

            {/* Ripple effect */}
            {ripple && ripples.map(ripple => (
              <motion.span
                key={ripple.id}
                className=\"absolute bg-white/30 rounded-full pointer-events-none\"
                initial={{ 
                  width: 0, 
                  height: 0, 
                  opacity: 0.5,
                  x: ripple.x,
                  y: ripple.y
                }}
                animate={{ 
                  width: 300, 
                  height: 300, 
                  opacity: 0,
                  x: ripple.x - 150,
                  y: ripple.y - 150
                }}
                transition={{ duration: 0.6 }}
              />
            ))}
          </>
        )}

        <span className=\"relative z-10 flex items-center gap-2\">
          {children}
        </span>
      </Comp>
    );
  }
);

EnhancedButton.displayName = 'EnhancedButton';

export { EnhancedButton, enhancedButtonVariants };