@green: #5eff00;

Map {
  background-image: url('images/grey-sandstone.png');
  /* background-color: #242424; */
}

#coast {
  ::outline {
    line-color: lighten(#5a5a5a, 20);
    line-width: 1;
    line-join: round;
  }
  polygon-fill: #5a5a5a;
  polygon-opacity: 0.6;
}

#countries {
  line-color: lighten(#5a5a5a, 10);
  line-width: 1.5;
}

#states {
  line-color: lighten(#5a5a5a, 10);
  line-width: 0.4;
}

#lakes[ScaleRank>=0][ScaleRank<=4] {
  polygon-pattern-file: url('images/grey-sandstone.png');
  line-color: lighten(#5a5a5a, 20);
  line-width: 0.7;
}

#cities::outerglow {
  marker-fill: darken(@green, 40);
  marker-height: 7.0;
  marker-allow-overlap: true;
  marker-line-width: 0;
  marker-opacity: 0.3;
}
#cities::innerglow {
  marker-fill: darken(@green, 20);
  marker-height: 5.0;
  marker-allow-overlap: true;
  marker-line-width: 0;
  marker-opacity: 0.5;
}
#cities {
  marker-fill: @green;
  marker-height: 3.0;
  marker-allow-overlap: true;
  marker-line-width: 0;
}

#travel_lines::outerglow {
  line-width: 5.0;
  line-color: darken(#0af, 50);
  line-opacity: 0.3;
}
#travel_lines::innerglow {
  line-width: 3.0;
  line-color: darken(#0af, 20);
  line-opacity: 0.5;
}
#travel_lines::line {
  line-width: 1.0;
  line-color: #00aaff;
  line-opacity: 0.7;
}