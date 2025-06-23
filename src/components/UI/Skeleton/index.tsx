interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
  width?: string | number;
  height?: string | number;
  animation?: 'pulse' | 'wave' | 'none';
}

export default function Skeleton({ 
  className = '', 
  variant = 'text',
  width,
  height,
  animation = 'pulse' 
}: SkeletonProps) {
  const baseClasses = 'bg-gray-200';
  
  const variantClasses = {
    text: 'rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg'
  };

  const animationClasses = {
    pulse: 'animate-pulse',
    wave: 'animate-shimmer',
    none: ''
  };

  const defaultDimensions = {
    text: { height: '1em', width: '100%' },
    circular: { height: '40px', width: '40px' },
    rectangular: { height: '100px', width: '100%' }
  };

  const styles = {
    width: width || defaultDimensions[variant].width,
    height: height || defaultDimensions[variant].height
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]} ${animationClasses[animation]} ${className}`.trim()}
      style={styles}
      aria-hidden="true"
    />
  );
} 