"use strict";

var _inMemoryLinksRepository = require("../../../../test/repositories/in-memory-links-repository");
var _appError = require("../../../infra/errors/app-error");
var _createLink = require("../createLink/create-link");
var _deleteLink = require("./delete-link");
let createLink;
let deleteLink;
let linksRepositoryInMemory;
describe("Delete link", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new _inMemoryLinksRepository.LinksRepositoryInMemory();
    createLink = new _createLink.CreateLink(linksRepositoryInMemory);
    deleteLink = new _deleteLink.DeleteLink(linksRepositoryInMemory);
  });
  it('should be able to delete a link by id', async () => {
    const {
      link
    } = await createLink.execute({
      label: "label a link delete",
      url: "http://lulohkow.kw/imagera"
    });
    await deleteLink.execute(link.id);
    expect(linksRepositoryInMemory.links).toHaveLength(0);
  });
  it("should not be able to delete link not existing", async () => {
    await expect(deleteLink.execute("5ea08d52-abee-4881-9b23-9d3f266")).rejects.toEqual(new _appError.AppError("Link not existing!"));
  });
});