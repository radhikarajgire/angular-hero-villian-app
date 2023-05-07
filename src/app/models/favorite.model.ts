export interface Favorite {
    id: number;
    name: string;
    description: string;
    images: Images
  }
  export interface Images {
    lg: string
    md: string
    sm: string
    xs: string
  }