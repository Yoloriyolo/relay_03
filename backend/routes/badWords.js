const request = require('request')

/*  HOW TO USE
    const test = require('./routes/badWords')
    test('욕설 문장').then((result) => console.log(result))
    return true if 욕
    return false if 욕 아님
*/


const badWords = (words) => new Promise((resolve, reject) => {
    const options = {
        uri: 'http://104.154.113.3/chk',
        method: 'POST',
        body: {
            "text": words
        },
        json: true
    }

    request.post(options, function (err, httpResponse, body) {
        if (body === '욕아님') {
            resolve(false)
        } else {
            resolve(true)
        }
    })
})



module.exports = badWords