import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  showTrustBadges?: boolean;
}

const PageHeader: React.FC<PageHeaderProps> = ({ 
  title, 
  subtitle, 
  showTrustBadges = true 
}) => {
  return (
    <section className="bg-[hsl(var(--light-blue-section))] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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