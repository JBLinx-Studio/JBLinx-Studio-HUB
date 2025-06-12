
declare global {
  interface Window {
    xProductBrowser: (...args: string[]) => void;
    Ecwid?: {
      OnAPILoaded?: () => void;
      OnPageLoaded?: () => void;
      destroy?: () => void;
      getOwnerId?: () => number;
    };
  }
}

export interface EcwidConfig {
  categoriesPerRow?: number;
  views?: string;
  categoryView?: 'grid' | 'list' | 'table';
  searchView?: 'grid' | 'list' | 'table';
  id: string;
  showCategories?: 'Y' | 'N';
  showDescription?: 'Y' | 'N';
  showPrice?: 'Y' | 'N';
  showPriceOnButton?: 'Y' | 'N';
  showOptionsPanel?: 'Y' | 'N';
  showProductBrowser?: 'Y' | 'N';
  showSearchBox?: 'Y' | 'N';
  enableCenterMode?: 'Y' | 'N';
}

export {}
