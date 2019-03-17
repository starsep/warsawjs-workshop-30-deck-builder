import {Grid, Header} from "semantic-ui-react";
import React, {PureComponent} from "react";

export default class TitleHeader extends PureComponent {
  render() {
    const { selectedHeroClass } = this.props;
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Header dividing size="large">
            Klasa: {selectedHeroClass}
          </Header>
        </Grid.Column>
      </Grid.Row>
    );
  }
}