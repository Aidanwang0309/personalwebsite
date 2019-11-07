import React, { Fragment } from 'react';
import ReactMapboxGl, { MapContext } from 'react-mapbox-gl';
import styled from 'styled-components';

const Mapbox = () => {
  const layers = [
    '0-60',
    '60-120',
    '120-180',
    '180-240',
    '240-300',
    '300-360',
    '360-420',
    '420+'
  ];

  const colors = [
    '#FFEDA0',
    '#FED976',
    '#FEB24C',
    '#FD8D3C',
    '#FC4E2A',
    '#E31A1C',
    '#BD0026',
    '#800026'
  ];

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1Ijoic3cyNDg4IiwiYSI6ImNqODE5OXZlZjRyeWMzM28zdHEzYjY3cW8ifQ.lNjZMzv8_t4cc5owfWTnQw'
  });

  //   const handleHover = (map, e) => {
  //     let borough = map.queryRenderedFeatures(e.point, {
  //       layers: ['parkboroughscrime-3ulk72']
  //     });
  //     if (borough.length > 0) {
  //       //   setData(borough[0].properties.Crime_Number);
  //       console.log(borough[0].properties.Crime_Number);
  //       //   borough[0].properties.Crime_Number;
  //       //   number = console.log();
  //     }
  //   };

  return (
    <Fragment>
      <DataOverlay className="dataOverlay">
        {layers.map((layer, index) => {
          return (
            <div key={index} className="data">
              <span
                className="datacolor"
                style={{ background: `${colors[index]}` }}
              ></span>
              <span className="dataValue">{layer}</span>
            </div>
          );
        })}
      </DataOverlay>
      <Map
        className="mapbox"
        style={'mapbox://styles/sw2488/cj8e1tpn09nbj2snuqlapufdz'}
        containerStyle={{
          height: '20rem',
          width: '100%'
        }}
        zoom={[8.7]}
        center={[-73.735242, 40.63061]}
        // onMouseMove={handleHover}
      >
        {/* <h1>{data}</h1> */}
      </Map>
    </Fragment>
  );
};

const DataOverlay = styled.div`
  position: absolute;
  z-index: 99;
  bottom: 1rem;
  right: 1rem;
  padding: 2rem 0;
  background: #ffffffe0;
  .data {
    width: 7rem;
    height: 2rem;
    padding-left: 2rem;
  }
  .datacolor {
    display: inline-block;
    border-radius: 20%;
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
`;

export default Mapbox;
