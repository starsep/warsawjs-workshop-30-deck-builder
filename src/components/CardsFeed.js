import React from 'react';
import CardInfo from "./CardInfo";
import {FixedSizeList} from 'react-window';

export class CardsFeed extends React.PureComponent {
  render() {
    const { addToDeck, deck, cardsInFeed } = this.props;
    return (
      <FixedSizeList
        itemData={cardsInFeed}
        height={750}
        itemCount={cardsInFeed.length}
        itemSize={180}
      >
        {({data, index, style}) => {
          const card = data[index];
          const height = style.height - 10;
          const quantity = deck.quantity[card.id];
          return (
            <div style={{
              ...style,
              padding: 5,
            }}
            >
              <CardInfo
                addToDeck={addToDeck}
                height={height}
                card={card}
                quantity={quantity}
              />
            </div>
          );
        }}
      </FixedSizeList>
    );
  }
}
