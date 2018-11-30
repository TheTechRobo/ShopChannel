var DLTask = new wiiDLTask();
//Download Task majigs.
function OnSetTask()
{
    try {
        var strTaskUrl = "."; // This is the task URL for the Dynamic Banner. We'll need to implement dynamic banners for OSC on the server.
        var nTaskInterval = 1440;
        DLTask.addDownloadTask(strTaskUrl, nTaskInterval);
    } catch (err) {
    }
}