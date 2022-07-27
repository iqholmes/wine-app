const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/wine-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const wineSchema = new Schema ({
  image: String,
  winery: String,
  wine: String,
  region: String,
  vintage: Number,
  blend: String,
  pairing: String,
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }]
});

const Wine = mongoose.model('wine', wineSchema);

// let daou1 = new Wine({image: 'https://www.wine-searcher.com/images/labels/22/86/11152286.jpg?width=466&height=400&fit=bounds', winery: 'Daou Vineyards', wine:'Patrimony Caves des Lions', region:'Adelaida District, USA', vintage: 2017, blend: 'Cabernet Franc - Cabernet Sauvignon', pairing: 'Beef, Lamb, Venison', comments: []})
// daou1.save();

// let daou2 = new Wine({image: 'https://www.wine-searcher.com/images/labels/05/72/10980572.jpg?width=466&height=400&fit=bounds', winery: 'Daou Vineyards', wine:'Eye of the Falcon', region:'Paso Robles, CA, USA', vintage: 2016, blend: 'Cabernet - Petit Verdot', pairing: 'Lamb', comments: []})
// daou2.save();

// let kc1 = new Wine({image: 'https://www.wine-searcher.com/images/labels/58/50/11385850.jpg?width=466&height=400&fit=bounds', winery: 'Kim Crawford', wine:'Pinot Noir', region:'Malborough, NZ', vintage: 2020, blend: 'Pinor Noir', pairing: 'Meaty and Oily Fish', comments: []})
// kc1.save();

// let kc2 = new Wine({image: 'https://www.wine-searcher.com/images/labels/31/06/10533106.jpg?width=466&height=400&fit=bounds', winery: 'Kim Crawford', wine:'Dry Riesling', region:'Malborough, NZ', vintage: 2013, blend: 'Riesling', pairing: 'Salads and Green Vegetables', comments: []})
// kc2.save();

// let ah1 = new Wine({image: 'https://hopefamilywines.com/wp-content/uploads/2020/09/OUTSHINERY-HopeFamily-Rhone-Syrah-NV_334x1286.png', winery: 'Austin Hope', wine:'Syrah', region:'Templeton Gap District, CA, USA', vintage: 2020, blend: 'Syrah', pairing: 'Lamb', comments: []})
// ah1.save();

// let ah2 = new Wine({image: 'https://hopefamilywines.com/wp-content/uploads/2021/12/OUTSHINERY-HopeFamily-AustinHope-CabSauv_334x1286.png', winery: 'Austin Hope', wine:'Cabernet Sauvignon', region:'Paso Robles, CA, USA', vintage: 2020, blend: 'Cabernet Sauvignon', pairing: 'Beef and Venison', comments: []})
// ah2.save();

module.exports = Wine;
