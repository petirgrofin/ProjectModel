import React from 'react'
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';
import { useHistory } from '@docusaurus/router';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css'; 

function generatePointsAroundCircle(h, k, r, n){
  let circumferenceLength = 2 * Math.PI * r
  let points = [{x: h, y: k + r}] // starts at the point directly above the center
  for (let i = 1; i < 6; i++){
    let arcLength = i * circumferenceLength/n // distance between each point along the circumference
    let theta = arcLength/r
    let complementaryTheta = Math.PI/2 - theta
    points.push({x: r * Math.cos(complementaryTheta) + h, y: r * Math.sin(complementaryTheta) + k})
  }
  return points
}

let points = generatePointsAroundCircle(100, 100, 200, 6)

console.log(points);

const edges = [
  { id: '1-2', source: '1', target: '2', label: 'con la información obtenida'},
  { id: '2-3', source: '2', target: '3', label: 'para consolidar el plan'},
  { id: '3-4', source: '3', target: '4', label: 'para realizar el plan'},
  { id: '4-5', source: '4', target: '5', label: 'para comprobar el proceso'},
  { id: '5-6', source: '5', target: '6', label: 'para reflexionar'},
  { id: '6-1', source: '6', target: '1', label: 'y empezar nuevamente con'}
];
 
const nodes = [
  {
    id: '1',
    data: { label: 'Informar' },
    position: points[3], 
    targetPosition: 'bottom',
    sourcePosition: 'bottom'
  },
  {
    id: '2',
    data: { label: 'Planificar' },
    position: points[2],
  },
  {
    id: '3',
    data: { label: 'Decidir' },
    position: points[1],
  },
  {
    id: '4',
    data: { label: 'Ejecutar' },
    position: points[0],
    sourcePosition: 'top'
  },
  {
    id: '5',
    data: { label: 'Controlar' },
    position: points[5],
    targetPosition: 'bottom',
    sourcePosition: 'top',
  },
  {
    id: '6',
    data: { label: 'Valorar' },
    position: points[4],
    sourcePosition: 'top',
    targetPosition: 'bottom'
  },
  {
    id: '7',
    data: {label: 'Los saberes'},
    position: {x: 100, y: 100},
  },

];

const routes = {
  1: '/ProjectModel/docs/steps/inform',
  2: '/ProjectModel/docs/steps/plan',
  3: '/ProjectModel/docs/steps/decide',
  4: '/ProjectModel/docs/steps/execute',
  5: '/ProjectModel/docs/steps/control',
  6: '/ProjectModel/docs/steps/assess',
  7: '/ProjectModel/docs/category/los-saberes'
}

const DiagramComponent = () => {

  const {colorMode} = useColorMode();
  const history = useHistory(); 

  function onNodeClick(event, node){
      history.push(routes[node.id]);
  };

  return (
  <div style={{ height: '94vh' }}>
    <p style={{position: 'absolute', left: 50, top: 100}}>Haz click en los nodos para navegar</p>
    <ReactFlow onNodeClick={onNodeClick} colorMode={colorMode} fitView nodes={nodes} edges={edges} />
  </div>
  );
}

const ModelDiagram = () => {
  return (
    <Layout>
      <DiagramComponent />
    </Layout>
  )
}

export default ModelDiagram