/* eslint-disable no-undef */

export default {
    isTest: process.env.STAGE !== 'prod',
    appName: process.env.DISPLAY_NAME,
    issuesUrl: process.env.ISSUES_URL,
    sourceCodeUrl: process.env.SOURCE_CODE_URL,
    mixpanelToken: process.env.MIXPANEL_TOKEN,
    mixpanelEnabled: false
};
