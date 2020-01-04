// component's config object.
const components = {
    firstPage: {
      component: 'FirstPage',
      url: '/',
    },
    mainPage: {
      component: 'MainPage',
      url: '/Main/Architectures',
    },
    addPage: {
      component: 'AddPage',
      url: '/Add',
    }
  };
  
  export default {
    //role name as a key.
    // admin: {
    //   routes: [...Object.values(components)],
    // },
    user: {
      routes: [
        components.firstPage,
        components.mainPage,
        components.addPage
      ]
    },
    guest: {
      routes: [
        components.firstPage,
        components.mainPage,
      ]
    }
  }