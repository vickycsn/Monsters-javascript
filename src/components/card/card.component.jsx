import { Component } from "react";
import './card.styles.css'

export class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;

          return (
            <div className="card-container" key={id}>
              <img
                alt={`monster ${name}`}
                src={`https://robohash.org/${id}?set=set2&side=180*180`}
              />
              <h2 className="card-name">{name}</h2>
              <p>{email}</p>
            </div>
          );
  }
}
