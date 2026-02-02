<script>
    import Authors from "$lib/components/Authors.svelte";
    import * as tools_dict from '/src/data/tools.json';

    export let paper;

    $: relatedTools = tools_dict.default.filter(t => t.papers && t.papers.includes(paper.id));
</script>

{#if paper.status === "in progress"}
    <div id="{paper.id}" class="paper in-progress">
        {paper.title}
        {#if paper.source}
            <br /><em>{paper.source}</em>
        {/if}
    </div>
{:else}
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
        {#if relatedTools.length > 0}
            <br /><small class="related-tool">{#each relatedTools as tool, i}{#if i > 0}, {/if}{tool.type}: <a href={tool.link}>{tool.name}</a>{/each}</small>
        {/if}
    </div>
{/if}

<style>
    .paper {
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid #e6f2ff;
    }

    .paper.in-progress {
        border-bottom: none;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .award-badge {
        margin-left: 8px;
        font-weight: bold;
    }

    .related-tool {
        font-style: italic;
    }
</style>