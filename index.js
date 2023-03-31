errorListener: function (e) {
    const {
      detail: {
        code: detailCode = null,
        message: detailMessage = 'unknown',
        category: detailCategory = null,
        severity: detailSeverity = null
      } = {},
      code: eventCode = null,
      severity: eventSeverity = null
    } = e;
  
    const code = detailCode || eventCode;
    let msg = detailMessage;
    const category = detailCategory;
    const severity = detailSeverity;
  
    const typeDicc = {
      1: 'network',
      2: 'text',
      3: 'media',
      4: 'manifest',
      5: 'streaming',
      6: 'drm',
      7: 'player',
      8: 'cast',
      9: 'storage'
    };
  
    if (category && category < 10 && category > 0) {
      msg = typeDicc[category] || msg;
    }
  
    const isFatal = severity === 2 && ![1002, 3016].includes(code);
    const errorMethod = isFatal ? 'fireFatalError' : 'fireError';
  
    this[errorMethod](code, msg, undefined, undefined, 'errorListener');
  };
  