import { css, html, LitElement } from 'lit';
import { ScopedElementsMixin } from '@open-wc/scoped-elements/lit-element.js';

import { OscdIcon } from '@omicronenergy/oscd-ui/icon/OscdIcon.js';
import { OscdTextButton } from '@omicronenergy/oscd-ui/button/OscdTextButton.js';
import { OscdElevation } from '@omicronenergy/oscd-ui/elevation/OscdElevation.js';

export class SysconexLandingPage extends ScopedElementsMixin(LitElement) {
  static properties = {
    heading: { type: String },
    subHeading: { type: String },
    menuPlugins: { type: Array },
  };

  static scopedElements = {
    'oscd-icon': OscdIcon,
    'oscd-text-button': OscdTextButton,
    'oscd-elevation': OscdElevation,
  };

  constructor() {
    super();
    this.heading = '';
    this.subHeading = '';
    this.menuPlugins = [];
    this.shell = null;
  }

  syncFromShell() {
    if (!this.shell) {
      return;
    }

    this.heading = this.shell.getAttribute('landingPageHeading') ?? '';
    this.subHeading = this.shell.getAttribute('landingPageSubHeading') ?? '';
    this.menuPlugins =
      this.shell?.plugins?.menu?.filter(plugin => plugin.requireDoc !== true) ??
      [];
  }

  runMenuPlugin(plugin) {
    if (!this.shell) {
      return;
    }

    const pluginInstance = this.shell.shadowRoot?.querySelector(plugin.tagName);
    pluginInstance?.run?.();
  }

  connectedCallback() {
    super.connectedCallback();
    this.shell = this.closest('oscd-shell');
    if (!this.shell) {
      return;
    }

    this.shell.addEventListener('plugins-updated', this.handlePluginsUpdated);
    this.syncFromShell();
  }

  disconnectedCallback() {
    this.shell?.removeEventListener(
      'plugins-updated',
      this.handlePluginsUpdated,
    );
    super.disconnectedCallback();
  }

  handlePluginsUpdated = () => {
    this.syncFromShell();
  };

  render() {
    return html`
      <h1 class="heading">${this.heading}</h1>
      <h2 class="sub-heading">${this.subHeading}</h2>
      <div class="menu-plugins-grid">
        ${this.menuPlugins.map(
          plugin =>
            html`<oscd-text-button
              class="menu-plugin-item"
              @click=${() => {
                this.runMenuPlugin(plugin);
              }}
            >
              <oscd-elevation></oscd-elevation>
              <div class="menu-plugin-item-content">
                <oscd-icon>${plugin.icon}</oscd-icon>
                <span>${plugin.name}</span>
                <div class="menu-plugin-item-corner-wedge"></div>
              </div>
            </oscd-text-button> `,
        )}
      </div>
      <div class="logo-openscd">
        Powered by <img src="./oscd-logo.jpeg" alt="OpenSCD Logo" width="100" />
      </div>
    `;
  }

  static styles = css`
    .host {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    .heading {
      color: var(--oscd-theme-primary);
      text-align: center;
      font-family: var(--oscd-theme-text-font);
      font-size: 50px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      margin-block-start: 64px;
      margin-block-end: 8px;

      --md-icon-size: 50px;
    }

    .sub-heading {
      color: var(--oscd-theme-primary);
      text-align: center;
      font-family: var(--oscd-theme-text-font);
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 65.194px;

      margin-block-end: 168px;
    }

    .menu-plugins-grid {
      width: 60%;
      display: flex;
      flex-wrap: wrap;
      gap: 95px;
      justify-content: center;
      margin: 0 auto;
      padding: 16px 0;
    }

    .menu-plugin-item {
      --md-text-button-container-shape: 2px;
      display: flex;
      flex-direction: row;
      align-items: center;
      text-align: center;
      padding: 8px;
      color: var(--oscd-base3);
      background: var(--oscd-base01);
      transition: background-color 0.3s;
      cursor: pointer;
    }

    .menu-plugin-item:hover {
      --md-elevation-level: 2;
    }

    .menu-plugin-item-content {
      color: var(--oscd-base3);
      width: 240px;
      height: 180px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 24px;
      font-family: 'Roboto';
    }

    .menu-plugin-item-content oscd-icon {
      --md-icon-size: 54px;
    }

    .menu-plugin-item-content span {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
    }

    .menu-plugin-item-corner-wedge {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 50px;
      height: 50px;
      background: linear-gradient(
        to top left,
        var(--omicron-yellow) 50%,
        transparent 50%
      );
    }

    .logo-openscd {
      font-family: Roboto, sans-serif;
      font-weight: 300;
      color: var(--oscd-base3);
      position: absolute;
      text-align: center;
      right: 10px;
      bottom: 10px;
      width: 100px;
    }
  `;
}

customElements.define('sysconex-landing-page', SysconexLandingPage);
