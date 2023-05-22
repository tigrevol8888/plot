import * as Plot from "@observablehq/plot";
import * as d3 from "d3";

export async function metroUnemploymentRidgeline() {
  const data = await d3.csv<any>("data/bls-metro-unemployment.csv", d3.autoType);
  return Plot.plot({
    width: 960,
    height: 1080,
    y: {
      insetTop: -40,
      axis: null
    },
    fy: {
      round: true,
      label: null
    },
    facet: {
      data,
      y: "division",
      marginLeft: 300
    },
    marks: [
      Plot.areaY(data, {x: "date", y: "unemployment", fill: "#eee"}),
      Plot.line(data, {x: "date", y: "unemployment", sort: {fy: "y", order: "descending"}}),
      Plot.ruleY([0])
    ]
  });
}
