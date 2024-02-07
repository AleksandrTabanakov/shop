<script>
    import Header from '../components/header.svelte';
    import Footer from '$lib/footer.svelte'
</script>

<Header />
<Header name="Daniil" age=20 /> 
<slot />
<Footer />