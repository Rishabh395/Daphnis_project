import { useEffect, useState } from 'react';
import {Chart as ChartJs, Tooltip, Title, ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJs.register(
  Tooltip, Title, ArcElement, Legend
);


const data = {
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow',
          'green'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue',
      'green'
  ], 
};
function Chart() {
  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'red',
          'blue',
          'yellow'
        ]
    },
  ],
  labels: [
      'Red',
      'Yellow',
      'Blue'
  ], 
});
  useEffect(()=> {
    const fetchData = () =>  {
      fetch('https://fakestoreapi.com/products').then((data) => {
        const res = data.json();
        return res
      }).then((res) => {
        console.log("resss", res)
        const label = [];
        const data = [];
        for(var i of res) {
            label.push(i.category);
            data.push(i.category)
        }
        setData(
          {
            datasets: [{
                data:data,
                backgroundColor:[
                  'red',
                  'blue',
                  'yellow',
                  'green'
                ]
            },
          ],
          labels:label, 
        }
        )

      }).catch(e => {
        console.log("error", e)
      }) 
    }
  fetchData();
  }, [])
  return (
    <div className="App" style={{width:'30%', height:'30%'}}>
      <Doughnut data={data}/>
    </div>
  );
}

export default Chart;