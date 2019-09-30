const baseUrl = 'https://jababy.crazy-cat.cn/';
const authToken = 'Bearer ff41e809ab9107b8d520ecead38a49e4';

module.exports = {
    loginUrl: baseUrl + 'wx/ja/login.php',
    voiceUrl: baseUrl + 'rest/V1/evaluation/voice/text',
    listEvaluationUrl: baseUrl + 'rest/V1/evaluation/evaluation/grid',
    getEvaluationUrl: baseUrl + 'rest/V1/evaluation/evaluation/view',
    saveEvaluationUrl: baseUrl + 'rest/V1/evaluation/evaluation/save',
    evaluationImageUrl: baseUrl + 'media/evaluation',
    authToken: authToken
};