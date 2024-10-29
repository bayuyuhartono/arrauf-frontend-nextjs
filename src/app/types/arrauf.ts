export interface Arrauf {
    success: boolean
    message: string
    data: Data
  }
  
  export interface Data {
    wallpaper: Wallpaper
    quote: Quote
    motto: Motto[]
    benefit: Benefit[]
    ppdb: Ppdb
    testimoni: Testimoni[]
    schoolactivity: Schoolactivity[]
    ekstrakulikuler: Ekstrakulikuler[]
  }
  
  export interface Wallpaper {
    wallpaper_text: string
    wallpaper_image: string
  }
  
  export interface Quote {
    quote: string
    quote_sub: string
  }
  
  export interface Motto {
    title: string
    description: string
  }
  
  export interface Benefit {
    title: string
    point: string
  }
  
  export interface Ppdb {
    text: string
    link: string
    is_active: number
  }
  
  export interface Testimoni {
    name: string
    description: string
  }
  
  export interface Schoolactivity {
    id: number
    uuid: string
    type: string
    sequence: number
    caption: string
    image: string
    updated_at: string
    updated_by: any
  }
  
  export interface Ekstrakulikuler {
    id: number
    uuid: string
    type: string
    sequence: number
    caption: string
    image: string
    updated_at: string
    updated_by: any
  }
  