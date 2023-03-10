
import { useProductStore } from "../hooks/useProductStore";


export const dataStorage = () => {

    const { startUpdateStorage } = useProductStore();

    const saveDataStorage = ( cart, total ) => {
        localStorage.setItem('cart', JSON.stringify(cart));
        localStorage.setItem('total', total);
    }

    const getDataStorage = () => {

        const cartStorage = localStorage.getItem('cart') ?? [];
        const totalStorage = localStorage.getItem('total') ?? 0;

        if(cartStorage.length > 0){
            startUpdateStorage(JSON.parse(cartStorage), JSON.parse(totalStorage))
        }
    }


    return {
        saveDataStorage,
        getDataStorage
    }

}