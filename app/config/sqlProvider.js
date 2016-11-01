const QueryFile = require('pg-promise').QueryFile;
const path = require('path');

function sql(file) {
  const fullPath = path.join(__dirname, file);
  return new QueryFile(fullPath, { minify: true });
}

const sqlProvider = {
  matches: {
    all: sql('/sql/match/all.sql'),
    find: sql('/sql/match/find.sql'),
    create: sql('/sql/match/create.sql'),
    delete: sql('/sql/match/delete.sql'),
  },
  members: {
    all: sql('/sql/member/all.sql'),
    create: sql('/sql/member/create.sql'),
    delete: sql('/sql/member/delete.sql'),
    find: sql('/sql/member/find.sql'),
    update: sql('/sql/member/update.sql'),
  },
};

module.exports = sqlProvider;
