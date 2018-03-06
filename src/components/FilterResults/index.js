import React from 'react';
import Tooltip from './tool-tip-icon-filtering.png';
import './Filter.scss';

const FilterResults = props => (
  <section className="Filter">
    <div className="Filter__text">
      <h3 className="Filter__text-blue">7 dealers in {props.zip}</h3>
      <span className="Filter__separator" />
      <h3 className="Filter__text-black">Filter Results</h3>
      <div
        className={'Filter__toggle' + (props.toggled ? ' active' : '')}
        onClick={props.toggleFilter}>
        <span className={props.toggled ? 'active' : ''} />
        {props.toggled}
      </div>
    </div>
    <form
      className={'Filter__form' + (props.toggled ? ' active' : '')}
      onChange={props.onChange}>
      <label htmlFor="service">
        <input id="service" type="checkbox" name="Service Pro" />
        <span />
        Service
      </label>
      <label htmlFor="installation">
        <input id="installation" type="checkbox" name="Installation Pro" />
        <span />
        Installation
      </label>
      <label htmlFor="residential">
        <input id="residential" type="checkbox" name="Residential Pro" />
        <span />
        Residential
      </label>
      <label htmlFor="commercial">
        <input id="commercial" type="checkbox" name="Commercial Pro" />
        <span />
        Commercial
        <div className="Filter__tooltip">
          <img src={Tooltip} alt="Help with filtering results" />
          <div className="Filter__tooltip-content">
            <p>
              Adipisicing placeat at ipsum ipsum sit! Minima optio sit
              voluptatibus deleniti eveniet.
            </p>
          </div>
        </div>
      </label>
    </form>
  </section>
);

export default FilterResults;
