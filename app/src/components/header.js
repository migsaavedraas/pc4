export default {    
    template: `
        <header>
            <div class="logo">LOGO</div>
            <h1>{{ title }}</h1>
        </header>
    `,
    props: {
        title: {
            type: String,
            required: true
        }
    },
    name: 'Header',
};
