browser.commands.onCommand.addListener(async function(command) {
    const idx = command.slice(-1) - 1;
    const tabs = await browser.tabs.query({ currentWindow: true, hidden: false});
    const tab = tabs.length > idx ? idx : tabs.length-1;
    browser.tabs.update(tabs[tab].id, { active: true });
});
