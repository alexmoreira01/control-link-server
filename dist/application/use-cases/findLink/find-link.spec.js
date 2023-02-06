"use strict";

var _inMemoryLinksRepository = require("../../../../test/repositories/in-memory-links-repository");
var _appError = require("../../../infra/errors/app-error");
var _createLink = require("../createLink/create-link");
var _findLink = require("./find-link");
let createLink;
let findLink;
let linksRepositoryInMemory;
describe("Find link", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new _inMemoryLinksRepository.LinksRepositoryInMemory();
    createLink = new _createLink.CreateLink(linksRepositoryInMemory);
    findLink = new _findLink.FindLink(linksRepositoryInMemory);
  });
  it('should be able to find link by id', async () => {
    const {
      link
    } = await createLink.execute({
      label: "label a link find",
      url: "http://zeigodak.gm/pe"
    });
    const findLinkById = await findLink.execute(link.id);
    expect(findLinkById.id).toEqual(link.id);
    expect(findLinkById.label).toEqual("label a link find");
    expect(findLinkById.url).toEqual("http://zeigodak.gm/pe");
  });
  it("should not be able to find link not existing", async () => {
    await expect(findLink.execute("5ea08d52-abee-4881-9b23-9d3f266")).rejects.toEqual(new _appError.AppError("Link not existing!"));
  });
});