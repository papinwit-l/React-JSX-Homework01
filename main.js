const root = ReactDOM.createRoot(document.getElementById("root"));
let style = {
  backgroundColor: "white",
  margin: "32px",
  padding: "32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "24px",
  border: "2px #eff0f2 solid",
  borderRadius: "20px",
  textAlign: "center",
};
root.render(
  <div style={style}>
    <DivImage />
    <DivName />
    <DivInfo />
  </div>
);

function DivImage() {
  let style = {
    height: "128px",
    width: "128px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    background:
      'url("https://images.unsplash.com/photo-1579463148228-138296ac3b98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80")',
    backgroundSize: "cover",
    borderRadius: "50%",
  };
  return <div style={style}></div>;
}

function DivInfo() {
  style = { display: "flex", justifyContent: "space-evenly", width: "100%" };
  p = { color: "#a3a7b3" };
  return (
    <div style={style}>
      <div>
        <h3>25</h3>
        <p style={p}>Posts</p>
      </div>
      <div>
        <h3>350</h3>
        <p style={p}>Following</p>
      </div>
      <div>
        <h3>1.5K</h3>
        <p style={p}>Followers</p>
      </div>
    </div>
  );
}

function DivName() {
  p = { color: "#a3a7b3" };
  return (
    <div>
      <h4>Julienne Moore</h4>
      <p style={p}>julianne.moore@company.com</p>
    </div>
  );
}
