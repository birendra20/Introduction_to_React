import "./styles.css";

function App() {
  const Odata = ["Android", "BlackBerry", "iphone", "Windows Phone "];
  const Mdata = ["Samsung", "Windows", "MicroMax", "Apple "];

  return (
    <div>
      <h3>Mobile Opertaing System</h3>
      <ul>
        {Odata.map((user) => (
          <li>{user}</li>
        ))}
      </ul>

      <h3>Mobile Manufactures</h3>
      <ul>
        {Mdata.map((user) => (
          <li>{user}</li>
        ))}
      </ul>
    </div>
  );
}

// function UserComponent({ name }) {
//   return (
//     <div className="borderBox">
//       <p> hello {name} </p>
//     </div>
//   );
// }
export default App;
