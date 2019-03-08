import React from 'react';
import { Input, Dropdown } from 'semantic-ui-react';

export class CardFilter extends React.Component {
  render() {
    return (
      <Input
        action={
          <Dropdown
            onChange={(e, { value }) => this.props.setCardsTypeFilter(value)}
            button
            basic
            //new object every time
            options={[
              { key: 'ALL', text: 'Wszystkie', value: 'ALL' },
              { key: 'MINION', text: 'Stronnik', value: 'MINION' },
              { key: 'SPELL', text: 'Zaklęcie', value: 'SPELL' },
              { key: 'WEAPON', text: 'Broń', value: 'WEAPON' },
            ]}
            value={this.props.cardsTypeFilter}
          />
        }
        onChange={(e, { value }) => this.props.setSearchText(value)}
        icon="search"
        iconPosition="left"
        fluid
        value={this.props.searchText}
        placeholder="Szukaj..."
      />
    );
  }
}
