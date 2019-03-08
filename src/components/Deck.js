import React from 'react';
import { Table, Icon, Label, Header } from 'semantic-ui-react';
import { COLOR } from '../cards-rarity-config';

export class Deck extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header size="medium">Wybrane karty:</Header>
        <Table size="small" basic="very" celled>
          <Table.Body>
            {this.props.deck.cards.map(card => (
              <Table.Row
                warning={
                  card.mechanics &&
                  card.mechanics.includes(this.props.highlightMechanic)
                }
                onClick={() => this.props.removeFromDeck(card.id)}
                key={card.id}
              >
                <Table.Cell collapsing>
                  {card.rarity === 'LEGENDARY' ? (
                    <Icon name="star outline" />
                  ) : (
                    this.props.deck.quantity[card.id]
                  )}
                </Table.Cell>
                <Table.Cell>
                  {card.type === this.props.cardsTypeFilter && (
                    <Icon name="caret right" />
                  )}
                  {card.name}
                </Table.Cell>
                <Table.Cell collapsing>
                  <Label color={COLOR[card.rarity]}>
                    {card.cost}
                    <Label.Detail>
                      <Icon name="diamond" />
                    </Label.Detail>
                  </Label>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </React.Fragment>
    );
  }
}
