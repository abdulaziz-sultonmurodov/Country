import React from "react";
import {
  YMaps,
  Map,
  FullscreenControl,
  Placemark,
  Panorama,
} from "react-yandex-maps";

export default function SimpleMap({ lastSegment, countries }) {
  return (
    <>
      <YMaps>
        <Map
          width="100%"
          defaultState={{
            center: [
              countries[lastSegment - 1].lat,
              countries[lastSegment - 1].long,
            ],
            zoom: 8,
            controls: [],
          }}
        >
          <Placemark
            geometry={[
              countries[lastSegment - 1].lat,
              countries[lastSegment - 1].long,
            ]}
          />
          <FullscreenControl />
          <Panorama
            defaultPoint={[
              countries[lastSegment - 1].lat,
              countries[lastSegment - 1].long,
            ]}
          />
        </Map>
      </YMaps>
    </>
  );
}
