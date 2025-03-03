 
function TextUpdaterNode({ data, isConnectable }) {
  return (
    <div className='react-flow__node-default'>{data.label}</div>
  );
}
 
export default TextUpdaterNode;