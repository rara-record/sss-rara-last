export interface Wedding {
  id: number
  date: string
  location: Location
  groom: Person & { parents: Person[] }
  bride: Person & { parents: Person[] }
  message: {
    intro: string
    invitation: string
  }
  galleryImages: string[]
  hallImages: string[]
  attendCount: number
}

export interface Location {
  lat: number
  lng: number
  name: string
  address: string
  kakao_link: string
  naver_link: string
  waytocome: {
    metro: string[]
    bus: string[]
    car: string[]
  }
}

export interface Person {
  name: string
  account: Account
  phoneNumber?: string
}

export interface Account {
  bankName: string
  accountNumber: string
  kakaopayLink?: string
}
