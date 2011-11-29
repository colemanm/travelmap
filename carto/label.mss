#city_label {
  text-name: '[city]';
  text-face-name: 'Inconsolata XL Bold';
  text-placement: point;
  text-fill: #fff;
  text-halo-fill: #242424;
  text-halo-radius: 1.5;
  text-transform: uppercase;
  text-size: 13;
  text-character-spacing: 1.0;
  /*text-allow-overlap: true;*/
  text-dy: -10;
}

#state_label[ISO='USA'] {
  text-name: '[Postal]';
  text-face-name: 'Inconsolata XL Bold';
  text-placement: point;
  text-fill: lighten(#5a5a5a, 15);
  text-halo-fill: lighten(#5a5a5a, 5);
  text-halo-radius: 1.0;
  text-size: 8;
  text-character-spacing: 3.0;
}