import satData from "./satData"

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
    <button>
        <div>
        {displaySats.map((sat, id) => {
         return (
         <button onClick={() => filterByType(sat)} key={id}>
          {sat} Orbit
         </button>
          );
         })};
        </div>
    </button>
    <button onClick={() => setSat(setData)}>
    All Orbits</button>
    </div>
  );
};

export default Buttons;