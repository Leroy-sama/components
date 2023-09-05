const app = Vue.createApp({
    data () {
        return {
            friends: [
                {
                    id: 'julie',
                    nombre: 'Julie Jones',
                    phone: '0754768907',
                    email: 'julie@localhost.com'
                }
            ]
        }
    }
})

app.component("friend-contact", {
  template: `
        <li>
            <h2>{{ friend.nombre }}</h2>
            <button @click="toggleDetails">{{ detailsVisible ? 'Hide' : 'Show' }} Details </button>
            <ul v-if="detailsVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        nombre: "Manuel Lorenz",
        phone: "001234 5678 991",
        email: "manuel@localhost.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});

app.mount("#app");