import {useState} from 'react';

interface DataPoint {
    x: string;
    y: number;
}

export const useUserData = () => {
    const [userData, setUserData] = useState<DataPoint[]>([]);

    const addDataPoint = (x: string, y: number) => {
        setUserData((prevData) => [...prevData, {x, y}]);
    };

    return {userData, addDataPoint};
};