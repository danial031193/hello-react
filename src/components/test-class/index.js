import React, { PureComponent} from 'react'

export class TestAbstract extends PureComponent {
  a = 1

  b = 2

  state = {
    summ: 0,
  }

  test = () => {
    const { summ } = this.state
    this.setState({ summ: summ + 10 })
  }

  setSumm = (e) => {
    console.log({e})
    this.setState((prevProps) => ({ summ: prevProps.summ + this.a + this.b }), () => this.test())
  }

  render() {
    const { summ } = this.state

    return (
      <div data-id="id" onClick={this.setSumm}>
        summ: {summ}
      </div>
    )
  }
}

export class TestClass extends TestAbstract {
  setSumm = () => {
    this.setState({ summ: this.a + this.b + 5 })
  }
}

