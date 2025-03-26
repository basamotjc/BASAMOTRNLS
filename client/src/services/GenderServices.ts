import AxiosInstance from "../AxiosInstance"

interface GenderServices {
    storeGender: (data: any) => Promise<any>;
}

const GenderServices: GenderServices = {
    storeGender: async (data: any)=>{
        return AxiosInstance
        .post('/storeGender', data)
        .then((response)=>{response})
        .catch((error)=>{throw error});
    }
}

export default GenderServices;