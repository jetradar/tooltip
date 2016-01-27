# tooltip
simple pure javascript tooltip

## How to use
```javascript
import Tooltip from 'toolpip';

let tooltip = new Tooltip(document.body, {type: 'help'}); // node to attach

tooltip.position(document.querySelector('.node-to-pin-tooltip-to')); // calculate layout position of tooltip nearby to passed element

tooltip.show();

```

## API Reference
`tooltip.show()` — opens a tooltip
`tooltip.hide()` — hides it
`tooltip.position(node, direction)` — calculates the position of tooltip relative to passed node. Default positioning is «top» which means the tooltip to be appeared on the top of the element. Also can be «right» and «bottom»
`tooltip.updateContent(titleText, subtitleText)` — changes title and subtitle text content of tooltip

## Options
`{type: 'help'}` — adds «help» class to tooltip element
