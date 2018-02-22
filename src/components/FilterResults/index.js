import React from 'react';
import './Filter.scss';

const FilterResults = props => (
  <section className="Filter">
    <h3 className="Filter__text-blue">7 dealers in {props.zip}</h3>
    <span className="Filter__separator" />
    <h3 className="Filter__text-black">Filter Results</h3>
    <form className="Filter__form" onChange={props.onChange}>
      <label htmlFor="service">
        <input id="service" type="checkbox" name="Service Pro" />
        Service
      </label>
      <label htmlFor="installation">
        <input id="installation" type="checkbox" name="Installation Pro" />
        Installation
      </label>
      <label htmlFor="residential">
        <input id="residential" type="checkbox" name="Residential Pro" />
        Residential
      </label>
      <label htmlFor="commercial">
        <input id="commercial" type="checkbox" name="Commercial Pro" />
        Commercial
      </label>
    </form>
  </section>
);

export default FilterResults;
