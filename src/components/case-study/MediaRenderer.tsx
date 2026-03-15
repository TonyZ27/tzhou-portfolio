import { useState, useMemo, useRef } from 'react';
import { getAssetUrl } from '../../lib/assetUrl';

interface MediaRendererProps {
  src: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
  objectFit?: 'cover' | 'contain';
}

export function MediaRenderer({
  src,
  alt = '',
  aspectRatio,
  className = '',
  objectFit = 'contain',
}: MediaRendererProps) {
  const [error, setError] = useState(false);
  const [naturalSize, setNaturalSize] = useState<{ width: number; height: number } | null>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Apply base URL to the source path
  const resolvedSrc = useMemo(() => getAssetUrl(src), [src]);

  // Detect if the source is a video based on file extension or URL pattern
  const isVideo = useMemo(() => {
    const videoExtensions = ['.mp4', '.webm', '.mov', '.avi', '.mkv'];
    const lowerSrc = src.toLowerCase().split('?')[0]; // Remove query params for extension check
    return videoExtensions.some((ext) => lowerSrc.endsWith(ext));
  }, [src]);

  // Handle image load to get natural dimensions
  const handleImageLoad = () => {
    if (imgRef.current) {
      setNaturalSize({
        width: imgRef.current.naturalWidth,
        height: imgRef.current.naturalHeight,
      });
    }
  };

  // Handle video loaded metadata to get dimensions
  const handleVideoLoaded = () => {
    if (videoRef.current) {
      setNaturalSize({
        width: videoRef.current.videoWidth,
        height: videoRef.current.videoHeight,
      });
    }
  };

  // Calculate aspect ratio: use explicit prop, or natural size, or default to 16/9
  const computedAspectRatio = useMemo(() => {
    if (aspectRatio) return aspectRatio;
    if (naturalSize) return `${naturalSize.width}/${naturalSize.height}`;
    return '16/9';
  }, [aspectRatio, naturalSize]);

  const objectFitClass = objectFit === 'cover' ? 'object-cover' : 'object-contain';

  if (error) {
    return (
      <div
        className={`w-full bg-muted rounded-lg flex items-center justify-center ${className}`}
        style={{ aspectRatio: computedAspectRatio }}
      >
        <span className="text-muted-foreground text-sm">Failed to load media</span>
      </div>
    );
  }

  if (isVideo) {
    return (
      <div
        className={`w-full rounded-lg overflow-hidden ${className}`}
        style={{ aspectRatio: computedAspectRatio }}
      >
        <video
          ref={videoRef}
          src={resolvedSrc}
          className={`w-full h-full ${objectFitClass} bg-black`}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          crossOrigin="anonymous"
          onLoadedMetadata={handleVideoLoaded}
          onError={() => setError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`w-full rounded-lg overflow-hidden ${className}`}
      style={{ aspectRatio: computedAspectRatio }}
    >
      <img
        ref={imgRef}
        src={resolvedSrc}
        alt={alt}
        className={`w-full h-full ${objectFitClass}`}
        onLoad={handleImageLoad}
        onError={() => setError(true)}
        crossOrigin="anonymous"
      />
    </div>
  );
}
