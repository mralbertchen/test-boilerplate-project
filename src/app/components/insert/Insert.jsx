import React from 'react';
import { Button, Progress, Col, Row } from 'reactstrap';

class Insert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { progress: 0 };

    this.addFive = this.addFive.bind(this);
    this.minusFive = this.minusFive.bind(this);
  }

  addFive() {
    const newProgress = this.state.progress + 5 > 100 ? 0 : this.state.progress + 5;
    this.setState({
      progress: newProgress,
    });
  }

  minusFive() {
    const newProgress = this.state.progress - 5 < 0 ? 0 : this.state.progress - 5;
    this.setState({
      progress: newProgress,
    });
  }

  render() {
    return (
      <div className="container insert">
        <Row>
          <h1>Testing Reactstrap</h1>
        </Row>
        <Row>
          <Col>
            <Button color="primary" onClick={this.addFive}>
              +5
            </Button>
          </Col>
          <Col>
            <Button color="danger" onClick={this.minusFive}>
              -5
            </Button>
          </Col>
        </Row>
          <Progress value={this.state.progress} />
      </div>
    );
  }
}

export default Insert;
