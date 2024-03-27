import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img
        src={`../../public/images/${props.imageUrl}`}
        className="card--image"
        alt={props.imageUrl}
      />
      <div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.googleMaps}</p>
        </div>

        <p>{props.location}</p>
        <div>
          <p>{props.startDate}</p>
          <p>{props.endDate}</p>
        </div>
      </div>
    </div>
  );
}
