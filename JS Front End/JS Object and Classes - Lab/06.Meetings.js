function bookMeeting(arr)
{
    const meetings = {};

    for (const row of arr) 
    {
        const [day, name] = arr.split(" ");

        if(!meetings.hasOwnProperty(day))
        {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
        else{
            console.log(`Conflict on ${day}`);
        }
    }

    console.log(meetings);
}

bookMeeting(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])