const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
    name: "northmanTesting2",
        exposes: {
            './Tab1PageModule': './src/app/tab1/tab1.module.ts',
        },
    
 

    shared: {
        ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    },

});

