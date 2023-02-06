"use strict";

var _tsyringe = require("tsyringe");
var _prismaLinksRepository = require("../database/prisma/repositories/prisma-links-repository");
_tsyringe.container.registerSingleton("LinksRepository", _prismaLinksRepository.PrismaLinksRepository);