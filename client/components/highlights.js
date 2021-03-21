import React from 'react';

const ListingHighlights = (props) => {
  const highlights = props.highlights ? props.highlights.map((highlight, i) => {
    return (<p key={i}>{highlight.title} - {highlight.subtitle}</p>);
  }) : null;

  return (
    <div>
      {highlights}
    </div>
  );
};

export default ListingHighlights;