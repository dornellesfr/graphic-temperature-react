/* eslint-disable react-hooks/exhaustive-deps */
import { Chart } from 'react-google-charts';
// import Connection from './database';
import { useEffect, useState } from 'react';



const mock = [
  [
    "Dia/hora",
    "Temperaturas"
  ],
  [1, 37.8],
  [2, 30.9],
  [3, 25.4],
  [4, 11.7],
  [5, 11.9],
  [6, 8.8],
  [7, 7.6],
  [8, 12.3],
  [9, 16.9],
  [10, 12.8],
  [11, 5.3],
  [12, 6.6],
  [13, 4.8],
  [14, 4.2],
]

const options = {
  chart: {
    title: "Temperaturas",
    subtitle: "Sobre atualização de 30 segundos",
  } 
}




function App() {
  const [temperatures, setTemperatures] = useState(mock);
  // const URL = '';
  // const db = new Connection(URL);

  // function manipularDadosPraSetarNoTemperatures() {}

  useEffect(() => {
    // const allTemperatures = db.getTempsToDb()
    // setTemperatures(allTemperatures);
  })
  
  useEffect(() => {
    setInterval(() => {
      // FAZER A REQUISIÇÃO DOS DADOS AQUI
    }, 30000)
  }, [temperatures])

  return (
    <Chart
      chartType="Line"
      data={temperatures}
      options={options}
      width="100%"
      height="500px"
    />
  )
}

export default App
