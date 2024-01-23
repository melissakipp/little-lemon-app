const pageNavigation = new Map();

pageNavigation.set('home', {
  name: 'Home',
  path: '/',
  anchorable: true
});

pageNavigation.set('about', {
  name: 'About',
  path: '/about',
  anchorable: true
});

pageNavigation.set('menu', {
  name: 'Menu',
  path: '/menu',
  anchorable: true
});

pageNavigation.set('reservation', {
  name: 'Reservations',
  path: '/reservations',
  anchorable: true
});

pageNavigation.set('confirmedReservation', {
  name: 'Confirmed Reservation',
  path: '/confirmed-reservation',
  anchorable: false
});

pageNavigation.set('orderOnline', {
  name: 'Order Online',
  path: '/order-online',
  anchorable: true
});

pageNavigation.set('login', {
  name: 'Login',
  path: '/login',
  anchorable: true
});

export default pageNavigation;