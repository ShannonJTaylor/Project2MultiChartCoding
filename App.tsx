//Refactor code following update of the hook files 
import React from 'react';
//import './styles/App.css'
import InputForm from './components/InputForm';
//import ChartComponent from './components/ChartComponent';
import { useChartData } from './hooks/useChartData';
import { useUserData } from './hooks/useUserData';
import MultiChartComponent from './MultiCharComponent'; 

const App: React.FC = () => {
  const chartData = useChartData();
  const {userData, addDataPoint} = useUserData();

  return(
    <div className="App">
      <header className="App-header">
        <h1>Dynamic Chart Generator</h1>
      </header>
      <main>
        <InputForm addDataPoint={addDataPoint} />
        {chartData && (
          <ChartComponent
            title={chartData.title}
            series={[...chartData.series, {name: 'User Data', data: userData}]}
            categories={chartData.categories}
          />
        )}
      </main>
    </div>
  );
};

export default App;




//Commented out all previous code. It's all here, just minimized. 
// import React, { useState, use Effect, FC } from 'react';
// import ChartComponent from './components/ChartComponent';
// import HealthIsWealth from './components/HealthIsWealth'; //Need to update this path 

// import HealthIsWealth from "./components/HealthIsWealth";
// const App = () => <HealthIsWealth />;
// export default App;


// import React, { FC } from 'react';
// import ChartComponent from './Component/ChartComponent';

// const App: FC = () => {
//   const chartData = {
//     title: 'User Defined Chart',
//     series: [
//       {
//         name: 'series-1',
//         data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
//       }
//     ],
//     categories: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
//   };

//   return (
//     <div className="app">
//       <ChartComponent
//         title={chartData.title}
//         series={chartData.series}
//         categories={chartData.categories}
//       />  
//     </div>
//   );
// };

//   export default App;






// import { useState } from 'react';
// import smanticLogo from './assets/smanticsurferimage.jpg';
// import './App.css';
// import LineGraph from './Component/bargraph';

// // Explicitly type the component as a React Functional Component (FC)
// const App: React.FC = () => {
//   // Typing useState with 'number' to indicate count will always be a number
//   const [count, setCount] = useState<number>(0);

//   return (
//     <>
//       <div>
//         <a href="https://github.com/whoenig44/syntax-surfers-project-2" target="_blank" rel="noopener noreferrer">
//           <img src={smanticLogo} className="logo" alt="Semantic Surfers Logo" />
//         </a>
//       </div>
//       <h1>Welcome to the Health Monitoring Application!!!</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Push to main branch of Git Repo to trigger rebuild of Production Application
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Semantic Surfers Logo above to go to the GitHub Repository for this project
//       </p>
//       <LineGraph />
//     </>
//   );
// };

// export default App;
