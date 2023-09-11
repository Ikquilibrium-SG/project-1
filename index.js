const express = require('express')
const app = express()

const moment = require('moment')

app.get('/', (req, res) => {
    const slackName = 'Sammyboi'
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = daysOfWeek[moment().day()]
    const utcTime = moment().utc().format()
    const track = 'backend'
    const githubFileUrl = "";
    const githubRepoUrl = "";

    const responseJson = {
        slack_name: slackName,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    };

    res.json(responseJson)
})

app.listen(3000, () => {
    console.log('Server started on port 3000')
})
