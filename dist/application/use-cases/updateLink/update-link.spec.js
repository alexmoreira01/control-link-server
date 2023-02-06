"use strict";

var _inMemoryLinksRepository = require("../../../../test/repositories/in-memory-links-repository");
var _appError = require("../../../infra/errors/app-error");
var _createLink = require("../createLink/create-link");
var _updateLink = require("./update-link");
let createLink;
let updateLink;
let linksRepositoryInMemory;
describe("Update link", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new _inMemoryLinksRepository.LinksRepositoryInMemory();
    createLink = new _createLink.CreateLink(linksRepositoryInMemory);
    updateLink = new _updateLink.UpdateLink(linksRepositoryInMemory);
  });
  it('should be able to update a link', async () => {
    const {
      link
    } = await createLink.execute({
      label: "label a link",
      url: "url a link"
    });
    await updateLink.execute({
      linkId: link.id,
      label: "label update",
      url: "http://ja.ht/zubjawdik"
    });
    expect(linksRepositoryInMemory.links).toHaveLength(1);
    expect(linksRepositoryInMemory.links[0].label).toEqual("label update");
    expect(linksRepositoryInMemory.links[0].url).toEqual("http://ja.ht/zubjawdik");
  });
  it("should not be able to update a link not exists", async () => {
    await expect(updateLink.execute({
      linkId: "0b1492ce-865b-4477-92cd-b810e0597",
      label: "label update",
      url: "http://ruvzatur.mg/joc"
    })).rejects.toEqual(new _appError.AppError("Link not exists!"));
  });
});