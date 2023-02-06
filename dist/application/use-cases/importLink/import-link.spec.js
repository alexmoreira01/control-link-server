"use strict";

var _inMemoryLinksRepository = require("../../../../test/repositories/in-memory-links-repository");
var _createLink = require("../createLink/create-link");
var _importLink = require("./import-link");
let createLink;
let importLink;
let linksRepositoryInMemory;
describe("Import links", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new _inMemoryLinksRepository.LinksRepositoryInMemory();
    createLink = new _createLink.CreateLink(linksRepositoryInMemory);
    importLink = new _importLink.ImportLink(linksRepositoryInMemory);
  });
  it('should be able to import new links', async () => {
    await importLink.execute("https://devgo.com.br/");
    expect(linksRepositoryInMemory.links).toHaveLength(12);
  });
  it('should be able to update a link exists', async () => {
    await createLink.execute({
      label: "Você já usa o NestJS?",
      url: "https://devgo.com.br/voce-ja-usa-o-nestjs"
    });
    await importLink.execute("https://devgo.com.br/");
    expect(linksRepositoryInMemory.links).toHaveLength(12);
  });
});