import {api, apiAuth} from "@/http";



export const createType = async ( name: string) => {
    const {data} = await apiAuth.post('api/type', {name})
    return data
}

export const fetchTypes = async () => {
    const {data} = await api.get('api/type')
    return data
}


export const createBrand = async (name: string) => {
    const {data} = await apiAuth.post('api/brand', {name})
    return data
}

export const fetchBrands = async () => {
    const {data} = await api.get('api/brand' )
    return data
}

export const createDevice = async (device: FormData) => {
    const {data} = await apiAuth.post('api/device', device)
    return data
}

export const fetchDevices = async (typeId : number | null , brandId : number | null , page : number , limit = 5) => {
    const {data} = await api.get('api/device', {params: {
            typeId,brandId,page,limit
        }})
    return data
}

export const fetchOneDevices = async (id: string | undefined) => {
    const {data} = await api.get('api/device/' + id)
    return data
}
