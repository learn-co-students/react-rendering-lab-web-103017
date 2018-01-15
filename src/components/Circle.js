import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(nextProps) {
    if (this.props.color === nextProps.color) {
      return false
    } else {
       return true
     }
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);

    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
