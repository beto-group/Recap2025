
async function View({ folderPath }) {
    if (!folderPath) throw new Error("View requires folderPath prop");
    dc.currentFolderPath = folderPath;

    const SafeView = () => {
        dc.useEffect(() => {
            const style = document.createElement('style');
            style.id = 'recap-2025-status-bar-suppression';
            style.textContent = `
                .workspace-leaf-content, .markdown-preview-view, .cm-scroller {
                    overflow: hidden !important;
                }
                .status-bar {
                    display: none !important;
                }
            `;
            document.head.appendChild(style);
            return () => {
                const el = document.getElementById('recap-2025-status-bar-suppression');
                if (el) el.remove();
            };
        }, []);

        const [app, setApp] = dc.useState(null);

        dc.useEffect(() => {
            const load = async () => {
                try {
                    const appPath = folderPath + '/src/App.jsx';
                    const { AnimationTool } = await dc.require(appPath);
                    setApp({ AnimationTool });
                } catch (e) {
                    console.error("Failed to load Recap 2025 component:", e);
                }
            };
            load();
        }, []);

        if (!app) return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>Loading Recap 2025...</div>;

        const { AnimationTool } = app;
        return <AnimationTool folderPath={folderPath} />;
    };

    return <SafeView />;
}

return { View };
