class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const agedBrie = this.items[i].name == 'Aged Brie'
      const sulfuras = this.items[i].name == 'Sulfuras, Hand of Ragnaros'
      const conjured = this.items[i].name == 'Conjured'
      const backstagePass = this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert'

      this.items[i].sellIn -=1;

      if (conjured) {
        this.items[i].quality -= 2;
      }

      if (sulfuras) {
        this.items[i].quality = this.items[i].quality;
        this.items[i].sellIn +=1;
      }

      if (backstagePass) {
        if (this.items[i].quality < 50) {
          this.items[i].quality +=1;
            if (this.items[i].sellIn < 11) {
              this.items[i].quality +=1;
            } if (this.items[i].sellIn < 6) {
                this.items[i].quality +=1;
              }
        }
      }

      if (agedBrie) {
        this.items[i].quality +=1;
      }

      if (!conjured && !sulfuras && !backstagePass && !agedBrie) {
        this.items[i].quality -=1
      }

      else if (this.items[i].sellIn < 0) {
        this.items[i].quality -=1
        } if (this.items[i].sellIn < 0) {
          this.items[i].quality -=1;
          } if (this.items[i].quality > 50) {
            this.items[i].quality = 50;
            } if (this.items[i].quality < 0) {
              this.items[i].quality = 0;
              }
            }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
