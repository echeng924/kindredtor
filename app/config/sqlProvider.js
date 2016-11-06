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
    findEmail: sql('/sql/member/findEmail.sql'),
    findId: sql('/sql/member/findById.sql'),
    findByMatch: sql('/sql/member/findByMatch.sql'),
    update: sql('/sql/member/update.sql'),
    updateNoPicture: sql('/sql/member/updateNoPicture.sql'),
  },
  messages: {
    getMessagesByGroup: sql('/sql/messages/getMessagesByGroup.sql'),
    getGroupsByUser: sql('/sql/messages/getGroupsByUser.sql'),
  },
};

module.exports = sqlProvider;
