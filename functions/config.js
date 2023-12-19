module.exports = {
    getConfigValue: async (identifiers) => {
        const configData = await setup.models.siteseting.findOne({ where: { identifiers: identifiers } });
        if (configData) {
            return configData.value;
        }
        return null;
    },
    addConfig : async (module , label , value ) => {
        const identifier = module + "_" + label;
        console.log(identifier);

        // Check if identifier already exists then update value
        const isIdentifierExists = await setup.models.siteseting.findOne({ where: { identifiers: identifier } });
        if (isIdentifierExists) {
            const updateData = await setup.models.siteseting.update({ value: value }, { where: { identifiers: identifier } });
            if (updateData) {
                return true;
            }
            return false;
        }

        // If identifier does not exists then create new module and label , value
        const Data = {
            module: module,
            label: label,
            identifiers: identifier,
            value: value
        }
        const configData = await setup.models.siteseting.create(Data);
        if (configData) {
            return true;
        }
        return false;
    }
        
}