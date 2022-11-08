const element = (
  // Write your code here.
  <div className="bg">
    <h1>Congratulations</h1>
    <div className="card_bg">
      <img
        className="img"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 className="text">Kiran V</h1>
      <p className="para">Vishnu institute of computer technology,Bhimavaram</p>
      <img
        className="img1"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
