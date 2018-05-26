import React, { Component } from 'react';

import './Table.css';

import testJson from '../../../../data/test.json';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.renderTables = this.renderTables.bind(this);
  }

  renderTables(musics) {
    return musics.map((music) => {
        return (
          <tbody key={music.id}>
            <tr>
              <td>
                <input type="radio" />
              </td>
              <td>{music.id}</td>
              <td><a className="tableATag">{music.title}</a></td>
              <td>{music.label_credit.labels[0].name}</td>
              <td>{music.artist_credit.artists[0].artist.display_name}</td>
              <td>{music.barcode}</td>
              <td>{music.ingestion_status}</td>
              <td>{music.release_date.slice(0, 10)}</td>
            </tr>
          </tbody>
        );
    })
  }

  render() {
    //console.log(testJson.results);
    const musics = testJson.results;
    const firstMusic = musics[0];
    const secondMusic = musics[1];
    const thirdMusic = musics[2];
    const fourthMusic = musics[3];
    console.log(musics);

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
          {this.renderTables(musics)}
        </table>
      </div>
    );
  }
}

export default Table;
