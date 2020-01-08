// component's config object.
const components = {
    firstPage: {
      component: 'FirstPage',
      url: '/',
    },
    mainPage: {
      component: 'MainPage',
      url: '/Main/:category',
    },
    addPage: {
      component: 'AddPage',
      url: '/Add',
    },
    detailPage:{
      component: 'DetailPage',
      url: '/Detail/:pid',
    }
  };
  
  export default {
    //role name as a key.
    admin: {
      routes: [...Object.values(components)],
    },
    user: {
      routes: [
        components.firstPage,
        components.mainPage,
        components.addPage,
        components.detailPage
      ]
    },
    guest: {
      routes: [
        components.firstPage,
        components.mainPage,
        components.detailPage
      ]
    }
  }