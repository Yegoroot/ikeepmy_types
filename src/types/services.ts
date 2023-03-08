import { Coords } from "./common"
import { Roles } from "./user"

// INFO الخاصة
export interface WasherCarUserData {
  haveCar: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
}

// INFO الخاصة
export interface DeleverUserData {
  haveTruck: boolean // هل عندك شاحنة نقل السيارات؟ نعم لا
  truckPlateNumber: string // رقم  لوحة  الشاحنة 
}


// ---------------------------------------------------
// ---------------------------------------------------

// SERVICES

interface DeleveryService {
  datetime: string
  coords: Coords
}

export interface WashingCarService {
  datetime: string
  coords: Coords
  countCar: number
}

export interface CleaningType {
  cleaningType?: 'standart' | 'package' | 'deep'
  role: Roles.PLACE_DEEP_CLEANING | Roles.PLACE_STANDART_CLEANING | Roles.WASHER_CAR
}

export interface CleaningService extends CleaningType {
  package?: 'week' | 'month' | undefined // пакет мойка
  numberCleaners?: number
  furniture?: boolean
  premise: string // flat 2rooms, willa 3 rooms and so
  coords: Coords
  datetime: string,
}

export interface ServicesMap {
  [Roles.DELEVER]: DeleveryService
  [Roles.WASHER_CAR]: WashingCarService
  [Roles.PLACE_DEEP_CLEANING]: CleaningService
  [Roles.PLACE_STANDART_CLEANING]: CleaningService
}
export type ServiceWorkRoles = 
  Roles.DELEVER | 
  Roles.WASHER_CAR | 
  Roles.PLACE_DEEP_CLEANING | 
  Roles.PLACE_STANDART_CLEANING

  export const workerRoles = [
    Roles.COMPANY, 
    Roles.DELEVER, 
    Roles.PLACE_DEEP_CLEANING, 
    Roles.PLACE_STANDART_CLEANING, 
    Roles.WASHER_CAR
  ]

// ---------------------------------------------------
// ---------------------------------------------------