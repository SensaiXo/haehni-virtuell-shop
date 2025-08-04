// Image preloader utility to cache hero images
const HERO_IMAGES = [
  '/lovable-uploads/27c650dc-803c-4bfe-b036-4c741d943c2f.png', // Hero section
  '/lovable-uploads/db23dc77-42d5-4761-80c4-f53bbd9b4ee4.png', // Blog
  '/lovable-uploads/200c9247-b3a6-4bfc-b27f-fc97b5e79403.png', // FAQ
  '/lovable-uploads/23e8ae3f-344e-482e-a335-07505e623a49.png', // Kontakt
  '/lovable-uploads/845a28fa-4440-49ec-ba65-67e05a5fad14.png', // Leistungen
  '/lovable-uploads/73eba743-f722-4214-8881-25440bfe8aea.png', // OnlineBuchung
  '/lovable-uploads/1a17e213-ccfb-456d-8cff-f45a5c10da41.png', // Products
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