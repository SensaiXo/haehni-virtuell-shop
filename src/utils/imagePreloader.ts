// Image preloader utility to cache hero images
const HERO_IMAGES = [
  '/lovable-uploads/27c650dc-803c-4bfe-b036-4c741d943c2f.png', // Hero section
  '/lovable-uploads/1d7333e6-37e8-46cb-abb7-4c2063b0f495.png', // Blog
  '/lovable-uploads/200c9247-b3a6-4bfc-b27f-fc97b5e79403.png', // FAQ
  '/lovable-uploads/23e8ae3f-344e-482e-a335-07505e623a49.png', // Kontakt
  '/lovable-uploads/7df6ba86-a38f-48f6-a022-6a56ea8eb903.png', // Leistungen
  '/lovable-uploads/73eba743-f722-4214-8881-25440bfe8aea.png', // OnlineBuchung
  '/lovable-uploads/3204ae9f-c523-4852-8270-5db4e7cd7011.png', // Products
  '/lovable-uploads/5b0d7e19-7ad1-4277-a038-198acddd3197.png', // UeberUns
];

class ImagePreloader {
  private loadedImages = new Set<string>();
  private loadingPromises = new Map<string, Promise<void>>();

  preloadImage(src: string): Promise<void> {
    // Return immediately if already loaded
    if (this.loadedImages.has(src)) {
      return Promise.resolve();
    }

    // Return existing promise if already loading
    if (this.loadingPromises.has(src)) {
      return this.loadingPromises.get(src)!;
    }

    const promise = new Promise<void>((resolve, reject) => {
      const img = new Image();
      
      img.onload = () => {
        this.loadedImages.add(src);
        this.loadingPromises.delete(src);
        resolve();
      };
      
      img.onerror = () => {
        this.loadingPromises.delete(src);
        reject(new Error(`Failed to load image: ${src}`));
      };
      
      img.src = src;
    });

    this.loadingPromises.set(src, promise);
    return promise;
  }

  preloadAllHeroImages(): Promise<void[]> {
    return Promise.allSettled(
      HERO_IMAGES.map(src => this.preloadImage(src))
    ).then(() => []);
  }

  isImageLoaded(src: string): boolean {
    return this.loadedImages.has(src);
  }
}

export const imagePreloader = new ImagePreloader();