import {makeAutoObservable} from "mobx";

type DeviceFilter = {
    id: number
    name: string
}

export type Device = {
    id: number
    name: string
    price: number
    rating: number
    img: string
}
export default class DeviceStore {
    _types: DeviceFilter[] = []
    _brands: DeviceFilter[] = []

    _devices: Device[] = []

    _selectedType : DeviceFilter | null = null

    _selectedBrand : DeviceFilter | null = null
    _page = 1
    _totalCount = 0
    _limit = 3
    constructor() {
        makeAutoObservable(this)
    }

    setTypes(types: DeviceFilter[]) {
        this._types = types
    }

    setBrands(brands: DeviceFilter[]) {
        this._brands = brands
    }

    setDevice(devices: Device[]) {
        this._devices = devices
    }

    setPage(page : number) {
        this._page = page
    }

    setTotalCount(count: number) {
        this._totalCount = count
    }

    setSelectedType(type : DeviceFilter) {
        this.setPage(1)
        this._selectedType = type
    }

    setSelectedBrand(brand : DeviceFilter) {
        this.setPage(1)
        this._selectedBrand = brand
    }

    get types() {
        return this._types
    }
    get brands() {
        return this._brands
    }
    get devices() {
        return this._devices
    }

    get selectedType() {
        return this._selectedType
    }
    get selectedBrand() {
        return this._selectedBrand
    }

    get page() {
        return this._page
    }

    get limit() {
        return this._limit
    }

    get totalCount() {
        return this._totalCount
    }
}