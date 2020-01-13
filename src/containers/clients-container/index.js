import "../../rsc/scss/custom.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as clientsActions from "../../redux/actions/clients";
import * as venuesActions from "../../redux/actions/venues";
import TitleWithInput from "../../components/title";
import List from "../../components/list";
import Row from "../../components/row";
import SwitchButton from "../../components/switch-button";
import ClientRowContent from "../../components/client-row-content";
import CreateButton from "../../components/create-client-button";
import InputRange from "react-input-range";
import AgePicker from "../../components/age-picker";

function ClientsContainer({
  clients,
  venues,
  getVenuesAction,
  getClientsAction,
  addFavoriteVenue,
  removeFavorite,
  addNewClientAction
}) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(clients);
  const [range, setRange] = useState({});
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    getClientsAction();
    getVenuesAction();
  }, []);

  useEffect(() => {
    setData(clients);
  }, [clients]);

  useEffect(() => {
    setData(filterBySearchValue());
  }, [searchValue]);

  const handleSearch = value => setSearchValue(value);

  const filterBySearchValue = () => {
    const { from, to } = range;
    if (!clients) return [];

    const ageFilteredClients = clients.filter(r => {
      if (r.age == "Unavailable") return false;

      if (from && from != "") {
        if (parseInt(from) > parseInt(r.age)) return false;
      }
      if (to && to != "") {
        if (parseInt(to) < parseInt(r.age)) return false;
      }

      return true;
    });

    const textFilteredClients = ageFilteredClients.filter(r => {
      // Search into every string field

      for (let v in r) {
        if (
          typeof r[v] == "string" &&
          r[v].toLowerCase().includes(searchValue.toLowerCase())
        )
          return true;
      }
    });

    return textFilteredClients;
  };
  const renderItem = item => {
    return (
      <Row
        content={
          <ClientRowContent
            favoriteVenues={item.favoriteVenues ? item.favoriteVenues : []}
            venues={venues}
            onSubmit={newFavoriteVenue =>
              addFavoriteVenue(item.id, newFavoriteVenue)
            }
            onRemove={venueToRemove => removeFavorite(item.id, venueToRemove)}
          />
        }
        fields={["name", "email", "age", "firstName", "lastName"]}
      >
        {item}
      </Row>
    );
  };

  const handleNewRange = newRange => {
    setRange(newRange);
    setData(filterBySearchValue());
  };

  return (
    <div className="dashboard-container">
      <TitleWithInput action={"🔎"} onSubmit={handleSearch}>
        Clients
      </TitleWithInput>
      <AgePicker onChange={handleNewRange} />
      <List
        data={data ? data : []}
        headers={["Alias", "E-mail", "Age", "First Name", "Last Name"]}
        renderItem={renderItem}
      />
      <SwitchButton title="Venues ➡" to="/venues" />
      <CreateButton
        onSubmit={addNewClientAction}
        fields={["name", "last name"]}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  clients: state.clients.list,
  venues: state.venues.list
});

const mapDispatchToProps = dispatch => ({
  getClientsAction: () => dispatch(clientsActions.getClients()),
  getVenuesAction: () => dispatch(venuesActions.getVenues()),
  addFavoriteVenue: (client, venue) =>
    dispatch(clientsActions.addFavoriteVenue(client, venue)),
  removeFavorite: (client, venue) =>
    dispatch(clientsActions.removeFavoriteVenue(client, venue)),
  addNewClientAction: client => dispatch(clientsActions.addNewClient(client))
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientsContainer);
