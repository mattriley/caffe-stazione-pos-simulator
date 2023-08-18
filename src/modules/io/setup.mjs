import mixpanel from 'mixpanel-browser';

export default ({ config }) => () => {

    if (config.mixpanelEnabled) {
        mixpanel.init(config.mixpanelToken, { debug: config.isTest });
    }

    return { mixpanel };

};
