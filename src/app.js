import './style/_module.scss';
import 'particles.js';

const DEBOUNCE_MS = 200;
const SETVIEWPORTHEIGHT_SELECTOR = 'js-setviewportsize';

class App {
    constructor() {
        this._cache = {};
        this.initialize();
    }

    initialize() {
        window.addEventListener('resize', () => this.onResize());
        this.onResize();

        particlesJS.load('particles-js', 'assets/particles.json');
    }

    onResize() {
        this._cache.viewport = null;
        this.setViewportSize();
    }

    updateViewportInformation() {
        return this._cache.viewport = {
            width: window.innerWidth,
            height: window.innerHeight,
        };
    }

    getViewportInformation() {
        return this._cache.viewport || this.updateViewportInformation();
    }

    setViewportSize($el) {
        let elements = document.querySelectorAll(`.${SETVIEWPORTHEIGHT_SELECTOR}`);
        let viewportSize = this.getViewportInformation();

        elements.forEach((el) => el.setAttribute('style', `max-width: ${viewportSize.width}px; max-height: ${viewportSize.height}px`));
    }
}

window.onload = function() {
	new App();
};
