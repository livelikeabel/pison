import React, { Component } from 'react';

import './Table.css';

class Table extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table summary="music information table">
          {/* <colgroup>
                        <col />
                        <col />
                        <col />
                    </colgroup>
                    <colgroup span="3">
                    </colgroup> */}
          <thead>
            <tr>
              <th>o</th>
              <th>#</th>
              <th>title</th>
              <th>Label</th>
              <th>Artist</th>
              <th>UPC</th>
              <th>Ingestion</th>
              <th>Release Date</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                  <td><input type="radio" /></td>
                  <td>9348</td>
                  <td>2018 Musiceb Karaoke Vol.01</td>
                  <td>Musicen</td>
                  <td>Musicen</td>
                  <td>888344150069</td>
                  <td>SUCCEED</td>
                  <td>2018-01-26</td>
              </tr>
          </tbody>
          <tbody>
              <tr>
                  <td><input type="radio" /></td>
                  <td>9334</td>
                  <td>Silent Season</td>
                  <td>Pison Contents</td>
                  <td>OHYUNG</td>
                  <td>888344150069</td>
                  <td>SUCCEED</td>
                  <td>2018-01-26</td>
              </tr>
          </tbody>
          <tbody>
              <tr>
                  <td><input type="radio" /></td>
                  <td>9333</td>
                  <td>Crying baby soothing piano</td>
                  <td>KOBUCO</td>
                  <td>Calm Piano wind</td>
                  <td>888344150069</td>
                  <td>SUCCEED</td>
                  <td>2018-01-19</td>
              </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
