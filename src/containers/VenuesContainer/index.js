import "../../rsc/scss/custom.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/actions/venues";
import TitleWithInput from "../../components/title";
import List from "../../components/list";
import Row from "../../components/row";
import SwitchButton from "../../components/switch-button";
import VenueRowContent from "../../components/venue-row-content";
import CreateButton from "../../components/create-venue-button";

function VenuesContainer({ getVenuesAction, venues, addVenueAction }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(venues);

  useEffect(() => {
    getVenuesAction();
  }, []);

  useEffect(() => {
    setData(venues);
  }, [venues]);

  const renderItem = item => {
    return <Row fields={["name"]}>{item}</Row>;
  };

  const handleSearch = value => {
    setData(
      venues.filter(r => {
        // Search into every string field
        for (let v in r) {
          if (
            typeof r[v] == "string" &&
            r[v].toLowerCase().includes(value.toLowerCase())
          )
            return true;
        }
      })
    );
  };

  const venuesList = data ? data : [];

  return (
    <div className="dashboard-container">
      <TitleWithInput action={"🔎"} onSubmit={handleSearch}>
        Venues
      </TitleWithInput>
      <List data={venuesList} headers={["Name"]} renderItem={renderItem} />
      <SwitchButton title="Clients ➡" to="/clients" />
      <CreateButton onSubmit={addVenueAction} />
    </div>
  );
}

const mapStateToProps = state => ({
  venues: state.venues.list
});

const mapDispatchToProps = dispatch => ({
  getVenuesAction: () => dispatch(actions.getVenues()),
  addVenueAction: name => dispatch(actions.addVenue(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(VenuesContainer);
