"use strict";

var _inMemoryLinksRepository = require("../../../../test/repositories/in-memory-links-repository");
var _createLink = require("../createLink/create-link");
var _listLinks = require("./list-links");
let createLink;
let listLinks;
let linksRepositoryInMemory;
describe("List links", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new _inMemoryLinksRepository.LinksRepositoryInMemory();
    createLink = new _createLink.CreateLink(linksRepositoryInMemory);
    listLinks = new _listLinks.ListLinks(linksRepositoryInMemory);
  });
  it('should be able to list all links', async () => {
    await createLink.execute({
      label: "label a linkOne",
      url: "http://nugzetde.gov/jotdejjuz"
    });
    await createLink.execute({
      label: "label a linkTwo",
      url: "http://kiwseggop.mq/ka"
    });
    const links = await listLinks.execute();
    expect(links).toHaveLength(2);
    expect(links[0].label).toEqual("label a linkOne");
    expect(links[0].url).toEqual("http://nugzetde.gov/jotdejjuz");
    expect(links[1].label).toEqual("label a linkTwo");
    expect(links[1].url).toEqual("http://kiwseggop.mq/ka");
  });
});