const tabs = document.querySelectorAll('.tab');
const contentList = document.querySelectorAll('.tab__content');

for (let tab of tabs) {
    tab.addEventListener('click', shift);
}

function shift(click) {

    for (let tab of tabs) {
        tab.className = 'tab';
    }
    click.target.className = 'tab tab_active';

    for (let article of contentList) {
        article.className = 'tab__content';
    }
    const index = Array.from(tabs).indexOf(click.target);
    contentList[index].className = 'tab__content tab__content_active';
}
