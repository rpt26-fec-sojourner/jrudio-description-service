import React from 'react';

class Description extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.getRoomListing(1);
  }

  renderDescription (description) {
    return <p>{description}</p>;
  }

  render () {
    const { description } = this.props;

    let innerText = 'Description not available';

    if (description) {
      innerText = this.renderDescription(description);
    }

    console.log(this.props)

    return (
      <div>
        {innerText}
      </div>
    );
  }
}

export default Description;