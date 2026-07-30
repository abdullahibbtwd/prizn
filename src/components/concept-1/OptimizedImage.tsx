import { cn } from '@/lib/utils'

interface OptimizedImageProps extends React.ComponentProps<'img'> {
  priority?: boolean
}

/** Shared image defaults to avoid scroll decode jank */
export function OptimizedImage({
  className,
  priority = false,
  alt = '',
  ...props
}: OptimizedImageProps) {
  return (
    <img
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'auto'}
      className={cn('bg-muted', className)}
      {...props}
    />
  )
}
