let tablist;

function activator(target) {
  tablist.forEach((tab) => {
    document.getElementById(tab.dataset.target).classList.remove('active');
  });
  document.getElementById(target).classList.add('active');
}

function maketabs(node) {
  const tabs = document.createElement('div');
  tabs.classList.add('tabs');
  tabs.id = 'tabs';
  const hometab = document.createElement('div');
  const beerMenutab = document.createElement('div');
  const gallerytab = document.createElement('div');
  const contacttab = document.createElement('div');

  hometab.dataset.target = 'home';
  beerMenutab.dataset.target = 'beer-menu';
  gallerytab.dataset.target = 'gallery';
  gallerytab.id = 'gallery-tab';
  contacttab.dataset.target = 'contact';

  hometab.textContent = 'Home';
  beerMenutab.textContent = 'Beer';
  gallerytab.textContent = 'Gallery';
  contacttab.textContent = 'Contact';

  tablist = [hometab, beerMenutab, gallerytab, contacttab];// contacttab
  tablist.forEach((tab) => {
    tab.classList.add('tab');
    tab.addEventListener('click', (e) => {
      activator(e.target.dataset.target);
    });
    tabs.appendChild(tab);
  });
  node.appendChild(tabs);
}

const tabs = () => {
  const cont = document.createElement('div');
  cont.classList.add('content');
  cont.id = 'content';
  maketabs(cont);
  document.body.appendChild(cont);
};

export { tabs };
