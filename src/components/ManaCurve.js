import React from 'react';
import { Checkbox } from 'semantic-ui-react';
import { ManaCurveChart } from './ManaCurveChart';

export class ManaCurve extends React.Component {
  constructor(props) {
    super(props);
    this.state = { colorSafe: false };
  }
  handlColor = () => {
    this.setState(prevState => {
      return { colorSafe: !prevState.colorSafe };
    });
  };
  render() {
    return (
      <React.Fragment>
        <Checkbox
          checked={this.props.isManaVisible}
          onChange={() => this.props.setManaVisible(!this.props.isManaVisible)}
          toggle
          label="Krzywa many"
        />
        {this.props.isManaVisible && (
          <React.Fragment>
            <ManaCurveChart colorSafe={this.state.colorSafe} {...this.props} />
            <Checkbox
              checked={this.state.colorSafe}
              onChange={() => this.handlColor()}
              label="Bezpieczne kolory"
            />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
