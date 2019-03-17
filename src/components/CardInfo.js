import {Card, Icon, Label} from 'semantic-ui-react';
import {COLOR, LIMIT_IN_DECK} from "../cards-rarity-config";
import React, {Component} from "react";

export default class CardInfo extends Component {
  shouldComponentUpdate(next) {
    const { card, quantity } = this.props;
    return !(
      next.card.id === card.id &&
      next.quantity === quantity
    );
  }

  render() {
    const { card, quantity, addToDeck } = this.props;
    return (
      <Card
        color={COLOR[card.rarity]}
        fluid
        onClick={() => addToDeck(card)}
        key={card.id}
      >
        <Card.Content>
          <Card.Header>
            {quantity &&
            `${quantity}/${
              LIMIT_IN_DECK[card.rarity]
              } `}
            {quantity ===
            LIMIT_IN_DECK[card.rarity] && <Icon name="lock"/>}
            {card.name}
          </Card.Header>
          <Card.Meta>
            {card.type} | {card.cardClass}
          </Card.Meta>
          <Card.Description>
                <span
                  dangerouslySetInnerHTML={{
                    __html: card.text,
                  }}
                />
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Label color={COLOR[card.rarity]}>
            {card.cost}
            <Label.Detail>
              <Icon name="diamond"/>
            </Label.Detail>
          </Label>

          {card.attack !== undefined && (
            <Label basic color="grey">
              {card.attack}
              <Label.Detail>
                <Icon name="lightning"/>
              </Label.Detail>
            </Label>
          )}
          {card.health && (
            <Label basic color="red">
              {card.health}
              <Label.Detail>
                <Icon name="tint"/>
              </Label.Detail>
            </Label>
          )}
          {card.race && (
            <Label basic color="black">
              {card.race}
            </Label>
          )}
        </Card.Content>
      </Card>
    )
  }
}
