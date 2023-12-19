const moment = require("moment");
const { elasticSearch, isProduction } = require("../config/config.json");

module.exports = {
  sync: async (dataValues) => {
    try {
      const esIndex = isProduction
        ? elasticSearch.productionIndex
        : elasticSearch.developmentIndex;

      const esbody = dataValues.flatMap((dataValues, index) => [
        { index: { _index: esIndex, _id: dataValues.id } },
        {
          ...dataValues,
          updatedDate: dataValues.updatedDate
            ? moment(dataValues.updatedDate).toDate()
            : null,
          createdDate: dataValues.createdDate
            ? moment(dataValues.createdDate).toDate()
            : null,
        },
      ]);

      const response = await setup.es.bulk({ body: esbody, refresh: true });

      if (response.statusCode !== 200) {
        console.error(
          "Error while syncing ES => ",
          response.body,
          " <= Error while syncing ES"
        );
      }
    } catch (error) {
      console.error(
        "Error while syncing ES => ",
        error,
        " <= Error while syncing ES"
      );
    }
  },

  delete: async (id) => {
    try {
      const index = isProduction
        ? elasticSearch.productionIndex
        : elasticSearch.developmentIndex;

      const response = await setup.es.delete_by_query({
        index: index,
        body: {
          query: {
            match: {
              candidateId: parseInt(id),
            },
          },
        },
      });

      if (response.statusCode !== 200) {
        console.error(
          "Error while deleting ES => ",
          response.body,
          " <= Error while deleting ES"
        );
      }
    } catch (error) {
      console.error(
        "Error while deleting ES => ",
        error,
        " <= Error while deleting ES"
      );
    }
  },
};
