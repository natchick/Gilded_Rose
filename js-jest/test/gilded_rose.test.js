const { Item, Shop } = require("../src/gilded_rose.js");

describe("Gilded Rose Pin Down Tests", () => {
  test("Normal items should degrade in quality by 1 each day", () => {
    let normalItem = new Item("normal", 10, 20); //build
    const gildedRose = new Shop([normalItem]);

    const items = gildedRose.updateQuality(); //operate

    expect(items[0].quality).toBe(19); //check
  });

    test("Normal items should degrade in SellIn value by 1 each day", () => {
      let normalItem = new Item("normal", 10, 20); //build
      const gildedRose = new Shop([normalItem]);
  
      const items = gildedRose.updateQuality(); //operate
  
      expect(items[0].sellIn).toBe(9); //check
    });

    test('Once the sell by date has passed, Quality degrades twice as fast', () => {
      let normalItem = new Item(
        "normal",
        0,
        20
      );
      const gildedRose = new Shop([normalItem]);

      const items = gildedRose.updateQuality();

      expect(items[0].quality).toBe(18);
    });

    test("The Quality of an item is never negative", () => {
      let normalItem = new Item("normal", 10, 0); //build
      const gildedRose = new Shop([normalItem]);
  
      const items = gildedRose.updateQuality(); //operate
  
      expect(items[0].quality).toBe(0); //check
    });

    test("The Quality of an item is never more than 50", () => {
      let normalItem = new Item("normal", 6, 52); //build
      const gildedRose = new Shop([normalItem]);
  
      const items = gildedRose.updateQuality(); //operate
  
      expect(items[0].quality).toBe(50); //check
    });

    test('"Sulfuras", being a legendary item, never has to be sold or decreases in Quality', () => {
      let Sulfuras = new Item(
        "Sulfuras, Hand of Ragnaros",
        5,
        20
      );
      const gildedRose = new Shop([Sulfuras]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(20);
      expect(items[0].sellIn).toBe(5);
    });

  test('Quality of "Aged Brie" should increase by 1 each day', () => {
    let agedBrie = new Item("Aged Brie", 10, 20);
    const gildedRose = new Shop([agedBrie]);

    const items = gildedRose.updateQuality();

    expect(items[0].quality).toBe(21);
  });

  test('Quality of "Backstage passes" should increase by 3 when there are 5 days or less', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      20
    );
    const gildedRose = new Shop([backstagePass]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  test('Quality of "Backstage passes" should increase by 3 when there are 5 days or less', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      1,
      20
    );
    const gildedRose = new Shop([backstagePass]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(23);
  });

  test('Quality of "Backstage passes" should increase by 3 when there are 5 days or less', () => {
    let backstagePass = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      20
    );
    const gildedRose = new Shop([backstagePass]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(22);
  });

  test('"Conjured" items degrade in Quality twice as fast as normal items', () => {
    let Conjured = new Item(
      "Conjured",
      5,
      20
    );
    const gildedRose = new Shop([Conjured]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(18);
  });


});
