<script>
    import Authors from "$lib/components/Authors.svelte";

    export let paper;
</script>

<div id="{paper.id}" class="paper">
    {#if paper.doi}
        <a href={paper.doi}>{paper.title}</a>
    {:else}
        <strong>{paper.title}</strong>
    {/if}
    <br />
    <small>
        <Authors {paper}/>
        ({paper.year})</small>
    <br /><small><em>{paper.source}</em>{#if paper.award}<span class="award-badge">
            {#if paper.award.toLowerCase().includes('best paper')}
                🏆
            {:else if paper.award.toLowerCase().includes('honorable mention')}
                🏅
            {/if}
            {paper.award}
        </span>{/if}</small>
    {#if paper.contribution}
        <span><br />
            <small>{paper.contribution}</small>
        </span>
    {/if}
</div>

<style>
    .paper {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e6f2ff;
    }

    .award-badge {
        margin-left: 8px;
        font-weight: bold;
    }
</style>