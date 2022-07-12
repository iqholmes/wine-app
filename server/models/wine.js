const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/wine-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const wineSchema = new Schema ({
  winery: String,
  wine: String,
  region: String,
  vintage: Number,
  blend: String,
  pairing: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

const Wine = mongoose.model('wine', wineSchema);

let daou1 = new Wine({winery: 'Daou Vineyards', wine:'Patrimony Caves des Lions', region:'Adelaida District, USA', vintage: 2017, blend: 'Cabernet Franc - Cabernet Sauvignon', pairing: 'Beef, Lamb, Venison', comments: []})
daou1.save();

let daou2 = new Wine({winery: 'Daou Vineyards', wine:'Eye of the Falcon', region:'Paso Robles, CA, USA', vintage: 2019, blend: 'Cabernet - Petit Verdot', pairing: 'Lamb', comments: []})
daou2.save();

let kc1 = new Wine({winery: 'Kim Crawford', wine:'Pinot Noir', region:'Malborough, NZ', vintage: 2020, blend: 'Pinor Noir', pairing: 'Meaty and Oily Fish', comments: []})
kc1.save();

let kc2 = new Wine({winery: 'Kim Crawford', wine:'Dry Riesling', region:'Malborough, NZ', vintage: 2013, blend: 'Riesling', pairing: 'Salads and Green Vegetables', comments: []})
kc2.save();

let ah1 = new Wine({winery: 'Austin Hope', wine:'Syrah', region:'Templeton Gap District, CA, USA', vintage: 2020, blend: 'Syrah', pairing: 'Lamb', comments: []})
ah1.save();

let ah2 = new Wine({winery: 'Austin Hope', wine:'Cabernet Sauvignon', region:'Paso Robles, CA, USA', vintage: 2020, blend: 'Cabernet Sauvignon', pairing: 'Beef and Venison', comments: []})
ah2.save();

module.exports = Wine;
