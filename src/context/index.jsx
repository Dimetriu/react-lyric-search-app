import React, { Component } from 'react';

const AppContext = createContext();

export class Provider extends Component {

  state = {
    track_list: [
      {
        track: { track_name: "a" },
        track: { track_name: "ab" },
        track: { track_name: "abc" },
        track: { track_name: "abcd" },
        track: { track_name: "abcde" },
      }
    ],
    heading: "Top 10 Tracks",
  };

  render () {
    const { state } = this.state;
    const { children } = this.props;

    return (
      <AppContext.Provider value={state}>
        {children}
      </AppContext.Provider>
    );}
}

export const AppConsumer = AppContext.Consumer;
