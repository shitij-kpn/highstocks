const makeArray = (series, volumes) => {
  const newArray = [];
  for (let index = 0; index < series.length; index++) {
    newArray.push([series[index], volumes[index]]);
  }
  return newArray;
};

export default (stocksData) => {
  const chartName = stocksData["Meta Data"]["2. Symbol"];
  const data = stocksData["Time Series (Daily)"];
  const series = Object.keys(data)
    .map((date) => new Date(date).getTime())
    .reverse();
  const volumes = Object.values(data)
    .map((v) => parseInt(v["5. volume"]))
    .reverse();
  const newArray = makeArray(series, volumes);

  const options = {
    credits: {
      enabled: false,
    },
    title: {
      text: `${chartName} Stocks Chart`,
    },
    series: [
      {
        name: chartName,
        data: newArray,
      },
    ],
    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 800,
          },
        },
      ],
    },
  };
  return options;
};
