const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Satus</th>
     </tr>
     </thead>
     <tbody>
      {sat.map(({id, name, type , launchDate, operational}) => {
          return (
        <tr key = {id}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{launchDate}</td>
        <td>{operational ? "Active" : "Inactive"}</td>
        </tr>
         )}
      )};
      
     </tbody>
   </table>  
  );
};

export default Table;