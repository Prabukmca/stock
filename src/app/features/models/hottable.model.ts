export interface HottableModel {
  id: number;
  name: string;
  address: string;
}

export interface GridModel {
  id: number,
  title : string,
  author: string
}

export const flagRenderer = function(
  instance,
  td,
  row,
  col,
  prop,
  value,
  cellProperties
) {
  var currencyCode = value;
  while (td.firstChild) {
    td.removeChild(td.firstChild);
  }
  if (this.currencyCodes.indexOf(currencyCode) > -1) {
    var flagElement = document.createElement("DIV");
    flagElement.className = "flag " + currencyCode.toLowerCase();
    td.appendChild(flagElement);
  } else {
    var textNode = document.createTextNode(value === null ? "" : value);

    td.appendChild(textNode);
  }
};

export const currencyCodes = [
    "EUR",
    "JPY",
    "GBP",
    "CHF",
    "CAD",
    "AUD",
    "NZD",
    "SEK",
    "NOK",
    "BRL",
    "CNY",
    "RUB",
    "INR",
    "TRY",
    "THB",
    "IDR",
    "MYR",
    "MXN",
    "ARS",
    "DKK",
    "ILS",
    "PHP"
  ];
