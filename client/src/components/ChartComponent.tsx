//Importing the required libraries
import React from 'react';
import Chart from 'react-apexcharts';

//Creating the ChartComponent
interface DataPoint {
    x: string;
    y: number;
}

interface ChartProps {
    title: string;
    series:{name: string; data: DataPoint[] } [];
    categories: string [];
}

const ChartComponent: React.FC<ChartProps> =({title, series, categories}) => {
        const options = {
            chart: {
                id: 'apexchart-example',
                type: 'area',
            },
            xaxis: {
                type: 'datetime', //Update to handle the datetime type for user input
                categories: categories //Included for x-axis that is not datetime
            },
            yaxis: {
                title: {
                    text: 'Values' //Customise the y-axis title to be based on user input!
                },
                min: 0, //Sets the minimum value for the y-axis
                labels:{
                    formatter: (value: number) => value.toFixed(0),
                },
            },
            
        };

        return (
            <div className="chart-container">
                <h2>{title}</h2>
                <Chart options={options} series={series} type="area" width={500}
            />
            </div>
        );
    };

    export default ChartComponent;
