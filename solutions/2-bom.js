// BEGIN
export default (targetUrl) => {
    window.location.href = targetUrl;
    return navigator.appCodeName + '/' + navigator.appVersion + ' ' + window.location.href;
}
// END
