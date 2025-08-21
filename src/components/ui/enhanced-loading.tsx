import { motion } from 'framer-motion';

interface EnhancedLoadingProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars' | 'ripple';
  color?: 'primary' | 'secondary' | 'accent';
  className?: string;
}

const sizeMap = {
  sm: 'w-4 h-4',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
  xl: 'w-16 h-16',
};

const colorMap = {
  primary: 'text-brand-500',
  secondary: 'text-gray-500',
  accent: 'text-purple-500',
};

export const EnhancedLoading = ({ 
  size = 'md', 
  variant = 'spinner', 
  color = 'primary',
  className = '' 
}: EnhancedLoadingProps) => {
  const sizeClass = sizeMap[size];
  const colorClass = colorMap[color];

  const SpinnerVariant = () => (
    <motion.div
      className={`inline-block border-2 border-current border-t-transparent rounded-full ${sizeClass} ${colorClass}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  );

  const DotsVariant = () => (
    <div className={`flex space-x-1 ${colorClass}`}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-current rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );

  const PulseVariant = () => (
    <motion.div
      className={`${sizeClass} bg-current rounded-full ${colorClass}`}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
      }}
    />
  );

  const BarsVariant = () => (
    <div className={`flex items-end space-x-1 ${colorClass}`} style={{ height: size === 'sm' ? '16px' : size === 'md' ? '32px' : size === 'lg' ? '48px' : '64px' }}>
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="w-1 bg-current rounded-sm"
          animate={{
            height: ['20%', '100%', '20%'],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );

  const RippleVariant = () => (
    <div className={`relative ${sizeClass}`}>
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          className={`absolute inset-0 border-2 border-current rounded-full opacity-75 ${colorClass}`}
          animate={{
            scale: [0, 1],
            opacity: [1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 1,
          }}
        />
      ))}
    </div>
  );

  const variants = {
    spinner: SpinnerVariant,
    dots: DotsVariant,
    pulse: PulseVariant,
    bars: BarsVariant,
    ripple: RippleVariant,
  };

  const VariantComponent = variants[variant];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <VariantComponent />
    </div>
  );
};

export const LoadingScreen = ({ 
  message = 'Carregando...', 
  submessage,
  variant = 'spinner' 
}: { 
  message?: string; 
  submessage?: string;
  variant?: EnhancedLoadingProps['variant'];
}) => (
  <motion.div 
    className="fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <div className="text-center">
      <EnhancedLoading size="xl" variant={variant} />
      <motion.p 
        className="mt-4 text-lg font-medium text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {message}
      </motion.p>
      {submessage && (
        <motion.p 
          className="mt-2 text-sm text-gray-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          {submessage}
        </motion.p>
      )}
    </div>
  </motion.div>
);

export const SkeletonLoader = ({ 
  lines = 3, 
  className = '' 
}: { 
  lines?: number; 
  className?: string; 
}) => (
  <div className={`animate-pulse ${className}`}>
    {Array.from({ length: lines }).map((_, i) => (
      <div
        key={i}
        className={`bg-gray-200 rounded h-4 mb-2 ${
          i === lines - 1 ? 'w-3/4' : 'w-full'
        }`}
      />
    ))}
  </div>
);