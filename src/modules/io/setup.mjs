import mixpanel from 'mixpanel-browser';

export default ({ config }) => () => {

    mixpanel.init(config.mixpanelToken, { debug: config.isTest });

    return { mixpanel };

};
