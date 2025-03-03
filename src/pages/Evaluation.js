import React, {useState} from "react";
import Layout from '@theme/Layout';
import {ReactFlow, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

const optionsLeft = ["Informar", "Planificar", "Decidir", "Ejecutar", "Controlar", "Valorar"];
const optionsRight = [
  "Se verifica que todos lleguen bien, que nadie se pierda y que no falte nada importante",
  "Se elige qué playa visitar, qué carro usar y quién lleva las cosas",
  "De regreso, se comenta qué tan buena fue la experiencia y si se haría de nuevo",
  "Investigar el clima, estado de la carretera y las playas menos concurridas", 
  "Se carga el carro y se inicia el recorrido hacia la playa",
  "Se hace un plan con las posibles playas y rutas, cosas necesarias y propuestas de horas de salida"];

const answers = [[0, 3], [1, 5], [2, 1], [3, 4], [4, 0], [5, 2]]

const initialNodes = [
  ...optionsLeft.map((label, index) => ({
    id: `left-${index}`,
    data: { label },
    position: { x: 0, y: index * 100 },
    type: "default",
    sourcePosition: "right",
    targetPosition: "right",
  })),
  ...optionsRight.map((label, index) => ({
    id: `right-${index}`,
    data: { label },
    position: { x: 300, y: index * 100 },
    type: "default",
    targetPosition: "left",
    sourcePosition: "left",
    width: 280
  })),
];

const initialEdges = [];

function checkAnswer(edges) {
  return edges.map(edge => {
    let source = parseInt(edge.source.match(/\d+/)[0]);
    let target = parseInt(edge.target.match(/\d+/)[0]);
    let isCorrect = answers.some(pair => (pair[0] === source && pair[1] === target) || (pair[0] === target && pair[1] === source));
    return { ...edge, style: { stroke: isCorrect ? "green" : "red", strokeWidth: 2 } };
  });
}

export default function Evaluation() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [validatedEdges, setValidatedEdges] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const onConnect = (params) => {
    if ((params.source.includes('left') && params.target.includes('left')) || 
        params.source.includes('right') && params.target.includes('right')){
          return;
        }
    // Filter out any existing edges that involve the source or target node
    let newEdges = edges.filter(
      (edge) => edge.source !== params.source && edge.target !== params.target && edge.source !== params.target && edge.target !== params.source
    );
  
    // Add the new edge (after removing any conflicting edges)
    setEdges((eds) => addEdge(params, newEdges));
  };

  console.log(edges);
  
  const handleCheck = () => {
    if (edges.length < 6){
      return
    }
    setValidatedEdges(checkAnswer(edges));
  };

  const handleCorrectAnswer = () => {
    setShowCorrect(true);
    setValidatedEdges(answers.map(pair => ({
      id: `${pair[0]}-${pair[1]}`,
      source: `left-${pair[0]}`,
      target: `right-${pair[1]}`,
      style: { stroke: "green", strokeWidth: 2 }
    })));
  };

  return (
    <Layout>
      <div style={{height: "94vh" }}>
        <ReactFlow
          nodes={nodes}
          edges={validatedEdges.length > 0 ? validatedEdges : edges}
          onConnect={onConnect}
          fitView fitViewOptions={{padding: 0.2}}>
        </ReactFlow>
        
        <button onClick={handleCheck} style={{ position: "absolute", bottom: 20, left: 20, padding: "10px 20px" }}>
          Revisar
        </button>

        <button onClick={handleCorrectAnswer} style={{ position: "absolute", bottom: 20, left: 100, padding: "10px 20px" }}>
          Respuesta correcta
        </button>

        <button onClick={() => setShowInfo(true)} style={{ position: "absolute", bottom: 20, left: 250, padding: "10px 20px" }}>
          Info
        </button>

        {showInfo && (
          <div style={{
            position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "50%", textAlign: "center" }}>
              <h2>¿Por qué estas son las respuestas correctas?</h2>
              <p>Cada par representa una conexión lógica entre la etapa del modelo de proyectos y una acción.</p>
              <button onClick={() => setShowInfo(false)} style={{ marginTop: "10px", padding: "10px 20px" }}>Close</button>
            </div>
          </div>
        )}

      </div>
    </Layout>
  );
}