chrome.runtime.onStartup.addListener(async () => {
  const enabled = await chrome.declarativeNetRequest.getEnabledRulesets();
  if (!enabled.includes("ruleset")) {
    chrome.action.setIcon({
      path: Object.fromEntries(
        [16, 32, 48, 128].map((s) => [s, `/images/icon-${s}-off.png`])
      ),
    });
  }
});
