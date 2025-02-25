import React from 'react'
import Layout from '@theme/Layout';
import {useColorMode} from '@docusaurus/theme-common';
import { useHistory } from '@docusaurus/router';
import { ReactFlow } from '@xyflow/react';
import '@xyflow/react/dist/style.css'; 

const edges = [
  { id: '1-2', source: '1', target: '2'},
  { id: '2-3', source: '2', target: '3'},
  { id: '3-4', source: '3', target: '4'},
  { id: '4-5', source: '4', target: '5'},
  { id: '5-6', source: '5', target: '6'},
];
 
const nodes = [
  {
    id: '1',
    data: { label: 'Informar' },
    position: { x: 0, y: 0 },
    type: 'input',
  },
  {
    id: '2',
    data: { label: 'Planificar' },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: { label: 'Decidir' },
    position: { x: 50, y: 200 },
  },
  {
    id: '4',
    data: { label: 'Ejecutar' },
    position: { x: 0, y: 300 },
  },
  {
    id: '5',
    data: { label: 'Controlar' },
    position: { x: 50, y: 400 },
  },
  {
    id: '6',
    data: { label: 'Valorar' },
    position: { x: 100, y: 500 },
  }
];

const routes = {
  1: '/ProjectModel/docs/tutorial-basics/inform'
}

const DiagramComponent = () => {

  const {colorMode} = useColorMode();
  const history = useHistory(); 

  function onNodeClick(event, node){
      history.push(routes[node.id]);
  };

  return (
  <div style={{ height: '100vh' }}>
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