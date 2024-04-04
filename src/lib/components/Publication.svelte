<script>
    import Authors from "$lib/components/Authors.svelte";

    export let paper;
</script>

<div id="{paper.id}" class="paper">
    <small>
        <Authors {paper}/>
        ({paper.year})</small>
    <br />
    {#if paper.doi}
        <a href={paper.doi}>{paper.title}</a>
    {:else}
        <strong>{paper.title}</strong>
    {/if}
    <br /><small><em>{paper.source}</em></small>
    {#if paper.contribution}
        <span><br />
            <small>{paper.contribution}</small>
        </span>
    {/if}
</div>

<style>
    .paper {
        padding-bottom: 20px;
    }
</style>