const Notification = (props) => {
  //  Write your code here.
  const { className, text, image } = props;
  return (
    <div className={`${className}`}>
      <img className="image" src={image} />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Notifications</h1>
    <Notification
      className="bg-primary"
      text="information Message"
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
    />
    <Notification
      className="bg-success"
      text="Success Message"
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
    />
    <Notification
      className="bg-warning"
      text="Warning Message"
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
    />
    <Notification
      className="bg-danger"
      text="Error Message"
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
