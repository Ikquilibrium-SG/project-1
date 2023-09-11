const express = require('express')
const app = express()

const moment = require('moment')

app.get('/api', (req, res) => {
    const slackName = req.query.slack_name
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const currentDay = daysOfWeek[moment().day()]
    const utcTime = moment().utc().format()
    const track = req.query.track
    const githubFileUrl = "https://github.com/Ikquilibrium-SG/project-1/blob/main/index.js";
    const githubRepoUrl = "https://github.com/Ikquilibrium-SG/project-1";

    const responseJson = {
        slack_name: "Sammyboi",
        current_day: currentDay,
        utc_time: utcTime,
        track: "backend",
        github_file_url: githubFileUrl,
        github_repo_url: githubRepoUrl,
        status_code: 200
    };

    res.json(responseJson)

    const apiEndpoint = 'https://curious-lolly-3ece45.netlify.app/api'

    const fullUrl = `${apiEndpoint}?slack_name=${responseJson.slack_name}&track=${responseJson.track}`
    res.send(fullUrl)
})


app.listen(80, () => {
    console.log('Server is running on port 80')
})
