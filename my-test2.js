import { html, LitElement, render } from 'lit';



describe('MoveTo', () => {
  it('MoveTo', async () => {
    const fixtureData = html`
      <div style="height: 300px; width: 300px;">
        <div style="height: 100px; width: 100px;" id="test"></div>
        <in-tooltip for="test">MyTest</in-tooltip>
      </div>
    `;
    render(fixtureData, document.body);
    await $('#test').moveTo();
  });
});
