import React, {useState} from "react";
import Layout from '@theme/Layout';
import {ReactFlow, addEdge } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import {useColorMode} from '@docusaurus/theme-common';

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

const EvaluationMatch = () => {

  const [nodes] = useState(initialNodes);
  const [edges, setEdges] = useState([]);
  const [validatedEdges, setValidatedEdges] = useState([]);
  const [showCorrect, setShowCorrect] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const {colorMode} = useColorMode();
  
  const allMatched = edges.length === answers.length;
  const hasIncorrect = validatedEdges.some(edge => edge.style.stroke === "red");

  const onConnect = (params) => {
    if ((params.source.includes("left") && params.target.includes("left")) ||
        (params.source.includes("right") && params.target.includes("right"))) {
      return;
    }
    let newEdges = edges.filter(
      (edge) => edge.source !== params.source && edge.target !== params.target
    );
    setEdges((eds) => addEdge(params, newEdges));
  };

  const handleCheck = () => {
    setValidatedEdges(checkAnswer(edges));
  };

  const handleCorrectAnswer = () => {
    setShowCorrect(true);
    setValidatedEdges(
      answers.map((pair) => ({
        id: `${pair[0]}-${pair[1]}`,
        source: `left-${pair[0]}`,
        target: `right-${pair[1]}`,
        style: { stroke: "green", strokeWidth: 2 },
      }))
    );
  };

  return (
    <div style={{ height: "94vh", position: "relative", padding: "10px" }}>
    <p style={{ position: "absolute", top: 30, left: 40, fontSize: 18}}>Asocie cada fase con una acción correcta</p>
    <ReactFlow colorMode={colorMode} nodes={nodes} edges={validatedEdges.length > 0 ? validatedEdges : edges} onConnect={onConnect} fitView />
    
    {allMatched && (
      <>
        <button onClick={handleCheck} style={{fontSize: 18, position: "absolute", bottom: 20, left: 20, padding: "10px 20px" }}>Revisar</button>
        <button onClick={() => setShowInfo(true)} style={{ fontSize: 18, position: "absolute", bottom: 20, left: 100, padding: "10px 20px" }}>Info</button>
      </>
    )}

    {hasIncorrect && (
      <button onClick={handleCorrectAnswer} style={{ fontSize: 18, position: "absolute", bottom: 20, left: 150, padding: "10px 20px" }}>Respuesta correcta</button>
    )}

    {showInfo && (
      <div style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "10px", width: "50%", textAlign: "center" }}>
          <h2>¿Por qué estas son las respuestas correctas?</h2>
          <p>Cada par representa una conexión lógica entre la etapa del modelo de proyectos y una acción.</p>
          <button onClick={() => setShowInfo(false)} style={{ fontSize: 18, marginTop: "10px", padding: "10px 20px" }}>Cerrar</button>
        </div>
      </div>
    )}
  </div>
  )
}

export default function Evaluation() {

  return (
    <Layout>
      <EvaluationMatch/>
    </Layout>
  );
}