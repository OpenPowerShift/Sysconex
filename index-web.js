// import '@webcomponents/scoped-custom-element-registry';
// import '../dist/oscd-shell.js';
import OscdMenuOpen from '@omicronenergy/oscd-menu-open';
import OscdMenuSave from '@omicronenergy/oscd-menu-save';
import {
  OscdMenuFileClose,
  OscdMenuFileRename,
  OscdMenuNew,
} from '@omicronenergy/oscd-menu-commons';
import OscdBackgroundEditV1 from '@omicronenergy/oscd-background-editv1';
import OscdEditorSource from '@omicronenergy/oscd-editor-source';
import { plugins } from './plugins.js';

const _customElementsDefine = window.customElements.define;
window.customElements.define = (name, cl, conf) => {
  if (!customElements.get(name)) {
    try {
      _customElementsDefine.call(window.customElements, name, cl, conf);
    } catch (e) {
      console.warn(e);
    }
  }
};

const oscdShell = document.querySelector('oscd-shell');
const { registry } = oscdShell;
registry.define('oscd-menu-open', OscdMenuOpen);
registry.define('oscd-menu-save', OscdMenuSave);
registry.define('oscd-menu-new', OscdMenuNew);
registry.define('oscd-menu-file-rename', OscdMenuFileRename);
registry.define('oscd-menu-file-close', OscdMenuFileClose);
registry.define('oscd-background-editv1', OscdBackgroundEditV1);
registry.define('oscd-editor-source', OscdEditorSource);

oscdShell.plugins = plugins;

const params = new URL(document.location).searchParams;
for (const [name, value] of params) {
  oscdShell.setAttribute(name, value);
}

// const sclDocString = await fetch('sample.scd').then(r => r.text());
// const sclDocString = `<?xml version="1.0" encoding="UTF-8"?>
//   <SCL version="2007" revision="B" xmlns="http://www.iec.ch/61850/2003/SCL">
//   <Substation name="A1" desc="test substation"></Substation>
// </SCL>`;
// oscdShell.docs = {
//   ['sample.scd']: new DOMParser().parseFromString(
//     sclDocString,
//     'application/xml',
//   ),
// };
// oscdShell.docName = 'sample.scd';
