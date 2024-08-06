import "./Features.css"
export function Features() {
    return (
        <section className="featuresList">
            <div className="feature">
                <div className="icon">💡</div>
                <h2 className="title">Instant Server Start</h2>
                <p className="description">On demand file serving over native ESM, no bundling required!</p>
            </div>
            <div className="feature">
                <div className="icon">⚡️</div>
                <h2 className="title">Lightning Fast HMR</h2>
                <p className="description">Hot Module Replacement (HMR) that stays fast regardless of app size.</p>
            </div>
            <div className="feature">
                <div className="icon">🛠️</div>
                <h2 className="title">Rich Features</h2>
                <p className="description">Out-of-the-box support for TypeScript, JSX, CSS and more.</p>
            </div>
            <div className="feature">
                <div className="icon">📦</div>
                <h2 className="title">Optimized Build</h2>
                <p className="description">Pre-configured Rollup build with multi-page and library mode support.</p>
            </div>
            <div className="feature">
                <div className="icon">🔩</div>
                <h2 className="title">Universal Plugins</h2>
                <p className="description">Rollup-superset plugin interface shared between dev and build.</p>
            </div>
            <div className="feature">
                <div className="icon">🔑</div>
                <h2 className="title">Fully Typed APIs</h2>
                <p className="description">Flexible programmatic APIs with full TypeScript typing.</p>
            </div>
        </section>
    );
}