import React, { Component } from 'react';
import { connect } from "react-redux";
import { compose } from 'recompose';

import './Table.css';

import testJson from '../../../../data/test.json';
import { setEditModalTrue } from '../../../../redux/meta/actions';

class Table extends Component {
  constructor(props) {
    super(props);

    this.renderTables = this.renderTables.bind(this);
  }

  renderTables(musics) {
    return musics.map((music) => {
        return (
          <tbody key={music.id}>
            <tr>
              <td className="MusicRadio">
                <input type="radio" name="radio-group"/>
              </td>
              <td className="MusicId">{music.id}</td>
              <td className="MusicTitle" onClick={() => this.props.setEditModalTrue({showEditModal: true})}>{music.title}</td>
              <td className="MusicLabel">{music.label_credit.labels[0].name}</td>
              <td className="MusicArtist">{music.artist_credit.artists[0].artist.display_name}</td>
              <td className="MusicUPC">{music.barcode}</td>
              <td className="MusicIngestion">{music.ingestion_status}</td>
              <td className="MusicReleaseDate">{music.release_date.slice(0, 10)}</td>
            </tr>
          </tbody>
        );
    })
  }

  render() {
    const musics = testJson.results;

    return (
      <div className="Table">
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
              <th className="MusicRadio"></th>
              <th className="MusicId">#</th>
              <th className="MusicHeadTitle">title</th>
              <th className="MusicLabel">Label</th>
              <th className="MusicArtist">Artist</th>
              <th className="MusicUPC">UPC</th>
              <th className="MusicIngestion">Ingestion</th>
              <th className="MusicReleaseDate">Release Date</th>
            </tr>
          </thead>
          {this.renderTables(musics)}
        </table>
      </div>
    );
  }
}

export default compose(
  connect(({ meta }) => ({ 
    showEditModal: meta.showEditModal,
   }), {
    setEditModalTrue,
  })
)(Table);
