import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { imagePreloader } from '@/utils/imagePreloader';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showTrustBadges?: boolean;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  showTrustBadges = true,
  backgroundImage 
}) => {
  const [imageLoaded, setImageLoaded] = useState(!backgroundImage);
  
  useEffect(() => {
    if (backgroundImage) {
      // Check if image is already preloaded
      if (imagePreloader.isImageLoaded(backgroundImage)) {
        setImageLoaded(true);
      } else {
        // Load the image if not preloaded
        imagePreloader.preloadImage(backgroundImage)
          .then(() => setImageLoaded(true))
          .catch(() => {
            console.warn(`Failed to load background image: ${backgroundImage}`);
            setImageLoaded(true); // Show fallback
          });
      }
    }
  }, [backgroundImage]);

  return (
    <section 
      className="bg-[hsl(var(--light-blue-section))] py-20 relative"
      style={backgroundImage && imageLoaded ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      } : {}}
    >
      {backgroundImage && !imageLoaded && (
        <div className="absolute inset-0">
          <Skeleton className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--light-blue-section))] to-blue-100" />
          <div className="absolute inset-0 bg-[hsl(var(--light-blue-section))] opacity-80 animate-pulse" />
        </div>
      )}
      {backgroundImage && imageLoaded && (
        <div className="absolute inset-0 bg-[hsl(var(--light-blue-section))] opacity-90"></div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[hsl(var(--brand-navy))] mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {subtitle}
          </p>
        )}
        
        {showTrustBadges && (
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <span className="font-semibold text-blue-900">Modern & Digital</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <span className="font-semibold text-blue-900">Vertrauend & Sicher</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <span className="font-semibold text-blue-900">Frauenfeld, Thurgau</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200">
              <span className="font-semibold text-blue-900">Für Schweizer KMU</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PageHeader;