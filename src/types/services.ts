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

interface WashingCarService {
  datetime: string
  coords: Coords
  countCar: number
}

interface WashingBuildService {
  datetime: string
  coords: Coords
}

export interface ServicesMap {
  [Roles.DELEVER]: DeleveryService
  [Roles.WASHER_CAR]: WashingCarService
  [Roles.WASHER_BUILD_PACKAGE]: WashingBuildService
  [Roles.WASHER_BUILD_STANDART]: WashingBuildService
}
export type ServiceWorkRoles = 
  Roles.DELEVER | 
  Roles.WASHER_CAR | 
  Roles.WASHER_BUILD_PACKAGE | 
  Roles.WASHER_BUILD_STANDART

  export const workerRoles = [
    Roles.COMPANY, 
    Roles.DELEVER, 
    Roles.WASHER_BUILD_PACKAGE, 
    Roles.WASHER_BUILD_STANDART, 
    Roles.WASHER_CAR
  ]

// ---------------------------------------------------
// ---------------------------------------------------