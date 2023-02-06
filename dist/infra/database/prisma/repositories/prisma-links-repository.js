"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaLinksRepository = void 0;
var _prismaLinkMapper = require("../mappers/prisma-link-mapper");
var _prismaService = _interopRequireDefault(require("../prisma-service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class PrismaLinksRepository {
  constructor() {
    this.prisma = _prismaService.default;
  }
  async createLink(link) {
    const raw = _prismaLinkMapper.PrismaLinkMapper.toPrisma(link);
    await this.prisma.link.create({
      data: raw
    });
  }
  async listLinks() {
    const allLinks = await this.prisma.link.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });
    return allLinks.map(link => {
      return _prismaLinkMapper.PrismaLinkMapper.toDomain(link);
    });
  }
  async findLinkById(linkId) {
    const linkExists = await this.prisma.link.findUnique({
      where: {
        id: linkId
      }
    });
    if (!linkExists) {
      return null;
    }
    return _prismaLinkMapper.PrismaLinkMapper.toDomain(linkExists);
  }
  async findLinkByLabel(label) {
    const link = await this.prisma.link.findUnique({
      where: {
        label: label
      }
    });
    if (!link) {
      return null;
    }
    return _prismaLinkMapper.PrismaLinkMapper.toDomain(link);
  }
  async updateLink(link) {
    const raw = _prismaLinkMapper.PrismaLinkMapper.toPrisma(link);
    await this.prisma.link.update({
      where: {
        id: raw.id
      },
      data: raw
    });
  }
  async deleteLinkById(linkId) {
    await this.prisma.link.delete({
      where: {
        id: linkId
      }
    });
  }
}
exports.PrismaLinksRepository = PrismaLinksRepository;