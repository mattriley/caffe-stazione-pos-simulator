import mixpanel from 'mixpanel-browser';

export default ({ constants }) => () => {

    mixpanel.init(constants.mixpanelToken, { debug: constants.isTest });

    return { mixpanel };

};
