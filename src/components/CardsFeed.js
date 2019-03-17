import React from 'react';
import {Card} from 'semantic-ui-react';
import CardInfo from "./CardInfo";

export class CardsFeed extends React.PureComponent {
  render() {
    return (
      <Card.Group>
        {this.props.cardsInFeed.map(card => (
          <CardInfo
            key={card.id}
            card={card}
            quantity={this.props.deck.quantity[card.id]}
            addToDeck={this.props.addToDeck}
          />
        ))}
      </Card.Group>
    );
  }
}
