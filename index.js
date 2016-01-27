const div(className) => {
  let node = document.createElement('div');

  node.classList.add(className);
  return node;
}

const defaultOffset = 12;
const positions = ['top', 'right', 'bottom'];

export default class Tooltip {
  constructor(rootNode = null, options = {}) {
    this.type = options.type || 'default';

    this.title = options.title;
    this.subtitle = options.subtitle;

    this.shown = false;

    this.tooltip = this.createTooltip();
    this.tooltip.on('click', (event) => {
      this.hide();
      event.stopPropagation();
    });

    if (rootNode) {
      this.position(rootNode);
    }
  }

  position(target, position = 'top') {
    let rects = target.getBoundingClientRect();
    let bodyTop = Math.abs(document.body.getBoundingClientRect().top);
    this.positionClass = position;
    this.target = target;
    positions.forEach(className => this.tooltip.classList.remove(className));
    if (position == 'top') {
      this.tooltip.style.left = `${rects.left - (this.tooltip.clientWidth / 2) + (rects.width / 2)}px`;
      this.tooltip.style.top = `${rects.top + bodyTop - defaultOffset - this.tooltip.clientHeight}px`;
    }

    if (position == 'right') {
      this.tooltip.style.left = `${rects.left + rects.width}px`;
      this.tooltip.style.top = `${rects.top + bodyTop}px`;
    }

    if (position == 'bottom') {
      this.tooltip.style.left = `${rects.left - (this.tooltip.clientWidth / 2) + (rects.width / 2)}px`;
      this.tooltip.style.top = `${rects.bottom + bodyTop - defaultOffset}px`;
    }

    this.tooltip.classList.add(this.positionClass);
  }

  createTooltip() {
    let tooltip = div('tooltip');
    let title = div('tooltip-title');
    let subtitle = div('tooltip-subtitle');

    if (this.type) {
      tooltip.classList.add(this.type);
    }

    let updateContent = this.updateContent = (titleText = this.title, subtitleText = this.subtitle) => {
      title.textContent = titleText;
      subtitle.textContent = subtitleText;
    };

    updateContent();

    [title, subtitle].forEach((el) => tooltip.appendChild(el));
    document.body.appendChild(tooltip);

    return tooltip;
  }

  hide() {
    this.tooltip.classList.remove('shown');
    this.shown = false;
  }

  show() {
    this.tooltip.classList.add('shown');
    this.shown = true;
  }
}
