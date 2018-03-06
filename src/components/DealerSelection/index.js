import React from 'react';
import FilterResults from '../FilterResults';
import Dealer from '../Dealer';
import Modal from '../Modal';
import './DealerSelection.scss';

class DealerSelection extends React.Component {
  constructor() {
    super();

    this.state = {
      zipcode: null,
      dealers: [],
      filters: [],
      selectedPro: {},
      toggleModal: false,
      filtersToggled: false,
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

  toggleModal = event => {
    this.setState({
      selectedPro: this.state.dealers.find(
        selected => selected.data.companyID.toString() === event.target.value,
      ).data,
      toggleModal: true,
    });
    document.body.classList.add('noscroll');
  };

  closeModal = event => {
    this.setState({
      selectedPro: {},
      toggleModal: false,
    });
    document.body.classList.remove('noscroll');
  };

  toggleFilters = async event => {
    await this.setState({filtersToggled: !this.state.filtersToggled});
  };

  render() {
    return (
      <section className="DealerSelection">
        <FilterResults
          dealers={7}
          zip={22826}
          onChange={this.filterResults}
          toggled={this.state.filtersToggled}
          toggleFilter={this.toggleFilters}
        />
        <section className="DealerSelection__list">
          {this.state.dealers
            .filter(
              item =>
                this.state.filters.length !== 0
                  ? item.data.certifications.find(item =>
                      this.state.filters.includes(item),
                    )
                  : true,
            )
            .map((dealer, index) => (
              <Dealer
                key={dealer.data.companyID}
                dealer={dealer.data}
                delay={index}
                onClick={this.toggleModal}
              />
            ))}
        </section>
        <Modal
          dealer={this.state.selectedPro || {}}
          isActive={this.state.toggleModal}
          closeModal={this.closeModal}
        />
      </section>
    );
  }
}

export default DealerSelection;
