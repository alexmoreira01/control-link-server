"use strict";

var _inMemoryLinksRepository = require("../../../../test/repositories/in-memory-links-repository");
var _appError = require("../../../infra/errors/app-error");
var _createLink = require("./create-link");
let createLink;
let linksRepositoryInMemory;
describe("Create link", () => {
  beforeEach(() => {
    linksRepositoryInMemory = new _inMemoryLinksRepository.LinksRepositoryInMemory();
    createLink = new _createLink.CreateLink(linksRepositoryInMemory);
  });
  it('should be able to create a new link', async () => {
    const {
      link
    } = await createLink.execute({
      label: "label a link",
      url: "url a link"
    });
    expect(link).toHaveProperty("id");
    expect(linksRepositoryInMemory.links).toHaveLength(1);
  });
  it("should not be able to create a link with title equals", async () => {
    await createLink.execute({
      label: "labelTest",
      url: "urlTest2"
    });
    await expect(createLink.execute({
      label: "labelTest",
      url: "urlTest2"
    })).rejects.toEqual(new _appError.AppError("Title already exists!"));
  });
});