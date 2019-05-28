import React from "react";

class Circle extends React.Component {
  shouldComponentUpdate(x, y) {
    return x !== y;
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return <div className={`circle ${color}`} />;
  }
}

export default Circle;
