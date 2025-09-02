import { html, render } from 'lit';
import { Key } from 'webdriverio';

describe('keys', () => {
  it('browser keys', async () => {
    const fixtureData = html`<my-component></my-component>`;
    render(fixtureData, document.body);
    await browser.keys(Key.Enter);
    await browser.keys(Key.Space);
    await browser.keys(Key.Escape);
  });
});
