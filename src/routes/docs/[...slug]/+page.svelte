<script>
    import {page} from "$app/stores";
    let arr = $page.params.slug.split('/');
    
    console.log(arr);
</script>

{#if arr.length===1}
<h1>Docs home page{arr[0]} one element go up</h1>
{:else if arr.length===2}
<h1>Docs home page{arr[0]} and {arr[1]}</h1>


{/if}