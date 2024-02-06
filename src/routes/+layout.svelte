<script>
    import Header from '../components/header.svelte';
    import Footer from '../components/footer.svelte'
</script>

<Header />
<Header name="Daniil" age=20 /> 
<slot />
<Footer />