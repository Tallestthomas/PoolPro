import React from 'react';
import FilterResults from '../FilterResults';
import './DealerSelection.scss';

class DealerSelection extends React.Component {
  constructor() {
    super();

    this.state = {
      zipcode: null,
      dealers: [],
      filters: [],
    };
  }

  async componentDidMount() {
    const dealers = await fetch('/dealers.json').then(res => res.json());
    await this.setState({
      zipcode: dealers.zipcode,
      dealers: dealers.dealers,
    });
  }

  filterResults = event => {
    event.target.checked
      ? this.setState({filters: [...this.state.filters, event.target.name]})
      : this.setState({
          filters: this.state.filters.filter(
            item => item !== event.target.name,
          ),
        });
  };

  render() {
    return (
      <section className="DealerSelection">
        <FilterResults dealers={7} zip={22826} onChange={this.filterResults} />
        <ul>
          {this.state.dealers
            .filter(
              item =>
                this.state.filters.length !== 0
                  ? item.data.certifications.find(item =>
                      this.state.filters.includes(item),
                    )
                  : true,
            )
            .map(dealer => (
              <li key={dealer.data.companyID} style={{marginBottom: '14px'}}>
                {dealer.data.name}
                {dealer.data.certifications.map((cert, index) => (
                  <p key={index}>{cert}</p>
                ))}{' '}
              </li>
            ))}
        </ul>
      </section>
    );
  }
}

export default DealerSelection;
